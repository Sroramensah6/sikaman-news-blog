(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports auth, db, provider */
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const firebaseConfig = {
    apiKey: "AIzaSyDx7A-X7eUzXFqxqE8vjTez8xZV4aslQ7Q",
    authDomain: "denyigba-news.firebaseapp.com",
    projectId: "denyigba-news",
    storageBucket: "denyigba-news.appspot.com",
    messagingSenderId: "670328347792",
    appId: "1:670328347792:web:f34bfe7703d39ac9368c15",
    measurementId: "G-XP140B167Z"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);
const provider = new _firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3799:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ DataProvider)
/* harmony export */ });
/* unused harmony export DataContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8377);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();
const DataProvider = ({ children  })=>{
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    // useEffect(() => {
    //     const getUsers = async () => { 
    //         const querySnapshot = await getDocs(collection(db, 'users'))
    //         setUsers(querySnapshot.docs?.map(doc => {
    //             return {
    //                 id: doc.id,
    //                 data: {
    //                     ...doc.data()
    //                 }
    //             }
    //         }))
    //     }
    //     getUsers()
    // }, [])
    // useEffect(() => {
    //     async function getUsers() { 
    //         const querySnapshot = await getDocs(collection(db, 'posts'))
    //         setPosts(querySnapshot.docs.map(doc => {
    //             return {
    //                 id: doc.id,
    //                 data: {
    //                     body: doc.data().body,
    //                     title: doc.data().title,
    //                     source: doc.data().source,
    //                     author: doc.data().author,
    //                     audioURL: doc.data().audioURL,
    //                     category: doc.data().category,
    //                     createdAt: doc.data().createdAt,
    //                     likeCount: doc.data().likeCount,
    //                     userImage: doc.data().userImage,
    //                     userHandle: doc.data().userHandle,
    //                     headerImage: doc.data().headerImage,
    //                     commentCount: doc.data().commentCount,
    //                     body_summary: doc.data().body_summary,
    //                 }
    //             }
    //         }))
    //     }
    //     getUsers()
    // }, [])
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        async function getUsers() {
            axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/posts").then((res)=>{
                setPosts(res.data);
            }).catch((err)=>console.error);
        }
        getUsers();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DataContext.Provider, {
        value: {
            users,
            posts,
            comments
        },
        children: children
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8993);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3799);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1367);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_4__, _context__WEBPACK_IMPORTED_MODULE_5__, _store__WEBPACK_IMPORTED_MODULE_6__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_4__, _context__WEBPACK_IMPORTED_MODULE_5__, _store__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.baseURL = "https://us-central1-tinasrora.cloudfunctions.net/api";
function App({ Component , pageProps  }) {
    const setIsAnimating = (0,_store__WEBPACK_IMPORTED_MODULE_6__/* .useProgressStore */ .z)((state)=>state.setIsAnimating);
    const isAnimating = (0,_store__WEBPACK_IMPORTED_MODULE_6__/* .useProgressStore */ .z)((state)=>state.isAnimating);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleStart = ()=>{
            setIsAnimating(true);
        };
        const handleStop = ()=>{
            setIsAnimating(false);
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context__WEBPACK_IMPORTED_MODULE_5__/* .DataProvider */ .F, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Progress */ .Ex, {
                isAnimating: isAnimating
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* reexport safe */ _useProgressStore__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _useProgressStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useProgressStore__WEBPACK_IMPORTED_MODULE_0__]);
_useProgressStore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useProgressStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useProgressStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isAnimating: false,
        setIsAnimating: (isAnimating)=>set(()=>({
                    isAnimating
                }))
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 2135:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ 8456:
/***/ ((module) => {

"use strict";
module.exports = require("@tanem/react-nprogress");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 4195:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 8797:
/***/ ((module) => {

"use strict";
module.exports = require("next-share");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9389:
/***/ ((module) => {

"use strict";
module.exports = require("react-audio-player");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 8547:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/gr");

/***/ }),

/***/ 1111:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/hi");

/***/ }),

/***/ 4751:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io");

/***/ }),

/***/ 8098:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ri");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 61:
/***/ ((module) => {

"use strict";
module.exports = import("@firebase/auth");;

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,993], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();