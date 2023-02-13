"use strict";
exports.id = 568;
exports.ids = [568];
exports.modules = {

/***/ 3568:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "jP": () => (/* binding */ getCategoryRecommendationPostsData),
/* harmony export */   "lV": () => (/* binding */ getCategoryPostsData),
/* harmony export */   "ld": () => (/* binding */ getSortedPostsData)
/* harmony export */ });
/* unused harmony export getAllPostIds */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7740);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1774);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4956);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__, remark__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__, remark__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function getCategoryPostsData(category) {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/posts");
    const posts = await res.data;
    return posts?.filter((post)=>post.category === category)?.slice(0, 30)?.map((post)=>{
        const reading_time = reading_time__WEBPACK_IMPORTED_MODULE_3___default()(post.body);
        return {
            id: post.postId,
            headerImage: post.headerImage,
            title: post.title,
            category: post.category,
            createdAt: post.createdAt,
            reading_time: reading_time.text
        };
    });
}
async function getCategoryRecommendationPostsData(category) {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/posts");
    const posts = await res.data;
    return posts?.filter((post)=>post.category === category)?.map((post)=>{
        const reading_time = reading_time__WEBPACK_IMPORTED_MODULE_3___default()(post.body);
        return {
            id: post.postId,
            headerImage: post.headerImage,
            title: post.title,
            category: post.category,
            createdAt: post.createdAt,
            reading_time: reading_time.text
        };
    });
}
async function getSortedPostsData() {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/posts");
    const posts = await res.data;
    return posts?.map((post)=>{
        const reading_time = reading_time__WEBPACK_IMPORTED_MODULE_3___default()(post.body);
        return {
            id: post.postId,
            headerImage: post.headerImage,
            title: post.title,
            category: post.category,
            createdAt: post.createdAt,
            reading_time: reading_time.text
        };
    });
}
async function getAllPostIds() {
    const res = await axios.get("/posts");
    const posts = await res.data;
    return posts?.map((post)=>{
        return {
            params: {
                id: post.postId
            }
        };
    });
}
async function getPostData(id) {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/post/${id}`);
    const post = await res.data;
    // Use remark to convert markdown into HTML string
    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_2__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__["default"]).process(post.body);
    const contentHtml = processedContent.toString();
    const reading_time = reading_time__WEBPACK_IMPORTED_MODULE_3___default()(post.body);
    return {
        id: post.postId,
        headerImage: post.headerImage,
        audioURL: post.audioURL,
        body: contentHtml,
        title: post.title,
        category: post.category,
        createdAt: post.createdAt,
        body_summary: post.body_summary,
        source: post.source,
        reading_time: reading_time.text
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;