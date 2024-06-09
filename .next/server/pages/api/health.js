"use strict";
(() => {
var exports = {};
exports.id = 837;
exports.ids = [837];
exports.modules = {

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 2629:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ genericApiHandler)
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(480);
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_api__WEBPACK_IMPORTED_MODULE_1__]);
_app_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
//
// imports
//


//
// route
//
async function genericApiHandler(req, res) {
    //
    // constants
    //
    const env = _app_constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].appEnv */ .Z.appEnv;
    let responseType = "info";
    let service;
    try {
        const options = {
            uri: "/health",
            params: {
                include: "database"
            }
        };
        service = await _app_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(options);
    } catch (error) {
        const status = error.service?.data?.statusCode || error.service?.status || error.statusCode || error.status || 500;
        const url = `${error.config?.baseURL || ""}${error.config?.url || ""}`;
        responseType = "error";
        service = {
            url,
            status,
            notFound: status === 404 || error.code === "ERR_NETWORK",
            message: error.message,
            ...error.service?.data || {}
        };
        if (service.extra && !Object.keys(service.extra).length) {
            service.extra = error.service?.extra || error.extra || {};
        }
    }
    res.status(200).json({
        environment: env,
        real_environment: "production",
        name: "restaurants-manager-web",
        description: "This WEB is a front-end responsible for table reservations in the different restaurants managed by the system.",
        version: "1.0.0",
        api: process.env.API_URL,
        [responseType]: {
            api: service
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(2629)));
module.exports = __webpack_exports__;

})();