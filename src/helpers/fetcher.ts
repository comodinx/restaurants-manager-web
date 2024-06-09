//
// imports
//
import { isObject, defaultsDeep } from "lodash";
import { storage } from "./storage";
import constants from "@app/constants";

//
// constants
//
const defaultBaseUrl = "/api";
const defaultOptions = {
  body: null,
  method: "GET",
  mode: "cors",
  headers: {
    accept: "*/*",
    "content-type": "application/json",
  },
};

//
// classes
//
class Api {
  //
  // public
  //

  async fetch(url, options = {}) {
    // First, prepare url and options for fetch function
    const opts = this.prepareOptions(options);
    const uri = this.prepareUrl(url, opts);

    // Clean unnecesary options
    delete opts.params;

    const res = await fetch(uri, opts);

    // Check if response with raw result
    if (opts.raw) {
      return res;
    }
    // Check if request failure
    else if (!res.ok) {
      const json = await res.json();
      const error: any = new Error(json.message || json.error);

      error.code = json.code;
      error.extra = json.extra;
      throw error;
    }
    // Request is success
    return res.json();
  }

  /**
   * Transform all http methods on service function
   *
   * service.get
   * service.post
   * service.put
   * service.patch
   * service.delete
   * service.options
   * service.head
   * service.connect
   * service.trace
   */

  get(url: string, options: any = {}) {
    options.method = "get";
    return this.fetch(url, options);
  }

  post(url: string, options: any = {}) {
    options.method = "post";
    return this.fetch(url, options);
  }

  put(url: string, options: any = {}) {
    options.method = "put";
    return this.fetch(url, options);
  }

  patch(url: string, options: any = {}) {
    options.method = "patch";
    return this.fetch(url, options);
  }

  del(url: string, options: any = {}) {
    options.method = "delete";
    return this.fetch(url, options);
  }

  opts(url: string, options: any = {}) {
    options.method = "options";
    return this.fetch(url, options);
  }

  head(url: string, options: any = {}) {
    options.method = "head";
    return this.fetch(url, options);
  }

  connect(url: string, options: any = {}) {
    options.method = "connect";
    return this.fetch(url, options);
  }

  trace(url: string, options: any = {}) {
    options.method = "trace";
    return this.fetch(url, options);
  }

  //
  // private
  //

  private prepareUrl(url: string, options: any = {}) {
    const isFullUrl = url.startsWith("http");

    // Check base url
    if (!isFullUrl) {
      url = `${defaultBaseUrl}${url}`;
    }

    // Transform string on Url object
    const uri = new URL(url, isFullUrl ? undefined : "http://localhost");

    // Set query parameters if necesary
    if (options.params) {
      Object.keys(options.params).forEach((key) =>
        uri.searchParams.append(key, options.params[key])
      );
    }

    // return url on string format
    return `${uri.pathname}${uri.search}`;
  }

  private prepareOptions(options: any = {}) {
    const env = storage.getSession("env", constants.appEnv);

    // Set body parameters if necesary
    if (options.body && isObject(options.body)) {
      options.body = JSON.stringify(options.body);
    }

    // Set body (json) parameters if necesary
    if (options.json && isObject(options.json)) {
      options.body = options.json;
    }

    // // Set headers parameters if necesary
    options.headers = options.headers || {};
    options.headers["x-laika-env"] = env;

    // Merge options with default options
    return defaultsDeep({}, options, defaultOptions);
  }
}

export const fetcher = new Api();
