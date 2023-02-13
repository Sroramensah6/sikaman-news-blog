"use strict";
(() => {
var exports = {};
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 5279:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "Le": () => (/* binding */ getAllPostIds)
/* harmony export */ });
/* unused harmony export getSortedPostsData */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7740);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1774);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4956);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark_html__WEBPACK_IMPORTED_MODULE_2__, remark__WEBPACK_IMPORTED_MODULE_3__]);
([remark_html__WEBPACK_IMPORTED_MODULE_2__, remark__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "posts");
function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b)=>{
        if (a.date < b.date) return 1;
        else return -1;
    });
}
function getAllPostIds() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    return fileNames.map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
}
async function getPostData(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(fileContents);
    // Use remark to convert markdown into HTML string
    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_2__["default"]).process(matterResult.content);
    const contentHtml = processedContent.toString();
    // Combine the data with the id and contentHtml
    const reading_time = reading_time__WEBPACK_IMPORTED_MODULE_5___default()(contentHtml);
    return {
        id,
        body: contentHtml,
        reading_time: reading_time.text,
        ...matterResult.data
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiafeTadodzinu),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8993);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9384);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3568);
/* harmony import */ var _lib_miafetadodzinu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5279);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, _components_layout__WEBPACK_IMPORTED_MODULE_3__, _lib_posts__WEBPACK_IMPORTED_MODULE_4__, _lib_miafetadodzinu__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, _components_layout__WEBPACK_IMPORTED_MODULE_3__, _lib_posts__WEBPACK_IMPORTED_MODULE_4__, _lib_miafetadodzinu__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const styles = {
    content: `flex`
};
async function getStaticPaths() {
    const paths = (0,_lib_miafetadodzinu__WEBPACK_IMPORTED_MODULE_5__/* .getAllPostIds */ .Le)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const postData = await (0,_lib_miafetadodzinu__WEBPACK_IMPORTED_MODULE_5__/* .getPostData */ .AU)(params.id);
    const allPostsData = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_4__/* .getSortedPostsData */ .ld)();
    return {
        props: {
            postData,
            allPostsData
        }
    };
}
function MiafeTadodzinu({ postData , allPostsData  }) {
    const origin = typeof document !== "undefined" && document.location.href ? document.location.href : "";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        siteTitle: "Miafe Tadodzinu",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: styles.content,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Article */ .d2, {
                    data: postData,
                    origin: origin
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Recommendations */ .VQ, {
                    data: allPostsData.slice(0, 5)
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2135:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ 8456:
/***/ ((module) => {

module.exports = require("@tanem/react-nprogress");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 8797:
/***/ ((module) => {

module.exports = require("next-share");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9389:
/***/ ((module) => {

module.exports = require("react-audio-player");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 8547:
/***/ ((module) => {

module.exports = require("react-icons/gr");

/***/ }),

/***/ 1111:
/***/ ((module) => {

module.exports = require("react-icons/hi");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,993,568], () => (__webpack_exec__(1577)));
module.exports = __webpack_exports__;

})();