var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function O(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=ee,D=function(){ne.postMessage(null)}}else D=function(){_(ee,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.0`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var O=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function j(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function M(e,t){le++,ce[le]=e.current,e.current=t}var de=ue(null),fe=ue(null),pe=ue(null),me=ue(null);function he(e,t){switch(M(pe,t),M(fe,e),M(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?nf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=nf(t),e=rf(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}j(de),M(de,e)}function ge(){j(de),j(fe),j(pe)}function _e(e){e.memoizedState!==null&&M(me,e);var t=de.current,n=rf(t,e.type);t!==n&&(M(fe,e),M(de,n))}function ve(e){fe.current===e&&(j(de),j(fe)),me.current===e&&(j(me),mp._currentValue=se)}var ye,be;function xe(e){if(ye===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ye+e+be}var Se=!1;function Ce(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function we(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return xe(`Activity`);default:return``}}function Te(e){try{var t=``,n=null;do t+=we(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,N=t.unstable_now,je=t.unstable_getCurrentPriorityLevel,Me=t.unstable_ImmediatePriority,Ne=t.unstable_UserBlockingPriority,Pe=t.unstable_NormalPriority,Fe=t.unstable_LowPriority,Ie=t.unstable_IdlePriority,Le=t.log,Re=t.unstable_setDisableYieldValue,ze=null,Be=null;function Ve(e){if(typeof Le==`function`&&Re(e),Be&&typeof Be.setStrictMode==`function`)try{Be.setStrictMode(ze,e)}catch{}}var He=Math.clz32?Math.clz32:Ge,Ue=Math.log,We=Math.LN2;function Ge(e){return e>>>=0,e===0?32:31-(Ue(e)/We|0)|0}var Ke=256,qe=262144,Je=4194304;function Ye(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ye(n))):i=Ye(o):i=Ye(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ye(n))):i=Ye(o)):i=Ye(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ze(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var e=Je;return Je<<=1,!(Je&62914560)&&(Je=4194304),e}function et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-He(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&rt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function rt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-He(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function it(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function at(e,t){var n=t&-t;return n=n&42?1:ot(n),(n&(e.suspendedLanes|t))===0?n:0}function ot(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ct(){var e=A.p;return e===0?(e=window.event,e===void 0?32:Ap(e.type)):e}function lt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ut=Math.random().toString(36).slice(2),P=`__reactFiber$`+ut,F=`__reactProps$`+ut,dt=`__reactContainer$`+ut,ft=`__reactEvents$`+ut,pt=`__reactListeners$`+ut,mt=`__reactHandles$`+ut,ht=`__reactResources$`+ut,gt=`__reactMarker$`+ut;function _t(e){delete e[P],delete e[F],delete e[ft],delete e[pt],delete e[mt]}function vt(e){var t=e[P];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[P]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Df(e);e!==null;){if(n=e[P])return n;e=Df(e)}return t}e=n,n=e.parentNode}return null}function yt(e){if(e=e[P]||e[dt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function xt(e){var t=e[ht];return t||=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map},t}function St(e){e[gt]=!0}var Ct=new Set,wt={};function Tt(e,t){I(e,t),I(e+`Capture`,t)}function I(e,t){for(wt[e]=t,e=0;e<t.length;e++)Ct.add(t[e])}var Et=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Dt={},Ot={};function kt(e){return Ee.call(Ot,e)?!0:Ee.call(Dt,e)?!1:Et.test(e)?Ot[e]=!0:(Dt[e]=!0,!1)}function At(e,t,n){if(kt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function jt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function L(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function R(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Mt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Nt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pt(e){if(!e._valueTracker){var t=Mt(e)?`checked`:`value`;e._valueTracker=Nt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Mt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+R(t)):e.value!==``+R(t)&&(e.value=``+R(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Vt(e,o,R(n)):Vt(e,o,R(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+R(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Pt(e);return}n=n==null?``:``+R(n),t=t==null?n:``+R(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Pt(e)}function Vt(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+R(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ut(e,t,n){if(t!=null&&(t=``+R(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+R(n)}function Wt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(O(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=R(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Pt(e)}function Gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Kt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Jt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&qt(e,o,t[o])}function Yt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function z(){}var $t=null;function en(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tn=null,nn=null;function rn(e){var t=yt(e);if(t&&(e=t.stateNode)){var n=e[F]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[F]||null;if(!a)throw Error(i(90));zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ut(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}}}var an=!1;function on(e,t,n){if(an)return e(t,n);an=!0;try{return e(t)}finally{if(an=!1,(tn!==null||nn!==null)&&(Nu(),tn&&(t=tn,e=nn,nn=tn=null,rn(t),e)))for(t=0;t<e.length;t++)rn(e[t])}}function sn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[F]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var cn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),ln=!1;if(cn)try{var un={};Object.defineProperty(un,`passive`,{get:function(){ln=!0}}),window.addEventListener(`test`,un,un),window.removeEventListener(`test`,un,un)}catch{ln=!1}var dn=null,fn=null,pn=null;function mn(){if(pn)return pn;var e,t=fn,n=t.length,r,i=`value`in dn?dn.value:dn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return pn=i.slice(e,1<r?1-r:void 0)}function hn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gn(){return!0}function _n(){return!1}function vn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?gn:_n,this.isPropagationStopped=_n,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bn=vn(yn),xn=h({},yn,{view:0,detail:0}),Sn=vn(xn),Cn,wn,Tn,En=h({},xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Tn&&(Tn&&e.type===`mousemove`?(Cn=e.screenX-Tn.screenX,wn=e.screenY-Tn.screenY):wn=Cn=0,Tn=e),Cn)},movementY:function(e){return`movementY`in e?e.movementY:wn}}),Dn=vn(En),On=h({},En,{dataTransfer:0}),kn=vn(On),An=h({},xn,{relatedTarget:0}),jn=vn(An),Mn=h({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nn=vn(Mn),Pn=h({},yn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}}),Fn=vn(Pn),In=h({},yn,{data:0}),Ln=vn(In),Rn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Bn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Vn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bn[e])?!!t[e]:!1}function Hn(){return Vn}var Un=h({},xn,{key:function(e){if(e.key){var t=Rn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=hn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(e){return e.type===`keypress`?hn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?hn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}}),Wn=vn(Un),Gn=h({},En,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kn=vn(Gn),qn=h({},xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn}),Jn=vn(qn),Yn=h({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xn=vn(Yn),Zn=h({},En,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qn=vn(Zn),$n=h({},yn,{newState:0,oldState:0}),er=vn($n),tr=[9,13,27,32],nr=cn&&`CompositionEvent`in window,rr=null;cn&&`documentMode`in document&&(rr=document.documentMode);var ir=cn&&`TextEvent`in window&&!rr,ar=cn&&(!nr||rr&&8<rr&&11>=rr),or=` `,sr=!1;function cr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function lr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ur=!1;function dr(e,t){switch(e){case`compositionend`:return lr(t);case`keypress`:return t.which===32?(sr=!0,or):null;case`textInput`:return e=t.data,e===or&&sr?null:e;default:return null}}function fr(e,t){if(ur)return e===`compositionend`||!nr&&cr(e,t)?(e=mn(),pn=fn=dn=null,ur=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ar&&t.locale!==`ko`?null:t.data;default:return null}}var pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!pr[e.type]:t===`textarea`}function hr(e,t,n,r){tn?nn?nn.push(r):nn=[r]:tn=r,t=Vd(t,`onChange`),0<t.length&&(n=new bn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var gr=null,_r=null;function vr(e){Pd(e,0)}function yr(e){var t=bt(e);if(Ft(t))return e}function br(e,t){if(e===`change`)return t}var xr=!1;if(cn){var Sr;if(cn){var Cr=`oninput`in document;if(!Cr){var wr=document.createElement(`div`);wr.setAttribute(`oninput`,`return;`),Cr=typeof wr.oninput==`function`}Sr=Cr}else Sr=!1;xr=Sr&&(!document.documentMode||9<document.documentMode)}function Tr(){gr&&(gr.detachEvent(`onpropertychange`,Er),_r=gr=null)}function Er(e){if(e.propertyName===`value`&&yr(_r)){var t=[];hr(t,_r,e,en(e)),on(vr,t)}}function Dr(e,t,n){e===`focusin`?(Tr(),gr=t,_r=n,gr.attachEvent(`onpropertychange`,Er)):e===`focusout`&&Tr()}function Or(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return yr(_r)}function kr(e,t){if(e===`click`)return yr(t)}function Ar(e,t){if(e===`input`||e===`change`)return yr(t)}function jr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Mr=typeof Object.is==`function`?Object.is:jr;function Nr(e,t){if(Mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!Mr(e[i],t[i]))return!1}return!0}function Pr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var n=Pr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Pr(n)}}function Ir(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ir(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var zr=cn&&`documentMode`in document&&11>=document.documentMode,Br=null,Vr=null,Hr=null,Ur=!1;function Wr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ur||Br==null||Br!==It(r)||(r=Br,`selectionStart`in r&&Rr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Nr(Hr,r)||(Hr=r,r=Vd(Vr,`onSelect`),0<r.length&&(t=new bn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Kr={animationend:Gr(`Animation`,`AnimationEnd`),animationiteration:Gr(`Animation`,`AnimationIteration`),animationstart:Gr(`Animation`,`AnimationStart`),transitionrun:Gr(`Transition`,`TransitionRun`),transitionstart:Gr(`Transition`,`TransitionStart`),transitioncancel:Gr(`Transition`,`TransitionCancel`),transitionend:Gr(`Transition`,`TransitionEnd`)},qr={},Jr={};cn&&(Jr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),`TransitionEvent`in window||delete Kr.transitionend.transition);function Yr(e){if(qr[e])return qr[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jr)return qr[e]=t[n];return e}var Xr=Yr(`animationend`),Zr=Yr(`animationiteration`),Qr=Yr(`animationstart`),$r=Yr(`transitionrun`),ei=Yr(`transitionstart`),ti=Yr(`transitioncancel`),ni=Yr(`transitionend`),ri=new Map,ii=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ii.push(`scrollEnd`);function ai(e,t){ri.set(e,t),Tt(t,[e])}var oi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},si=[],ci=0,li=0;function ui(){for(var e=ci,t=li=ci=0;t<e;){var n=si[t];si[t++]=null;var r=si[t];si[t++]=null;var i=si[t];si[t++]=null;var a=si[t];if(si[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&mi(n,i,a)}}function di(e,t,n,r){si[ci++]=e,si[ci++]=t,si[ci++]=n,si[ci++]=r,li|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function fi(e,t,n,r){return di(e,t,n,r),hi(e)}function pi(e,t){return di(e,null,null,t),hi(e)}function mi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-He(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function hi(e){if(50<wu)throw wu=0,Tu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gi={};function _i(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(e,t,n,r){return new _i(e,t,n,r)}function yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bi(e,t){var n=e.alternate;return n===null?(n=vi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function xi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Si(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)yi(e)&&(s=1);else if(typeof e==`string`)s=ap(e,n,de.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=vi(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return Ci(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=vi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=vi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=vi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=vi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ci(e,t,n,r){return e=vi(7,e,r,t),e.lanes=n,e}function wi(e,t,n){return e=vi(6,e,null,t),e.lanes=n,e}function Ti(e){var t=vi(18,null,null,0);return t.stateNode=e,t}function Ei(e,t,n){return t=vi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Di=new WeakMap;function Oi(e,t){if(typeof e==`object`&&e){var n=Di.get(e);return n===void 0?(t={value:e,source:t,stack:Te(t)},Di.set(e,t),t):n}return{value:e,source:t,stack:Te(t)}}var ki=[],Ai=0,ji=null,Mi=0,Ni=[],Pi=0,Fi=null,Ii=1,Li=``;function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=ji,ji=e,Mi=t}function zi(e,t,n){Ni[Pi++]=Ii,Ni[Pi++]=Li,Ni[Pi++]=Fi,Fi=e;var r=Ii;e=Li;var i=32-He(r)-1;r&=~(1<<i),n+=1;var a=32-He(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ii=1<<32-He(t)+i|n<<i|r,Li=a+e}else Ii=1<<a|n<<i|r,Li=e}function Bi(e){e.return!==null&&(Ri(e,1),zi(e,1,0))}function Vi(e){for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null;for(;e===Fi;)Fi=Ni[--Pi],Ni[Pi]=null,Li=Ni[--Pi],Ni[Pi]=null,Ii=Ni[--Pi],Ni[Pi]=null}function Hi(e,t){Ni[Pi++]=Ii,Ni[Pi++]=Li,Ni[Pi++]=Fi,Ii=t.id,Li=t.overflow,Fi=e}var Ui=null,B=null,V=!1,Wi=null,Gi=!1,Ki=Error(i(519));function qi(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``));throw $i(Oi(t,e)),Ki}function Ji(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[P]=e,t[F]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<Md.length;n++)Q(Md[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Wt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||qd(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=z),t=!0):t=!1,t||qi(e,!0)}function Yi(e){for(Ui=e.return;Ui;)switch(Ui.tag){case 5:case 31:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:Ui=Ui.return}}function Xi(e){if(e!==Ui)return!1;if(!V)return Yi(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||af(e.type,e.memoizedProps)),n=!n),n&&B&&qi(e),Yi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=Ef(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=Ef(e)}else t===27?(t=B,mf(e.type)?(e=Tf,Tf=null,B=e):B=t):B=Ui?wf(e.stateNode.nextSibling):null;return!0}function Zi(){B=Ui=null,V=!1}function Qi(){var e=Wi;return e!==null&&(uu===null?uu=e:uu.push.apply(uu,e),Wi=null),e}function $i(e){Wi===null?Wi=[e]:Wi.push(e)}var ea=ue(null),ta=null,na=null;function ra(e,t,n){M(ea,t._currentValue),t._currentValue=n}function ia(e){e._currentValue=ea.current,j(ea)}function aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function oa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),aa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),aa(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function sa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Mr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[mp]:e.push(mp))}a=a.return}e!==null&&oa(t,e,n,r),t.flags|=262144}function ca(e){for(e=e.firstContext;e!==null;){if(!Mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function la(e){ta=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ua(e){return fa(ta,e)}function da(e,t){return ta===null&&la(e),fa(e,t)}function fa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},na===null){if(e===null)throw Error(i(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return n}var pa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ma=t.unstable_scheduleCallback,ha=t.unstable_NormalPriority,H={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ga(){return{controller:new pa,data:new Map,refCount:0}}function _a(e){e.refCount--,e.refCount===0&&ma(ha,function(){e.controller.abort()})}var va=null,ya=0,ba=0,xa=null;function Sa(e,t){if(va===null){var n=va=[];ya=0,ba=wd(),xa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ya++,t.then(Ca,Ca),t}function Ca(){if(--ya===0&&va!==null){xa!==null&&(xa.status=`fulfilled`);var e=va;va=null,ba=0,xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function wa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ta=k.S;k.S=function(e,t){pu=N(),typeof t==`object`&&t&&typeof t.then==`function`&&Sa(e,t),Ta!==null&&Ta(e,t)};var Ea=ue(null);function Da(){var e=Ea.current;return e===null?q.pooledCache:e}function Oa(e,t){t===null?M(Ea,Ea.current):M(Ea,t.pool)}function ka(){var e=Da();return e===null?null:{parent:H._currentValue,pool:e}}var Aa=Error(i(460)),ja=Error(i(474)),Ma=Error(i(542)),Na={then:function(){}};function Pa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Fa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(z,z),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,za(e),e;default:if(typeof t.status==`string`)t.then(z,z);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,za(e),e}throw La=t,Aa}}function Ia(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(La=e,Aa):e}}var La=null;function Ra(){if(La===null)throw Error(i(459));var e=La;return La=null,e}function za(e){if(e===Aa||e===Ma)throw Error(i(483))}var Ba=null,Va=0;function Ha(e){var t=Va;return Va+=1,Ba===null&&(Ba=[]),Fa(Ba,e,t)}function Ua(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Wa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ga(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=bi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Ia(i)===t.type)?(t=a(t,n.props),Ua(t,n),t.return=e,t):(t=Si(n.type,n.key,n.props,null,e.mode,r),Ua(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ei(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ci(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=wi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=Si(t.type,t.key,t.props,null,e.mode,n),Ua(n,t),n.return=e,n;case v:return t=Ei(t,e.mode,n),t.return=e,t;case D:return t=Ia(t),f(e,t,n)}if(O(t)||ie(t))return t=Ci(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ha(t),n);if(t.$$typeof===C)return f(e,da(e,t),n);Wa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Ia(n),p(e,t,n,r)}if(O(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ha(n),r);if(n.$$typeof===C)return p(e,t,da(e,n),r);Wa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Ia(r),m(e,t,n,r,i)}if(O(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ha(r),i);if(r.$$typeof===C)return m(e,t,n,da(t,r),i);Wa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Ri(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Ri(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Ri(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Ri(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Ri(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Ri(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Ia(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ua(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Ci(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=Si(o.type,o.key,o.props,null,e.mode,c),Ua(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ei(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Ia(o),b(e,r,o,c)}if(O(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ha(o),c);if(o.$$typeof===C)return b(e,r,da(e,o),c);Wa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=wi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Va=0;var i=b(e,t,n,r);return Ba=null,i}catch(t){if(t===Aa||t===Ma)throw t;var a=vi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ka=Ga(!0),qa=Ga(!1),Ja=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=hi(e),mi(e,null,n),t}return di(e,r,t,n),hi(e)}function $a(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}function eo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var to=!1;function no(){if(to){var e=xa;if(e!==null)throw e}}function ro(e,t,n,r){to=!1;var i=e.updateQueue;Ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ba&&(to=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ja=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),iu|=o,e.lanes=o,e.memoizedState=d}}function io(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ao(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)io(n[e],t)}var oo=ue(null),so=ue(0);function co(e,t){e=nu,M(so,e),M(oo,t),nu=e|t.baseLanes}function lo(){M(so,nu),M(oo,oo.current)}function uo(){nu=so.current,j(oo),j(so)}var fo=ue(null),po=null;function mo(e){var t=e.alternate;M(yo,yo.current&1),M(fo,e),po===null&&(t===null||oo.current!==null||t.memoizedState!==null)&&(po=e)}function ho(e){M(yo,yo.current),M(fo,e),po===null&&(po=e)}function go(e){e.tag===22?(M(yo,yo.current),M(fo,e),po===null&&(po=e)):_o(e)}function _o(){M(yo,yo.current),M(fo,fo.current)}function vo(e){j(fo),po===e&&(po=null),j(yo)}var yo=ue(0);function bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||xf(n)||Sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xo=0,U=null,W=null,So=null,Co=!1,wo=!1,To=!1,Eo=0,Do=0,Oo=null,ko=0;function Ao(){throw Error(i(321))}function jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mr(e[n],t[n]))return!1;return!0}function Mo(e,t,n,r,i,a){return xo=a,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Zs:Qs,To=!1,a=n(r,i),To=!1,wo&&(a=Po(t,n,r,i)),No(e),a}function No(e){k.H=Xs;var t=W!==null&&W.next!==null;if(xo=0,So=W=U=null,Co=!1,Do=0,Oo=null,t)throw Error(i(300));e===null||hc||(e=e.dependencies,e!==null&&ca(e)&&(hc=!0))}function Po(e,t,n,r){U=e;var a=0;do{if(wo&&(Oo=null),Do=0,wo=!1,25<=a)throw Error(i(301));if(a+=1,So=W=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=$s,o=t(n,r)}while(wo);return o}function Fo(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?Ho(t):t,e=e.useState()[0],(W===null?null:W.memoizedState)!==e&&(U.flags|=1024),t}function Io(){var e=Eo!==0;return Eo=0,e}function Lo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ro(e){if(Co){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Co=!1}xo=0,So=W=U=null,wo=!1,Do=Eo=0,Oo=null}function zo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return So===null?U.memoizedState=So=e:So=So.next=e,So}function Bo(){if(W===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=W.next;var t=So===null?U.memoizedState:So.next;if(t!==null)So=t,W=e;else{if(e===null)throw U.alternate===null?Error(i(467)):Error(i(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},So===null?U.memoizedState=So=e:So=So.next=e}return So}function Vo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ho(e){var t=Do;return Do+=1,Oo===null&&(Oo=[]),e=Fa(Oo,e,t),t=U,(So===null?t.memoizedState:So.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Zs:Qs),e}function Uo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ho(e);if(e.$$typeof===C)return ua(e)}throw Error(i(438,String(e)))}function Wo(e){var t=null,n=U.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=U.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Vo(),U.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Go(e,t){return typeof t==`function`?t(e):t}function Ko(e){var t=Bo();return qo(t,W,e)}function qo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(xo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ba&&(d=!0);else if((xo&p)===p){u=u.next,p===ba&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,U.lanes|=p,iu|=p;f=u.action,To&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,U.lanes|=f,iu|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Mr(o,e.memoizedState)&&(hc=!0,d&&(n=xa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Jo(e){var t=Bo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Mr(o,t.memoizedState)||(hc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Yo(e,t,n){var r=U,a=Bo(),o=V;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Mr((W||a).memoizedState,n);if(s&&(a.memoizedState=n,hc=!0),a=a.queue,Ss(Qo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||So!==null&&So.memoizedState.tag&1){if(r.flags|=2048,_s(9,{destroy:void 0},Zo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||xo&127||Xo(r,t,n)}return n}function Xo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t=Vo(),U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zo(e,t,n,r){t.value=n,t.getSnapshot=r,$o(t)&&es(e)}function Qo(e,t,n){return n(function(){$o(t)&&es(e)})}function $o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mr(e,n)}catch{return!0}}function es(e){var t=pi(e,2);t!==null&&Ou(t,e,2)}function ts(e){var t=zo();if(typeof e==`function`){var n=e;if(e=n(),To){Ve(!0);try{n()}finally{Ve(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e},t}function ns(e,t,n,r){return e.baseState=n,qo(e,W,typeof r==`function`?r:Go)}function rs(e,t,n,r,a){if(qs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,os(t,o)):(o.next=n.next,t.pending=n.next=o)}}function os(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),ss(e,t,s)}catch(n){ls(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),ss(e,t,a)}catch(n){ls(e,t,n)}}function ss(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){cs(e,t,n)},function(n){return ls(e,t,n)}):cs(e,t,n)}function cs(e,t,n){t.status=`fulfilled`,t.value=n,us(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,os(e,n)))}function ls(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,us(t),t=t.next;while(t!==r)}e.action=null}function us(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ds(e,t){return t}function fs(e,t){if(V){var n=q.formState;if(n!==null){a:{var r=U;if(V){if(B){b:{for(var i=B,a=Gi;i.nodeType!==8;){if(!a){i=null;break b}if(i=wf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){B=wf(i.nextSibling),r=i.data===`F!`;break a}}qi(r)}r=!1}r&&(t=n[0])}}return n=zo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:t},n.queue=r,n=Ws.bind(null,U,r),r.dispatch=n,r=ts(!1),a=Ks.bind(null,U,!1,r.queue),r=zo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=rs.bind(null,U,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ps(e){var t=Bo();return ms(t,W,e)}function ms(e,t,n){if(t=qo(e,t,ds)[0],e=Ko(Go)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ho(t)}catch(e){throw e===Aa?Ma:e}else r=t;t=Bo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(U.flags|=2048,_s(9,{destroy:void 0},hs.bind(null,i,n),null)),[r,a,e]}function hs(e,t){e.action=t}function gs(e){var t=Bo(),n=W;if(n!==null)return ms(t,n,e);Bo(),t=t.memoizedState,n=Bo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function _s(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=U.updateQueue,t===null&&(t=Vo(),U.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function vs(){return Bo().memoizedState}function ys(e,t,n,r){var i=zo();U.flags|=e,i.memoizedState=_s(1|t,{destroy:void 0},n,r===void 0?null:r)}function bs(e,t,n,r){var i=Bo();r=r===void 0?null:r;var a=i.memoizedState.inst;W!==null&&r!==null&&jo(r,W.memoizedState.deps)?i.memoizedState=_s(t,a,n,r):(U.flags|=e,i.memoizedState=_s(1|t,a,n,r))}function xs(e,t){ys(8390656,8,e,t)}function Ss(e,t){bs(2048,8,e,t)}function Cs(e){U.flags|=4;var t=U.updateQueue;if(t===null)t=Vo(),U.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ws(e){var t=Bo().memoizedState;return Cs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ts(e,t){return bs(4,2,e,t)}function Es(e,t){return bs(4,4,e,t)}function Ds(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Os(e,t,n){n=n==null?null:n.concat([e]),bs(4,4,Ds.bind(null,t,e),n)}function ks(){}function As(e,t){var n=Bo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&jo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function js(e,t){var n=Bo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&jo(t,r[1]))return r[0];if(r=e(),To){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r}function Ms(e,t,n){return n===void 0||xo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Du(),U.lanes|=e,iu|=e,n)}function Ns(e,t,n,r){return Mr(n,t)?n:oo.current===null?!(xo&42)||xo&1073741824&&!(Y&261930)?(hc=!0,e.memoizedState=n):(e=Du(),U.lanes|=e,iu|=e,t):(e=Ms(e,n,r),Mr(e,t)||(hc=!0),e)}function Ps(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Ks(e,!1,t,n);try{var c=i(),l=k.S;if(l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`){var u=wa(c,r);Gs(e,t,u,Eu(e))}else Gs(e,t,r,Eu(e))}catch(n){Gs(e,t,{then:function(){},status:`rejected`,reason:n},Eu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function Fs(){}function Is(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ls(e).queue;Ps(e,a,t,se,n===null?Fs:function(){return Rs(e),n(r)})}function Ls(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rs(e){var t=Ls(e);t.next===null&&(t=e.alternate.memoizedState),Gs(e,t.next.queue,{},Eu())}function zs(){return ua(mp)}function Bs(){return Bo().memoizedState}function Vs(){return Bo().memoizedState}function Hs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Eu();e=Za(n);var r=Qa(t,e,n);r!==null&&(Ou(r,t,n),$a(r,t,n)),t={cache:ga()},e.payload=t;return}t=t.return}}function Us(e,t,n){var r=Eu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qs(e)?Js(t,n):(n=fi(e,t,n,r),n!==null&&(Ou(n,e,r),Ys(n,t,r)))}function Ws(e,t,n){var r=Eu();Gs(e,t,n,r)}function Gs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(qs(e))Js(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Mr(s,o))return di(e,t,i,0),q===null&&ui(),!1}catch{}if(n=fi(e,t,i,r),n!==null)return Ou(n,e,r),Ys(n,t,r),!0}return!1}function Ks(e,t,n,r){if(r={lane:2,revertLane:wd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},qs(e)){if(t)throw Error(i(479))}else t=fi(e,n,r,2),t!==null&&Ou(t,e,2)}function qs(e){var t=e.alternate;return e===U||t!==null&&t===U}function Js(e,t){wo=Co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ys(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}var Xs={readContext:ua,use:Uo,useCallback:Ao,useContext:Ao,useEffect:Ao,useImperativeHandle:Ao,useLayoutEffect:Ao,useInsertionEffect:Ao,useMemo:Ao,useReducer:Ao,useRef:Ao,useState:Ao,useDebugValue:Ao,useDeferredValue:Ao,useTransition:Ao,useSyncExternalStore:Ao,useId:Ao,useHostTransitionStatus:Ao,useFormState:Ao,useActionState:Ao,useOptimistic:Ao,useMemoCache:Ao,useCacheRefresh:Ao};Xs.useEffectEvent=Ao;var Zs={readContext:ua,use:Uo,useCallback:function(e,t){return zo().memoizedState=[e,t===void 0?null:t],e},useContext:ua,useEffect:xs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ys(4194308,4,Ds.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ys(4194308,4,e,t)},useInsertionEffect:function(e,t){ys(4,2,e,t)},useMemo:function(e,t){var n=zo();t=t===void 0?null:t;var r=e();if(To){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=zo();if(n!==void 0){var i=n(t);if(To){Ve(!0);try{n(t)}finally{Ve(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Us.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=zo();return e={current:e},t.memoizedState=e},useState:function(e){e=ts(e);var t=e.queue,n=Ws.bind(null,U,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ks,useDeferredValue:function(e,t){var n=zo();return Ms(n,e,t)},useTransition:function(){var e=ts(!1);return e=Ps.bind(null,U,e.queue,!0,!1),zo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=U,a=zo();if(V){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Xo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,xs(Qo.bind(null,r,o,e),[e]),r.flags|=2048,_s(9,{destroy:void 0},Zo.bind(null,r,o,n,t),null),n},useId:function(){var e=zo(),t=q.identifierPrefix;if(V){var n=Li,r=Ii;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Eo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=ko++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:zs,useFormState:fs,useActionState:fs,useOptimistic:function(e){var t=zo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ks.bind(null,U,!0,n),n.dispatch=t,[e,t]},useMemoCache:Wo,useCacheRefresh:function(){return zo().memoizedState=Hs.bind(null,U)},useEffectEvent:function(e){var t=zo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Qs={readContext:ua,use:Uo,useCallback:As,useContext:ua,useEffect:Ss,useImperativeHandle:Os,useInsertionEffect:Ts,useLayoutEffect:Es,useMemo:js,useReducer:Ko,useRef:vs,useState:function(){return Ko(Go)},useDebugValue:ks,useDeferredValue:function(e,t){var n=Bo();return Ns(n,W.memoizedState,e,t)},useTransition:function(){var e=Ko(Go)[0],t=Bo().memoizedState;return[typeof e==`boolean`?e:Ho(e),t]},useSyncExternalStore:Yo,useId:Bs,useHostTransitionStatus:zs,useFormState:ps,useActionState:ps,useOptimistic:function(e,t){var n=Bo();return ns(n,W,e,t)},useMemoCache:Wo,useCacheRefresh:Vs};Qs.useEffectEvent=ws;var $s={readContext:ua,use:Uo,useCallback:As,useContext:ua,useEffect:Ss,useImperativeHandle:Os,useInsertionEffect:Ts,useLayoutEffect:Es,useMemo:js,useReducer:Jo,useRef:vs,useState:function(){return Jo(Go)},useDebugValue:ks,useDeferredValue:function(e,t){var n=Bo();return W===null?Ms(n,e,t):Ns(n,W.memoizedState,e,t)},useTransition:function(){var e=Jo(Go)[0],t=Bo().memoizedState;return[typeof e==`boolean`?e:Ho(e),t]},useSyncExternalStore:Yo,useId:Bs,useHostTransitionStatus:zs,useFormState:gs,useActionState:gs,useOptimistic:function(e,t){var n=Bo();return W===null?(n.baseState=e,[e,n.queue.dispatch]):ns(n,W,e,t)},useMemoCache:Wo,useCacheRefresh:Vs};$s.useEffectEvent=ws;function ec(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Eu(),i=Za(r);i.payload=t,n!=null&&(i.callback=n),t=Qa(e,i,r),t!==null&&(Ou(t,e,r),$a(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Eu(),i=Za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Qa(e,i,r),t!==null&&(Ou(t,e,r),$a(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Eu(),r=Za(n);r.tag=2,t!=null&&(r.callback=t),t=Qa(e,r,n),t!==null&&(Ou(t,e,n),$a(t,e,n))}};function nc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,a):!0}function rc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&tc.enqueueReplaceState(t,t.state,null)}function ic(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function ac(e){oi(e)}function oc(e){console.error(e)}function sc(e){oi(e)}function cc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function lc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function uc(e,t,n){return n=Za(n),n.tag=3,n.payload={element:null},n.callback=function(){cc(e,t)},n}function dc(e){return e=Za(e),e.tag=3,e}function fc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){lc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){lc(t,n,r),typeof i!=`function`&&(gu===null?gu=new Set([this]):gu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function pc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&sa(t,n,a,!0),n=fo.current,n!==null){switch(n.tag){case 31:case 13:return po===null?Bu():n.alternate===null&&ru===0&&(ru=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Na?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),id(e,r,a)),!1;case 22:return n.flags|=65536,r===Na?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),id(e,r,a)),!1}throw Error(i(435,n.tag))}return id(e,r,a),Bu(),!1}if(V)return t=fo.current,t===null?(r!==Ki&&(t=Error(i(423),{cause:r}),$i(Oi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Oi(r,n),a=uc(e.stateNode,r,a),eo(e,a),ru!==4&&(ru=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ki&&(e=Error(i(422),{cause:r}),$i(Oi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Oi(o,n),lu===null?lu=[o]:lu.push(o),ru!==4&&(ru=2),t===null)return!0;r=Oi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=uc(n.stateNode,r,e),eo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gu===null||!gu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=dc(a),fc(a,e,n,r),eo(n,a),!1}n=n.return}while(n!==null);return!1}var mc=Error(i(461)),hc=!1;function gc(e,t,n,r){t.child=e===null?qa(t,null,n,r):Ka(t,e.child,n,r)}function _c(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return la(t),r=Mo(e,t,n,o,a,i),s=Io(),e!==null&&!hc?(Lo(e,t,i),Vc(e,t,i)):(V&&s&&Bi(t),t.flags|=1,gc(e,t,r,i),t.child)}function vc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!yi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,yc(e,t,a,r,i)):(e=Si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Hc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Nr:n,n(o,r)&&e.ref===t.ref)return Vc(e,t,i)}return t.flags|=1,e=bi(a,r),e.ref=t.ref,e.return=t,t.child=e}function yc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Nr(a,r)&&e.ref===t.ref)if(hc=!1,t.pendingProps=r=a,Hc(e,i))e.flags&131072&&(hc=!0);else return t.lanes=e.lanes,Vc(e,t,i)}return Dc(e,t,n,r,i)}function bc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Sc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Oa(t,a===null?null:a.cachePool),a===null?lo():co(t,a),go(t);else return r=t.lanes=536870912,Sc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Oa(t,null),lo(),_o(t)):(Oa(t,a.cachePool),co(t,a),_o(t),t.memoizedState=null);return gc(e,t,i,n),t.child}function xc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Sc(e,t,n,r,i){var a=Da();return a=a===null?null:{parent:H._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Oa(t,null),lo(),go(t),e!==null&&sa(e,t,r,!0),t.childLanes=i,null}function Cc(e,t){return t=Ic({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wc(e,t,n){return Ka(t,e.child,null,n),e=Cc(t,t.pendingProps),e.flags|=2,vo(t),t.memoizedState=null,e}function Tc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=Cc(t,r),t.lanes=536870912,xc(null,e);if(ho(t),(e=B)?(e=bf(e,Gi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fi===null?null:{id:Ii,overflow:Li},retryLane:536870912,hydrationErrors:null},n=Ti(e),n.return=t,t.child=n,Ui=t,B=null)):e=null,e===null)throw qi(t);return t.lanes=536870912,null}return Cc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ho(t),a)if(t.flags&256)t.flags&=-257,t=wc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(hc||sa(e,t,n,!1),a=(n&e.childLanes)!==0,hc||a){if(r=q,r!==null&&(s=at(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,pi(e,s),Ou(r,e,s),mc;Bu(),t=wc(e,t,n)}else e=o.treeContext,B=wf(s.nextSibling),Ui=t,V=!0,Wi=null,Gi=!1,e!==null&&Hi(t,e),t=Cc(t,r),t.flags|=4096;return t}return e=bi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ec(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Dc(e,t,n,r,i){return la(t),n=Mo(e,t,n,r,void 0,i),r=Io(),e!==null&&!hc?(Lo(e,t,i),Vc(e,t,i)):(V&&r&&Bi(t),t.flags|=1,gc(e,t,n,i),t.child)}function Oc(e,t,n,r,i,a){return la(t),t.updateQueue=null,n=Po(t,r,n,i),No(e),r=Io(),e!==null&&!hc?(Lo(e,t,a),Vc(e,t,a)):(V&&r&&Bi(t),t.flags|=1,gc(e,t,n,a),t.child)}function kc(e,t,n,r,i){if(la(t),t.stateNode===null){var a=gi,o=n.contextType;typeof o==`object`&&o&&(a=ua(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=tc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ya(t),o=n.contextType,a.context=typeof o==`object`&&o?ua(o):gi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(ec(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&tc.enqueueReplaceState(a,a.state,null),ro(t,r,a,i),no(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=ic(n,s);a.props=c;var l=a.context,u=n.contextType;o=gi,typeof u==`object`&&u&&(o=ua(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&rc(t,a,r,o),Ja=!1;var f=t.memoizedState;a.state=f,ro(t,r,a,i),no(),l=t.memoizedState,s||f!==l||Ja?(typeof d==`function`&&(ec(t,n,d,r),l=t.memoizedState),(c=Ja||nc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Xa(e,t),o=t.memoizedProps,u=ic(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=gi,typeof l==`object`&&l&&(c=ua(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&rc(t,a,r,c),Ja=!1,f=t.memoizedState,a.state=f,ro(t,r,a,i),no();var p=t.memoizedState;o!==d||f!==p||Ja||e!==null&&e.dependencies!==null&&ca(e.dependencies)?(typeof s==`function`&&(ec(t,n,s,r),p=t.memoizedState),(u=Ja||nc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ca(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Ec(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ka(t,e.child,null,i),t.child=Ka(t,null,n,i)):gc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Vc(e,t,i),e}function Ac(e,t,n,r){return Zi(),t.flags|=256,gc(e,t,n,r),t.child}var jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mc(e){return{baseLanes:e,cachePool:ka()}}function Nc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=su),e}function Pc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(yo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(V){if(a?mo(t):_o(t),(e=B)?(e=bf(e,Gi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fi===null?null:{id:Ii,overflow:Li},retryLane:536870912,hydrationErrors:null},n=Ti(e),n.return=t,t.child=n,Ui=t,B=null)):e=null,e===null)throw qi(t);return Sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(_o(t),a=t.mode,c=Ic({mode:`hidden`,children:c},a),r=Ci(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Mc(n),r.childLanes=Nc(e,s,n),t.memoizedState=jc,xc(null,r)):(mo(t),Fc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(mo(t),t.flags&=-257,t=Lc(e,t,n)):t.memoizedState===null?(_o(t),c=r.fallback,a=t.mode,r=Ic({mode:`visible`,children:r.children},a),c=Ci(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ka(t,e.child,null,n),r=t.child,r.memoizedState=Mc(n),r.childLanes=Nc(e,s,n),t.memoizedState=jc,t=xc(null,r)):(_o(t),t.child=e.child,t.flags|=128,t=null);else if(mo(t),Sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,$i({value:r,source:null,stack:null}),t=Lc(e,t,n)}else if(hc||sa(e,t,n,!1),s=(n&e.childLanes)!==0,hc||s){if(s=q,s!==null&&(r=at(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,pi(e,r),Ou(s,e,r),mc;xf(c)||Bu(),t=Lc(e,t,n)}else xf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,B=wf(c.nextSibling),Ui=t,V=!0,Wi=null,Gi=!1,e!==null&&Hi(t,e),t=Fc(t,r.children),t.flags|=4096);return t}return a?(_o(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=bi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Ci(c,a,n,null),c.flags|=2):c=bi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,xc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Mc(n):(a=c.cachePool,a===null?a=ka():(l=H._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Nc(e,s,n),t.memoizedState=jc,xc(e.child,r)):(mo(t),n=e.child,e=n.sibling,n=bi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Fc(e,t){return t=Ic({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ic(e,t){return e=vi(22,e,null,t),e.lanes=0,e}function Lc(e,t,n){return Ka(t,e.child,null,n),e=Fc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),aa(e.return,t,n)}function zc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Bc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=yo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,M(yo,o),gc(e,t,r,n),r=V?Mi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rc(e,n,t);else if(e.tag===19)Rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),zc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}zc(t,!0,n,null,a,r);break;case`together`:zc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Vc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),iu|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=bi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ca(e))):!0}function Uc(e,t,n){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),ra(t,H,e.memoizedState.cache),Zi();break;case 27:case 5:_e(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ho(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(mo(t),e=Vc(e,t,n),e===null?null:e.sibling):Pc(e,t,n):(mo(t),t.flags|=128,null);mo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(sa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Bc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(yo,yo.current),r)break;return null;case 22:return t.lanes=0,bc(e,t,n,t.pendingProps);case 24:ra(t,H,e.memoizedState.cache)}return Vc(e,t,n)}function Wc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)hc=!0;else{if(!Hc(e,n)&&!(t.flags&128))return hc=!1,Uc(e,t,n);hc=!!(e.flags&131072)}else hc=!1,V&&t.flags&1048576&&zi(t,Mi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ia(t.elementType),t.type=e,typeof e==`function`)yi(e)?(r=ic(e,r),t.tag=1,t=kc(null,t,e,r,n)):(t.tag=0,t=Dc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=_c(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=vc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return Dc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=ic(r,t.pendingProps),kc(e,t,r,a,n);case 3:a:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Xa(e,t),ro(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ra(t,H,r),r!==o.cache&&oa(t,[H],n,!0),no(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Ac(e,t,r,n);break a}else if(r!==a){a=Oi(Error(i(424)),t),$i(a),t=Ac(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(B=wf(e.firstChild),Ui=t,V=!0,Wi=null,Gi=!0,n=qa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Zi(),r===a){t=Vc(e,t,n);break a}gc(e,t,r,n)}t=t.child}return t;case 26:return Ec(e,t),e===null?(n=Gf(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,r=tf(pe.current).createElement(n),r[P]=t,r[F]=e,Yd(r,n,e),St(r),t.stateNode=r):t.memoizedState=Gf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&V&&(r=t.stateNode=Of(t.type,t.pendingProps,pe.current),Ui=t,Gi=!0,a=B,mf(t.type)?(Tf=a,B=wf(r.firstChild)):B=a),gc(e,t,t.pendingProps.children,n),Ec(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((a=r=B)&&(r=vf(r,t.type,t.pendingProps,Gi),r===null?a=!1:(t.stateNode=r,Ui=t,B=wf(r.firstChild),Gi=!1,a=!0)),a||qi(t)),_e(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,af(a,o)?r=null:s!==null&&af(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Mo(e,t,Fo,null,null,n),mp._currentValue=a),Ec(e,t),gc(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=B)&&(n=yf(n,t.pendingProps,Gi),n===null?e=!1:(t.stateNode=n,Ui=t,B=null,e=!0)),e||qi(t)),null;case 13:return Pc(e,t,n);case 4:return he(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ka(t,null,r,n):gc(e,t,r,n),t.child;case 11:return _c(e,t,t.type,t.pendingProps,n);case 7:return gc(e,t,t.pendingProps,n),t.child;case 8:return gc(e,t,t.pendingProps.children,n),t.child;case 12:return gc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ra(t,t.type,r.value),gc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,la(t),a=ua(a),r=r(a),t.flags|=1,gc(e,t,r,n),t.child;case 14:return vc(e,t,t.type,t.pendingProps,n);case 15:return yc(e,t,t.type,t.pendingProps,n);case 19:return Bc(e,t,n);case 31:return Tc(e,t,n);case 22:return bc(e,t,n,t.pendingProps);case 24:return la(t),r=ua(H),e===null?(a=Da(),a===null&&(a=q,o=ga(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ya(t),ra(t,H,a)):((e.lanes&n)!==0&&(Xa(e,t),ro(t,null,null,n),no()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ra(t,H,r),r!==a.cache&&oa(t,[H],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ra(t,H,r))),gc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Gc(e){e.flags|=4}function Kc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Lu())e.flags|=8192;else throw La=Na,ja}else e.flags&=-16777217}function qc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!op(t))if(Lu())e.flags|=8192;else throw La=Na,ja}function Jc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:$e(),e.lanes|=t,cu|=t)}function Yc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function G(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xc(e,t,n){var r=t.pendingProps;switch(Vi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return G(t),null;case 1:return G(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ia(H),ge(),n.pendingContext&&=(n.context=n.pendingContext,null),(e===null||e.child===null)&&(Xi(t)?Gc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qi())),G(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Gc(t),o===null?(G(t),Kc(t,a,null,r,n)):(G(t),qc(t,o))):o?o===e.memoizedState?(G(t),t.flags&=-16777217):(Gc(t),G(t),qc(t,o)):(e=e.memoizedProps,e!==r&&Gc(t),G(t),Kc(t,a,e,r,n)),null;case 27:if(ve(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Gc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}e=de.current,Xi(t)?Ji(t,e):(e=Of(a,r,n),t.stateNode=e,Gc(t))}return G(t),null;case 5:if(ve(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Gc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}if(o=de.current,Xi(t))Ji(t,o);else{var s=tf(pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[P]=t,o[F]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Yd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Gc(t)}}return G(t),Kc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Gc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=pe.current,Xi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ui,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[P]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||qd(e.nodeValue,n)),e||qi(t,!0)}else e=tf(e).createTextNode(r),e[P]=t,t.stateNode=e}return G(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Xi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[P]=t}else Zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),e=!1}else n=Qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(vo(t),t):(vo(t),null);if(t.flags&128)throw Error(i(558))}return G(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[P]=t}else Zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),a=!1}else a=Qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(vo(t),t):(vo(t),null)}return vo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Jc(t,t.updateQueue),G(t),null);case 4:return ge(),e===null&&Ld(t.stateNode.containerInfo),G(t),null;case 10:return ia(t.type),G(t),null;case 19:if(j(yo),r=t.memoizedState,r===null)return G(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Yc(r,!1);else{if(ru!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=bo(e),o!==null){for(t.flags|=128,Yc(r,!1),e=o.updateQueue,t.updateQueue=e,Jc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)xi(n,e),n=n.sibling;return M(yo,yo.current&1|2),V&&Ri(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&N()>mu&&(t.flags|=128,a=!0,Yc(r,!1),t.lanes=4194304)}else{if(!a)if(e=bo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Jc(t,e),Yc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!V)return G(t),null}else 2*N()-r.renderingStartTime>mu&&n!==536870912&&(t.flags|=128,a=!0,Yc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(G(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=N(),e.sibling=null,n=yo.current,M(yo,a?n&1|2:n&1),V&&Ri(t,r.treeForkCount),e);case 22:case 23:return vo(t),uo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(G(t),t.subtreeFlags&6&&(t.flags|=8192)):G(t),n=t.updateQueue,n!==null&&Jc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(Ea),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ia(H),G(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Zc(e,t){switch(Vi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(H),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(vo(t),t.alternate===null)throw Error(i(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(vo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(yo),null;case 4:return ge(),null;case 10:return ia(t.type),null;case 22:case 23:return vo(t),uo(),e!==null&&j(Ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(H),null;case 25:return null;default:return null}}function Qc(e,t){switch(Vi(t),t.tag){case 3:ia(H),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&vo(t);break;case 13:vo(t);break;case 19:j(yo);break;case 10:ia(t.type);break;case 22:case 23:vo(t),uo(),e!==null&&j(Ea);break;case 24:ia(H)}}function $c(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function el(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function tl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ao(t,n)}catch(t){Z(e,e.return,t)}}}function nl(e,t,n){n.props=ic(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function rl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function il(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function al(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function ol(e,t,n){try{var r=e.stateNode;Xd(r,e.type,n,t),r[F]=t}catch(t){Z(e,e.return,t)}}function sl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&mf(e.type)||e.tag===4}function cl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||sl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&mf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=z));else if(r!==4&&(r===27&&mf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ll(e,t,n),e=e.sibling;e!==null;)ll(e,t,n),e=e.sibling}function ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&mf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ul(e,t,n),e=e.sibling;e!==null;)ul(e,t,n),e=e.sibling}function dl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Yd(t,r,n),t[P]=e,t[F]=n}catch(t){Z(e,e.return,t)}}var fl=!1,pl=!1,ml=!1,hl=typeof WeakSet==`function`?WeakSet:Set,gl=null;function _l(e,t){if(e=e.containerInfo,$d=Cp,e=Lr(e),Rr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(ef={focusedElem:e,selectionRange:n},Cp=!1,gl=t;gl!==null;)if(t=gl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,gl=e;else for(;gl!==null;){switch(t=gl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=ic(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)_f(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:_f(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,gl=e;break}gl=t.return}}function vl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Nl(e,n),r&4&&$c(5,n);break;case 1:if(Nl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=ic(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&tl(n),r&512&&rl(n,n.return);break;case 3:if(Nl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ao(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&dl(n);case 26:case 5:Nl(e,n),t===null&&r&4&&al(n),r&512&&rl(n,n.return);break;case 12:Nl(e,n);break;case 31:Nl(e,n),r&4&&wl(e,n);break;case 13:Nl(e,n),r&4&&Tl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sd.bind(null,n),Cf(e,n))));break;case 22:if(r=n.memoizedState!==null||fl,!r){t=t!==null&&t.memoizedState!==null||pl,i=fl;var a=pl;fl=r,(pl=t)&&!a?Fl(e,n,(n.subtreeFlags&8772)!=0):Nl(e,n),fl=i,pl=a}break;case 30:break;default:Nl(e,n)}}function yl(e){var t=e.alternate;t!==null&&(e.alternate=null,yl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_t(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var bl=null,xl=!1;function Sl(e,t,n){for(n=n.child;n!==null;)Cl(e,t,n),n=n.sibling}function Cl(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount==`function`)try{Be.onCommitFiberUnmount(ze,n)}catch{}switch(n.tag){case 26:pl||il(n,t),Sl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:pl||il(n,t);var r=bl,i=xl;mf(n.type)&&(bl=n.stateNode,xl=!1),Sl(e,t,n),kf(n.stateNode),bl=r,xl=i;break;case 5:pl||il(n,t);case 6:if(r=bl,i=xl,bl=null,Sl(e,t,n),bl=r,xl=i,bl!==null)if(xl)try{(bl.nodeType===9?bl.body:bl.nodeName===`HTML`?bl.ownerDocument.body:bl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{bl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:bl!==null&&(xl?(e=bl,hf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Yp(e)):hf(bl,n.stateNode));break;case 4:r=bl,i=xl,bl=n.stateNode.containerInfo,xl=!0,Sl(e,t,n),bl=r,xl=i;break;case 0:case 11:case 14:case 15:el(2,n,t),pl||el(4,n,t),Sl(e,t,n);break;case 1:pl||(il(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&nl(n,t,r)),Sl(e,t,n);break;case 21:Sl(e,t,n);break;case 22:pl=(r=pl)||n.memoizedState!==null,Sl(e,t,n),pl=r;break;default:Sl(e,t,n)}}function wl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yp(e)}catch(e){Z(t,t.return,e)}}}function Tl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yp(e)}catch(e){Z(t,t.return,e)}}function El(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hl),t;default:throw Error(i(435,e.tag))}}function Dl(e,t){var n=El(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=cd.bind(null,e,t);t.then(r,r)}})}function Ol(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(mf(c.type)){bl=c.stateNode,xl=!1;break a}break;case 5:bl=c.stateNode,xl=!1;break a;case 3:case 4:bl=c.stateNode.containerInfo,xl=!0;break a}c=c.return}if(bl===null)throw Error(i(160));Cl(o,s,a),bl=null,xl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Al(t,e),t=t.sibling}var kl=null;function Al(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ol(t,e),jl(e),r&4&&(el(3,e,e.return),$c(3,e),el(5,e,e.return));break;case 1:Ol(t,e),jl(e),r&512&&(pl||n===null||il(n,n.return)),r&64&&fl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=kl;if(Ol(t,e),jl(e),r&512&&(pl||n===null||il(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[gt]||o[P]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Yd(o,r,n),o[P]=e,St(o),r=o;break a;case`link`:var s=rp(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=rp(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[P]=e,St(o),r=o}e.stateNode=r}else ip(a,e.type,e.stateNode);else e.stateNode=Qf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&ol(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?ip(a,e.type,e.stateNode):Qf(a,r,e.memoizedProps))}break;case 27:Ol(t,e),jl(e),r&512&&(pl||n===null||il(n,n.return)),n!==null&&r&4&&ol(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ol(t,e),jl(e),r&512&&(pl||n===null||il(n,n.return)),e.flags&32){a=e.stateNode;try{Gt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,ol(e,a,n===null?a:n.memoizedProps)),r&1024&&(ml=!0);break;case 6:if(Ol(t,e),jl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(np=null,a=kl,kl=Mf(t.containerInfo),Ol(t,e),kl=a,jl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yp(t.containerInfo)}catch(t){Z(e,e.return,t)}ml&&(ml=!1,Ml(e));break;case 4:r=kl,kl=Mf(e.stateNode.containerInfo),Ol(t,e),jl(e),kl=r;break;case 12:Ol(t,e),jl(e);break;case 31:Ol(t,e),jl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Dl(e,r)));break;case 13:Ol(t,e),jl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(fu=N()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Dl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=fl,d=pl;if(fl=u||a,pl=d||l,Ol(t,e),pl=d,fl=u,jl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||fl||pl||Pl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?gf(m,!0):gf(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Dl(e,n))));break;case 19:Ol(t,e),jl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Dl(e,r)));break;case 30:break;case 21:break;default:Ol(t,e),jl(e)}}function jl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(sl(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,o=cl(e);ul(e,o,a);break;case 5:var s=n.stateNode;n.flags&32&&(Gt(s,``),n.flags&=-33);var c=cl(e);ul(e,c,s);break;case 3:case 4:var l=n.stateNode.containerInfo,u=cl(e);ll(e,u,l);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ml(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ml(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vl(e,t.alternate,t),t=t.sibling}function Pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:el(4,t,t.return),Pl(t);break;case 1:il(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&nl(t,t.return,n),Pl(t);break;case 27:kf(t.stateNode);case 26:case 5:il(t,t.return),Pl(t);break;case 22:t.memoizedState===null&&Pl(t);break;case 30:Pl(t);break;default:Pl(t)}e=e.sibling}}function Fl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Fl(i,a,n),$c(4,a);break;case 1:if(Fl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)io(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&tl(a),rl(a,a.return);break;case 27:dl(a);case 26:case 5:Fl(i,a,n),n&&r===null&&o&4&&al(a),rl(a,a.return);break;case 12:Fl(i,a,n);break;case 31:Fl(i,a,n),n&&o&4&&wl(i,a);break;case 13:Fl(i,a,n),n&&o&4&&Tl(i,a);break;case 22:a.memoizedState===null&&Fl(i,a,n),rl(a,a.return);break;case 30:break;default:Fl(i,a,n)}t=t.sibling}}function Il(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&_a(n))}function Ll(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_a(e))}function Rl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zl(e,t,n,r),t=t.sibling}function zl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Rl(e,t,n,r),i&2048&&$c(9,t);break;case 1:Rl(e,t,n,r);break;case 3:Rl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_a(e)));break;case 12:if(i&2048){Rl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Rl(e,t,n,r);break;case 31:Rl(e,t,n,r);break;case 13:Rl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Rl(e,t,n,r):(a._visibility|=2,Bl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Rl(e,t,n,r):Vl(e,t),i&2048&&Il(o,t);break;case 24:Rl(e,t,n,r),i&2048&&Ll(t.alternate,t);break;default:Rl(e,t,n,r)}}function Bl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Bl(a,o,s,c,i),$c(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Bl(a,o,s,c,i)):u._visibility&2?Bl(a,o,s,c,i):Vl(a,o),i&&l&2048&&Il(o.alternate,o);break;case 24:Bl(a,o,s,c,i),i&&l&2048&&Ll(o.alternate,o);break;default:Bl(a,o,s,c,i)}t=t.sibling}}function Vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Vl(n,r),i&2048&&Il(r.alternate,r);break;case 24:Vl(n,r),i&2048&&Ll(r.alternate,r);break;default:Vl(n,r)}t=t.sibling}}var Hl=8192;function Ul(e,t,n){if(e.subtreeFlags&Hl)for(e=e.child;e!==null;)Wl(e,t,n),e=e.sibling}function Wl(e,t,n){switch(e.tag){case 26:Ul(e,t,n),e.flags&Hl&&e.memoizedState!==null&&sp(n,kl,e.memoizedState,e.memoizedProps);break;case 5:Ul(e,t,n);break;case 3:case 4:var r=kl;kl=Mf(e.stateNode.containerInfo),Ul(e,t,n),kl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Hl,Hl=16777216,Ul(e,t,n),Hl=r):Ul(e,t,n));break;default:Ul(e,t,n)}}function Gl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];gl=r,Yl(r,e)}Gl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ql(e),e=e.sibling}function ql(e){switch(e.tag){case 0:case 11:case 15:Kl(e),e.flags&2048&&el(9,e,e.return);break;case 3:Kl(e);break;case 12:Kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jl(e)):Kl(e);break;default:Kl(e)}}function Jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];gl=r,Yl(r,e)}Gl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:el(8,t,t.return),Jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Yl(e,t){for(;gl!==null;){var n=gl;switch(n.tag){case 0:case 11:case 15:el(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:_a(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,gl=r;else a:for(n=e;gl!==null;){r=gl;var i=r.sibling,a=r.return;if(yl(r),r===n){gl=null;break a}if(i!==null){i.return=a,gl=i;break a}gl=a}}}var Xl={getCacheForType:function(e){var t=ua(H),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ua(H).controller.signal}},Zl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,Ql=null,$l=!1,eu=!1,tu=!1,nu=0,ru=0,iu=0,au=0,ou=0,su=0,cu=0,lu=null,uu=null,du=!1,fu=0,pu=0,mu=1/0,hu=null,gu=null,_u=0,vu=null,yu=null,bu=0,xu=0,Su=null,Cu=null,wu=0,Tu=null;function Eu(){return K&2&&Y!==0?Y&-Y:k.T===null?ct():wd()}function Du(){if(su===0)if(!(Y&536870912)||V){var e=qe;qe<<=1,!(qe&3932160)&&(qe=262144),su=e}else su=536870912;return e=fo.current,e!==null&&(e.flags|=32),su}function Ou(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Fu(e,0),Mu(e,Y,su,!1)),tt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(au|=n),ru===4&&Mu(e,Y,su,!1)),gd(e))}function ku(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ze(e,t),a=r?Uu(e,t):Vu(e,t,!0),o=r;do{if(a===0){eu&&!r&&Mu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!ju(n)){a=Vu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=lu;var l=c.current.memoizedState.isDehydrated;if(l&&(Fu(c,s).flags|=256),s=Vu(c,s,!1),s!==2){if(tu&&!l){c.errorRecoveryDisabledLanes|=o,au|=o,a=4;break a}o=uu,uu=a,o!==null&&(uu===null?uu=o:uu.push.apply(uu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Fu(e,0),Mu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Mu(r,t,su,!$l);break a;case 2:uu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fu+300-N(),10<a)){if(Mu(r,t,su,!$l),Xe(r,0,!0)!==0)break a;bu=t,r.timeoutHandle=lf(Au.bind(null,r,n,uu,hu,du,t,su,au,cu,$l,o,`Throttled`,-0,0),a);break a}Au(r,n,uu,hu,du,t,su,au,cu,$l,o,null,-0,0)}}break}while(1);gd(e)}function Au(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:z},Wl(t,a,d);var m=(a&62914560)===a?fu-N():(a&4194048)===a?pu-N():0;if(m=lp(d,m),m!==null){bu=a,e.cancelPendingCommit=m(Xu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Mu(e,a,o,!l);return}}Xu(e,t,a,n,r,i,o,s,c)}function ju(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mu(e,t,n,r){t&=~ou,t&=~au,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-He(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&rt(e,n,t)}function Nu(){return K&6?!0:(_d(0,!1),!1)}function Pu(){if(J!==null){if(X===0)var e=J.return;else e=J,na=ta=null,Ro(e),Ba=null,Va=0,e=J;for(;e!==null;)Qc(e.alternate,e),e=e.return;J=null}}function Fu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,uf(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bu=0,Pu(),q=e,J=n=bi(e.current,null),Y=t,X=0,Ql=null,$l=!1,eu=Ze(e,t),tu=!1,cu=su=ou=au=iu=ru=0,uu=lu=null,du=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-He(r),a=1<<i;t|=e[i],r&=~a}return nu=t,ui(),n}function Iu(e,t){U=null,k.H=Xs,t===Aa||t===Ma?(t=Ra(),X=3):t===ja?(t=Ra(),X=4):X=t===mc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ql=t,J===null&&(ru=1,cc(e,Oi(t,e.current)))}function Lu(){var e=fo.current;return e===null?!0:(Y&4194048)===Y?po===null:(Y&62914560)===Y||Y&536870912?e===po:!1}function Ru(){var e=k.H;return k.H=Xs,e===null?Xs:e}function zu(){var e=k.A;return k.A=Xl,e}function Bu(){ru=4,$l||(Y&4194048)!==Y&&fo.current!==null||(eu=!0),!(iu&134217727)&&!(au&134217727)||q===null||Mu(q,Y,su,!1)}function Vu(e,t,n){var r=K;K|=2;var i=Ru(),a=zu();(q!==e||Y!==t)&&(hu=null,Fu(e,t)),t=!1;var o=ru;a:do try{if(X!==0&&J!==null){var s=J,c=Ql;switch(X){case 8:Pu(),o=6;break a;case 3:case 2:case 9:case 6:fo.current===null&&(t=!0);var l=X;if(X=0,Ql=null,qu(e,s,c,l),n&&eu){o=0;break a}break;default:l=X,X=0,Ql=null,qu(e,s,c,l)}}Hu(),o=ru;break}catch(t){Iu(e,t)}while(1);return t&&e.shellSuspendCounter++,na=ta=null,K=r,k.H=i,k.A=a,J===null&&(q=null,Y=0,ui()),o}function Hu(){for(;J!==null;)Gu(J)}function Uu(e,t){var n=K;K|=2;var r=Ru(),a=zu();q!==e||Y!==t?(hu=null,mu=N()+500,Fu(e,t)):eu=Ze(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=Ql;b:switch(X){case 1:X=0,Ql=null,qu(e,t,o,1);break;case 2:case 9:if(Pa(o)){X=0,Ql=null,Ku(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),gd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Pa(o)?(X=0,Ql=null,Ku(t)):(X=0,Ql=null,qu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?op(s):c.stateNode.complete){X=0,Ql=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Ju(u))}break b}}X=0,Ql=null,qu(e,t,o,5);break;case 6:X=0,Ql=null,qu(e,t,o,6);break;case 8:Pu(),ru=6;break a;default:throw Error(i(462))}}Wu();break}catch(t){Iu(e,t)}while(1);return na=ta=null,k.H=r,k.A=a,K=n,J===null?(q=null,Y=0,ui(),ru):0}function Wu(){for(;J!==null&&!ke();)Gu(J)}function Gu(e){var t=Wc(e.alternate,e,nu);e.memoizedProps=e.pendingProps,t===null?Ju(e):J=t}function Ku(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Oc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Oc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Ro(t);default:Qc(n,t),t=J=xi(t,nu),t=Wc(n,t,nu)}e.memoizedProps=e.pendingProps,t===null?Ju(e):J=t}function qu(e,t,n,r){na=ta=null,Ro(t),Ba=null,Va=0;var i=t.return;try{if(pc(e,i,t,n,Y)){ru=1,cc(e,Oi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ru=1,cc(e,Oi(n,e.current)),J=null;return}t.flags&32768?(V||r===1?e=!0:eu||Y&536870912?e=!1:($l=e=!0,(r===2||r===9||r===3||r===6)&&(r=fo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Yu(t,e)):Ju(t)}function Ju(e){var t=e;do{if(t.flags&32768){Yu(t,$l);return}e=t.return;var n=Xc(t.alternate,t,nu);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ru===0&&(ru=5)}function Yu(e,t){do{var n=Zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ru=6,J=null}function Xu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do td();while(_u!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=li,nt(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),yu=t,vu=e,bu=n,xu=o,Su=a,Cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,ld(Pe,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=K,K|=4;try{_l(e,t,n)}finally{K=s,A.p=a,k.T=r}}_u=1,Zu(),Qu(),$u()}}function Zu(){if(_u===1){_u=0;var e=vu,t=yu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=K;K|=4;try{Al(t,e);var a=ef,o=Lr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ir(s.ownerDocument.documentElement,s)){if(c!==null&&Rr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Fr(s,h),v=Fr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Cp=!!$d,ef=$d=null}finally{K=i,A.p=r,k.T=n}}e.current=t,_u=2}}function Qu(){if(_u===2){_u=0;var e=vu,t=yu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=K;K|=4;try{vl(e,t.alternate,t)}finally{K=i,A.p=r,k.T=n}}_u=3}}function $u(){if(_u===4||_u===3){_u=0,Ae();var e=vu,t=yu,n=bu,r=Cu;t.subtreeFlags&10256||t.flags&10256?_u=5:(_u=0,yu=vu=null,ed(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(gu=null),st(n),t=t.stateNode,Be&&typeof Be.onCommitFiberRoot==`function`)try{Be.onCommitFiberRoot(ze,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}bu&3&&td(),gd(e),i=e.pendingLanes,n&261930&&i&42?e===Tu?wu++:(wu=0,Tu=e):wu=0,_d(0,!1)}}function ed(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,_a(t)))}function td(){return Zu(),Qu(),$u(),nd()}function nd(){if(_u!==5)return!1;var e=vu,t=xu;xu=0;var n=st(bu),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=Su,Su=null;var o=vu,s=bu;if(_u=0,yu=vu=null,bu=0,K&6)throw Error(i(331));var c=K;if(K|=4,ql(o.current),zl(o,o.current,s,n),K=c,_d(0,!1),Be&&typeof Be.onPostCommitFiberRoot==`function`)try{Be.onPostCommitFiberRoot(ze,o)}catch{}return!0}finally{A.p=a,k.T=r,ed(e,t)}}function rd(e,t,n){t=Oi(n,t),t=uc(e.stateNode,t,2),e=Qa(e,t,2),e!==null&&(tt(e,2),gd(e))}function Z(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gu===null||!gu.has(r))){e=Oi(n,e),n=dc(2),r=Qa(t,n,2),r!==null&&(fc(n,r,t,e),tt(r,2),gd(r));break}}t=t.return}}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(tu=!0,i.add(n),e=ad.bind(null,e,t,n),t.then(e,e))}function ad(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(ru===4||ru===3&&(Y&62914560)===Y&&300>N()-fu?!(K&2)&&Fu(e,0):ou|=n,cu===Y&&(cu=0)),gd(e)}function od(e,t){t===0&&(t=$e()),e=pi(e,t),e!==null&&(tt(e,t),gd(e))}function sd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),od(e,n)}function cd(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),od(e,n)}function ld(e,t){return De(e,t)}var ud=null,dd=null,fd=!1,pd=!1,md=!1,hd=0;function gd(e){e!==dd&&e.next===null&&(dd===null?ud=dd=e:dd=dd.next=e),pd=!0,fd||(fd=!0,Cd())}function _d(e,t){if(!md&&pd){md=!0;do for(var n=!1,r=ud;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-He(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Sd(r,a))}else a=Y,a=Xe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ze(r,a)||(n=!0,Sd(r,a));r=r.next}while(n);md=!1}}function vd(){yd()}function yd(){pd=fd=!1;var e=0;hd!==0&&cf()&&(e=hd);for(var t=N(),n=null,r=ud;r!==null;){var i=r.next,a=bd(r,t);a===0?(r.next=null,n===null?ud=i:n.next=i,i===null&&(dd=n)):(n=r,(e!==0||a&3)&&(pd=!0)),r=i}_u!==0&&_u!==5||_d(e,!1),hd!==0&&(hd=0)}function bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-He(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Xe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ze(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),st(n)){case 2:case 8:n=Ne;break;case 32:n=Pe;break;case 268435456:n=Ie;break;default:n=Pe}return r=xd.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function xd(e,t){if(_u!==0&&_u!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(td()&&e.callbackNode!==n)return null;var r=Y;return r=Xe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(ku(e,r,t),bd(e,N()),e.callbackNode!=null&&e.callbackNode===n?xd.bind(null,e):null)}function Sd(e,t){if(td())return null;ku(e,t,!0)}function Cd(){ff(function(){K&6?De(Me,vd):yd()})}function wd(){if(hd===0){var e=ba;e===0&&(e=Ke,Ke<<=1,!(Ke&261888)&&(Ke=256)),hd=e}return hd}function Td(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function Ed(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Dd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Td((i[F]||null).action),o=r.submitter;o&&(t=(t=o[F]||null)?Td(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new bn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(hd!==0){var e=o?Ed(i,o):new FormData(i);Is(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?Ed(i,o):new FormData(i),Is(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Od=0;Od<ii.length;Od++){var kd=ii[Od],Ad=kd.toLowerCase(),jd=kd[0].toUpperCase()+kd.slice(1);ai(Ad,`on`+jd)}ai(Xr,`onAnimationEnd`),ai(Zr,`onAnimationIteration`),ai(Qr,`onAnimationStart`),ai(`dblclick`,`onDoubleClick`),ai(`focusin`,`onFocus`),ai(`focusout`,`onBlur`),ai($r,`onTransitionRun`),ai(ei,`onTransitionStart`),ai(ti,`onTransitionCancel`),ai(ni,`onTransitionEnd`),I(`onMouseEnter`,[`mouseout`,`mouseover`]),I(`onMouseLeave`,[`mouseout`,`mouseover`]),I(`onPointerEnter`,[`pointerout`,`pointerover`]),I(`onPointerLeave`,[`pointerout`,`pointerover`]),Tt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Tt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Tt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Tt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Md=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Nd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Md));function Pd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ft];n===void 0&&(n=t[ft]=new Set);var r=e+`__bubble`;n.has(r)||(Rd(t,e,2,!1),n.add(r))}function Fd(e,t,n){var r=0;t&&(r|=4),Rd(n,e,r,t)}var Id=`_reactListening`+Math.random().toString(36).slice(2);function Ld(e){if(!e[Id]){e[Id]=!0,Ct.forEach(function(t){t!==`selectionchange`&&(Nd.has(t)||Fd(t,!1,e),Fd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Id]||(t[Id]=!0,Fd(`selectionchange`,!1,t))}}function Rd(e,t,n,r){switch(Ap(t)){case 2:var i=wp;break;case 8:i=Tp;break;default:i=Ep}n=i.bind(null,t,n,e),i=void 0,!ln||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function zd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}on(function(){var r=a,i=en(n),s=[];a:{var c=ri.get(e);if(c!==void 0){var l=bn,u=e;switch(e){case`keypress`:if(hn(n)===0)break a;case`keydown`:case`keyup`:l=Wn;break;case`focusin`:u=`focus`,l=jn;break;case`focusout`:u=`blur`,l=jn;break;case`beforeblur`:case`afterblur`:l=jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Dn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case Xr:case Zr:case Qr:l=Nn;break;case ni:l=Xn;break;case`scroll`:case`scrollend`:l=Sn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Fn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=er}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=sn(m,p),g!=null&&d.push(Bd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==$t&&(u=n.relatedTarget||n.fromElement)&&(vt(u)||u[dt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?vt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Dn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:bt(l),h=u==null?c:bt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,vt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Hd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Ud(s,c,l,d,!1),u!==null&&f!==null&&Ud(s,f,u,d,!0)}}a:{if(c=r?bt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=br;else if(mr(c))if(xr)v=Ar;else{v=Or;var y=Dr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Yt(r.elementType)&&(v=br):v=kr;if(v&&=v(e,r)){hr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Vt(c,`number`,c.value)}switch(y=r?bt(r):window,e){case`focusin`:(mr(y)||y.contentEditable===`true`)&&(Br=y,Vr=r,Hr=null);break;case`focusout`:Hr=Vr=Br=null;break;case`mousedown`:Ur=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ur=!1,Wr(s,n,i);break;case`selectionchange`:if(zr)break;case`keydown`:case`keyup`:Wr(s,n,i)}var b;if(nr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ur?cr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ar&&n.locale!==`ko`&&(ur||x!==`onCompositionStart`?x===`onCompositionEnd`&&ur&&(b=mn()):(dn=i,fn=`value`in dn?dn.value:dn.textContent,ur=!0)),y=Vd(r,x),0<y.length&&(x=new Ln(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=lr(n),b!==null&&(x.data=b)))),(b=ir?dr(e,n):fr(e,n))&&(x=Vd(r,`onBeforeInput`),0<x.length&&(y=new Ln(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),Dd(s,e,r,n,i)}Pd(s,t)})}function Bd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=sn(e,n),i!=null&&r.unshift(Bd(e,i,a)),i=sn(e,t),i!=null&&r.push(Bd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Hd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ud(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=sn(n,a),l!=null&&o.unshift(Bd(n,l,c))):i||(l=sn(n,a),l!=null&&o.push(Bd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Wd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function Kd(e){return(typeof e==`string`?e:``+e).replace(Wd,`
`).replace(Gd,``)}function qd(e,t){return t=Kd(t),Kd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Gt(e,``+r);break;case`className`:jt(e,`class`,r);break;case`tabIndex`:jt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:jt(e,n,r);break;case`style`:Jt(e,r,o);break;case`data`:if(t!==`object`){jt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=z);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),At(e,`popover`,r);break;case`xlinkActuate`:L(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:L(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:L(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:L(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:L(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:L(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:L(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:L(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:L(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:At(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Xt.get(n)||n,At(e,n,r))}}function Jd(e,t,n,r,a,o){switch(n){case`style`:Jt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Gt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=z);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!wt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[F]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):At(e,n,r)}}}function Yd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Bt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ht(e,!!r,n,!0):Ht(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Wt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<Md.length;r++)Q(Md[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Yt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Jd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Xd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ht(e,!!n,n?[]:``,!1):Ht(e,!!n,t,!0)):Ht(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Ut(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Yt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Jd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Jd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Qd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var $d=null,ef=null;function tf(e){return e.nodeType===9?e:e.ownerDocument}function nf(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function rf(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function af(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sf=null;function cf(){var e=window.event;return e&&e.type===`popstate`?e===sf?!1:(sf=e,!0):(sf=null,!1)}var lf=typeof setTimeout==`function`?setTimeout:void 0,uf=typeof clearTimeout==`function`?clearTimeout:void 0,df=typeof Promise==`function`?Promise:void 0,ff=typeof queueMicrotask==`function`?queueMicrotask:df===void 0?lf:function(e){return df.resolve(null).then(e).catch(pf)};function pf(e){setTimeout(function(){throw e})}function mf(e){return e===`head`}function hf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Yp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)kf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,kf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[gt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&kf(e.ownerDocument.body);n=i}while(n);Yp(t)}function gf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function _f(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:_f(n),_t(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function vf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(r){if(!e[gt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}}else if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;if(e=wf(e.nextSibling),e===null)break}return null}function yf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=wf(e.nextSibling),e===null))return null;return e}function bf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=wf(e.nextSibling),e===null))return null;return e}function xf(e){return e.data===`$?`||e.data===`$~`}function Sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function Cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function wf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var Tf=null;function Ef(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return wf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function Df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function Of(e,t,n){switch(t=tf(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function kf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_t(e)}var Af=new Map,jf=new Set;function Mf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nf=A.d;A.d={f:Pf,r:Ff,D:Rf,C:zf,L:Bf,m:Vf,X:Uf,S:Hf,M:Wf};function Pf(){var e=Nf.f(),t=Nu();return e||t}function Ff(e){var t=yt(e);t!==null&&t.tag===5&&t.type===`form`?Rs(t):Nf.r(e)}var If=typeof document>`u`?null:document;function Lf(e,t,n){var r=If;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),jf.has(i)||(jf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Yd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Rf(e){Nf.D(e),Lf(`dns-prefetch`,e,null)}function zf(e,t){Nf.C(e,t),Lf(`preconnect`,e,t)}function Bf(e,t,n){Nf.L(e,t,n);var r=If;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=Kf(e);break;case`script`:a=Xf(e)}Af.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),Af.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(qf(a))||t===`script`&&r.querySelector(Zf(a))||(t=r.createElement(`link`),Yd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Vf(e,t){Nf.m(e,t);var n=If;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Xf(e)}if(!Af.has(a)&&(e=h({rel:`modulepreload`,href:e},t),Af.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Zf(a)))return}r=n.createElement(`link`),Yd(r,`link`,e),St(r),n.head.appendChild(r)}}}function Hf(e,t,n){Nf.S(e,t,n);var r=If;if(r&&e){var i=xt(r).hoistableStyles,a=Kf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(qf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=Af.get(a))&&ep(e,n);var c=o=r.createElement(`link`);St(c),Yd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,$f(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Uf(e,t){Nf.X(e,t);var n=If;if(n&&e){var r=xt(n).hoistableScripts,i=Xf(e),a=r.get(i);a||(a=n.querySelector(Zf(i)),a||(e=h({src:e,async:!0},t),(t=Af.get(i))&&tp(e,t),a=n.createElement(`script`),St(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Wf(e,t){Nf.M(e,t);var n=If;if(n&&e){var r=xt(n).hoistableScripts,i=Xf(e),a=r.get(i);a||(a=n.querySelector(Zf(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=Af.get(i))&&tp(e,t),a=n.createElement(`script`),St(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Gf(e,t,n,r){var a=(a=pe.current)?Mf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Kf(n.href),n=xt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Kf(n.href);var o=xt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(qf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Af.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Af.set(e,n),o||Yf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Xf(n),n=xt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Kf(e){return`href="`+Rt(e)+`"`}function qf(e){return`link[rel="stylesheet"][`+e+`]`}function Jf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Yf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Yd(t,`link`,n),St(t),e.head.appendChild(t))}function Xf(e){return`[src="`+Rt(e)+`"]`}function Zf(e){return`script[async]`+e}function Qf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,St(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),St(r),Yd(r,`style`,a),$f(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Kf(n.href);var o=e.querySelector(qf(a));if(o)return t.state.loading|=4,t.instance=o,St(o),o;r=Jf(n),(a=Af.get(a))&&ep(r,a),o=(e.ownerDocument||e).createElement(`link`),St(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Yd(o,`link`,r),t.state.loading|=4,$f(o,n.precedence,e),t.instance=o;case`script`:return o=Xf(n.src),(a=e.querySelector(Zf(o)))?(t.instance=a,St(a),a):(r=n,(a=Af.get(o))&&(r=h({},n),tp(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),St(a),Yd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,$f(r,n.precedence,e));return t.instance}function $f(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ep(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function tp(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var np=null;function rp(e,t,n){if(np===null){var r=new Map,i=np=new Map;i.set(n,r)}else i=np,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[gt]||a[P]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function ip(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function ap(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function op(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function sp(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Kf(r.href),a=t.querySelector(qf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=up.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,St(a);return}a=t.ownerDocument||t,r=Jf(r),(i=Af.get(i))&&ep(r,i),a=a.createElement(`link`),St(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Yd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=up.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var cp=0;function lp(e,t){return e.stylesheets&&e.count===0&&fp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&fp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&cp===0&&(cp=62500*Qd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>cp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function up(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dp=null;function fp(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dp=new Map,t.forEach(pp,e),dp=null,up.call(e))}function pp(e,t){if(!(t.state.loading&4)){var n=dp.get(e);if(n)var r=n.get(null);else{n=new Map,dp.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=up.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var mp={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function hp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function gp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new hp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=vi(3,null,null,t),e.current=a,a.stateNode=e,t=ga(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ya(a),e}function _p(e){return e?(e=gi,e):gi}function vp(e,t,n,r,i,a){i=_p(i),r.context===null?r.context=i:r.pendingContext=i,r=Za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Qa(e,r,t),n!==null&&(Ou(n,e,t),$a(n,e,t))}function yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bp(e,t){yp(e,t),(e=e.alternate)&&yp(e,t)}function xp(e){if(e.tag===13||e.tag===31){var t=pi(e,67108864);t!==null&&Ou(t,e,67108864),bp(e,67108864)}}function Sp(e){if(e.tag===13||e.tag===31){var t=Eu();t=ot(t);var n=pi(e,t);n!==null&&Ou(n,e,t),bp(e,t)}}var Cp=!0;function wp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,Ep(e,t,n,r)}finally{A.p=a,k.T=i}}function Tp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,Ep(e,t,n,r)}finally{A.p=a,k.T=i}}function Ep(e,t,n,r){if(Cp){var i=Dp(r);if(i===null)zd(e,t,r,Op,n),zp(e,r);else if(Vp(i,e,t,n,r))r.stopPropagation();else if(zp(e,r),t&4&&-1<Rp.indexOf(e)){for(;i!==null;){var a=yt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ye(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-He(o);s.entanglements[1]|=c,o&=~c}gd(a),!(K&6)&&(mu=N()+500,_d(0,!1))}}break;case 31:case 13:s=pi(a,2),s!==null&&Ou(s,a,2),Nu(),bp(a,2)}if(a=Dp(r),a===null&&zd(e,t,r,Op,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else zd(e,t,r,null,n)}}function Dp(e){return e=en(e),kp(e)}var Op=null;function kp(e){if(Op=null,e=vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Op=e,null}function Ap(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(je()){case Me:return 2;case Ne:return 8;case Pe:case Fe:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var jp=!1,Mp=null,Np=null,Pp=null,Fp=new Map,Ip=new Map,Lp=[],Rp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function zp(e,t){switch(e){case`focusin`:case`focusout`:Mp=null;break;case`dragenter`:case`dragleave`:Np=null;break;case`mouseover`:case`mouseout`:Pp=null;break;case`pointerover`:case`pointerout`:Fp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Ip.delete(t.pointerId)}}function Bp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=yt(t),t!==null&&xp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vp(e,t,n,r,i){switch(t){case`focusin`:return Mp=Bp(Mp,e,t,n,r,i),!0;case`dragenter`:return Np=Bp(Np,e,t,n,r,i),!0;case`mouseover`:return Pp=Bp(Pp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Fp.set(a,Bp(Fp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Ip.set(a,Bp(Ip.get(a)||null,e,t,n,r,i)),!0}return!1}function Hp(e){var t=vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,lt(e.priority,function(){Sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,lt(e.priority,function(){Sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Up(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$t=r,n.target.dispatchEvent(r),$t=null}else return t=yt(n),t!==null&&xp(t),e.blockedOn=n,!1;t.shift()}return!0}function Wp(e,t,n){Up(e)&&n.delete(t)}function Gp(){jp=!1,Mp!==null&&Up(Mp)&&(Mp=null),Np!==null&&Up(Np)&&(Np=null),Pp!==null&&Up(Pp)&&(Pp=null),Fp.forEach(Wp),Ip.forEach(Wp)}function Kp(e,n){e.blockedOn===n&&(e.blockedOn=null,jp||(jp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Gp)))}var qp=null;function Jp(e){qp!==e&&(qp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){qp===e&&(qp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(kp(r||n)===null)continue;break}var a=yt(n);a!==null&&(e.splice(t,3),t-=3,Is(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Yp(e){function t(t){return Kp(t,e)}Mp!==null&&Kp(Mp,e),Np!==null&&Kp(Np,e),Pp!==null&&Kp(Pp,e),Fp.forEach(t),Ip.forEach(t);for(var n=0;n<Lp.length;n++){var r=Lp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Lp.length&&(n=Lp[0],n.blockedOn===null);)Hp(n),n.blockedOn===null&&Lp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[F]||null;if(typeof a==`function`)o||Jp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[F]||null)s=o.formAction;else if(kp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Jp(n)}}}function Xp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Zp(e){this._internalRoot=e}Qp.prototype.render=Zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,r=Eu();vp(n,r,e,t,null,null)},Qp.prototype.unmount=Zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vp(e.current,2,null,e,null,null),Nu(),t[dt]=null}};function Qp(e){this._internalRoot=e}Qp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lp.length&&t!==0&&t<Lp[n].priority;n++);Lp.splice(n,0,e),n===0&&Hp(e)}};var $p=n.version;if($p!==`19.2.0`)throw Error(i(527,$p,`19.2.0`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var em={bundleType:0,version:`19.2.0`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var tm=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tm.isDisabled&&tm.supportsFiber)try{ze=tm.inject(em),Be=tm}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=ac,s=oc,c=sc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=gp(e,1,!1,null,null,n,r,null,o,s,c,Xp),e[dt]=t.current,Ld(e),new Zp(t)}})),g=c(o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()}))()),_=c(m()),v=c(u());
/**
* @remix-run/router v1.23.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}var b;(function(e){e.Pop=`POP`,e.Push=`PUSH`,e.Replace=`REPLACE`})(b||={});var x=`popstate`;function S(e){e===void 0&&(e={});function t(e,t){let{pathname:n,search:r,hash:i}=e.location;return ee(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){return typeof t==`string`?t:D(t)}return ne(t,n,null,e)}function C(e,t){if(e===!1||e==null)throw Error(t)}function w(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function T(){return Math.random().toString(36).substr(2,8)}function E(e,t){return{usr:e.state,key:e.key,idx:t}}function ee(e,t,n,r){return n===void 0&&(n=null),y({pathname:typeof e==`string`?e:e.pathname,search:``,hash:``},typeof t==`string`?te(t):t,{state:n,key:t&&t.key||r||T()})}function D(e){let{pathname:t=`/`,search:n=``,hash:r=``}=e;return n&&n!==`?`&&(t+=n.charAt(0)===`?`?n:`?`+n),r&&r!==`#`&&(t+=r.charAt(0)===`#`?r:`#`+r),t}function te(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ne(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=b.Pop,c=null,l=u();l??(l=0,o.replaceState(y({},o.state,{idx:l}),``));function u(){return(o.state||{idx:null}).idx}function d(){s=b.Pop;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=b.Push;let r=ee(h.location,e,t);n&&n(r,e),l=u()+1;let d=E(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=b.Replace;let r=ee(h.location,e,t);n&&n(r,e),l=u();let i=E(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){let t=i.location.origin===`null`?i.location.href:i.location.origin,n=typeof e==`string`?e:D(e);return n=n.replace(/ $/,`%20`),C(t,`No window.location.(origin|href) available to create URL for href: `+n),new URL(n,t)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(x,d),c=e,()=>{i.removeEventListener(x,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}var re;(function(e){e.data=`data`,e.deferred=`deferred`,e.redirect=`redirect`,e.error=`error`})(re||={});function ie(e,t,n){return n===void 0&&(n=`/`),ae(e,t,n,!1)}function ae(e,t,n,r){let i=typeof t==`string`?te(t):t,a=_e(i.pathname||`/`,n);if(a==null)return null;let o=oe(e);k(o);let s=null;for(let e=0;s==null&&e<o.length;++e){let t=ge(a);s=pe(o[e],t,r)}return s}function oe(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=``);let i=(e,i,a)=>{let o={relativePath:a===void 0?e.path||``:a,caseSensitive:e.caseSensitive===!0,childrenIndex:i,route:e};o.relativePath.startsWith(`/`)&&(C(o.relativePath.startsWith(r),`Absolute route path "`+o.relativePath+`" nested under path `+(`"`+r+`" is not valid. An absolute child route path `)+`must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=Ee([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(C(e.index!==!0,`Index routes must not have child routes. Please remove `+(`all child routes from route path "`+s+`".`)),oe(e.children,t,c,s)),!(e.path==null&&!e.index)&&t.push({path:s,score:de(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(e.path===``||!((n=e.path)!=null&&n.includes(`?`)))i(e,t);else for(let n of O(e.path))i(e,t,n)}),t}function O(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=O(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function k(e){e.sort((e,t)=>e.score===t.score?fe(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var A=/^:[\w-]+$/,se=3,ce=2,le=1,ue=10,j=-2,M=e=>e===`*`;function de(e,t){let n=e.split(`/`),r=n.length;return n.some(M)&&(r+=j),t&&(r+=ce),n.filter(e=>!M(e)).reduce((e,t)=>e+(A.test(t)?se:t===``?le:ue),r)}function fe(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function pe(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=me({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=me({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ee([a,u.pathname]),pathnameBase:De(Ee([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ee([a,u.pathnameBase]))}return o}function me(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=he(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if(r===`*`){let e=s[n]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let c=s[n];return i&&!c?e[r]=void 0:e[r]=(c||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function he(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),w(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "`+e+`" will be treated as if it were `+(`"`+e.replace(/\*$/,`/*`)+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+(`please change the route path to "`+e.replace(/\*$/,`/*`)+`".`));let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`));return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function ge(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return w(!1,`The URL path "`+e+`" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent `+(`encoding (`+t+`).`)),e}}function _e(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var ve=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ye=e=>ve.test(e);function be(e,t){t===void 0&&(t=`/`);let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?te(e):e,a;if(n)if(ye(n))a=n;else{if(n.includes(`//`)){let e=n;n=n.replace(/\/\/+/g,`/`),w(!1,`Pathnames cannot have embedded double slashes - normalizing `+(e+` -> `+n))}a=n.startsWith(`/`)?xe(n.substring(1),`/`):xe(n,t)}else a=t;return{pathname:a,search:Oe(r),hash:ke(i)}}function xe(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Se(e,t,n,r){return`Cannot include a '`+e+`' character in a manually specified `+("`to."+t+"` field ["+JSON.stringify(r)+`].  Please separate it out to the `)+("`to."+n+"` field. Alternatively you may provide the full path as ")+`a string in <Link to="..."> and the router will parse it for you.`}function Ce(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function we(e,t){let n=Ce(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function Te(e,t,n,r){r===void 0&&(r=!1);let i;typeof e==`string`?i=te(e):(i=y({},e),C(!i.pathname||!i.pathname.includes(`?`),Se(`?`,`pathname`,`search`,i)),C(!i.pathname||!i.pathname.includes(`#`),Se(`#`,`pathname`,`hash`,i)),C(!i.search||!i.search.includes(`#`),Se(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=be(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ee=e=>e.join(`/`).replace(/\/\/+/g,`/`),De=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Oe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,ke=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function Ae(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}var je=v.createContext(null),Me=v.createContext(null),Ne=v.createContext(null),Pe=v.createContext(null),Fe=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Ie=v.createContext(null);function Le(e,t){let{relative:n}=t===void 0?{}:t;!Re()&&C(!1);let{basename:r,navigator:i}=v.useContext(Ne),{hash:a,pathname:o,search:s}=Ue(e,{relative:n}),c=o;return r!==`/`&&(c=o===`/`?r:Ee([r,o])),i.createHref({pathname:c,search:s,hash:a})}function Re(){return v.useContext(Pe)!=null}function ze(){return!Re()&&C(!1),v.useContext(Pe).location}function Be(e){v.useContext(Ne).static||v.useLayoutEffect(e)}function Ve(){let{isDataRoute:e}=v.useContext(Fe);return e?it():He()}function He(){!Re()&&C(!1);let e=v.useContext(je),{basename:t,future:n,navigator:r}=v.useContext(Ne),{matches:i}=v.useContext(Fe),{pathname:a}=ze(),o=JSON.stringify(we(i,n.v7_relativeSplatPath)),s=v.useRef(!1);return Be(()=>{s.current=!0}),v.useCallback(function(n,i){if(i===void 0&&(i={}),!s.current)return;if(typeof n==`number`){r.go(n);return}let c=Te(n,JSON.parse(o),a,i.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ee([t,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[t,r,o,a,e])}function Ue(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(Ne),{matches:i}=v.useContext(Fe),{pathname:a}=ze(),o=JSON.stringify(we(i,r.v7_relativeSplatPath));return v.useMemo(()=>Te(e,JSON.parse(o),a,n===`path`),[e,o,a,n])}function We(e,t){return Ge(e,t)}function Ge(e,t,n,r){!Re()&&C(!1);let{navigator:i}=v.useContext(Ne),{matches:a}=v.useContext(Fe),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:`/`;o&&o.route;let l=ze(),u;if(t){let e=typeof t==`string`?te(t):t;!(c===`/`||e.pathname?.startsWith(c))&&C(!1),u=e}else u=l;let d=u.pathname||`/`,f=d;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);f=`/`+d.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let p=ie(e,{pathname:f}),m=Xe(p&&p.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:Ee([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ee([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);return t&&m?v.createElement(Pe.Provider,{value:{location:N({pathname:`/`,search:``,hash:``,state:null,key:`default`},u),navigationType:b.Pop}},m):m}function Ke(){let e=rt(),t=Ae(e)?e.status+` `+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var qe=v.createElement(Ke,null),Je=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error(`React Router caught the following error during render`,e,t)}render(){return this.state.error===void 0?this.props.children:v.createElement(Fe.Provider,{value:this.props.routeContext},v.createElement(Ie.Provider,{value:this.state.error,children:this.props.component}))}};function Ye(e){let{routeContext:t,match:n,children:r}=e,i=v.useContext(je);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Fe.Provider,{value:t},r)}function Xe(e,t,n,r){if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);!(e>=0)&&C(!1),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&e[t.route.id]===void 0&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,r,i)=>{let l,u=!1,d=null,f=null;n&&(l=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||qe,s&&(c<0&&i===0?(ot(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,f=null):c===i&&(u=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=l?d:u?f:r.route.Component?v.createElement(r.route.Component,null):r.route.element?r.route.element:e,v.createElement(Ye,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?v.createElement(Je,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var Ze=function(e){return e.UseBlocker=`useBlocker`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e}(Ze||{}),Qe=function(e){return e.UseBlocker=`useBlocker`,e.UseLoaderData=`useLoaderData`,e.UseActionData=`useActionData`,e.UseRouteError=`useRouteError`,e.UseNavigation=`useNavigation`,e.UseRouteLoaderData=`useRouteLoaderData`,e.UseMatches=`useMatches`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e.UseRouteId=`useRouteId`,e}(Qe||{});function $e(e){let t=v.useContext(je);return!t&&C(!1),t}function et(e){let t=v.useContext(Me);return!t&&C(!1),t}function tt(e){let t=v.useContext(Fe);return!t&&C(!1),t}function nt(e){let t=tt(e),n=t.matches[t.matches.length-1];return!n.route.id&&C(!1),n.route.id}function rt(){let e=v.useContext(Ie),t=et(Qe.UseRouteError),n=nt(Qe.UseRouteError);return e===void 0?t.errors?.[n]:e}function it(){let{router:e}=$e(Ze.UseNavigateStable),t=nt(Qe.UseNavigateStable),n=v.useRef(!1);return Be(()=>{n.current=!0}),v.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r==`number`?e.navigate(r):e.navigate(r,N({fromRouteId:t},i)))},[e,t])}var at={};function ot(e,t,n){!t&&!at[e]&&(at[e]=!0)}var st=(e,t,n)=>(``+t+("You can use the `"+e+"` future flag to opt-in early. ")+(`For more information, see `+n+`.`),void 0);function ct(e,t){e?.v7_startTransition===void 0&&st(`v7_startTransition`,"React Router will begin wrapping state updates in `React.startTransition` in v7",`https://reactrouter.com/v6/upgrading/future#v7_starttransition`),e?.v7_relativeSplatPath===void 0&&(!t||t.v7_relativeSplatPath===void 0)&&st(`v7_relativeSplatPath`,`Relative route resolution within Splat routes is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`),t&&(t.v7_fetcherPersist===void 0&&st(`v7_fetcherPersist`,`The persistence behavior of fetchers is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`),t.v7_normalizeFormMethod===void 0&&st(`v7_normalizeFormMethod`,"Casing of `formMethod` fields is being normalized to uppercase in v7",`https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`),t.v7_partialHydration===void 0&&st(`v7_partialHydration`,"`RouterProvider` hydration behavior is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_partialhydration`),t.v7_skipActionErrorRevalidation===void 0&&st(`v7_skipActionErrorRevalidation`,"The revalidation behavior after 4xx/5xx `action` responses is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`))}v.startTransition;function lt(e){C(!1)}function ut(e){let{basename:t=`/`,children:n=null,location:r,navigationType:i=b.Pop,navigator:a,static:o=!1,future:s}=e;Re()&&C(!1);let c=t.replace(/^\/*/,`/`),l=v.useMemo(()=>({basename:c,navigator:a,static:o,future:N({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r==`string`&&(r=te(r));let{pathname:u=`/`,search:d=``,hash:f=``,state:p=null,key:m=`default`}=r,h=v.useMemo(()=>{let e=_e(u,c);return e==null?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[c,u,d,f,p,m,i]);return h==null?null:v.createElement(Ne.Provider,{value:l},v.createElement(Pe.Provider,{children:n,value:h}))}function P(e){let{children:t,location:n}=e;return We(F(t),n)}new Promise(()=>{});function F(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,F(e.props.children,i));return}e.type!==lt&&C(!1),!(!e.props.index||!e.props.children)&&C(!1);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=F(e.props.children,i)),n.push(a)}),n}function dt(){return dt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dt.apply(this,arguments)}function ft(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mt(e,t){return e.button===0&&(!t||t===`_self`)&&!pt(e)}var ht=[`onClick`,`relative`,`reloadDocument`,`replace`,`state`,`target`,`to`,`preventScrollReset`,`viewTransition`],gt=`6`;try{window.__reactRouterVersion=gt}catch{}var _t=v.startTransition;_.flushSync,v.useId;function vt(e){let{basename:t,children:n,future:r,window:i}=e,a=v.useRef();a.current??=S({window:i,v5Compat:!0});let o=a.current,[s,c]=v.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},u=v.useCallback(e=>{l&&_t?_t(()=>c(e)):c(e)},[c,l]);return v.useLayoutEffect(()=>o.listen(u),[o,u]),v.useEffect(()=>ct(r),[r]),v.createElement(ut,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var yt=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,bt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xt=v.forwardRef(function(e,t){let{onClick:n,relative:r,reloadDocument:i,replace:a,state:o,target:s,to:c,preventScrollReset:l,viewTransition:u}=e,d=ft(e,ht),{basename:f}=v.useContext(Ne),p,m=!1;if(typeof c==`string`&&bt.test(c)&&(p=c,yt))try{let e=new URL(window.location.href),t=c.startsWith(`//`)?new URL(e.protocol+c):new URL(c),n=_e(t.pathname,f);t.origin===e.origin&&n!=null?c=n+t.search+t.hash:m=!0}catch{}let h=Le(c,{relative:r}),g=wt(c,{replace:a,state:o,target:s,preventScrollReset:l,relative:r,viewTransition:u});function _(e){n&&n(e),e.defaultPrevented||g(e)}return v.createElement(`a`,dt({},d,{href:p||h,onClick:m||i?n:_,ref:t,target:s}))}),St;(function(e){e.UseScrollRestoration=`useScrollRestoration`,e.UseSubmit=`useSubmit`,e.UseSubmitFetcher=`useSubmitFetcher`,e.UseFetcher=`useFetcher`,e.useViewTransitionState=`useViewTransitionState`})(St||={});var Ct;(function(e){e.UseFetcher=`useFetcher`,e.UseFetchers=`useFetchers`,e.UseScrollRestoration=`useScrollRestoration`})(Ct||={});function wt(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,c=Ve(),l=ze(),u=Ue(e,{relative:o});return v.useCallback(t=>{if(mt(t,n)){t.preventDefault();let n=r===void 0?D(l)===D(u):r;c(e,{replace:n,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[l,c,u,r,i,n,e,a,o,s])}var Tt=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),I=c(o(((e,t)=>{t.exports=Tt()}))()),Et=`bg.jpg`,Dt=[{name:`b1`,image:`b1.png`,label:`Beige Stone`},{name:`b2`,image:`b2.png`,label:`Light Teal`},{name:`b3`,image:`b3.png`,label:`Muted Coral`}],Ot=`g1.png`,kt=`g2.png`,At=`sawlastoneindustries@gmail.com`,jt=(e,t)=>{e.preventDefault();let n=t.split(`#`)[1];if(n){let e=document.getElementById(n);e&&e.scrollIntoView({behavior:`smooth`}),window.history.pushState(null,null,`#${n}`)}else window.scrollTo({top:0,behavior:`smooth`}),window.history.pushState(null,null,`/`)},L=({to:e,onClick:t,children:n})=>e.includes(`#`)?(0,I.jsx)(`a`,{href:e,className:`nav-link`,onClick:n=>{jt(n,e),t&&t()},children:n}):(0,I.jsx)(xt,{to:e,className:`nav-link`,onClick:t,children:n}),R=({image:e,index:t})=>{let n={backgroundImage:`url(${e})`,backgroundSize:`cover`,backgroundPosition:`center`,zIndex:10-t,marginLeft:t>0?`-1.2vmin`:`0`,animationDelay:`${t*1}s`};return(0,I.jsx)(`div`,{className:`overlapping-swatch bouncing-swatch image-effect-container`,style:n})},Mt=({image:e,size:t=`14vmin`,rotate:n=`10deg`,zIndex:r=1,showLabel:i=!1,animated:a=!1})=>{let o={backgroundImage:`url(${e})`,width:t,height:t,transform:`rotate(${n})`,zIndex:r,borderRadius:`1.8vmin`,backgroundSize:`cover`,backgroundPosition:`center`,overflow:`hidden`,boxShadow:`0 0.8vmin 2vmin rgba(0,0,0,0.4)`};return(0,I.jsxs)(`div`,{className:`rotated-image-card ${a?`floating-card`:``} image-effect-container`,style:o,children:[i&&(0,I.jsxs)(`div`,{className:`image-label`,children:[(0,I.jsx)(`div`,{className:`resize-handle top-left`}),(0,I.jsx)(`div`,{className:`resize-handle top-right`}),(0,I.jsx)(`div`,{className:`resize-handle bottom-left`}),(0,I.jsx)(`div`,{className:`resize-handle bottom-right`})]}),(0,I.jsx)(`div`,{className:`resize-handle top-left`}),(0,I.jsx)(`div`,{className:`resize-handle top-right`}),(0,I.jsx)(`div`,{className:`resize-handle bottom-left`}),(0,I.jsx)(`div`,{className:`resize-handle bottom-right`})]})},Nt={display:`inline-block`,padding:`2vmin 6vmin`,borderRadius:`9999px`,fontWeight:`600`,cursor:`pointer`,textAlign:`center`,transition:`all 0.3s ease`,fontSize:`1.8vmin`,backgroundColor:`white`,color:`black`,border:`0.1vmin solid white`,textDecoration:`none`,zIndex:10,position:`relative`},Pt=`animated-collaborate-button`;function Ft(){let[e,t]=(0,v.useState)(!1),n=()=>t(!e),r=Dt.slice(0,3);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Italianno&display=swap`,rel:`stylesheet`}),(0,I.jsx)(`style`,{children:`
        * {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 1.8vmin; 
          scroll-behavior: smooth; /* Add smooth scrolling for hash links */
        }

        /* 1. Define Image Shine Keyframes */
        @keyframes image-shine {
          0% { transform: skewX(-20deg) translateX(-100%); }
          100% { transform: skewX(-20deg) translateX(200%); }
        }
        
        /* 2. Shine Container Setup (applies to both cards and swatches) */
        .image-effect-container {
            position: relative;
            overflow: hidden; /* Crucial to contain the shine */
            transition: transform 0.3s ease-out, box-shadow 0.3s ease-out; /* Add transition for hover effects */
        }
        
        /* 3. Shine Pseudo-element Base */
        .image-effect-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.4) 50%, /* Shine intensity */
              rgba(255, 255, 255, 0) 100%
            );
            /* Initial placement off-screen left */
            transform: skewX(-20deg) translateX(-150%); 
            transition: transform 0.7s ease-in-out;
            pointer-events: none; /* Allows clicks on the element underneath */
            z-index: 5; /* Above the image/background */
        }
        
        /* 4. Shine Animation on Hover */
        .image-effect-container:hover::before {
            /* Move shine across the element */
            animation: image-shine 0.7s ease-in-out forwards;
        }


        @keyframes sparkle-in {
            0% { opacity: 0; transform: scale(0.5); }
            100% { opacity: 1; transform: scale(1); }
        }

        a svg {
            opacity: 0; 
            transform: scale(0.5); 
            animation: sparkle-in 0.5s ease-out 1 forwards;
        }
        a svg:nth-child(1) { animation-delay: 0s; }
        a svg:nth-child(2) { animation-delay: 0.1s; }
        a svg:nth-child(3) { animation-delay: 0.2s; }
        a svg:nth-child(4) { animation-delay: 0.3s; }
        a svg:nth-child(5) { animation-delay: 0.4s; }
        
        @keyframes bounce-up-down {
            0%, 50%, 100% { transform: translateY(0); }
            25% { transform: translateY(-2vmin); }
        }

        @keyframes simple-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2vmin); }
        }


        .hero-background {
          position: relative;
          width: 98%;
          height: 98vh;
          margin: 1%; 
          border-radius: 1.8vw;
          overflow: hidden;
          background: url(${Et}) center/cover no-repeat;
          box-shadow: 0 0.6vmin 1.2vmin -0.3vmin rgba(0,0,0,0.25);
          cursor: default;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.35);
        }

        .top-header {
          position: absolute;
          top: 0; left: 0; right: 0;
          padding: 3vmin 4vmin; 
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          z-index: 20;
        }

        .logo-text {
          color: transparent;
          font-size: 3vmin; 
          font-weight: 700;
          letter-spacing: 0.1em;
          display: block; 
          align-items: center;
        }
        
        .logo-container {
            display: flex;
            align-items: center;
            gap: 1.2vmin;
        }

        .main-nav { display: none; }
        @media(min-width:768px){
          .main-nav { display: flex; gap: 6vmin; }
        }

        .nav-link {
          color: white;
          font-weight: 500;
          text-decoration: none;
          font-size: 2.2vmin; 
          transition: color .2s;
        }
        .nav-link:hover { color: #86efac; }

        /* CONTACT US BUTTON STYLES (now using anchor tag) */
        .contact-button {
          background: #4B7062; /* Primary Green/Teal */
          color: white;
          border: 0.1vmin solid #4B7062;
          padding: 1.5vmin 2.5vmin; 
          border-radius: 2.5vmin;
          font-size: 2.2vmin; 
          cursor: pointer;
          box-shadow: 0vmin 0.3vmin 0.7vmin rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          text-decoration: none; /* Ensure it looks like a button, not a link */
          display: inline-block;
        }
        .contact-button:hover {
          background: #5E8777; /* Lighter Hover Green/Teal */
          transform: scale(1.05);
        }

        .hamburger-icon {
          display: block;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 5vmin; 
        }
        @media(min-width:768px){ .hamburger-icon { display: none; } }

        .mobile-nav {
          position: absolute;
          top: 0; right: 0;
          width: 80vmin; 
          max-width: 40vw; 
          height: 100vh;
          background: rgba(0,0,0,0.95);
          transform: translateX(100%);
          transition: transform .3s ease;
          display: flex;
          flex-direction: column;
          padding-top: 12vh; 
          z-index: 30;
        }
        .mobile-nav.open { transform: translateX(0); }
        .mobile-nav .nav-link {
          padding: 4vmin 6vmin; 
          border-bottom: 0.1vmin solid rgba(255,255,255,.2);
          font-size: 3vmin; 
        }

        .hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center; 
          align-items: center;
          color: white;
          text-align: center;
          z-index: 10;
        }
        
        @media (max-width: 767px) {
            .detail-text-left {
                bottom: 5vh; 
            }
        }


        .script-title {
          font-family: 'Italianno', cursive;
          font-size: 6vw; 
          font-weight: 400;
          line-height: 0.8; 
          margin-bottom: 1vmin; 
          text-shadow: 0 0.5vmin 0.8vmin rgba(0,0,0,0.5);
          white-space: normal;
        }
        
        @media (max-width: 668px) {
          .script-title {
            font-size: 12vw;
            margin: 10px; 
          }
          .script-title span {
            display: inline !important;
            margin-top: 0 !important;
          }
        }

        .action-buttons {
        margin-top: 4vmin;
          display: flex;
          gap: 2.5vmin; 
        }
          
          
        .white-button, .transparent-button {
          padding: 2vmin 6vmin; 
          border-radius: 9999px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: background .2s, border-color .2s, padding .2s, font-size .2s;
          font-size: 1.8vmin; 
          text-decoration: none !important; 
        }

        @media (max-width: 768px) {
            .white-button, .transparent-button {
                font-size: 3vmin; 
                padding: 3vmin 8vmin; 
            }
        }
        .white-button {
          background: white;
          color: black;
          /* Adjusted border for the white button to enable the color swap */
          border: 0.1vmin solid white; 
        }
        
        .transparent-button {
          border: 0.1vmin solid white;
          background: transparent;
          color: white;
        }
        .transparent-button:hover {
          background: rgba(255,255,255,0.1);
        }

        /* === COLLABORATE BUTTON STYLES: MATCHING CONTACT US HOVER === */
        .${Pt} {
            transition: all 0.3s ease !important;
        }

        .${Pt}:hover {
            /* 1. Color Swap to match Contact Us background */
            background-color: #5E8777 !important; 
            color: white !important; 
            /* Match Contact Us Border (since the Contact Us border uses the same color as background) */
            border-color: #5E8777 !important; 

            /* 2. Gentle Lift (Same as Contact Us hover) */
            transform: scale(1.05) !important;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4) !important;
        }
        /* === END COLLABORATE BUTTON STYLES === */


        .detail-base {
          position: absolute;
          padding: 2vmin;
          color: white;
          z-index: 20;
          line-height: 2;
        }

        .detail-text-left {
          bottom: 2vh;
          left: 2vw;
          border-radius: 1.2vmin;
          padding: 2vmin 2.5vmin;
          text-align: left;
          display: flex;
          flex-direction: column; 
          align-items: flex-start;
          line-height: 1.5; 
        }

        .detail-text-left p {
          font-size: 1.8vmin; 
          margin: 0;
          margin-top: 0vmin; 
        }

        .rotated-cards-wrapper {
          position: relative; 
          width: ${30*.85}vmin; 
          height: ${35*.85}vmin; 
          display: flex; 
          flex-direction: column; 
          align-items: flex-start; 
          gap: 4vmin; 
          margin-left:5vmin;
          transform: translateY(-8vmin); 
        }


        .rotated-image-card {
          position: relative; 
          border-radius: 1.8vmin;
          background-size: cover;
          background-position: center;
          cursor: pointer;
          background-color: transparent; 
          box-shadow: 0 1vmin 3vmin rgba(0,0,0,0.4); 
          transition: transform 0.3s ease; 
        }
        
        /* Mirror effect on hover for rotated cards (Flipping effect) */
        .rotated-image-card:hover {
          /* ScaleX(-1) flips the image horizontally (mirror effect) */
          transform: rotate(0deg) scaleX(-1) !important; 
        }

        .image-label {
          position: absolute;
          bottom: -2.5vmin; 
          left: 50%;
          transform: translateX(-50%);
          background: #4285F4; 
          color: white;
          padding: 0.5vmin 1.2vmin;
          border-radius: 0.5vmin;
          font-size: 1.2vmin; 
          white-space: nowrap;
          z-index: 25; 
        }

        .resize-handle {
          position: absolute;
          width: 1.5vmin; 
          height: 1.5vmin;
          background: white;
          border: 0.2vmin solid #4285F4;
          border-radius: 50%; 
          z-index: 30; 
        }
        .resize-handle.top-left { top: -0.75vmin; left: -0.75vmin; }
        .resize-handle.top-right { top: -0.75vmin; right: -0.75vmin; }
        .resize-handle.bottom-left { bottom: -0.75vmin; left: -0.75vmin; }
        .resize-handle.bottom-right { bottom: -0.75vmin; right: -0.75vmin; }
        
        .swatch-details-container {
          bottom: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 2vmin;
        }
          

        .overlapping-swatch-wrapper {
          display: flex;
          align-items: flex-end;
          margin-bottom: -1.2vmin; 
        }

        .overlapping-swatch {
          width: 7vmin; 
          height: 7vmin;
          border-radius: 1.2vmin;
          box-shadow: 0 0.6vmin 1.8vmin rgba(0,0,0,0.3);
          cursor: pointer;
          transition: transform 0.3s ease; 
        }
        
        /* Mirror effect on hover for swatches (Flipping effect) */
        .overlapping-swatch:hover {
          transform: scaleX(-1); 
        }
        
        /* Bounce Animation Application for Swatches: */
        @keyframes sequential-bounce-loop {
            0.0000% { transform: translateY(0); } 
            16.6666% { transform: translateY(-2vmin); } 
            50.0000% { transform: translateY(0); } 
            50.0001%, 100.0000% { transform: translateY(0); }
        }
        .bouncing-swatch {
          animation: sequential-bounce-loop 6s ease-in-out infinite;
        }
        .bouncing-swatch:nth-child(1) { animation-delay: 0s; }
        .bouncing-swatch:nth-child(2) { animation-delay: 1s; }
        .bouncing-swatch:nth-child(3) { animation-delay: 2s; }


        .detail-box-bg {
          background: rgba(0,0,0,0.5);
          border-radius: 1.8vmin;
          padding: 2.5vmin 4vmin; 
          width: max-content;
          box-shadow: 0 1.2vmin 3.5vmin rgba(0,0,0,0.7);
          text-align: center;
          margin: 0 1.5vmin 5vmin 1.5vmin; 
        }

        .featured-finish-text {
          font-size: 2.5vmin; 
          font-weight: 200;
          margin: 0;
          padding-bottom: 0vmin;
        }
        
        /* Floating Animation Keyframes */
        @keyframes drift-float {
            0% { transform: translate(-0.5vmin, -0.5vmin); } 
            50% { transform: translate(0.5vmin, 0.5vmin); } 
            100% { transform: translate(-0.5vmin, -0.5vmin); }
        }

        /* Applying the floating animation */
        .rotated-image-card.floating-card {
            animation: drift-float 8s ease-in-out infinite alternate;
        }
        
        .rotated-cards-wrapper .floating-card:nth-child(1) {
            animation: drift-float 10s ease-in-out infinite alternate-reverse;
            transform: rotate(-5deg); 
        }

        .rotated-cards-wrapper .floating-card:nth-child(2) {
            animation: drift-float 8s ease-in-out infinite alternate;
            transform: rotate(-5deg); 
        }
      `}),(0,I.jsx)(`div`,{className:`app-wrapper`,children:(0,I.jsxs)(`div`,{className:`hero-background`,children:[(0,I.jsx)(`div`,{className:`overlay`}),(0,I.jsxs)(`header`,{className:`top-header`,children:[(0,I.jsxs)(`div`,{className:`logo-text`,children:[(0,I.jsx)(`button`,{className:`hamburger-icon`,onClick:n,children:(0,I.jsx)(`svg`,{width:`24`,height:`24`,stroke:`currentColor`,strokeWidth:`2`,fill:`none`,children:e?(0,I.jsx)(`path`,{d:`M18 6L6 18M6 6l12 12`}):(0,I.jsx)(`path`,{d:`M3 6h18M3 12h18M3 18h18`})})}),(0,I.jsx)(`div`,{className:`logo-container`,children:`LOGO`})]}),(0,I.jsxs)(`nav`,{className:`main-nav`,children:[(0,I.jsx)(L,{to:`/#home-content-wrapper`,children:`Home`}),(0,I.jsx)(L,{to:`/#about`,children:`About us`}),(0,I.jsx)(L,{to:`/#style`,children:`Style`}),(0,I.jsx)(L,{to:`/#collection`,children:`Collection`})]}),(0,I.jsx)(`a`,{href:`mailto:${At}`,className:`contact-button`,children:`Contact Us`})]}),(0,I.jsxs)(`nav`,{className:`mobile-nav ${e?`open`:``}`,children:[(0,I.jsx)(L,{to:`/#home-content-wrapper`,onClick:n,children:`Home`}),(0,I.jsx)(L,{to:`/#about`,onClick:n,children:`About us`}),(0,I.jsx)(L,{to:`/#style`,onClick:n,children:`Style`}),(0,I.jsx)(L,{to:`/#collection`,onClick:n,children:`Collection`})]}),(0,I.jsxs)(`div`,{className:`hero-content`,children:[(0,I.jsxs)(`h1`,{className:`script-title`,children:[`Crafting Spaces That Last`,` `,(0,I.jsx)(`span`,{className:`script-title`,style:{display:`block`,marginTop:`10px`},children:`A Lifetime.`})]}),(0,I.jsx)(`div`,{className:`action-buttons`,children:(0,I.jsx)(xt,{to:`/get-quote`,className:`white-button ${Pt}`,style:Nt,children:`Let's Collaborate`})})]}),(0,I.jsxs)(`div`,{className:`detail-base detail-text-left`,children:[(0,I.jsxs)(`div`,{className:`rotated-cards-wrapper`,children:[(0,I.jsx)(Mt,{image:Ot,rotate:`-5deg`,size:`12.75vmin`,zIndex:2,animated:!0}),(0,I.jsx)(Mt,{image:kt,rotate:`-5deg`,size:`12.75vmin`,zIndex:3,showLabel:!0,animated:!0})]}),(0,I.jsx)(`p`,{children:`Experience the natural durability and `}),(0,I.jsx)(`p`,{children:`elegance of premium Kota Stone.`})]}),(0,I.jsxs)(`div`,{className:`detail-base swatch-details-container`,children:[(0,I.jsx)(`div`,{className:`overlapping-swatch-wrapper`,children:r.map((e,t)=>(0,I.jsx)(R,{image:e.image,index:t},e.name))}),(0,I.jsxs)(`div`,{className:`detail-box-bg`,children:[(0,I.jsx)(`p`,{className:`featured-finish-text`,children:`Strong. Elegant.`}),(0,I.jsx)(`p`,{className:`featured-finish-text`,children:`Everlasting.`})]})]})]})})]})}var It=(e,t=2e3)=>{let[n,r]=(0,v.useState)(0),[i,a]=(0,v.useState)(!1),o=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let e=o.current;if(!e)return;let t=new IntersectionObserver(([e])=>{e.isIntersecting&&n===0&&a(!0)},{threshold:.5});return t.observe(e),()=>{e&&t.unobserve(e)}},[n]),(0,v.useEffect)(()=>{if(!i||n===e)return;let a=null,o,s=n=>{a||=n;let i=n-a,c=Math.min(i/t,1)*e;r(c),i<t?o=requestAnimationFrame(s):r(e)};return o=requestAnimationFrame(s),()=>cancelAnimationFrame(o)},[e,t,i]),{count:n,ref:o}},Lt=({end:e,label:t,duration:n=2e3,className:r})=>{let i,a=``,o=String(e).toLowerCase();o.endsWith(`k+`)?(i=parseFloat(o.slice(0,-2))*1e3,a=`k+`):o.endsWith(`+`)?(i=parseFloat(o.slice(0,-1)),a=`+`):o.endsWith(`%`)?(i=parseFloat(o.slice(0,-1)),a=`%`):i=parseFloat(e);let{count:s,ref:c}=It(i,n),l;return l=s>=i?e:a===`k+`?s>=1e3?(Math.floor(s/100)/10).toFixed(1)+`k`:Math.floor(s):a===`%`?Math.floor(s)+`%`:Math.floor(s)+a,e===`29+`&&s<29&&(l=Math.floor(s)),(0,I.jsxs)(`div`,{ref:c,className:r,children:[(0,I.jsx)(`span`,{className:`statNumber`,children:l}),(0,I.jsx)(`span`,{className:`statLabel`,children:t})]})},Rt=({id:e})=>{let t=`#437060`;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{jsx:`true`,children:`
        /* --- Base Styles for All Screens (Mobile-First) --- */
        .aboutUsContainer {
          display: flex;
          flex-direction: column; 
          /* CHANGE 1 & 2: Set padding to 5% left/right and 80px top/bottom */
          padding: 80px 5%; 
          /* Remove max-width and margin auto here to let 5% padding be the boundary */
          /* max-width: 80vw; */ 
          /* margin: 0 auto; */
          font-family: 'Inter', sans-serif;
          color: #4a4a4a; 
          line-height: 1.6;
          background-color: white;
          /* CHANGE: Height set to auto to fit content */
          height: auto; 
        }
        .ctaButton.getQuote {
          text-decoration: none;
        }

        /* --- Text Content Styles --- */
        .aboutTextContent {
          margin-bottom: 50px;
          /* CHANGE 1: Set text alignment to LEFT for small screens */
          text-align: left; 
        }

        .mainHeading, .sinceYear {
          color: ${t}; 
          font-weight: 500; 
          font-size: 4.5vw; 
          margin-bottom: 0;
          line-height: 1.1;
        }

        .sinceYear {
          margin-top: 5px;
          margin-bottom: 30px;
        }

        .introParagraph, .masterySection p {
          font-size: 1.5vw;
          /* Reset centering for the text block itself on small screen */
          margin: 0 0 20px 0; 
          max-width: none; /* Let text flow naturally up to container width */
        }
        
        .subHeading {
          color: #4D3E33;
          font-weight: 600; 
          font-size: 2.2vw;
          margin-top: 0;
          margin-bottom: 20px;
        }

        /* --- CTA and Stats Container (Right Side) --- */
        .aboutStatsCta {
          display: flex;
          flex-direction: column; 
          /* CHANGE 3 & 4: Center everything horizontally */
          align-items: center; 
          min-width: 280px;
          width: 100%; 
        }

        /* --- CTA Buttons - Centered for Mobile (Only one button now) --- */
        .ctaButtons {
          display: flex; 
          flex-direction: row; 
          /* CHANGE 3: Ensure button container is centered */
          justify-content: center; 
          gap: 15px; 
          width: 100%; 
          max-width: 400px; 
          margin-bottom: 50px;
        }

        .ctaButton {
          padding: 15px 25px; 
          cursor: pointer;
          text-align: center;
          font-size: 1.5vw;
          font-weight: 500; 
          border-radius: 8px; 
          border: 1px solid #d0d0d0; 
          background-color: #f0f0f0; 
          color: #000000;
          transition: background-color 0.3s, border-color 0.3s;
          white-space: nowrap; 
        }
        
        .ctaButton:hover {
            background-color: #e0e0e0; 
            border-color: #c0c0c0;
        }

        /* --- Statistics Grid: Two columns on Mobile (Base styles) --- */
        .statsGrid {
          display: flex; 
          flex-direction: row; 
          flex-wrap: wrap; 
          /* CHANGE 4: Center the grid items within the container */
          justify-content: center; 
          gap: 20px 10px; 
          width: 100%;
          max-width: 600px; 
          padding: 20px 0; 
          /* CHANGE 4: Use auto margins to center the block element itself */
          margin: 0 auto;
        }
        
        .statItem {
          text-align: center; 
          flex-basis: 45%; 
          max-width: 45%; 
          margin-top: 0 !important; 
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, border 0.3s;
          cursor: default;
          padding: 20px 10px; 
          border-radius: 12px;
          border: 1px solid transparent; 
        }
        
        .statItem:hover {
            transform: translateY(-5px); 
            box-shadow: 0 10px 20px rgba(67, 112, 96, 0.25);
            border: 1px solid rgba(67, 112, 96, 0.5); 
        }

        .statNumber {
          display: block;
          font-size: 3.3vw;
          font-weight: 500; 
          color: ${t}; 
          line-height: 1.1;
          margin-bottom: 5px;
        }

        .statLabel {
          display: block;
          font-size: 1.3vw;
          color: #666;
          font-weight: 400;
        }


        /* --- MEDIA QUERY for Larger Screens (Desktop - NO CHANGES) --- */
        @media (min-width: 992px) {
          .aboutUsContainer {
            flex-direction: row; 
            align-items: flex-start; 
            /* REVERT: Reset padding for large screen */
            padding: 80px 0; 
            max-width: 80vw;
            margin: 0 auto;
          }

          .aboutTextContent {
            flex: 3; 
            padding-right: 100px; 
            margin-bottom: 0;
            /* REVERT: Reset to left-align on desktop */
            text-align: left; 
          }

          /* Reset paragraph block centering for desktop */
          .introParagraph, .masterySection p {
            font-size: 16px; 
            margin-left: 0; 
            margin-right: 0;
            margin-bottom: 20px;
            max-width: 600px; /* Restore max-width for desktop paragraphs */
          }
          
          .aboutStatsCta {
            flex: 2; 
            min-width: 350px;
            align-items: flex-end; /* Align right on desktop */
          }
          
          /* Single button stacked, aligned right on desktop */
          .ctaButtons {
              flex-direction: column; 
              align-items: flex-end; 
              justify-content: flex-end; 
              gap: 10px;
              width: 250px; 
              max-width: none;
          }

          .ctaButton {
              font-size: 16px; 
              width: 100%; 
          }

          /* Stats Grid: Two columns using grid layout on desktop */
          .statsGrid {
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 50px 30px; 
            width: 250px; 
            max-width: none;
            padding: 0; 
            justify-content: flex-start; 
            /* REVERT: Remove auto margin for desktop */
            margin: 0;
          }
          
          .statItem {
            text-align: left; 
            flex-basis: auto; 
            max-width: none; 
            margin-top: 0;
          }

          /* Reverting to slightly larger, fixed text sizes on large screens */
          .mainHeading, .sinceYear { font-size: 48px; }
          .introParagraph, .masterySection p { font-size: 16px; }
          .subHeading { font-size: 20px; }
          .statNumber { font-size: 36px; }
          .statLabel { font-size: 14px; }
        }

        /* Smaller mobile adjustments for very narrow screens */
        @media (max-width: 480px) {
            .ctaButtons {
                max-width: 100%;
            }
            .ctaButton {
                width: 80%; 
                font-size: 16px; 
            }
            .statsGrid {
                justify-content: space-around; /* Use space-around again for better distribution */
                padding: 20px 0; 
            }
            .statItem {
                /* Keeping 45% to encourage two items per row */
            }
            /* Adjust text sizes for very small screens to avoid being too small */
            .mainHeading, .sinceYear { font-size: 8vw; }
            .introParagraph, .masterySection p { font-size: 3.5vw; }
            .subHeading { font-size: 5vw; }
            .statNumber { font-size: 7vw; }
            .statLabel { font-size: 4vw; }
        }
      `}),(0,I.jsxs)(`section`,{id:e,className:`aboutUsContainer`,children:[(0,I.jsxs)(`div`,{className:`aboutTextContent`,children:[(0,I.jsx)(`h1`,{className:`mainHeading`,children:`Crafting Excellence`}),(0,I.jsx)(`h1`,{className:`sinceYear`,children:`Since 1995`}),(0,I.jsx)(`p`,{className:`introParagraph`,children:`Sawla Stone Industries Has Been The Trusted Name In Premium Kota Stone Supply, Delivering Unmatched Quality And Service To Clients Across India And Beyond.`}),(0,I.jsxs)(`div`,{className:`masterySection`,children:[(0,I.jsx)(`h2`,{className:`subHeading`,children:`Three Decades Of Stone Mastery`}),(0,I.jsx)(`p`,{children:`From Our Quarries In Kota, Rajasthan, We Source And Supply The Finest Quality Natural Stones. Our Expertise Spans Across Greenish-Blue Kota, Brown Kota, Red Mandana, And Premium Polished Varieties.`}),(0,I.jsx)(`p`,{children:`What Sets Us Apart Is Our Commitment To Quality, Timely Delivery, And Personalized Service. Every Stone Is Carefully Selected And Processed To Meet The Highest Standards Of Durability And Aesthetic Appeal.`})]})]}),(0,I.jsxs)(`div`,{className:`aboutStatsCta`,children:[(0,I.jsx)(`div`,{className:`ctaButtons`,children:(0,I.jsx)(`a`,{className:`ctaButton getQuote`,href:`/get-quote`,target:`_blank`,rel:`noopener noreferrer`,children:`Get Quote`})}),(0,I.jsxs)(`div`,{className:`statsGrid`,children:[(0,I.jsx)(Lt,{end:`29+`,label:`Years Of Excellence`,className:`statItem`}),(0,I.jsx)(Lt,{end:`5k+`,label:`Clients`,className:`statItem`}),(0,I.jsx)(Lt,{end:`10k+`,label:`Projects Delivered`,className:`statItem`}),(0,I.jsx)(Lt,{end:`100%`,label:`Quality Guarantee`,className:`statItem`})]})]})]})]})},zt=[{id:1,image:`bg1.png`,title:`Blue`,heading:`Kota Blue`,desc:`Ranges From Greenish-Grey To Bluish Tones, Known For Its Calming Effect.`},{id:2,image:`bg2.png`,title:`Brown`,heading:`Kota Brown`,desc:`Features Earthy Tones Ideal For Artistic And Traditional Applications`},{id:3,image:`bg3.png`,title:`Other`,heading:`Other Colours`,desc:`Includes Black, Pink, Grey, Beige, And Yellowish Variants`}],Bt=()=>{let[e,t]=(0,v.useState)(0),n=zt.length,r=()=>{t(e===n-1?0:e+1)};return(0,v.useEffect)(()=>{let e=setInterval(()=>{r()},3e3);return()=>clearInterval(e)},[e]),(0,I.jsxs)(`div`,{className:`slider-container`,children:[(0,I.jsx)(`div`,{className:`dots`,children:zt.map((n,r)=>(0,I.jsx)(`span`,{onClick:()=>t(r),className:`dot ${e===r?`active`:``}`},r))}),(0,I.jsxs)(`div`,{className:`carousel-nav-arrows`,children:[(0,I.jsx)(`button`,{onClick:()=>{t(e===0?n-1:e-1)},className:`nav-arrow left-arrow`,children:`❮ `}),(0,I.jsx)(`button`,{onClick:r,className:`nav-arrow right-arrow`,children:`❯ `})]}),(0,I.jsx)(`div`,{className:`card-grid`,children:zt.map((n,r)=>(0,I.jsxs)(`div`,{className:`card ${r===e?`active-slide`:`inactive-slide`}`,onClick:()=>t(r),children:[(0,I.jsxs)(`div`,{className:`image-container`,children:[(0,I.jsx)(`img`,{src:n.image,alt:n.title,className:`image`}),(0,I.jsx)(`div`,{className:`image-reflection`}),(0,I.jsx)(`div`,{className:`overlay-text`,children:n.title})]}),(0,I.jsxs)(`div`,{className:`text-section`,children:[(0,I.jsx)(`h3`,{children:n.heading}),(0,I.jsx)(`p`,{children:n.desc})]})]},n.id))}),(0,I.jsx)(`style`,{children:`
        /* --- Base Styles (Larger Screens) --- */
        .slider-container {
          width: 80%;
          margin: 0 auto;
          padding: 30px 0;
          font-family: 'Arial', sans-serif;
          background-color: #fff;
          position: relative; /* For arrow positioning */
        }

        .dots {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 20px;
          gap: 15px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ccc;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .dot.active {
          width: 25px;
          border-radius: 8px;
          background: #6F4E37;
          height: 10px;
          margin: 0 5px;
        }

        /* Large Screen: Grid Layout (Default) */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          opacity: 1; /* Default visibility */
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          width: 100%;
          height: 380px;
          aspect-ratio: 4 / 3;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          z-index: 1;
        }

        @media (min-width: 1024px) {
          .image-container {
            max-height: 450px;
            height: 560px;
            width: 100%;
          }
          .text-section {
            max-width: 450px;
          }
        }
        
        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease-out;
        }
        
        .card:hover .image {
          transform: scale(1.05);
        }

        /* Reflection/Shine CSS (unmodified) */
        @keyframes shine-sweep {
            0% { transform: skewX(-25deg) translateX(-150%); }
            100% { transform: skewX(-25deg) translateX(250%); }
        }
        .image-reflection {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.5) 50%,
                transparent
            );
            transform: skewX(-25deg) translateX(-150%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .card:hover .image-reflection {
            opacity: 1;
            animation: shine-sweep 1.2s ease-in-out infinite;
        }

        .overlay-text {
          position: absolute;
          bottom: 15px;
          left: 20px;
          font-size: 24px;
          color: white;
          font-weight: 500;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
          z-index: 2;
        }
        .text-section {
          text-align: left;
          margin-top: 12px;
          width: 100%;
        }
        .text-section h3 {
          font-size: 18px;
          font-weight: 600;
          color: #2b5a4a;
          margin: 0 0 5px;
        }
        .text-section p {
          font-size: 14px;
          color: #4f4f4f;
          line-height: 1.6;
          margin: 0;
        }

        /* --- NEW: Small Screen (Mobile) Overrides --- */
        @media (max-width: 768px) {
          .slider-container {
            width: 90%; /* Increase width for more space on mobile */
          }
          
          /* Change card-grid to a simple flex container for single-slide view */
          .card-grid {
            display: flex;
            overflow: hidden; /* Hide inactive slides */
            position: relative;
            /* Allow vertical scrolling outside the slider, but not horizontal */
          }

          /* Inactive slides are completely hidden on small screens */
          .card {
            min-width: 100%; /* Important: Make the card take full width of the grid */
            position: absolute;
            top: 0;
            left: 0;
            transform: translateX(100%); /* Start off-screen right */
            transition: opacity 0.4s ease-out, transform 0.4s ease-out;
            pointer-events: none; /* Disable interaction on hidden slides */
          }

          /* Active slide */
          .card.active-slide {
            position: static; /* Take up space in the flex container */
            opacity: 1;
            transform: translateX(0); /* Bring to center */
            pointer-events: all; /* Enable interaction */
          }

          /* Hide other slides, but make sure they don't jump */
          .card.inactive-slide {
             opacity: 0;
             /* The 'position: absolute' prevents it from affecting layout flow */
          }


          /* Navigation Arrows */
          .carousel-nav-arrows {
            display: block; /* Show arrows on small screens */
          }

          .nav-arrow {
            position: absolute;
            top: 50%; /* Center vertically */
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            z-index: 10;
            border-radius: 5px;
            font-size: 20px;
            line-height: 1;
            user-select: none;
            transition: background 0.2s;
          }

          .nav-arrow:hover {
            background: rgba(0, 0, 0, 0.8);
          }

          .left-arrow {
            left: 10px;
          }

          .right-arrow {
            right: 10px;
          }
        }

        /* Hide arrows on large screens */
        @media (min-width: 769px) {
            .carousel-nav-arrows {
                display: none;
            }
        }
            @media (min-width: 769px) {
    .dots {
        display: none;
    }
}
      `})]})},Vt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ht=v.createContext&&v.createContext(Vt),Ut=[`attr`,`size`,`title`];function Wt(e,t){if(e==null)return{};var n=Gt(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Gt(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Kt(){return Kt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kt.apply(this,arguments)}function qt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Jt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?qt(Object(n),!0).forEach(function(t){Yt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Yt(e,t,n){return t=Xt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xt(e){var t=Zt(e,`string`);return typeof t==`symbol`?t:t+``}function Zt(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Qt(e){return e&&e.map((e,t)=>v.createElement(e.tag,Jt({key:t},e.attr),Qt(e.child)))}function z(e){return t=>v.createElement($t,Kt({attr:Jt({},e.attr)},t),Qt(e.child))}function $t(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=Wt(e,Ut),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),v.createElement(`svg`,Kt({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Jt(Jt({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&v.createElement(`title`,null,i),e.children)};return Ht===void 0?t(Vt):v.createElement(Ht.Consumer,null,e=>t(e))}function en(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`},child:[]}]})(e)}function tn(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5l57.4 95.6L63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8L301.5 179.8l57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z`},child:[]}]})(e)}function nn(e){return z({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z`},child:[]}]})(e)}function rn(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z`},child:[]}]})(e)}function an(e){return z({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z`},child:[]}]})(e)}function on(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z`},child:[]}]})(e)}var sn=({end:e,label:t,delay:n})=>{let[r,i]=(0,v.useState)(0),a=(0,v.useRef)(null),[o,s]=(0,v.useState)(!1);(0,v.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&!o&&s(!0)},{threshold:.5});return a.current&&e.observe(a.current),()=>{a.current&&e.unobserve(a.current)}},[o]),(0,v.useEffect)(()=>{if(o){let t=setTimeout(()=>{let t=Date.now(),n=()=>{let r=Date.now(),a=Math.min(1,(r-t)/1500),o;if(e===`Zero`){o=`Zero`,i(o);return}else e.includes(`%`)?(o=Math.floor(a*parseInt(e.replace(`%`,``),10)),i(`${o}%`)):(o=Math.floor(a*parseInt(e.replace(`+`,``),10)),i(`${o}+`));a<1?requestAnimationFrame(n):i(e)};requestAnimationFrame(n)},n);return()=>clearTimeout(t)}},[e,o,n]);let c=`stat-box-${t.replace(/\s/g,`-`).toLowerCase()}`;return(0,I.jsxs)(`div`,{className:`stat-item ${c} ${o?`animate-in`:``}`,ref:a,children:[(0,I.jsx)(`h4`,{children:r}),(0,I.jsx)(`span`,{children:t})]})},cn=()=>{let e=[{icon:rn,title:`Exceptional Durability`,desc:`Natural strength and resistance to wear, making it perfect for high-traffic areas and outdoor applications.`},{icon:tn,title:`Natural Texture & Fineness`,desc:`Unique grain patterns and smooth texture provide an elegant, sophisticated appearance that ages beautifully.`},{icon:an,title:`Premium Glossy Finish`,desc:`Available in polished, honed, and natural finishes to suit any design aesthetic and functional requirement.`},{icon:nn,title:`Interior Excellence`,desc:`Perfect for flooring, wall cladding, countertops, and decorative elements in residential and commercial spaces.`},{icon:on,title:`Outdoor Versatility`,desc:`Weather-resistant properties makes it ideal for patios, walkways, facades, and landscape architecture.`},{icon:en,title:`Timeless Appeal`,desc:`Classic beauty that transcends trends, ensuring your investment maintains its value and appeal over decades.`}];return(0,I.jsxs)(`div`,{className:`outer-section-wrapper`,children:[(0,I.jsxs)(`div`,{className:`why-container`,children:[(0,I.jsx)(`h2`,{className:`animated-heading`,style:{color:`#437060`},children:`Why Choose Kota Stone?`}),(0,I.jsxs)(`p`,{className:`subtitle animated-subtitle`,children:[`Discover the unique advantages that make Kota stone the preferred choice for architects, `,(0,I.jsx)(`br`,{}),` designers, and homeowners worldwide.`]}),(0,I.jsx)(`div`,{className:`features-grid-wrapper`,children:(0,I.jsx)(`div`,{className:`features-grid`,children:e.map((e,t)=>(0,I.jsxs)(`div`,{className:`feature-card`,"data-index":t,children:[(0,I.jsx)(`div`,{className:`icon-wrapper`,style:{backgroundColor:`#699484`},children:(0,I.jsx)(`span`,{className:`icon-rotate continuous-rotate`,children:(0,I.jsx)(e.icon,{size:28,color:`white`})})}),(0,I.jsx)(`h3`,{className:`feature-title`,children:e.title}),(0,I.jsx)(`p`,{className:`feature-desc`,children:e.desc})]},t))})}),(0,I.jsx)(`div`,{className:`experience-box-wrapper`,children:(0,I.jsxs)(`div`,{className:`experience-box`,children:[(0,I.jsx)(`h3`,{children:`Experience the Kota Stone Difference`}),(0,I.jsx)(`p`,{children:`Join thousands of satisfied customers who have chosen Kota stone for their projects. From luxury residences to commercial complexes, our stones deliver unmatched quality and beauty.`}),(0,I.jsxs)(`div`,{className:`stats`,children:[(0,I.jsx)(sn,{end:`25+`,label:`Years Lifespan`,delay:0}),(0,I.jsx)(sn,{end:`100%`,label:`Natural Stone`,delay:200}),(0,I.jsx)(sn,{end:`Zero`,label:`Maintenance`,delay:400})]})]})})]}),(0,I.jsx)(`style`,{children:`
        /* --- CSS Variable Definitions (10 lines) --- */
        :root {
          --outer-margin: 20px; 
          --container-bg: #fafafa;
          --inner-content-max-width: 1200px;
          --primary-color: #699484;
          --primary-color-dark: #4a6a5e;
          --secondary-color: #2b463c;
          --text-color-dark: #333;
          --text-color-light: #555;
          --shadow-low: 0 1px 8px rgba(0, 0, 0, 0.05);
          --shadow-high: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        /* --- Base & Layout Styles (40 lines) --- */
        .outer-section-wrapper {
          padding: var(--outer-margin);
          box-sizing: border-box;
          width: 100%;
          background-color: white; 
        }

        .why-container {
          width: 100%;
          padding: 80px 20px;
          text-align: center;
          font-family: "Arial", sans-serif;
          color: var(--text-color-dark);
          background: var(--container-bg);
          box-sizing: border-box;
          overflow: hidden; 
        }

        .why-container h2 {
          font-size: 32px;
          font-weight: 700;
          color: var(--secondary-color);
          margin-bottom: 10px;
          position: relative;
        }
        
        /* Animated line under H2 */
        .why-container h2::after {
          content: '';
          display: block;
          width: 0;
          height: 3px;
          background: var(--primary-color);
          margin: 5px auto 0;
          transition: width 0.5s ease-out;
        }
        
        /* H2 Hover Animation */
        .why-container:hover h2::after {
          width: 80px; 
        }

        .subtitle {
          color: #777;
          font-size: 16px;
          margin-bottom: 50px; 
          line-height: 1.6;
        }

        .features-grid-wrapper,
        .experience-box-wrapper {
          max-width: var(--inner-content-max-width);
          margin: 0 auto;
          padding: 0 10px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px; 
          margin-bottom: 60px;
          perspective: 1500px; 
          /* --- FIX: Establish stacking context for children --- */
          position: relative; 
          z-index: 1; 
        }

        /* --- Feature Card Base Styles & 3D Setup --- */
        .feature-card {
          background: #fff;
          border-radius: 12px;
          border: 1px solid #eee;
          box-shadow: var(--shadow-low);
          padding: 30px 25px;
          text-align: left;
          cursor: pointer;
          
          /* 3D Animation Setup */
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease;
          transform-style: preserve-3d; 
          transform: translateZ(0); 
          position: relative; 
          z-index: 1; /* Initial z-index */
          overflow: hidden; 
        }

        /* HOVER: 3D Rotation and Lift */
        .feature-card:hover {
          transform: translateY(-8px) rotateY(5deg) translateZ(50px); 
          box-shadow: var(--shadow-high); 
          z-index: 10; /* Elevate on hover */
        }
        
        /* Apply smooth transition to internal elements */
        .feature-card h3, .feature-card p, .feature-card .icon-wrapper {
          transition: all 0.4s ease-out;
        }
        
        /* HOVER: Text Animation (Slide Up/Fade) */
        .feature-card:hover .feature-title {
          color: var(--primary-color-dark);
          transform: translateY(-5px); 
        }

        .feature-card:hover .feature-desc {
          opacity: 0.85; 
          transform: translateX(5px); 
        }


        /* --- Icon & Rotation Animation --- */
        .icon-wrapper {
          width: 60px; 
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%; 
          margin-bottom: 20px;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          position: relative;
          overflow: hidden;
          background-color: var(--primary-color); 
        }
        
        /* HOVER: Icon Wrapper Glow and Color Change */
        .feature-card:hover .icon-wrapper {
          background-color: var(--primary-color-dark); 
          box-shadow: 0 0 0 5px rgba(105, 148, 132, 0.5), 0 0 20px rgba(105, 148, 132, 0.9); 
        }
        
        /* Pseudo-element for inner reflection on hover */
        .icon-wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.3); 
          transform: skewX(-20deg);
          transition: all 0.8s ease-in-out;
        }

        /* HOVER: Reflection Animation (Slide across) */
        .feature-card:hover .icon-wrapper::before {
          left: 100%;
        }

        /* Inner Icon Wrapper for Rotation */
        .icon-rotate {
          display: inline-block; 
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* HOVER: Icon Bounce/Slam Rotation */
        .feature-card:hover .icon-rotate {
          transform: rotate(360deg) scale(1.15); 
        }
        
        /* KEYFRAME: Continuous 360-degree Spin Animation */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .continuous-rotate {
          animation: spin 10s linear infinite; 
        }

        .feature-card:hover .continuous-rotate {
          animation: spin 0.8s linear infinite; 
        }

        /* --- Text Styles (REDUCED SIZE) --- */
        .feature-card h3 {
          font-size: 18px; 
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--secondary-color);
        }

        .feature-card p {
          font-size: 14.5px; 
          line-height: 1.6;
          color: var(--text-color-light);
        }


        /* --- Experience Box & Stats (UPDATED) --- */
        .experience-box {
          background: #fff;
          border-radius: 12px;
          border: 1px solid #eee;
          box-shadow: var(--shadow-low);
          padding: 40px 20px;
          margin: 0 auto;
          max-width: 900px;
          transition: all 0.5s ease;
          position: relative;
        }
        
        /* HOVER: Experience Box Bouncing Shadow */
        .experience-box:hover {
          box-shadow: 0 0 30px rgba(43, 70, 60, 0.3);
          transform: scale(1.01);
        }

        .experience-box h3 {
          font-size: 24px;
          font-weight: 600;
          color: var(--secondary-color);
          margin-bottom: 10px;
        }

        .experience-box p {
          color: #666;
          font-size: 15px;
          margin-bottom: 30px;
          line-height: 1.6;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        /* Base Stat Item Styles */
        .stat-item {
          transition: transform 0.3s ease, color 0.3s ease, opacity 0.5s, transform 0.5s, background 0.3s;
          opacity: 0; 
          transform: translateY(30px) scale(0.8);
          padding: 5px; 
          border-radius: 8px;
        }
        
        /* Stat Entry Animation (Triggered by JS) */
        @keyframes stat-entry {
            0% { opacity: 0; transform: translateY(30px) scale(0.8); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .stat-item.animate-in {
            opacity: 1;
            transform: translateY(0) scale(1);
            animation: stat-entry 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .stat-box-years-lifespan.animate-in { animation-delay: 0.1s; }
        .stat-box-natural-stone.animate-in { animation-delay: 0.3s; }
        .stat-box-maintenance.animate-in { animation-delay: 0.5s; }


        /* --- UNIFIED PRIMARY COLOR for H4 --- */
        .stat-item h4 { 
            font-size: 28px; 
            font-weight: 700;
            margin-bottom: 5px;
            color: var(--primary-color-dark); /* Unified Green Color */
            padding: 5px;
            border-radius: 5px;
            transition: color 0.3s ease, box-shadow 0.3s ease; 
        }

        /* Stat Pulse Keyframe (Using only the green one, renamed) */
        @keyframes stat-pulse-hover {
          0%, 100% { 
            box-shadow: 0 0 0 0px rgba(105, 148, 132, 0.5); 
          }
          50% { 
            box-shadow: 0 0 10px 5px rgba(105, 148, 132, 0.9); 
          }
        }
        
        /* Stat 3: Maintenance Zero Shake Keyframe */
        @keyframes zero-shake {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(2deg); }
            75% { transform: rotate(-2deg); }
        }
        
        /* --- HOVER ANIMATIONS (PULSE & SHAKE) --- */
        
        .stat-item:hover h4 {
            animation: stat-pulse-hover 1.5s infinite ease-in-out;
            transform: scale(1.05);
        }

        /* Apply ZERO SHAKE animation only on hover for the last item */
        .stat-box-maintenance:hover h4 {
            animation: stat-pulse-hover 1.5s infinite ease-in-out, zero-shake 0.5s infinite alternate;
        }


        .stat-item span {
          font-size: 14px;
          color: #777;
        }

        /* General Hover Effect for Item Container */
        .stat-item:hover {
          transform: scale(1.1); /* Slight Scale up for the whole box */
          background: rgba(255, 255, 255, 0.5);
          z-index: 5; /* Ensure it overlaps neighbors */
        }


        /* --- Other existing keyframes --- */
        @keyframes fadeInSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animated-heading { animation: fadeInSlideUp 0.8s ease-out; }
        .animated-subtitle { animation: fadeInSlideUp 0.8s ease-out 0.2s backwards; }
        
        @keyframes cardEntry {
          0% { opacity: 0; transform: rotateX(90deg) scale(0.8); }
          70% { opacity: 1; transform: rotateX(-5deg) scale(1.05); }
          100% { transform: rotateX(0deg) scale(1); opacity: 1; }
        }
        
        .feature-card {
          opacity: 0;
          transform: rotateX(90deg) scale(0.8); 
          animation: cardEntry 1s ease-out forwards;
        }
        
        /* Staggered delay */
        .features-grid .feature-card[data-index="0"] { animation-delay: 0.3s; }
        .features-grid .feature-card[data-index="1"] { animation-delay: 0.4s; }
        .features-grid .feature-card[data-index="2"] { animation-delay: 0.5s; }
        .features-grid .feature-card[data-index="3"] { animation-delay: 0.6s; }
        .features-grid .feature-card[data-index="4"] { animation-delay: 0.7s; }
        .features-grid .feature-card[data-index="5"] { animation-delay: 0.8s; }
        
        /* --- Responsive Styles (FIXED & REDUCED) --- */
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .feature-card:hover { 
            transform: translateY(-8px) rotateY(0deg) translateZ(10px) scale(1.05); 
            z-index: 10; 
          }
          .stats { justify-content: space-around; gap: 10px; }
        }

        @media (max-width: 768px) {
          .why-container { padding: 40px var(--outer-margin); }
          
          /* Feature Grid Adjustments (from previous fix) */
          .features-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 15px; 
          } 
          
          .feature-card { 
            text-align: center; /* Important: Centers text content */
            padding: 20px 15px;
            transform: translateY(0) rotateY(0) translateZ(0) !important; 
          }

          /* --- FIX 1: Icon Centering in Small Screen --- */
          .icon-wrapper { 
            width: 45px;
            height: 45px;
            margin-bottom: 10px; 
            margin-left: auto; /* Center the icon wrapper */
            margin-right: auto; /* Center the icon wrapper */
          }
          
          .feature-card h3 { 
            font-size: 16px; 
            margin-bottom: 5px;
          }
          .feature-card p {
            font-size: 13.5px; 
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          /* --- FIX 2 & 3: Ensure All Hover Effects Work on Small Screen and are Fast --- */
          .feature-card:hover { 
            transform: translateY(-5px) rotateY(0deg) scale(1.02); 
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); 
            z-index: 10; 
          }

          /* Speed up reflection */
          .feature-card:hover .icon-wrapper::before {
             left: 100%;
             transition: all 0.4s ease-in-out; /* Reduced from 0.8s */
          }
          
          /* Apply Icon Glow/Color change on hover */
          .feature-card:hover .icon-wrapper {
            background-color: var(--primary-color-dark); 
            box-shadow: 0 0 0 5px rgba(105, 148, 132, 0.5), 0 0 15px rgba(105, 148, 132, 0.7); 
          }

          /* Speed up continuous rotation */
          .feature-card:hover .continuous-rotate { 
            animation: spin 0.5s linear infinite; /* Reduced from 0.8s */
          }
          
          .stats { 
            flex-direction: row; 
            gap: 5px; 
            justify-content: space-between; 
            padding: 0 5px; 
          }
          
          .stat-item {
              padding: 5px 2px; 
          }
          
          .stat-item h4 { 
            font-size: 18px; 
            margin-bottom: 2px;
          }
          .stat-item span { 
              font-size: 11px; 
          }
          
          /* Reset hover scale for better touch usability */
          .stat-item:hover {
            transform: scale(1.05); 
          }
          
          :root {
          --outer-margin: 4px; }
        }
      `})]})},ln=[{id:1,name:`Uncut / Natural`,desc:`Freshly extracted from the mines, this stone retains its natural texture, color, and beauty. It offers a raw, earthy charm that perfectly complements rustic and outdoor spaces.`,designCount:`30+ Design`,imageName:`uncut.jpg`},{id:2,name:`River Finish`,desc:`This finish undergoes the first level of polishing to smoothen the surface while keeping its natural look intact. It provides a balanced texture ideal for pathways and open areas.`,designCount:`30+ Design`,imageName:`river-polished.jpg`},{id:3,name:`Honed Finish / Semi Polished`,desc:`A smooth, non-reflective surface that highlights the stone’s natural color and patterns. Perfect for interiors where you want a refined look without too much shine.`,designCount:`30+ Design`,imageName:`honed.jpg`},{id:4,name:`Mirror Polished`,desc:`This finish brings out the ultimate gloss and reflection, offering a sleek, elegant, and luxurious look. Ideal for premium interiors, lobbies, and modern architectural spaces.`,designCount:`30+ Design`,imageName:`mirror.jpg`},{id:5,name:`Tiles (Calibrated Finish)`,desc:`These stones are precisely cut and calibrated into uniform sizes and thickness, ready for easy installation. A great choice for flooring and wall cladding with a clean, contemporary appeal.`,designCount:`30+ Design`,imageName:`Tiles.webp`},{id:6,name:`Leather Finish / Sandblasted`,desc:`A textured surface achieved through advanced finishing techniques, giving the stone a matte and tactile feel. It’s durable, slip-resistant, and perfect for outdoor or high-traffic areas.`,designCount:`30+ Design`,imageName:`leather.jpg`}],un=1024,dn=({activeIndex:e})=>{let[t,n]=(0,v.useState)(!1),[r,i]=(0,v.useState)([]);return(0,v.useEffect)(()=>{let e=0,t=ln.length,r=[];ln.forEach(a=>{let o=new Image,s=`/${a.imageName}`;o.onload=()=>{e++,e===t&&n(!0)},o.onerror=()=>{r.push(a.name),i(r),e++,e===t&&n(!0)},o.src=s}),t===0&&n(!0)},[]),(0,I.jsxs)(`div`,{className:`image-fader-container`,children:[!t&&(0,I.jsx)(`div`,{className:`image-loading-indicator`,children:`Loading stone finishes...`}),ln.map((t,n)=>{let i=`/${t.imageName}`,a=r.includes(t.name);return(0,I.jsxs)(`div`,{className:`fader-image ${e===n?`active`:``} ${a?`failed-load`:``}`,style:{backgroundImage:`url(${i})`},children:[a&&(0,I.jsxs)(`div`,{className:`image-fallback-text`,children:[`❌ Image Failed to Load`,(0,I.jsx)(`br`,{}),"Check path: `public/$",t.imageName,"`"]}),(0,I.jsx)(`div`,{className:`image-reflection`})]},t.id)})]})},fn=({id:e})=>{let[t,n]=(0,v.useState)(0),[r,i]=(0,v.useState)(!1),[a,o]=(0,v.useState)(!1),s=e=>e===t,c=ln[t],l=(0,v.useMemo)(()=>{if(!r)return ln;let e=ln[t],n=ln.filter((e,n)=>n!==t);return[e,...n]},[t,r]),u=t=>{if(n(t),r||o(!0),r){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}};return(0,v.useEffect)(()=>{let e=()=>{i(window.innerWidth<un)};e(),window.addEventListener(`resize`,e);let t;return!r&&!a&&(t=setInterval(()=>{n(e=>(e+1)%ln.length)},3e3)),()=>{window.removeEventListener(`resize`,e),t&&clearInterval(t)}},[r,a]),(0,I.jsxs)(`div`,{id:e,className:`finish-section-wrapper`,children:[(0,I.jsxs)(`div`,{className:`finish-container`,children:[(0,I.jsx)(`h2`,{className:`main-heading animated-heading `,children:`Texture And Finishes`}),(0,I.jsx)(`p`,{className:`sub-heading`,children:`The Texture And Finish Of Kota Stone Can Be Tailored To Specific Needs:`}),(0,I.jsxs)(`div`,{className:`content-grid`,children:[(0,I.jsxs)(`div`,{className:`display-card-wrapper`,children:[(0,I.jsx)(`div`,{className:`display-card`,children:(0,I.jsxs)(`div`,{className:`image-placeholder-container`,children:[(0,I.jsx)(dn,{activeIndex:t}),c&&(0,I.jsx)(`button`,{className:`finish-name-button`,children:c.name})]})}),!r&&(0,I.jsx)(`div`,{className:`dots-pagination`,children:ln.map((e,t)=>(0,I.jsx)(`span`,{onClick:()=>u(t),className:`dot ${s(t)?`active`:``}`},t))})]}),(0,I.jsx)(`div`,{className:`finishes-list`,children:l.map(e=>{let t=e.id-1,n=s(t);return(0,I.jsxs)(`div`,{className:`finish-item ${n?`active`:``}`,onClick:()=>u(t),children:[(0,I.jsxs)(`div`,{className:`finish-details`,children:[(0,I.jsx)(`img`,{src:`/linked_camera.png`,alt:`camera`,className:`camera-icon`}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h3`,{className:`finish-name`,children:e.name}),n&&(0,I.jsx)(`p`,{className:`finish-desc`,children:e.desc})]})]}),(0,I.jsxs)(`div`,{className:`finish-meta`,children:[(0,I.jsx)(`span`,{className:`design-count`,children:e.designCount}),(0,I.jsx)(`img`,{src:`/arrow_outward.png`,alt:`arrow`,className:`arrow-icon`})]})]},e.id)})})]})]}),(0,I.jsx)(`style`,{children:`
        /* --- CSS Variables --- */
        :root {
            --primary-stone-color: #55756C; /* Main accent color */
            --secondary-stone-color: #735345; /* Dot accent color */
            --dark-text: #333;
            --light-text: #777;
        }

        /* --- General Styling & Container --- */
       .finish-section-wrapper {
  width: 100%;
  background: #fff;
  padding: 80px 20px;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  /* Change this: */
  min-height: auto; 
}

        .finish-container {
          max-width: 1300px;
          margin: 0 auto;
          text-align: center;
        }

        .main-heading {
          font-size: 38px;
          font-weight: 600;
          color: var(--primary-stone-color); 
          margin-bottom: 8px;
        }

        .sub-heading {
          font-size: 16px;
          color: var(--light-text);
          margin-bottom: 50px;
        }

        /* --- Content Grid Layout (45% Left, 55% Right) --- */
        .content-grid {
  display: grid;
  grid-template-columns: 0.45fr 0.55fr; 
  gap: 40px;
  text-align: left;
  /* Change this: */
  align-items: start; 
}
        
        /* --- Left Side: Display Card (Slider Viewport) --- */
        .display-card-wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%; 
            padding-top: 20px; 
        }
        
        .display-card {
          width: 100%;
          flex-grow: 1; 
          background: #f0f0f0; 
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .image-placeholder-container {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
        }

        /* --- Image Fader Styles --- */
        .image-fader-container {
            width: 100%;
            height: 100%;
            position: absolute; 
        }
        
        .fader-image {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-size: cover; 
            background-position: center center; 
            opacity: 0; 
            transition: opacity 0.8s ease-in-out; 
            z-index: 1; 
            box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1); 
            background-color: #f0f0f0; 
        }

        .fader-image.active {
            opacity: 1; 
            z-index: 2; 
        }

        @keyframes shine-sweep {
            0% { transform: skewX(-25deg) translateX(-150%); }
            100% { transform: skewX(-25deg) translateX(250%); }
        }

        .image-reflection {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none; 
            background: linear-gradient(
                90deg, 
                transparent, 
                rgba(255, 255, 255, 0.5) 50%, 
                transparent
            );
            transform: skewX(-25deg) translateX(-150%);
            opacity: 0; 
            transition: opacity 0.3s ease;
            z-index: 5; 
        }

        .display-card:hover .image-reflection {
            opacity: 1;
            animation: shine-sweep 1.2s ease-in-out infinite; 
        }

        /* Debugging Styles */
        .fader-image.failed-load {
            background-image: none !important;
            background-color: #ffcccc; 
            box-shadow: inset 0 0 10px rgba(255, 255, 0, 0.5); 
        }
        
        .image-fallback-text {
            color: #cc0000;
            font-weight: bold;
            text-align: center;
            padding: 20px;
            font-size: 16px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 8px;
        }
        
        .image-loading-indicator {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: var(--primary-stone-color);
            font-weight: 600;
            z-index: 3;
            animation: pulse 1.5s infinite alternate;
        }
        
        @keyframes pulse {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
        }

        /* --- END Image Fader Styles --- */

        .finish-name-button {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: black;
            color: white;
            padding: 12px 25px; 
            border: none;
            border-radius: 30px; 
            font-size: 16px; 
            font-weight: 600; 
            cursor: pointer;
            z-index: 10; 
            white-space: nowrap; 
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        /* Pagination Dots */
        .dots-pagination {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          gap: 15px;
          flex-shrink: 0; 
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ccc;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .dot.active {
          width: 25px; 
          border-radius: 8px; 
          background: var(--secondary-stone-color); 
          height: 8px; 
        }

        /* --- Right Side: Finishes List (Table) --- */
        .finishes-list {
          display: flex;
          flex-direction: column;
          gap: 0; 
          background: white; 
          border-radius: 0;
          overflow: hidden; /* Prevent list from overflowing its container */
          padding: 0;
          box-shadow: none; 
          height: 100%; 
        }

        .finish-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 25px; 
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 1px solid #e0e0e0; 
          position: relative; 
          z-index: 1; 
        }
        
        .finishes-list > .finish-item:last-child {
            border-bottom: none; 
        }

        /* --- Hover Animations (Desktop) --- */
        .finish-item:hover {
            background: #fcfcfc; 
            transform: translateY(-3px); 
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
            z-index: 2; 
        }
        
        .finish-item:hover .finish-name {
            color: var(--secondary-stone-color); 
            letter-spacing: 0.5px; 
        }

        .finish-item:hover .arrow-icon {
            transform: translateX(8px); 
            border-color: var(--primary-stone-color);
            background-color: #e6e6e6; 
        }

        .finish-item.active {
          padding-top: 30px; 
          padding-bottom: 30px;
          padding-left: 25px;
          padding-right: 25px;
          background: white;
          border-left: 5px solid var(--primary-stone-color); 
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); 
        }
        
        .finish-item.active .finish-name {
            color: var(--primary-stone-color); 
        }
        
        .finish-details {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            flex-grow: 1;
        }
        
        .camera-icon {
            width: 24px; 
            height: 24px;
            opacity: 0.7; 
            flex-shrink: 0;
            margin-top: 2px;
        }
        
        .finish-name {
            font-size: 16px;
            font-weight: 600;
            color: var(--dark-text);
            margin: 0;
            transition: all 0.3s; 
        }
        
        .finish-desc {
            font-size: 14px;
            color: var(--light-text);
            margin-top: 5px;
            line-height: 1.5;
            max-width: 90%; 
            display: block; 
            max-height: 100px; 
            overflow: hidden;
            transition: max-height 0.4s ease-in-out;
        }

        .finish-item:not(.active) .finish-desc {
            max-height: 0; 
            padding: 0;
            margin: 0;
        }
        
        .finish-meta {
            display: flex;
            align-items: center;
            gap: 15px;
            flex-shrink: 0;
        }
        
        .design-count {
            font-size: 14px;
            color: var(--light-text);
        }
        
        .arrow-icon {
            width: 19px; 
            height: 19px;
            opacity: 0.8; 
            border: 1px solid var(--dark-text); 
            border-radius: 50%; 
            padding: 5px; 
            box-sizing: content-box; 
            transition: all 0.3s; 
        }

        /* --- Responsiveness --- */
        @media (max-width: ${un}px) {
            /* Mobile breakpoint */
            .content-grid {
                grid-template-columns: 1fr;
                gap: 30px;
                align-items: flex-start; 
            }
          
            .display-card { aspect-ratio: 16 / 9; flex-grow: 0; }
            .finish-item { padding: 15px 20px; }
            .finish-item.active { 
                padding: 20px 20px; 
                border-left: 4px solid var(--primary-stone-color); 
                border-bottom: 1px solid #e0e0e0;
            }

            /* Disable 3D lift on smaller screens */
            .finish-item:hover {
                transform: none; 
                box-shadow: none;
                background: #f9f9f9;
            }
            
            /* UPDATED: Remove scroll properties from finishes-list on mobile */
            .finishes-list {
                max-height: none; /* Show the full list */
                overflow-y: visible; /* Remove inner scrolling */
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); /* Keep a subtle shadow */
            }

            /* Ensure the very last item in the list does not have a bottom border */
            .finishes-list > .finish-item:last-child {
                border-bottom: none !important; 
            }
        }
        
        @media (max-width: 600px) {
            .main-heading { font-size: 30px; }
            .sub-heading { font-size: 14px; margin-bottom: 30px; }
            .finish-item { padding: 15px 15px; }
            .finish-meta { gap: 10px; }
            .finish-name-button {
                font-size: 14px;
                padding: 10px 20px;
                bottom: 20px;
            }
        }
      `})]})},pn={indoor:[{name:`Luxury Flooring`,type:`indoor`,desc:`Experience the timeless beauty of Kota Stone flooring – durable, elegant, and ideal for living rooms, bedrooms, and hallways.`},{name:`Wall Cladding`,type:`indoor`,desc:`Enhance your interiors with rich natural textures. Kota Stone cladding adds depth and sophistication to every wall.`},{name:`Kitchen Countertops`,type:`indoor`,desc:`Built for strength and style, Kota Stone countertops offer a heat-resistant and easy-to-maintain surface for modern kitchens.`},{name:`Bathroom Tiles`,type:`indoor`,desc:`Slip-resistant and water-resistant, Kota Stone ensures both safety and elegance in wet areas.`},{name:`Stair Treads`,type:`indoor`,desc:`Designed for durability and refined aesthetics, Kota Stone provides secure and stylish staircase solutions.`}],outdoor:[{name:`Patio & Deck Flooring`,type:`outdoor`,desc:`Create lasting outdoor impressions with Kota Stone's weather-resistant surface, perfect for patios and decks.`},{name:`Garden Walkways`,type:`outdoor`,desc:`Add natural charm to your landscape with Kota Stone walkways — durable, non-slip, and beautifully textured.`},{name:`Building Facades`,type:`outdoor`,desc:`Make a statement with architectural facades that combine strength and natural beauty for a timeless look.`},{name:`Pool Surrounds`,type:`outdoor`,desc:`Non-slip and cool underfoot, Kota Stone is the ideal choice for pool decks and outdoor leisure areas.`},{name:`Driveway Pavers`,type:`outdoor`,desc:`Built to handle heavy use with grace, Kota Stone pavers bring durability and elegance to driveways and entryways.`}]},mn=[{title:`Residential Projects`,features:[`Homes, villas, apartments, and private estates`,`Custom sizing available`,`Installation support`,`Design consultation`]},{title:`Commercial Spaces`,features:[`Hotels, restaurants, offices, and retail spaces`,`Bulk pricing`,`Project management`,`Technical support`]},{title:`Institutional Works`,features:[`Schools, hospitals, government buildings`,`Compliance certification`,`Large volume supply`,`Extended warranty`]}],hn=`#E6E6E6`,gn=`#4D3E33`,_n=`#699484`,vn=`#4a6a5e`,yn=e=>e.replace(/[\s&]/g,`_`)+`.png`,bn=({title:e,features:t})=>(0,I.jsxs)(`div`,{className:`ps-card`,children:[(0,I.jsx)(`h3`,{className:`ps-card-title`,children:e}),(0,I.jsx)(`ul`,{className:`ps-features-list`,children:t.map((e,t)=>(0,I.jsx)(`li`,{children:e},t))}),(0,I.jsxs)(`button`,{className:`ps-button`,children:[`View More `,(0,I.jsx)(`span`,{className:`ps-arrow`,children:`→`})]})]}),xn=()=>{let[e,t]=(0,v.useState)(pn.indoor[0]),[n,r]=(0,v.useState)(pn.outdoor[0]),i=(0,v.useRef)(null),a=(0,v.useRef)(null),o=({title:e,imageSrc:t,className:n,description:r})=>(0,I.jsx)(`div`,{className:`ep-card ${n}`,children:(0,I.jsxs)(`div`,{className:`ep-image-wrapper`,children:[(0,I.jsx)(`img`,{src:t,alt:`${e} - ${r}`,className:`ep-image`,style:{backgroundColor:`#e0e0e0`}}),(0,I.jsx)(`div`,{className:`image-reflection`}),(0,I.jsxs)(`div`,{className:`ep-overlay`,children:[(0,I.jsx)(`h3`,{className:`ep-card-title`,children:e}),(0,I.jsx)(`p`,{className:`ep-card-desc`,children:r}),(0,I.jsx)(`button`,{className:`ep-button`,children:`View More Projects`})]})]})}),s=({data:e,className:t,selectedItem:n,setItem:r})=>{let o=e=>{r(e);let t=e.type===`indoor`?i:a;window.innerWidth<=1024&&t.current&&t.current.scrollIntoView({behavior:`smooth`,block:`start`})};return(0,I.jsxs)(`div`,{className:`ep-list-section-wrapper ${t}`,children:[(0,I.jsx)(`div`,{className:`ep-divider`}),(0,I.jsx)(`ul`,{className:`ep-app-list`,children:e.map((e,t)=>{let r=n&&n.name===e.name;return(0,I.jsxs)(`li`,{className:`ep-list-item ${r?`is-selected`:``}`,onClick:()=>o(e),children:[(0,I.jsx)(`span`,{className:`ep-list-name`,children:e.name}),(0,I.jsx)(`span`,{className:`ep-list-desc`,children:e.desc})]},t)})})]})},c=({title:e,className:t,ref:n})=>(0,I.jsx)(`h3`,{className:`ep-section-heading ${t}`,ref:n,children:e});return(0,I.jsxs)(`div`,{className:`ep-full-wrapper`,children:[(0,I.jsx)(`div`,{className:`ep-section-wrapper`,children:(0,I.jsxs)(`div`,{className:`ep-container`,children:[(0,I.jsx)(`h2`,{className:`ep-main-heading`,children:`Endless Possibilities`}),(0,I.jsxs)(`p`,{className:`ep-sub-heading`,children:[`From intimate interior spaces to grand architectural projects, Kota stone adapts `,(0,I.jsx)(`br`,{}),`Beautifully to every application and environment.`]}),(0,I.jsxs)(`div`,{className:`ep-content-grid`,children:[(0,I.jsx)(c,{title:`Interior Applications`,className:`ep-indoor-heading`,ref:i}),(0,I.jsx)(o,{title:e.name,imageSrc:yn(e.name),className:`ep-indoor-card`,description:e.desc}),(0,I.jsx)(s,{data:pn.indoor,className:`ep-indoor-list`,selectedItem:e,setItem:t}),(0,I.jsx)(c,{title:`Exterior Applications`,className:`ep-outdoor-heading`,ref:a}),(0,I.jsx)(o,{title:n.name,imageSrc:yn(n.name),className:`ep-outdoor-card`,description:n.desc}),(0,I.jsx)(s,{data:pn.outdoor,className:`ep-outdoor-list`,selectedItem:n,setItem:r})]})]})}),(0,I.jsx)(`div`,{className:`project-scale-section`,children:(0,I.jsxs)(`div`,{className:`ep-container`,children:[(0,I.jsx)(`h2`,{className:`ps-main-heading`,children:`Perfect for Every Project Scale`}),(0,I.jsx)(`div`,{className:`ps-cards-grid`,children:mn.map((e,t)=>(0,I.jsx)(bn,{title:e.title,features:e.features},t))})]})}),(0,I.jsx)(`style`,{children:`
                /* --- CSS Variables (Updated for consistency with new dark color) --- */
                :root {
                    --primary-color: ${_n}; 
                    --primary-color-dark: ${vn}; 
                    --heading-color: ${gn}; 
                    --secondary-color: #2b463c; 
                    --dark-text: #333;
                    --light-text: #777;
                    --shadow-low: 0 1px 8px rgba(0, 0, 0, 0.05);
                    --shadow-high: 0 10px 20px rgba(0, 0, 0, 0.1);
                }
                
                /* Reflection Animation Keyframes */
                @keyframes shine-sweep {
                    0% {
                        transform: skewX(-20deg) translateX(-150%);
                    }
                    100% {
                        transform: skewX(-20deg) translateX(250%);
                    }
                }

                /* Combined Wrapper for overall section */
                .ep-full-wrapper {
                    width: 100%;
                    font-family: 'Inter', sans-serif; 
                }

                /* Ensure all key text elements inherit or use Inter explicitly */
                h2, h3, p, li, button, span {
                    font-family: 'Inter', sans-serif; 
                }
                
                /* Global Container for 10% Margin */
                .ep-container {
                    width: 80%; 
                    max-width: 1300px; 
                    margin: 0 auto;
                    text-align: center;
                }
                
                /* Endless Possibilities Section Styles */
                .ep-section-wrapper {
                    background: #fff;
                    padding: 80px 0; 
                    box-sizing: border-box;
                }
                
                .ep-main-heading {
                    font-size: 38px;
                    font-weight: 700; 
                    color:#437061; 
                    margin-bottom: 8px;
                }
                
                .ep-sub-heading {
                    font-size: 16px;
                    color: #777;
                    margin-bottom: 60px;
                    line-height: 1.5;
                }
                
                /* Default (Large Screen) Layout: Two columns 60%/40% */
                .ep-content-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr; 
                    gap: 60px;
                    text-align: left;
                    align-items: stretch; 
                    
                    /* Large screen order: List -> Card in two columns (Headings sit above lists) */
                    grid-template-areas: 
                        "indoor-heading ."
                        "indoor-list indoor-card"
                        "outdoor-heading ."
                        "outdoor-list outdoor-card";
                }
                
                /* Assign areas */
                .ep-indoor-heading { grid-area: indoor-heading; margin-bottom: 10px;}
                .ep-outdoor-heading { grid-area: outdoor-heading; margin-bottom: 10px; margin-top: 30px;} /* Add top margin for separation */

                .ep-indoor-list { grid-area: indoor-list; }
                .ep-indoor-card { grid-area: indoor-card; }
                .ep-outdoor-list { grid-area: outdoor-list; }
                .ep-outdoor-card { grid-area: outdoor-card; }
                
                .ep-indoor-list, .ep-outdoor-list {
                    padding-right: 20px;
                    justify-content: flex-start; 
                }
                
                .ep-outdoor-list {
                    margin-top: 0; 
                }
                
                .ep-list-section-wrapper {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 0; 
                }
                
                .ep-section-heading {
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--heading-color); 
                    margin-bottom: 10px;
                    margin-top: 0; 
                }
                
                .ep-divider {
                    height: 1px;
                    background-color: ${hn}; 
                    margin-bottom: 25px;
                    width: 100%;
                }
                
                .ep-list-section-wrapper ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .ep-app-list {
                    display: block; /* Default for large screens (not flex) */
                }
                
                .ep-list-item {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 15px; 
                    padding-left: 15px;
                    position: relative;
                    cursor: pointer; 
                    transition: background-color 0.2s, color 0.2s, transform 0.3s, order 0.3s ease; 
                    padding: 8px 15px 8px 15px; 
                    margin-left: -15px; 
                    border-radius: 5px;
                    order: initial; 
                }
                
                .ep-list-item:hover {
                    background-color: #f5fcf9; 
                    transform: translateX(5px); 
                }
                
                .ep-list-item.is-selected {
                    padding-left: 15px; 
                }

                .ep-list-item::before {
                    content: '•';
                    color: var(--primary-color); 
                    font-size: 20px;
                    position: absolute;
                    left: 0;
                    top: 50%; 
                    transform: translateY(-50%);
                    line-height: 1;
                }
                
                .ep-list-name {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--heading-color); 
                    line-height: 1.2;
                    margin-bottom: 2px;
                }

                .ep-list-item.is-selected .ep-list-name {
                    color: var(--primary-color-dark); 
                }
                
                .ep-list-desc {
                    font-size: 14px;
                    color: #777;
                }
                
                /* Card Styling */
                .ep-card {
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: var(--shadow-low);
                    flex: 1; 
                    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease;
                    transform-style: preserve-3d;
                    transform: translateZ(0);
                }

                /* 3D Hover Effect */
                .ep-card:hover {
                    transform: translateY(-8px) rotateY(1deg) translateZ(10px); 
                    box-shadow: var(--shadow-high); 
                }
                
                .ep-indoor-card, .ep-outdoor-card {
                    min-height: 224px;
                }
                
                /* Image Wrapper: CRITICAL for reflection containment */
                .ep-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%; 
                    overflow: hidden; 
                }
                
                .ep-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                }
                
                /* Reflection Element Styling */
                .image-reflection {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%; 
                    height: 100%;
                    background: linear-gradient(
                        to right, 
                        rgba(255, 255, 255, 0) 0%, 
                        rgba(255, 255, 255, 0.4) 50%, 
                        rgba(255, 255, 255, 0) 100%
                    );
                    z-index: 10; 
                    opacity: 0; 
                    pointer-events: none; 
                    transform: skewX(-20deg) translateX(-150%);
                    transition: opacity 0.3s ease;
                }

                /* Activate the animation on card hover */
                .ep-card:hover .image-reflection {
                    opacity: 1;
                    animation: shine-sweep 1.2s ease-in-out forwards; 
                }
                
                .ep-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 20px; 
                    color: white;
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
                    border-radius: 0 0 15px 15px;
                    z-index: 15; 
                }
                
                .ep-card-title {
                    font-size: 20px; 
                    font-weight: 700;
                    margin: 0 0 5px 0;
                    color: white; 
                }
                
                .ep-card-desc {
                    font-size: 12px; 
                    font-weight: 300;
                    margin: 0 0 10px 0; 
                }
                
                .ep-button {
                    background: white;
                    color: var(--primary-color-dark); 
                    padding: 8px 16px; 
                    border: none;
                    border-radius: 5px;
                    font-size: 12px; 
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s;
                }
                
                .ep-button:hover {
                    background: var(--primary-color);
                    color: white;
                }

                /* ----------------- Project Scale Section Styles ----------------- */
                .project-scale-section {
                    background: #f8f8f8; 
                    padding: 80px 0; 
                    box-sizing: border-box;
                    text-align: center;
                }

                .ps-main-heading {
                    font-size: 28px;
                    font-weight: 700;
                    color: var(--heading-color); 
                    margin-bottom: 40px;
                }

                .ps-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    text-align: left;
                    align-items: stretch; 
                }

                .ps-card {
                    background-color: var(--primary-color); 
                    border-radius: 10px;
                    padding: 35px;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between; 
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
                    min-height: 250px; 
                    
                    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s, box-shadow 0.6s ease;
                    transform-style: preserve-3d;
                    transform: translateZ(0); 
                }

                .ps-card:hover {
                    background-color: var(--primary-color-dark); 
                    transform: translateY(0) translateZ(0); 
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3); 
                }

                .ps-card-title {
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 15px;
                    color: white; 
                }

                .ps-features-list {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 30px;
                }

                .ps-features-list li {
                    font-size: 14px;
                    color: #E6EFEA; 
                    line-height: 1.6;
                    margin-bottom: 5px;
                    padding-left: 15px;
                    position: relative;
                }

                .ps-features-list li::before {
                    content: '•';
                    color: white; 
                    font-size: 16px;
                    position: absolute;
                    left: 0;
                    top: 0;
                }

                .ps-button {
                    background: white;
                    color: var(--primary-color); 
                    padding: 12px 20px;
                    border: none;
                    border-radius: 5px;
                    font-size: 14px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s;
                    text-align: center;
                    width: 100%;
                    margin-top: auto; 
                }

                .ps-button:hover {
                    background: #e0e0e0;
                    color: var(--primary-color-dark);
                }

                .ps-arrow {
                    margin-left: 8px;
                    font-weight: 700;
                }
                
                /* Responsive Adjustments for Small Screens */
                @media (max-width: 1024px) {
                    /* Global: Set 5vw padding for 5% left/right margin on mobile (UPDATED) */
                    .ep-container {
                        width: 100%;
                        padding: 0 5vw; 
                        box-sizing: border-box;
                    }

                    .ep-section-wrapper {
                        padding: 50px 0; 
                    }
                    
                    /* ---------------------------------------------------- */
                    /* 1. OVERALL REORDERING: Heading -> Card -> List */
                    /* ---------------------------------------------------- */

                    .ep-content-grid {
                        grid-template-columns: 1fr; 
                        gap: 30px; 
                        
                        /* NEW ORDER: Heading -> Card -> List -> Heading -> Card -> List */
                        grid-template-areas: 
                            "indoor-heading"
                            "indoor-card"
                            "indoor-list"
                            "outdoor-heading"
                            "outdoor-card"
                            "outdoor-list";
                    }
                    
                    /* Adjust heading margin for mobile */
                    .ep-indoor-heading { margin-bottom: 15px; }
                    .ep-outdoor-heading { margin-bottom: 15px; margin-top: 30px;}
                    
                    /* ---------------------------------------------------- */
                    /* 2. SELECTED ITEM TO TOP OF LIST (Using Flex Order) */
                    /* ---------------------------------------------------- */
                    
                    .ep-app-list {
                        display: flex; 
                        flex-direction: column;
                    }
                    
                    .ep-list-item.is-selected {
                        order: -1; 
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
                    }
                    
                    .ep-list-item {
                        order: 0; 
                    }
                    
                    /* Disable 3D lift/shadows on small screens */
                    .ep-card:hover, .ps-card:hover {
                        transform: translateY(0) translateZ(0); 
                        box-shadow: var(--shadow-low);
                    }

                    /* Disable reflection animation on small screens */
                    .ep-card:hover .image-reflection {
                        animation: none;
                        opacity: 0;
                    }

                    .ep-indoor-card, .ep-outdoor-card {
                        min-height: 200px; 
                    }
                    
                    /* Project Scale Section */
                    .ps-cards-grid {
                        grid-template-columns: 1fr; 
                        gap: 20px;
                    }
                }
            `})]})},Sn=`/video.mp4`,Cn=`/placeholder-image.jpg`,wn=[{label:`Calcium Carbonate`,max:40,display:`38-40%`},{label:`Magnesium Oxide`,max:5,display:`4-5%`},{label:`Silica`,max:25,display:`24-25%`}],Tn=({max:e,display:t,label:n})=>{let[r,i]=(0,v.useState)(0),a=(0,v.useRef)(null);(0,v.useEffect)(()=>{let t=()=>{if(a.current){let n=a.current.getBoundingClientRect();if(n.top<window.innerHeight&&n.bottom>=0&&r===0){let n=null,r=t=>{n||=t;let a=t-n,o=Math.min(a/1500,1),s=Math.floor(o*e);i(s),o<1?window.requestAnimationFrame(r):i(e)};window.requestAnimationFrame(r),window.removeEventListener(`scroll`,t)}}};return window.addEventListener(`scroll`,t),t(),()=>{window.removeEventListener(`scroll`,t)}},[e,r]);let o=r<e?`${r}%`:t;return(0,I.jsxs)(`div`,{className:`cc-stat-item`,ref:a,children:[(0,I.jsx)(`span`,{className:`cc-stat-value`,children:o}),(0,I.jsx)(`span`,{className:`cc-stat-label`,children:n})]})},En=()=>(0,I.jsxs)(`div`,{className:`cc-section-wrapper`,children:[(0,I.jsxs)(`div`,{className:`cc-container`,children:[(0,I.jsx)(`h2`,{className:`cc-main-heading`,children:`Chemical Composition`}),(0,I.jsx)(`p`,{className:`cc-sub-heading`,children:`Kota Stone Primarily Consists Of:`}),(0,I.jsx)(`div`,{className:`cc-stats-grid`,children:wn.map(e=>(0,I.jsx)(Tn,{max:e.max,display:e.display,label:e.label},e.label))}),(0,I.jsx)(`div`,{className:`cc-video-container`,children:(0,I.jsxs)(`video`,{className:`cc-video-player`,controls:!0,poster:Cn,preload:`metadata`,autoPlay:!0,muted:!0,loop:!0,children:[(0,I.jsx)(`source`,{src:Sn,type:`video/mp4`}),`Your browser does not support the video tag.`]})})]}),(0,I.jsx)(`style`,{children:`
                .cc-section-wrapper {
                   padding: 80px 20px;
                    font-family: 'Arial', sans-serif;
                    box-sizing: border-box;
                    margin-left: 10%;
                    margin-right: 10%;
                }

                .cc-container {
                    max-width: 1200px; 
                    margin: 0 auto;
                    text-align: left;
                }

                .cc-main-heading {
                    font-size: 38px;
                    font-weight: 600;
                    color: #333;
                    margin-bottom: 8px;
                }

                .cc-sub-heading {
                    font-size: 16px;
                    color: #777;
                    margin-bottom: 50px; 
                }

                /* --- Stats Grid Styling (Single Row on All Screens) --- */
                .cc-stats-grid {
                    display: grid;
                    /* Ensures 3 columns at all times for responsiveness */
                    grid-template-columns: repeat(3, 1fr); 
                    gap: 30px; 
                    margin-bottom: 70px; 
                }

                .cc-stat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start; 
                }

                .cc-stat-value {
                    /* SOLUTION: Force the percentage string onto a single line */
                    white-space: nowrap; 
                    
                    /* Font size adjustments for responsiveness */
                    /* Min size adjusted slightly lower to ensure fit on very small screens */
                    font-size: clamp(22px, 4.5vw, 32px); 
                    font-weight: 700;
                    color: #55756C; 
                    margin-bottom: 5px;
                    /* Ensure the animated text doesn't cause layout shift */
                    min-height: 1.2em; 
                }

                .cc-stat-label {
                    font-size: clamp(14px, 2vw, 15px);
                    color: #666;
                }
                /* --- END Stats Grid Styling --- */


                /* --- STYLES FOR HTML5 VIDEO CONTAINMENT --- */
                .cc-video-container {
                    position: relative;
                    width: 100%;
                    /* Standard 16:9 aspect ratio */
                    padding-bottom: 56.25%; 
                    background-color: #000;
                    border-radius: 10px;
                    overflow: hidden; 
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1); 
                }

                .cc-video-player {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                }
                /* --- END STYLES --- */

                /* Responsive Adjustments (General Layout) */
                @media (max-width: 1200px) {
                    .cc-section-wrapper {
                        margin-left: 5%;
                        margin-right: 5%;
                    }
                }

                @media (max-width: 768px) {
                    .cc-section-wrapper {
                        margin-left: 0;
                        margin-right: 0;
                        padding: 60px 20px;
                    }
                    .cc-main-heading {
                        font-size: 30px;
                    }
                    .cc-sub-heading {
                        margin-bottom: 30px;
                    }
                    .cc-stats-grid {
                        /* Retains 3 columns on all screen sizes */
                        gap: 15px;
                        margin-bottom: 50px;
                    }
                }

                @media (max-width: 480px) {
                    .cc-main-heading {
                        font-size: 26px;
                    }
                }
            `})]}),Dn=[{image:`1.png`,title:`Herringbone Pattern`,description:`Premium quality with natural greenish-blue hue, perfect for both interior and exterior use.`,sizes:`Available in 12"x12", 18"x18", 24"x24"`,thickness:`15-20mm`,finish:`Polished, Honed, Natural`,isPopular:!0},{image:`2.png`,title:`Random Slab Pattern`,description:`Rich brown texture with excellent durability and slip-resistant surface.`,sizes:`Available in 12"x12", 16"x16", 20"x20"`,thickness:`15-25mm`,finish:`Natural, Brushed, Polished`,isPopular:!1},{image:`3.png`,title:`Circular Design Pattern`,description:`Classic red sandstone with fine texture and excellent weather resistance.`,sizes:`Available in custom sizes`,thickness:`20-50mm`,finish:`Natural, Polished, Antique`,isPopular:!1},{image:`4.png`,title:`Diamond Cut Kota`,description:`Premium polished finish with mirror-like surface and enhanced durability.`,sizes:`Available in 12"x12", 16"x16", 18"x18"`,thickness:`18-25mm`,finish:`High Gloss Polish`,isPopular:!0}],On=({id:e})=>{let t=()=>(0,I.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,I.jsx)(`polyline`,{points:`12 5 19 12 12 19`}),(0,I.jsx)(`line`,{x1:`19`,y1:`12`,x2:`5`,y2:`12`})]}),n=({product:e})=>(0,I.jsxs)(`div`,{className:`psc-card`,children:[(0,I.jsxs)(`div`,{className:`psc-card-image-wrapper`,children:[(0,I.jsx)(`img`,{src:e.image,alt:e.title,className:`psc-card-image`}),e.isPopular&&(0,I.jsx)(`span`,{className:`psc-popular-tag`,children:`Most Popular`})]}),(0,I.jsxs)(`div`,{className:`psc-card-content`,children:[(0,I.jsx)(`h3`,{className:`psc-card-title`,children:e.title}),(0,I.jsx)(`p`,{className:`psc-card-description`,children:e.description}),(0,I.jsxs)(`div`,{className:`psc-card-details`,children:[(0,I.jsxs)(`p`,{style:{fontSize:`15px`},children:[(0,I.jsx)(`strong`,{style:{fontSize:`15px`},children:`Sizes:`}),` `,e.sizes]}),(0,I.jsxs)(`p`,{style:{fontSize:`15px`},children:[(0,I.jsx)(`strong`,{style:{fontSize:`15px`},children:`Thickness:`}),` `,e.thickness]}),(0,I.jsxs)(`p`,{style:{fontSize:`15px`},children:[(0,I.jsx)(`strong`,{style:{fontSize:`15px`},children:`Finish:`}),` `,e.finish]})]}),(0,I.jsxs)(`div`,{className:`psc-card-actions`,children:[(0,I.jsxs)(`button`,{className:`psc-button-primary`,children:[`Request Sample `,(0,I.jsx)(t,{})]}),(0,I.jsx)(`button`,{className:`psc-button-secondary`,children:`Get Quote`})]})]})]});return(0,I.jsxs)(`div`,{id:e,className:`psc-section-wrapper`,children:[(0,I.jsxs)(`div`,{className:`psc-container`,children:[(0,I.jsx)(`h2`,{className:`psc-main-heading`,children:`Premium Stone Collection`}),(0,I.jsxs)(`p`,{className:`psc-sub-heading`,children:[`Explore our extensive range of authentic Kota stones, each carefully selected for `,(0,I.jsx)(`br`,{}),`superior quality, durability, and natural beauty.`]}),(0,I.jsx)(`div`,{className:`psc-products-grid`,children:Dn.map((e,t)=>(0,I.jsx)(n,{product:e},t))}),(0,I.jsxs)(`div`,{className:`psc-custom-specs`,children:[(0,I.jsx)(`p`,{className:`psc-custom-specs-title`,children:`Need Custom Specifications?`}),(0,I.jsxs)(`p`,{className:`psc-custom-specs-description`,children:[`We offer custom cutting, finishing, and sizing services to meet your specific project`,(0,I.jsx)(`br`,{}),`requirements. Contact our experts for personalized solutions.`]}),(0,I.jsx)(`button`,{className:`psc-custom-specs-button`,onClick:()=>{window.location.href=`mailto:sawlastoneindustries@gmail.com?subject=Inquiry%3A%20Custom%20Stone%20Specifications&body=Hello%2C%0A%0AI%20am%20interested%20in%20discussing%20custom%20cutting%2C%20finishing%2C%20or%20sizing%20for%20a%20stone%20project.%20Please%20contact%20me%20to%20discuss%20my%20specific%20requirements.%0A%0AThank%20you.`},children:`Discuss Custom Requirements`})]})]}),(0,I.jsx)(`style`,{children:`
                /* Base Styles & Font */
                .psc-section-wrapper {
                    background-color: #f9f9f9;
                    padding: 80px 0; /* Vertical padding kept, horizontal removed */
                    box-sizing: border-box;
                    /* UPDATED: Set font to Inter */
                    font-family: 'Inter', sans-serif; 
                    min-height: 100vh; /* Ensure it's tall enough to scroll to */
                }

                /* Ensure all key text elements inherit or use Inter explicitly */
                .psc-section-wrapper h2, 
                .psc-section-wrapper h3, 
                .psc-section-wrapper p, 
                .psc-section-wrapper strong,
                .psc-section-wrapper button,
                .psc-section-wrapper span {
                    font-family: 'Inter', sans-serif; 
                }

                /* Container for 10% Left/Right Margin */
                .psc-container {
                    /* UPDATED: Set width to 80% for 10% margins */
                    width: 80%; 
                    max-width: 1200px;
                    /* UPDATED: Center the container */
                    margin: 0 auto;
                    text-align: center;
                }

                .psc-main-heading {
                    font-size: 38px;
                    font-weight: 600;
                    color: #437061;
                    margin-bottom: 8px;
                }

                .psc-sub-heading {
                    font-size: 16px;
                    color: #777;
                    margin-bottom: 60px;
                    line-height: 1.5;
                }

                .psc-products-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr); /* Two columns */
                    gap: 40px; /* Space between cards */
                    margin-bottom: 80px; /* Space above custom specs section */
                }

                .psc-card {
                    background-color: #ffffff;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                    display: flex;
                    flex-direction: column;
                    /* Add slight scale on hover for better interaction */
                    transition: transform 0.3s ease;
                }
                
                .psc-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                }


                .psc-card-image-wrapper {
                    position: relative;
                    width: 100%;
                    padding-bottom: 60%; 
                    overflow: hidden;
                }

                .psc-card-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    /* Add transition to image too */
                    transition: transform 0.4s ease;
                }

                /* --- O-IMAGE / REFLECTION EFFECT STYLES START --- */
                .psc-card-image-wrapper::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none; /* Allows clicks to pass through */
                    
                    /* The reflection gradient */
                    background: linear-gradient(
                        90deg, 
                        rgba(255, 255, 255, 0) 0%, 
                        rgba(255, 255, 255, 0.3) 50%, 
                        rgba(255, 255, 255, 0) 100%
                    );
                    
                    /* Initial position (off-screen to the left) */
                    transform: translateX(-100%) skewX(-20deg);
                    opacity: 0;
                    
                    /* Transition for the effect */
                    transition: transform 0.7s ease, opacity 0.7s ease;
                    z-index: 5; /* Ensure reflection is above image but below tag */
                }

                /* Active state on card hover */
                .psc-card:hover .psc-card-image-wrapper::after {
                    /* Final position (off-screen to the right) */
                    transform: translateX(200%) skewX(-20deg);
                    opacity: 1;
                }
                
                /* Optional: Slightly zoom the image on hover */
                .psc-card:hover .psc-card-image {
                    transform: scale(1.05);
                }
                /* --- O-IMAGE / REFLECTION EFFECT STYLES END --- */


                .psc-popular-tag {
                    position: absolute;
                    top: 20px;
                    left: 0;
                    background-color: #55756C; /* Green tag color */
                    color: white;
                    padding: 8px 15px;
                    font-size: 13px;
                    font-weight: 600;
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                    z-index: 10; /* Ensure tag is above reflection */
                }

                .psc-card-content {
                    padding: 30px;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1; 
                }

                .psc-card-title {
                    font-size: 24px;
                    font-weight: 600;
                    color: #4D3E33;
                    margin-bottom: 10px;
                }

                .psc-card-description {
                    font-size: 15px;
                    color: #666;
                    line-height: 1.5;
                    margin-bottom: 20px;
                }

                .psc-card-details {
                    /* REMOVED font-size rule here, as it is now set via inline styles. */
                    color: #555;
                    line-height: 1.6;
                    margin-bottom: 30px;
                }

                .psc-card-details strong {
                    font-weight: 600;
                    color: #333;
                    /* REMOVED font-size rule here, as it is now set via inline styles. */
                }

                .psc-card-actions {
                    display: flex;
                    gap: 15px;
                    margin-top: auto; 
                }

                .psc-button-primary,
                .psc-button-secondary {
                    padding: 12px 20px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .psc-button-primary {
                    background-color: #55756C; 
                    color: white;
                    border: 1px solid #55756C;
                }

                .psc-button-primary:hover {
                    background-color: #456057;
                    border-color: #456057;
                }
                
                .psc-button-primary svg {
                    margin-left: 8px;
                    width: 16px;
                    height: 16px;
                    stroke: white;
                }

                .psc-button-secondary {
                    background-color: transparent;
                    color: #55756C;
                    border: 1px solid #55756C;
                }

                .psc-button-secondary:hover {
                    background-color: #f0f5f3;
                }
                
                /* Custom Specifications Section */
                .psc-custom-specs {
                    background-color: #55756C;
                    padding: 50px 30px;
                    border-radius: 12px;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .psc-custom-specs-title {
                    font-size: 28px;
                    font-weight: 600;
                    margin-bottom: 15px;
                }

                .psc-custom-specs-description {
                    font-size: 16px;
                    line-height: 1.5;
                    margin-bottom: 30px;
                    max-width: 700px;
                    text-align: center;
                }

                .psc-custom-specs-button {
                    background-color: white;
                    color: #55756C;
                    padding: 15px 30px;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .psc-custom-specs-button:hover {
                    background-color: #f0f0f0;
                }

                /* Responsive Adjustments */
                @media (max-width: 1024px) {
                    /* Remove 10% margin on small screens and add padding */
                    .psc-container {
                        width: 100%;
                        padding: 0 4vw; 
                        box-sizing: border-box;
                    }
                    .psc-products-grid {
                        grid-template-columns: 1fr; 
                        gap: 30px;
                    }
                    .psc-main-heading {
                        font-size: 32px;
                    }
                    .psc-sub-heading {
                        margin-bottom: 40px;
                    }
                    .psc-custom-specs {
                        padding: 40px 20px;
                    }
                    .psc-custom-specs-title {
                        font-size: 24px;
                    }
                    .psc-custom-specs-description {
                        font-size: 15px;
                    }
                    .psc-custom-specs-button {
                        font-size: 15px;
                        padding: 12px 25px;
                    }
                }

                @media (max-width: 768px) {
                    .psc-section-wrapper {
                        padding: 60px 0; /* Vertical padding only */
                    }
                    .psc-main-heading {
                        font-size: 28px;
                    }
                    .psc-sub-heading {
                        font-size: 14px;
                    }
                    .psc-card-title {
                        font-size: 20px;
                    }
                    .psc-card-description {
                        font-size: 18px;
                    }
                    /* .psc-card-details no font size change - using inline style */
                    .psc-card-actions {
                        flex-direction: column; 
                        gap: 10px;
                    }
                    .psc-button-primary, .psc-button-secondary {
                        width: 100%;
                    }
                    .psc-custom-specs-title {
                        font-size: 20px;
                    }
                    .psc-custom-specs-description {
                        font-size: 14px;
                    }
                }

                @media (max-width: 480px) {
                    .psc-section-wrapper {
                        padding: 40px 0;
                    }
                    .psc-main-heading {
                        font-size: 24px;
                    }
                    .psc-sub-heading {
                        margin-bottom: 30px;
                    }
                    .psc-card-content {
                        padding: 20px;
                    }
                    .psc-card-image-wrapper {
                        padding-bottom: 70%; 
                    }
                    .psc-popular-tag {
                        padding: 6px 10px;
                        font-size: 12px;
                    }
                }
            `})]})},kn=[{client:`Ar. Mehul Shah, Interior Designer`,heading:`Have A Space In Mind? Let's Bring It To Life`,subheading:`We're Here To Help You Choose The Perfect Kota Stone For Your Next Project.`,quote:`"They perfectly understood our vision and delivered Kota Stone that enhanced both beauty and durability in every corner of our project."`,projectTitle:`Residential Villa Project, Ahmedabad`,projectDetails:`Featuring Kota Stone Blue Flooring And Wall Cladding With Semi-Polished Finish.`,backgroundColor:`#ffffff`,headingColor:`#55756C`,isSmallHeading:!1},{client:`K. Patel, Real Estate Developer`,heading:`Have A Project Or Just Want To Chat About Your Idea?`,subheading:``,quote:`"The quality of Kota Stone from Sawla Stone Industries is unmatched. It's been over five years, and the finish still looks as new as day one."`,projectTitle:`Luxury Apartment Project, Jaipur`,projectDetails:`Kota Stone Brown Used For Staircases, Flooring, And Outdoor Paving.`,backgroundColor:`#EAEAEA`,headingColor:`#333333`,isSmallHeading:!0},{client:`Amit Construction Co.`,heading:`Have A Project Or Just Want To Chat About Your Idea?`,subheading:``,quote:`"Strong, elegant, and reliable — Sawla Stone's quality speaks for itself. Our clients love the finish."`,projectTitle:`Resort Project, Kota`,projectDetails:`Leather Finish Kota Stone For Outdoor Decks And Pool Surrounds.`,backgroundColor:`#EAEAEA`,headingColor:`#333333`,isSmallHeading:!0}],An=()=>{let[e,t]=(0,v.useState)(0),n=e=>{t(e)},r=kn[e];return(0,I.jsxs)(`div`,{className:`pjc-section-wrapper`,style:{backgroundColor:r.backgroundColor},children:[(0,I.jsxs)(`div`,{className:`pjc-container`,children:[(0,I.jsxs)(`div`,{className:`pjc-left-content`,children:[(0,I.jsx)(`p`,{className:`pjc-client-info`,children:r.client}),(0,I.jsxs)(`div`,{className:`pjc-card-stack`,children:[(0,I.jsx)(`div`,{className:`pjc-card-stack-item pjc-card-bg-light`}),(0,I.jsx)(`div`,{className:`pjc-card-stack-item pjc-card-bg-medium`}),(0,I.jsx)(`div`,{className:`pjc-card-stack-item pjc-card-main`})]}),(0,I.jsx)(`p`,{className:`pjc-quote`,children:r.quote}),(0,I.jsx)(`div`,{className:`pjc-pagination-dots`,children:kn.map((t,r)=>(0,I.jsx)(`span`,{className:`pjc-dot ${r===e?`pjc-dot-active`:``}`,onClick:()=>n(r),style:{backgroundColor:r===e?`#555`:`#ccc`}},r))})]}),(0,I.jsxs)(`div`,{className:`pjc-right-content`,children:[(0,I.jsx)(`h2`,{className:`pjc-main-heading`,style:{color:r.headingColor},children:r.heading}),r.subheading&&(0,I.jsx)(`p`,{className:`pjc-sub-heading`,style:{color:r.headingColor},children:r.subheading}),r.isSmallHeading&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`p`,{className:`pjc-project-title-small`,children:r.projectTitle}),(0,I.jsx)(`p`,{className:`pjc-project-details-small`,children:r.projectDetails})]}),!r.isSmallHeading&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`p`,{className:`pjc-project-title-large`,children:r.projectTitle}),(0,I.jsx)(`p`,{className:`pjc-project-details-large`,children:r.projectDetails})]})]})]}),(0,I.jsx)(`style`,{children:`
                /* Base Styles & Font */
                .pjc-section-wrapper {
                    padding: 100px 0; /* Remove horizontal padding from wrapper */
                    box-sizing: border-box;
                    font-family: 'Inter', sans-serif; /* Using a modern font */
                    transition: background-color 0.5s ease; /* Smooth background transition */
                }

                /* Container for 10% Left/Right Margin */
                .pjc-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 10%; /* Apply 10% padding to the container */
                    box-sizing: border-box;
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 60px;
                    align-items: flex-start;
                    text-align: left; /* Ensure main content aligns left */
                }

                /* Left Section Styles */
                .pjc-left-content {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .pjc-client-info {
                    font-size: 16px;
                    color: #555;
                    margin-bottom: 30px;
                }

                .pjc-card-stack {
                    position: relative;
                    width: 150px;
                    height: 180px;
                    margin-bottom: 40px;
                }

                .pjc-card-stack-item {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 12px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }

                /* Card colors matching the grey style in the image */
                .pjc-card-bg-light {
                    background-color: #B0A096; /* Light brown/taupe */
                    top: -10px;
                    left: 10px;
                    z-index: 1;
                    transform: rotate(5deg);
                }

                .pjc-card-bg-medium {
                    background-color: #9A8778; /* Medium brown/taupe */
                    top: -5px;
                    left: 5px;
                    z-index: 2;
                    transform: rotate(2.5deg);
                }

                .pjc-card-main {
                    /* Main card is the prominent grey color */
                    background-color: #777777; 
                    top: 0;
                    left: 0;
                    z-index: 3;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
                }
                
                .pjc-quote {
                    font-size: 18px;
                    line-height: 1.6;
                    color: #333;
                    font-weight: 500;
                    margin-bottom: 30px;
                }

                .pjc-pagination-dots {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                }

                .pjc-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background-color: #ccc;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .pjc-dot-active {
                    width: 20px;
                    height: 7px;
                    border-radius: 4px;
                    background-color: #888;
                }

                /* Right Section Styles */
                .pjc-right-content {
                    padding-top: 10px;
                }

                /* Primary Heading Style (First Card) */
                .pjc-main-heading {
                    font-size: 44px;
                    font-weight: 600;
                    line-height: 1.2;
                    margin-bottom: 10px;
                    transition: color 0.5s ease;
                }
                
                /* Subheading/Call-to-Action Style (First Card) */
                .pjc-sub-heading {
                    font-size: 20px;
                    line-height: 1.5;
                    font-weight: 500;
                    margin-bottom: 50px;
                    transition: color 0.5s ease;
                }

                /* Project Title Large (First Card) */
                .pjc-project-title-large {
                    font-size: 20px;
                    font-weight: 600;
                    color: #555;
                    margin-bottom: 10px;
                }

                /* Project Details Large (First Card) */
                .pjc-project-details-large {
                    font-size: 16px;
                    color: #666;
                    line-height: 1.5;
                }
                
                /* Project Title Small (Second/Third Card) */
                .pjc-project-title-small {
                    font-size: 18px;
                    font-weight: 600;
                    color: #333;
                    margin-bottom: 8px;
                }

                /* Project Details Small (Second/Third Card) */
                .pjc-project-details-small {
                    font-size: 15px;
                    color: #555;
                    line-height: 1.4;
                    max-width: 450px;
                }


                /* Responsive Adjustments */
                @media (max-width: 1024px) {
                    .pjc-container {
                        grid-template-columns: 1fr;
                        gap: 50px;
                        padding: 0 5%; /* Adjust padding on smaller screens */
                        /* Key Change: Set Right content to order 1, Left content to order 2 */
                        display: flex; /* Change to flex for order property to work reliably */
                        flex-direction: column;
                    }
                    
                    /* NEW: Force the Right Content (Headline) to appear first */
                    .pjc-right-content {
                        order: 1; 
                        text-align: center; /* Center right content on small screens */
                        padding-top: 0;
                    }

                    /* NEW: Force the Left Content (Testimonial/Image) to appear second */
                    .pjc-left-content {
                        order: 2; 
                        align-items: center; /* Center content on small screens */
                    }

                    .pjc-quote {
                        text-align: center;
                    }
                    
                    .pjc-main-heading {
                        font-size: 38px;
                    }
                    .pjc-sub-heading {
                        font-size: 18px;
                    }
                }

                @media (max-width: 768px) {
                    .pjc-section-wrapper {
                        padding: 80px 0;
                    }
                    .pjc-main-heading {
                        font-size: 32px;
                    }
                    .pjc-quote {
                        font-size: 16px;
                    }
                    .pjc-sub-heading {
                        font-size: 16px;
                        margin-bottom: 30px;
                    }
                }

                @media (max-width: 480px) {
                    .pjc-section-wrapper {
                        padding: 60px 0;
                    }
                    .pjc-main-heading {
                        font-size: 28px;
                    }
                    .pjc-container {
                        padding: 0 4%;
                    }
                    .pjc-client-info {
                        font-size: 14px;
                    }
                }
            `})]})};function jn(e){return z({tag:`svg`,attr:{viewBox:`0 0 320 512`},child:[{tag:`path`,attr:{d:`M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z`},child:[]}]})(e)}function Mn(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`},child:[]}]})(e)}function Nn(e){return z({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z`},child:[]}]})(e)}function Pn(e){return z({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z`},child:[]}]})(e)}function Fn(e){return z({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z`},child:[]}]})(e)}function In(e){return z({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z`},child:[]}]})(e)}function Ln(e){return z({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z`},child:[]}]})(e)}var Rn={about:[`Benefits`,`Styles`,`Uses`,`Collection`]},zn=({type:e,href:t})=>{let n;return e===`facebook`?n=jn:e===`instagram`?n=Mn:e===`twitter`?n=Pn:e===`linked-in`&&(n=Nn),(0,I.jsx)(`a`,{href:t,className:`footer-social-icon`,"aria-label":`Follow us on ${e}`,target:`_blank`,rel:`noopener noreferrer`,children:(0,I.jsx)(n,{size:18})})},Bn=({icon:e})=>{let t;return e===`phone`?t=Fn:e===`email`?t=In:e===`location`&&(t=Ln),(0,I.jsx)(`span`,{className:`footer-contact-icon`,children:(0,I.jsx)(t,{size:20})})},Vn=()=>(0,I.jsxs)(`footer`,{className:`footer-wrapper`,children:[(0,I.jsxs)(`div`,{className:`footer-container`,children:[(0,I.jsxs)(`div`,{className:`footer-content-grid`,children:[(0,I.jsxs)(`div`,{className:`footer-col footer-col-info`,children:[(0,I.jsx)(`h3`,{className:`footer-company-title`,children:`Sawla Stone Industries`}),(0,I.jsxs)(`p`,{className:`footer-description`,children:[`Since 1995, we’ve been the trusted source for premium Kota stone, `,(0,I.jsx)(`br`,{}),`delivering exceptional quality and unmatched service to clients across `,(0,I.jsx)(`br`,{}),`India and beyond.`]}),(0,I.jsx)(`div`,{className:`footer-contact-group`,children:[{icon:`phone`,text:`+91-9829039690, +91-9799235966`},{icon:`email`,text:`sawlastoneindustries@gmail.com`},{icon:`location`,text:(0,I.jsxs)(I.Fragment,{children:[`Sawla Stone Industries `,(0,I.jsx)(`br`,{}),`Industrial Area, Kudayala `,(0,I.jsx)(`br`,{}),`Ramganjmandi, Kota, Rajasthan -326519 `,(0,I.jsx)(`br`,{}),`India`]})}].map((e,t)=>(0,I.jsxs)(`div`,{className:`footer-contact-item ${e.icon===`location`?`footer-address`:``}`,children:[(0,I.jsx)(Bn,{icon:e.icon}),(0,I.jsx)(`span`,{children:e.text})]},t))})]}),(0,I.jsx)(`div`,{className:`footer-col footer-col-nav-group`,children:(0,I.jsxs)(`div`,{className:`nav-sub-grid`,children:[(0,I.jsxs)(`div`,{className:`footer-col footer-col-nav`,children:[(0,I.jsx)(`h4`,{className:`footer-nav-heading`,children:`About Us`}),(0,I.jsx)(`ul`,{className:`footer-nav-list`,children:Rn.about.map((e,t)=>(0,I.jsx)(`li`,{children:(0,I.jsx)(`a`,{href:`#`,children:e})},t))})]}),(0,I.jsxs)(`div`,{className:`footer-col footer-col-quote`,children:[(0,I.jsx)(`h4`,{className:`footer-nav-heading footer-quote-heading`,children:`Get Quote`}),(0,I.jsxs)(`div`,{className:`footer-socials`,children:[(0,I.jsx)(zn,{type:`facebook`,href:`#`}),(0,I.jsx)(zn,{type:`instagram`,href:`https://www.instagram.com/sawlastoneind/`}),(0,I.jsx)(zn,{type:`twitter`,href:`#`}),(0,I.jsx)(zn,{type:`linked-in`,href:`#`})]})]})]})})]}),(0,I.jsxs)(`div`,{className:`footer-bottom`,children:[(0,I.jsx)(`p`,{className:`footer-copyright`,children:`© Copyright 2025, All Rights Reserved by **Sawla Stone Industries**`}),(0,I.jsxs)(`div`,{className:`footer-aux-links`,children:[(0,I.jsx)(`a`,{href:`#`,children:`Privacy Policy`}),(0,I.jsx)(`a`,{href:`#`,children:`Terms of Service`}),(0,I.jsx)(`a`,{href:`#`,children:`Sitemap`})]})]})]}),(0,I.jsx)(`style`,{children:`
                .footer-wrapper {
                    /* Color matched from the image: Dark olive green */
                    background-color: #58796E; 
                    color: #D3DCD4; 
                    padding: 60px 20px 20px 20px;
                    font-family: 'Arial', sans-serif;
                    box-sizing: border-box;
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                /* --- Top Section Grid Layout (Desktop: 2 Main Columns) --- */
                .footer-content-grid {
                    display: grid;
                    /* 60/40 split for Company Info and Nav/Quote */
                    grid-template-columns: 3fr 2fr; 
                    gap: 80px;
                    padding-bottom: 50px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
                }

                /* Inner grid for Navigation/Quote columns */
                .nav-sub-grid {
                    display: grid;
                    /* 50/50 split for About Us and Get Quote */
                    grid-template-columns: 1fr 1fr; 
                    gap: 40px;
                }
                
                /* Column 1: Info */
                .footer-company-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: white; 
                    margin-bottom: 20px;
                }

                .footer-description {
                    font-size: 14px;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }
                
                .footer-contact-group {
                    display: flex;
                    flex-direction: column;
                    gap: 10px; 
                }

                .footer-contact-item {
                    font-size: 14px;
                    line-height: 1.6;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
                
                .footer-contact-item span {
                    /* Base font size for contact text */
                    font-size: 14px; 
                }

                .footer-contact-icon {
                    margin-right: 15px; 
                    display: flex;
                    align-items: center;
                    flex-shrink: 0; 
                }
                
                .footer-address {
                    align-items: flex-start;
                }

                /* Columns 2, 3, 4: Navigation & Quote */
                .footer-nav-heading {
                    font-size: 18px;
                    font-weight: 600;
                    color: white;
                    margin-bottom: 25px;
                }

                .footer-quote-heading {
                    text-align: left;
                }

                .footer-nav-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    /* Default: Stacked (desktop/tablet) */
                    display: block; 
                }

                .footer-nav-list li {
                    margin-bottom: 12px;
                    display: block; /* Default: Stacked */
                }

                .footer-nav-list a {
                    color: #D3DCD4;
                    text-decoration: none;
                    font-size: 14px;
                    transition: color 0.2s;
                }

                .footer-nav-list a:hover {
                    color: white;
                }

                /* Social Icons Styling */
                .footer-socials {
                    display: flex;
                    gap: 15px;
                    justify-content: flex-start; 
                }

                .footer-social-icon {
                    width: 32px;
                    height: 32px;
                    background-color: rgba(255, 255, 255, 0.15); 
                    border-radius: 50%; 
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    transition: background-color 0.2s, color 0.2s;
                }

                .footer-social-icon:hover {
                    background-color: white;
                    color: #58796E; 
                }

                /* --- Bottom Section --- */
                .footer-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 20px;
                    font-size: 13px;
                }

                .footer-copyright {
                    color: #90A09A; 
                    margin: 0;
                    /* Base font size */
                    font-size: 13px;
                }
                
                .footer-aux-links a {
                    color: #90A09A;
                    text-decoration: none;
                    margin-left: 25px;
                    transition: color 0.2s;
                    /* Base font size */
                    font-size: 13px;
                }
                
                .footer-aux-links a:hover {
                    color: white;
                }


                /* --- Responsive Adjustments (Tablet) --- */
                @media (max-width: 768px) {
                    .footer-content-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                        padding-bottom: 40px;
                    }
                    .nav-sub-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 20px;
                    }
                    .footer-col-nav, .footer-col-quote {
                        text-align: left;
                    }
                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                    }
                    .footer-copyright {
                        margin-bottom: 15px;
                    }
                    .footer-aux-links a {
                        margin: 0 10px;
                    }
                    
                    /* --- UPDATE: 5% decrease for contact text (13px from 14px) --- */
                    .footer-contact-item span {
                        font-size: 13px; 
                    }
                    
                    /* --- UPDATE: 4% decrease for bottom text (12px from 13px) --- */
                    .footer-copyright,
                    .footer-aux-links a {
                        font-size: 12px;
                    }
                }
                
                /* --- Responsive Adjustments (Mobile - 480px and below) --- */
                @media (max-width: 480px) {
                    .footer-wrapper {
                        padding: 40px 15px 15px 15px;
                    }
                    
                    /* Company Info Alignment (Keep Left) */
                    .footer-col-info, .footer-description {
                        text-align: left; 
                    }
                    .footer-contact-item, .footer-socials {
                        justify-content: flex-start; 
                    }
                    .footer-address {
                        align-items: flex-start;
                    }
                    
                    /* Navigation Group: Vertical Stacking */
                    .nav-sub-grid {
                        grid-template-columns: 1fr; 
                        gap: 30px;
                    }
                    
                    /* Navigation Links: SINGLE ROW MODIFICATION */
                    .footer-col-nav {
                        text-align: center; 
                    }
                    .footer-nav-heading {
                        text-align: left; 
                    }
                    
                    .footer-nav-list {
                        display: flex; 
                        justify-content: space-between; 
                        flex-wrap: wrap; 
                        text-align: center;
                        gap: 10px;
                        margin-bottom: 0; 
                    }
                    .footer-nav-list li {
                        display: inline-block; 
                        margin-bottom: 0; 
                        padding: 5px 0;
                    }

                    /* Get Quote Alignment (Keep Left) */
                    .footer-col-quote {
                        text-align: left; 
                    }
                    
                    /* Re-applying size reduction for small mobile */
                    
                    /* --- UPDATE: 5% decrease for contact text (13px) --- */
                    .footer-contact-item span {
                        font-size: 13px; 
                    }
                    
                    /* --- UPDATE: 4% decrease for bottom text (12px) --- */
                    .footer-copyright,
                    .footer-aux-links a {
                        font-size: 12px;
                    }
                }
            `})]}),Hn=`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.983475711856!2d75.9808458!3d24.6534229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39656c907f4eeb4b%3A0x7e0c9436d6bb379a!2sSawla%20Stone%20Industries!5e1!3m2!1sen!2sin!4v1762588228263!5m2!1sen!2sin`,Un=()=>{let[e,t]=(0,v.useState)(!0);return(0,I.jsx)(`div`,{className:`min-h-screen bg-gray-50 flex items-center justify-center p-4`,children:(0,I.jsx)(`div`,{className:`bg-white shadow-2xl rounded-xl overflow-hidden transform transition-all duration-300`,style:{width:`92%`,margin:`4%`,maxWidth:`12000px`},children:(0,I.jsxs)(`div`,{className:`relative w-full`,style:{height:`70vh`,minHeight:`300px`},children:[e&&(0,I.jsxs)(`div`,{className:`absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-indigo-600 z-10`,children:[(0,I.jsxs)(`svg`,{className:`animate-spin h-8 w-8 text-indigo-500`,xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,children:[(0,I.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,I.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0
                  c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]}),(0,I.jsx)(`p`,{className:`mt-2 text-sm font-medium`,children:`Loading map...`})]}),(0,I.jsx)(`iframe`,{src:Hn,width:`100%`,height:`100%`,style:{border:0},allowFullScreen:``,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,className:`rounded-b-xl`,onLoad:()=>t(!1)})]})})})},Wn=`https://ops.sawlastoneindustries.com/api`,Gn=({className:e})=>(0,I.jsx)(`svg`,{className:e,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 448 512`,style:{fill:`currentColor`,width:`1em`,height:`1em`},children:(0,I.jsx)(`path`,{d:`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.2l105.7-105.7c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z`})}),Kn=({className:e})=>(0,I.jsx)(`svg`,{className:e,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`,style:{fill:`currentColor`,width:`1em`,height:`1em`},children:(0,I.jsx)(`path`,{d:`M239.1 63.1c9.2-9.2 21.6-14.9 35.3-15.8c-1.3-.2-2.6-.4-3.9-.4H64C28.7 48 0 76.7 0 112V400c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V272c0-1.4 0-2.8-.1-4.2c-.8-13.6-6.6-26.1-15.9-35.3L239.1 63.1zM64 432c-17.7 0-32-14.3-32-32V112c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32V256c0 17.7-14.3 32-32 32H96c-17.7 0-32 14.3-32 32V432zm303.8-151.7L448 358.5V400c0 17.7-14.3 32-32 32H400V368c0-17.7-14.3-32-32-32H336c-17.7 0-32 14.3-32 32v64H272c-17.7 0-32-14.3-32-32V358.5L304.3 280c7.3-7.3 17.2-11.4 27.5-11.4s20.2 4.1 27.5 11.4z`})}),qn=({className:e})=>(0,I.jsx)(`svg`,{className:e,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 384 512`,style:{fill:`currentColor`,width:`1em`,height:`1em`},children:(0,I.jsx)(`path`,{d:`M16 112c0-17.7 14.3-32 32-32H336c17.7 0 32 14.3 32 32V400c0 17.7-14.3 32-32 32H200c-17.7 0-32 14.3-32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V464H16c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM336 224H48V128H336v96zM48 320H336V256H48v64zM336 400H48V352H336v48z`})}),Jn=({className:e})=>(0,I.jsxs)(`svg`,{className:e,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 640 512`,style:{fill:`currentColor`,width:`1em`,height:`1em`},children:[(0,I.jsx)(`path`,{d:`M304 32c0-17.7-14.3-32-32-32H64C28.7 0 0 28.7 0 64V336c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM288 320H32V64H288V320zM640 128c0-17.7-14.3-32-32-32H352c-17.7 0-32 14.3-32 32v320h288V128zM352 416V160H576l64 64V416H352z`}),(0,I.jsx)(`circle`,{cx:`104`,cy:`440`,r:`40`,fill:`currentColor`}),(0,I.jsx)(`circle`,{cx:`536`,cy:`440`,r:`40`,fill:`currentColor`})]}),Yn=e=>new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:`INR`,minimumFractionDigits:2}).format(e),Xn=()=>{let[e,t]=(0,v.useState)({stones:[],finishes:[],sizes:[],thicknesses:[]}),[n,r]=(0,v.useState)({stoneType:``,status:``,quantity:0,size:``,thickness:``,rate:0,loadingChargeType:`per_quintal`,fixedLoadingCharge:0,freightRatePerQuintal:0,destination:``,fullName:``,companyName:``,mobile:``,email:``,address:``,gstNumber:``});(0,v.useEffect)(()=>{(async()=>{try{let e={method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({})},[n,r,i,a]=await Promise.all([fetch(`${Wn}/stone_data/fetch`,e).then(e=>e.json()),fetch(`${Wn}/stone_finishing/fetch`,e).then(e=>e.json()),fetch(`${Wn}/stone_sizes/fetch`,e).then(e=>e.json()),fetch(`${Wn}/stone_thicknesses/fetch`,e).then(e=>e.json())]);t({stones:Array.isArray(n)?n:n.rows||n.data||[],finishes:Array.isArray(r)?r:r.rows||r.data||[],sizes:Array.isArray(i)?i:i.rows||i.data||[],thicknesses:Array.isArray(a)?a:a.rows||a.data||[]})}catch(e){console.error(`API Fetch Error:`,e)}})()},[]);let i=n.stoneType.toLowerCase().includes(`tile`)?.18:.05,a=(0,v.useMemo)(()=>{let t=e.thicknesses.find(e=>String(e.thickness)===String(n.thickness));return t?parseFloat(t.weight):0},[e.thicknesses,n.thickness]),o=(0,v.useMemo)(()=>{let e=parseFloat(n.quantity)||0,t=parseFloat(n.rate)||0,r=parseFloat(n.freightRatePerQuintal)||0,o=e*t,s=o*i,c=e*a,l=c/100,u=0;u=n.loadingChargeType===`fixed`?parseFloat(n.fixedLoadingCharge)||0:l*100;let d=l*r,f=o+s+u,p=f+d;return{subtotal:o,gstAmount:s,loadingCharge:u,totalWeightKg:c,quintals:l,freightCost:d,totalWithoutFreight:f,grandTotal:p}},[n,a,i]),s=e=>{let{name:t,value:n,type:i}=e.target;r(e=>({...e,[t]:i===`number`?parseFloat(n)||0:n}))};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{children:`
        * { font-family: "Inter", sans-serif; box-sizing: border-box; }
        .quote-page { background: #f7f8f6; padding: 30px 20px; min-height: 100vh; display: flex; flex-direction: column; align-items: center; }
        .content-wrapper { width: 100%; max-width: 850px; }
        .navigation-row { display: flex; justify-content: space-between; margin-bottom: 12px; width: 100%; }
        .back-link, .home-link { display: flex; align-items: center; gap: 6px; color: #656d63; cursor: pointer; font-size: 14px; text-decoration: none; }
        .page-title { font-size: 30px; font-weight: 600; color: #114c36; margin: 10px 0 5px 0; }
        .page-desc { color: #737b72; margin-bottom: 25px; }
        .card, .summary-card { background: white; padding: 25px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 3px 12px rgba(0,0,0,0.08); }
        .card-title { display: flex; align-items: center; gap: 8px; margin-bottom: 15px; font-weight: 600; color: #114c36; font-size: 18px; }
        .icon { color: #2d8a5b; font-size: 20px; }
        .form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
        .input-group { display: flex; flex-direction: column; }
        .input-label { font-size: 13px; color: #363c35; font-weight: 500; margin-bottom: 4px; }
        .input { padding: 12px; border: 1px solid #ccd3cc; border-radius: 8px; font-size: 14px; outline: none; }
        .input:focus { border-color: #2d8a5b; box-shadow: 0 0 0 2px rgba(45, 138, 91, 0.1); }
        .input:disabled { background: #f9f9f9; color: #888; }
        .full { grid-column: 1 / -1; }
        .shipment-box { background: #eef3ed; padding: 15px; border-radius: 8px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center; }
        .shipment-item h4 { font-size: 11px; color: #737b72; margin: 0 0 4px 0; text-transform: uppercase; }
        .shipment-item p { font-size: 16px; font-weight: 600; color: #114c36; margin: 0; }
        .freight-display { background: #e9f4ec; padding: 15px; border-radius: 8px; color: #2d8a5b; font-weight: 700; text-align: right; font-size: 24px; }
        .freight-display span { font-size: 13px; color: #185f42; display: block; font-weight: 400; }
        .summary-row { display: flex; justify-content: space-between; margin: 10px 0; font-size: 15px; color: #444; }
        .summary-total { display: flex; justify-content: space-between; background: #e9f4ec; padding: 18px; border-radius: 8px; font-size: 22px; font-weight: 800; color: #114c36; margin-top: 15px; }
        .btn { padding: 12px 25px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; border: none; transition: 0.2s; }
        .submit { background: #114c36; color: white; }
        .submit:hover { background: #0d3828; }
        @media (max-width: 600px) { .shipment-box { grid-template-columns: 1fr; } .form-grid { grid-template-columns: 1fr; } }
      `}),(0,I.jsx)(`div`,{className:`quote-page`,children:(0,I.jsxs)(`div`,{className:`content-wrapper`,children:[(0,I.jsxs)(`div`,{className:`navigation-row`,children:[(0,I.jsxs)(`a`,{href:`#`,className:`back-link`,onClick:e=>{e.preventDefault(),window.history.back()},children:[(0,I.jsx)(Gn,{}),` Back`]}),(0,I.jsx)(`a`,{href:`/`,className:`home-link`,children:`Home`})]}),(0,I.jsx)(`h1`,{className:`page-title`,children:`Quotation Generator`}),(0,I.jsx)(`p`,{className:`page-desc`,children:`The prices and weights below are automatically calculated based on your inputs.`}),(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsxs)(`div`,{className:`card-title`,children:[(0,I.jsx)(Kn,{className:`icon`}),` Stone Requirements`]}),(0,I.jsxs)(`div`,{className:`form-grid`,children:[(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Stone Type *`}),(0,I.jsxs)(`select`,{className:`input`,name:`stoneType`,value:n.stoneType,onChange:s,children:[(0,I.jsx)(`option`,{value:``,children:`Select Stone`}),e.stones.map((e,t)=>(0,I.jsx)(`option`,{value:e.stone_type,children:e.stone_type},t))]})]}),(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Finish *`}),(0,I.jsxs)(`select`,{className:`input`,name:`status`,value:n.status,onChange:s,children:[(0,I.jsx)(`option`,{value:``,children:`Select Finish`}),e.finishes.map((e,t)=>(0,I.jsx)(`option`,{value:e.finishing_type,children:e.finishing_type},t))]})]}),(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Dimensions *`}),(0,I.jsxs)(`select`,{className:`input`,name:`size`,value:n.size,onChange:s,children:[(0,I.jsx)(`option`,{value:``,children:`Select Size`}),e.sizes.map((e,t)=>(0,I.jsx)(`option`,{value:e.size_ft_square,children:e.size_ft_square},t))]})]}),(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Thickness *`}),(0,I.jsxs)(`select`,{className:`input`,name:`thickness`,value:n.thickness,onChange:s,children:[(0,I.jsx)(`option`,{value:``,children:`Select Thickness`}),e.thicknesses.map((e,t)=>(0,I.jsxs)(`option`,{value:e.thickness,children:[e.thickness,` inch`]},t))]})]}),(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Quantity (Sq. Ft.) *`}),(0,I.jsx)(`input`,{className:`input`,type:`number`,name:`quantity`,placeholder:`Enter area`,onChange:s})]}),(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Base Rate (₹/Sq. Ft.) *`}),(0,I.jsx)(`input`,{className:`input`,type:`number`,name:`rate`,placeholder:`Enter rate`,onChange:s})]}),(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Loading Mode`}),(0,I.jsxs)(`select`,{className:`input`,name:`loadingChargeType`,value:n.loadingChargeType,onChange:s,children:[(0,I.jsx)(`option`,{value:`per_quintal`,children:`₹100/Quintal (Auto)`}),(0,I.jsx)(`option`,{value:`fixed`,children:`Fixed Amount`})]})]}),n.loadingChargeType===`fixed`&&(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Loading Amount (₹)`}),(0,I.jsx)(`input`,{className:`input`,type:`number`,name:`fixedLoadingCharge`,onChange:s})]})]})]}),(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsxs)(`div`,{className:`card-title`,children:[(0,I.jsx)(qn,{className:`icon`}),` Customer Information`]}),(0,I.jsxs)(`div`,{className:`form-grid`,children:[(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Customer Name *`}),(0,I.jsx)(`input`,{className:`input`,name:`fullName`,onChange:s})]}),(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Mobile *`}),(0,I.jsx)(`input`,{className:`input`,name:`mobile`,onChange:s})]}),(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Email`}),(0,I.jsx)(`input`,{className:`input`,name:`email`,onChange:s})]}),(0,I.jsxs)(`div`,{className:`input-group full`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Delivery Address *`}),(0,I.jsx)(`input`,{className:`input`,name:`address`,onChange:s})]})]})]}),(0,I.jsxs)(`div`,{className:`card`,children:[(0,I.jsxs)(`div`,{className:`card-title`,children:[(0,I.jsx)(Jn,{className:`icon`}),` Logistics & Weight`]}),(0,I.jsxs)(`div`,{className:`form-grid`,children:[(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Freight Rate (₹/Quintal)`}),(0,I.jsx)(`input`,{className:`input`,type:`number`,name:`freightRatePerQuintal`,placeholder:`Rate`,onChange:s})]}),(0,I.jsxs)(`div`,{className:`input-group`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Destination`}),(0,I.jsx)(`input`,{className:`input`,name:`destination`,placeholder:`City, State`,onChange:s})]}),(0,I.jsxs)(`div`,{className:`input-group full`,children:[(0,I.jsx)(`label`,{className:`input-label`,children:`Shipment Analysis`}),(0,I.jsxs)(`div`,{className:`shipment-box`,children:[(0,I.jsxs)(`div`,{className:`shipment-item`,children:[(0,I.jsx)(`h4`,{children:`Factor`}),(0,I.jsxs)(`p`,{children:[a,` kg/ft²`]})]}),(0,I.jsxs)(`div`,{className:`shipment-item`,children:[(0,I.jsx)(`h4`,{children:`Total Weight`}),(0,I.jsxs)(`p`,{children:[o.totalWeightKg.toFixed(1),` kg`]})]}),(0,I.jsxs)(`div`,{className:`shipment-item`,children:[(0,I.jsx)(`h4`,{children:`Quintals`}),(0,I.jsx)(`p`,{children:o.quintals.toFixed(2)})]})]})]}),(0,I.jsx)(`div`,{className:`input-group full`,children:(0,I.jsxs)(`div`,{className:`freight-display`,children:[(0,I.jsx)(`span`,{children:`Estimated Freight Charges`}),Yn(o.freightCost)]})})]})]}),(0,I.jsxs)(`div`,{className:`summary-card`,children:[(0,I.jsx)(`div`,{className:`card-title`,children:`Billing Summary`}),(0,I.jsxs)(`div`,{className:`summary-row`,children:[(0,I.jsx)(`span`,{children:`Stone Cost`}),(0,I.jsx)(`span`,{children:Yn(o.subtotal)})]}),(0,I.jsxs)(`div`,{className:`summary-row`,children:[(0,I.jsx)(`span`,{children:`Loading Charges`}),(0,I.jsx)(`span`,{children:Yn(o.loadingCharge)})]}),(0,I.jsxs)(`div`,{className:`summary-row`,children:[(0,I.jsxs)(`span`,{children:[`GST (`,i*100,`%)`]}),(0,I.jsx)(`span`,{children:Yn(o.gstAmount)})]}),(0,I.jsxs)(`div`,{className:`summary-row`,style:{borderTop:`1px solid #eee`,paddingTop:`10px`,marginTop:`10px`},children:[(0,I.jsx)(`span`,{children:`Subtotal (Excl. Freight)`}),(0,I.jsx)(`span`,{children:Yn(o.totalWithoutFreight)})]}),(0,I.jsxs)(`div`,{className:`summary-row`,children:[(0,I.jsx)(`span`,{children:`Transportation`}),(0,I.jsxs)(`span`,{children:[`+ `,Yn(o.freightCost)]})]}),(0,I.jsxs)(`div`,{className:`summary-total`,children:[(0,I.jsx)(`span`,{children:`Grand Total`}),(0,I.jsx)(`span`,{children:Yn(o.grandTotal)})]})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`12px`,marginBottom:`50px`},children:[(0,I.jsx)(`button`,{type:`button`,className:`btn`,style:{background:`#fff`,border:`1px solid #ddd`},children:`Reset`}),(0,I.jsx)(`button`,{type:`button`,className:`btn submit`,onClick:()=>window.print(),children:`Save & Print`})]})]})}),(0,I.jsx)(Vn,{})]})},Zn=()=>(0,I.jsxs)(`div`,{style:Qn.container,className:`stonework-container`,children:[(0,I.jsxs)(`div`,{style:Qn.leftSection,className:`desktop-only-section`,children:[(0,I.jsxs)(`h2`,{style:Qn.title,children:[`The Art of `,(0,I.jsx)(`br`,{}),` Stonework`]}),(0,I.jsx)(`p`,{style:Qn.subtitle,children:`Showcasing elegant designs and refined craftsmanship with our exclusive Kota Stone collection.`}),(0,I.jsxs)(`div`,{style:Qn.leftImages,children:[(0,I.jsx)(`img`,{src:`i1.jpg`,alt:`Interior Showcase 1`,style:Qn.leftImage,className:`image-hover-effect`}),(0,I.jsx)(`img`,{src:`i2.jpg`,alt:`Interior Showcase 2`,style:Qn.leftImage,className:`image-hover-effect`})]})]}),(0,I.jsxs)(`div`,{style:Qn.rightSection,className:`desktop-only-section`,children:[(0,I.jsxs)(`div`,{style:Qn.columnWide,children:[(0,I.jsx)(`img`,{src:`i3.jpg`,alt:`Room View 1`,style:Qn.rightImageCenterTall,className:`image-hover-effect`}),(0,I.jsx)(`img`,{src:`i4.jpg`,alt:`Room View 4`,style:Qn.rightImageLarge,className:`image-hover-effect`})]}),(0,I.jsxs)(`div`,{style:Qn.column,children:[(0,I.jsx)(`img`,{src:`i5.jpg`,alt:`Room View 2`,style:Qn.rightImageSmall,className:`image-hover-effect`}),(0,I.jsx)(`img`,{src:`i6.jpg`,alt:`Room View 3`,style:Qn.rightImageSmall,className:`image-hover-effect`}),(0,I.jsx)(`img`,{src:`i7.jpg`,alt:`Room View 5`,style:Qn.rightImageSmall,className:`image-hover-effect`})]})]}),(0,I.jsxs)(`div`,{className:`mobile-tablet-version`,children:[(0,I.jsxs)(`div`,{className:`mobile-text`,children:[(0,I.jsx)(`span`,{className:`mobile-badge`,children:`Exclusive Collection`}),(0,I.jsxs)(`h2`,{children:[`The Art of `,(0,I.jsx)(`br`,{}),` Stonework`]}),(0,I.jsx)(`div`,{className:`title-underline`}),(0,I.jsx)(`p`,{children:`Showcasing elegant designs and refined craftsmanship with our exclusive Kota Stone collection.`})]}),(0,I.jsxs)(`div`,{className:`mobile-gallery`,children:[(0,I.jsx)(`img`,{src:`i1.jpg`,alt:`Stonework 1`,className:`image-hover-effect item-tall`}),(0,I.jsx)(`img`,{src:`i2.jpg`,alt:`Stonework 2`,className:`image-hover-effect`}),(0,I.jsx)(`img`,{src:`i3.jpg`,alt:`Stonework 3`,className:`image-hover-effect`}),(0,I.jsx)(`img`,{src:`i4.jpg`,alt:`Stonework 4`,className:`image-hover-effect item-tall`}),(0,I.jsx)(`img`,{src:`i5.jpg`,alt:`Stonework 5`,className:`image-hover-effect`}),(0,I.jsx)(`img`,{src:`i6.jpg`,alt:`Stonework 6`,className:`image-hover-effect`}),(0,I.jsx)(`img`,{src:`i7.jpg`,alt:`Stonework 7`,className:`last-image image-hover-effect`})]})]}),(0,I.jsx)(`style`,{children:`
        .image-hover-effect {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
          cursor: pointer;
        }

        .image-hover-effect:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        /* Default: Hide mobile/tablet version on desktop */
        .mobile-tablet-version {
          display: none;
        }

        /* ======== MOBILE & TABLET STYLES (Up to 1024px) ======== */
        @media (max-width: 1024px) {
          .desktop-only-section {
            display: none !important;
          }

          .stonework-container {
            padding: 40px 20px !important;
            background: linear-gradient(to bottom, #ffffff, #f9fbf9);
            justify-content: center !important;
          }

          .mobile-tablet-version {
            display: flex !important;
            flex-direction: column;
            width: 100%;
            max-width: 700px; /* Limits width on tablets so it doesn't get too wide */
            margin: 0 auto;
          }

          .mobile-text {
            text-align: center;
            margin-bottom: 40px;
          }

          .mobile-badge {
            display: inline-block;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 10px;
            color: #2f5d47;
            font-weight: 800;
            margin-bottom: 8px;
            opacity: 0.7;
          }

          .mobile-text h2 {
            font-size: clamp(32px, 5vw, 42px);
            color: #1a3a2a;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 15px;
          }

          .title-underline {
            width: 50px;
            height: 3px;
            background-color: #2f5d47;
            margin: 0 auto 20px auto;
          }

          .mobile-text p {
            font-size: 16px;
            color: #666;
            line-height: 1.6;
            max-width: 450px;
            margin: 0 auto;
          }

          .mobile-gallery {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: minmax(150px, auto);
            gap: 15px;
          }
          
          .mobile-gallery img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }

          .item-tall {
            grid-row: span 2;
          }

          .mobile-gallery img.last-image {
            grid-column: span 2;
            height: 200px;
          }
        }
      `})]}),Qn={container:{display:`flex`,flexWrap:`wrap`,justifyContent:`center`,alignItems:`flex-start`,gap:`25px`,padding:`80px 5%`,backgroundColor:`#fff`,fontFamily:`'Inter', -apple-system, BlinkMacSystemFont, Arial, sans-serif`},leftSection:{flex:`1 1 340px`,maxWidth:`380px`},title:{fontSize:`42px`,color:`#2f5d47`,fontWeight:`700`,lineHeight:`1.3`,marginBottom:`20px`},subtitle:{fontSize:`18px`,color:`#555`,lineHeight:`1.7`,marginBottom:`40px`},leftImages:{display:`flex`,flexDirection:`column`,gap:`25px`},leftImage:{width:`100%`,height:`182px`,borderRadius:`14px`,objectFit:`cover`,boxShadow:`0 8px 25px rgba(0,0,0,0.08)`},rightSection:{flex:`2 1 700px`,display:`grid`,gridTemplateColumns:`1.8fr 1fr`,alignItems:`flex-start`,gap:`25px`},column:{display:`flex`,flexDirection:`column`,gap:`25px`},columnWide:{display:`flex`,flexDirection:`column`,gap:`25px`},rightImageSmall:{width:`100%`,height:`200px`,borderRadius:`14px`,objectFit:`cover`,boxShadow:`0 8px 25px rgba(0,0,0,0.08)`},rightImageCenterTall:{width:`100%`,height:`395px`,borderRadius:`14px`,objectFit:`cover`,boxShadow:`0 8px 25px rgba(0,0,0,0.08)`},rightImageLarge:{width:`100%`,height:`230px`,borderRadius:`14px`,objectFit:`cover`,boxShadow:`0 8px 25px rgba(0,0,0,0.08)`}},$n=Zn;o(((e,t)=>{
/*!
* Bootstrap v5.3.8 (https://getbootstrap.com/)
* Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).bootstrap=r()})(e,function(){let e=new Map,t={set(t,n,r){e.has(t)||e.set(t,new Map);let i=e.get(t);i.has(n)||i.size===0?i.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;let r=e.get(t);r.delete(n),r.size===0&&e.delete(t)}},n=`transitionend`,r=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),i=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),a=e=>{e.dispatchEvent(new Event(n))},o=e=>!(!e||typeof e!=`object`)&&(e.jquery!==void 0&&(e=e[0]),e.nodeType!==void 0),s=e=>o(e)?e.jquery?e[0]:e:typeof e==`string`&&e.length>0?document.querySelector(r(e)):null,c=e=>{if(!o(e)||e.getClientRects().length===0)return!1;let t=getComputedStyle(e).getPropertyValue(`visibility`)===`visible`,n=e.closest(`details:not([open])`);if(!n)return t;if(n!==e){let t=e.closest(`summary`);if(t&&t.parentNode!==n||t===null)return!1}return t},l=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains(`disabled`)||(e.disabled===void 0?e.hasAttribute(`disabled`)&&e.getAttribute(`disabled`)!==`false`:e.disabled),u=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode==`function`){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?u(e.parentNode):null},d=()=>{},f=e=>{e.offsetHeight},p=()=>window.jQuery&&!document.body.hasAttribute(`data-bs-no-jquery`)?window.jQuery:null,m=[],h=()=>document.documentElement.dir===`rtl`,g=e=>{var t=()=>{let t=p();if(t){let n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}};document.readyState===`loading`?(m.length||document.addEventListener(`DOMContentLoaded`,()=>{for(let e of m)e()}),m.push(t)):t()},_=(e,t=[],n=e)=>typeof e==`function`?e.call(...t):n,v=(e,t,r=!0)=>{if(!r)return void _(e);let i=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);return Number.parseFloat(t)||Number.parseFloat(n)?(t=t.split(`,`)[0],n=n.split(`,`)[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5,o=!1,s=({target:r})=>{r===t&&(o=!0,t.removeEventListener(n,s),_(e))};t.addEventListener(n,s),setTimeout(()=>{o||a(t)},i)},y=(e,t,n,r)=>{let i=e.length,a=e.indexOf(t);return a===-1?!n&&r?e[i-1]:e[0]:(a+=n?1:-1,r&&(a=(a+i)%i),e[Math.max(0,Math.min(a,i-1))])},b=/[^.]*(?=\..*)\.|.*/,x=/\..*/,S=/::\d+$/,C={},w=1,T={mouseenter:`mouseover`,mouseleave:`mouseout`},E=new Set(`click.dblclick.mouseup.mousedown.contextmenu.mousewheel.DOMMouseScroll.mouseover.mouseout.mousemove.selectstart.selectend.keydown.keypress.keyup.orientationchange.touchstart.touchmove.touchend.touchcancel.pointerdown.pointermove.pointerup.pointerleave.pointercancel.gesturestart.gesturechange.gestureend.focus.blur.change.reset.select.submit.focusin.focusout.load.unload.beforeunload.resize.move.DOMContentLoaded.readystatechange.error.abort.scroll`.split(`.`));function ee(e,t){return t&&`${t}::${w++}`||e.uidEvent||w++}function D(e){let t=ee(e);return e.uidEvent=t,C[t]=C[t]||{},C[t]}function te(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function ne(e,t,n){let r=typeof t==`string`,i=r?n:t||n,a=oe(e);return E.has(a)||(a=e),[r,i,a]}function re(e,t,n,r,i){if(typeof t!=`string`||!e)return;let[a,o,s]=ne(t,n,r);t in T&&(o=(e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)})(o));let c=D(e),l=c[s]||(c[s]={}),u=te(l,o,a?n:null);if(u)return void(u.oneOff=u.oneOff&&i);let d=ee(o,t.replace(b,``)),f=a?function(e,t,n){return function r(i){let a=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let s of a)if(s===o)return k(i,{delegateTarget:o}),r.oneOff&&O.off(e,i.type,t,n),n.apply(o,[i])}}(e,n,o):function(e,t){return function n(r){return k(r,{delegateTarget:e}),n.oneOff&&O.off(e,r.type,t),t.apply(e,[r])}}(e,o);f.delegationSelector=a?n:null,f.callable=o,f.oneOff=i,f.uidEvent=d,l[d]=f,e.addEventListener(s,f,a)}function ie(e,t,n,r,i){let a=te(t[n],r,i);a&&(e.removeEventListener(n,a,!!i),delete t[n][a.uidEvent])}function ae(e,t,n,r){let i=t[n]||{};for(let[a,o]of Object.entries(i))a.includes(r)&&ie(e,t,n,o.callable,o.delegationSelector)}function oe(e){return e=e.replace(x,``),T[e]||e}let O={on(e,t,n,r){re(e,t,n,r,!1)},one(e,t,n,r){re(e,t,n,r,!0)},off(e,t,n,r){if(typeof t!=`string`||!e)return;let[i,a,o]=ne(t,n,r),s=o!==t,c=D(e),l=c[o]||{},u=t.startsWith(`.`);if(a===void 0){if(u)for(let n of Object.keys(c))ae(e,c,n,t.slice(1));for(let[n,r]of Object.entries(l)){let i=n.replace(S,``);s&&!t.includes(i)||ie(e,c,o,r.callable,r.delegationSelector)}}else{if(!Object.keys(l).length)return;ie(e,c,o,a,i?n:null)}},trigger(e,t,n){if(typeof t!=`string`||!e)return null;let r=p(),i=null,a=!0,o=!0,s=!1;t!==oe(t)&&r&&(i=r.Event(t,n),r(e).trigger(i),a=!i.isPropagationStopped(),o=!i.isImmediatePropagationStopped(),s=i.isDefaultPrevented());let c=k(new Event(t,{bubbles:a,cancelable:!0}),n);return s&&c.preventDefault(),o&&e.dispatchEvent(c),c.defaultPrevented&&i&&i.preventDefault(),c}};function k(e,t={}){for(let[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}function A(e){if(e===`true`)return!0;if(e===`false`)return!1;if(e===Number(e).toString())return Number(e);if(e===``||e===`null`)return null;if(typeof e!=`string`)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function se(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}let ce={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${se(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${se(t)}`)},getDataAttributes(e){if(!e)return{};let t={},n=Object.keys(e.dataset).filter(e=>e.startsWith(`bs`)&&!e.startsWith(`bsConfig`));for(let r of n){let n=r.replace(/^bs/,``);n=n.charAt(0).toLowerCase()+n.slice(1),t[n]=A(e.dataset[r])}return t},getDataAttribute:(e,t)=>A(e.getAttribute(`data-bs-${se(t)}`))};class le{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error(`You have to implement the static method "NAME", for each component!`)}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){let n=o(t)?ce.getDataAttribute(t,`config`):{};return{...this.constructor.Default,...typeof n==`object`?n:{},...o(t)?ce.getDataAttributes(t):{},...typeof e==`object`?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(let[n,r]of Object.entries(t)){let t=e[n],a=o(t)?`element`:i(t);if(!new RegExp(r).test(a))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${r}".`)}}}class ue extends le{constructor(e,n){super(),(e=s(e))&&(this._element=e,this._config=this._getConfig(n),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),O.off(this._element,this.constructor.EVENT_KEY);for(let e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){v(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return t.get(s(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t==`object`?t:null)}static get VERSION(){return`5.3.8`}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}let j=e=>{let t=e.getAttribute(`data-bs-target`);if(!t||t===`#`){let n=e.getAttribute(`href`);if(!n||!n.includes(`#`)&&!n.startsWith(`.`))return null;n.includes(`#`)&&!n.startsWith(`#`)&&(n=`#${n.split(`#`)[1]}`),t=n&&n!==`#`?n.trim():null}return t?t.split(`,`).map(e=>r(e)).join(`,`):null},M={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){let n=[],r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){let t=[`a`,`button`,`input`,`textarea`,`select`,`details`,`[tabindex]`,`[contenteditable="true"]`].map(e=>`${e}:not([tabindex^="-"])`).join(`,`);return this.find(t,e).filter(e=>!l(e)&&c(e))},getSelectorFromElement(e){let t=j(e);return t&&M.findOne(t)?t:null},getElementFromSelector(e){let t=j(e);return t?M.findOne(t):null},getMultipleElementsFromSelector(e){let t=j(e);return t?M.find(t):[]}},de=(e,t=`hide`)=>{let n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;O.on(document,n,`[data-bs-dismiss="${r}"]`,function(n){if([`A`,`AREA`].includes(this.tagName)&&n.preventDefault(),l(this))return;let i=M.getElementFromSelector(this)||this.closest(`.${r}`);e.getOrCreateInstance(i)[t]()})},fe=`.bs.alert`,pe=`close${fe}`,me=`closed${fe}`;class he extends ue{static get NAME(){return`alert`}close(){if(O.trigger(this._element,pe).defaultPrevented)return;this._element.classList.remove(`show`);let e=this._element.classList.contains(`fade`);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),O.trigger(this._element,me),this.dispose()}static jQueryInterface(e){return this.each(function(){let t=he.getOrCreateInstance(this);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e](this)}})}}de(he,`close`),g(he);let ge=`[data-bs-toggle="button"]`;class _e extends ue{static get NAME(){return`button`}toggle(){this._element.setAttribute(`aria-pressed`,this._element.classList.toggle(`active`))}static jQueryInterface(e){return this.each(function(){let t=_e.getOrCreateInstance(this);e===`toggle`&&t[e]()})}}O.on(document,`click.bs.button.data-api`,ge,e=>{e.preventDefault();let t=e.target.closest(ge);_e.getOrCreateInstance(t).toggle()}),g(_e);let ve=`.bs.swipe`,ye=`touchstart${ve}`,be=`touchmove${ve}`,xe=`touchend${ve}`,Se=`pointerdown${ve}`,Ce=`pointerup${ve}`,we={endCallback:null,leftCallback:null,rightCallback:null},Te={endCallback:`(function|null)`,leftCallback:`(function|null)`,rightCallback:`(function|null)`};class Ee extends le{constructor(e,t){super(),this._element=e,e&&Ee.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return we}static get DefaultType(){return Te}static get NAME(){return`swipe`}dispose(){O.off(this._element,ve)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),_(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){let e=Math.abs(this._deltaX);if(e<=40)return;let t=e/this._deltaX;this._deltaX=0,t&&_(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(O.on(this._element,Se,e=>this._start(e)),O.on(this._element,Ce,e=>this._end(e)),this._element.classList.add(`pointer-event`)):(O.on(this._element,ye,e=>this._start(e)),O.on(this._element,be,e=>this._move(e)),O.on(this._element,xe,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===`pen`||e.pointerType===`touch`)}static isSupported(){return`ontouchstart`in document.documentElement||navigator.maxTouchPoints>0}}let De=`.bs.carousel`,Oe=`.data-api`,ke=`next`,Ae=`prev`,N=`left`,je=`right`,Me=`slide${De}`,Ne=`slid${De}`,Pe=`keydown${De}`,Fe=`mouseenter${De}`,Ie=`mouseleave${De}`,Le=`dragstart${De}`,Re=`load${De}${Oe}`,ze=`click${De}${Oe}`,Be=`carousel`,Ve=`active`,He=`.active`,Ue=`.carousel-item`,We=He+Ue,Ge={ArrowLeft:je,ArrowRight:N},Ke={interval:5e3,keyboard:!0,pause:`hover`,ride:!1,touch:!0,wrap:!0},qe={interval:`(number|boolean)`,keyboard:`boolean`,pause:`(string|boolean)`,ride:`(boolean|string)`,touch:`boolean`,wrap:`boolean`};class Je extends ue{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=M.findOne(`.carousel-indicators`,this._element),this._addEventListeners(),this._config.ride===Be&&this.cycle()}static get Default(){return Ke}static get DefaultType(){return qe}static get NAME(){return`carousel`}next(){this._slide(ke)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._slide(Ae)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?O.one(this._element,Ne,()=>this.cycle()):this.cycle())}to(e){let t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void O.one(this._element,Ne,()=>this.to(e));let n=this._getItemIndex(this._getActive());if(n===e)return;let r=e>n?ke:Ae;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&O.on(this._element,Pe,e=>this._keydown(e)),this._config.pause===`hover`&&(O.on(this._element,Fe,()=>this.pause()),O.on(this._element,Ie,()=>this._maybeEnableCycle())),this._config.touch&&Ee.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let e of M.find(`.carousel-item img`,this._element))O.on(e,Le,e=>e.preventDefault());this._swipeHelper=new Ee(this._element,{leftCallback:()=>this._slide(this._directionToOrder(N)),rightCallback:()=>this._slide(this._directionToOrder(je)),endCallback:()=>{this._config.pause===`hover`&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}})}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;let t=Ge[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;let t=M.findOne(He,this._indicatorsElement);t.classList.remove(Ve),t.removeAttribute(`aria-current`);let n=M.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(Ve),n.setAttribute(`aria-current`,`true`))}_updateInterval(){let e=this._activeElement||this._getActive();if(!e)return;let t=Number.parseInt(e.getAttribute(`data-bs-interval`),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;let n=this._getActive(),r=e===ke,i=t||y(this._getItems(),n,r,this._config.wrap);if(i===n)return;let a=this._getItemIndex(i),o=t=>O.trigger(this._element,t,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:a});if(o(Me).defaultPrevented||!n||!i)return;let s=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;let c=r?`carousel-item-start`:`carousel-item-end`,l=r?`carousel-item-next`:`carousel-item-prev`;i.classList.add(l),f(i),n.classList.add(c),i.classList.add(c),this._queueCallback(()=>{i.classList.remove(c,l),i.classList.add(Ve),n.classList.remove(Ve,l,c),this._isSliding=!1,o(Ne)},n,this._isAnimated()),s&&this.cycle()}_isAnimated(){return this._element.classList.contains(`slide`)}_getActive(){return M.findOne(We,this._element)}_getItems(){return M.find(Ue,this._element)}_clearInterval(){this._interval&&=(clearInterval(this._interval),null)}_directionToOrder(e){return h()?e===N?Ae:ke:e===N?ke:Ae}_orderToDirection(e){return h()?e===Ae?N:je:e===Ae?je:N}static jQueryInterface(e){return this.each(function(){let t=Je.getOrCreateInstance(this,e);if(typeof e!=`number`){if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)})}}O.on(document,ze,`[data-bs-slide], [data-bs-slide-to]`,function(e){let t=M.getElementFromSelector(this);if(!t||!t.classList.contains(Be))return;e.preventDefault();let n=Je.getOrCreateInstance(t),r=this.getAttribute(`data-bs-slide-to`);r?(n.to(r),n._maybeEnableCycle()):ce.getDataAttribute(this,`slide`)===`next`?(n.next(),n._maybeEnableCycle()):(n.prev(),n._maybeEnableCycle())}),O.on(window,Re,()=>{let e=M.find(`[data-bs-ride="carousel"]`);for(let t of e)Je.getOrCreateInstance(t)}),g(Je);let Ye=`.bs.collapse`,Xe=`show${Ye}`,Ze=`shown${Ye}`,Qe=`hide${Ye}`,$e=`hidden${Ye}`,et=`click${Ye}.data-api`,tt=`show`,nt=`collapse`,rt=`collapsing`,it=`:scope .${nt} .${nt}`,at=`[data-bs-toggle="collapse"]`,ot={parent:null,toggle:!0},st={parent:`(null|element)`,toggle:`boolean`};class ct extends ue{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];let n=M.find(at);for(let e of n){let t=M.getSelectorFromElement(e),n=M.find(t).filter(e=>e===this._element);t!==null&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ot}static get DefaultType(){return st}static get NAME(){return`collapse`}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(`.collapse.show, .collapse.collapsing`).filter(e=>e!==this._element).map(e=>ct.getOrCreateInstance(e,{toggle:!1}))),e.length&&e[0]._isTransitioning||O.trigger(this._element,Xe).defaultPrevented)return;for(let t of e)t.hide();let t=this._getDimension();this._element.classList.remove(nt),this._element.classList.add(rt),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let n=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(rt),this._element.classList.add(nt,tt),this._element.style[t]=``,O.trigger(this._element,Ze)},this._element,!0),this._element.style[t]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown()||O.trigger(this._element,Qe).defaultPrevented)return;let e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,f(this._element),this._element.classList.add(rt),this._element.classList.remove(nt,tt);for(let e of this._triggerArray){let t=M.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[e]=``,this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(rt),this._element.classList.add(nt),O.trigger(this._element,$e)},this._element,!0)}_isShown(e=this._element){return e.classList.contains(tt)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=s(e.parent),e}_getDimension(){return this._element.classList.contains(`collapse-horizontal`)?`width`:`height`}_initializeChildren(){if(!this._config.parent)return;let e=this._getFirstLevelChildren(at);for(let t of e){let e=M.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){let t=M.find(it,this._config.parent);return M.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(let n of e)n.classList.toggle(`collapsed`,!t),n.setAttribute(`aria-expanded`,t)}static jQueryInterface(e){let t={};return typeof e==`string`&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){let n=ct.getOrCreateInstance(this,t);if(typeof e==`string`){if(n[e]===void 0)throw TypeError(`No method named "${e}"`);n[e]()}})}}O.on(document,et,at,function(e){(e.target.tagName===`A`||e.delegateTarget&&e.delegateTarget.tagName===`A`)&&e.preventDefault();for(let e of M.getMultipleElementsFromSelector(this))ct.getOrCreateInstance(e,{toggle:!1}).toggle()}),g(ct);var lt=`top`,ut=`bottom`,P=`right`,F=`left`,dt=`auto`,ft=[lt,ut,P,F],pt=`start`,mt=`end`,ht=`clippingParents`,gt=`viewport`,_t=`popper`,vt=`reference`,yt=ft.reduce(function(e,t){return e.concat([t+`-`+pt,t+`-`+mt])},[]),bt=[].concat(ft,[dt]).reduce(function(e,t){return e.concat([t,t+`-`+pt,t+`-`+mt])},[]),xt=`beforeRead`,St=`read`,Ct=`afterRead`,wt=`beforeMain`,Tt=`main`,I=`afterMain`,Et=`beforeWrite`,Dt=`write`,Ot=`afterWrite`,kt=[xt,St,Ct,wt,Tt,I,Et,Dt,Ot];function At(e){return e?(e.nodeName||``).toLowerCase():null}function jt(e){if(e==null)return window;if(e.toString()!==`[object Window]`){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function L(e){return e instanceof jt(e).Element||e instanceof Element}function R(e){return e instanceof jt(e).HTMLElement||e instanceof HTMLElement}function Mt(e){return typeof ShadowRoot<`u`&&(e instanceof jt(e).ShadowRoot||e instanceof ShadowRoot)}let Nt={name:`applyStyles`,enabled:!0,phase:`write`,fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];R(i)&&At(i)&&(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?``:t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]=``,e},{});R(r)&&At(r)&&(Object.assign(r.style,a),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}},requires:[`computeStyles`]};function Pt(e){return e.split(`-`)[0]}var Ft=Math.max,It=Math.min,Lt=Math.round;function Rt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+`/`+e.version}).join(` `):navigator.userAgent}function zt(){return!/^((?!chrome|android).)*safari/i.test(Rt())}function Bt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&R(e)&&(i=e.offsetWidth>0&&Lt(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Lt(r.height)/e.offsetHeight||1);var o=(L(e)?jt(e):window).visualViewport,s=!zt()&&n,c=(r.left+(s&&o?o.offsetLeft:0))/i,l=(r.top+(s&&o?o.offsetTop:0))/a,u=r.width/i,d=r.height/a;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function Vt(e){var t=Bt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Ht(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Mt(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ut(e){return jt(e).getComputedStyle(e)}function Wt(e){return[`table`,`td`,`th`].indexOf(At(e))>=0}function Gt(e){return((L(e)?e.ownerDocument:e.document)||window.document).documentElement}function Kt(e){return At(e)===`html`?e:e.assignedSlot||e.parentNode||(Mt(e)?e.host:null)||Gt(e)}function qt(e){return R(e)&&Ut(e).position!==`fixed`?e.offsetParent:null}function Jt(e){for(var t=jt(e),n=qt(e);n&&Wt(n)&&Ut(n).position===`static`;)n=qt(n);return n&&(At(n)===`html`||At(n)===`body`&&Ut(n).position===`static`)?t:n||function(e){var t=/firefox/i.test(Rt());if(/Trident/i.test(Rt())&&R(e)&&Ut(e).position===`fixed`)return null;var n=Kt(e);for(Mt(n)&&(n=n.host);R(n)&&[`html`,`body`].indexOf(At(n))<0;){var r=Ut(n);if(r.transform!==`none`||r.perspective!==`none`||r.contain===`paint`||[`transform`,`perspective`].indexOf(r.willChange)!==-1||t&&r.willChange===`filter`||t&&r.filter&&r.filter!==`none`)return n;n=n.parentNode}return null}(e)||t}function Yt(e){return[`top`,`bottom`].indexOf(e)>=0?`x`:`y`}function Xt(e,t,n){return Ft(e,It(t,n))}function Zt(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Qt(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}let z={name:`arrow`,enabled:!0,phase:`main`,fn:function(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,s=Pt(n.placement),c=Yt(s),l=[F,P].indexOf(s)>=0?`height`:`width`;if(a&&o){var u=function(e,t){return Zt(typeof(e=typeof e==`function`?e(Object.assign({},t.rects,{placement:t.placement})):e)==`number`?Qt(e,ft):e)}(i.padding,n),d=Vt(a),f=c===`y`?lt:F,p=c===`y`?ut:P,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],h=o[c]-n.rects.reference[c],g=Jt(a),_=g?c===`y`?g.clientHeight||0:g.clientWidth||0:0,v=m/2-h/2,y=u[f],b=_-d[l]-u[p],x=_/2-d[l]/2+v,S=Xt(y,x,b),C=c;n.modifiersData[r]=((t={})[C]=S,t.centerOffset=S-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=n===void 0?`[data-popper-arrow]`:n;r!=null&&(typeof r!=`string`||(r=t.elements.popper.querySelector(r)))&&Ht(t.elements.popper,r)&&(t.elements.arrow=r)},requires:[`popperOffsets`],requiresIfExists:[`preventOverflow`]};function $t(e){return e.split(`-`)[1]}var en={top:`auto`,right:`auto`,bottom:`auto`,left:`auto`};function tn(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,h=m===void 0?0:m,g=typeof u==`function`?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var _=o.hasOwnProperty(`x`),v=o.hasOwnProperty(`y`),y=F,b=lt,x=window;if(l){var S=Jt(n),C=`clientHeight`,w=`clientWidth`;S===jt(n)&&Ut(S=Gt(n)).position!==`static`&&s===`absolute`&&(C=`scrollHeight`,w=`scrollWidth`),(i===lt||(i===F||i===P)&&a===mt)&&(b=ut,h-=(d&&S===x&&x.visualViewport?x.visualViewport.height:S[C])-r.height,h*=c?1:-1),i!==F&&(i!==lt&&i!==ut||a!==mt)||(y=P,p-=(d&&S===x&&x.visualViewport?x.visualViewport.width:S[w])-r.width,p*=c?1:-1)}var T,E=Object.assign({position:s},l&&en),ee=!0===u?function(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:Lt(n*i)/i||0,y:Lt(r*i)/i||0}}({x:p,y:h},jt(n)):{x:p,y:h};return p=ee.x,h=ee.y,c?Object.assign({},E,((T={})[b]=v?`0`:``,T[y]=_?`0`:``,T.transform=(x.devicePixelRatio||1)<=1?`translate(`+p+`px, `+h+`px)`:`translate3d(`+p+`px, `+h+`px, 0)`,T)):Object.assign({},E,((t={})[b]=v?h+`px`:``,t[y]=_?p+`px`:``,t.transform=``,t))}let nn={name:`computeStyles`,enabled:!0,phase:`beforeWrite`,fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0||r,a=n.adaptive,o=a===void 0||a,s=n.roundOffsets,c=s===void 0||s,l={placement:Pt(t.placement),variation:$t(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy===`fixed`};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,tn(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,tn(Object.assign({},l,{offsets:t.modifiersData.arrow,position:`absolute`,adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var rn={passive:!0};let an={name:`eventListeners`,enabled:!0,phase:`write`,fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0||i,o=r.resize,s=o===void 0||o,c=jt(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(e){e.addEventListener(`scroll`,n.update,rn)}),s&&c.addEventListener(`resize`,n.update,rn),function(){a&&l.forEach(function(e){e.removeEventListener(`scroll`,n.update,rn)}),s&&c.removeEventListener(`resize`,n.update,rn)}},data:{}};var on={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function sn(e){return e.replace(/left|right|bottom|top/g,function(e){return on[e]})}var cn={start:`end`,end:`start`};function ln(e){return e.replace(/start|end/g,function(e){return cn[e]})}function un(e){var t=jt(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function dn(e){return Bt(Gt(e)).left+un(e).scrollLeft}function fn(e){var t=Ut(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function pn(e){return[`html`,`body`,`#document`].indexOf(At(e))>=0?e.ownerDocument.body:R(e)&&fn(e)?e:pn(Kt(e))}function mn(e,t){t===void 0&&(t=[]);var n=pn(e),r=n===e.ownerDocument?.body,i=jt(n),a=r?[i].concat(i.visualViewport||[],fn(n)?n:[]):n,o=t.concat(a);return r?o:o.concat(mn(Kt(a)))}function hn(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function gn(e,t,n){return t===gt?hn(function(e,t){var n=jt(e),r=Gt(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=zt();(l||!l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s+dn(e),y:c}}(e,n)):L(t)?function(e,t){var n=Bt(e,!1,t===`fixed`);return n.top+=e.clientTop,n.left+=e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):hn(function(e){var t=Gt(e),n=un(e),r=e.ownerDocument?.body,i=Ft(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=Ft(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-n.scrollLeft+dn(e),s=-n.scrollTop;return Ut(r||t).direction===`rtl`&&(o+=Ft(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:o,y:s}}(Gt(e)))}function _n(e){var t,n=e.reference,r=e.element,i=e.placement,a=i?Pt(i):null,o=i?$t(i):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(a){case lt:t={x:s,y:n.y-r.height};break;case ut:t={x:s,y:n.y+n.height};break;case P:t={x:n.x+n.width,y:c};break;case F:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var l=a?Yt(a):null;if(l!=null){var u=l===`y`?`height`:`width`;switch(o){case pt:t[l]=t[l]-(n[u]/2-r[u]/2);break;case mt:t[l]=t[l]+(n[u]/2-r[u]/2)}}return t}function vn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,o=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?ht:s,l=n.rootBoundary,u=l===void 0?gt:l,d=n.elementContext,f=d===void 0?_t:d,p=n.altBoundary,m=p!==void 0&&p,h=n.padding,g=h===void 0?0:h,_=Zt(typeof g==`number`?Qt(g,ft):g),v=f===_t?vt:_t,y=e.rects.popper,b=e.elements[m?v:f],x=function(e,t,n,r){var i=t===`clippingParents`?function(e){var t=mn(Kt(e)),n=[`absolute`,`fixed`].indexOf(Ut(e).position)>=0&&R(e)?Jt(e):e;return L(n)?t.filter(function(e){return L(e)&&Ht(e,n)&&At(e)!==`body`}):[]}(e):[].concat(t),a=[].concat(i,[n]),o=a[0],s=a.reduce(function(t,n){var i=gn(e,n,r);return t.top=Ft(i.top,t.top),t.right=It(i.right,t.right),t.bottom=It(i.bottom,t.bottom),t.left=Ft(i.left,t.left),t},gn(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(L(b)?b:b.contextElement||Gt(e.elements.popper),c,u,o),S=Bt(e.elements.reference),C=_n({reference:S,element:y,placement:i}),w=hn(Object.assign({},y,C)),T=f===_t?w:S,E={top:x.top-T.top+_.top,bottom:T.bottom-x.bottom+_.bottom,left:x.left-T.left+_.left,right:T.right-x.right+_.right},ee=e.modifiersData.offset;if(f===_t&&ee){var D=ee[i];Object.keys(E).forEach(function(e){var t=[P,ut].indexOf(e)>=0?1:-1,n=[lt,ut].indexOf(e)>=0?`y`:`x`;E[e]+=D[n]*t})}return E}function yn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?bt:c,u=$t(r),d=u?s?yt:yt.filter(function(e){return $t(e)===u}):ft,f=d.filter(function(e){return l.indexOf(e)>=0});f.length===0&&(f=d);var p=f.reduce(function(t,n){return t[n]=vn(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[Pt(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}let bn={name:`flip`,enabled:!0,phase:`main`,fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o===void 0||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0||p,h=n.allowedAutoPlacements,g=t.options.placement,_=Pt(g),v=c||(_!==g&&m?function(e){if(Pt(e)===dt)return[];var t=sn(e);return[ln(e),t,ln(t)]}(g):[sn(g)]),y=[g].concat(v).reduce(function(e,n){return e.concat(Pt(n)===dt?yn(t,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)},[]),b=t.rects.reference,x=t.rects.popper,S=new Map,C=!0,w=y[0],T=0;T<y.length;T++){var E=y[T],ee=Pt(E),D=$t(E)===pt,te=[lt,ut].indexOf(ee)>=0,ne=te?`width`:`height`,re=vn(t,{placement:E,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),ie=te?D?P:F:D?ut:lt;b[ne]>x[ne]&&(ie=sn(ie));var ae=sn(ie),oe=[];if(a&&oe.push(re[ee]<=0),s&&oe.push(re[ie]<=0,re[ae]<=0),oe.every(function(e){return e})){w=E,C=!1;break}S.set(E,oe)}if(C)for(var O=function(e){var t=y.find(function(t){var n=S.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return w=t,`break`},k=m?3:1;k>0&&O(k)!==`break`;k--);t.placement!==w&&(t.modifiersData[r]._skip=!0,t.placement=w,t.reset=!0)}},requiresIfExists:[`offset`],data:{_skip:!1}};function xn(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Sn(e){return[lt,P,ut,F].some(function(t){return e[t]>=0})}let Cn={name:`hide`,enabled:!0,phase:`main`,requiresIfExists:[`preventOverflow`],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=vn(t,{elementContext:`reference`}),s=vn(t,{altBoundary:!0}),c=xn(o,r),l=xn(s,i,a),u=Sn(c),d=Sn(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}},wn={name:`offset`,enabled:!0,phase:`main`,requires:[`popperOffsets`],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,o=bt.reduce(function(e,n){return e[n]=function(e,t,n){var r=Pt(e),i=[F,lt].indexOf(r)>=0?-1:1,a=typeof n==`function`?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o||=0,s=(s||0)*i,[F,P].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}(n,t.rects,a),e},{}),s=o[t.placement],c=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}},Tn={name:`popperOffsets`,enabled:!0,phase:`read`,fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=_n({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})},data:{}},En={name:`preventOverflow`,enabled:!0,phase:`main`,fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o!==void 0&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0||f,m=n.tetherOffset,h=m===void 0?0:m,g=vn(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),_=Pt(t.placement),v=$t(t.placement),y=!v,b=Yt(_),x=b===`x`?`y`:`x`,S=t.modifiersData.popperOffsets,C=t.rects.reference,w=t.rects.popper,T=typeof h==`function`?h(Object.assign({},t.rects,{placement:t.placement})):h,E=typeof T==`number`?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),ee=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(S){if(a){var te=b===`y`?lt:F,ne=b===`y`?ut:P,re=b===`y`?`height`:`width`,ie=S[b],ae=ie+g[te],oe=ie-g[ne],O=p?-w[re]/2:0,k=v===pt?C[re]:w[re],A=v===pt?-w[re]:-C[re],se=t.elements.arrow,ce=p&&se?Vt(se):{width:0,height:0},le=t.modifiersData[`arrow#persistent`]?t.modifiersData[`arrow#persistent`].padding:{top:0,right:0,bottom:0,left:0},ue=le[te],j=le[ne],M=Xt(0,C[re],ce[re]),de=y?C[re]/2-O-M-ue-E.mainAxis:k-M-ue-E.mainAxis,fe=y?-C[re]/2+O+M+j+E.mainAxis:A+M+j+E.mainAxis,pe=t.elements.arrow&&Jt(t.elements.arrow),me=pe?b===`y`?pe.clientTop||0:pe.clientLeft||0:0,he=ee?.[b]??0,ge=ie+fe-he,_e=Xt(p?It(ae,ie+de-he-me):ae,ie,p?Ft(oe,ge):oe);S[b]=_e,D[b]=_e-ie}if(s){var ve=b===`x`?lt:F,ye=b===`x`?ut:P,be=S[x],xe=x===`y`?`height`:`width`,Se=be+g[ve],Ce=be-g[ye],we=[lt,F].indexOf(_)!==-1,Te=ee?.[x]??0,Ee=we?Se:be-C[xe]-w[xe]-Te+E.altAxis,De=we?be+C[xe]+w[xe]-Te-E.altAxis:Ce,Oe=p&&we?function(e,t,n){var r=Xt(e,t,n);return r>n?n:r}(Ee,be,De):Xt(p?Ee:Se,be,p?De:Ce);S[x]=Oe,D[x]=Oe-be}t.modifiersData[r]=D}},requiresIfExists:[`offset`]};function Dn(e,t,n){n===void 0&&(n=!1);var r,i,a=R(t),o=R(t)&&function(e){var t=e.getBoundingClientRect(),n=Lt(t.width)/e.offsetWidth||1,r=Lt(t.height)/e.offsetHeight||1;return n!==1||r!==1}(t),s=Gt(t),c=Bt(e,o,n),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(a||!a&&!n)&&((At(t)!==`body`||fn(s))&&(l=(r=t)!==jt(r)&&R(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:un(r)),R(t)?((u=Bt(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=dn(s))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function On(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){n.has(e.name)||i(e)}),r}var kn={placement:`bottom`,modifiers:[],strategy:`absolute`};function An(){return![...arguments].some(function(e){return!(e&&typeof e.getBoundingClientRect==`function`)})}function jn(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?kn:i;return function(e,t,n){n===void 0&&(n=a);var i,o,s={placement:`bottom`,orderedModifiers:[],options:Object.assign({},kn,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:s,setOptions:function(n){var i=typeof n==`function`?n(s.options):n;d(),s.options=Object.assign({},a,s.options,i),s.scrollParents={reference:L(e)?mn(e):e.contextElement?mn(e.contextElement):[],popper:mn(t)};var o,l;return s.orderedModifiers=function(e){var t=On(e);return kt.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}((o=[].concat(r,s.options.modifiers),l=o.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{}),Object.keys(l).map(function(e){return l[e]}))).filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=n===void 0?{}:n,i=e.effect;if(typeof i==`function`){var a=i({state:s,name:t,instance:u,options:r});c.push(a||function(){})}}),u.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,n=e.popper;if(An(t,n)){s.rects={reference:Dn(t,Jt(n),s.options.strategy===`fixed`),popper:Vt(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var i=s.orderedModifiers[r],a=i.fn,o=i.options,c=o===void 0?{}:o,d=i.name;typeof a==`function`&&(s=a({state:s,options:c,name:d,instance:u})||s)}else s.reset=!1,r=-1}}},update:(i=function(){return new Promise(function(e){u.forceUpdate(),e(s)})},function(){return o||=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(i())})}),o}),destroy:function(){d(),l=!0}};if(!An(e,t))return u;function d(){c.forEach(function(e){return e()}),c=[]}return u.setOptions(n).then(function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)}),u}}var Mn=jn(),Nn=jn({defaultModifiers:[an,Tn,nn,Nt]}),Pn=jn({defaultModifiers:[an,Tn,nn,Nt,wn,bn,En,z,Cn]});let Fn=Object.freeze(Object.defineProperty({__proto__:null,afterMain:I,afterRead:Ct,afterWrite:Ot,applyStyles:Nt,arrow:z,auto:dt,basePlacements:ft,beforeMain:wt,beforeRead:xt,beforeWrite:Et,bottom:ut,clippingParents:ht,computeStyles:nn,createPopper:Pn,createPopperBase:Mn,createPopperLite:Nn,detectOverflow:vn,end:mt,eventListeners:an,flip:bn,hide:Cn,left:F,main:Tt,modifierPhases:kt,offset:wn,placements:bt,popper:_t,popperGenerator:jn,popperOffsets:Tn,preventOverflow:En,read:St,reference:vt,right:P,start:pt,top:lt,variationPlacements:yt,viewport:gt,write:Dt},Symbol.toStringTag,{value:`Module`})),In=`.bs.dropdown`,Ln=`.data-api`,Rn=`ArrowDown`,zn=`hide${In}`,Bn=`hidden${In}`,Vn=`show${In}`,Hn=`shown${In}`,Un=`click${In}${Ln}`,Wn=`keydown${In}${Ln}`,Gn=`keyup${In}${Ln}`,Kn=`show`,qn=`[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)`,Jn=`${qn}.${Kn}`,Yn=`.dropdown-menu`,Xn=h()?`top-end`:`top-start`,Zn=h()?`top-start`:`top-end`,Qn=h()?`bottom-end`:`bottom-start`,$n=h()?`bottom-start`:`bottom-end`,er=h()?`left-start`:`right-start`,tr=h()?`right-start`:`left-start`,nr={autoClose:!0,boundary:`clippingParents`,display:`dynamic`,offset:[0,2],popperConfig:null,reference:`toggle`},rr={autoClose:`(boolean|string)`,boundary:`(string|element)`,display:`string`,offset:`(array|string|function)`,popperConfig:`(null|object|function)`,reference:`(string|element|object)`};class ir extends ue{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=M.next(this._element,Yn)[0]||M.prev(this._element,Yn)[0]||M.findOne(Yn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return nr}static get DefaultType(){return rr}static get NAME(){return`dropdown`}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;let e={relatedTarget:this._element};if(!O.trigger(this._element,Vn,e).defaultPrevented){if(this._createPopper(),`ontouchstart`in document.documentElement&&!this._parent.closest(`.navbar-nav`))for(let e of[].concat(...document.body.children))O.on(e,`mouseover`,d);this._element.focus(),this._element.setAttribute(`aria-expanded`,!0),this._menu.classList.add(Kn),this._element.classList.add(Kn),O.trigger(this._element,Hn,e)}}hide(){if(l(this._element)||!this._isShown())return;let e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!O.trigger(this._element,zn,e).defaultPrevented){if(`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))O.off(e,`mouseover`,d);this._popper&&this._popper.destroy(),this._menu.classList.remove(Kn),this._element.classList.remove(Kn),this._element.setAttribute(`aria-expanded`,`false`),ce.removeDataAttribute(this._menu,`popper`),O.trigger(this._element,Bn,e)}}_getConfig(e){if(typeof(e=super._getConfig(e)).reference==`object`&&!o(e.reference)&&typeof e.reference.getBoundingClientRect!=`function`)throw TypeError(`DROPDOWN: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(Fn===void 0)throw TypeError(`Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)`);let e=this._element;this._config.reference===`parent`?e=this._parent:o(this._config.reference)?e=s(this._config.reference):typeof this._config.reference==`object`&&(e=this._config.reference);let t=this._getPopperConfig();this._popper=Pn(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Kn)}_getPlacement(){let e=this._parent;if(e.classList.contains(`dropend`))return er;if(e.classList.contains(`dropstart`))return tr;if(e.classList.contains(`dropup-center`))return`top`;if(e.classList.contains(`dropdown-center`))return`bottom`;let t=getComputedStyle(this._menu).getPropertyValue(`--bs-position`).trim()===`end`;return e.classList.contains(`dropup`)?t?Zn:Xn:t?$n:Qn}_detectNavbar(){return this._element.closest(`.navbar`)!==null}_getOffset(){let{offset:e}=this._config;return typeof e==`string`?e.split(`,`).map(e=>Number.parseInt(e,10)):typeof e==`function`?t=>e(t,this._element):e}_getPopperConfig(){let e={placement:this._getPlacement(),modifiers:[{name:`preventOverflow`,options:{boundary:this._config.boundary}},{name:`offset`,options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display===`static`)&&(ce.setDataAttribute(this._menu,`popper`,`static`),e.modifiers=[{name:`applyStyles`,enabled:!1}]),{...e,..._(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){let n=M.find(`.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)`,this._menu).filter(e=>c(e));n.length&&y(n,t,e===Rn,!n.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){let t=ir.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===2||e.type===`keyup`&&e.key!==`Tab`)return;let t=M.find(Jn);for(let n of t){let t=ir.getInstance(n);if(!t||!1===t._config.autoClose)continue;let r=e.composedPath(),i=r.includes(t._menu);if(r.includes(t._element)||t._config.autoClose===`inside`&&!i||t._config.autoClose===`outside`&&i||t._menu.contains(e.target)&&(e.type===`keyup`&&e.key===`Tab`||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;let a={relatedTarget:t._element};e.type===`click`&&(a.clickEvent=e),t._completeHide(a)}}static dataApiKeydownHandler(e){let t=/input|textarea/i.test(e.target.tagName),n=e.key===`Escape`,r=[`ArrowUp`,Rn].includes(e.key);if(!r&&!n||t&&!n)return;e.preventDefault();let i=this.matches(qn)?this:M.prev(this,qn)[0]||M.next(this,qn)[0]||M.findOne(qn,e.delegateTarget.parentNode),a=ir.getOrCreateInstance(i);if(r)return e.stopPropagation(),a.show(),void a._selectMenuItem(e);a._isShown()&&(e.stopPropagation(),a.hide(),i.focus())}}O.on(document,Wn,qn,ir.dataApiKeydownHandler),O.on(document,Wn,Yn,ir.dataApiKeydownHandler),O.on(document,Un,ir.clearMenus),O.on(document,Gn,ir.clearMenus),O.on(document,Un,qn,function(e){e.preventDefault(),ir.getOrCreateInstance(this).toggle()}),g(ir);let ar=`backdrop`,or=`show`,sr=`mousedown.bs.${ar}`,cr={className:`modal-backdrop`,clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:`body`},lr={className:`string`,clickCallback:`(function|null)`,isAnimated:`boolean`,isVisible:`boolean`,rootElement:`(element|string)`};class ur extends le{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return cr}static get DefaultType(){return lr}static get NAME(){return ar}show(e){if(!this._config.isVisible)return void _(e);this._append();let t=this._getElement();this._config.isAnimated&&f(t),t.classList.add(or),this._emulateAnimation(()=>{_(e)})}hide(e){this._config.isVisible?(this._getElement().classList.remove(or),this._emulateAnimation(()=>{this.dispose(),_(e)})):_(e)}dispose(){this._isAppended&&=(O.off(this._element,sr),this._element.remove(),!1)}_getElement(){if(!this._element){let e=document.createElement(`div`);e.className=this._config.className,this._config.isAnimated&&e.classList.add(`fade`),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=s(e.rootElement),e}_append(){if(this._isAppended)return;let e=this._getElement();this._config.rootElement.append(e),O.on(e,sr,()=>{_(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){v(e,this._getElement(),this._config.isAnimated)}}let dr=`.bs.focustrap`,fr=`focusin${dr}`,pr=`keydown.tab${dr}`,mr=`backward`,hr={autofocus:!0,trapElement:null},gr={autofocus:`boolean`,trapElement:`element`};class _r extends le{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return hr}static get DefaultType(){return gr}static get NAME(){return`focustrap`}activate(){this._isActive||=(this._config.autofocus&&this._config.trapElement.focus(),O.off(document,dr),O.on(document,fr,e=>this._handleFocusin(e)),O.on(document,pr,e=>this._handleKeydown(e)),!0)}deactivate(){this._isActive&&(this._isActive=!1,O.off(document,dr))}_handleFocusin(e){let{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;let n=M.focusableChildren(t);n.length===0?t.focus():this._lastTabNavDirection===mr?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===`Tab`&&(this._lastTabNavDirection=e.shiftKey?mr:`forward`)}}let vr=`.fixed-top, .fixed-bottom, .is-fixed, .sticky-top`,yr=`.sticky-top`,br=`padding-right`,xr=`margin-right`;class Sr{constructor(){this._element=document.body}getWidth(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,br,t=>t+e),this._setElementAttributes(vr,br,t=>t+e),this._setElementAttributes(yr,xr,t=>t-e)}reset(){this._resetElementAttributes(this._element,`overflow`),this._resetElementAttributes(this._element,br),this._resetElementAttributes(vr,br),this._resetElementAttributes(yr,xr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,`overflow`),this._element.style.overflow=`hidden`}_setElementAttributes(e,t,n){let r=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);let i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(i))}px`)})}_saveInitialAttribute(e,t){let n=e.style.getPropertyValue(t);n&&ce.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,e=>{let n=ce.getDataAttribute(e,t);n===null?e.style.removeProperty(t):(ce.removeDataAttribute(e,t),e.style.setProperty(t,n))})}_applyManipulationCallback(e,t){if(o(e))t(e);else for(let n of M.find(e,this._element))t(n)}}let Cr=`.bs.modal`,wr=`hide${Cr}`,Tr=`hidePrevented${Cr}`,Er=`hidden${Cr}`,Dr=`show${Cr}`,Or=`shown${Cr}`,kr=`resize${Cr}`,Ar=`click.dismiss${Cr}`,jr=`mousedown.dismiss${Cr}`,Mr=`keydown.dismiss${Cr}`,Nr=`click${Cr}.data-api`,Pr=`modal-open`,Fr=`show`,Ir=`modal-static`,Lr={backdrop:!0,focus:!0,keyboard:!0},Rr={backdrop:`(boolean|string)`,focus:`boolean`,keyboard:`boolean`};class zr extends ue{constructor(e,t){super(e,t),this._dialog=M.findOne(`.modal-dialog`,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Sr,this._addEventListeners()}static get Default(){return Lr}static get DefaultType(){return Rr}static get NAME(){return`modal`}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||O.trigger(this._element,Dr,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Pr),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){this._isShown&&!this._isTransitioning&&(O.trigger(this._element,wr).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Fr),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){O.off(window,Cr),O.off(this._dialog,Cr),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ur({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new _r({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display=`block`,this._element.removeAttribute(`aria-hidden`),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.scrollTop=0;let t=M.findOne(`.modal-body`,this._dialog);t&&(t.scrollTop=0),f(this._element),this._element.classList.add(Fr),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,O.trigger(this._element,Or,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){O.on(this._element,Mr,e=>{e.key===`Escape`&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),O.on(window,kr,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),O.on(this._element,jr,e=>{O.one(this._element,Ar,t=>{this._element===e.target&&this._element===t.target&&(this._config.backdrop===`static`?this._triggerBackdropTransition():this._config.backdrop&&this.hide())})})}_hideModal(){this._element.style.display=`none`,this._element.setAttribute(`aria-hidden`,!0),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Pr),this._resetAdjustments(),this._scrollBar.reset(),O.trigger(this._element,Er)})}_isAnimated(){return this._element.classList.contains(`fade`)}_triggerBackdropTransition(){if(O.trigger(this._element,Tr).defaultPrevented)return;let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;t===`hidden`||this._element.classList.contains(Ir)||(e||(this._element.style.overflowY=`hidden`),this._element.classList.add(Ir),this._queueCallback(()=>{this._element.classList.remove(Ir),this._queueCallback(()=>{this._element.style.overflowY=t},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){let e=h()?`paddingLeft`:`paddingRight`;this._element.style[e]=`${t}px`}if(!n&&e){let e=h()?`paddingRight`:`paddingLeft`;this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft=``,this._element.style.paddingRight=``}static jQueryInterface(e,t){return this.each(function(){let n=zr.getOrCreateInstance(this,e);if(typeof e==`string`){if(n[e]===void 0)throw TypeError(`No method named "${e}"`);n[e](t)}})}}O.on(document,Nr,`[data-bs-toggle="modal"]`,function(e){let t=M.getElementFromSelector(this);[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),O.one(t,Dr,e=>{e.defaultPrevented||O.one(t,Er,()=>{c(this)&&this.focus()})});let n=M.findOne(`.modal.show`);n&&zr.getInstance(n).hide(),zr.getOrCreateInstance(t).toggle(this)}),de(zr),g(zr);let Br=`.bs.offcanvas`,Vr=`.data-api`,Hr=`load${Br}${Vr}`,Ur=`show`,Wr=`showing`,Gr=`hiding`,Kr=`.offcanvas.show`,qr=`show${Br}`,Jr=`shown${Br}`,Yr=`hide${Br}`,Xr=`hidePrevented${Br}`,Zr=`hidden${Br}`,Qr=`resize${Br}`,$r=`click${Br}${Vr}`,ei=`keydown.dismiss${Br}`,ti={backdrop:!0,keyboard:!0,scroll:!1},ni={backdrop:`(boolean|string)`,keyboard:`boolean`,scroll:`boolean`};class ri extends ue{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return ti}static get DefaultType(){return ni}static get NAME(){return`offcanvas`}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||O.trigger(this._element,qr,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Sr().hide(),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.classList.add(Wr),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ur),this._element.classList.remove(Wr),O.trigger(this._element,Jr,{relatedTarget:e})},this._element,!0))}hide(){this._isShown&&(O.trigger(this._element,Yr).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Gr),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Ur,Gr),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._config.scroll||new Sr().reset(),O.trigger(this._element,Zr)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){let e=!!this._config.backdrop;return new ur({className:`offcanvas-backdrop`,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{this._config.backdrop===`static`?O.trigger(this._element,Xr):this.hide()}:null})}_initializeFocusTrap(){return new _r({trapElement:this._element})}_addEventListeners(){O.on(this._element,ei,e=>{e.key===`Escape`&&(this._config.keyboard?this.hide():O.trigger(this._element,Xr))})}static jQueryInterface(e){return this.each(function(){let t=ri.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e](this)}})}}O.on(document,$r,`[data-bs-toggle="offcanvas"]`,function(e){let t=M.getElementFromSelector(this);if([`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),l(this))return;O.one(t,Zr,()=>{c(this)&&this.focus()});let n=M.findOne(Kr);n&&n!==t&&ri.getInstance(n).hide(),ri.getOrCreateInstance(t).toggle(this)}),O.on(window,Hr,()=>{for(let e of M.find(Kr))ri.getOrCreateInstance(e).show()}),O.on(window,Qr,()=>{for(let e of M.find(`[aria-modal][class*=show][class*=offcanvas-]`))getComputedStyle(e).position!==`fixed`&&ri.getOrCreateInstance(e).hide()}),de(ri),g(ri);let ii={"*":[`class`,`dir`,`id`,`lang`,`role`,/^aria-[\w-]*$/i],a:[`target`,`href`,`title`,`rel`],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:[`src`,`srcset`,`alt`,`title`,`width`,`height`],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},ai=new Set([`background`,`cite`,`href`,`itemtype`,`longdesc`,`poster`,`src`,`xlink:href`]),oi=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,si=(e,t)=>{let n=e.nodeName.toLowerCase();return t.includes(n)?!ai.has(n)||!!oi.test(e.nodeValue):t.filter(e=>e instanceof RegExp).some(e=>e.test(n))},ci={allowList:ii,content:{},extraClass:``,html:!1,sanitize:!0,sanitizeFn:null,template:`<div></div>`},li={allowList:`object`,content:`object`,extraClass:`(string|function)`,html:`boolean`,sanitize:`boolean`,sanitizeFn:`(null|function)`,template:`string`},ui={entry:`(string|element|function|null)`,selector:`(string|element)`};class di extends le{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return ci}static get DefaultType(){return li}static get NAME(){return`TemplateFactory`}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){let e=document.createElement(`div`);e.innerHTML=this._maybeSanitize(this._config.template);for(let[t,n]of Object.entries(this._config.content))this._setContent(e,n,t);let t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(` `)),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(let[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},ui)}_setContent(e,t,n){let r=M.findOne(n,e);r&&((t=this._resolvePossibleFunction(t))?o(t)?this._putElementInTemplate(s(t),r):this._config.html?r.innerHTML=this._maybeSanitize(t):r.textContent=t:r.remove())}_maybeSanitize(e){return this._config.sanitize?function(e,t,n){if(!e.length)return e;if(n&&typeof n==`function`)return n(e);let r=new window.DOMParser().parseFromString(e,`text/html`),i=[].concat(...r.body.querySelectorAll(`*`));for(let e of i){let n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}let r=[].concat(...e.attributes),i=[].concat(t[`*`]||[],t[n]||[]);for(let t of r)si(t,i)||e.removeAttribute(t.nodeName)}return r.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return _(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML=``,void t.append(e);t.textContent=e.textContent}}let fi=new Set([`sanitize`,`allowList`,`sanitizeFn`]),pi=`fade`,mi=`show`,hi=`.modal`,gi=`hide.bs.modal`,_i=`hover`,vi=`focus`,yi=`click`,bi={AUTO:`auto`,TOP:`top`,RIGHT:h()?`left`:`right`,BOTTOM:`bottom`,LEFT:h()?`right`:`left`},xi={allowList:ii,animation:!0,boundary:`clippingParents`,container:!1,customClass:``,delay:0,fallbackPlacements:[`top`,`right`,`bottom`,`left`],html:!1,offset:[0,6],placement:`top`,popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:`<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`,title:``,trigger:`hover focus`},Si={allowList:`object`,animation:`boolean`,boundary:`(string|element)`,container:`(string|element|boolean)`,customClass:`(string|function)`,delay:`(number|object)`,fallbackPlacements:`array`,html:`boolean`,offset:`(array|string|function)`,placement:`(string|function)`,popperConfig:`(null|object|function)`,sanitize:`boolean`,sanitizeFn:`(null|function)`,selector:`(string|boolean)`,template:`string`,title:`(string|element|function)`,trigger:`string`};class Ci extends ue{constructor(e,t){if(Fn===void 0)throw TypeError(`Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)`);super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return xi}static get DefaultType(){return Si}static get NAME(){return`tooltip`}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),O.off(this._element.closest(hi),gi,this._hideModalHandler),this._element.getAttribute(`data-bs-original-title`)&&this._element.setAttribute(`title`,this._element.getAttribute(`data-bs-original-title`)),this._disposePopper(),super.dispose()}show(){if(this._element.style.display===`none`)throw Error(`Please use show on visible elements`);if(!this._isWithContent()||!this._isEnabled)return;let e=O.trigger(this._element,this.constructor.eventName(`show`)),t=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!t)return;this._disposePopper();let n=this._getTipElement();this._element.setAttribute(`aria-describedby`,n.getAttribute(`id`));let{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(n),O.trigger(this._element,this.constructor.eventName(`inserted`))),this._popper=this._createPopper(n),n.classList.add(mi),`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))O.on(e,`mouseover`,d);this._queueCallback(()=>{O.trigger(this._element,this.constructor.eventName(`shown`)),!1===this._isHovered&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!O.trigger(this._element,this.constructor.eventName(`hide`)).defaultPrevented){if(this._getTipElement().classList.remove(mi),`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))O.off(e,`mouseover`,d);this._activeTrigger[yi]=!1,this._activeTrigger[vi]=!1,this._activeTrigger[_i]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute(`aria-describedby`),O.trigger(this._element,this.constructor.eventName(`hidden`)))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||=this._createTipElement(this._newContent||this._getContentForTemplate()),this.tip}_createTipElement(e){let t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(pi,mi),t.classList.add(`bs-${this.constructor.NAME}-auto`);let n=(e=>{do e+=Math.floor(1e6*Math.random());while(document.getElementById(e));return e})(this.constructor.NAME).toString();return t.setAttribute(`id`,n),this._isAnimated()&&t.classList.add(pi),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new di({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute(`data-bs-original-title`)}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(pi)}_isShown(){return this.tip&&this.tip.classList.contains(mi)}_createPopper(e){let t=_(this._config.placement,[this,e,this._element]),n=bi[t.toUpperCase()];return Pn(this._element,e,this._getPopperConfig(n))}_getOffset(){let{offset:e}=this._config;return typeof e==`string`?e.split(`,`).map(e=>Number.parseInt(e,10)):typeof e==`function`?t=>e(t,this._element):e}_resolvePossibleFunction(e){return _(e,[this._element,this._element])}_getPopperConfig(e){let t={placement:e,modifiers:[{name:`flip`,options:{fallbackPlacements:this._config.fallbackPlacements}},{name:`offset`,options:{offset:this._getOffset()}},{name:`preventOverflow`,options:{boundary:this._config.boundary}},{name:`arrow`,options:{element:`.${this.constructor.NAME}-arrow`}},{name:`preSetPlacement`,enabled:!0,phase:`beforeMain`,fn:e=>{this._getTipElement().setAttribute(`data-popper-placement`,e.state.placement)}}]};return{...t,..._(this._config.popperConfig,[void 0,t])}}_setListeners(){let e=this._config.trigger.split(` `);for(let t of e)if(t===`click`)O.on(this._element,this.constructor.eventName(`click`),this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[yi]=!(t._isShown()&&t._activeTrigger[yi]),t.toggle()});else if(t!==`manual`){let e=t===_i?this.constructor.eventName(`mouseenter`):this.constructor.eventName(`focusin`),n=t===_i?this.constructor.eventName(`mouseleave`):this.constructor.eventName(`focusout`);O.on(this._element,e,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type===`focusin`?vi:_i]=!0,t._enter()}),O.on(this._element,n,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type===`focusout`?vi:_i]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},O.on(this._element.closest(hi),gi,this._hideModalHandler)}_fixTitle(){let e=this._element.getAttribute(`title`);e&&(this._element.getAttribute(`aria-label`)||this._element.textContent.trim()||this._element.setAttribute(`aria-label`,e),this._element.setAttribute(`data-bs-original-title`,e),this._element.removeAttribute(`title`))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){let t=ce.getDataAttributes(this._element);for(let e of Object.keys(t))fi.has(e)&&delete t[e];return e={...t,...typeof e==`object`&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:s(e.container),typeof e.delay==`number`&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title==`number`&&(e.title=e.title.toString()),typeof e.content==`number`&&(e.content=e.content.toString()),e}_getDelegateConfig(){let e={};for(let[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger=`manual`,e}_disposePopper(){this._popper&&=(this._popper.destroy(),null),this.tip&&=(this.tip.remove(),null)}static jQueryInterface(e){return this.each(function(){let t=Ci.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}}g(Ci);let wi={...Ci.Default,content:``,offset:[0,8],placement:`right`,template:`<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>`,trigger:`click`},Ti={...Ci.DefaultType,content:`(null|string|element|function)`};class Ei extends Ci{static get Default(){return wi}static get DefaultType(){return Ti}static get NAME(){return`popover`}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){let t=Ei.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}}g(Ei);let Di=`.bs.scrollspy`,Oi=`activate${Di}`,ki=`click${Di}`,Ai=`load${Di}.data-api`,ji=`active`,Mi=`[href]`,Ni=`.nav-link`,Pi=`${Ni}, .nav-item > ${Ni}, .list-group-item`,Fi={offset:null,rootMargin:`0px 0px -25%`,smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ii={offset:`(number|null)`,rootMargin:`string`,smoothScroll:`boolean`,target:`element`,threshold:`array`};class Li extends ue{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY===`visible`?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Fi}static get DefaultType(){return Ii}static get NAME(){return`scrollspy`}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(let e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=s(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold==`string`&&(e.threshold=e.threshold.split(`,`).map(e=>Number.parseFloat(e))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(O.off(this._config.target,ki),O.on(this._config.target,ki,Mi,e=>{let t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();let n=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:r,behavior:`smooth`});n.scrollTop=r}}))}_getNewObserver(){let e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}_observerCallback(e){let t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(let a of e){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(a));continue}let e=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&e){if(n(a),!r)return}else i||e||n(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let e=M.find(Mi,this._config.target);for(let t of e){if(!t.hash||l(t))continue;let e=M.findOne(decodeURI(t.hash),this._element);c(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(ji),this._activateParents(e),O.trigger(this._element,Oi,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(`dropdown-item`))M.findOne(`.dropdown-toggle`,e.closest(`.dropdown`)).classList.add(ji);else for(let t of M.parents(e,`.nav, .list-group`))for(let e of M.prev(t,Pi))e.classList.add(ji)}_clearActiveClass(e){e.classList.remove(ji);let t=M.find(`${Mi}.${ji}`,e);for(let e of t)e.classList.remove(ji)}static jQueryInterface(e){return this.each(function(){let t=Li.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}})}}O.on(window,Ai,()=>{for(let e of M.find(`[data-bs-spy="scroll"]`))Li.getOrCreateInstance(e)}),g(Li);let Ri=`.bs.tab`,zi=`hide${Ri}`,Bi=`hidden${Ri}`,Vi=`show${Ri}`,Hi=`shown${Ri}`,Ui=`click${Ri}`,B=`keydown${Ri}`,V=`load${Ri}`,Wi=`ArrowRight`,Gi=`ArrowDown`,Ki=`Home`,qi=`active`,Ji=`fade`,Yi=`show`,Xi=`.dropdown-toggle`,Zi=`:not(${Xi})`,Qi=`[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]`,$i=`.nav-link${Zi}, .list-group-item${Zi}, [role="tab"]${Zi}, ${Qi}`,ea=`.${qi}[data-bs-toggle="tab"], .${qi}[data-bs-toggle="pill"], .${qi}[data-bs-toggle="list"]`;class ta extends ue{constructor(e){super(e),this._parent=this._element.closest(`.list-group, .nav, [role="tablist"]`),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),O.on(this._element,B,e=>this._keydown(e)))}static get NAME(){return`tab`}show(){let e=this._element;if(this._elemIsActive(e))return;let t=this._getActiveElem(),n=t?O.trigger(t,zi,{relatedTarget:e}):null;O.trigger(e,Vi,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){e&&(e.classList.add(qi),this._activate(M.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute(`role`)===`tab`?(e.removeAttribute(`tabindex`),e.setAttribute(`aria-selected`,!0),this._toggleDropDown(e,!0),O.trigger(e,Hi,{relatedTarget:t})):e.classList.add(Yi)},e,e.classList.contains(Ji)))}_deactivate(e,t){e&&(e.classList.remove(qi),e.blur(),this._deactivate(M.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute(`role`)===`tab`?(e.setAttribute(`aria-selected`,!1),e.setAttribute(`tabindex`,`-1`),this._toggleDropDown(e,!1),O.trigger(e,Bi,{relatedTarget:t})):e.classList.remove(Yi)},e,e.classList.contains(Ji)))}_keydown(e){if(![`ArrowLeft`,Wi,`ArrowUp`,Gi,Ki,`End`].includes(e.key))return;e.stopPropagation(),e.preventDefault();let t=this._getChildren().filter(e=>!l(e)),n;if([Ki,`End`].includes(e.key))n=t[e.key===Ki?0:t.length-1];else{let r=[Wi,Gi].includes(e.key);n=y(t,e.target,r,!0)}n&&(n.focus({preventScroll:!0}),ta.getOrCreateInstance(n).show())}_getChildren(){return M.find($i,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,`role`,`tablist`);for(let e of t)this._setInitialAttributesOnChild(e)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);let t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute(`aria-selected`,t),n!==e&&this._setAttributeIfNotExists(n,`role`,`presentation`),t||e.setAttribute(`tabindex`,`-1`),this._setAttributeIfNotExists(e,`role`,`tab`),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){let t=M.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,`role`,`tabpanel`),e.id&&this._setAttributeIfNotExists(t,`aria-labelledby`,`${e.id}`))}_toggleDropDown(e,t){let n=this._getOuterElement(e);if(!n.classList.contains(`dropdown`))return;let r=(e,r)=>{let i=M.findOne(e,n);i&&i.classList.toggle(r,t)};r(Xi,qi),r(`.dropdown-menu`,Yi),n.setAttribute(`aria-expanded`,t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(qi)}_getInnerElement(e){return e.matches($i)?e:M.findOne($i,e)}_getOuterElement(e){return e.closest(`.nav-item, .list-group-item`)||e}static jQueryInterface(e){return this.each(function(){let t=ta.getOrCreateInstance(this);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}})}}O.on(document,Ui,Qi,function(e){[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),l(this)||ta.getOrCreateInstance(this).show()}),O.on(window,V,()=>{for(let e of M.find(ea))ta.getOrCreateInstance(e)}),g(ta);let na=`.bs.toast`,ra=`mouseover${na}`,ia=`mouseout${na}`,aa=`focusin${na}`,oa=`focusout${na}`,sa=`hide${na}`,ca=`hidden${na}`,la=`show${na}`,ua=`shown${na}`,da=`hide`,fa=`show`,pa=`showing`,ma={animation:`boolean`,autohide:`boolean`,delay:`number`},ha={animation:!0,autohide:!0,delay:5e3};class H extends ue{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ha}static get DefaultType(){return ma}static get NAME(){return`toast`}show(){O.trigger(this._element,la).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add(`fade`),this._element.classList.remove(da),f(this._element),this._element.classList.add(fa,pa),this._queueCallback(()=>{this._element.classList.remove(pa),O.trigger(this._element,ua),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(O.trigger(this._element,sa).defaultPrevented||(this._element.classList.add(pa),this._queueCallback(()=>{this._element.classList.add(da),this._element.classList.remove(pa,fa),O.trigger(this._element,ca)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(fa),super.dispose()}isShown(){return this._element.classList.contains(fa)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case`mouseover`:case`mouseout`:this._hasMouseInteraction=t;break;case`focusin`:case`focusout`:this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();let n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){O.on(this._element,ra,e=>this._onInteraction(e,!0)),O.on(this._element,ia,e=>this._onInteraction(e,!1)),O.on(this._element,aa,e=>this._onInteraction(e,!0)),O.on(this._element,oa,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){let t=H.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e](this)}})}}return de(H),g(H),{Alert:he,Button:_e,Carousel:Je,Collapse:ct,Dropdown:ir,Modal:zr,Offcanvas:ri,Popover:Ei,ScrollSpy:Li,Tab:ta,Toast:H,Tooltip:Ci}})}))();function er(){return(0,I.jsxs)(P,{children:[(0,I.jsx)(lt,{path:`/`,element:(0,I.jsxs)(`div`,{id:`home-content-wrapper`,children:[(0,I.jsx)(Ft,{}),(0,I.jsx)(Rt,{id:`about`}),(0,I.jsx)(Bt,{}),(0,I.jsx)(cn,{}),(0,I.jsx)($n,{}),(0,I.jsx)(fn,{id:`style`}),(0,I.jsx)(xn,{}),(0,I.jsx)(En,{}),(0,I.jsx)(On,{id:`collection`}),(0,I.jsx)(An,{}),(0,I.jsx)(Un,{}),(0,I.jsx)(Vn,{})]})}),(0,I.jsx)(lt,{path:`/get-quote`,element:(0,I.jsx)(Xn,{})})]})}var tr=er;g.createRoot(document.getElementById(`root`)).render((0,I.jsx)(vt,{children:(0,I.jsx)(tr,{})}));