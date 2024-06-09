//
// imports
//
import { merge } from "lodash";
import constants from "@app/constants";
import { Api } from "./api";

//
// constants
//

// By default NODE_ENV is always used. But in applications built with react, said can only take 2 possible values (development or production)
// For this reason we support: APP_ENV or APP_NODE_ENV
const env = constants.appEnv;
const apiUrl = process.env.API_URL || "http://localhost:3030";
const debug = env !== "production";


// Define service timeout
const defaultOptions = {
  timeout: {
    // must be greater than requestTimeout
    connection: +(process.env.API_CONNECTION_TIMEOUT || 21000),
    request: +(process.env.API_REQUEST_TIMEOUT || 20000),
  },
};

const api = new Api(merge({}, defaultOptions, {
  health: process.env.API_HEALTH || "/health",
  responseType: "json",
  baseURL: apiUrl,
  name: env,
  debug,
}));

//
// export
//

export * from "./api";

export default api;
