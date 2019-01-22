!function(e){function t(t){for(var n,o,a=t[0],i=t[1],s=t[2],c=0,_=[];c<a.length;c++)o=a[c],I[o]&&_.push(I[o][0]),I[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(R&&R(t);_.length;)_.shift()();return x.push.apply(x,s||[]),r()}function r(){for(var e,t=0;t<x.length;t++){for(var r=x[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==I[a]&&(n=!1)}n&&(x.splice(t--,1),e=U(U.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!M[e]||!P[e])return;for(var r in P[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(m[r]=t[r]);0==--v&&0===y&&w()}(e,t),n&&n(e,t)};var o,a=!0,i="f5efc75d72fd639b80cf",s=1e4,c={},_=[],l=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:D,apply:k,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[e]};return o=void 0,t}var d=[],f="idle";function p(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,m,E,v=0,y=0,b={},P={},M={};function O(e){return+e+""===e?+e:e}function D(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,p("check"),(t=s,t=t||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=U.p+""+i+".hot-update.json";n.open("GET",o,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;P={},b={},M=e.c,E=e.h,p("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var r in m={},I)g(r);return"prepare"===f&&0===y&&0===v&&w(),t});var t}function g(e){M[e]?(P[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=U.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function w(){p("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return k(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&t.push(O(r));e.resolve(t)}}function k(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,n,o,a,s;function l(e){for(var t=[e],r={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var o=n.pop(),i=o.id,s=o.chain;if((a=C[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<a.parents.length;c++){var _=a.parents[c],l=C[_];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([_]),moduleId:i,parentId:_};-1===t.indexOf(_)&&(l.hot._acceptedDependencies[i]?(r[_]||(r[_]=[]),u(r[_],[i])):(delete r[_],t.push(_),n.push({chain:s.concat([_]),id:_})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var d={},h=[],v={},y=function(){console.warn("[HMR] unexpected require("+P.moduleId+") to disposed module")};for(var b in m)if(Object.prototype.hasOwnProperty.call(m,b)){var P;s=O(b);var D=!1,g=!1,w=!1,k="";switch((P=m[b]?l(s):{type:"disposed",moduleId:b}).chain&&(k="\nUpdate propagation: "+P.chain.join(" -> ")),P.type){case"self-declined":t.onDeclined&&t.onDeclined(P),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+P.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(P),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+P.moduleId+" in "+P.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(P),t.ignoreUnaccepted||(D=new Error("Aborted because "+s+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(P),g=!0;break;case"disposed":t.onDisposed&&t.onDisposed(P),w=!0;break;default:throw new Error("Unexception type "+P.type)}if(D)return p("abort"),Promise.reject(D);if(g)for(s in v[s]=m[s],u(h,P.outdatedModules),P.outdatedDependencies)Object.prototype.hasOwnProperty.call(P.outdatedDependencies,s)&&(d[s]||(d[s]=[]),u(d[s],P.outdatedDependencies[s]));w&&(u(h,[P.moduleId]),v[s]=y)}var x,j=[];for(n=0;n<h.length;n++)s=h[n],C[s]&&C[s].hot._selfAccepted&&j.push({module:s,errorHandler:C[s].hot._selfAccepted});p("dispose"),Object.keys(M).forEach(function(e){!1===M[e]&&function(e){delete I[e]}(e)});for(var A,T,R=h.slice();R.length>0;)if(s=R.pop(),a=C[s]){var L={},B=a.hot._disposeHandlers;for(o=0;o<B.length;o++)(r=B[o])(L);for(c[s]=L,a.hot.active=!1,delete C[s],delete d[s],o=0;o<a.children.length;o++){var H=C[a.children[o]];H&&((x=H.parents.indexOf(s))>=0&&H.parents.splice(x,1))}}for(s in d)if(Object.prototype.hasOwnProperty.call(d,s)&&(a=C[s]))for(T=d[s],o=0;o<T.length;o++)A=T[o],(x=a.children.indexOf(A))>=0&&a.children.splice(x,1);for(s in p("apply"),i=E,v)Object.prototype.hasOwnProperty.call(v,s)&&(e[s]=v[s]);var K=null;for(s in d)if(Object.prototype.hasOwnProperty.call(d,s)&&(a=C[s])){T=d[s];var W=[];for(n=0;n<T.length;n++)if(A=T[n],r=a.hot._acceptedDependencies[A]){if(-1!==W.indexOf(r))continue;W.push(r)}for(n=0;n<W.length;n++){r=W[n];try{r(T)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:T[n],error:e}),t.ignoreErrored||K||(K=e)}}}for(n=0;n<j.length;n++){var q=j[n];s=q.module,_=[s];try{U(s)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:r,originalError:e}),t.ignoreErrored||K||(K=r),K||(K=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||K||(K=e)}}return K?(p("fail"),Promise.reject(K)):(p("idle"),new Promise(function(e){e(h)}))}var C={},I={1:0},x=[];function U(t){if(C[t])return C[t].exports;var r=C[t]={i:t,l:!1,exports:{},hot:u(t),parents:(l=_,_=[],l),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=C[e];if(!t)return U;var r=function(r){return t.hot.active?(C[r]?-1===C[r].parents.indexOf(e)&&C[r].parents.push(e):(_=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),_=[]),U(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return U[e]},set:function(t){U[e]=t}}};for(var a in U)Object.prototype.hasOwnProperty.call(U,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===f&&p("prepare"),y++,U.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===f&&(b[e]||g(e),0===y&&0===v&&w())}},r.t=function(e,t){return 1&t&&(e=r(e)),U.t(e,-2&t)},r}(t)),r.l=!0,r.exports}U.m=e,U.c=C,U.d=function(e,t,r){U.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},U.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},U.t=function(e,t){if(1&t&&(e=U(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(U.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)U.d(r,n,function(t){return e[t]}.bind(null,n));return r},U.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return U.d(t,"a",t),t},U.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},U.p="/",U.h=function(){return i};var j=window.webpackJsonp=window.webpackJsonp||[],A=j.push.bind(j);j.push=t,j=j.slice();for(var T=0;T<j.length;T++)t(j[T]);var R=A;x.push([1069,0]),r()}({1069:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(5),i=r(12);Object(a.render)(o.a.createElement(i.a,null),document.getElementById("app"))},12:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_hot_loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react_hot_loader__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__),common_js_passepartout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),common_js_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),common_enums_colors__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),faker__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),faker__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_5__),uuid_v4__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),uuid_v4__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_6__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}enterModule=__webpack_require__(1).enterModule,enterModule&&enterModule(module);var RADIUS=1,HitboxExample=function(_Component){function HitboxExample(){var e,t;_classCallCheck(this,HitboxExample);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return _defineProperty(_assertThisInitialized(_assertThisInitialized(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(HitboxExample)).call.apply(e,[this].concat(n))))),"state",{elements:[],width:0,height:0,detectionTime:0,maxDetectionTime:0,personName:"N.A."}),_defineProperty(_assertThisInitialized(_assertThisInitialized(t)),"onMouseMove",function(e){var r=e.clientX-e.currentTarget.offsetLeft,n=e.clientY-e.currentTarget.offsetTop,o=t.findPersonAtPosition(r,n);"object"===_typeof(o)&&t.setState({personName:o.name})}),t}return _inherits(HitboxExample,_Component),_createClass(HitboxExample,[{key:"componentDidMount",value:function(){var e=this.canvasRef,t=e.width,r=e.height;this.canvasContext=this.canvasRef.getContext("2d"),this.passepartout=new common_js_passepartout__WEBPACK_IMPORTED_MODULE_2__.a(this.canvasContext),this.setState({width:t,height:r}),this.updateValues()}},{key:"findPersonAtPosition",value:function(e,t){var r=this,n=window.performance.now();this.state.elements.forEach(function(o){if(Math.sqrt(Math.pow(e-o.x,2)+Math.pow(t-o.y,2))<RADIUS){var a=window.performance.now(),i=Math.ceil(a-n);return r.setState(function(e){return{detectionTime:i,maxDetectionTime:Math.max(i,e.maxDetectionTime)}}),o}})}},{key:"updateValues",value:function(){for(var e=[],t=0;t<48e4;++t){var r=t%800,n=Math.floor(t/800);e.push({id:uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()(),x:r*RADIUS,y:n*RADIUS,color:common_enums_colors__WEBPACK_IMPORTED_MODULE_4__.a[Object(common_js_utils__WEBPACK_IMPORTED_MODULE_3__.b)(0,5)],name:faker__WEBPACK_IMPORTED_MODULE_5___default.a.name.findName()})}this.setState({elements:e},this.draw)}},{key:"draw",value:function(){var e=this;this.passepartout.clearCanvas(this.state.width,this.state.height),this.state.elements.forEach(function(t){return e.passepartout.drawSquare(t.x,t.y,RADIUS,t.color)})}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Catch me, if you can!"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas",{onMouseMove:this.onMouseMove,className:"example--canvas",ref:function(t){return e.canvasRef=t},width:"800",height:"600"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"statistics"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"statistics--item"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b",null,"Elements count:")," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,this.state.elements.length)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"statistics--item"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"Detecting box time:")," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,this.state.detectionTime)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"statistics--item"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"[Max] Detecting box time:")," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,this.state.maxDetectionTime)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"statistics--item"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,this.state.personName))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),HitboxExample}(react__WEBPACK_IMPORTED_MODULE_0__.Component),_default=Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__.hot)(module)(HitboxExample),reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(RADIUS,"RADIUS","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/components/Hit.js"),reactHotLoader.register(HitboxExample,"HitboxExample","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/components/Hit.js"),reactHotLoader.register(_default,"default","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/components/Hit.js"),leaveModule(module))}).call(this,__webpack_require__(2)(module))},3:function(e,t,r){"use strict";(function(e){var n,o,a;function i(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function s(){var e=Math.round(255*Math.random()),t=Math.round(255*Math.random()),r=Math.round(255*Math.random());return"rgb(".concat(e,",").concat(t,",").concat(r,")")}r.d(t,"b",function(){return i}),r.d(t,"a",function(){return s}),(n=r(1).enterModule)&&n(e),o=r(1).default,a=r(1).leaveModule,o&&(o.register(i,"getRandomInt","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/common/js/utils.js"),o.register(s,"getRandomColor","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/common/js/utils.js"),a(e))}).call(this,r(2)(e))},4:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return Passepartout});var stats_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),stats_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_0__),enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule=__webpack_require__(1).enterModule,enterModule&&enterModule(module);var stats=new stats_js__WEBPACK_IMPORTED_MODULE_0___default.a;stats.showPanel(0);var Passepartout=function(){function Passepartout(e){_classCallCheck(this,Passepartout),this.context=e}return _createClass(Passepartout,[{key:"clearCanvas",value:function(e,t,r){"string"!=typeof r?this.context.clearRect(0,0,e,t):(this.context.fillStyle=r,this.context.fillRect(0,0,e,t))}},{key:"drawSquare",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3?arguments[3]:void 0;this.context.fillStyle=n,this.context.fillRect(e,t,r,r)}},{key:"drawCircle",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3?arguments[3]:void 0;this.context.beginPath(),this.context.fillStyle=n,this.context.arc(e,t,r/2,0,2*Math.PI,!1),this.context.fill(),this.context.closePath()}},{key:"drawImage",value:function(e,t,r){var n=this,o=new Image;o.onload=function(){n.context.drawImage(o,t,r)},o.src=e}},{key:"startStats",value:function(e,t){return stats.dom.style.top="".concat(e.offsetTop+1,"px"),stats.dom.style.left="".concat(e.offsetLeft+1,"px"),t.appendChild(stats.dom),stats}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Passepartout}(),reactHotLoader,leaveModule;reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(stats,"stats","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/common/js/passepartout.js"),reactHotLoader.register(Passepartout,"Passepartout","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/common/js/passepartout.js"),leaveModule(module))}).call(this,__webpack_require__(2)(module))},6:function(e,t,r){"use strict";(function(e){var n;r.d(t,"b",function(){return l}),(n=r(1).enterModule)&&n(e);var o,a,i=getComputedStyle(document.body),s=i.getPropertyValue("--polar-night-1"),c=i.getPropertyValue("--polar-night-2"),_=i.getPropertyValue("--polar-night-3"),l=i.getPropertyValue("--polar-night-4"),u=["#BF6069","#A1BE89","#ECCB86","#7F9FC1","#B38CAD","#85BFD0"];t.a=u,o=r(1).default,a=r(1).leaveModule,o&&(o.register(i,"style","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/common/enums/colors.js"),o.register(s,"polar_night_1","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/common/enums/colors.js"),o.register(c,"polar_night_2","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/common/enums/colors.js"),o.register(_,"polar_night_3","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/common/enums/colors.js"),o.register(l,"polar_night_4","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/common/enums/colors.js"),o.register(u,"default","/Users/victor.fernandes/Documents/feedzai/repos/github/pushing-html-canvas-talk/src/common/enums/colors.js"),a(e))}).call(this,r(2)(e))}});
//# sourceMappingURL=hitbox.js.map