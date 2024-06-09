"use strict";
exports.id = 152;
exports.ids = [152];
exports.modules = {

/***/ 534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


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
const renameMapKeys = {
    baseUrl: "baseURL",
    uri: "url",
    qs: "params",
    body: "data"
};
const defaultHeaders = {
    "x-restaurants-api-key": "6484769a31c45a95091cb2d2d0c0fef4de77ac87793093491f01ea182ce21234"
};
/**
 * Api based on axios
 */ class Api {
    //
    // public
    //
    constructor(options = {}){
        this.options = options;
        this.connectionTimeout = options.connectionTimeout || defaultConnectionTimeout;
        this.requestTimeout = options.requestTimeout || defaultRequestTimeout;
        this.r = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.options);
    }
    request(method, options = {}) {
        return new Promise((resolve, reject)=>{
            const opts = this.prepareOptions(method, options);
            return this.r.request(opts).then((res)=>resolve(opts.raw ? res : res.data)).catch((err)=>reject(err));
        });
    }
    prepareOptions(method, options) {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(options)) {
            options = {
                url: options
            };
        }
        // set default methods and headers
        options.method = method || "get";
        options.headers = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)({}, defaultHeaders, options.headers || {});
        // set request timeout
        options.timeout = options.timeout || this.requestTimeout;
        // set of connection timeout cancel token
        const source = axios__WEBPACK_IMPORTED_MODULE_1__["default"].CancelToken.source();
        const connectionTimeout = options.connectionTimeout || this.connectionTimeout;
        setTimeout(()=>source.cancel(), connectionTimeout);
        options.cancelToken = source.token;
        // @ts-ignore
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.mapKeys)(options, (value, key)=>renameMapKeys[key] || key);
    }
    health(options = {}) {
        options.url = options.url || options.uri || this.options.health || "/health";
        options.timeout = options.timeout || defaultHealthCheckTimeout;
        return this.get(options);
    }
    getOne(options = {}) {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(options)) {
            options = {
                url: options
            };
        }
        options = options || {};
        if (options.qs) {
            options.params = options.qs;
        }
        options.params = options.params || {};
        options.params.pageSize = 1;
        options.params.page = 1;
        return this.get(options).then((models)=>{
            models = models || [];
            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(models)) {
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
   */ get(options) {
        return this.request("get", options);
    }
    post(options) {
        return this.request("post", options);
    }
    put(options) {
        return this.request("put", options);
    }
    patch(options) {
        return this.request("patch", options);
    }
    del(options) {
        return this.request("delete", options);
    }
    opts(options) {
        return this.request("options", options);
    }
    head(options) {
        return this.request("head", options);
    }
    connect(options) {
        return this.request("connect", options);
    }
    trace(options) {
        return this.request("trace", options);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4152:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(480);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_2__]);
_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
//
// imports
//



//
// constants
//
// By default NODE_ENV is always used. But in applications built with react, said can only take 2 possible values (development or production)
// For this reason we support: APP_ENV or APP_NODE_ENV
const env = _app_constants__WEBPACK_IMPORTED_MODULE_1__/* ["default"].appEnv */ .Z.appEnv;
const apiUrl = process.env.API_URL || "http://localhost:3030";
const debug = env !== "production";
// Define service timeout
const defaultOptions = {
    timeout: {
        // must be greater than requestTimeout
        connection: +(process.env.API_CONNECTION_TIMEOUT || 21000),
        request: +(process.env.API_REQUEST_TIMEOUT || 20000)
    }
};
const api = new _api__WEBPACK_IMPORTED_MODULE_2__/* .Api */ .V((0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)({}, defaultOptions, {
    health: process.env.API_HEALTH || "/health",
    responseType: "json",
    baseURL: apiUrl,
    name: env,
    debug
}));
//
// export
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_constants)
});

// NAMESPACE OBJECT: ./src/constants/restaurants.ts
var restaurants_namespaceObject = {};
__webpack_require__.r(restaurants_namespaceObject);
__webpack_require__.d(restaurants_namespaceObject, {
  "restaurants": () => (restaurants)
});

// NAMESPACE OBJECT: ./src/constants/dates.ts
var dates_namespaceObject = {};
__webpack_require__.r(dates_namespaceObject);
__webpack_require__.d(dates_namespaceObject, {
  "formatReservationDate": () => (formatReservationDate),
  "formatReservationDateForHummands": () => (formatReservationDateForHummands)
});

// NAMESPACE OBJECT: ./src/constants/app.ts
var app_namespaceObject = {};
__webpack_require__.r(app_namespaceObject);
__webpack_require__.d(app_namespaceObject, {
  "name": () => (app_name),
  "version": () => (version)
});

// NAMESPACE OBJECT: ./src/constants/env.ts
var env_namespaceObject = {};
__webpack_require__.r(env_namespaceObject);
__webpack_require__.d(env_namespaceObject, {
  "appEnv": () => (appEnv),
  "env": () => (env),
  "isProd": () => (isProd)
});

;// CONCATENATED MODULE: ./src/constants/restaurants.ts
const restaurants = [
    {
        id: 1,
        title: "Salud",
        description: "Todo relacionado con la salud f\xedsica y el tratamiento de enfermedades en tu mascota. Incluye informaci\xf3n sobre s\xedntomas, tratamientos y cuidados m\xe9dicos.",
        icon: "ic-pet-health.svg"
    },
    {
        id: 2,
        title: "Cuidados",
        description: "Asuntos cotidianos y necesidades b\xe1sicas de tu mascota, como alimentaci\xf3n, higiene, desparasitaci\xf3n y vacunaci\xf3n. Proporciona orientaci\xf3n para el cuidado general.",
        icon: "ic-pet-grooming.svg"
    },
    {
        id: 3,
        title: "Conducta",
        description: "Enfoque en el comportamiento, la socializaci\xf3n y la interacci\xf3n de tu mascota. Incluye temas como adaptaci\xf3n, convivencia con otras mascotas y adiestramiento b\xe1sico.",
        icon: "ic-pet-walking.svg"
    }
];

;// CONCATENATED MODULE: ./src/constants/dates.ts
/**
 * Variable used for format reservation dates
 */ const formatReservationDate = "YYYY-MM-DD";
/**
 * Variable used for format reservation dates for hummands
 */ const formatReservationDateForHummands = "dddd DD [de] MMMM [del] YYYY";

;// CONCATENATED MODULE: ./src/constants/app.ts
/**
 * Variable used for logs, health check, etc
 */ const app_name = "restaurants-manager-web" || 0;
/**
 * Variable used for logs, health check, etc
 */ const version = "1.0.0" || 0;

;// CONCATENATED MODULE: ./src/constants/env.ts
/**
 * Current environment
 */ const env = "production" || 0 || 0 || 0;
/**
 * Current app environment
 */ const appEnv = process.env.APP_NODE_ENV || "development" || 0;
/**
 * Flag for indicate if the application is running on production mode
 */ const isProd = [
    "prod",
    "production"
].includes(String(env).toLowerCase());

;// CONCATENATED MODULE: ./src/constants/index.ts




const constants = {
    ...env_namespaceObject,
    restaurants: restaurants_namespaceObject,
    dates: dates_namespaceObject,
    app: app_namespaceObject
};
/* harmony default export */ const src_constants = (constants);


/***/ })

};
;