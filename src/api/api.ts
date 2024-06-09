import { isString, isArray, merge, mapKeys } from "lodash";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

//
// constants
//

// default service agent
// const defaultServiceAgent = process.env.SERVICE_AGENT || "";

// must be greater than requestTimeout
const defaultHealthCheckTimeout = +(process.env.SERVICE_HEALTH_CHECK_TIMEOUT || 5000);
const defaultConnectionTimeout = +(process.env.SERVICE_CONNECTION_TIMEOUT || 21000);
const defaultRequestTimeout = +(process.env.SERVICE_REQUEST_TIMEOUT || 20000);

//
// variables
//
const renameMapKeys: any = {
  baseUrl: "baseURL",
  uri: "url",
  qs: "params",
  body: "data",
};
const defaultHeaders: any = {
  "x-restaurants-api-key": "6484769a31c45a95091cb2d2d0c0fef4de77ac87793093491f01ea182ce21234",
};

/**
 * Api based on axios
 */
export class Api {
  //
  // private
  //

  private options: any;
  private connectionTimeout: number;
  private requestTimeout: number;
  private r: AxiosInstance;

  //
  // public
  //

  constructor(options: any = {}) {
    this.options = options;
    this.connectionTimeout = options.connectionTimeout || defaultConnectionTimeout;
    this.requestTimeout = options.requestTimeout || defaultRequestTimeout;
    this.r = axios.create(this.options as AxiosRequestConfig);
  }

  request(method: string, options: any = {}) {
    return new Promise((resolve, reject) => {
      const opts = this.prepareOptions(method, options);

      return this.r
        .request(opts)
        .then((res) => resolve(opts.raw ? res : res.data))
        .catch((err) => reject(err));
    });
  }

  prepareOptions(method: string, options: any) {
    if (isString(options)) {
      options = {
        url: options,
      };
    }

    // set default methods and headers
    options.method = method || "get";
    options.headers = merge({}, defaultHeaders, options.headers || {});

    // set request timeout
    options.timeout = options.timeout || this.requestTimeout;

    // set of connection timeout cancel token
    const source = axios.CancelToken.source();
    const connectionTimeout = options.connectionTimeout || this.connectionTimeout;
    setTimeout(() => source.cancel(), connectionTimeout);
    options.cancelToken = source.token;

    // @ts-ignore
    return mapKeys(options, (value: any, key: string) => renameMapKeys[key] || key) as any;
  }

  health(options: any = {}) {
    options.url = options.url || options.uri || this.options.health || "/health";
    options.timeout = options.timeout || defaultHealthCheckTimeout;
    return this.get(options);
  }

  getOne(options: any = {}) {
    if (isString(options)) {
      options = {
        url: options,
      };
    }

    options = options || {};

    if (options.qs) {
      options.params = options.qs;
    }

    options.params = options.params || {};
    options.params.pageSize = 1;
    options.params.page = 1;

    return this.get(options).then((models) => {
      models = models || [];

      if (!isArray(models)) {
        return models;
      }
      return models[0];
    });
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

  get(options: any) {
    return this.request("get", options);
  }

  post(options: any) {
    return this.request("post", options);
  }

  put(options: any) {
    return this.request("put", options);
  }

  patch(options: any) {
    return this.request("patch", options);
  }

  del(options: any) {
    return this.request("delete", options);
  }

  opts(options: any) {
    return this.request("options", options);
  }

  head(options: any) {
    return this.request("head", options);
  }

  connect(options: any) {
    return this.request("connect", options);
  }

  trace(options: any) {
    return this.request("trace", options);
  }
}
