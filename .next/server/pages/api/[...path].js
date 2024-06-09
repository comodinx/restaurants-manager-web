"use strict";
(() => {
var exports = {};
exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ genericApiHandler)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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
    const { path  } = req.query;
    const uri = `/${Array.isArray(path) ? path.join("/") : path}`;
    let response;
    try {
        const options = {
            uri,
            params: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(req.query, [
                "path"
            ]),
            data: req.body
        };
        response = await _app_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z[(req.method || "get").toLowerCase()](options);
        return res.status(200).json(response);
    } catch (error) {
        const status = error.response?.data?.statusCode || error.response?.status || error.statusCode || error.status || 500;
        response = {
            status,
            notFound: status === 404 || error.code === "ERR_NETWORK",
            message: error.message,
            ...error.response?.data || {}
        };
        if (response.extra && !Object.keys(response.extra).length) {
            response.extra = error.response?.extra || error.extra || {};
        }
        return res.status(status).json(response);
    }
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
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(9358)));
module.exports = __webpack_exports__;

})();