var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function te(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!ee.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function ne(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var w=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+ae(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(w,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(w,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+ae(s,l);c+=oe(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+ae(s,l++),c+=oe(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T={current:null},le={transition:null},ue={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:le,ReactCurrentOwner:C};function de(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,e.act=de,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!ee.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=te,e.createFactory=function(e){var t=te.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=le.transition;le.transition={};try{e()}finally{le.transition=t}},e.unstable_act=de,e.useCallback=function(e,t){return T.current.useCallback(e,t)},e.useContext=function(e){return T.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return T.current.useDeferredValue(e)},e.useEffect=function(e,t){return T.current.useEffect(e,t)},e.useId=function(){return T.current.useId()},e.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.current.useMemo(e,t)},e.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},e.useRef=function(e){return T.current.useRef(e)},e.useState=function(e){return T.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,se(x);else{var t=n(l);t!==null&&ce(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(ee),ee=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&ce(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,ee=-1,te=5,ne=-1;function re(){return!(e.unstable_now()-ne<te)}function ie(){if(C!==null){var t=e.unstable_now();ne=t;var n=!0;try{n=C(!0,t)}finally{n?w():(S=!1,C=null)}}else S=!1}var w;if(typeof v==`function`)w=function(){v(ie)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=ie,w=function(){oe.postMessage(null)}}else w=function(){g(ie,0)};function se(e){C=e,S||(S=!0,w())}function ce(t,n){ee=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,se(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):te=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(ee),ee=-1):h=!0,ce(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,se(x))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for(`react.element`),te=Symbol.for(`react.portal`),ne=Symbol.for(`react.fragment`),re=Symbol.for(`react.strict_mode`),ie=Symbol.for(`react.profiler`),w=Symbol.for(`react.provider`),ae=Symbol.for(`react.context`),oe=Symbol.for(`react.forward_ref`),se=Symbol.for(`react.suspense`),ce=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),le=Symbol.for(`react.lazy`),ue=Symbol.for(`react.offscreen`),de=Symbol.iterator;function fe(e){return typeof e!=`object`||!e?null:(e=de&&e[de]||e[`@@iterator`],typeof e==`function`?e:null)}var E=Object.assign,pe;function me(e){if(pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||``}return`
`+pe+e}var he=!1;function ge(e,t){if(!e||he)return``;he=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{he=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?me(e):``}function _e(e){switch(e.tag){case 5:return me(e.type);case 16:return me(`Lazy`);case 13:return me(`Suspense`);case 19:return me(`SuspenseList`);case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return``}}function ve(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ne:return`Fragment`;case te:return`Portal`;case ie:return`Profiler`;case re:return`StrictMode`;case se:return`Suspense`;case ce:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ae:return(e.displayName||`Context`)+`.Consumer`;case w:return(e._context.displayName||`Context`)+`.Provider`;case oe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?ve(e.type)||`Memo`:t;case le:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ve(t);case 8:return t===re?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function be(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Se(e){var t=xe(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ce(e){e._valueTracker||=Se(e)}function we(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=xe(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function D(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Te(e,t){var n=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ee(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=be(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function De(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function Oe(e,t){De(e,t);var n=be(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Ae(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Ae(e,t.type,be(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ke(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Ae(e,t,n){(t!==`number`||D(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var je=Array.isArray;function Me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+be(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ne(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return E({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Pe(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(je(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:be(n)}}function Fe(e,t){var n=be(t.value),r=be(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Le(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Re(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Le(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var ze,Be=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(ze||=document.createElement(`div`),ze.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=ze.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ve(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(He).forEach(function(e){Ue.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),He[t]=He[e]})});function We(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||He.hasOwnProperty(e)&&He[e]?(``+t).trim():t+`px`}function Ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=We(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var O=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function k(e,t){if(t){if(O[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ke(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var qe=null;function Je(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ye=null,Xe=null,Ze=null;function Qe(e){if(e=qi(e)){if(typeof Ye!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Yi(t),Ye(e.stateNode,e.type,t))}}function $e(e){Xe?Ze?Ze.push(e):Ze=[e]:Xe=e}function et(){if(Xe){var e=Xe,t=Ze;if(Ze=Xe=null,Qe(e),t)for(e=0;e<t.length;e++)Qe(t[e])}}function tt(e,t){return e(t)}function nt(){}var rt=!1;function it(e,t,n){if(rt)return e(t,n);rt=!0;try{return tt(e,t,n)}finally{rt=!1,(Xe!==null||Ze!==null)&&(nt(),et())}}function at(e,t){var n=e.stateNode;if(n===null)return null;var i=Yi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var ot=!1;if(c)try{var st={};Object.defineProperty(st,`passive`,{get:function(){ot=!0}}),window.addEventListener(`test`,st,st),window.removeEventListener(`test`,st,st)}catch{ot=!1}function ct(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var lt=!1,ut=null,dt=!1,ft=null,pt={onError:function(e){lt=!0,ut=e}};function mt(e,t,n,r,i,a,o,s,c){lt=!1,ut=null,ct.apply(pt,arguments)}function ht(e,t,n,i,a,o,s,c,l){if(mt.apply(this,arguments),lt){if(lt){var u=ut;lt=!1,ut=null}else throw Error(r(198));dt||(dt=!0,ft=u)}}function gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _t(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vt(e){if(gt(e)!==e)throw Error(r(188))}function yt(e){var t=e.alternate;if(!t){if(t=gt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return vt(a),e;if(o===i)return vt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function bt(e){return e=yt(e),e===null?null:xt(e)}function xt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xt(e);if(t!==null)return t;e=e.sibling}return null}var St=n.unstable_scheduleCallback,Ct=n.unstable_cancelCallback,wt=n.unstable_shouldYield,Tt=n.unstable_requestPaint,A=n.unstable_now,Et=n.unstable_getCurrentPriorityLevel,Dt=n.unstable_ImmediatePriority,Ot=n.unstable_UserBlockingPriority,kt=n.unstable_NormalPriority,At=n.unstable_LowPriority,jt=n.unstable_IdlePriority,Mt=null,Nt=null;function Pt(e){if(Nt&&typeof Nt.onCommitFiberRoot==`function`)try{Nt.onCommitFiberRoot(Mt,e,void 0,(e.current.flags&128)==128)}catch{}}var Ft=Math.clz32?Math.clz32:Rt,It=Math.log,Lt=Math.LN2;function Rt(e){return e>>>=0,e===0?32:31-(It(e)/Lt|0)|0}var zt=64,Bt=4194304;function Vt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ht(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Vt(a))):r=Vt(s)}else o=n&~i,o===0?a!==0&&(r=Vt(a)):r=Vt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),i=1<<n,r|=e[n],t&=~i;return r}function Ut(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ft(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ut(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Gt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Kt(){var e=zt;return zt<<=1,!(zt&4194240)&&(zt=64),e}function qt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function Yt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ft(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Xt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function Zt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qt,$t,en,tn,nn,rn=!1,an=[],on=null,sn=null,cn=null,ln=new Map,un=new Map,dn=[],fn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function pn(e,t){switch(e){case`focusin`:case`focusout`:on=null;break;case`dragenter`:case`dragleave`:sn=null;break;case`mouseover`:case`mouseout`:cn=null;break;case`pointerover`:case`pointerout`:ln.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:un.delete(t.pointerId)}}function mn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=qi(t),t!==null&&$t(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hn(e,t,n,r,i){switch(t){case`focusin`:return on=mn(on,e,t,n,r,i),!0;case`dragenter`:return sn=mn(sn,e,t,n,r,i),!0;case`mouseover`:return cn=mn(cn,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return ln.set(a,mn(ln.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,un.set(a,mn(un.get(a)||null,e,t,n,r,i)),!0}return!1}function gn(e){var t=Ki(e.target);if(t!==null){var n=gt(t);if(n!==null){if(t=n.tag,t===13){if(t=_t(n),t!==null){e.blockedOn=t,nn(e.priority,function(){en(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _n(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=On(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qe=r,n.target.dispatchEvent(r),qe=null}else return t=qi(n),t!==null&&$t(t),e.blockedOn=n,!1;t.shift()}return!0}function vn(e,t,n){_n(e)&&n.delete(t)}function yn(){rn=!1,on!==null&&_n(on)&&(on=null),sn!==null&&_n(sn)&&(sn=null),cn!==null&&_n(cn)&&(cn=null),ln.forEach(vn),un.forEach(vn)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,rn||(rn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,yn)))}function xn(e){function t(t){return bn(t,e)}if(0<an.length){bn(an[0],e);for(var n=1;n<an.length;n++){var r=an[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&bn(on,e),sn!==null&&bn(sn,e),cn!==null&&bn(cn,e),ln.forEach(t),un.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)gn(n),n.blockedOn===null&&dn.shift()}var Sn=C.ReactCurrentBatchConfig,Cn=!0;function wn(e,t,n,r){var i=j,a=Sn.transition;Sn.transition=null;try{j=1,En(e,t,n,r)}finally{j=i,Sn.transition=a}}function Tn(e,t,n,r){var i=j,a=Sn.transition;Sn.transition=null;try{j=4,En(e,t,n,r)}finally{j=i,Sn.transition=a}}function En(e,t,n,r){if(Cn){var i=On(e,t,n,r);if(i===null)vi(e,t,r,Dn,n),pn(e,r);else if(hn(i,e,t,n,r))r.stopPropagation();else if(pn(e,r),t&4&&-1<fn.indexOf(e)){for(;i!==null;){var a=qi(i);if(a!==null&&Qt(a),a=On(e,t,n,r),a===null&&vi(e,t,r,Dn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else vi(e,t,r,null,n)}}var Dn=null;function On(e,t,n,r){if(Dn=null,e=Je(r),e=Ki(e),e!==null)if(t=gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_t(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dn=e,null}function kn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(Et()){case Dt:return 1;case Ot:return 4;case kt:case At:return 16;case jt:return 536870912;default:return 16}default:return 16}}var An=null,jn=null,Mn=null;function Nn(){if(Mn)return Mn;var e,t=jn,n=t.length,r,i=`value`in An?An.value:An.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Mn=i.slice(e,1<r?1-r:void 0)}function Pn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fn(){return!0}function In(){return!1}function Ln(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Fn:In,this.isPropagationStopped=In,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Fn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Fn)},persist:function(){},isPersistent:Fn}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zn=Ln(Rn),Bn=E({},Rn,{view:0,detail:0}),Vn=Ln(Bn),Hn,Un,Wn,Gn=E({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Wn&&(Wn&&e.type===`mousemove`?(Hn=e.screenX-Wn.screenX,Un=e.screenY-Wn.screenY):Un=Hn=0,Wn=e),Hn)},movementY:function(e){return`movementY`in e?e.movementY:Un}}),Kn=Ln(Gn),qn=Ln(E({},Gn,{dataTransfer:0})),Jn=Ln(E({},Bn,{relatedTarget:0})),Yn=Ln(E({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0})),Xn=Ln(E({},Rn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Zn=Ln(E({},Rn,{data:0})),Qn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},$n={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},er={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function tr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=er[e])?!!t[e]:!1}function nr(){return tr}var M=Ln(E({},Bn,{key:function(e){if(e.key){var t=Qn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Pn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?$n[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(e){return e.type===`keypress`?Pn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Pn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),rr=Ln(E({},Gn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),ir=Ln(E({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr})),ar=Ln(E({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0})),or=Ln(E({},Gn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),sr=[9,13,27,32],cr=c&&`CompositionEvent`in window,lr=null;c&&`documentMode`in document&&(lr=document.documentMode);var ur=c&&`TextEvent`in window&&!lr,dr=c&&(!cr||lr&&8<lr&&11>=lr),fr=` `,pr=!1;function mr(e,t){switch(e){case`keyup`:return sr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function hr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var gr=!1;function _r(e,t){switch(e){case`compositionend`:return hr(t);case`keypress`:return t.which===32?(pr=!0,fr):null;case`textInput`:return e=t.data,e===fr&&pr?null:e;default:return null}}function vr(e,t){if(gr)return e===`compositionend`||!cr&&mr(e,t)?(e=Nn(),Mn=jn=An=null,gr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return dr&&t.locale!==`ko`?null:t.data;default:return null}}var yr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!yr[e.type]:t===`textarea`}function N(e,t,n,r){$e(r),t=bi(t,`onChange`),0<t.length&&(n=new zn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var xr=null,Sr=null;function Cr(e){pi(e,0)}function wr(e){if(we(Ji(e)))return e}function Tr(e,t){if(e===`change`)return t}var Er=!1;if(c){var Dr;if(c){var Or=`oninput`in document;if(!Or){var kr=document.createElement(`div`);kr.setAttribute(`oninput`,`return;`),Or=typeof kr.oninput==`function`}Dr=Or}else Dr=!1;Er=Dr&&(!document.documentMode||9<document.documentMode)}function Ar(){xr&&(xr.detachEvent(`onpropertychange`,jr),Sr=xr=null)}function jr(e){if(e.propertyName===`value`&&wr(Sr)){var t=[];N(t,Sr,e,Je(e)),it(Cr,t)}}function Mr(e,t,n){e===`focusin`?(Ar(),xr=t,Sr=n,xr.attachEvent(`onpropertychange`,jr)):e===`focusout`&&Ar()}function Nr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return wr(Sr)}function Pr(e,t){if(e===`click`)return wr(t)}function P(e,t){if(e===`input`||e===`change`)return wr(t)}function Fr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ir=typeof Object.is==`function`?Object.is:Fr;function Lr(e,t){if(Ir(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Ir(e[i],t[i]))return!1}return!0}function Rr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zr(e,t){var n=Rr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Rr(n)}}function Br(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Br(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vr(){for(var e=window,t=D();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=D(e.document)}return t}function Hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Ur(e){var t=Vr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Br(n.ownerDocument.documentElement,n)){if(r!==null&&Hr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=zr(n,a);var o=zr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wr=c&&`documentMode`in document&&11>=document.documentMode,Gr=null,Kr=null,qr=null,Jr=!1;function Yr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jr||Gr==null||Gr!==D(r)||(r=Gr,`selectionStart`in r&&Hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&Lr(qr,r)||(qr=r,r=bi(Kr,`onSelect`),0<r.length&&(t=new zn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Gr)))}function Xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Zr={animationend:Xr(`Animation`,`AnimationEnd`),animationiteration:Xr(`Animation`,`AnimationIteration`),animationstart:Xr(`Animation`,`AnimationStart`),transitionend:Xr(`Transition`,`TransitionEnd`)},Qr={},$r={};c&&($r=document.createElement(`div`).style,`AnimationEvent`in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),`TransitionEvent`in window||delete Zr.transitionend.transition);function ei(e){if(Qr[e])return Qr[e];if(!Zr[e])return e;var t=Zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $r)return Qr[e]=t[n];return e}var ti=ei(`animationend`),ni=ei(`animationiteration`),ri=ei(`animationstart`),ii=ei(`transitionend`),ai=new Map,oi=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function si(e,t){ai.set(e,t),o(t,[e])}for(var ci=0;ci<oi.length;ci++){var li=oi[ci];si(li.toLowerCase(),`on`+(li[0].toUpperCase()+li.slice(1)))}si(ti,`onAnimationEnd`),si(ni,`onAnimationIteration`),si(ri,`onAnimationStart`),si(`dblclick`,`onDoubleClick`),si(`focusin`,`onFocus`),si(`focusout`,`onBlur`),si(ii,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ui=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),di=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ui));function fi(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,ht(r,t,void 0,e),e.currentTarget=null}function pi(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;fi(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;fi(i,s,l),a=c}}}if(dt)throw e=ft,dt=!1,ft=null,e}function F(e,t){var n=t[Ui];n===void 0&&(n=t[Ui]=new Set);var r=e+`__bubble`;n.has(r)||(_i(t,e,2,!1),n.add(r))}function mi(e,t,n){var r=0;t&&(r|=4),_i(n,e,r,t)}var hi=`_reactListening`+Math.random().toString(36).slice(2);function gi(e){if(!e[hi]){e[hi]=!0,i.forEach(function(t){t!==`selectionchange`&&(di.has(t)||mi(t,!1,e),mi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,mi(`selectionchange`,!1,t))}}function _i(e,t,n,r){switch(kn(t)){case 1:var i=wn;break;case 4:i=Tn;break;default:i=En}n=i.bind(null,t,n,e),i=void 0,!ot||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function vi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Ki(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}it(function(){var r=a,i=Je(n),o=[];a:{var s=ai.get(e);if(s!==void 0){var c=zn,l=e;switch(e){case`keypress`:if(Pn(n)===0)break a;case`keydown`:case`keyup`:c=M;break;case`focusin`:l=`focus`,c=Jn;break;case`focusout`:l=`blur`,c=Jn;break;case`beforeblur`:case`afterblur`:c=Jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=qn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=ir;break;case ti:case ni:case ri:c=Yn;break;case ii:c=ar;break;case`scroll`:c=Vn;break;case`wheel`:c=or;break;case`copy`:case`cut`:case`paste`:c=Xn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=rr}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=at(p,f),h!=null&&u.push(yi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==qe&&(l=n.relatedTarget||n.fromElement)&&(Ki(l)||l[Hi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ki(l):null,l!==null&&(d=gt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Kn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=rr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Ji(c),m=l==null?s:Ji(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Ki(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=xi(m))p++;for(m=0,h=f;h;h=xi(h))m++;for(;0<p-m;)u=xi(u),p--;for(;0<m-p;)f=xi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=xi(u),f=xi(f)}u=null}else u=null;c!==null&&Si(o,s,c,u,!1),l!==null&&d!==null&&Si(o,d,l,u,!0)}}a:{if(s=r?Ji(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Tr;else if(br(s))if(Er)g=P;else{g=Nr;var _=Mr}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Pr);if(g&&=g(e,r)){N(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Ae(s,`number`,s.value)}switch(_=r?Ji(r):window,e){case`focusin`:(br(_)||_.contentEditable===`true`)&&(Gr=_,Kr=r,qr=null);break;case`focusout`:qr=Kr=Gr=null;break;case`mousedown`:Jr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Jr=!1,Yr(o,n,i);break;case`selectionchange`:if(Wr)break;case`keydown`:case`keyup`:Yr(o,n,i)}var v;if(cr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else gr?mr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(dr&&n.locale!==`ko`&&(gr||y!==`onCompositionStart`?y===`onCompositionEnd`&&gr&&(v=Nn()):(An=i,jn=`value`in An?An.value:An.textContent,gr=!0)),_=bi(r,y),0<_.length&&(y=new Zn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=hr(n),v!==null&&(y.data=v)))),(v=ur?_r(e,n):vr(e,n))&&(r=bi(r,`onBeforeInput`),0<r.length&&(i=new Zn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}pi(o,t)})}function yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=at(e,n),a!=null&&r.unshift(yi(e,a,i)),a=at(e,t),a!=null&&r.push(yi(e,a,i))),e=e.return}return r}function xi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Si(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=at(n,a),c!=null&&o.unshift(yi(n,c,s))):i||(c=at(n,a),c!=null&&o.push(yi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ci=/\r\n?/g,wi=/\u0000|\uFFFD/g;function Ti(e){return(typeof e==`string`?e:``+e).replace(Ci,`
`).replace(wi,``)}function Ei(e,t,n){if(t=Ti(t),Ti(e)!==t&&n)throw Error(r(425))}function Di(){}var Oi=null,ki=null;function Ai(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout==`function`?setTimeout:void 0,Mi=typeof clearTimeout==`function`?clearTimeout:void 0,Ni=typeof Promise==`function`?Promise:void 0,Pi=typeof queueMicrotask==`function`?queueMicrotask:Ni===void 0?ji:function(e){return Ni.resolve(null).then(e).catch(Fi)};function Fi(e){setTimeout(function(){throw e})}function Ii(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),xn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);xn(t)}function Li(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Ri(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var zi=Math.random().toString(36).slice(2),Bi=`__reactFiber$`+zi,Vi=`__reactProps$`+zi,Hi=`__reactContainer$`+zi,Ui=`__reactEvents$`+zi,Wi=`__reactListeners$`+zi,Gi=`__reactHandles$`+zi;function Ki(e){var t=e[Bi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hi]||n[Bi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ri(e);e!==null;){if(n=e[Bi])return n;e=Ri(e)}return t}e=n,n=e.parentNode}return null}function qi(e){return e=e[Bi]||e[Hi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ji(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Yi(e){return e[Vi]||null}var Xi=[],Zi=-1;function Qi(e){return{current:e}}function I(e){0>Zi||(e.current=Xi[Zi],Xi[Zi]=null,Zi--)}function L(e,t){Zi++,Xi[Zi]=e.current,e.current=t}var $i={},R=Qi($i),ea=Qi(!1),ta=$i;function na(e,t){var n=e.type.contextTypes;if(!n)return $i;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ra(e){return e=e.childContextTypes,e!=null}function ia(){I(ea),I(R)}function aa(e,t,n){if(R.current!==$i)throw Error(r(168));L(R,t),L(ea,n)}function oa(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ye(e)||`Unknown`,a));return E({},n,i)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$i,ta=R.current,L(R,e),L(ea,ea.current),!0}function ca(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=oa(e,t,ta),i.__reactInternalMemoizedMergedChildContext=e,I(ea),I(R),L(R,e)):I(ea),L(ea,n)}var la=null,ua=!1,da=!1;function fa(e){la===null?la=[e]:la.push(e)}function pa(e){ua=!0,fa(e)}function ma(){if(!da&&la!==null){da=!0;var e=0,t=j;try{var n=la;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}la=null,ua=!1}catch(t){throw la!==null&&(la=la.slice(e+1)),St(Dt,ma),t}finally{j=t,da=!1}}return null}var ha=[],ga=0,_a=null,va=0,ya=[],ba=0,xa=null,Sa=1,Ca=``;function wa(e,t){ha[ga++]=va,ha[ga++]=_a,_a=e,va=t}function Ta(e,t,n){ya[ba++]=Sa,ya[ba++]=Ca,ya[ba++]=xa,xa=e;var r=Sa;e=Ca;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var a=32-Ft(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sa=1<<32-Ft(t)+i|n<<i|r,Ca=a+e}else Sa=1<<a|n<<i|r,Ca=e}function Ea(e){e.return!==null&&(wa(e,1),Ta(e,1,0))}function Da(e){for(;e===_a;)_a=ha[--ga],ha[ga]=null,va=ha[--ga],ha[ga]=null;for(;e===xa;)xa=ya[--ba],ya[ba]=null,Ca=ya[--ba],ya[ba]=null,Sa=ya[--ba],ya[ba]=null}var Oa=null,ka=null,z=!1,Aa=null;function ja(e,t){var n=Kl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ma(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,Oa=e,ka=Li(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,Oa=e,ka=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=xa===null?null:{id:Sa,overflow:Ca},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oa=e,ka=null,!0);default:return!1}}function Na(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Pa(e){if(z){var t=ka;if(t){var n=t;if(!Ma(e,t)){if(Na(e))throw Error(r(418));t=Li(n.nextSibling);var i=Oa;t&&Ma(e,t)?ja(i,n):(e.flags=e.flags&-4097|2,z=!1,Oa=e)}}else{if(Na(e))throw Error(r(418));e.flags=e.flags&-4097|2,z=!1,Oa=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oa=e}function Ia(e){if(e!==Oa)return!1;if(!z)return Fa(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Ai(e.type,e.memoizedProps)),t&&=ka){if(Na(e))throw La(),Error(r(418));for(;t;)ja(e,t),t=Li(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){ka=Li(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}ka=null}}else ka=Oa?Li(e.stateNode.nextSibling):null;return!0}function La(){for(var e=ka;e;)e=Li(e.nextSibling)}function Ra(){ka=Oa=null,z=!1}function za(e){Aa===null?Aa=[e]:Aa.push(e)}var Ba=C.ReactCurrentBatchConfig;function Va(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ha(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Ua(e){var t=e._init;return t(e._payload)}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Yl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$l(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ne?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===le&&Ua(i)===t.type)?(r=a(t,n.props),r.ref=Va(e,t,n),r.return=e,r):(r=Xl(n.type,n.key,n.props,null,e.mode,r),r.ref=Va(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Zl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=$l(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ee:return n=Xl(t.type,t.key,t.props,null,e.mode,n),n.ref=Va(e,null,t),n.return=e,n;case te:return t=eu(t,e.mode,n),t.return=e,t;case le:var r=t._init;return f(e,r(t._payload),n)}if(je(t)||fe(t))return t=Zl(t,e.mode,n,null),t.return=e,t;Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ee:return n.key===i?l(e,t,n,r):null;case te:return n.key===i?u(e,t,n,r):null;case le:return i=n._init,p(e,t,i(n._payload),r)}if(je(n)||fe(n))return i===null?d(e,t,n,r,null):null;Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ee:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case te:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case le:var a=r._init;return m(e,t,n,a(r._payload),i)}if(je(r)||fe(r))return e=e.get(n)||null,d(t,e,r,i,null);Ha(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),z&&wa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&wa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),z&&wa(r,h),l}function g(a,s,c,l){var u=fe(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&wa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&wa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&wa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===ne&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case ee:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===ne){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===le&&Ua(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Va(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===ne?(r=Zl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Xl(i.type,i.key,i.props,null,e.mode,o),o.ref=Va(e,r,i),o.return=e,e=o)}return s(e);case te:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=eu(i,e.mode,o),r.return=e,e=r}return s(e);case le:return l=i._init,_(e,r,l(i._payload),o)}if(je(i))return h(e,r,i,o);if(fe(i))return g(e,r,i,o);Ha(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=$l(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ga=Wa(!0),Ka=Wa(!1),qa=Qi(null),Ja=null,Ya=null,Xa=null;function Za(){Xa=Ya=Ja=null}function Qa(e){var t=qa.current;I(qa),e._currentValue=t}function $a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function eo(e,t){Ja=e,Xa=Ya=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(zs=!0),e.firstContext=null)}function to(e){var t=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:t,next:null},Ya===null){if(Ja===null)throw Error(r(308));Ya=e,Ja.dependencies={lanes:0,firstContext:e}}else Ya=Ya.next=e;return t}var no=null;function ro(e){no===null?no=[e]:no.push(e)}function io(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ro(t)):(n.next=i.next,i.next=n),t.interleaved=n,ao(e,r)}function ao(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var oo=!1;function so(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function uo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ao(e,n)}return i=r.interleaved,i===null?(t.next=t,ro(r)):(t.next=i.next,i.next=t),r.interleaved=t,ao(e,n)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xt(e,n)}}function po(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mo(e,t,n,r){var i=e.updateQueue;oo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=E({},d,f);break a;case 2:oo=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Yc|=o,e.lanes=o,e.memoizedState=d}}function ho(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var go={},_o=Qi(go),vo=Qi(go),yo=Qi(go);function bo(e){if(e===go)throw Error(r(174));return e}function xo(e,t){switch(L(yo,t),L(vo,e),L(_o,go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Re(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Re(t,e)}I(_o),L(_o,t)}function So(){I(_o),I(vo),I(yo)}function Co(e){bo(yo.current);var t=bo(_o.current),n=Re(t,e.type);t!==n&&(L(vo,e),L(_o,n))}function wo(e){vo.current===e&&(I(_o),I(vo))}var B=Qi(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Eo=[];function Do(){for(var e=0;e<Eo.length;e++)Eo[e]._workInProgressVersionPrimary=null;Eo.length=0}var Oo=C.ReactCurrentDispatcher,ko=C.ReactCurrentBatchConfig,Ao=0,V=null,H=null,U=null,jo=!1,Mo=!1,No=0,Po=0;function W(){throw Error(r(321))}function Fo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ir(e[n],t[n]))return!1;return!0}function Io(e,t,n,i,a,o){if(Ao=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?ys:bs,e=n(i,a),Mo){o=0;do{if(Mo=!1,No=0,25<=o)throw Error(r(301));o+=1,U=H=null,t.updateQueue=null,Oo.current=xs,e=n(i,a)}while(Mo)}if(Oo.current=vs,t=H!==null&&H.next!==null,Ao=0,U=H=V=null,jo=!1,t)throw Error(r(300));return e}function Lo(){var e=No!==0;return No=0,e}function Ro(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return U===null?V.memoizedState=U=e:U=U.next=e,U}function zo(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=U===null?V.memoizedState:U.next;if(t!==null)U=t,H=e;else{if(e===null)throw Error(r(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},U===null?V.memoizedState=U=e:U=U.next=e}return U}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){var t=zo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=H,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Ao&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,V.lanes|=d,Yc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Ir(i,t.memoizedState)||(zs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,V.lanes|=o,Yc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ho(e){var t=zo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ir(o,t.memoizedState)||(zs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Uo(){}function Wo(e,t){var n=V,i=zo(),a=t(),o=!Ir(i.memoizedState,a);if(o&&(i.memoizedState=a,zs=!0),i=i.queue,ns(qo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||U!==null&&U.memoizedState.tag&1){if(n.flags|=2048,Zo(9,Ko.bind(null,n,i,a,t),void 0,null),Y===null)throw Error(r(349));Ao&30||Go(n,t,a)}return a}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ir(e,n)}catch{return!0}}function Yo(e){var t=ao(e,1);t!==null&&hl(t,e,1,-1)}function Xo(e){var t=Ro();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=ms.bind(null,V,e),[t.memoizedState,e]}function Zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qo(){return zo().memoizedState}function $o(e,t,n,r){var i=Ro();V.flags|=e,i.memoizedState=Zo(1|t,n,void 0,r===void 0?null:r)}function es(e,t,n,r){var i=zo();r=r===void 0?null:r;var a=void 0;if(H!==null){var o=H.memoizedState;if(a=o.destroy,r!==null&&Fo(r,o.deps)){i.memoizedState=Zo(t,n,a,r);return}}V.flags|=e,i.memoizedState=Zo(1|t,n,a,r)}function ts(e,t){return $o(8390656,8,e,t)}function ns(e,t){return es(2048,8,e,t)}function rs(e,t){return es(4,2,e,t)}function is(e,t){return es(4,4,e,t)}function as(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function os(e,t,n){return n=n==null?null:n.concat([e]),es(4,4,as.bind(null,t,e),n)}function ss(){}function cs(e,t){var n=zo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ls(e,t){var n=zo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function us(e,t,n){return Ao&21?(Ir(n,t)||(n=Kt(),V.lanes|=n,Yc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,zs=!0),e.memoizedState=n)}function ds(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=ko.transition;ko.transition={};try{e(!1),t()}finally{j=n,ko.transition=r}}function fs(){return zo().memoizedState}function ps(e,t,n){var r=ml(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hs(e))gs(t,n);else if(n=io(e,t,n,r),n!==null){var i=pl();hl(n,e,r,i),_s(n,t,r)}}function ms(e,t,n){var r=ml(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hs(e))gs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ir(s,o)){var c=t.interleaved;c===null?(i.next=i,ro(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=io(e,t,i,r),n!==null&&(i=pl(),hl(n,e,r,i),_s(n,t,r))}}function hs(e){var t=e.alternate;return e===V||t!==null&&t===V}function gs(e,t){Mo=jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _s(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xt(e,n)}}var vs={readContext:to,useCallback:W,useContext:W,useEffect:W,useImperativeHandle:W,useInsertionEffect:W,useLayoutEffect:W,useMemo:W,useReducer:W,useRef:W,useState:W,useDebugValue:W,useDeferredValue:W,useTransition:W,useMutableSource:W,useSyncExternalStore:W,useId:W,unstable_isNewReconciler:!1},ys={readContext:to,useCallback:function(e,t){return Ro().memoizedState=[e,t===void 0?null:t],e},useContext:to,useEffect:ts,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),$o(4194308,4,as.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var n=Ro();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ro();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ps.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ro();return e={current:e},t.memoizedState=e},useState:Xo,useDebugValue:ss,useDeferredValue:function(e){return Ro().memoizedState=e},useTransition:function(){var e=Xo(!1),t=e[0];return e=ds.bind(null,e[1]),Ro().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=V,a=Ro();if(z){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Y===null)throw Error(r(349));Ao&30||Go(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ts(qo.bind(null,i,o,e),[e]),i.flags|=2048,Zo(9,Ko.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Ro(),t=Y.identifierPrefix;if(z){var n=Ca,r=Sa;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=No++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Po++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},bs={readContext:to,useCallback:cs,useContext:to,useEffect:ns,useImperativeHandle:os,useInsertionEffect:rs,useLayoutEffect:is,useMemo:ls,useReducer:Vo,useRef:Qo,useState:function(){return Vo(Bo)},useDebugValue:ss,useDeferredValue:function(e){return us(zo(),H.memoizedState,e)},useTransition:function(){return[Vo(Bo)[0],zo().memoizedState]},useMutableSource:Uo,useSyncExternalStore:Wo,useId:fs,unstable_isNewReconciler:!1},xs={readContext:to,useCallback:cs,useContext:to,useEffect:ns,useImperativeHandle:os,useInsertionEffect:rs,useLayoutEffect:is,useMemo:ls,useReducer:Ho,useRef:Qo,useState:function(){return Ho(Bo)},useDebugValue:ss,useDeferredValue:function(e){var t=zo();return H===null?t.memoizedState=e:us(t,H.memoizedState,e)},useTransition:function(){return[Ho(Bo)[0],zo().memoizedState]},useMutableSource:Uo,useSyncExternalStore:Wo,useId:fs,unstable_isNewReconciler:!1};function Ss(e,t){if(e&&e.defaultProps){for(var n in t=E({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Cs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ws={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=lo(r,i);a.payload=t,n!=null&&(a.callback=n),t=uo(e,a,i),t!==null&&(hl(t,e,i,r),fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=lo(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=uo(e,a,i),t!==null&&(hl(t,e,i,r),fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pl(),r=ml(e),i=lo(n,r);i.tag=2,t!=null&&(i.callback=t),t=uo(e,i,r),t!==null&&(hl(t,e,r,n),fo(t,e,r))}};function Ts(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(i,a):!0}function Es(e,t,n){var r=!1,i=$i,a=t.contextType;return typeof a==`object`&&a?a=to(a):(i=ra(t)?ta:R.current,r=t.contextTypes,a=(r=r!=null)?na(e,i):$i),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ws,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ds(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function Os(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},so(e);var a=t.contextType;typeof a==`object`&&a?i.context=to(a):(a=ra(t)?ta:R.current,i.context=na(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(Cs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&ws.enqueueReplaceState(i,i.state,null),mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function ks(e,t){try{var n=``,r=t;do n+=_e(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function As(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function js(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ms=typeof WeakMap==`function`?WeakMap:Map;function Ns(e,t,n){n=lo(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,il=r),js(e,t)},n}function Ps(e,t,n){n=lo(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){js(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){js(e,t),typeof r!=`function`&&(al===null?al=new Set([this]):al.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Fs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ms;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zl.bind(null,e,t,n),t.then(e,e))}function Is(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ls(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lo(-1,1),t.tag=2,uo(n,t,1))),n.lanes|=1),e)}var Rs=C.ReactCurrentOwner,zs=!1;function Bs(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function Vs(e,t,n,r,i){n=n.render;var a=t.ref;return eo(t,i),r=Io(e,t,n,r,a,i),n=Lo(),e!==null&&!zs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sc(e,t,i)):(z&&n&&Ea(t),t.flags|=1,Bs(e,t,r,i),t.child)}function Hs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Us(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Lr:n,n(o,r)&&e.ref===t.ref)return sc(e,t,i)}return t.flags|=1,e=Yl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Us(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Lr(a,r)&&e.ref===t.ref)if(zs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(zs=!0);else return t.lanes=e.lanes,sc(e,t,i)}return Ks(e,t,n,r,i)}function Ws(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(qc,Kc),Kc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L(qc,Kc),Kc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,L(qc,Kc),Kc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),L(qc,Kc),Kc|=r;return Bs(e,t,i,n),t.child}function Gs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ks(e,t,n,r,i){var a=ra(n)?ta:R.current;return a=na(t,a),eo(t,i),n=Io(e,t,n,r,a,i),r=Lo(),e!==null&&!zs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sc(e,t,i)):(z&&r&&Ea(t),t.flags|=1,Bs(e,t,n,i),t.child)}function qs(e,t,n,r,i){if(ra(n)){var a=!0;sa(t)}else a=!1;if(eo(t,i),t.stateNode===null)oc(e,t),Es(t,n,r),Os(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=to(l):(l=ra(n)?ta:R.current,l=na(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ds(t,o,r,l),oo=!1;var f=t.memoizedState;o.state=f,mo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||ea.current||oo?(typeof u==`function`&&(Cs(t,n,u,r),c=t.memoizedState),(s=oo||Ts(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,co(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Ss(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=to(c):(c=ra(n)?ta:R.current,c=na(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ds(t,o,r,c),oo=!1,f=t.memoizedState,o.state=f,mo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||ea.current||oo?(typeof p==`function`&&(Cs(t,n,p,r),m=t.memoizedState),(l=oo||Ts(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Js(e,t,n,r,a,i)}function Js(e,t,n,r,i,a){Gs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&ca(t,n,!1),sc(e,t,a);r=t.stateNode,Rs.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ga(t,e.child,null,a),t.child=Ga(t,null,s,a)):Bs(e,t,s,a),t.memoizedState=r.state,i&&ca(t,n,!0),t.child}function Ys(e){var t=e.stateNode;t.pendingContext?aa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&aa(e,t.context,!1),xo(e,t.containerInfo)}function Xs(e,t,n,r,i){return Ra(),za(i),t.flags|=256,Bs(e,t,n,r),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0};function Qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function $s(e,t,n){var r=t.pendingProps,i=B.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),L(B,i&1),e===null)return Pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ql(o,r,0,null),e=Zl(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Qs(n),t.memoizedState=Zs,e):ec(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return nc(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Zl(a,o,n,null),a.flags|=2):a=Yl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Qs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Zs,r}return a=e.child,e=a.sibling,r=Yl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ec(e,t){return t=Ql({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function tc(e,t,n,r){return r!==null&&za(r),Ga(t,e.child,null,n),e=ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nc(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=As(Error(r(422))),tc(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Ql({mode:`visible`,children:i.children},a,0,null),o=Zl(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ga(t,e.child,null,s),t.child.memoizedState=Qs(s),t.memoizedState=Zs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return tc(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=As(o,i,void 0),tc(e,t,s,i)}if(c=(s&e.childLanes)!==0,zs||c){if(i=Y,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,ao(e,a),hl(i,e,a,-1))}return kl(),i=As(Error(r(421))),tc(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Vl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ka=Li(a.nextSibling),Oa=t,z=!0,Aa=null,e!==null&&(ya[ba++]=Sa,ya[ba++]=Ca,ya[ba++]=xa,Sa=e.id,Ca=e.overflow,xa=t),t=ec(t,i.children),t.flags|=4096,t)}function rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$a(e.return,t,n)}function ic(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Bs(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,n,t);else if(e.tag===19)rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(B,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&To(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ic(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&To(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ic(t,!0,n,null,a);break;case`together`:ic(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Yl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cc(e,t,n){switch(t.tag){case 3:Ys(t),Ra();break;case 5:Co(t);break;case 1:ra(t.type)&&sa(t);break;case 4:xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;L(qa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(L(B,B.current&1),e=sc(e,t,n),e===null?null:e.sibling):$s(e,t,n):(L(B,B.current&1),t.flags|=128,null);L(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Ws(e,t,n)}return sc(e,t,n)}var lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},uc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bo(_o.current);var o=null;switch(n){case`input`:i=Te(e,i),r=Te(e,r),o=[];break;case`select`:i=E({},i,{value:void 0}),r=E({},r,{value:void 0}),o=[];break;case`textarea`:i=Ne(e,i),r=Ne(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Di)}k(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&F(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},dc=function(e,t,n,r){n!==r&&(t.flags|=4)};function fc(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function G(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pc(e,t,n){var i=t.pendingProps;switch(Da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return G(t),null;case 1:return ra(t.type)&&ia(),G(t),null;case 3:return i=t.stateNode,So(),I(ea),I(R),Do(),i.pendingContext&&=(i.context=i.pendingContext,null),(e===null||e.child===null)&&(Ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Aa!==null&&(yl(Aa),Aa=null))),G(t),null;case 5:wo(t);var o=bo(yo.current);if(n=t.type,e!==null&&t.stateNode!=null)uc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return G(t),null}if(e=bo(_o.current),Ia(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Bi]=t,i[Vi]=s,e=(t.mode&1)!=0,n){case`dialog`:F(`cancel`,i),F(`close`,i);break;case`iframe`:case`object`:case`embed`:F(`load`,i);break;case`video`:case`audio`:for(o=0;o<ui.length;o++)F(ui[o],i);break;case`source`:F(`error`,i);break;case`img`:case`image`:case`link`:F(`error`,i),F(`load`,i);break;case`details`:F(`toggle`,i);break;case`input`:Ee(i,s),F(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},F(`invalid`,i);break;case`textarea`:Pe(i,s),F(`invalid`,i)}for(var c in k(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ei(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ei(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&F(`scroll`,i)}switch(n){case`input`:Ce(i),ke(i,s,!0);break;case`textarea`:Ce(i),Ie(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Di)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Le(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Bi]=t,e[Vi]=i,lc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ke(n,i),n){case`dialog`:F(`cancel`,e),F(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:F(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<ui.length;o++)F(ui[o],e);o=i;break;case`source`:F(`error`,e),o=i;break;case`img`:case`image`:case`link`:F(`error`,e),F(`load`,e),o=i;break;case`details`:F(`toggle`,e),o=i;break;case`input`:Ee(e,i),o=Te(e,i),F(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=E({},i,{value:void 0}),F(`invalid`,e);break;case`textarea`:Pe(e,i),o=Ne(e,i),F(`invalid`,e);break;default:o=i}for(s in k(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ge(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Be(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Ve(e,u):typeof u==`number`&&Ve(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&F(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:Ce(e),ke(e,i,!1);break;case`textarea`:Ce(e),Ie(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+be(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Me(e,!!i.multiple,i.defaultValue,!0):Me(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Di)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return G(t),null;case 6:if(e&&t.stateNode!=null)dc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=bo(yo.current),bo(_o.current),Ia(t)){if(i=t.stateNode,n=t.memoizedProps,i[Bi]=t,(s=i.nodeValue!==n)&&(e=Oa,e!==null))switch(e.tag){case 3:Ei(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ei(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bi]=t,t.stateNode=i}return G(t),null;case 13:if(I(B),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&ka!==null&&t.mode&1&&!(t.flags&128))La(),Ra(),t.flags|=98560,s=!1;else if(s=Ia(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Bi]=t}else Ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),s=!1}else Aa!==null&&(yl(Aa),Aa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Q===0&&(Q=3):kl())),t.updateQueue!==null&&(t.flags|=4),G(t),null);case 4:return So(),e===null&&gi(t.stateNode.containerInfo),G(t),null;case 10:return Qa(t.type._context),G(t),null;case 17:return ra(t.type)&&ia(),G(t),null;case 19:if(I(B),s=t.memoizedState,s===null)return G(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)fc(s,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=To(e),c!==null){for(t.flags|=128,fc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(B,B.current&1|2),t.child}e=e.sibling}s.tail!==null&&A()>tl&&(t.flags|=128,i=!0,fc(s,!1),t.lanes=4194304)}else{if(!i)if(e=To(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!z)return G(t),null}else 2*A()-s.renderingStartTime>tl&&n!==1073741824&&(t.flags|=128,i=!0,fc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(G(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=A(),t.sibling=null,n=B.current,L(B,i?n&1|2:n&1),t);case 22:case 23:return Tl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Kc&1073741824&&(G(t),t.subtreeFlags&6&&(t.flags|=8192)):G(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function mc(e,t){switch(Da(t),t.tag){case 1:return ra(t.type)&&ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return So(),I(ea),I(R),Do(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wo(t),null;case 13:if(I(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(B),null;case 4:return So(),null;case 10:return Qa(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var hc=!1,gc=!1,_c=typeof WeakSet==`function`?WeakSet:Set,K=null;function vc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){$(e,t,n)}else n.current=null}function yc(e,t,n){try{n()}catch(n){$(e,t,n)}}var bc=!1;function xc(e,t){if(Oi=Cn,e=Vr(),Hr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(ki={focusedElem:e,selectionRange:n},Cn=!1,K=t;K!==null;)if(t=K,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:Ss(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){$(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return h=bc,bc=!1,h}function Sc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&yc(t,n,a)}i=i.next}while(i!==r)}}function Cc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Tc(e){var t=e.alternate;t!==null&&(e.alternate=null,Tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bi],delete t[Vi],delete t[Ui],delete t[Wi],delete t[Gi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function Dc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}function kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}var q=null,Ac=!1;function jc(e,t,n){for(n=n.child;n!==null;)Mc(e,t,n),n=n.sibling}function Mc(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount==`function`)try{Nt.onCommitFiberUnmount(Mt,n)}catch{}switch(n.tag){case 5:gc||vc(n,t);case 6:var r=q,i=Ac;q=null,jc(e,t,n),q=r,Ac=i,q!==null&&(Ac?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Ac?(e=q,n=n.stateNode,e.nodeType===8?Ii(e.parentNode,n):e.nodeType===1&&Ii(e,n),xn(e)):Ii(q,n.stateNode));break;case 4:r=q,i=Ac,q=n.stateNode.containerInfo,Ac=!0,jc(e,t,n),q=r,Ac=i;break;case 0:case 11:case 14:case 15:if(!gc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&yc(n,t,o),i=i.next}while(i!==r)}jc(e,t,n);break;case 1:if(!gc&&(vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){$(n,t,e)}jc(e,t,n);break;case 21:jc(e,t,n);break;case 22:n.mode&1?(gc=(r=gc)||n.memoizedState!==null,jc(e,t,n),gc=r):jc(e,t,n);break;default:jc(e,t,n)}}function Nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _c),t.forEach(function(t){var r=Hl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Pc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:q=c.stateNode,Ac=!1;break a;case 3:q=c.stateNode.containerInfo,Ac=!0;break a;case 4:q=c.stateNode.containerInfo,Ac=!0;break a}c=c.return}if(q===null)throw Error(r(160));Mc(o,s,a),q=null,Ac=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){$(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fc(t,e),t=t.sibling}function Fc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pc(t,e),Ic(e),i&4){try{Sc(3,e,e.return),Cc(3,e)}catch(t){$(e,e.return,t)}try{Sc(5,e,e.return)}catch(t){$(e,e.return,t)}}break;case 1:Pc(t,e),Ic(e),i&512&&n!==null&&vc(n,n.return);break;case 5:if(Pc(t,e),Ic(e),i&512&&n!==null&&vc(n,n.return),e.flags&32){var a=e.stateNode;try{Ve(a,``)}catch(t){$(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&De(a,o),Ke(c,s);var u=Ke(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ge(a,f):d===`dangerouslySetInnerHTML`?Be(a,f):d===`children`?Ve(a,f):S(a,d,f,u)}switch(c){case`input`:Oe(a,o);break;case`textarea`:Fe(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Me(a,!!o.multiple,o.multiple?[]:``,!1):Me(a,!!o.multiple,o.defaultValue,!0)):Me(a,!!o.multiple,m,!1)}a[Vi]=o}catch(t){$(e,e.return,t)}}break;case 6:if(Pc(t,e),Ic(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){$(e,e.return,t)}}break;case 3:if(Pc(t,e),Ic(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xn(t.containerInfo)}catch(t){$(e,e.return,t)}break;case 4:Pc(t,e),Ic(e);break;case 13:Pc(t,e),Ic(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(el=A())),i&4&&Nc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(gc=(u=gc)||d,Pc(t,e),gc=u):Pc(t,e),Ic(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(K=e,d=e.child;d!==null;){for(f=K=d;K!==null;){switch(p=K,m=p.child,p.tag){case 0:case 11:case 14:case 15:Sc(4,p,p.return);break;case 1:vc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){$(i,n,e)}}break;case 5:vc(p,p.return);break;case 22:if(p.memoizedState!==null){Bc(f);continue}}m===null?Bc(f):(m.return=p,K=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=We(`display`,s))}catch(t){$(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){$(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pc(t,e),Ic(e),i&4&&Nc(e);break;case 21:break;default:Pc(t,e),Ic(e)}}function Ic(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Ec(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Ve(a,``),i.flags&=-33),kc(e,Dc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Oc(e,Dc(e),o);break;default:throw Error(r(161))}}catch(t){$(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lc(e,t,n){K=e,Rc(e,t,n)}function Rc(e,t,n){for(var r=(e.mode&1)!=0;K!==null;){var i=K,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||gc;s=hc;var l=gc;if(hc=o,(gc=c)&&!l)for(K=i;K!==null;)o=K,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Vc(i):(c.return=o,K=c);for(;a!==null;)K=a,Rc(a,t,n),a=a.sibling;K=i,hc=s,gc=l}zc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,K=a):zc(e,t,n)}}function zc(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:gc||Cc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!gc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ss(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ho(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ho(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&xn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}gc||t.flags&512&&wc(t)}catch(e){$(t,t.return,e)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Bc(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Vc(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cc(4,t)}catch(e){$(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){$(t,i,e)}}var a=t.return;try{wc(t)}catch(e){$(t,a,e)}break;case 5:var o=t.return;try{wc(t)}catch(e){$(t,o,e)}}}catch(e){$(t,t.return,e)}if(t===e){K=null;break}var s=t.sibling;if(s!==null){s.return=t.return,K=s;break}K=t.return}}var Hc=Math.ceil,Uc=C.ReactCurrentDispatcher,Wc=C.ReactCurrentOwner,Gc=C.ReactCurrentBatchConfig,J=0,Y=null,X=null,Z=0,Kc=0,qc=Qi(0),Q=0,Jc=null,Yc=0,Xc=0,Zc=0,Qc=null,$c=null,el=0,tl=1/0,nl=null,rl=!1,il=null,al=null,ol=!1,sl=null,cl=0,ll=0,ul=null,dl=-1,fl=0;function pl(){return J&6?A():dl===-1?dl=A():dl}function ml(e){return e.mode&1?J&2&&Z!==0?Z&-Z:Ba.transition===null?(e=j,e===0?(e=window.event,e=e===void 0?16:kn(e.type),e):e):(fl===0&&(fl=Kt()),fl):1}function hl(e,t,n,i){if(50<ll)throw ll=0,ul=null,Error(r(185));Jt(e,n,i),(!(J&2)||e!==Y)&&(e===Y&&(!(J&2)&&(Xc|=n),Q===4&&xl(e,Z)),gl(e,i),n===1&&J===0&&!(t.mode&1)&&(tl=A()+500,ua&&ma()))}function gl(e,t){var n=e.callbackNode;Wt(e,t);var r=Ht(e,e===Y?Z:0);if(r===0)n!==null&&Ct(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ct(n),t===1)e.tag===0?pa(Sl.bind(null,e)):fa(Sl.bind(null,e)),Pi(function(){!(J&6)&&ma()}),n=null;else{switch(Zt(r)){case 1:n=Dt;break;case 4:n=Ot;break;case 16:n=kt;break;case 536870912:n=jt;break;default:n=kt}n=Wl(n,_l.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _l(e,t){if(dl=-1,fl=0,J&6)throw Error(r(327));var n=e.callbackNode;if(Ll()&&e.callbackNode!==n)return null;var i=Ht(e,e===Y?Z:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Al(e,i);else{t=i;var a=J;J|=2;var o=Ol();(Y!==e||Z!==t)&&(nl=null,tl=A()+500,El(e,t));do try{Ml();break}catch(t){Dl(e,t)}while(1);Za(),Uc.current=o,J=a,X===null?(Y=null,Z=0,t=Q):t=0}if(t!==0){if(t===2&&(a=Gt(e),a!==0&&(i=a,t=vl(e,a))),t===1)throw n=Jc,El(e,0),xl(e,i),gl(e,A()),n;if(t===6)xl(e,i);else{if(a=e.current.alternate,!(i&30)&&!bl(a)&&(t=Al(e,i),t===2&&(o=Gt(e),o!==0&&(i=o,t=vl(e,o))),t===1))throw n=Jc,El(e,0),xl(e,i),gl(e,A()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Fl(e,$c,nl);break;case 3:if(xl(e,i),(i&130023424)===i&&(t=el+500-A(),10<t)){if(Ht(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){pl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ji(Fl.bind(null,e,$c,nl),t);break}Fl(e,$c,nl);break;case 4:if(xl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Ft(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=A()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Hc(i/1960))-i,10<i){e.timeoutHandle=ji(Fl.bind(null,e,$c,nl),i);break}Fl(e,$c,nl);break;case 5:Fl(e,$c,nl);break;default:throw Error(r(329))}}}return gl(e,A()),e.callbackNode===n?_l.bind(null,e):null}function vl(e,t){var n=Qc;return e.current.memoizedState.isDehydrated&&(El(e,t).flags|=256),e=Al(e,t),e!==2&&(t=$c,$c=n,t!==null&&yl(t)),e}function yl(e){$c===null?$c=e:$c.push.apply($c,e)}function bl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ir(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xl(e,t){for(t&=~Zc,t&=~Xc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function Sl(e){if(J&6)throw Error(r(327));Ll();var t=Ht(e,0);if(!(t&1))return gl(e,A()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var i=Gt(e);i!==0&&(t=i,n=vl(e,i))}if(n===1)throw n=Jc,El(e,0),xl(e,t),gl(e,A()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fl(e,$c,nl),gl(e,A()),null}function Cl(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(tl=A()+500,ua&&ma())}}function wl(e){sl!==null&&sl.tag===0&&!(J&6)&&Ll();var t=J;J|=1;var n=Gc.transition,r=j;try{if(Gc.transition=null,j=1,e)return e()}finally{j=r,Gc.transition=n,J=t,!(J&6)&&ma()}}function Tl(){Kc=qc.current,I(qc)}function El(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mi(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ia();break;case 3:So(),I(ea),I(R),Do();break;case 5:wo(r);break;case 4:So();break;case 13:I(B);break;case 19:I(B);break;case 10:Qa(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(Y=e,X=e=Yl(e.current,null),Z=Kc=t,Q=0,Jc=null,Zc=Xc=Yc=0,$c=Qc=null,no!==null){for(t=0;t<no.length;t++)if(n=no[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}no=null}return e}function Dl(e,t){do{var n=X;try{if(Za(),Oo.current=vs,jo){for(var i=V.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}jo=!1}if(Ao=0,U=H=V=null,Mo=!1,No=0,Wc.current=null,n===null||n.return===null){Q=1,Jc=t,X=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Z,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Is(s);if(m!==null){m.flags&=-257,Ls(m,s,c,o,t),m.mode&1&&Fs(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Fs(o,u,t),kl();break a}l=Error(r(426))}}else if(z&&c.mode&1){var _=Is(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ls(_,s,c,o,t),za(ks(l,c));break a}}o=l=ks(l,c),Q!==4&&(Q=2),Qc===null?Qc=[o]:Qc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ns(o,l,t);po(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(al===null||!al.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ps(o,c,t);po(o,x);break a}}o=o.return}while(o!==null)}Pl(n)}catch(e){t=e,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Ol(){var e=Uc.current;return Uc.current=vs,e===null?vs:e}function kl(){(Q===0||Q===3||Q===2)&&(Q=4),Y===null||!(Yc&268435455)&&!(Xc&268435455)||xl(Y,Z)}function Al(e,t){var n=J;J|=2;var i=Ol();(Y!==e||Z!==t)&&(nl=null,El(e,t));do try{jl();break}catch(t){Dl(e,t)}while(1);if(Za(),J=n,Uc.current=i,X!==null)throw Error(r(261));return Y=null,Z=0,Q}function jl(){for(;X!==null;)Nl(X)}function Ml(){for(;X!==null&&!wt();)Nl(X)}function Nl(e){var t=Ul(e.alternate,e,Kc);e.memoizedProps=e.pendingProps,t===null?Pl(e):X=t,Wc.current=null}function Pl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mc(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,X=null;return}}else if(n=pc(n,t,Kc),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Q===0&&(Q=5)}function Fl(e,t,n){var r=j,i=Gc.transition;try{Gc.transition=null,j=1,Il(e,t,n,r)}finally{Gc.transition=i,j=r}return null}function Il(e,t,n,i){do Ll();while(sl!==null);if(J&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Yt(e,o),e===Y&&(X=Y=null,Z=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,Wl(kt,function(){return Ll(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Gc.transition,Gc.transition=null;var s=j;j=1;var c=J;J|=4,Wc.current=null,xc(e,n),Fc(n,e),Ur(ki),Cn=!!Oi,ki=Oi=null,e.current=n,Lc(n,e,a),Tt(),J=c,j=s,Gc.transition=o}else e.current=n;if(ol&&(ol=!1,sl=e,cl=a),o=e.pendingLanes,o===0&&(al=null),Pt(n.stateNode,i),gl(e,A()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(rl)throw rl=!1,e=il,il=null,e;return cl&1&&e.tag!==0&&Ll(),o=e.pendingLanes,o&1?e===ul?ll++:(ll=0,ul=e):ll=0,ma(),null}function Ll(){if(sl!==null){var e=Zt(cl),t=Gc.transition,n=j;try{if(Gc.transition=null,j=16>e?16:e,sl===null)var i=!1;else{if(e=sl,sl=null,cl=0,J&6)throw Error(r(331));var a=J;for(J|=4,K=e.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Sc(8,d,o)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var p=d.sibling,m=d.return;if(Tc(d),d===u){K=null;break}if(p!==null){p.return=m,K=p;break}K=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else b:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,K=v;break b}K=o.return}}var y=e.current;for(K=y;K!==null;){s=K;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,K=b;else b:for(s=y;K!==null;){if(c=K,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Cc(9,c)}}catch(e){$(c,c.return,e)}if(c===s){K=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,K=x;break b}K=c.return}}if(J=a,ma(),Nt&&typeof Nt.onPostCommitFiberRoot==`function`)try{Nt.onPostCommitFiberRoot(Mt,e)}catch{}i=!0}return i}finally{j=n,Gc.transition=t}}return!1}function Rl(e,t,n){t=ks(n,t),t=Ns(e,t,1),e=uo(e,t,1),t=pl(),e!==null&&(Jt(e,1,t),gl(e,t))}function $(e,t,n){if(e.tag===3)Rl(e,e,n);else for(;t!==null;){if(t.tag===3){Rl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(al===null||!al.has(r))){e=ks(n,e),e=Ps(t,e,1),t=uo(t,e,1),e=pl(),t!==null&&(Jt(t,1,e),gl(t,e));break}}t=t.return}}function zl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pl(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(Z&n)===n&&(Q===4||Q===3&&(Z&130023424)===Z&&500>A()-el?El(e,0):Zc|=n),gl(e,t)}function Bl(e,t){t===0&&(e.mode&1?(t=Bt,Bt<<=1,!(Bt&130023424)&&(Bt=4194304)):t=1);var n=pl();e=ao(e,t),e!==null&&(Jt(e,t,n),gl(e,n))}function Vl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bl(e,n)}function Hl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Bl(e,n)}var Ul=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ea.current)zs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return zs=!1,cc(e,t,n);zs=!!(e.flags&131072)}else zs=!1,z&&t.flags&1048576&&Ta(t,va,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;oc(e,t),e=t.pendingProps;var a=na(t,R.current);eo(t,n),a=Io(null,t,i,e,a,n);var o=Lo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ra(i)?(o=!0,sa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,so(t),a.updater=ws,t.stateNode=a,a._reactInternals=t,Os(t,i,e,n),t=Js(null,t,i,!0,o,n)):(t.tag=0,z&&o&&Ea(t),Bs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(oc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Jl(i),e=Ss(i,e),a){case 0:t=Ks(null,t,i,e,n);break a;case 1:t=qs(null,t,i,e,n);break a;case 11:t=Vs(null,t,i,e,n);break a;case 14:t=Hs(null,t,i,Ss(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ss(i,a),Ks(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ss(i,a),qs(e,t,i,a,n);case 3:a:{if(Ys(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,co(e,t),mo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=ks(Error(r(423)),t),t=Xs(e,t,i,n,a);break a}else if(i!==a){a=ks(Error(r(424)),t),t=Xs(e,t,i,n,a);break a}else for(ka=Li(t.stateNode.containerInfo.firstChild),Oa=t,z=!0,Aa=null,n=Ka(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ra(),i===a){t=sc(e,t,n);break a}Bs(e,t,i,n)}t=t.child}return t;case 5:return Co(t),e===null&&Pa(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Ai(i,a)?s=null:o!==null&&Ai(i,o)&&(t.flags|=32),Gs(e,t),Bs(e,t,s,n),t.child;case 6:return e===null&&Pa(t),null;case 13:return $s(e,t,n);case 4:return xo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ga(t,null,i,n):Bs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ss(i,a),Vs(e,t,i,a,n);case 7:return Bs(e,t,t.pendingProps,n),t.child;case 8:return Bs(e,t,t.pendingProps.children,n),t.child;case 12:return Bs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,L(qa,i._currentValue),i._currentValue=s,o!==null)if(Ir(o.value,s)){if(o.children===a.children&&!ea.current){t=sc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=lo(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$a(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),$a(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Bs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,eo(t,n),a=to(a),i=i(a),t.flags|=1,Bs(e,t,i,n),t.child;case 14:return i=t.type,a=Ss(i,t.pendingProps),a=Ss(i.type,a),Hs(e,t,i,a,n);case 15:return Us(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Ss(i,a),oc(e,t),t.tag=1,ra(i)?(e=!0,sa(t)):e=!1,eo(t,n),Es(t,i,a),Os(t,i,a,n),Js(null,t,i,!0,e,n);case 19:return ac(e,t,n);case 22:return Ws(e,t,n)}throw Error(r(156,t.tag))};function Wl(e,t){return St(e,t)}function Gl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kl(e,t,n,r){return new Gl(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jl(e){if(typeof e==`function`)return ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oe)return 11;if(e===T)return 14}return 2}function Yl(e,t){var n=e.alternate;return n===null?(n=Kl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case ne:return Zl(n.children,a,o,t);case re:s=8,a|=8;break;case ie:return e=Kl(12,n,t,a|2),e.elementType=ie,e.lanes=o,e;case se:return e=Kl(13,n,t,a),e.elementType=se,e.lanes=o,e;case ce:return e=Kl(19,n,t,a),e.elementType=ce,e.lanes=o,e;case ue:return Ql(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case w:s=10;break a;case ae:s=9;break a;case oe:s=11;break a;case T:s=14;break a;case le:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Kl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Zl(e,t,n,r){return e=Kl(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Kl(22,e,r,t),e.elementType=ue,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Kl(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=Kl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qt(0),this.expirationTimes=qt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,s,c){return e=new tu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Kl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},so(a),e}function ru(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:te,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function iu(e){if(!e)return $i;e=e._reactInternals;a:{if(gt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(ra(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(ra(n))return oa(e,n,t)}return t}function au(e,t,n,r,i,a,o,s,c){return e=nu(n,r,!0,e,i,a,o,s,c),e.context=iu(null),n=e.current,r=pl(),i=ml(n),a=lo(r,i),a.callback=t??null,uo(n,a,i),e.current.lanes=i,Jt(e,i,r),gl(e,r),e}function ou(e,t,n,r){var i=t.current,a=pl(),o=ml(i);return n=iu(n),t.context===null?t.context=n:t.pendingContext=n,t=lo(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=uo(i,t,o),e!==null&&(hl(e,i,o,a),fo(e,i,o)),o}function su(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function uu(){return null}var du=typeof reportError==`function`?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}pu.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));ou(e,t,null,null)},pu.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wl(function(){ou(null,e,null,null)}),t[Hi]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=tn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&gn(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function gu(){}function _u(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=su(o);a.call(e)}}var o=au(t,r,e,0,null,!1,!1,``,gu);return e._reactRootContainer=o,e[Hi]=o.current,gi(e.nodeType===8?e.parentNode:e),wl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=su(c);s.call(e)}}var c=nu(e,0,!1,null,null,!1,!1,``,gu);return e._reactRootContainer=c,e[Hi]=c.current,gi(e.nodeType===8?e.parentNode:e),wl(function(){ou(t,c,n,r)}),c}function vu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=su(o);s.call(e)}}ou(t,o,e,i)}else o=_u(n,t,e,i,r);return su(o)}Qt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vt(t.pendingLanes);n!==0&&(Xt(t,n|1),gl(t,A()),!(J&6)&&(tl=A()+500,ma()))}break;case 13:wl(function(){var t=ao(e,1);t!==null&&hl(t,e,1,pl())}),lu(e,1)}},$t=function(e){if(e.tag===13){var t=ao(e,134217728);t!==null&&hl(t,e,134217728,pl()),lu(e,134217728)}},en=function(e){if(e.tag===13){var t=ml(e),n=ao(e,t);n!==null&&hl(n,e,t,pl()),lu(e,t)}},tn=function(){return j},nn=function(e,t){var n=j;try{return j=e,t()}finally{j=n}},Ye=function(e,t,n){switch(t){case`input`:if(Oe(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Yi(i);if(!a)throw Error(r(90));we(i),Oe(i,a)}}}break;case`textarea`:Fe(e,n);break;case`select`:t=n.value,t!=null&&Me(e,!!n.multiple,t,!1)}},tt=Cl,nt=wl;var yu={usingClientEntryPoint:!1,Events:[qi,Ji,Yi,$e,et,Cl]},bu={findFiberByHostInstance:Ki,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},xu={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bt(e),e===null?null:e.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||uu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Mt=Su.inject(xu),Nt=Su}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(r(200));return ru(e,t,null,n)},e.createRoot=function(e,t){if(!mu(e))throw Error(r(299));var n=!1,i=``,a=du;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,i,a),e[Hi]=t.current,gi(e.nodeType===8?e.parentNode:e),new fu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=bt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return wl(e)},e.hydrate=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=du;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=au(t,null,e,1,n??null,a,!1,o,s),e[Hi]=t.current,gi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new pu(t)},e.render=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!hu(e))throw Error(r(40));return e._reactRootContainer?(wl(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Hi]=null})}),!0):!1},e.unstable_batchedUpdates=Cl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return vu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=o(((e,t)=>{var n=typeof Element<`u`,r=typeof Map==`function`,i=typeof Set==`function`,a=typeof ArrayBuffer==`function`&&!!ArrayBuffer.isView;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e==`object`&&typeof t==`object`){if(e.constructor!==t.constructor)return!1;var s,c,l;if(Array.isArray(e)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(!o(e[c],t[c]))return!1;return!0}var u;if(r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],t.get(c.value[0])))return!1;return!0}if(i&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(e[c]!==t[c])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf==`function`&&typeof t.valueOf==`function`)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString==`function`&&typeof t.toString==`function`)return e.toString()===t.toString();if(l=Object.keys(e),s=l.length,s!==Object.keys(t).length)return!1;for(c=s;c--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[c]))return!1;if(n&&e instanceof Element)return!1;for(c=s;c--!==0;)if(!((l[c]===`_owner`||l[c]===`__v`||l[c]===`__o`)&&e.$$typeof)&&!o(e[l[c]],t[l[c]]))return!1;return!0}return e!==e&&t!==t}t.exports=function(e,t){try{return o(e,t)}catch(e){if((e.message||``).match(/stack|recursion/i))return console.warn(`react-fast-compare cannot handle circular refs`),!1;throw e}}})),_=o(((e,t)=>{t.exports=function(e,t,n,r,i,a,o,s){if(!e){var c;if(t===void 0)c=Error(`Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`);else{var l=[n,r,i,a,o,s],u=0;c=Error(t.replace(/%s/g,function(){return l[u++]})),c.name=`Invariant Violation`}throw c.framesToPop=1,c}}})),v=o(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),y=c(h(),1),b=c(u()),x=c(g()),S=c(_()),C=c(v()),ee=(e=>(e.BASE=`base`,e.BODY=`body`,e.HEAD=`head`,e.HTML=`html`,e.LINK=`link`,e.META=`meta`,e.NOSCRIPT=`noscript`,e.SCRIPT=`script`,e.STYLE=`style`,e.TITLE=`title`,e.FRAGMENT=`Symbol(react.fragment)`,e))(ee||{}),te={link:{rel:[`amphtml`,`canonical`,`alternate`]},script:{type:[`application/ld+json`]},meta:{charset:``,name:[`generator`,`robots`,`description`],property:[`og:type`,`og:title`,`og:url`,`og:image`,`og:image:alt`,`og:description`,`twitter:url`,`twitter:title`,`twitter:description`,`twitter:image`,`twitter:image:alt`,`twitter:card`,`twitter:site`]}},ne=Object.values(ee),re={accesskey:`accessKey`,charset:`charSet`,class:`className`,contenteditable:`contentEditable`,contextmenu:`contextMenu`,"http-equiv":`httpEquiv`,itemprop:`itemProp`,tabindex:`tabIndex`},ie=Object.entries(re).reduce((e,[t,n])=>(e[n]=t,e),{}),w=`data-rh`,ae={DEFAULT_TITLE:`defaultTitle`,DEFER:`defer`,ENCODE_SPECIAL_CHARACTERS:`encodeSpecialCharacters`,ON_CHANGE_CLIENT_STATE:`onChangeClientState`,TITLE_TEMPLATE:`titleTemplate`,PRIORITIZE_SEO_TAGS:`prioritizeSeoTags`},oe=(e,t)=>{for(let n=e.length-1;n>=0;--n){let r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},se=e=>{let t=oe(e,`title`),n=oe(e,ae.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join(``)),n&&t)return n.replace(/%s/g,()=>t);let r=oe(e,ae.DEFAULT_TITLE);return t||r||void 0},ce=e=>oe(e,ae.ON_CHANGE_CLIENT_STATE)||(()=>{}),T=(e,t)=>t.filter(t=>t[e]!==void 0).map(t=>t[e]).reduce((e,t)=>({...e,...t}),{}),le=(e,t)=>t.filter(e=>e.base!==void 0).map(e=>e.base).reverse().reduce((t,n)=>{if(!t.length){let r=Object.keys(n);for(let i=0;i<r.length;i+=1){let a=r[i].toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}}return t},[]),ue=e=>console&&typeof console.warn==`function`&&console.warn(e),de=(e,t,n)=>{let r={};return n.filter(t=>Array.isArray(t[e])?!0:(t[e]!==void 0&&ue(`Helmet: ${e} should be of type "Array". Instead found type "${typeof t[e]}"`),!1)).map(t=>t[e]).reverse().reduce((e,n)=>{let i={};n.filter(e=>{let n,a=Object.keys(e);for(let r=0;r<a.length;r+=1){let i=a[r],o=i.toLowerCase();t.indexOf(o)!==-1&&!(n===`rel`&&e[n].toLowerCase()===`canonical`)&&!(o===`rel`&&e[o].toLowerCase()===`stylesheet`)&&(n=o),t.indexOf(i)!==-1&&(i===`innerHTML`||i===`cssText`||i===`itemprop`)&&(n=i)}if(!n||!e[n])return!1;let o=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),r[n][o]?!1:(i[n][o]=!0,!0)}).reverse().forEach(t=>e.push(t));let a=Object.keys(i);for(let e=0;e<a.length;e+=1){let t=a[e];r[t]={...r[t],...i[t]}}return e},[]).reverse()},fe=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},E=e=>({baseTag:le([`href`],e),bodyAttributes:T(`bodyAttributes`,e),defer:oe(e,ae.DEFER),encode:oe(e,ae.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(`htmlAttributes`,e),linkTags:de(`link`,[`rel`,`href`],e),metaTags:de(`meta`,[`name`,`charset`,`http-equiv`,`property`,`itemprop`],e),noscriptTags:de(`noscript`,[`innerHTML`],e),onChangeClientState:ce(e),scriptTags:de(`script`,[`src`,`innerHTML`],e),styleTags:de(`style`,[`cssText`],e),title:se(e),titleAttributes:T(`titleAttributes`,e),prioritizeSeoTags:fe(e,ae.PRIORITIZE_SEO_TAGS)}),pe=e=>Array.isArray(e)?e.join(``):e,me=(e,t)=>{let n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},he=(e,t)=>Array.isArray(e)?e.reduce((e,n)=>(me(n,t)?e.priority.push(n):e.default.push(n),e),{priority:[],default:[]}):{default:e,priority:[]},ge=(e,t)=>({...e,[t]:void 0}),_e=[`noscript`,`script`,`style`],ve=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`),ye=e=>Object.keys(e).reduce((t,n)=>{let r=e[n]===void 0?`${n}`:`${n}="${e[n]}"`;return t?`${t} ${r}`:r},``),be=(e,t,n,r)=>{let i=ye(n),a=pe(t);return i?`<${e} ${w}="true" ${i}>${ve(a,r)}</${e}>`:`<${e} ${w}="true">${ve(a,r)}</${e}>`},xe=(e,t,n=!0)=>t.reduce((t,r)=>{let i=r,a=Object.keys(i).filter(e=>!(e===`innerHTML`||e===`cssText`)).reduce((e,t)=>{let r=i[t]===void 0?t:`${t}="${ve(i[t],n)}"`;return e?`${e} ${r}`:r},``),o=i.innerHTML||i.cssText||``;return`${t}<${e} ${w}="true" ${a}${_e.indexOf(e)===-1?`/>`:`>${o}</${e}>`}`},``),Se=(e,t={})=>Object.keys(e).reduce((t,n)=>{let r=re[n];return t[r||n]=e[n],t},t),Ce=(e,t,n)=>{let r=Se(n,{key:t,[w]:!0});return[b.createElement(`title`,r,t)]},we=(e,t)=>t.map((t,n)=>{let r={key:n,[w]:!0};return Object.keys(t).forEach(e=>{let n=re[e]||e;n===`innerHTML`||n===`cssText`?r.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:r[n]=t[e]}),b.createElement(e,r)}),D=(e,t,n=!0)=>{switch(e){case`title`:return{toComponent:()=>Ce(e,t.title,t.titleAttributes),toString:()=>be(e,t.title,t.titleAttributes,n)};case`bodyAttributes`:case`htmlAttributes`:return{toComponent:()=>Se(t),toString:()=>ye(t)};default:return{toComponent:()=>we(e,t),toString:()=>xe(e,t,n)}}},Te=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{let i=he(e,te.meta),a=he(t,te.link),o=he(n,te.script);return{priorityMethods:{toComponent:()=>[...we(`meta`,i.priority),...we(`link`,a.priority),...we(`script`,o.priority)],toString:()=>`${D(`meta`,i.priority,r)} ${D(`link`,a.priority,r)} ${D(`script`,o.priority,r)}`},metaTags:i.default,linkTags:a.default,scriptTags:o.default}},Ee=e=>{let{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:a,styleTags:o,title:s=``,titleAttributes:c,prioritizeSeoTags:l}=e,{linkTags:u,metaTags:d,scriptTags:f}=e,p={toComponent:()=>{},toString:()=>``};return l&&({priorityMethods:p,linkTags:u,metaTags:d,scriptTags:f}=Te(e)),{priority:p,base:D(`base`,t,r),bodyAttributes:D(`bodyAttributes`,n,r),htmlAttributes:D(`htmlAttributes`,i,r),link:D(`link`,u,r),meta:D(`meta`,d,r),noscript:D(`noscript`,a,r),script:D(`script`,f,r),style:D(`style`,o,r),title:D(`title`,{title:s,titleAttributes:c},r)}},De=[],Oe=!!(typeof window<`u`&&window.document&&window.document.createElement),ke=class{instances=[];canUseDOM=Oe;context;value={setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?De:this.instances,add:e=>{(this.canUseDOM?De:this.instances).push(e)},remove:e=>{let t=(this.canUseDOM?De:this.instances).indexOf(e);(this.canUseDOM?De:this.instances).splice(t,1)}}};constructor(e,t){this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Ee({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:``,titleAttributes:{}}))}},Ae=b.createContext({}),je=class e extends b.Component{static canUseDOM=Oe;helmetData;constructor(t){super(t),this.helmetData=new ke(this.props.context||{},e.canUseDOM)}render(){return b.createElement(Ae.Provider,{value:this.helmetData.value},this.props.children)}},Me=(e,t)=>{let n=document.head||document.querySelector(`head`),r=n.querySelectorAll(`${e}[${w}]`),i=[].slice.call(r),a=[],o;return t&&t.length&&t.forEach(t=>{let n=document.createElement(e);for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))if(e===`innerHTML`)n.innerHTML=t.innerHTML;else if(e===`cssText`)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{let r=e,i=t[r]===void 0?``:t[r];n.setAttribute(e,i)}n.setAttribute(w,`true`),i.some((e,t)=>(o=t,n.isEqualNode(e)))?i.splice(o,1):a.push(n)}),i.forEach(e=>e.parentNode?.removeChild(e)),a.forEach(e=>n.appendChild(e)),{oldTags:i,newTags:a}},Ne=(e,t)=>{let n=document.getElementsByTagName(e)[0];if(!n)return;let r=n.getAttribute(w),i=r?r.split(`,`):[],a=[...i],o=Object.keys(t);for(let e of o){let r=t[e]||``;n.getAttribute(e)!==r&&n.setAttribute(e,r),i.indexOf(e)===-1&&i.push(e);let o=a.indexOf(e);o!==-1&&a.splice(o,1)}for(let e=a.length-1;e>=0;--e)n.removeAttribute(a[e]);i.length===a.length?n.removeAttribute(w):n.getAttribute(w)!==o.join(`,`)&&n.setAttribute(w,o.join(`,`))},Pe=(e,t)=>{e!==void 0&&document.title!==e&&(document.title=pe(e)),Ne(`title`,t)},Fe=(e,t)=>{let{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:a,metaTags:o,noscriptTags:s,onChangeClientState:c,scriptTags:l,styleTags:u,title:d,titleAttributes:f}=e;Ne(`body`,r),Ne(`html`,i),Pe(d,f);let p={baseTag:Me(`base`,n),linkTags:Me(`link`,a),metaTags:Me(`meta`,o),noscriptTags:Me(`noscript`,s),scriptTags:Me(`script`,l),styleTags:Me(`style`,u)},m={},h={};Object.keys(p).forEach(e=>{let{newTags:t,oldTags:n}=p[e];t.length&&(m[e]=t),n.length&&(h[e]=p[e].oldTags)}),t&&t(),c(e,m,h)},Ie=null,Le=e=>{Ie&&cancelAnimationFrame(Ie),e.defer?Ie=requestAnimationFrame(()=>{Fe(e,()=>{Ie=null})}):(Fe(e),Ie=null)},Re=class extends b.Component{rendered=!1;shouldComponentUpdate(e){return!(0,C.default)(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){let{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){let{helmetInstances:e,setHelmet:t}=this.props.context,n=null,r=E(e.get().map(e=>{let t={...e.props};return delete t.context,t}));je.canUseDOM?Le(r):Ee&&(n=Ee(r)),t(n)}init(){if(this.rendered)return;this.rendered=!0;let{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},ze=class extends b.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(e){return!(0,x.default)(ge(this.props,`helmetData`),ge(e,`helmetData`))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case`script`:case`noscript`:return{innerHTML:t};case`style`:return{cssText:t};default:throw Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case`title`:return{...t,[e.type]:r,titleAttributes:{...n}};case`body`:return{...t,bodyAttributes:{...n}};case`html`:return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(t=>{n={...n,[t]:e[t]}}),n}warnOnInvalidChildren(e,t){return(0,S.default)(ne.some(t=>e.type===t),typeof e.type==`function`?`You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.`:`Only elements types ${ne.join(`, `)} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),(0,S.default)(!t||typeof t==`string`||Array.isArray(t)&&!t.some(e=>typeof e!=`string`),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return b.Children.forEach(e,e=>{if(!e||!e.props)return;let{children:r,...i}=e.props,a=Object.keys(i).reduce((e,t)=>(e[ie[t]||t]=i[t],e),{}),{type:o}=e;switch(typeof o==`symbol`?o=o.toString():this.warnOnInvalidChildren(e,r),o){case`Symbol(react.fragment)`:t=this.mapChildrenToProps(r,t);break;case`link`:case`meta`:case`noscript`:case`script`:case`style`:n=this.flattenArrayTypeChildren(e,n,a,r);break;default:t=this.mapObjectTypeChildren(e,t,a,r);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){let{children:e,...t}=this.props,n={...t},{helmetData:r}=t;return e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof ke)&&(r=new ke(r.context,!0),delete n.helmetData),r?b.createElement(Re,{...n,context:r.value}):b.createElement(Ae.Consumer,null,e=>b.createElement(Re,{...n,context:e}))}},Be=`modulepreload`,Ve=function(e){return`/`+e},He={};const Ue=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Ve(t,n),t in He)return;He[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Be,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var We=`popstate`;function Ge(e={}){function t(e,t){let{pathname:n,search:r,hash:i}=e.location;return Je(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){return typeof t==`string`?t:Ye(t)}return Ze(t,n,null,e)}function O(e,t){if(e===!1||e==null)throw Error(t)}function k(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function Ke(){return Math.random().toString(36).substring(2,10)}function qe(e,t){return{usr:e.state,key:e.key,idx:t}}function Je(e,t,n=null,r){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?Xe(t):t,state:n,key:t&&t.key||r||Ke()}}function Ye({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function Xe(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Ze(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=Je(h.location,e,t);n&&n(r,e),l=u()+1;let d=qe(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=Je(h.location,e,t);n&&n(r,e),l=u();let i=qe(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return Qe(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(We,d),c=e,()=>{i.removeEventListener(We,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function Qe(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),O(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:Ye(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function $e(e,t,n=`/`){return et(e,t,n,!1)}function et(e,t,n,r){let i=vt((typeof t==`string`?Xe(t):t).pathname||`/`,n);if(i==null)return null;let a=nt(e);it(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=_t(i);o=mt(a[e],t,r)}return o}function tt(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function nt(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;O(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Et([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(O(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),nt(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ft(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of rt(e.path))a(e,t,!0,n)}),t}function rt(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=rt(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function it(e){e.sort((e,t)=>e.score===t.score?pt(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var at=/^:[\w-]+$/,ot=3,st=2,ct=1,lt=10,ut=-2,dt=e=>e===`*`;function ft(e,t){let n=e.split(`/`),r=n.length;return n.some(dt)&&(r+=ut),t&&(r+=st),n.filter(e=>!dt(e)).reduce((e,t)=>e+(at.test(t)?ot:t===``?ct:lt),r)}function pt(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function mt(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=ht({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ht({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Et([a,u.pathname]),pathnameBase:Dt(Et([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Et([a,u.pathnameBase]))}return o}function ht(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=gt(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function gt(e,t=!1,n=!0){k(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`)).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function _t(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return k(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function vt(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var yt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bt=e=>yt.test(e);function xt(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?Xe(e):e,a;if(n)if(bt(n))a=n;else{if(n.includes(`//`)){let e=n;n=n.replace(/\/\/+/g,`/`),k(!1,`Pathnames cannot have embedded double slashes - normalizing ${e} -> ${n}`)}a=n.startsWith(`/`)?St(n.substring(1),`/`):St(n,t)}else a=t;return{pathname:a,search:Ot(r),hash:kt(i)}}function St(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ct(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wt(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Tt(e){let t=wt(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function A(e,t,n,r=!1){let i;typeof e==`string`?i=Xe(e):(i={...e},O(!i.pathname||!i.pathname.includes(`?`),Ct(`?`,`pathname`,`search`,i)),O(!i.pathname||!i.pathname.includes(`#`),Ct(`#`,`pathname`,`hash`,i)),O(!i.search||!i.search.includes(`#`),Ct(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=xt(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Et=e=>e.join(`/`).replace(/\/\/+/g,`/`),Dt=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Ot=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,kt=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function At(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var jt=b.createContext(null);jt.displayName=`DataRouter`;var Mt=b.createContext(null);Mt.displayName=`DataRouterState`,b.createContext(!1);var Nt=b.createContext({isTransitioning:!1});Nt.displayName=`ViewTransition`;var Pt=b.createContext(new Map);Pt.displayName=`Fetchers`;var Ft=b.createContext(null);Ft.displayName=`Await`;var It=b.createContext(null);It.displayName=`Navigation`;var Lt=b.createContext(null);Lt.displayName=`Location`;var Rt=b.createContext({outlet:null,matches:[],isDataRoute:!1});Rt.displayName=`Route`;var zt=b.createContext(null);zt.displayName=`RouteError`;function Bt(e,{relative:t}={}){O(Vt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=b.useContext(It),{hash:i,pathname:a,search:o}=Jt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Et([n,a])),r.createHref({pathname:s,search:o,hash:i})}function Vt(){return b.useContext(Lt)!=null}function Ht(){return O(Vt(),`useLocation() may be used only in the context of a <Router> component.`),b.useContext(Lt).location}var Ut=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Wt(e){b.useContext(It).static||b.useLayoutEffect(e)}function Gt(){let{isDataRoute:e}=b.useContext(Rt);return e?dn():Kt()}function Kt(){O(Vt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=b.useContext(jt),{basename:t,navigator:n}=b.useContext(It),{matches:r}=b.useContext(Rt),{pathname:i}=Ht(),a=JSON.stringify(Tt(r)),o=b.useRef(!1);return Wt(()=>{o.current=!0}),b.useCallback((r,s={})=>{if(k(o.current,Ut),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=A(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Et([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}b.createContext(null);function qt(){let{matches:e}=b.useContext(Rt),t=e[e.length-1];return t?t.params:{}}function Jt(e,{relative:t}={}){let{matches:n}=b.useContext(Rt),{pathname:r}=Ht(),i=JSON.stringify(Tt(n));return b.useMemo(()=>A(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Yt(e,t){return Xt(e,t)}function Xt(e,t,n,r,i){O(Vt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:a}=b.useContext(It),{matches:o}=b.useContext(Rt),s=o[o.length-1],c=s?s.params:{},l=s?s.pathname:`/`,u=s?s.pathnameBase:`/`,d=s&&s.route;{let e=d&&d.path||``;pn(l,!d||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let f=Ht(),p;if(t){let e=typeof t==`string`?Xe(t):t;O(u===`/`||e.pathname?.startsWith(u),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${e.pathname}" was given in the \`location\` prop.`),p=e}else p=f;let m=p.pathname||`/`,h=m;if(u!==`/`){let e=u.replace(/^\//,``).split(`/`);h=`/`+m.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let g=$e(e,{pathname:h});k(d||g!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),k(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=en(g&&g.map(e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:Et([u,a.encodeLocation?a.encodeLocation(e.pathname.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?u:Et([u,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),o,n,r,i);return t&&_?b.createElement(Lt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,...p},navigationType:`POP`}},_):_}function j(){let e=un(),t=At(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=b.createElement(b.Fragment,null,b.createElement(`p`,null,`💿 Hey developer 👋`),b.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,b.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,b.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),b.createElement(b.Fragment,null,b.createElement(`h2`,null,`Unexpected Application Error!`),b.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?b.createElement(`pre`,{style:i},n):null,o)}var Zt=b.createElement(j,null),Qt=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){return this.state.error===void 0?this.props.children:b.createElement(Rt.Provider,{value:this.props.routeContext},b.createElement(zt.Provider,{value:this.state.error,children:this.props.component}))}};function $t({routeContext:e,match:t,children:n}){let r=b.useContext(jt);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(Rt.Provider,{value:e},n)}function en(e,t=[],n=null,r=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);O(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(`,`)}`),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}let l=n&&r?(e,t)=>{r(e,{location:n.location,params:n.matches?.[0]?.params??{},errorInfo:t})}:void 0;return a.reduceRight((e,r,i)=>{let u,d=!1,f=null,p=null;n&&(u=o&&r.route.id?o[r.route.id]:void 0,f=r.route.errorElement||Zt,s&&(c<0&&i===0?(pn(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):c===i&&(d=!0,p=r.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,i+1)),h=()=>{let t;return t=u?f:d?p:r.route.Component?b.createElement(r.route.Component,null):r.route.element?r.route.element:e,b.createElement($t,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?b.createElement(Qt,{location:n.location,revalidation:n.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function tn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nn(e){let t=b.useContext(jt);return O(t,tn(e)),t}function rn(e){let t=b.useContext(Mt);return O(t,tn(e)),t}function an(e){let t=b.useContext(Rt);return O(t,tn(e)),t}function on(e){let t=an(e),n=t.matches[t.matches.length-1];return O(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function sn(){return on(`useRouteId`)}function cn(){return rn(`useNavigation`).navigation}function ln(){let{matches:e,loaderData:t}=rn(`useMatches`);return b.useMemo(()=>e.map(e=>tt(e,t)),[e,t])}function un(){let e=b.useContext(zt),t=rn(`useRouteError`),n=on(`useRouteError`);return e===void 0?t.errors?.[n]:e}function dn(){let{router:e}=nn(`useNavigate`),t=on(`useNavigate`),n=b.useRef(!1);return Wt(()=>{n.current=!0}),b.useCallback(async(r,i={})=>{k(n.current,Ut),n.current&&(typeof r==`number`?e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var fn={};function pn(e,t,n){!t&&!fn[e]&&(fn[e]=!0,k(!1,n))}b.memo(mn);function mn({routes:e,future:t,state:n,unstable_onError:r}){return Xt(e,void 0,n,r,t)}function hn(e){O(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function gn({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1}){O(!Vt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let o=e.replace(/^\/*/,`/`),s=b.useMemo(()=>({basename:o,navigator:i,static:a,future:{}}),[o,i,a]);typeof n==`string`&&(n=Xe(n));let{pathname:c=`/`,search:l=``,hash:u=``,state:d=null,key:f=`default`}=n,p=b.useMemo(()=>{let e=vt(c,o);return e==null?null:{location:{pathname:e,search:l,hash:u,state:d,key:f},navigationType:r}},[o,c,l,u,d,f,r]);return k(p!=null,`<Router basename="${o}"> is not able to match the URL "${c}${l}${u}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:b.createElement(It.Provider,{value:s},b.createElement(Lt.Provider,{children:t,value:p}))}function _n({children:e,location:t}){return Yt(vn(e),t)}function vn(e,t=[]){let n=[];return b.Children.forEach(e,(e,r)=>{if(!b.isValidElement(e))return;let i=[...t,r];if(e.type===b.Fragment){n.push.apply(n,vn(e.props.children,i));return}O(e.type===hn,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),O(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=vn(e.props.children,i)),n.push(a)}),n}var yn=`get`,bn=`application/x-www-form-urlencoded`;function xn(e){return e!=null&&typeof e.tagName==`string`}function Sn(e){return xn(e)&&e.tagName.toLowerCase()===`button`}function Cn(e){return xn(e)&&e.tagName.toLowerCase()===`form`}function wn(e){return xn(e)&&e.tagName.toLowerCase()===`input`}function Tn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function En(e,t){return e.button===0&&(!t||t===`_self`)&&!Tn(e)}var Dn=null;function On(){if(Dn===null)try{new FormData(document.createElement(`form`),0),Dn=!1}catch{Dn=!0}return Dn}var kn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function An(e){return e!=null&&!kn.has(e)?(k(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bn}"`),null):e}function jn(e,t){let n,r,i,a,o;if(Cn(e)){let o=e.getAttribute(`action`);r=o?vt(o,t):null,n=e.getAttribute(`method`)||yn,i=An(e.getAttribute(`enctype`))||bn,a=new FormData(e)}else if(Sn(e)||wn(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?vt(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||yn,i=An(e.getAttribute(`formenctype`))||An(o.getAttribute(`enctype`))||bn,a=new FormData(o,e),!On()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(xn(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=yn,r=null,i=bn,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function Mn(e,t){if(e===!1||e==null)throw Error(t)}function Nn(e,t,n){let r=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return r.pathname===`/`?r.pathname=`_root.${n}`:t&&vt(r.pathname,t)===`/`?r.pathname=`${t.replace(/\/$/,``)}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,``)}.${n}`,r}async function Pn(e,t){if(e.id in t)return t[e.id];try{let n=await Ue(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fn(e){return e!=null&&typeof e.page==`string`}function In(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function Ln(e,t,n){return Hn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Pn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(In).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function Rn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function zn(e,t,{includeHydrateFallback:n}={}){return Bn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Bn(e){return[...new Set(e)]}function Vn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Hn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Fn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Vn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Un(){let e=b.useContext(jt);return Mn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Wn(){let e=b.useContext(Mt);return Mn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Gn=b.createContext(void 0);Gn.displayName=`FrameworkContext`;function Kn(){let e=b.useContext(Gn);return Mn(e,`You must render this element inside a <HydratedRouter> element`),e}function qn(e,t){let n=b.useContext(Gn),[r,i]=b.useState(!1),[a,o]=b.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=b.useRef(null);b.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),b.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Jn(s,p),onBlur:Jn(c,m),onMouseEnter:Jn(l,p),onMouseLeave:Jn(u,m),onTouchStart:Jn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Jn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Yn({page:e,...t}){let{router:n}=Un(),r=b.useMemo(()=>$e(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?b.createElement(Zn,{page:e,matches:r,...t}):null}function Xn(e){let{manifest:t,routeModules:n}=Kn(),[r,i]=b.useState([]);return b.useEffect(()=>{let r=!1;return Ln(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Zn({page:e,matches:t,...n}){let r=Ht(),{manifest:i,routeModules:a}=Kn(),{basename:o}=Un(),{loaderData:s,matches:c}=Wn(),l=b.useMemo(()=>Rn(e,t,c,i,r,`data`),[e,t,c,i,r]),u=b.useMemo(()=>Rn(e,t,c,i,r,`assets`),[e,t,c,i,r]),d=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,c=!1;if(t.forEach(e=>{let t=i.routes[e.route.id];!t||!t.hasLoader||(!l.some(t=>t.route.id===e.route.id)&&e.route.id in s&&a[e.route.id]?.shouldRevalidate||t.hasClientLoader?c=!0:n.add(e.route.id))}),n.size===0)return[];let u=Nn(e,o,`data`);return c&&n.size>0&&u.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[u.pathname+u.search]},[o,s,r,i,l,t,e,a]),f=b.useMemo(()=>zn(u,i),[u,i]),p=Xn(u);return b.createElement(b.Fragment,null,d.map(e=>b.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),f.map(e=>b.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),p.map(({key:e,link:t})=>b.createElement(`link`,{key:e,nonce:n.nonce,...t})))}function Qn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var $n=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{$n&&(window.__reactRouterVersion=`7.9.6`)}catch{}function er({basename:e,children:t,window:n}){let r=b.useRef();r.current??=Ge({window:n,v5Compat:!0});let i=r.current,[a,o]=b.useState({action:i.action,location:i.location}),s=b.useCallback(e=>{b.startTransition(()=>o(e))},[o]);return b.useLayoutEffect(()=>i.listen(s),[i,s]),b.createElement(gn,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:i})}function tr({basename:e,children:t,history:n}){let[r,i]=b.useState({action:n.action,location:n.location}),a=b.useCallback(e=>{b.startTransition(()=>i(e))},[i]);return b.useLayoutEffect(()=>n.listen(a),[n,a]),b.createElement(gn,{basename:e,children:t,location:r.location,navigationType:r.action,navigator:n})}tr.displayName=`unstable_HistoryRouter`;var nr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M=b.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,state:o,target:s,to:c,preventScrollReset:l,viewTransition:u,...d},f){let{basename:p}=b.useContext(It),m=typeof c==`string`&&nr.test(c),h,g=!1;if(typeof c==`string`&&m&&(h=c,$n))try{let e=new URL(window.location.href),t=c.startsWith(`//`)?new URL(e.protocol+c):new URL(c),n=vt(t.pathname,p);t.origin===e.origin&&n!=null?c=n+t.search+t.hash:g=!0}catch{k(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=Bt(c,{relative:r}),[v,y,x]=qn(n,d),S=lr(c,{replace:a,state:o,target:s,preventScrollReset:l,relative:r,viewTransition:u});function C(t){e&&e(t),t.defaultPrevented||S(t)}let ee=b.createElement(`a`,{...d,...x,href:h||_,onClick:g||i?e:C,ref:Qn(f,y),target:s,"data-discover":!m&&t===`render`?`true`:void 0});return v&&!m?b.createElement(b.Fragment,null,ee,b.createElement(Yn,{page:_})):ee});M.displayName=`Link`;var rr=b.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Jt(a,{relative:c.relative}),d=Ht(),f=b.useContext(Mt),{navigator:p,basename:m}=b.useContext(It),h=f!=null&&yr(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=vt(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},ee=x?e:void 0,te;te=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(C):i;return b.createElement(M,{...c,"aria-current":ee,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(C):s)});rr.displayName=`NavLink`;var ir=b.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=yn,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,...f},p)=>{let m=fr(),h=pr(s,{relative:l}),g=o.toLowerCase()===`get`?`get`:`post`,_=typeof s==`string`&&nr.test(s);return b.createElement(`form`,{ref:p,method:g,action:h,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o;m(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d})},...f,"data-discover":!_&&e===`render`?`true`:void 0})});ir.displayName=`Form`;function ar({getKey:e,storageKey:t,...n}){let r=b.useContext(Gn),{basename:i}=b.useContext(It),a=Ht(),o=ln();_r({getKey:e,storageKey:t});let s=b.useMemo(()=>{if(!r||!e)return null;let t=gr(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return b.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${JSON.stringify(t||mr)}, ${JSON.stringify(s)})`}})}ar.displayName=`ScrollRestoration`;function or(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sr(e){let t=b.useContext(jt);return O(t,or(e)),t}function cr(e){let t=b.useContext(Mt);return O(t,or(e)),t}function lr(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:a,viewTransition:o}={}){let s=Gt(),c=Ht(),l=Jt(e,{relative:a});return b.useCallback(u=>{En(u,t)&&(u.preventDefault(),s(e,{replace:n===void 0?Ye(c)===Ye(l):n,state:r,preventScrollReset:i,relative:a,viewTransition:o}))},[c,s,l,n,r,t,e,i,a,o])}var ur=0,dr=()=>`__${String(++ur)}__`;function fr(){let{router:e}=sr(`useSubmit`),{basename:t}=b.useContext(It),n=sn();return b.useCallback(async(r,i={})=>{let{action:a,method:o,encType:s,formData:c,body:l}=jn(r,t);if(i.navigate===!1){let t=i.fetcherKey||dr();await e.fetch(t,n,i.action||a,{preventScrollReset:i.preventScrollReset,formData:c,body:l,formMethod:i.method||o,formEncType:i.encType||s,flushSync:i.flushSync})}else await e.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:c,body:l,formMethod:i.method||o,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function pr(e,{relative:t}={}){let{basename:n}=b.useContext(It),r=b.useContext(Rt);O(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Jt(e||`.`,{relative:t})},o=Ht();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Et([n,a.pathname])),Ye(a)}var mr=`react-router-scroll-positions`,hr={};function gr(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:vt(e.pathname,n)||e.pathname},t)),i??=e.key,i}function _r({getKey:e,storageKey:t}={}){let{router:n}=sr(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=cr(`useScrollRestoration`),{basename:a}=b.useContext(It),o=Ht(),s=ln(),c=cn();b.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),vr(b.useCallback(()=>{if(c.state===`idle`){let t=gr(o,s,a,e);hr[t]=window.scrollY}try{sessionStorage.setItem(t||mr,JSON.stringify(hr))}catch(e){k(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(b.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||mr);e&&(hr=JSON.parse(e))}catch{}},[t]),b.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(hr,()=>window.scrollY,e?(t,n)=>gr(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),b.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{k(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function vr(e,t){let{capture:n}=t||{};b.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function yr(e,{relative:t}={}){let n=b.useContext(Nt);O(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=sr(`useViewTransitionState`),i=Jt(e,{relative:t});if(!n.isTransitioning)return!1;let a=vt(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=vt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ht(i.pathname,o)!=null||ht(i.pathname,a)!=null}var br=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),N=c(o(((e,t)=>{t.exports=br()}))(),1),xr=(0,b.createContext)(),Sr={currentStep:1,tentSize:{width:4,depth:4,height:7,unit:`ft`},mediaType:null,selectedItems:{lighting:[],ventilation:[],environment:[],nutrients:[],monitoring:[]},totals:{cost:0,power:0,cfmRequired:0}};function Cr(e){let t=0,n=0;Object.values(e.selectedItems).flat().forEach(e=>{let r=e.quantity||1;t+=(e.price||0)*r,n+=(e.watts||0)*r});let{width:r,depth:i,height:a}=e.tentSize,o=r*i*a,s=Math.ceil(o*1.2);return{cost:t,power:n,cfmRequired:s}}function wr(e,t){switch(t.type){case`NEXT_STEP`:return{...e,currentStep:Math.min(e.currentStep+1,8)};case`PREV_STEP`:return{...e,currentStep:Math.max(e.currentStep-1,1)};case`SET_STEP`:return{...e,currentStep:t.payload};case`SET_TENT_SIZE`:{let n={...e,tentSize:t.payload};return{...n,totals:Cr(n)}}case`SET_MEDIA_TYPE`:return{...e,mediaType:t.payload,selectedItems:{...e.selectedItems,nutrients:[]}};case`ADD_ITEM`:{let{category:n,item:r}=t.payload,i=e.selectedItems[n].find(e=>e.id===r.id),a;a=i?{...e.selectedItems,[n]:e.selectedItems[n].map(e=>e.id===r.id?{...e,quantity:(e.quantity||1)+1}:e)}:{...e.selectedItems,[n]:[...e.selectedItems[n],{...r,quantity:1}]};let o={...e,selectedItems:a};return{...o,totals:Cr(o)}}case`INCREMENT_ITEM`:{let{category:n,itemId:r}=t.payload,i={...e.selectedItems,[n]:e.selectedItems[n].map(e=>e.id===r?{...e,quantity:(e.quantity||1)+1}:e)},a={...e,selectedItems:i};return{...a,totals:Cr(a)}}case`DECREMENT_ITEM`:{let{category:n,itemId:r}=t.payload,i=e.selectedItems[n].find(e=>e.id===r),a;a=i&&i.quantity<=1?{...e.selectedItems,[n]:e.selectedItems[n].filter(e=>e.id!==r)}:{...e.selectedItems,[n]:e.selectedItems[n].map(e=>e.id===r?{...e,quantity:e.quantity-1}:e)};let o={...e,selectedItems:a};return{...o,totals:Cr(o)}}case`REMOVE_ITEM`:{let{category:n,itemId:r}=t.payload,i={...e.selectedItems,[n]:e.selectedItems[n].filter(e=>e.id!==r)},a={...e,selectedItems:i};return{...a,totals:Cr(a)}}case`UPDATE_ITEM_POSITIONS`:{let{category:n,itemId:r,positions:i}=t.payload,a={...e.selectedItems,[n]:e.selectedItems[n].map(e=>e.id===r?{...e,positions:i}:e)};return{...e,selectedItems:a}}case`RESET`:return Sr;default:return e}}function Tr({children:e}){let[t,n]=(0,b.useReducer)(wr,Sr);return(0,N.jsx)(xr.Provider,{value:{state:t,dispatch:n},children:e})}function Er(){let e=(0,b.useContext)(xr);if(!e)throw Error(`useBuilder must be used within a BuilderProvider`);return e}const Dr={en:{step1:`Tent`,step2:`LIGHTS`,step3:`Ventilation`,step4:`Environment`,step5_media:`Medium`,step5:`Medium`,step6:`Nutrients`,step7:`Monitoring`,step8:`Summary`,next:`Next Step`,back:`Back`,finish:`Finish`,selectTent:`Select Tent Size`,tentDesc:`Choose a tent size that fits your space. This will determine the requirements for all other components.`,customDim:`Enter Custom Dimensions`,dimensions:`Dimensions`,area:`Area`,volume:`Volume`,width:`Width`,depth:`Depth`,height:`Height`,yourSpace:`Your Space`,recPower:`Recommended Power`,bestFit:`Best Fit`,coverage:`Coverage`,remainingCoverage:`Remaining Coverage`,reqCFM:`Required Airflow`,selFanPower:`Selected Fan Power`,inlineFans:`Inline Fans`,circFans:`Circulation Fans`,envDesc:`Select equipment to control temperature and humidity.`,humidifiers:`Humidifiers`,dehumidifiers:`Dehumidifiers`,heaters:`Heaters`,acs:`AC Units`,selectMedia:`Select Growing Medium`,mediaDesc:`Your choice of growing medium determines your watering style and nutrient requirements.`,mediaSoil:`Soil`,mediaSoilDesc:`Traditional, forgiving, great for beginners.`,mediaCoco:`Coco Coir`,mediaCocoDesc:`Hydroponic-like growth with soil-like feel.`,mediaHydro:`Hydroponics`,mediaHydroDesc:`Fastest growth, requires monitoring.`,nutesDesc:`Select nutrients and additives compatible with your chosen medium.`,monitorDesc:`Select devices to monitor and control your environment.`,buildingSetup:`Building your perfect setup...`,estCost:`Est. Cost`,power:`Power`,fullycovered:`Fully Covered!`,needMoreLight:`Need more light coverage`,yourSetup:`Your Setup`,reviewDesc:`Review your complete grow tent setup below.`,compatWarn:`Compatibility Warning`,warnLight:`Your selected fan may not provide enough airflow. Consider upgrading.`,warnCFM:`Your fan provides {cfm} CFM but you need {req} CFM for proper ventilation.`,totalEst:`Total Estimate`,tentDetails:`Tent Details`,equipCost:`Equipment Cost`,totalPower:`Total Power Draw`,estMonthly:`Est. Monthly Cost`,powerNote:`Based on 18hrs/day @ $0.12/kWh`,startOver:`Start Over`,restartConfirm:`Are you sure you want to start over? This will reset all your selections.`,printPdf:`Print / Save PDF`,knowledgeBase:`Knowledge Base`,knowledgeBaseSubtitle:`Expert guides, tips, and deep dives into plant technology.`,featuredArticle:`FEATURED ARTICLE`,blogCategoriesLabel:`blog categories :`,categoryAll:`All`,categoryLighting:`Lighting`,categoryHydroponics:`Hydroponics`,categoryEnvironment:`Environment`,categoryAutomation:`Automation`,categoryTraining:`Training`,categoryNutrients:`Nutrients`,categoryHarvest:`Harvest`,footer:`GroWizard © 2025 - Built for growers, by growers.`},tr:{step1:`Çadır`,step2:`Işık`,step3:`Havalandırma`,step4:`İklimlendirme`,step5_media:`Medya`,step5:`Medya`,step6:`Besinler`,step7:`Takip`,step8:`Özet`,next:`Sonraki Adım`,back:`Geri`,finish:`Bitir`,selectTent:`Çadır Boyutu Seçin`,tentDesc:`Alanınıza uygun bir çadır boyutu seçin. Bu, diğer tüm bileşenlerin gereksinimlerini belirleyecektir.`,customDim:`Özel Boyut Girin`,dimensions:`Boyutlar`,area:`Alan`,volume:`Hacim`,width:`Genişlik`,depth:`Derinlik`,height:`Yükseklik`,yourSpace:`Alanınız`,recPower:`Önerilen Güç`,bestFit:`En Uygun`,coverage:`Kapsama Alanı`,remainingCoverage:`Kalan Kapsama Alanı`,lightPlacementTitle:`Işık Yerleşimi ve PPFD Haritası`,dragTip:`Taşımak için sürükleyin. 90° döndürmek için çift tıklayın.`,avgPPFD:`Ort. PPFD`,minPPFD:`Min PPFD`,maxPPFD:`Maks PPFD`,uniformity:`Homojenlik`,tentFloor:`Çadır Tabanı`,seedling:`Fidan`,veg:`Vejetasyon`,flower:`Çiçeklenme`,high:`Yüksek`,low:`Düşük`,reqCFM:`Gerekli Hava Akışı`,selFanPower:`Seçilen Fan Gücü`,inlineFans:`Kanal Tipi Fanlar`,circFans:`Sirkülasyon Fanları`,envDesc:`Sıcaklık ve nemi kontrol etmek için ekipman seçin.`,humidifiers:`Nemlendiriciler`,dehumidifiers:`Nem Alma Cihazları`,heaters:`Isıtıcılar`,acs:`Klimalar`,selectMedia:`Yetiştirme Medyası Seçin`,mediaDesc:`Yetiştirme medyası seçiminiz, sulama tarzınızı ve besin gereksinimlerinizi belirleyecektir.`,mediaSoil:`Toprak`,mediaSoilDesc:`Geleneksel, bağışlayıcı, yeni başlayanlar için harika.`,mediaCoco:`Hindistan Cevizi Lifi`,mediaCocoDesc:`Toprak hissi ile hidroponik benzeri büyüme.`,mediaHydro:`Hidroponik`,mediaHydroDesc:`En hızlı büyüme, izleme gerektirir.`,nutesDesc:`Seçtiğiniz medyaya uygun besinleri ve katkı maddelerini seçin.`,monitorDesc:`Ortamınızı izlemek ve kontrol etmek için cihazlar seçin.`,buildingSetup:`Mükemmel kurulumunuzu oluşturuyoruz...`,estCost:`Tahmini Maliyet`,power:`Güç`,fullycovered:`Tamamen Kapsandı!`,needMoreLight:`Daha fazla ışık kapsamı gerekiyor`,yourSetup:`Kurulumunuz`,reviewDesc:`Tam büyütme çadırı kurulumunuzu aşağıda inceleyin.`,compatWarn:`Uyumluluk Uyarısı`,warnLight:`Seçtiğiniz fan yeterli hava akışı sağlamayabilir. Yükseltmeyi düşünün.`,warnCFM:`Fanınız {cfm} CFM sağlıyor ancak düzgün havalandırma için {req} CFM gerekiyor.`,totalEst:`Toplam Tahmin`,tentDetails:`Çadır Detayları`,equipCost:`Ekipman Maliyeti`,totalPower:`Toplam Güç Tüketimi`,estMonthly:`Tahmini Aylık Maliyet`,powerNote:`Günde 18 saat @ $0.12/kWh baz alınarak`,startOver:`Baştan Başla`,restartConfirm:`Baştan başlamak istediğinizden emin misiniz? Bu, tüm seçimlerinizi sıfırlayacaktır.`,printPdf:`Yazdır / PDF Kaydet`,knowledgeBase:`Bilgi Bankası`,knowledgeBaseSubtitle:`Bitki teknolojisine dair uzman rehberleri, ipuçları ve derinlemesine incelemeler.`,featuredArticle:`ÖNE ÇIKAN MAKALE`,blogCategoriesLabel:`blog kategorileri :`,categoryAll:`Tümü`,categoryLighting:`Aydınlatma`,categoryHydroponics:`Hidroponik`,categoryEnvironment:`Ortam`,categoryAutomation:`Otomasyon`,categoryTraining:`Eğitim`,categoryNutrients:`Besinler`,categoryHarvest:`Hasat`,footer:`GroWizard © 2025 - Yetiştiriciler için, yetiştiriciler tarafından yapıldı.`}};var Or=(0,b.createContext)();const kr={USD:{symbol:`$`,rate:1},EUR:{symbol:`€`,rate:.92},TRY:{symbol:`₺`,rate:32.5}};var Ar=()=>(navigator.language||navigator.userLanguage).toLowerCase().startsWith(`tr`)?`tr`:`en`,jr=()=>localStorage.getItem(`language`)||Ar(),Mr=()=>localStorage.getItem(`currency`)||(jr()===`tr`?`TRY`:`USD`),Nr=()=>localStorage.getItem(`unitSystem`)||(jr()===`tr`?`METRIC`:`IMPERIAL`);function Pr({children:e}){let[t,n]=(0,b.useState)(jr),[r,i]=(0,b.useState)(Mr),[a,o]=(0,b.useState)(Nr),s=e=>{n(e),localStorage.setItem(`language`,e),e===`tr`?(c(`TRY`),l(`METRIC`)):e===`en`&&(c(`USD`),l(`IMPERIAL`))},c=e=>{i(e),localStorage.setItem(`currency`,e),e===`EUR`||e===`TRY`?l(`METRIC`):e===`USD`&&l(`IMPERIAL`)},l=e=>{o(e),localStorage.setItem(`unitSystem`,e)};return(0,N.jsx)(Or.Provider,{value:{language:t,setLanguage:s,currency:r,setCurrency:c,unitSystem:a,setUnitSystem:l,t:(e,n={})=>{let r=Dr[t][e]||e;return Object.keys(n).forEach(e=>{r=r.replace(`{${e}}`,n[e])}),r},formatPrice:e=>{let{symbol:t,rate:n}=kr[r];return`${t}${(e*n).toFixed(2)}`},formatUnit:(e,t=`length`)=>a===`IMPERIAL`?e:t===`length`?(e*30.48).toFixed(0):t===`area`?(e*.0929).toFixed(2):t===`volume`?(e*.0283).toFixed(2):e,getUnitLabel:(e=`length`)=>{if(a===`IMPERIAL`){if(e===`length`)return`ft`;if(e===`area`)return`sq ft`;if(e===`volume`)return`cu ft`}else{if(e===`length`)return`cm`;if(e===`area`)return`m²`;if(e===`volume`)return`m³`}},getBuilderUrl:()=>t===`tr`?`/buyume-cadiri-kurulum-olusturucu`:`/grow-tent-setup-builder`},children:e})}function P(){return(0,b.useContext)(Or)}var Fr=(0,b.createContext)();const Ir=()=>{let e=(0,b.useContext)(Fr);if(!e)throw Error(`useOnboarding must be used within OnboardingProvider`);return e},Lr=({children:e})=>{let[t,n]=(0,b.useState)(()=>{let e=localStorage.getItem(`onboardingData`);return e?JSON.parse(e):{plantType:null,experienceLevel:null,tentSize:null,lightPreference:null,automationLevel:null,completed:!1}});return(0,b.useEffect)(()=>{localStorage.setItem(`onboardingData`,JSON.stringify(t))},[t]),(0,N.jsx)(Fr.Provider,{value:{onboardingData:t,updateOnboarding:(e,t)=>{n(n=>({...n,[e]:t}))},completeOnboarding:()=>{n(e=>({...e,completed:!0})),localStorage.setItem(`seenOnboarding`,`true`)},resetOnboarding:()=>{n({plantType:null,experienceLevel:null,tentSize:null,lightPreference:null,automationLevel:null,completed:!1}),localStorage.removeItem(`seenOnboarding`)},hasSeenOnboarding:()=>localStorage.getItem(`seenOnboarding`)===`true`},children:e})},Rr=[{id:1,slug:{en:`understanding-ppfd-key-to-massive-yields`,tr:`ppfd-anlamak-buyuk-verimler-icin-anahtar`},title:{en:`Understanding PPFD: The Key to Massive Yields`,tr:`PPFD'yi Anlamak: Büyük Verimler İçin Anahtar`},excerpt:{en:`Why lumens don't matter and how to measure the light your plants actually use for photosynthesis.`,tr:`Lümenlerin neden önemli olmadığını ve bitkilerinizin fotosentez için gerçekten kullandığı ışığı nasıl ölçeceğinizi öğrenin.`},category:`Lighting`,content:{en:`
        <p>When it comes to indoor growing, light is your most important variable. But not all light is created equal. Many beginners make the mistake of judging grow lights by their wattage or lumen output, but plants see light differently than humans do.</p>
        
        <h3>What is PPFD?</h3>
        <p><strong>Photosynthetic Photon Flux Density (PPFD)</strong> measures the amount of light (photons) that actually reaches your plant's canopy each second. It's measured in micromoles per square meter per second (μmol/m²/s).</p>
        
        <h3>Optimal Levels</h3>
        <ul>
          <li><strong>Seedlings:</strong> 200-400 μmol/m²/s</li>
          <li><strong>Vegetative:</strong> 400-600 μmol/m²/s</li>
          <li><strong>Flowering:</strong> 600-1000+ μmol/m²/s</li>
        </ul>
        
        <p>Using our <strong>Grow Wizard PPFD Simulator</strong>, you can visualize exactly how your light fixture performs in your specific tent size, ensuring you don't have any "hot spots" that burn plants or "dead zones" where growth stalls.</p>
      `,tr:`
        <p>Kapalı alanda yetiştiricilik söz konusu olduğunda, ışık en önemli değişkeninizdir. Ancak tüm ışıklar eşit yaratılmamıştır. Birçok yeni başlayan, büyüme ışıklarını watt veya lümen çıktısına göre değerlendirme hatası yapar, ancak bitkiler ışığı insanlardan farklı görür.</p>
        
        <h3>PPFD Nedir?</h3>
        <p><strong>Fotosentetik Foton Akı Yoğunluğu (PPFD)</strong>, her saniye bitkinizin tepesine ulaşan ışık (foton) miktarını ölçer. Mikromol/metrekare/saniye (μmol/m²/s) cinsinden ölçülür.</p>
        
        <h3>Optimum Seviyeler</h3>
        <ul>
          <li><strong>Fideler:</strong> 200-400 μmol/m²/s</li>
          <li><strong>Vejetatif:</strong> 400-600 μmol/m²/s</li>
          <li><strong>Çiçeklenme:</strong> 600-1000+ μmol/m²/s</li>
        </ul>
        
        <p><strong>Grow Wizard PPFD Simülatörü</strong>müzü kullanarak, ışık armatürünüzün belirli çadır boyutunuzda tam olarak nasıl performans gösterdiğini görselleştirebilir, bitkileri yakan "sıcak noktalar" veya büyümenin durduğu "ölü bölgeler" olmadığından emin olabilirsiniz.</p>
      `},author:`Dr. Green`,date:`October 15, 2025`,readTime:`5 min read`,image:`https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop`,tags:[`Lighting`,`Science`,`Guides`],quiz:[{question:{en:`What is the optimal PPFD range for the flowering stage?`,tr:`Çiçeklenme aşaması için optimum PPFD aralığı nedir?`},options:{en:[`200-400 μmol/m²/s`,`400-600 μmol/m²/s`,`600-1000+ μmol/m²/s`,`100-200 μmol/m²/s`],tr:[`200-400 μmol/m²/s`,`400-600 μmol/m²/s`,`600-1000+ μmol/m²/s`,`100-200 μmol/m²/s`]},correctAnswer:2,explanation:{en:`Flowering plants need intense light energy to produce dense buds, typically requiring 600-1000+ μmol/m²/s.`,tr:`Çiçeklenme bitkileri yoğun tomurcuklar üretmek için yoğun ışık enerjisine ihtiyaç duyar ve genellikle 600-1000+ μmol/m²/s gerektirir.`}},{question:{en:`What does PPFD measure?`,tr:`PPFD neyi ölçer?`},options:{en:[`Total light output of a bulb`,`Light intensity visible to humans`,`Light reaching the canopy used for photosynthesis`,`Heat emitted by the light`],tr:[`Bir ampulün toplam ışık çıktısı`,`İnsanlara görünen ışık yoğunluğu`,`Fotosentez için kullanılan kanopiye ulaşan ışık`,`Işığın yaydığı ısı`]},correctAnswer:2,explanation:{en:`PPFD measures the specific photons that land on the plant canopy and drive photosynthesis.`,tr:`PPFD, bitki tepesine inen ve fotosentezi yönlendiren belirli fotonları ölçer.`}},{question:{en:`Why are lumens not a good metric for grow lights?`,tr:`Lümenler neden büyüme ışıkları için iyi bir ölçüt değildir?`},options:{en:[`They are too hard to measure`,`They measure light based on human vision, not plant needs`,`They are only for incandescent bulbs`,`They are always inaccurate`],tr:[`Ölçülmesi çok zordur`,`İnsan görüşüne göre ışığı ölçer, bitki ihtiyaçlarına göre değil`,`Sadece akkor ampuller için geçerlidir`,`Her zaman yanlış`]},correctAnswer:1,explanation:{en:`Lumens are weighted to human sensitivity (green/yellow light), while plants use mostly red and blue light.`,tr:`Lümenler, insan duyarlılığına (yeşil/sarı ışık) göre ağırlıklandırılmıştır, oysa bitkiler çoğunlukla kırmızı ve mavi ışık kullanır.`}}]},{id:2,slug:{en:`hydroponics-vs-soil-which-is-right`,tr:`hidroponik-vs-toprak-hangisi-dogru`},title:{en:`Hydroponics vs. Soil: Which is Right for You?`,tr:`Hidroponik Mi, Toprak mı: Hangisi Sizin İçin Uygun?`},excerpt:{en:`A deep dive into the pros and cons of soil-less growing compared to traditional methods.`,tr:`Topraksız yetiştiriciliğin geleneksel yöntemlerle karşılaştırıldığında artılarını ve eksilerini derinlemesine inceleyin.`},category:`Hydroponics`,content:{en:`
        <p>The age-old debate: nature's way or the high-tech way? Both soil and hydroponic systems have their place in the modern grower's toolkit, but choosing the right one depends on your goals, budget, and experience level.</p>
        
        <h3>Soil Growing</h3>
        <p>Soil is forgiving. It buffers pH fluctuations and holds nutrients, giving you a safety net if you miss a feeding. It's often said to produce a more complex terpene profile, though yields may be slightly lower than hydro.</p>
        
        <h3>Hydroponics</h3>
        <p>Hydroponics is about speed and precision. By delivering nutrients directly to the roots in a highly oxygenated solution, plants can grow up to <strong>20-30% faster</strong>. However, things can go wrong quickly if a pump fails or pH drifts.</p>
        
        <blockquote>"Hydroponics is like driving a Formula 1 car; Soil is like driving a reliable pickup truck. Both get you there, but one requires a lot more attention."</blockquote>
      `,tr:`
        <p>Asırlık tartışma: doğanın yolu mu yoksa yüksek teknoloji mi? Hem toprak hem de hidroponik sistemlerin modern yetiştiricinin araç setinde bir yeri var, ancak doğru olanı seçmek hedeflerinize, bütçenize ve deneyim seviyenize bağlı.</p>
        
        <h3>Toprakta Yetiştirme</h3>
        <p>Toprak affedicidir. pH dalgalanmalarını tamponlar ve besin maddelerini tutar, bu da bir besin zamanlamasını kaçırırsanız size bir güvenlik ağı sağlar. Genellikle daha karmaşık bir terpen profili ürettiği söylenir, ancak verimler hidroponikten biraz daha düşük olabilir.</p>
        
        <h3>Hidroponik</h3>
        <p>Hidroponik, hız ve hassasiyetle ilgilidir. Besinleri doğrudan köklere, yüksek oranda oksijenlenmiş bir çözeltide ileterek, bitkiler <strong>%20-30 daha hızlı</strong> büyüyebilir. Ancak, bir pompa arızalanırsa veya pH kayarsa işler hızla ters gidebilir.</p>
        
        <blockquote>"Hidroponik, bir Formula 1 arabası sürmek gibidir; Toprak, güvenilir bir kamyonet sürmek gibidir. İkisi de sizi oraya götürür, ama biri çok daha fazla dikkat gerektirir."</blockquote>
      `},author:`Alex Flora`,date:`October 22, 2025`,readTime:`8 min read`,image:`https://images.unsplash.com/photo-1556559322-b5071efadc88?q=80&w=800&auto=format&fit=crop`,tags:[`Hydroponics`,`Soil`,`Basics`],quiz:[{question:{en:`Which growing method typically results in faster growth rates?`,tr:`Hangi yetiştirme yöntemi genellikle daha hızlı büyüme oranlarıyla sonuçlanır?`},options:{en:[`Soil`,`Hydroponics`,`Both are the same`,`Aeroponics only`],tr:[`Toprak`,`Hidroponik`,`Her ikisi aynı`,`Sadece Aeroponik`]},correctAnswer:1,explanation:{en:`Hydroponics delivers nutrients directly to the roots with high oxygen, allowing for 20-30% faster growth.`,tr:`Hidroponik, besinleri köklere doğrudan yüksek oksijenle ileterek %20-30 daha hızlı büyümeye olanak tanır.`}},{question:{en:`What is a main advantage of soil growing?`,tr:`Toprakta yetiştirmenin ana avantajı nedir?`},options:{en:[`It requires no nutrients`,`It is faster than hydro`,`It buffers pH and is more forgiving`,`It uses no water`],tr:[`Besin gerektirmez`,`Hidrodan daha hızlıdır`,`pH'ı tamponlar ve daha affedicidir`,`Hiç su kullanmaz`]},correctAnswer:2,explanation:{en:`Soil acts as a buffer for pH and nutrients, making it more forgiving of mistakes than hydroponics.`,tr:`Toprak, pH ve besinler için bir tampon görevi görerek, hidroponikten daha affedici hale getirir.`}},{question:{en:`What is a risk of hydroponics?`,tr:`Hidroponiğin bir riski nedir?`},options:{en:[`Plants grow too slow`,`System failures can damage plants quickly`,`It attracts more pests`,`It requires sunlight`],tr:[`Bitkiler çok yavaş büyür`,`Sistem arızaları bitkilere hızla zarar verebilir`,`Daha fazla zararlı çeker`,`Güneş ışığı gerektirir`]},correctAnswer:1,explanation:{en:`Because roots are exposed or in water, a pump failure or pH spike can damage plants very rapidly.`,tr:`Kökler suya maruz kaldığı veya suda olduğu için, bir pompa arızası veya pH dalgalanması bitkilere çok hızlı zarar verebilir.`}}]},{id:3,slug:{en:`automating-your-grow-tent`,tr:`buyume-cadirinizi-otomatiklestirmek`},title:{en:`Automating Your Grow Tent`,tr:`Büyüme Çadırınızı Otomatikleştirmek`},excerpt:{en:`How to use smart plugs, sensors, and controllers to put your garden on autopilot.`,tr:`Bahçenizi otomatik pilota almak için akıllı prizler, sensörler ve kontrolörler nasıl kullanılır.`},category:`Automation`,content:{en:`
        <p>Gone are the days of manually turning lights on and off. Modern grow technology allows you to monitor and control your environment from your smartphone, ensuring consistency that leads to top-shelf results.</p>
        
        <h3>Essential Automation</h3>
        <ol>
          <li><strong>Light Timers:</strong> The absolute bare minimum. Consistency is key for photoperiod plants.</li>
          <li><strong>Climate Controllers:</strong> Devices that trigger exhaust fans when temperature or humidity gets too high.</li>
          <li><strong>pH Monitors:</strong> Continuous monitoring of your reservoir's pH and EC levels.</li>
        </ol>
        
        <p>Automation doesn't just save time; it creates a stable environment that plants love. Less fluctuation means less stress, and less stress means bigger fruits and flowers.</p>
      `,tr:`
        <p>Işıkları manuel olarak açıp kapama günleri geride kaldı. Modern yetiştirme teknolojisi, ortamınızı akıllı telefonunuzdan izleyip kontrol etmenizi sağlar ve bu da üst düzey sonuçlara yol açan tutarlılığı garanti eder.</p>
        
        <h3>Temel Otomasyon</h3>
        <ol>
          <li><strong>Işık Zamanlayıcıları:</strong> Kesinlikle gerekli olanlar. Tutarlılık, fotoperiyodik bitkiler için anahtardır.</li>
          <li><strong>Iklim Kontrol Cihazları:</strong> Sıcaklık veya nem çok yükseldiğinde egzoz fanlarını devreye sokan cihazlar.</li>
          <li><strong>pH Monitörleri:</strong> Rezervuarınızdaki pH ve EC seviyelerinin sürekli izlenmesi.</li>
        </ol>
        
        <p>Otomasyon sadece zaman kazandırmakla kalmaz; aynı zamanda bitkilerin sevdiği stabil bir ortam yaratır. Daha az dalgalanma, daha az stres anlamına gelir ve daha az stres, daha büyük meyveler ve çiçekler demektir.</p>
      `},author:`Tech Grower`,date:`November 01, 2025`,readTime:`6 min read`,image:`/images/blog-automation.png`,tags:[`Automation`,`Tech`,`Smart Grow`],quiz:[{question:{en:`What is considered the 'absolute bare minimum' for automation?`,tr:`Otomasyon için 'kesinlikle gerekli olanlar' nelerdir?`},options:{en:[`pH Monitor`,`Climate Controller`,`Light Timer`,`Automatic Watering`],tr:[`pH Monitörü`,`İklim Kontrol Cihazı`,`Işık Zamanlayıcı`,`Otomatik Sulama`]},correctAnswer:2,explanation:{en:`Light timers are essential because consistent light cycles are critical for plant health and photoperiod regulation.`,tr:`Işık zamanlayıcıları, tutarlı ışık döngülerinin bitki sağlığı ve fotoperiyot düzenlemesi için kritik öneme sahip olduğu için gereklidir.`}},{question:{en:`Why is environmental consistency important?`,tr:`Çevresel tutarlılık neden önemlidir?`},options:{en:[`It saves electricity`,`It reduces plant stress`,`It looks cool`,`It is required by law`],tr:[`Elektrik tasarrufu sağlar`,`Bitkilerde stresi azaltır`,`Havalı görünür`,`Kanunen gereklidir`]},correctAnswer:1,explanation:{en:`Stable environments reduce stress on plants, allowing them to focus energy on growth and flower production.`,tr:`Stabil ortamlar, bitkiler üzerindeki stresi azaltır ve onların enerji odaklanmalarını sağlar. Bu da büyüme ve çiçek üretimini artırır.`}},{question:{en:`What does a climate controller typically control?`,tr:`Bir iklim kontrol cihazı genellikle neyi kontrol eder?`},options:{en:[`Nutrient levels`,`Exhaust fans and humidifiers`,`Light spectrum`,`Water temperature`],tr:[`Besin seviyeleri`,`Egzoz fanları ve nemlendiriciler`,`Işık spektrumu`,`Su sıcaklığı`]},correctAnswer:1,explanation:{en:`Climate controllers manage temperature and humidity by turning exhaust fans, humidifiers, or heaters on and off.`,tr:`İklim kontrol cihazları, egzoz fanlarını, nemlendiricileri veya ısıtıcıları açıp kapatarak sıcaklık ve nemi yönetir.`}}]},{id:4,slug:{en:`vpd-secret-to-perfect-transpiration`,tr:`vpd-mukemmel-transpirasyonun-sirri`},title:{en:`VPD: The Secret to Perfect Transpiration`,tr:`VPD: Mükemmel Transpirasyonun Sırrı`},excerpt:{en:`Vapor Pressure Deficit explained simply. Master this metric to optimize nutrient uptake.`,tr:`Buhar Basıncı Açığı basitçe açıklandı. Besin alımını optimize etmek için bu metriği ustalaşın.`},category:`Environment`,content:{en:`
        <p>Vapor Pressure Deficit (VPD) is the difference between the amount of moisture in the air and how much moisture the air can hold at saturation. It's the driving force behind transpiration—how plants move water and nutrients from roots to leaves.</p>
        
        <h3>Why VPD Matters</h3>
        <p>If VPD is too low (air is too humid), plants can't transpire, leading to mold and nutrient lockout. If VPD is too high (air is too dry), plants close their stomata to save water, halting photosynthesis.</p>
        
        <p>Aim for a VPD of <strong>0.8-1.1 kPa</strong> in veg and <strong>1.2-1.5 kPa</strong> in flower for optimal results.</p>
      `,tr:`
        <p>Buhar Basıncı Açığı (VPD), havadaki nem miktarı ile havanın doygunlukta tutabileceği nem miktarı arasındaki farktır. Bu, transpirasyonun arkasındaki itici güçtür - bitkilerin köklerden yapraklara su ve besin maddelerini nasıl taşıdığıdır.</p>
        
        <h3>Neden VPD Önemlidir</h3>
        <p>VPD çok düşükse (hava çok nemliysa), bitkiler transpirasyon yapamaz, bu da küf ve besin kilitlenmesine yol açar. VPD çok yüksekse (hava çok kuruysa), bitkiler su tasarrufu yapmak için stomalarını kapatır, fotosentezi durdurur.</p>
        
        <p>Optimal sonuçlar için vejetatif dönemde <strong>0.8-1.1 kPa</strong> ve çiçeklenme döneminde <strong>1.2-1.5 kPa</strong> VPD hedefleyin.</p>
      `},author:`Dr. Green`,date:`November 10, 2025`,readTime:`7 min read`,image:`https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop`,tags:[`Advanced`,`Environment`,`Science`],quiz:[{question:{en:`What happens if VPD is too low (air is too humid)?`,tr:`VPD çok düşükse (hava çok nemliysa) ne olur?`},options:{en:[`Plants dry out`,`Photosynthesis speeds up`,`Plants can't transpire efficiently`,`Nutrient uptake increases`],tr:[`Bitkiler kurur`,`Fotosentez hızlanır`,`Bitkiler verimli şekilde transpirasyon yapamaz`,`Besin alımı artar`]},correctAnswer:2,explanation:{en:`Low VPD means the air is saturated, making it difficult for plants to release water vapor (transpire), which slows nutrient transport.`,tr:`Düşük VPD, havanın doygun olduğu anlamına gelir, bu da bitkilerin su buharını (transpirasyon) serbest bırakmasını zorlaştırır ve bu da besin maddelerinin taşınmasını yavaşlatır.`}},{question:{en:`What is the recommended VPD range for the vegetative stage?`,tr:`Vejetatif dönem için önerilen VPD aralığı nedir?`},options:{en:[`0.4-0.8 kPa`,`0.8-1.1 kPa`,`1.2-1.5 kPa`,`1.5-2.0 kPa`],tr:[`0.4-0.8 kPa`,`0.8-1.1 kPa`,`1.2-1.5 kPa`,`1.5-2.0 kPa`]},correctAnswer:1,explanation:{en:`A VPD of 0.8-1.1 kPa is ideal for vegetative growth, balancing transpiration rates with humidity.`,tr:`0.8-1.1 kPa'lık bir VPD, vejetatif büyüme için idealdir ve transpirasyon oranları ile nem arasında bir denge sağlar.`}},{question:{en:`What drives transpiration in plants?`,tr:`Bitkilerde transpirasyonu ne tetikler?`},options:{en:[`Wind speed`,`Vapor Pressure Deficit (VPD)`,`Soil pH`,`Root size`],tr:[`Rüzgar hızı`,`Buhar Basıncı Açığı (VPD)`,`Toprak pH'ı`,`Kök boyutu`]},correctAnswer:1,explanation:{en:`VPD is the pressure difference that pulls water up from the roots and out through the leaves.`,tr:`VPD, suyu köklerden çekip yapraklar aracılığıyla dışarı atan basınç farkıdır.`}}]},{id:5,slug:{en:`training-techniques-lst-vs-hst`,tr:`egitim-teknikleri-lst-vs-hst`},title:{en:`Training Techniques: LST vs. HST`,tr:`Eğitim Teknikleri: LST ve HST`},excerpt:{en:`Maximize your canopy and yields by training your plants. Learn the difference between Low and High Stress Training.`,tr:`Bitkilerinizi eğiterek kanopi ve verimlerinizi maksimize edin. Düşük ve Yüksek Stres Eğitimi arasındaki farkı öğrenin.`},category:`Training`,content:{en:`
        <p>Plant training is the art of manipulating your plant's shape to expose more bud sites to light. In a grow tent, vertical space is limited, so training is essential for keeping plants short and wide.</p>
        
        <h3>Low Stress Training (LST)</h3>
        <p>LST involves gently bending and tying down stems to create an even canopy. It's safe, easy, and doesn't slow down growth. It's perfect for autoflowers or beginners.</p>
        
        <h3>High Stress Training (HST)</h3>
        <p>HST includes techniques like <strong>Topping</strong> (cutting the main tip) and <strong>Super Cropping</strong> (crushing the stem). These methods are traumatic but can dramatically increase yields by forcing the plant to build a stronger structure. HST requires a recovery period.</p>
      `,tr:`
        <p>Bitki eğitimi, bitkinizin şeklini manipüle ederek daha fazla tomurcuğun ışığa maruz kalmasını sağlama sanatıdır. Bir büyüme çadırında, dikey alan sınırlıdır, bu nedenle bitkileri kısa ve geniş tutmak için eğitim şarttır.</p>
        
        <h3>Düşük Stres Eğitimi (LST)</h3>
        <p>LST, gövdeyi nazikçe bükmeyi ve aşağıya bağlamayı içerir, böylece eşit bir kanopi oluşturulur. Güvenli, kolaydır ve büyümeyi yavaşlatmaz. Otomatik çiçekler veya yeni başlayanlar için mükemmeldir.</p>
        
        <h3>Yüksek Stres Eğitimi (HST)</h3>
        <p>HST, ana ucu kesmeyi (<strong>Topping</strong>) ve gövdeyi ezmeyi (<strong>Super Cropping</strong>) gibi teknikleri içerir. Bu yöntemler travmatik olabilir, ancak bitkinin daha güçlü bir yapı inşa etmesini zorlayarak verimleri dramatik şekilde artırabilir. HST, bir iyileşme süresi gerektirir.</p>
      `},author:`Master Trainer`,date:`November 15, 2025`,readTime:`6 min read`,image:`/images/blog-training.png`,tags:[`Training`,`Yields`,`Techniques`],quiz:[{question:{en:`What is the main goal of plant training?`,tr:`Bitki eğitiminin ana hedefi nedir?`},options:{en:[`To make the plant look pretty`,`To expose more bud sites to light and control height`,`To reduce water usage`,`To change the plant's color`],tr:[`Bitkiyi güzel göstermek için`,`Daha fazla tomurcuğu ışığa maruz bırakmak ve yüksekliği kontrol etmek`,`Su kullanımını azaltmak için`,`Bitkinin rengini değiştirmek için`]},correctAnswer:1,explanation:{en:`Training creates an even canopy, ensuring all bud sites receive equal light, which maximizes yield.`,tr:`Eğitim, eşit bir kanopi oluşturarak tüm tomurcuğun eşit ışık almasını sağlar ve bu da verimi maksimize eder.`}},{question:{en:`Which technique involves cutting the main tip of the plant?`,tr:`Hangi teknik bitkinin ana ucunu kesmeyi içerir?`},options:{en:[`LST`,`Topping (HST)`,`Watering`,`Defoliation`],tr:[`LST`,`Topping (HST)`,`Sulama`,`Yaprak alma`]},correctAnswer:1,explanation:{en:`Topping is a High Stress Training technique where the apical meristem is removed to break apical dominance.`,tr:`Topping, apikal dominansı kırmak için apikal meristemin çıkarıldığı Yüksek Stres Eğitimi tekniğidir.`}},{question:{en:`Why is LST recommended for autoflowers?`,tr:`Neden LST otomatik çiçekler için önerilir?`},options:{en:[`It is faster`,`Autoflowers have a short life and can't recover easily from HST`,`Autoflowers don't like light`,`LST increases height`],tr:[`Daha hızlıdır`,`Otomatik çiçeklerin kısa bir ömrü vardır ve HST'den kolayca toparlanamazlar`,`Otomatik çiçekler ışığı sevmez`,`LST yüksekliği artırır`]},correctAnswer:1,explanation:{en:`Autoflowers have a limited vegetative period. HST can stunt them, whereas LST allows training without recovery downtime.`,tr:`Otomatik çiçekler sınırlı bir vejetatif döneme sahiptir. HST onları duraklatabilirken, LST iyileşme süresi olmadan eğitim almalarına olanak tanır.`}}]},{id:6,slug:{en:`nutrient-basics-npk-explained`,tr:`besin-temelleri-npk-aciklandi`},title:{en:`Nutrient Basics: N-P-K Explained`,tr:`Besin Temelleri: N-P-K Açıklandı`},excerpt:{en:`Decoding the numbers on your fertilizer bottle. What Nitrogen, Phosphorus, and Potassium actually do.`,tr:`Gübre şişenizdeki rakamların şifresini çözmek. Azot, Fosfor ve Potasyum'un gerçekten ne yaptığı.`},category:`Nutrients`,content:{en:`
        <p>Every fertilizer bottle has three numbers on the front, like 4-4-4 or 2-8-4. These represent the percentage by weight of the three primary macronutrients: Nitrogen (N), Phosphorus (P), and Potassium (K).</p>
        
        <h3>The Big Three</h3>
        <ul>
          <li><strong>Nitrogen (N):</strong> Essential for leafy green growth. High demand during the vegetative stage.</li>
          <li><strong>Phosphorus (P):</strong> Crucial for root development and flower/fruit production. High demand during early flowering.</li>
          <li><strong>Potassium (K):</strong> Regulates water uptake and overall plant health. Important throughout the life cycle, especially in flowering.</li>
        </ul>
        
        <p>Using the wrong ratio at the wrong time can lead to nutrient burn or deficiencies. Always follow a feeding schedule designed for your specific medium.</p>
      `,tr:`
        <p>Her gübre şişesinin önünde 4-4-4 veya 2-8-4 gibi üç rakam bulunur. Bu rakamlar, üç ana makro besin maddesinin - Azot (N), Fosfor (P) ve Potasyum (K) - ağırlıkça yüzdesini temsil eder.</p>
        
        <h3>Üç Büyükler</h3>
        <ul>
          <li><strong>Azot (N):</strong> Yeşil yapraklı bitki büyümesi için gereklidir. Vejetatif dönemde yüksek talep görür.</li>
          <li><strong>Fosfor (P):</strong> Kök gelişimi ve çiçek/meyve üretimi için hayati öneme sahiptir. Erken çiçeklenme döneminde yüksek talep görür.</li>
          <li><strong>Potasyum (K):</strong> Su alımını ve genel bitki sağlığını düzenler. Tüm yaşam döngüsü boyunca, özellikle çiçeklenme döneminde önemlidir.</li>
        </ul>
        
        <p>Yanlış oranı yanlış zamanda kullanmak, besin yanığına veya eksikliklerine yol açabilir. Her zaman belirli ortamınıza göre tasarlanmış bir besin takviyesi programına uyun.</p>
      `},author:`Chem Grow`,date:`November 18, 2025`,readTime:`5 min read`,image:`/images/blog-nutrients.png`,tags:[`Nutrients`,`Basics`,`Chemistry`],quiz:[{question:{en:`What does the 'N' in N-P-K stand for?`,tr:`N-P-K'daki 'N' neyi ifade eder?`},options:{en:[`Nickel`,`Nitrogen`,`Neon`,`Neutron`],tr:[`Nikel`,`Azot`,`Neon`,`Nötron`]},correctAnswer:1,explanation:{en:`N stands for Nitrogen, the primary nutrient responsible for vegetative growth.`,tr:`N, vejetatif büyümeyi sağlayan birincil besin maddesi olan Azot'u ifade eder.`}},{question:{en:`Which nutrient is most important for leafy green growth?`,tr:`Hangi besin maddesi yeşil yapraklı bitki büyümesi için en önemlisidir?`},options:{en:[`Phosphorus`,`Potassium`,`Nitrogen`,`Calcium`],tr:[`Fosfor`,`Potasyum`,`Azot`,`Kalsiyum`]},correctAnswer:2,explanation:{en:`Nitrogen is a key component of chlorophyll and amino acids, driving leafy green growth.`,tr:`Azot, klorofil ve amino asitlerin ana bileşenidir ve yeşil yapraklı bitki büyümesini destekler.`}},{question:{en:`When is Phosphorus typically in highest demand?`,tr:`Fosfor genellikle en yüksek talep gördüğü zaman nedir?`},options:{en:[`Seedling stage`,`Vegetative stage`,`Early flowering and root development`,`Flushing stage`],tr:[`Fide aşaması`,`Vejetatif aşama`,`Erken çiçeklenme ve kök gelişimi`,`Yıkama aşaması`]},correctAnswer:2,explanation:{en:`Phosphorus is vital for energy transfer and the development of roots and flowers.`,tr:`Fosfor, enerji transferi ve kökler ile çiçeklerin gelişimi için hayati öneme sahiptir.`}}]},{id:7,slug:{en:`harvesting-the-perfect-moment`,tr:`hasat-mukemmel-an`},title:{en:`Harvesting: The Perfect Moment`,tr:`Harvesting: The Perfect Moment`},excerpt:{en:`Know exactly when to pick your tomatoes and peppers for maximum flavor and nutrition.`,tr:`Domates ve biberlerinizi maksimum lezzet ve besin değeri için ne zaman toplayacağınızı tam olarak bilin.`},category:`Harvest`,content:{en:`
        <p>After weeks of watering, feeding, and pruning, your indoor garden is finally bearing fruit. But when is the right time to pick? Harvesting at the perfect moment ensures the best flavor, texture, and nutritional value.</p>
        
        <h3>Tomatoes</h3>
        <p>For the best flavor, let tomatoes ripen fully on the vine. Look for:</p>
        <ul>
          <li><strong>Deep Color:</strong> They should be a rich, uniform red (or yellow/purple depending on variety).</li>
          <li><strong>Slight Give:</strong> The fruit should feel firm but yield slightly to gentle pressure.</li>
          <li><strong>Easy Release:</strong> Ripe tomatoes often snap off the vine easily with a gentle twist.</li>
        </ul>

        <h3>Peppers</h3>
        <p>Peppers can be harvested at various stages. Green peppers are unripe but crunchy. As they mature to red, orange, or yellow, they become sweeter and richer in Vitamin C.</p>
        
        <p><strong>Pro Tip:</strong> Harvest in the morning when the plant is most hydrated for crispier produce.</p>
      `,tr:`
        <p>Haftalarca sulama, besin verme ve budama işlemlerinden sonra, kapalı bahçeniz nihayet meyve vermeye başladı. Ama ne zaman toplamak için doğru zaman? Hasat zamanı, en iyi lezzet, doku ve besin değeri için mükemmel anı yakalamak önemlidir.</p>
        
        <h3>Domates</h3>
        <p>En iyi lezzet için, domateslerin tamamen olgunlaşmasına izin verin. Aşağıdakilere dikkat edin:</p>
        <ul>
          <li><strong>Derin Renk:</strong> Zengin, tekdüze bir kırmızı (veya çeşidine bağlı olarak sarı/mor) olmalıdır.</li>
          <li><strong>Hafif Yumuşaklık:</strong> Meyve, hafif bir baskıya karşı sağlam hissetmeli ancak biraz yumuşamalıdır.</li>
          <li><strong>Kolay Ayrılma:</strong> Olgun domatesler genellikle nazik bir çevirme ile dalından kolayca kopar.</li>
        </ul>

        <h3>Biberler</h3>
        <p>Biberler çeşitli aşamalarda hasat edilebilir. Yeşil biberler olgunlaşmamış ama çıtırdır. Kırmızı, turuncu veya sarı renge olgunlaştıkça, daha tatlı ve C vitamini açısından zengin hale gelirler.</p>
        
        <p><strong>Profesyonel İpucu:</strong> Daha çıtır ürünler için bitki en fazla suya sahipken sabahları hasat yapın.</p>
      `},author:`Master Gardener`,date:`November 20, 2025`,readTime:`4 min read`,image:`https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop`,tags:[`Harvest`,`Vegetables`,`Guides`],quiz:[{question:{en:`When is the best time of day to harvest vegetables?`,tr:`Sebzeleri hasat etmek için günün en iyi saati ne zamandır?`},options:{en:[`High noon`,`In the morning`,`Late at night`,`It doesn't matter`],tr:[`Öğle vakti`,`Sabah`,`Gece yarısı`,`Fark etmez`]},correctAnswer:1,explanation:{en:`Harvesting in the morning when plants are fully hydrated ensures crispier, fresher-tasting produce.`,tr:`Bitkiler tamamen suya doymuşken sabahları hasat yapmak, daha çıtır ve taze tatlı ürünler sağlar.`}},{question:{en:`How do you know a tomato is fully ripe?`,tr:`Bir domatesin tam olgunlaştığını nasıl anlarsınız?`},options:{en:[`It is hard as a rock`,`It is completely green`,`It has deep uniform color and yields slightly to pressure`,`It falls on the floor`],tr:[`Taş gibi sert`,`Tamamen yeşil`,`Derin tekdüze renge sahip ve hafifçe basınca verir`,`Düştüğünde`]},correctAnswer:2,explanation:{en:`A ripe tomato should have its full characteristic color and feel firm but not hard.`,tr:`Olgun bir domates, tam karakteristik rengini almalı ve sert ama sert olmamalıdır.`}},{question:{en:`What happens to peppers as they change from green to red/yellow?`,tr:`Biberler yeşilden kırmızı/sarıya dönerken ne olur?`},options:{en:[`They become more bitter`,`They lose all nutritional value`,`They become sweeter and richer in Vitamin C`,`They become poisonous`],tr:[`Daha acı olur`,`Tüm besin değerini kaybeder`,`Daha tatlı ve C vitamini açısından zenginleşir`,`Zehirli hale gelir`]},correctAnswer:2,explanation:{en:`Ripening peppers develop sugars and increase their vitamin content, making them sweeter and more nutritious.`,tr:`Olgunlaşan biberler şeker geliştirir ve vitamin içeriğini artırır, bu da onları daha tatlı ve besleyici hale getirir.`}}]}],zr=[`All`,`Lighting`,`Hydroponics`,`Environment`,`Automation`,`Training`,`Nutrients`,`Harvest`];var Br=()=>{let{language:e,setLanguage:t,getBuilderUrl:n}=P();return(0,N.jsxs)(`footer`,{className:`landing-footer`,children:[(0,N.jsxs)(`div`,{className:`footer-content`,children:[(0,N.jsxs)(`div`,{className:`footer-brand`,children:[(0,N.jsx)(`div`,{className:`footer-logo`,children:`🌱 GroWizard`}),(0,N.jsx)(`p`,{children:`© 2025 GroWizard. All rights reserved.`})]}),(0,N.jsxs)(`div`,{className:`footer-links`,children:[(0,N.jsx)(M,{to:`/`,children:`Home`}),(0,N.jsx)(M,{to:n(),children:`Builder`}),(0,N.jsx)(M,{to:`/tools`,children:`Tools`}),(0,N.jsx)(M,{to:`/blog`,children:`Blog`})]}),(0,N.jsxs)(`div`,{className:`footer-lang-toggle`,children:[(0,N.jsx)(`button`,{onClick:()=>t(`en`),className:e===`en`?`active`:``,children:`EN`}),(0,N.jsx)(`button`,{onClick:()=>t(`tr`),className:e===`tr`?`active`:``,children:`TR`})]})]}),(0,N.jsx)(`style`,{children:`
        .landing-footer {
          background: rgba(15, 23, 42, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          /* slightly more compact footer */
          padding: 1.25rem 10%;
          position: relative;
          z-index: 10;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-brand {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .footer-logo {
            font-weight: 800;
            color: #10b981;
            font-size: 1.1rem;
        }

        .footer-brand p {
          color: #64748b;
          font-size: 0.875rem;
          margin: 0;
        }

        .footer-links {
            display: flex;
            gap: 1.5rem;
        }

        .footer-links a {
            color: #94a3b8;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.2s;
        }

        .footer-links a:hover {
            color: #10b981;
        }

        .footer-lang-toggle {
          display: flex;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-lang-toggle button {
          background: transparent;
          border: none;
          color: #94a3b8;
          padding: 0.4rem 0.75rem;
          border-radius: 0.375rem;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.2s ease;
        }

        .footer-lang-toggle button.active {
          background: #10b981;
          color: white;
        }

        .footer-lang-toggle button:hover:not(.active) {
          background: rgba(255, 255, 255, 0.05);
          color: white;
        }
      `})]})},Vr=()=>{let{language:e,setLanguage:t,getBuilderUrl:n}=P(),r=Ht(),[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(!1),c={en:{home:`🏠 Home`,builder:`Go To App 🚀`,tools:`🛠️ Tools`,blog:`📝 Blog`,costCalc:`Electricity Cost Calculator`,co2Calc:`CO₂ Calculator`,unitConv:`Volume Converter`,ppfdTool:`PPFD Heat Map`},tr:{home:`🏠 Ana Sayfa`,builder:`Uygulamaya Git 🚀`,tools:`🛠️ Araçlar`,blog:`📝 Blog`,costCalc:`Elektrik Maliyeti Hesaplayıcı`,co2Calc:`CO₂ Hesaplayıcı`,unitConv:`Hacim Çevirici`,ppfdTool:`PPFD Isı Haritası`}}[e],l=e=>r.pathname===e;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
                .nav-wrapper {
                    background: rgba(10, 10, 10, 0.8);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    padding: 1rem 0;
                }
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .nav-logo {
                    text-decoration: none;
                    font-size: 1.5rem;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .nav-logo-text {
                    background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                .nav-link {
                    color: #94a3b8;
                    text-decoration: none;
                    font-size: 0.95rem;
                    font-weight: 500;
                    transition: color 0.2s;
                    cursor: pointer;
                }
                .nav-link.active {
                    color: white;
                }
                .dropdown-container {
                    position: relative;
                    padding: 1rem 0;
                    margin: -1rem 0;
                }
                .dropdown-menu {
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #1e293b;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.75rem;
                    padding: 0.5rem;
                    min-width: 220px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }
                .dropdown-item {
                    color: #cbd5e1;
                    text-decoration: none;
                    padding: 0.75rem 1rem;
                    border-radius: 0.5rem;
                    font-size: 0.9rem;
                    transition: background 0.2s, color 0.2s;
                    white-space: nowrap;
                    display: block;
                }
                .dropdown-item:hover {
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                }
                .nav-right {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }
                .lang-btn {
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    color: white;
                    padding: 0.4rem 0.8rem;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    font-size: 0.8rem;
                    font-weight: 600;
                }
                .cta-button {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                    color: white;
                    text-decoration: none;
                    padding: 0.6rem 1.2rem;
                    border-radius: 0.75rem;
                    font-weight: 600;
                    font-size: 0.95rem;
                    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
                    transition: transform 0.2s;
                }
                .hamburger {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.5rem;
                }
                
                /* Mobile Styles */
                @media (max-width: 768px) {
                    .nav-links, .nav-right {
                        display: none;
                    }
                    .hamburger {
                        display: block;
                    }
                    .mobile-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: #0f172a;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                        padding: 1rem;
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
                        animation: slideDown 0.3s ease-out;
                    }
                    @keyframes slideDown {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .mobile-link {
                        color: #cbd5e1;
                        text-decoration: none;
                        font-size: 1.1rem;
                        padding: 0.75rem;
                        border-radius: 0.5rem;
                        display: block;
                    }
                    .mobile-link:active, .mobile-link.active {
                        background: rgba(255, 255, 255, 0.05);
                        color: white;
                    }
                    .mobile-tools {
                        padding-left: 1rem;
                        display: flex;
                        flex-direction: column;
                        gap: 0.25rem;
                        border-left: 2px solid rgba(255, 255, 255, 0.1);
                        margin-left: 1rem;
                        margin-top: 0.5rem;
                    }
                    .mobile-actions {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: 1rem;
                        padding-top: 1rem;
                        border-top: 1px solid rgba(255, 255, 255, 0.1);
                    }
                }
                `}),(0,N.jsxs)(`nav`,{className:`nav-wrapper`,children:[(0,N.jsxs)(`div`,{className:`nav-container`,children:[(0,N.jsxs)(M,{to:`/`,className:`nav-logo`,children:[`🌱 `,(0,N.jsx)(`span`,{className:`nav-logo-text`,children:`GroWizard`})]}),(0,N.jsxs)(`div`,{className:`nav-links`,children:[(0,N.jsx)(M,{to:`/`,className:`nav-link ${l(`/`)?`active`:``}`,children:c.home}),(0,N.jsxs)(`div`,{className:`dropdown-container`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[(0,N.jsxs)(`span`,{className:`nav-link ${r.pathname.includes(`/tools`)?`active`:``}`,children:[c.tools,` ▾`]}),i&&(0,N.jsxs)(`div`,{className:`dropdown-menu`,children:[(0,N.jsx)(M,{to:`/tools/electricity-cost-calculator`,className:`dropdown-item`,children:c.costCalc}),(0,N.jsx)(M,{to:`/tools/co2-calculator`,className:`dropdown-item`,children:c.co2Calc}),(0,N.jsx)(M,{to:`/tools/unit-converter`,className:`dropdown-item`,children:c.unitConv}),(0,N.jsx)(M,{to:`/tools/ppfd-heatmap`,className:`dropdown-item`,children:c.ppfdTool})]})]}),(0,N.jsx)(M,{to:`/blog`,className:`nav-link ${l(`/blog`)?`active`:``}`,children:c.blog})]}),(0,N.jsxs)(`div`,{className:`nav-right`,children:[(0,N.jsx)(`button`,{onClick:()=>t(e===`en`?`tr`:`en`),className:`lang-btn`,children:e===`en`?`TR`:`EN`}),(0,N.jsx)(M,{to:n(),className:`cta-button`,children:c.builder})]}),(0,N.jsx)(`button`,{className:`hamburger`,onClick:()=>s(!o),children:o?`✕`:`☰`})]}),o&&(0,N.jsxs)(`div`,{className:`mobile-menu`,children:[(0,N.jsx)(M,{to:`/`,className:`mobile-link ${l(`/`)?`active`:``}`,onClick:()=>s(!1),children:c.home}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`mobile-link`,style:{opacity:.7},children:c.tools}),(0,N.jsxs)(`div`,{className:`mobile-tools`,children:[(0,N.jsx)(M,{to:`/tools/electricity-cost-calculator`,className:`mobile-link`,onClick:()=>s(!1),children:c.costCalc}),(0,N.jsx)(M,{to:`/tools/co2-calculator`,className:`mobile-link`,onClick:()=>s(!1),children:c.co2Calc}),(0,N.jsx)(M,{to:`/tools/unit-converter`,className:`mobile-link`,onClick:()=>s(!1),children:c.unitConv}),(0,N.jsx)(M,{to:`/tools/ppfd-heatmap`,className:`mobile-link`,onClick:()=>s(!1),children:c.ppfdTool})]})]}),(0,N.jsx)(M,{to:`/blog`,className:`mobile-link ${l(`/blog`)?`active`:``}`,onClick:()=>s(!1),children:c.blog}),(0,N.jsxs)(`div`,{className:`mobile-actions`,children:[(0,N.jsx)(`button`,{onClick:()=>{t(e===`en`?`tr`:`en`),s(!1)},className:`lang-btn`,children:e===`en`?`Switch to TR`:`Switch to EN`}),(0,N.jsx)(M,{to:n(),className:`cta-button`,onClick:()=>s(!1),children:c.builder})]})]})]})]})},Hr={en:{title:`Design Your Perfect Harvest`,subtitle:`Advanced simulation for serious growers. Calculate PPFD, estimate costs, and optimize your environment before you buy.`,cta:`Start Building Now`,features:{ppfd:{title:`PPFD Simulation`,description:`Visualize light intensity and coverage with our advanced heatmap engine.`},cost:{title:`Cost Estimator`,description:`Calculate monthly electricity costs based on your local rates and equipment.`},environment:{title:`Environment Control`,description:`Match ventilation and filtration to your specific tent dimensions.`}},costTool:{title:`Quick Cost Calculator`,subtitle:`Estimate your monthly electricity costs`,power:`Total Power (Watts)`,hours:`Hours per Day`,rate:`Electricity Rate ($/kWh)`,calculate:`Calculate`,result:`Estimated Monthly Cost`},infoBoxes:{title:`Critical Success Factors`,subtitle:`Essential knowledge for optimal plant growth`,items:[{icon:`💡`,title:`Light Intensity Matters`,description:`Without proper PPFD levels for your plant type, growth will slow or stop completely.`},{icon:`🌬️`,title:`Air Circulation is Essential`,description:`Stagnant air increases mold and pest risk; fans are mandatory for healthy growth.`},{icon:`🌡️`,title:`Humidity & Temperature Balance`,description:`Excessive humidity or heat creates plant stress; controlled environment is crucial.`}]},faq:{title:`Frequently Asked Questions`,subtitle:`Everything you need to know about indoor growing`,items:[{q:`Why do plants need light?`,a:`To perform photosynthesis.`},{q:`Why is photosynthesis important?`,a:`Plants produce their food this way.`},{q:`Which plants are suitable for indoor growing?`,a:`Herbs, vegetables, flowers.`},{q:`What happens if I don't install a fan in my grow tent?`,a:`Temperature rises, mold forms.`},{q:`How many hours of light per day during vegetative stage?`,a:`16 hours is generally sufficient.`},{q:`How many hours of light per day during flowering stage?`,a:`12 hours is generally sufficient.`},{q:`Why LED lights?`,a:`Efficient, cool, and long-lasting.`},{q:`How long does germination typically take?`,a:`Usually 3 to 10 days.`},{q:`What should humidity be in the tent during vegetative stage?`,a:`50–70% is ideal.`}]}},tr:{title:`Mükemmel Hasadınızı Tasarlayın`,subtitle:`Ciddi yetiştiriciler için gelişmiş simülasyon. PPFD hesaplayın, maliyetleri tahmin edin ve satın almadan önce ortamınızı optimize edin.`,cta:`Hemen Başla`,features:{ppfd:{title:`PPFD Simülasyonu`,description:`Gelişmiş ısı haritası motorumuzla ışık yoğunluğunu ve kapsamını görselleştirin.`},cost:{title:`Maliyet Hesaplayıcı`,description:`Yerel tarifelerinize ve ekipmanınıza göre aylık elektrik maliyetlerini hesaplayın.`},environment:{title:`Ortam Kontrolü`,description:`Havalandırma ve filtrasyonu çadır boyutlarınıza göre eşleştirin.`}},costTool:{title:`Hızlı Maliyet Hesaplayıcı`,subtitle:`Aylık elektrik maliyetlerinizi tahmin edin`,power:`Toplam Güç (Watt)`,hours:`Günlük Saat`,rate:`Elektrik Tarifesi (₺/kWh)`,calculate:`Hesapla`,result:`Tahmini Aylık Maliyet`},infoBoxes:{title:`Kritik Başarı Faktörleri`,subtitle:`Optimal bitki gelişimi için temel bilgiler`,items:[{icon:`💡`,title:`Işık Yoğunluğu Önemlidir`,description:`Bitkinin türüne uygun PPFD seviyesi olmazsa gelişim yavaşlar veya durur.`},{icon:`🌬️`,title:`Hava Sirkülasyonu Şarttır`,description:`Durgun hava küf ve haşere riskini artırır; mutlaka fan kullanılmalı.`},{icon:`🌡️`,title:`Nem ve Sıcaklık Dengesi`,description:`Aşırı nem ya da ısı bitkide stres yaratır; kontrollü ortam şart.`}]},faq:{title:`Sıkça Sorulan Sorular`,subtitle:`İç mekan yetiştiriciliği hakkında bilmeniz gerekenler`,items:[{q:`Bitkiler neden yapay ışığa ihtiyaç duyar?`,a:`Bitkiler büyümek, gelişmek ve enerji üretmek için fotosentez yapar. İç mekan yetiştiriciliğinde doğal güneş ışığı yeterli olmadığından yapay aydınlatma (özellikle LED grow ışıkları) kullanılır.`},{q:`Fotosentez neden bitki sağlığı için kritiktir?`,a:`Fotosentez, bitkilerin su ve karbondioksiti güneş (veya yapay) ışığı ile şekere dönüştürmesini sağlar. Bu süreç, bitkinin enerji kaynağını oluşturur ve sağlıklı gelişimi mümkün kılar.`},{q:`İç mekanda hangi bitki türleri yetiştirilebilir?`,a:`Aromatik otlar (fesleğen, nane), yapraklı sebzeler (marul, ıspanak) ve bazı çiçekli türler (orkide, sardunya) iç mekan yetiştiriciliğine uygundur. Bu bitkiler sınırlı alanda, kontrollü iklim şartlarında iyi sonuç verir.`},{q:`Fan olmayan yetiştirme kabininde ne olur?`,a:`Fan kullanılmayan kabinlerde hava dolaşımı olmaz, bu da sıcaklık artışına ve nem birikmesine neden olur. Sonuç olarak mantar oluşumu, küf ve bitki hastalıkları riski yükselir.`},{q:`Büyüme döneminde bitkiye günde kaç saat ışık verilmeli?`,a:`Büyüme (vejetatif) aşamasında çoğu bitki 16–18 saatlik ışık süresine ihtiyaç duyar. Bu süre, yaprak gelişimini ve sağlıklı gövde oluşumunu destekler.`},{q:`Çiçeklenme döneminde ışık süresi ne olmalı?`,a:`Çiçeklenme döneminde fotoperiyodik bitkiler için 12 saat ışık, 12 saat karanlık döngüsü uygulanmalıdır. Bu denge, çiçek ve meyve oluşumunu teşvik eder.`},{q:`LED grow ışıklarının avantajı nedir?`,a:`LED bitki lambaları, düşük enerji tüketimi, uzun ömür ve minimal ısı yayımı ile ideal iç mekan aydınlatması sunar. Ayrıca, bitki evresine uygun tam spektrum ışık sağlayabilir.`},{q:`Tohumlar çimlenme döneminde kaç günde filizlenir?`,a:`Çimlenme süresi bitki türüne bağlı olmakla birlikte genellikle 3 ila 10 gün arasında tamamlanır. Bu dönemde nemli ortam ve sabit sıcaklık sağlanmalıdır.`},{q:`Büyüme döneminde çadır içi nem oranı ne olmalı?`,a:`Vejetatif büyüme aşamasında ideal nem oranı %50 ila %70 aralığındadır. Bu nem seviyesi, yaprakların su kaybını dengeleyerek hızlı gelişimi destekler.`}]}}};function Ur(){let[e,t]=(0,b.useState)({x:0,y:0}),[n,r]=(0,b.useState)(0),[i,a]=(0,b.useState)(!1),[,o]=(0,b.useState)(0),{hasSeenOnboarding:s}=Ir(),{language:c,getBuilderUrl:l}=P(),u=Gt(),d=Hr[c];return(0,b.useEffect)(()=>{let e=e=>{t({x:e.clientX/window.innerWidth-.5,y:e.clientY/window.innerHeight-.5})},n=()=>{o(window.scrollY),a(window.scrollY>300)};return window.addEventListener(`mousemove`,e),window.addEventListener(`scroll`,n),()=>{window.removeEventListener(`mousemove`,e),window.removeEventListener(`scroll`,n)}},[]),(0,N.jsxs)(`div`,{className:`landing-container`,children:[(0,N.jsxs)(ze,{children:[(0,N.jsxs)(`title`,{children:[d.title,` | GroWizard`]}),(0,N.jsx)(`meta`,{name:`description`,content:d.subtitle})]}),(0,N.jsxs)(`div`,{className:`landing-bg`,children:[(0,N.jsx)(`div`,{className:`glow-orb orb-1`,style:{transform:`translate(${e.x*30}px, ${e.y*30}px)`}}),(0,N.jsx)(`div`,{className:`glow-orb orb-2`,style:{transform:`translate(${e.x*-30}px, ${e.y*-30}px)`}}),(0,N.jsx)(`div`,{className:`grid-overlay`})]}),(0,N.jsx)(Vr,{}),(0,N.jsxs)(`section`,{className:`hero-section`,children:[(0,N.jsxs)(`div`,{className:`hero-content fade-in-up`,children:[(0,N.jsx)(`div`,{className:`badge`,children:`🌱 Professional Grow Planner`}),(0,N.jsxs)(`h1`,{className:`hero-title`,children:[d.title.split(` `).slice(0,2).join(` `),` `,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`gradient-text`,children:d.title.split(` `).slice(2).join(` `)})]}),(0,N.jsx)(`p`,{className:`hero-subtitle`,children:d.subtitle}),(0,N.jsxs)(`button`,{onClick:()=>{u(l())},className:`cta-button`,children:[d.cta,(0,N.jsx)(`span`,{className:`arrow`,children:`→`})]})]}),(0,N.jsx)(`div`,{className:`hero-visual`,style:{transform:`perspective(1000px) rotateY(${e.x*5}deg) rotateX(${e.y*-5}deg)`},children:(0,N.jsxs)(`div`,{className:`tent-frame`,children:[(0,N.jsx)(`div`,{className:`plant-icon`,children:`🌿`}),(0,N.jsx)(`div`,{className:`light-beam`})]})})]}),(0,N.jsxs)(`section`,{className:`tools-preview-section`,children:[(0,N.jsxs)(`div`,{className:`section-header`,children:[(0,N.jsxs)(`h2`,{children:[`🛠️ `,c===`tr`?`Yetiştirme Araçları`:`Grow Tools`]}),(0,N.jsx)(`p`,{children:c===`tr`?`Başarılı bir hasat için ihtiyacınız olan her şey`:`Everything you need for a successful harvest`})]}),(0,N.jsxs)(`div`,{className:`tools-grid`,children:[(0,N.jsxs)(M,{to:`/tools/cost-calculator`,className:`tool-preview-card`,children:[(0,N.jsx)(`div`,{className:`tool-icon`,children:`⚡`}),(0,N.jsx)(`h3`,{children:c===`tr`?`Maliyet Hesaplayıcı`:`Cost Calculator`}),(0,N.jsx)(`p`,{children:c===`tr`?`Elektrik masraflarınızı hesaplayın`:`Estimate electricity costs`})]}),(0,N.jsxs)(M,{to:`/tools/unit-converter`,className:`tool-preview-card`,children:[(0,N.jsx)(`div`,{className:`tool-icon`,children:`💧`}),(0,N.jsx)(`h3`,{children:c===`tr`?`Birim Çevirici`:`Unit Converter`}),(0,N.jsx)(`p`,{children:c===`tr`?`Litre ve Galon dönüşümü`:`Convert Liters & Gallons`})]}),(0,N.jsxs)(M,{to:`/tools/co2-calculator`,className:`tool-preview-card`,children:[(0,N.jsx)(`div`,{className:`tool-icon`,children:`🌫️`}),(0,N.jsx)(`h3`,{children:c===`tr`?`CO2 Hesaplayıcı`:`CO2 Calculator`}),(0,N.jsx)(`p`,{children:c===`tr`?`Optimal CO2 seviyelerini bulun`:`Find optimal CO2 levels`})]})]}),(0,N.jsx)(`div`,{className:`center-btn`,children:(0,N.jsx)(M,{to:`/tools`,className:`secondary-btn`,children:c===`tr`?`Tüm Araçları Gör`:`View All Tools`})})]}),(0,N.jsxs)(`section`,{className:`features-section`,children:[(0,N.jsxs)(`div`,{className:`feature-card slide-in`,style:{transitionDelay:`0.1s`},children:[(0,N.jsx)(`div`,{className:`feature-icon`,children:`💡`}),(0,N.jsx)(`h3`,{children:d.features.ppfd.title}),(0,N.jsx)(`p`,{children:d.features.ppfd.description})]}),(0,N.jsxs)(`div`,{className:`feature-card slide-in`,style:{transitionDelay:`0.3s`},children:[(0,N.jsx)(`div`,{className:`feature-icon`,children:`🌬️`}),(0,N.jsx)(`h3`,{children:d.features.environment.title}),(0,N.jsx)(`p`,{children:d.features.environment.description})]})]}),(0,N.jsxs)(`section`,{className:`info-boxes-section`,children:[(0,N.jsxs)(`div`,{className:`info-boxes-header`,children:[(0,N.jsxs)(`h2`,{children:[`⚠️ `,d.infoBoxes.title]}),(0,N.jsx)(`p`,{children:d.infoBoxes.subtitle})]}),(0,N.jsx)(`div`,{className:`info-boxes-container`,children:d.infoBoxes.items.map((e,t)=>(0,N.jsxs)(`div`,{className:`info-box`,style:{animationDelay:`${t*.1}s`},children:[(0,N.jsx)(`div`,{className:`info-box-icon`,children:e.icon}),(0,N.jsxs)(`div`,{className:`info-box-content`,children:[(0,N.jsx)(`h3`,{children:e.title}),(0,N.jsx)(`p`,{children:e.description})]})]},t))})]}),(0,N.jsxs)(`section`,{className:`featured-guides-section`,children:[(0,N.jsxs)(`div`,{className:`section-header`,children:[(0,N.jsxs)(`h2`,{children:[`🌟 `,c===`tr`?`Öne Çıkan Rehberler`:`Featured Guides`]}),(0,N.jsx)(`p`,{children:c===`tr`?`Uzmanlardan derinlemesine bilgiler`:`In-depth knowledge from experts`})]}),(0,N.jsxs)(`div`,{className:`slider-container`,children:[(0,N.jsx)(`button`,{className:`slider-btn prev`,onClick:()=>r(e=>e===0?Math.ceil(Rr.length/2)-1:e-1),children:`←`}),(0,N.jsx)(`div`,{className:`slider-track-container`,children:(0,N.jsx)(`div`,{className:`slider-track`,style:{transform:`translateX(-${n*100}%)`},children:Array.from({length:Math.ceil(Rr.slice(0,4).length/2)}).map((e,t)=>(0,N.jsx)(`div`,{className:`slider-slide`,children:Rr.slice(0,4).slice(t*2,t*2+2).map(e=>(0,N.jsxs)(M,{to:`/blog/${e.slug[c]}`,className:`featured-guide-card`,children:[(0,N.jsxs)(`div`,{className:`guide-content`,children:[(0,N.jsx)(`span`,{className:`guide-tag`,children:e.category}),(0,N.jsx)(`h3`,{children:e.title[c]}),(0,N.jsx)(`p`,{children:e.excerpt[c]}),(0,N.jsx)(`span`,{className:`read-more`,children:c===`tr`?`Devamını Oku →`:`Read More →`})]}),(0,N.jsx)(`div`,{className:`guide-image`,style:{backgroundImage:`url(${e.image})`}})]},`featured-${e.id}`))},t))})}),(0,N.jsx)(`button`,{className:`slider-btn next`,onClick:()=>r(e=>e===Math.ceil(Rr.slice(0,4).length/2)-1?0:e+1),children:`→`})]}),(0,N.jsx)(`div`,{className:`slider-dots`,children:Array.from({length:Math.ceil(Rr.slice(0,4).length/2)}).map((e,t)=>(0,N.jsx)(`button`,{className:`slider-dot ${n===t?`active`:``}`,onClick:()=>r(t)},t))})]}),(0,N.jsx)(`section`,{className:`cost-tool-section`,children:(0,N.jsxs)(`div`,{className:`cost-tool-container`,children:[(0,N.jsxs)(`div`,{className:`cost-tool-header`,children:[(0,N.jsxs)(`h2`,{children:[`⚡ `,d.costTool.title]}),(0,N.jsx)(`p`,{children:d.costTool.subtitle})]}),(0,N.jsxs)(`div`,{className:`cost-tool-inputs`,children:[(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsx)(`label`,{children:d.costTool.power}),(0,N.jsx)(`input`,{type:`number`,id:`power-input`,placeholder:`300`,defaultValue:`300`})]}),(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsx)(`label`,{children:d.costTool.hours}),(0,N.jsx)(`input`,{type:`number`,id:`hours-input`,placeholder:`18`,defaultValue:`18`})]}),(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsx)(`label`,{children:d.costTool.rate}),(0,N.jsx)(`input`,{type:`number`,step:`0.01`,id:`rate-input`,placeholder:`0.12`,defaultValue:`0.12`})]})]}),(0,N.jsx)(`button`,{className:`calc-button`,onClick:()=>{let e=parseFloat(document.getElementById(`power-input`).value)||0,t=parseFloat(document.getElementById(`hours-input`).value)||0,n=parseFloat(document.getElementById(`rate-input`).value)||0,r=e/1e3*t*30*n;document.getElementById(`cost-result`).textContent=`${d.costTool.result}: ${c===`tr`?`₺`:`$`}${r.toFixed(2)}`},children:d.costTool.calculate}),(0,N.jsxs)(`div`,{className:`cost-result`,id:`cost-result`,children:[d.costTool.result,`: `,c===`tr`?`₺`:`$`,`0.00`]})]})}),(0,N.jsxs)(`section`,{className:`faq-section`,children:[(0,N.jsxs)(`div`,{className:`section-header`,children:[(0,N.jsxs)(`h2`,{children:[`❓ `,d.faq.title]}),(0,N.jsx)(`p`,{children:d.faq.subtitle})]}),(0,N.jsx)(`div`,{className:`faq-grid`,children:d.faq.items.map((e,t)=>(0,N.jsxs)(`div`,{className:`faq-item`,children:[(0,N.jsx)(`h3`,{children:e.q}),(0,N.jsx)(`p`,{children:e.a})]},t))})]}),(0,N.jsxs)(`section`,{className:`blog-preview-section`,children:[(0,N.jsxs)(`div`,{className:`blog-preview-header`,children:[(0,N.jsxs)(`h2`,{children:[`📚 `,c===`tr`?`En Son Makaleler`:`Latest Articles`]}),(0,N.jsx)(`p`,{children:c===`tr`?`Modern yetiştiricilik tekniklerini keşfedin`:`Discover modern growing techniques`})]}),(0,N.jsx)(`div`,{className:`blog-preview-grid`,children:Rr.slice(0,3).map(e=>(0,N.jsxs)(M,{to:`/blog/${e.slug[c]}`,className:`blog-preview-card`,children:[(0,N.jsx)(`div`,{className:`preview-image`,style:{backgroundImage:`url(${e.image})`}}),(0,N.jsxs)(`div`,{className:`preview-content`,children:[(0,N.jsx)(`span`,{className:`preview-tag`,children:e.category}),(0,N.jsx)(`h3`,{children:e.title[c]}),(0,N.jsxs)(`div`,{className:`preview-meta`,children:[(0,N.jsx)(`span`,{children:e.readTime}),(0,N.jsx)(`span`,{className:`arrow`,children:`→`})]})]})]},e.id))}),(0,N.jsx)(`div`,{className:`blog-cta`,children:(0,N.jsx)(M,{to:`/blog`,className:`view-all-btn`,children:c===`tr`?`Tüm Yazıları Gör`:`View All Articles`})})]}),(0,N.jsx)(Br,{}),(0,N.jsx)(`button`,{className:`scroll-to-top ${i?`visible`:``}`,onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})},"aria-label":`Scroll to top`,children:`↑`}),(0,N.jsx)(`style`,{children:`
                .landing-container {
                    min-height: 100vh;
                    background: #0a0a0a;
                    color: white;
                    overflow-x: hidden;
                    position: relative;
                }

                /* Footer Styles */
                .landing-footer {
                    background: rgba(15, 23, 42, 0.95);
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 2rem 10%;
                    position: relative;
                    z-index: 10;
                }

                .footer-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .footer-info p {
                    color: #94a3b8;
                    font-size: 0.875rem;
                }

                .footer-lang-toggle {
                    display: flex;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0.25rem;
                    border-radius: 0.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .footer-lang-toggle button {
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    padding: 0.4rem 0.75rem;
                    border-radius: 0.375rem;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 0.875rem;
                    transition: all 0.2s ease;
                }

                .footer-lang-toggle button.active {
                    background: #10b981;
                    color: white;
                }

                .footer-lang-toggle button:hover:not(.active) {
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                }

                .landing-bg {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    pointer-events: none;
                }

                .glow-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.4;
                    transition: transform 0.1s ease-out;
                }

                .orb-1 {
                    width: 400px;
                    height: 400px;
                    background: #10b981;
                    top: -100px;
                    right: -100px;
                }

                .orb-2 {
                    width: 300px;
                    height: 300px;
                    background: #3b82f6;
                    bottom: -50px;
                    left: -50px;
                }

                .grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                    mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
                }

                .hero-section {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 10%;
                    position: relative;
                    z-index: 1;
                }

                .hero-content {
                    max-width: 600px;
                }

                .badge {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    background: rgba(16, 185, 129, 0.1);
                    border: 1px solid rgba(16, 185, 129, 0.2);
                    border-radius: 999px;
                    color: #10b981;
                    font-weight: 600;
                    font-size: 0.875rem;
                    margin-bottom: 1.5rem;
                }

                .hero-title {
                    font-size: 4.5rem;
                    line-height: 1.1;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    letter-spacing: -0.02em;
                }

                .gradient-text {
                    background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .hero-subtitle {
                    font-size: 1.25rem;
                    color: #94a3b8;
                    margin-bottom: 2.5rem;
                    line-height: 1.6;
                }

                .cta-button {
                    padding: 1rem 2rem;
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #000;
                    background: #10b981;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .cta-button:hover {
                    background: #059669;
                    transform: translateY(-2px);
                }

                .hero-visual {
                    position: relative;
                    width: 500px;
                    height: 500px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .tent-frame {
                    width: 300px;
                    height: 400px;
                    border: 4px solid rgba(16, 185, 129, 0.3);
                    position: relative;
                    transform-style: preserve-3d;
                    animation: float 6s ease-in-out infinite;
                }

                .plant-icon {
                    font-size: 5rem;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.5));
                }

                .light-beam {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 200px;
                    height: 300px;
                    background: linear-gradient(to bottom, rgba(16, 185, 129, 0.2), transparent);
                    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
                }

                .tools-preview-section, .features-section, .info-boxes-section, .featured-guides-section, .cost-tool-section, .faq-section, .blog-preview-section {
                    padding: 5rem 10%;
                    position: relative;
                    z-index: 1;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .section-header h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #f8fafc;
                }

                .section-header p {
                    color: #94a3b8;
                    font-size: 1.1rem;
                }

                .tools-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .tool-preview-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    padding: 2rem;
                    text-align: center;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    color: inherit;
                }

                .tool-preview-card:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(16, 185, 129, 0.3);
                }

                .tool-icon {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }

                .tool-preview-card h3 {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                    color: #f8fafc;
                }

                .tool-preview-card p {
                    color: #94a3b8;
                    font-size: 0.9rem;
                }

                .center-btn {
                    text-align: center;
                }

                .secondary-btn {
                    display: inline-block;
                    padding: 0.75rem 1.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    text-decoration: none;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }

                .secondary-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                .features-section {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .feature-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    padding: 2rem;
                    transition: all 0.3s ease;
                }

                .feature-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(16, 185, 129, 0.3);
                }

                .feature-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }

                .feature-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    color: #f8fafc;
                }

                .feature-card p {
                    color: #94a3b8;
                    line-height: 1.6;
                }

                .info-boxes-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .info-boxes-header h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #f8fafc;
                }

                .info-boxes-header p {
                    color: #94a3b8;
                    font-size: 1.1rem;
                }

                .info-boxes-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .info-box {
                    background: rgba(16, 185, 129, 0.05);
                    border: 1px solid rgba(16, 185, 129, 0.1);
                    border-radius: 1rem;
                    padding: 2rem;
                    display: flex;
                    align-items: flex-start;
                    gap: 1.5rem;
                    transition: all 0.3s ease;
                    animation: fadeIn 0.5s ease-out forwards;
                    opacity: 0;
                }

                .info-box:hover {
                    transform: translateY(-5px);
                    background: rgba(16, 185, 129, 0.1);
                    border-color: rgba(16, 185, 129, 0.3);
                    box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.2);
                }

                .info-box-icon {
                    font-size: 2.5rem;
                    background: rgba(16, 185, 129, 0.1);
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    flex-shrink: 0;
                }

                .info-box-content h3 {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                    color: #10b981;
                }

                .info-box-content p {
                    color: #cbd5e1;
                    font-size: 0.95rem;
                    line-height: 1.5;
                }

                .slider-container {
                    position: relative;
                    max-width: 1200px;
                    margin: 0 auto;
                    overflow: hidden;
                }

                .slider-track-container {
                    overflow: hidden;
                    margin: 0 3rem;
                }

                .slider-track {
                    display: flex;
                    transition: transform 0.5s ease-in-out;
                }

                .slider-slide {
                    min-width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    padding: 0 1rem;
                }

                .featured-guide-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    overflow: hidden;
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    transition: all 0.3s ease;
                }

                .featured-guide-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(16, 185, 129, 0.3);
                }

                .guide-image {
                    height: 200px;
                    background-size: cover;
                    background-position: center;
                }

                .guide-content {
                    padding: 1.5rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .guide-tag {
                    display: inline-block;
                    padding: 0.25rem 0.75rem;
                    background: rgba(16, 185, 129, 0.1);
                    color: #10b981;
                    border-radius: 999px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    align-self: flex-start;
                }

                .guide-content h3 {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                    color: #f8fafc;
                }

                .guide-content p {
                    color: #94a3b8;
                    font-size: 0.9rem;
                    margin-bottom: 1.5rem;
                    flex: 1;
                }

                .read-more {
                    color: #10b981;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                .slider-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(16, 185, 129, 0.1);
                    border: 1px solid rgba(16, 185, 129, 0.2);
                    color: #10b981;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.25rem;
                    transition: all 0.2s ease;
                    z-index: 2;
                }

                .slider-btn:hover {
                    background: rgba(16, 185, 129, 0.2);
                    transform: translateY(-50%) scale(1.1);
                }

                .slider-btn.prev { left: 0; }
                .slider-btn.next { right: 0; }

                .slider-dots {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-top: 2rem;
                }

                .slider-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .slider-dot.active {
                    background: #10b981;
                    transform: scale(1.2);
                }

                .cost-tool-container {
                    background: rgba(16, 185, 129, 0.05);
                    border: 1px solid rgba(16, 185, 129, 0.1);
                    border-radius: 1.5rem;
                    padding: 3rem;
                    max-width: 800px;
                    margin: 0 auto;
                    text-align: center;
                }

                .cost-tool-header h2 {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    color: #f8fafc;
                }

                .cost-tool-header p {
                    color: #94a3b8;
                    margin-bottom: 2rem;
                }

                .cost-tool-inputs {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .input-group {
                    text-align: left;
                }

                .input-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: #94a3b8;
                    font-size: 0.9rem;
                }

                .input-group input {
                    width: 100%;
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.5rem;
                    padding: 0.75rem;
                    color: white;
                    font-size: 1rem;
                }

                .calc-button {
                    background: #10b981;
                    color: black;
                    border: none;
                    padding: 1rem 3rem;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    margin-bottom: 1.5rem;
                }

                .calc-button:hover {
                    background: #059669;
                    transform: translateY(-2px);
                }

                .cost-result {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #10b981;
                }

                .faq-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .faq-item {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    padding: 1.5rem;
                }

                .faq-item h3 {
                    color: #10b981;
                    font-size: 1.1rem;
                    margin-bottom: 0.5rem;
                }

                .faq-item p {
                    color: #94a3b8;
                    font-size: 0.95rem;
                    line-height: 1.5;
                }

                .blog-preview-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .blog-preview-header h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #f8fafc;
                }

                .blog-preview-header p {
                    color: #94a3b8;
                    font-size: 1.1rem;
                }

                .blog-preview-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .blog-preview-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    overflow: hidden;
                    text-decoration: none;
                    color: inherit;
                    transition: all 0.3s ease;
                }

                .blog-preview-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(16, 185, 129, 0.3);
                }

                .preview-image {
                    height: 200px;
                    background-size: cover;
                    background-position: center;
                }

                .preview-content {
                    padding: 1.5rem;
                }

                .preview-tag {
                    display: inline-block;
                    padding: 0.25rem 0.75rem;
                    background: rgba(16, 185, 129, 0.1);
                    color: #10b981;
                    border-radius: 999px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .preview-content h3 {
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                    color: #f8fafc;
                    line-height: 1.4;
                }

                .preview-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #94a3b8;
                    font-size: 0.9rem;
                }

                .blog-cta {
                    text-align: center;
                }

                .view-all-btn {
                    display: inline-block;
                    padding: 1rem 2rem;
                    background: transparent;
                    border: 1px solid #10b981;
                    color: #10b981;
                    text-decoration: none;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }

                .view-all-btn:hover {
                    background: rgba(16, 185, 129, 0.1);
                    transform: translateY(-2px);
                }

                .scroll-to-top {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: rgba(16, 185, 129, 0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(16, 185, 129, 0.3);
                    color: #10b981;
                    font-size: 24px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(20px);
                    transition: all 0.3s ease;
                    z-index: 1000;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                }

                .scroll-to-top.visible {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .scroll-to-top:hover {
                    background: rgba(16, 185, 129, 0.4);
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 3rem;
                    }

                    .hero-section {
                        flex-direction: column;
                        text-align: center;
                        padding-top: 100px;
                    }

                    .hero-content {
                        margin-bottom: 3rem;
                    }

                    .hero-visual {
                        width: 100%;
                        height: 300px;
                    }

                    .tent-frame {
                        width: 200px;
                        height: 280px;
                    }

                    .slider-slide {
                        grid-template-columns: 1fr;
                    }

                    .scroll-to-top {
                        bottom: 20px;
                        right: 20px;
                        width: 40px;
                        height: 40px;
                        font-size: 20px;
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0) rotateY(0); }
                    50% { transform: translateY(-20px) rotateY(5deg); }
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .fade-in-up {
                    animation: fadeIn 1s ease-out forwards;
                }

                .slide-in {
                    opacity: 0;
                    animation: fadeIn 0.8s ease-out forwards;
                }
            `})]})}function Wr(){let[e,t]=(0,b.useState)(1),[n,r]=(0,b.useState)(!1),{onboardingData:i,updateOnboarding:a,completeOnboarding:o}=Ir(),{getBuilderUrl:s}=P(),c=Gt(),l=[{question:`Hangi bitki türlerini yetiştirmeyi planlıyorsunuz?`,field:`plantType`,options:[{value:`herbs`,label:`Aromatik otlar`,detail:`(fesleğen, nane, kekik)`,icon:`🌿`},{value:`vegetables`,label:`Sebzeler`,detail:`(domates, biber, marul)`,icon:`🥬`},{value:`flowers`,label:`Çiçekli bitkiler`,detail:`(orkide, sardunya)`,icon:`🌺`}],tooltips:{herbs:`Aromatik otlar düşük PPFD seviyelerinde bile gelişebilir, bu nedenle daha az güçlü ışıklarla da verimli yetiştirilebilir.`,vegetables:`Sebzeler özellikle çiçeklenme ve meyve verme dönemlerinde yüksek ışık (600+ µmol/m²/s) ister.`,flowers:`Çiçekli bitkiler için ışık sürekliliği kadar spektrum dengesi de önemlidir; kırmızı ve mavi ışık oranı çiçeklenmeyi etkiler.`}},{question:`Yetiştiricilik deneyiminiz nedir?`,field:`experienceLevel`,options:[{value:`beginner`,label:`Yeni başlıyorum`,icon:`🌱`},{value:`intermediate`,label:`Orta seviye`,icon:`🌿`},{value:`expert`,label:`Deneyimliyim`,icon:`🏆`}],tooltips:{beginner:`Yeni başlayanlar için otomatik zamanlayıcılı ışıklar ve basit toprak karışımları idealdir.`,intermediate:`Orta seviye kullanıcılar için düşük maliyetli sensörler ve küçük havalandırma sistemleri verimi artırabilir.`,expert:`Deneyimli kullanıcılar PPFD haritası çıkararak lamba konumlandırmasını optimize edebilir.`}},{question:`Ne kadar alan ayırmayı planlıyorsunuz?`,field:`tentSize`,options:[{value:`60x60`,label:`Küçük kabin`,detail:`(60×60 cm)`,icon:`📦`},{value:`100x100`,label:`Orta boy çadır`,detail:`(100×100 cm)`,icon:`📦`},{value:`120x120`,label:`Büyük alan`,detail:`(120×120 cm ve üzeri)`,icon:`📦`}],tooltips:{"60x60":`Küçük alanlarda sıcaklık kontrolü zor olabilir, bu yüzden sessiz fanlar ve düşük ısı yayan LED'ler tercih edilmeli.`,"100x100":`Bu boyutlar için 240–320W LED arası ürünler iyi bir başlangıç noktasıdır.`,"120x120":`Geniş alanlar güçlü havalandırma ve 480W+ LED gibi daha fazla ekipman gerektirir.`}},{question:`Aydınlatma sistemi tercihiniz nedir?`,field:`lightPreference`,options:[{value:`led`,label:`LED`,detail:`(enerji verimli, düşük ısı)`,icon:`💡`},{value:`hps`,label:`HPS`,detail:`(yüksek basınçlı sodyum)`,icon:`🔥`},{value:`unsure`,label:`Emin değilim`,detail:`öneri almak istiyorum`,icon:`❓`}],tooltips:{led:`LED'ler uzun ömürlüdür ve farklı spektrumlara sahip modeller ile bitki gelişim evrelerine uygun ışık sunar.`,hps:`HPS lambalar çiçeklenme döneminde yoğun ışık sağlar, ancak daha fazla ısı yayar ve enerji tüketimi yüksektir.`,unsure:`LED teknolojisi çoğu kullanıcı için başlangıç ve uzun vadede daha avantajlıdır; düşük ısı ve modüler tasarımıyla öne çıkar.`}},{question:`Otomasyon seviyeniz ne olacak?`,field:`automationLevel`,options:[{value:`manual`,label:`Tamamen manuel`,detail:`(sulama, ışık kontrolü vb.)`,icon:`✋`},{value:`semi`,label:`Yarı otomatik`,detail:`(zamanlayıcı, fan kontrolü)`,icon:`⚙️`},{value:`full`,label:`Tam otomatik`,detail:`(iklim kontrolü, nem, sulama)`,icon:`🤖`}],tooltips:{manual:`Manuel sistemler düşük bütçelidir ama dikkat gerektirir; günlük kontroller ihmal edilmemelidir.`,semi:`Basit zamanlayıcılar ve sensör destekli fanlar verimliliği artırır ve hata payını azaltır.`,full:`Tam otomasyon, verim artışı sağlar ancak başlangıç maliyeti yüksektir; ileri düzey kullanıcılar için idealdir.`}}],u=l[e-1],d=e/l.length*100,[f,p]=(0,b.useState)(``),m=e=>{a(u.field,e),p(u.tooltips[e]),r(!0)},h=()=>{r(!1),e<l.length?t(e+1):(o(),c(s()))};return b.useEffect(()=>{if(n){let e=setTimeout(()=>{h()},1e4);return()=>clearTimeout(e)}},[n]),(0,N.jsxs)(`div`,{className:`onboarding-container`,children:[(0,N.jsxs)(`div`,{className:`onboarding-bg`,children:[(0,N.jsx)(`div`,{className:`glow-orb orb-green`}),(0,N.jsx)(`div`,{className:`grid-overlay`})]}),(0,N.jsxs)(`div`,{className:`onboarding-content`,children:[(0,N.jsxs)(`div`,{className:`progress-container`,children:[(0,N.jsx)(`div`,{className:`progress-bar`,style:{width:`${d}%`}}),(0,N.jsxs)(`span`,{className:`progress-text`,children:[`Adım `,e,` / `,l.length]})]}),(0,N.jsxs)(`div`,{className:`question-container fade-in`,children:[(0,N.jsx)(`h2`,{className:`question-title`,children:u.question}),(0,N.jsx)(`div`,{className:`options-grid`,children:u.options.map(e=>(0,N.jsxs)(`button`,{onClick:()=>m(e.value),className:`option-card ${i[u.field]===e.value?`selected`:``}`,children:[(0,N.jsx)(`span`,{className:`option-icon`,children:e.icon}),(0,N.jsxs)(`div`,{className:`option-text`,children:[(0,N.jsx)(`span`,{className:`option-label`,children:e.label}),e.detail&&(0,N.jsx)(`span`,{className:`option-detail`,children:e.detail})]})]},e.value))}),n&&(0,N.jsxs)(`div`,{className:`tooltip-box fade-in`,children:[(0,N.jsx)(`p`,{children:f}),(0,N.jsx)(`button`,{onClick:h,className:`btn-continue`,children:`Devam Et →`})]})]}),(0,N.jsxs)(`div`,{className:`nav-buttons`,children:[e>1&&(0,N.jsx)(`button`,{onClick:()=>{e>1&&(t(e-1),r(!1))},className:`btn-secondary`,children:`← Geri`}),(0,N.jsx)(`button`,{onClick:()=>{o(),c(s())},className:`btn-skip`,children:`Atla`})]})]}),(0,N.jsx)(`style`,{children:`
                .onboarding-container {
                    min-height: 100vh;
                    background: #0a0a0a;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    position: relative;
                    overflow: hidden;
                }

                .onboarding-bg {
                    position: fixed;
                    inset: 0;
                    z-index: 0;
                    pointer-events: none;
                }

                .glow-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                    opacity: 0.3;
                }

                .orb-green {
                    width: 500px;
                    height: 500px;
                    background: #10b981;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
                    background-size: 50px 50px;
                }

                .onboarding-content {
                    max-width: 800px;
                    width: 100%;
                    position: relative;
                    z-index: 1;
                }

                .progress-container {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 999px;
                    height: 8px;
                    margin-bottom: 3rem;
                    position: relative;
                    overflow: hidden;
                }

                .progress-bar {
                    height: 100%;
                    background: linear-gradient(90deg, #10b981, #3b82f6);
                    border-radius: 999px;
                    transition: width 0.5s ease;
                }

                .progress-text {
                    position: absolute;
                    top: -30px;
                    right: 0;
                    font-size: 0.875rem;
                    color: #94a3b8;
                }

                .question-container {
                    text-align: center;
                }

                .question-title {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 3rem;
                    line-height: 1.3;
                }

                .options-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .option-card {
                    background: rgba(255, 255, 255, 0.05);
                    border: 2px solid rgba(255, 255, 255, 0.15);
                    border-radius: 1rem;
                    padding: 2rem 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    color: #fff;
                }

                .option-card:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(16, 185, 129, 0.6);
                    transform: translateY(-5px);
                }

                .option-card.selected {
                    background: rgba(16, 185, 129, 0.2);
                    border-color: #10b981;
                }

                .option-icon {
                    font-size: 3rem;
                }

                .option-text {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    align-items: center;
                }

                .option-label {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #ffffff;
                }

                .option-detail {
                    font-size: 0.875rem;
                    color: #94a3b8;
                    font-weight: 400;
                }

                .tooltip-box {
                    background: rgba(16, 185, 129, 0.15);
                    border: 1px solid rgba(16, 185, 129, 0.4);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    margin-top: 2rem;
                    text-align: center;
                    color: #ffffff;
                }

                .tooltip-box p {
                    line-height: 1.6;
                    margin-bottom: 1rem;
                    font-size: 1rem;
                }

                .btn-continue {
                    background: #10b981;
                    color: white;
                    border: none;
                    padding: 0.75rem 2rem;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                    margin-top: 0.5rem;
                }

                .btn-continue:hover {
                    background: #059669;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
                }

                .nav-buttons {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 3rem;
                }

                .btn-secondary, .btn-skip {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-size: 1rem;
                }

                .btn-secondary:hover, .btn-skip:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }

                /* Mobile */
                @media (max-width: 768px) {
                    .question-title {
                        font-size: 1.5rem;
                    }

                    .options-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }

                    .option-card {
                        flex-direction: row;
                        padding: 1rem;
                    }

                    .option-icon {
                        font-size: 2rem;
                    }
                }
            `})]})}function Gr(){let{state:e}=Er(),{formatPrice:t,t:n}=P(),{cost:r,power:i,cfmRequired:a}=e.totals;return(0,N.jsx)(`div`,{className:`glass-header no-print`,style:{position:`sticky`,top:`53px`,zIndex:900,padding:`1rem 0`,borderBottom:`1px solid rgba(255,255,255,0.05)`},children:(0,N.jsxs)(`div`,{className:`container`,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,flexWrap:`wrap`,gap:`0.5rem`},children:[(0,N.jsx)(`div`,{className:`mobile-hide`,style:{fontSize:`0.875rem`,color:`var(--text-muted)`},children:n(`buildingSetup`)}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`1.5rem`,flexWrap:`wrap`,justifyContent:`flex-end`},children:[(0,N.jsx)(Kr,{label:n(`estCost`),value:t(r),highlight:!0}),(0,N.jsx)(Kr,{label:n(`power`),value:`${i}W`}),(0,N.jsx)(Kr,{label:n(`reqCFM`),value:`${a} CFM`})]})]})})}function Kr({label:e,value:t,highlight:n}){return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`flex-end`},children:[(0,N.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`var(--text-muted)`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:e}),(0,N.jsx)(`span`,{style:{fontWeight:`700`,color:n?`var(--color-primary)`:`var(--text-primary)`,fontSize:`1.1rem`,textShadow:n?`0 0 10px rgba(16, 185, 129, 0.3)`:`none`},children:t})]})}function qr(){let{state:e,dispatch:t}=Er(),{t:n}=P(),{currentStep:r}=e,i=[{num:1,key:`step1`},{num:2,key:`step2`},{num:3,key:`step3`},{num:4,key:`step4`},{num:5,key:`step5_media`},{num:6,key:`step6`},{num:7,key:`step7`},{num:8,key:`step8`}],a=r/i.length*100;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`div`,{className:`mobile-progress no-print`,style:{display:`none`,marginBottom:`1.5rem`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`0.5rem`},children:[(0,N.jsx)(`span`,{style:{fontSize:`0.875rem`,fontWeight:`600`,color:`var(--color-primary)`},children:n(i[r-1].key)}),(0,N.jsxs)(`span`,{style:{fontSize:`0.75rem`,color:`var(--text-muted)`},children:[r,` / `,i.length]})]}),(0,N.jsx)(`div`,{style:{width:`100%`,height:`6px`,background:`var(--bg-surface)`,borderRadius:`999px`,overflow:`hidden`},children:(0,N.jsx)(`div`,{style:{width:`${a}%`,height:`100%`,background:`linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,transition:`width 0.3s ease`,borderRadius:`999px`}})})]}),(0,N.jsx)(`div`,{className:`desktop-progress no-print`,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`2rem`,position:`relative`},children:i.map((e,a)=>{let o=r===e.num,s=r>e.num,c=r>e.num;return(0,N.jsxs)(`div`,{onClick:()=>c&&t({type:`SET_STEP`,payload:e.num}),style:{display:`flex`,flexDirection:`column`,alignItems:`center`,flex:1,position:`relative`,cursor:c?`pointer`:`default`,zIndex:1},children:[(0,N.jsx)(`div`,{style:{width:`40px`,height:`40px`,borderRadius:`50%`,background:o||s?`var(--color-primary)`:`var(--bg-surface)`,border:`2px solid ${o||s?`var(--color-primary)`:`var(--border-color)`}`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:`bold`,fontSize:`0.875rem`,color:o||s?`#000`:`var(--text-muted)`,transition:`all 0.3s ease`,boxShadow:o?`0 0 0 4px rgba(16, 185, 129, 0.2)`:`none`},children:s?`✓`:e.num}),(0,N.jsx)(`span`,{style:{marginTop:`0.5rem`,fontSize:`0.75rem`,color:o?`var(--color-primary)`:s?`var(--text-secondary)`:`var(--text-muted)`,fontWeight:o?`600`:`400`,textAlign:`center`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:n(e.key)}),a<i.length-1&&(0,N.jsx)(`div`,{style:{position:`absolute`,top:`20px`,left:`50%`,width:`calc(100% - 40px)`,height:`2px`,background:s?`var(--color-primary)`:`var(--border-color)`,zIndex:-1,transition:`background 0.3s ease`}})]},e.num)})}),(0,N.jsx)(`style`,{children:`
                @media (max-width: 768px) {
                    .mobile-progress {
                        display: block !important;
                    }
                    .desktop-progress {
                        display: none !important;
                    }
                }
            `})]})}function Jr({children:e}){let{t,language:n,setLanguage:r,currency:i,setCurrency:a,unitSystem:o,setUnitSystem:s}=P();return(0,N.jsxs)(`div`,{style:{minHeight:`100vh`,display:`flex`,flexDirection:`column`,background:`radial-gradient(circle at top center, #1e293b 0%, #0f172a 50%)`},children:[(0,N.jsx)(Gr,{}),(0,N.jsxs)(`main`,{className:`container`,style:{flex:1,padding:`2rem 1rem`,maxWidth:`1000px`,margin:`0 auto`,width:`100%`},children:[(0,N.jsx)(qr,{}),(0,N.jsxs)(`div`,{className:`glass-panel slide-up`,style:{padding:`2.5rem`,borderRadius:`var(--radius-lg)`,marginTop:`2rem`,position:`relative`,overflow:`hidden`},children:[(0,N.jsx)(`div`,{style:{position:`absolute`,top:`-50%`,left:`-50%`,width:`200%`,height:`200%`,background:`radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)`,pointerEvents:`none`,zIndex:0}}),(0,N.jsx)(`div`,{style:{position:`relative`,zIndex:1},children:e})]})]}),(0,N.jsxs)(`footer`,{className:`no-print`,style:{textAlign:`center`,padding:`2rem`,color:`var(--text-muted)`,fontSize:`0.875rem`,borderTop:`1px solid rgba(255,255,255,0.05)`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:`1rem`,marginBottom:`1rem`,flexWrap:`wrap`},children:[(0,N.jsxs)(`select`,{value:n,onChange:e=>r(e.target.value),style:{padding:`0.5rem 1rem`,background:`var(--bg-surface)`,color:`var(--text-primary)`,border:`1px solid var(--border-color)`,borderRadius:`var(--radius-sm)`,cursor:`pointer`,fontSize:`0.875rem`},children:[(0,N.jsx)(`option`,{value:`en`,children:`🇬🇧 EN`}),(0,N.jsx)(`option`,{value:`tr`,children:`🇹🇷 TR`})]}),(0,N.jsxs)(`select`,{value:i,onChange:e=>a(e.target.value),style:{padding:`0.5rem 1rem`,background:`var(--bg-surface)`,color:`var(--text-primary)`,border:`1px solid var(--border-color)`,borderRadius:`var(--radius-sm)`,cursor:`pointer`,fontSize:`0.875rem`},children:[(0,N.jsx)(`option`,{value:`USD`,children:`$ USD`}),(0,N.jsx)(`option`,{value:`EUR`,children:`€ EUR`}),(0,N.jsx)(`option`,{value:`TRY`,children:`₺ TRY`})]}),(0,N.jsxs)(`select`,{value:o,onChange:e=>s(e.target.value),style:{padding:`0.5rem 1rem`,background:`var(--bg-surface)`,color:`var(--text-primary)`,border:`1px solid var(--border-color)`,borderRadius:`var(--radius-sm)`,cursor:`pointer`,fontSize:`0.875rem`},children:[(0,N.jsx)(`option`,{value:`IMPERIAL`,children:`ft`}),(0,N.jsx)(`option`,{value:`METRIC`,children:`cm`})]})]}),(0,N.jsx)(`p`,{children:t(`footer`)})]})]})}var Yr=[{label:`2x2 (Small)`,width:2,depth:2,height:4},{label:`2x4 (Compact)`,width:2,depth:4,height:5},{label:`3x3 (Medium)`,width:3,depth:3,height:6},{label:`4x4 (Standard)`,width:4,depth:4,height:7},{label:`5x5 (Large)`,width:5,depth:5,height:7},{label:`4x8 (X-Large)`,width:4,depth:8,height:7}];function Xr(){let{state:e,dispatch:t}=Er(),{t:n,unitSystem:r,formatUnit:i,getUnitLabel:a}=P(),{tentSize:o}=e,[s,c]=(0,b.useState)(!1),[l,u]=(0,b.useState)({width:o.width,depth:o.depth,height:o.height});(0,b.useEffect)(()=>{u({width:o.width,depth:o.depth,height:o.height})},[o]);let d=e=>{c(!1),t({type:`SET_TENT_SIZE`,payload:{width:e.width,depth:e.depth,height:e.height,unit:`ft`}})},f=()=>{let e=l.width,n=l.depth,i=l.height;r===`METRIC`&&(e/=30.48,n/=30.48,i/=30.48),t({type:`SET_TENT_SIZE`,payload:{width:e,depth:n,height:i,unit:`ft`}})},p=()=>{t({type:`NEXT_STEP`})},m=a(`length`),h=a(`area`),g=a(`volume`);return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h2`,{style:{marginBottom:`1rem`,color:`var(--color-primary)`},children:n(`selectTent`)}),(0,N.jsx)(`p`,{style:{marginBottom:`2rem`,color:`var(--text-secondary)`},children:n(`tentDesc`)}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(280px, 1fr))`,gap:`1rem`,marginBottom:`2rem`},children:Yr.map(t=>{let r=!s&&e.tentSize.width===t.width&&e.tentSize.depth===t.depth,a=t.width*t.depth,o=t.width*t.depth*t.height;return(0,N.jsxs)(`button`,{onClick:()=>d(t),className:`card-interactive`,style:{padding:`1.5rem`,background:r?`var(--bg-surface-hover)`:`var(--bg-card)`,border:`2px solid ${r?`var(--color-primary)`:`var(--border-color)`}`,borderRadius:`var(--radius-md)`,cursor:`pointer`,textAlign:`left`,position:`relative`,color:`var(--text-primary)`},children:[(0,N.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.1rem`,marginBottom:`0.5rem`,color:r?`var(--color-primary)`:`var(--text-primary)`},children:t.label}),(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.25rem`,fontSize:`0.875rem`,color:`var(--text-secondary)`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsxs)(`span`,{children:[n(`dimensions`),`:`]}),(0,N.jsxs)(`span`,{style:{fontWeight:`500`},children:[i(t.width),` x `,i(t.depth),` x `,i(t.height),` `,m]})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsxs)(`span`,{children:[n(`area`),`:`]}),(0,N.jsxs)(`span`,{style:{fontWeight:`500`},children:[i(a,`area`),` `,h]})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsxs)(`span`,{children:[n(`volume`),`:`]}),(0,N.jsxs)(`span`,{style:{fontWeight:`500`},children:[i(o,`volume`),` `,g]})]})]})]},t.label)})}),(0,N.jsxs)(`div`,{style:{marginBottom:`2rem`},children:[(0,N.jsx)(`button`,{onClick:()=>c(!s),style:{background:`transparent`,border:`none`,color:`var(--color-primary)`,cursor:`pointer`,textDecoration:`underline`,marginBottom:`1rem`,fontSize:`0.9rem`},children:s?`Hide Custom Dimensions`:n(`customDim`)}),s&&(0,N.jsxs)(`div`,{className:`fade-in glass-panel`,style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`,padding:`1.5rem`,borderRadius:`var(--radius-md)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`label`,{style:{display:`block`,marginBottom:`0.5rem`,fontSize:`0.875rem`,color:`var(--text-secondary)`},children:[n(`width`),` (`,m,`)`]}),(0,N.jsx)(`input`,{type:`number`,name:`width`,value:r===`METRIC`?(l.width*30.48).toFixed(0):l.width,onChange:e=>u(t=>({...t,width:parseFloat(e.target.value)||0})),style:Zr})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`label`,{style:{display:`block`,marginBottom:`0.5rem`,fontSize:`0.875rem`,color:`var(--text-secondary)`},children:[n(`depth`),` (`,m,`)`]}),(0,N.jsx)(`input`,{type:`number`,name:`depth`,value:r===`METRIC`?(l.depth*30.48).toFixed(0):l.depth,onChange:e=>u(t=>({...t,depth:parseFloat(e.target.value)||0})),style:Zr})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`label`,{style:{display:`block`,marginBottom:`0.5rem`,fontSize:`0.875rem`,color:`var(--text-secondary)`},children:[n(`height`),` (`,m,`)`]}),(0,N.jsx)(`input`,{type:`number`,name:`height`,value:r===`METRIC`?(l.height*30.48).toFixed(0):l.height,onChange:e=>u(t=>({...t,height:parseFloat(e.target.value)||0})),style:Zr})]}),(0,N.jsx)(`div`,{style:{gridColumn:`1 / -1`},children:(0,N.jsx)(`button`,{onClick:f,style:{padding:`0.75rem 1.5rem`,background:`var(--bg-surface)`,border:`1px solid var(--border-color)`,borderRadius:`var(--radius-sm)`,cursor:`pointer`,fontSize:`0.875rem`,color:`var(--text-primary)`,width:`100%`},children:`Apply Custom Dimensions`})})]})]}),(0,N.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,N.jsxs)(`button`,{onClick:p,style:{padding:`0.75rem 2rem`,background:`var(--color-primary)`,color:`#000`,fontWeight:`bold`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:`pointer`,border:`none`,boxShadow:`0 4px 14px 0 rgba(16, 185, 129, 0.39)`},children:[n(`next`),` →`]})})]})}var Zr={width:`100%`,padding:`0.75rem`,background:`rgba(0, 0, 0, 0.2)`,border:`1px solid var(--border-color)`,borderRadius:`var(--radius-sm)`,color:`var(--text-primary)`,fontSize:`1rem`,outline:`none`};function Qr(e,t,n,r,i,a){if(!e.maxPPFD)return 0;let o=t-r,s=n-i,c=Math.sqrt(o*o+s*s),l=Math.atan(c/a),u=e.maxPPFD;if(e.recommendedHeight){let t=(e.recommendedHeight/12/Math.max(.5,a))**2;u=e.maxPPFD*t}let d=Math.cos(l);return(e.beamAngle||120)*Math.PI/180/2,u*d}function $r(e,t,n,r=4,i=null){let a=Math.ceil(e*r),o=Math.ceil(t*r),s=Array(o).fill(0).map(()=>Array(a).fill(0)),c=e=>(e+.5)/r;return n.forEach(n=>{let r=n.quantity||1,l=n.positions||[];for(let u=0;u<r;u++){let r=l[u]||{x:.5,y:.5},d=r.x*e,f=r.y*t,p=i;p===null&&(p=n.recommendedHeight?n.recommendedHeight/12:1.5);for(let e=0;e<o;e++){let t=c(e);for(let r=0;r<a;r++){let i=Qr(n,c(r),t,d,f,p);s[e][r]+=i}}}}),s}function ei(e){let t=0,n=1/0,r=-1/0,i=0;for(let a=0;a<e.length;a++)for(let o=0;o<e[a].length;o++){let s=e[a][o];t+=s,s<n&&(n=s),s>r&&(r=s),i++}if(i===0)return{average:0,min:0,max:0,uniformity:0};let a=t/i,o=a>0?n/a:0;return{average:Math.round(a),min:Math.round(n),max:Math.round(r),uniformity:parseFloat(o.toFixed(2))}}function ti(){let[e,t]=(0,b.useState)(!1),n=[{range:`0 - 100`,color:`#000000`,bg:`#333`,label:`Yetersiz`,desc:`Fotosentez başlamaz, bitki ölür.`,effect:`Yetersiz Işık`},{range:`100 - 300`,color:`#0000FF`,bg:`rgba(0, 0, 255, 0.2)`,label:`Fide / Klon`,desc:`Köklendirme ve ilk yaprak gelişimi için ideal.`,effect:`Köklenme`},{range:`300 - 600`,color:`#008000`,bg:`rgba(0, 128, 0, 0.2)`,label:`Vejetatif`,desc:`Sağlıklı gövde ve yaprak büyümesi.`,effect:`Büyüme`},{range:`600 - 900`,color:`#FFA500`,bg:`rgba(255, 165, 0, 0.2)`,label:`Çiçeklenme`,desc:`Yüksek verimli çiçek/meyve üretimi.`,effect:`Verim`},{range:`900 - 1200`,color:`#FF0000`,bg:`rgba(255, 0, 0, 0.2)`,label:`Yüksek Yoğunluk`,desc:`Deneyimli yetiştirici seviyesi. Dikkatli besleme gerektirir.`,effect:`Stres Riski`},{range:`> 1200`,color:`#FFFFFF`,bg:`rgba(255, 255, 255, 0.3)`,label:`CO2 / Yanık Riski`,desc:`CO2 olmadan yaprak hasarı oluşur. Sadece profesyonel sistemler.`,effect:`Tehlike`}];return(0,N.jsxs)(`div`,{style:{marginTop:`1rem`,position:`relative`},children:[(0,N.jsxs)(`button`,{onClick:()=>t(!e),style:{background:`var(--bg-surface)`,border:`1px solid var(--border-color)`,color:`var(--text-secondary)`,padding:`0.5rem 1rem`,borderRadius:`var(--radius-full)`,fontSize:`0.8rem`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`0.5rem`,margin:`0 auto`,transition:`all 0.2s ease`,minHeight:`44px`,justifyContent:`center`},children:[`ℹ️ PPFD Rehberi `,e?`▲`:`▼`]}),e&&(0,N.jsxs)(`div`,{className:`fade-in`,style:{marginTop:`1rem`,background:`rgba(30, 30, 30, 0.95)`,backdropFilter:`blur(10px)`,borderRadius:`var(--radius-md)`,border:`1px solid var(--border-color)`,padding:`1rem`,boxShadow:`0 4px 20px rgba(0,0,0,0.5)`},children:[(0,N.jsx)(`div`,{className:`desktop-view`,children:(0,N.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.85rem`},children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{style:{borderBottom:`1px solid var(--border-color)`,color:`var(--text-secondary)`},children:[(0,N.jsx)(`th`,{style:{padding:`0.75rem`,textAlign:`left`},children:`PPFD (μmol/m²/s)`}),(0,N.jsx)(`th`,{style:{padding:`0.75rem`,textAlign:`left`},children:`Durum`}),(0,N.jsx)(`th`,{style:{padding:`0.75rem`,textAlign:`left`},children:`Açıklama`}),(0,N.jsx)(`th`,{style:{padding:`0.75rem`,textAlign:`left`},children:`Etki`})]})}),(0,N.jsx)(`tbody`,{children:n.map((e,t)=>(0,N.jsxs)(`tr`,{style:{borderBottom:`1px solid rgba(255,255,255,0.05)`,background:e.bg,transition:`background 0.2s`},children:[(0,N.jsx)(`td`,{style:{padding:`0.75rem`,fontWeight:`bold`},children:e.range}),(0,N.jsxs)(`td`,{style:{padding:`0.75rem`},children:[(0,N.jsx)(`span`,{style:{display:`inline-block`,width:`10px`,height:`10px`,borderRadius:`50%`,background:e.color,marginRight:`0.5rem`,border:e.color===`#FFFFFF`||e.color===`#000000`?`1px solid #555`:`none`}}),e.label]}),(0,N.jsx)(`td`,{style:{padding:`0.75rem`,color:`var(--text-secondary)`},children:e.desc}),(0,N.jsx)(`td`,{style:{padding:`0.75rem`,fontStyle:`italic`},children:e.effect})]},t))})]})}),(0,N.jsx)(`div`,{className:`mobile-view`,style:{display:`none`,flexDirection:`column`,gap:`0.75rem`},children:n.map((e,t)=>(0,N.jsxs)(`div`,{style:{background:e.bg,borderRadius:`var(--radius-sm)`,padding:`1rem`,border:`1px solid rgba(255,255,255,0.05)`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`0.5rem`},children:[(0,N.jsx)(`span`,{style:{fontWeight:`bold`,fontSize:`1rem`},children:e.range}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,fontSize:`0.9rem`},children:[(0,N.jsx)(`span`,{style:{display:`inline-block`,width:`8px`,height:`8px`,borderRadius:`50%`,background:e.color,marginRight:`0.5rem`,border:e.color===`#FFFFFF`||e.color===`#000000`?`1px solid #555`:`none`}}),e.label]})]}),(0,N.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`var(--text-secondary)`,marginBottom:`0.5rem`},children:e.desc}),(0,N.jsxs)(`div`,{style:{fontSize:`0.8rem`,fontStyle:`italic`,color:`var(--text-muted)`,borderTop:`1px solid rgba(255,255,255,0.1)`,paddingTop:`0.5rem`},children:[`Etki: `,e.effect]})]},t))}),(0,N.jsx)(`style`,{children:`
                        @media (max-width: 768px) {
                            .desktop-view {
                                display: none;
                            }
                            .mobile-view {
                                display: flex !important;
                            }
                        }
                    `})]})]})}function ni(){let{state:e,dispatch:t}=Er(),{t:n,formatUnit:r,getUnitLabel:i}=P(),{tentSize:a,selectedItems:o}=e,s=o.lighting,c=(0,b.useRef)(null),l=(0,b.useRef)(null),[u,d]=(0,b.useState)(null),[f,p]=(0,b.useState)({average:0,min:0,max:0,uniformity:0}),[m,h]=(0,b.useState)(1.5);(0,b.useEffect)(()=>{s.forEach(e=>{let n=e.quantity||1;if(!e.positions||e.positions.length!==n){let r=Array(n).fill(0).map((e,t)=>({x:.5+(Math.random()*.2-.1),y:.5+(Math.random()*.2-.1)}));t({type:`UPDATE_ITEM_POSITIONS`,payload:{category:`lighting`,itemId:e.id,positions:r}})}})},[s,t]),(0,b.useEffect)(()=>{if(!l.current)return;let e=l.current,t=e.getContext(`2d`),{width:n,depth:r}=a,i=$r(n,r,s,4,m);p(ei(i));let o=i[0].length,c=i.length;e.width=o,e.height=c;let u=t.createImageData(o,c),d=u.data,f=[400,600,900];for(let e=0;e<c;e++)for(let t=0;t<o;t++){let n=i[e][t],r=(e*o+t)*4,a,s,l,u;if(n<200){let e=n/200;a=30+50*e,s=30+50*e,l=30+50*e,u=180}else if(n<400){let e=(n-200)/200;a=50*e,s=50*e,l=150+105*e,u=180}else if(n<600){let e=(n-400)/200;a=50*(1-e),s=150+105*e,l=50*(1-e),u=180}else if(n<900){let e=(n-600)/300;a=200+55*e,s=200+55*(1-e*.5),l=0,u=190}else if(n<1200){let e=(n-900)/300;a=255,s=100*(1-e),l=0,u=200}else a=255,s=255,l=255,u=220;let p=!1;if(t<o-1){let r=i[e][t+1];for(let e of f)if(n<e&&r>=e||n>=e&&r<e){p=!0;break}}if(!p&&e<c-1){let r=i[e+1][t];for(let e of f)if(n<e&&r>=e||n>=e&&r<e){p=!0;break}}p&&(a=255,s=255,l=255,u=255),d[r]=a,d[r+1]=s,d[r+2]=l,d[r+3]=u}t.putImageData(u,0,0)},[s,a,m]);let g=(e,t,n,r,i)=>{e.preventDefault(),e.stopPropagation();let a=c.current.getBoundingClientRect();d({id:t,index:n,startX:e.clientX,startY:e.clientY,initialX:r,initialY:i,rect:a}),e.target.setPointerCapture(e.pointerId)},_=e=>{if(!u)return;let n=(e.clientX-u.startX)/u.rect.width,r=(e.clientY-u.startY)/u.rect.height,i=Math.max(0,Math.min(1,u.initialX+n)),a=Math.max(0,Math.min(1,u.initialY+r)),o=s.find(e=>e.id===u.id);if(o){let e=[...o.positions||[]],n=e[u.index].rotation||0;e[u.index]={x:i,y:a,rotation:n},t({type:`UPDATE_ITEM_POSITIONS`,payload:{category:`lighting`,itemId:u.id,positions:e}})}},v=e=>{u&&(e.target.releasePointerCapture(e.pointerId),d(null))},y=(e,n,r)=>{e.preventDefault(),e.stopPropagation();let i=s.find(e=>e.id===n);if(i){let e=[...i.positions||[]],a=(e[r].rotation||0)===0?90:0;e[r]={...e[r],rotation:a},t({type:`UPDATE_ITEM_POSITIONS`,payload:{category:`lighting`,itemId:n,positions:e}})}},x=a.width/a.depth;return(0,N.jsxs)(`div`,{className:`fade-in`,style:{marginBottom:`2rem`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`1rem`},children:[(0,N.jsx)(`h3`,{style:{margin:0,color:`var(--text-primary)`},children:n(`lightPlacementTitle`)}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,N.jsx)(`label`,{style:{fontSize:`0.8rem`,color:`var(--text-secondary)`},children:`Height:`}),(0,N.jsx)(`input`,{type:`range`,min:`0.5`,max:`5`,step:`0.1`,value:m,onChange:e=>h(parseFloat(e.target.value)),style:{width:`100px`}}),(0,N.jsxs)(`span`,{style:{fontSize:`0.8rem`,color:`var(--text-primary)`,minWidth:`3rem`},children:[r(m,`length`),` `,i(`length`)]})]})]}),(0,N.jsx)(`p`,{style:{marginBottom:`1rem`,fontSize:`0.8rem`,color:`var(--text-secondary)`},children:n(`dragTip`)}),(0,N.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,gap:`0.5rem`,marginBottom:`1rem`,background:`var(--bg-surface)`,padding:`0.5rem`,borderRadius:`var(--radius-sm)`},children:[(0,N.jsx)(ri,{label:n(`avgPPFD`),value:f.average,unit:`µmol`}),(0,N.jsx)(ri,{label:n(`minPPFD`),value:f.min,unit:`µmol`}),(0,N.jsx)(ri,{label:n(`maxPPFD`),value:f.max,unit:`µmol`}),(0,N.jsx)(ri,{label:n(`uniformity`),value:f.uniformity,unit:``})]}),(0,N.jsxs)(`div`,{ref:c,style:{width:`100%`,maxWidth:`500px`,aspectRatio:`${x}`,background:`#1a1a1a`,position:`relative`,margin:`0 auto`,border:`2px solid var(--border-color)`,borderRadius:`var(--radius-md)`,overflow:`hidden`,touchAction:`none`},onPointerMove:_,onPointerUp:v,onPointerLeave:v,children:[(0,N.jsx)(`canvas`,{ref:l,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,opacity:.6,imageRendering:`pixelated`}}),(0,N.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)`,backgroundSize:`20% 20%`,opacity:.2,pointerEvents:`none`}}),s.map(e=>{let t=e.quantity||1;return(e.positions||Array(t).fill({x:.5,y:.5})).map((t,n)=>{let r=e.physicalWidth||1,i=e.physicalDepth||1,o=r/a.width*100,s=i/a.depth*100,c=t.rotation||0;return(0,N.jsx)(`div`,{style:{position:`absolute`,left:`${t.x*100}%`,top:`${t.y*100}%`,width:`${o}%`,height:`${s}%`,transform:`translate(-50%, -50%) rotate(${c}deg)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:10,transition:`transform 0.2s ease`},children:(0,N.jsx)(`div`,{onPointerDown:r=>g(r,e.id,n,t.x,t.y),onDoubleClick:t=>y(t,e.id,n),style:{width:`100%`,height:`100%`,background:`rgba(255, 255, 255, 0.1)`,border:`2px solid #fff`,borderRadius:`2px`,cursor:`move`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 2px 4px rgba(0,0,0,0.5)`,backdropFilter:`blur(2px)`},children:(0,N.jsx)(`span`,{style:{fontSize:`0.6rem`,color:`#fff`,pointerEvents:`none`,textShadow:`0 1px 2px black`,transform:`rotate(-${c}deg)`},children:e.name.split(` `)[0]})})},`${e.id}-${n}`)})})]}),(0,N.jsxs)(`div`,{style:{textAlign:`center`,marginTop:`0.5rem`,fontSize:`0.8rem`,color:`var(--text-secondary)`},children:[r(a.width),` x `,r(a.depth),` `,i(`length`),` `,n(`tentFloor`)]}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,flexWrap:`wrap`,gap:`1rem`,marginTop:`1rem`,fontSize:`0.7rem`,color:`var(--text-secondary)`,maxWidth:`600px`,marginInline:`auto`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`},children:[(0,N.jsx)(`span`,{style:{width:10,height:10,background:`#555`}}),` <200 (`,n(`low`),`)`]}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`},children:[(0,N.jsx)(`span`,{style:{width:10,height:10,background:`blue`}}),` 200-400 (`,n(`seedling`),`)`]}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`},children:[(0,N.jsx)(`span`,{style:{width:10,height:10,background:`green`}}),` 400-600 (`,n(`veg`),`)`]}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`},children:[(0,N.jsx)(`span`,{style:{width:10,height:10,background:`orange`}}),` 600-900 (`,n(`flower`),`)`]}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`},children:[(0,N.jsx)(`span`,{style:{width:10,height:10,background:`red`}}),` 900-1200 (`,n(`high`),`)`]}),(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.25rem`},children:[(0,N.jsx)(`span`,{style:{width:10,height:10,background:`white`,border:`1px solid #555`}}),` >1200 (`,n(`high`),`)`]})]}),(0,N.jsx)(ti,{})]})}function ri({label:e,value:t,unit:n}){return(0,N.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,N.jsx)(`div`,{style:{fontSize:`0.7rem`,color:`var(--text-secondary)`,marginBottom:`0.1rem`},children:e}),(0,N.jsxs)(`div`,{style:{fontSize:`0.9rem`,fontWeight:`bold`,color:`var(--text-primary)`},children:[t,` `,(0,N.jsx)(`span`,{style:{fontSize:`0.7rem`,fontWeight:`normal`},children:n})]})]})}var ii=[{id:`led-100`,name:`Quantum Board 100W LED`,type:`LED`,watts:100,price:85,coverage:4,physicalWidth:1,physicalDepth:1,maxPPFD:800,beamAngle:120,recommendedHeight:12},{id:`led-240`,name:`Quantum Board 240W LED`,type:`LED`,watts:240,price:180,coverage:9,physicalWidth:2,physicalDepth:1,maxPPFD:1800,beamAngle:120,recommendedHeight:18},{id:`led-480`,name:`Bar Style 480W LED`,type:`LED`,watts:480,price:420,coverage:16,physicalWidth:3,physicalDepth:3,maxPPFD:2200,beamAngle:120,recommendedHeight:24},{id:`led-650`,name:`Bar Style 650W LED`,type:`LED`,watts:650,price:600,coverage:25,physicalWidth:3.6,physicalDepth:3.6,maxPPFD:2600,beamAngle:120,recommendedHeight:30},{id:`hps-600`,name:`600W HPS Kit`,type:`HPS`,watts:600,price:150,coverage:16,physicalWidth:1.6,physicalDepth:1,maxPPFD:1100,beamAngle:140,recommendedHeight:24},{id:`hps-1000`,name:`1000W DE HPS Kit`,type:`HPS`,watts:1e3,price:220,coverage:25,physicalWidth:2.3,physicalDepth:1.1,maxPPFD:1800,beamAngle:140,recommendedHeight:36}];function ai(){let{state:e,dispatch:t}=Er(),{t:n,formatPrice:r,formatUnit:i,getUnitLabel:a}=P(),{tentSize:o,selectedItems:s}=e,c=s.lighting,[l,u]=(0,b.useState)(null),d=o.width*o.depth,f=c.reduce((e,t)=>e+t.coverage*(t.quantity||1),0),p=Math.max(0,d-f),m=f>=d,h=d*30,g=e=>{let t=e.physicalWidth,n=e.physicalDepth,r=o.width,s=o.depth;if(!(t<=r&&n<=s)&&!(t<=s&&n<=r)){let o=a(`length`);return{hasConflict:!0,message:`Warning: ${e.name} (${i(t,`length`)}x${i(n,`length`)}${o}) is too large for your tent (${i(r,`length`)}x${i(s,`length`)}${o})!`}}return{hasConflict:!1}},_=e=>{if(c.find(t=>t.id===e.id))t({type:`REMOVE_ITEM`,payload:{category:`lighting`,itemId:e.id}}),u(null);else{let n=g(e);if(n.hasConflict){u(n.message),setTimeout(()=>u(null),4e3);return}t({type:`ADD_ITEM`,payload:{category:`lighting`,item:e}}),u(null)}},v=()=>{t({type:`NEXT_STEP`})},y=()=>{t({type:`PREV_STEP`})},x=a(`area`);return(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`h2`,{style:{marginBottom:`1rem`,color:`var(--color-primary)`},children:[`💡 `,n(`step2`)]}),l&&(0,N.jsx)(`div`,{className:`fade-in`,style:{position:`fixed`,top:`20px`,left:`50%`,transform:`translateX(-50%)`,background:`#ff5252`,color:`white`,padding:`1rem 2rem`,borderRadius:`var(--radius-md)`,boxShadow:`0 4px 12px rgba(0,0,0,0.3)`,zIndex:1e3,fontWeight:`bold`,textAlign:`center`},children:l}),c.length>0&&(0,N.jsx)(ni,{}),m&&(0,N.jsxs)(`div`,{style:{marginBottom:`1.5rem`,padding:`0.75rem`,background:`rgba(16, 185, 129, 0.1)`,border:`1px solid var(--color-primary)`,borderRadius:`var(--radius-md)`,color:`var(--color-primary)`,textAlign:`center`,fontWeight:`bold`,fontSize:`0.875rem`},children:[`✓ `,n(`fullycovered`)]}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(280px, 1fr))`,gap:`1rem`,marginBottom:`2rem`},children:ii.map(e=>{let a=c.find(t=>t.id===e.id),o=!!a,s=a?.quantity||0,l=Math.abs(e.coverage-d)<5;return(0,N.jsxs)(`div`,{style:{padding:`1rem`,background:o?`var(--bg-surface-hover)`:`var(--bg-card)`,border:`2px solid ${o?`var(--color-primary)`:`var(--border-color)`}`,borderRadius:`var(--radius-md)`,position:`relative`,transition:`all 0.2s ease`},children:[l&&(0,N.jsx)(`div`,{style:{position:`absolute`,top:`-10px`,right:`10px`,background:`var(--color-primary)`,color:`#000`,fontSize:`0.75rem`,padding:`2px 8px`,borderRadius:`10px`,fontWeight:`bold`},children:n(`bestFit`)}),(0,N.jsx)(`div`,{style:{fontWeight:`bold`,marginBottom:`0.25rem`},children:e.name}),(0,N.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`var(--text-secondary)`,marginBottom:`0.5rem`},children:[e.watts,`W • `,i(e.coverage,`area`),` `,x,` `,n(`coverage`)]}),(0,N.jsx)(`div`,{style:{color:`var(--color-primary)`,fontWeight:`bold`,marginBottom:`1rem`},children:r(e.price)}),o?(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,alignItems:`center`},children:[(0,N.jsx)(`button`,{onClick:n=>{n.stopPropagation(),t({type:`DECREMENT_ITEM`,payload:{category:`lighting`,itemId:e.id}})},style:{flex:1,padding:`0.5rem`,background:`var(--bg-surface)`,color:`var(--text-primary)`,border:`1px solid var(--border-color)`,borderRadius:`var(--radius-sm)`,fontWeight:`bold`,cursor:`pointer`},children:`−`}),(0,N.jsx)(`div`,{style:{padding:`0.5rem 1rem`,background:`var(--bg-card)`,border:`1px solid var(--color-primary)`,borderRadius:`var(--radius-sm)`,fontWeight:`bold`,minWidth:`60px`,textAlign:`center`},children:s}),(0,N.jsx)(`button`,{onClick:n=>{n.stopPropagation(),t({type:`INCREMENT_ITEM`,payload:{category:`lighting`,itemId:e.id}})},style:{flex:1,padding:`0.5rem`,background:`var(--color-primary)`,color:`#000`,border:`none`,borderRadius:`var(--radius-sm)`,fontWeight:`bold`,cursor:`pointer`},children:`+`})]}):(0,N.jsx)(`button`,{onClick:()=>_(e),style:{width:`100%`,padding:`0.5rem`,background:`var(--color-primary)`,color:`#000`,border:`none`,borderRadius:`var(--radius-sm)`,fontWeight:`bold`,cursor:`pointer`},children:`+ Add`})]},e.id)})}),(0,N.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`1rem`,marginBottom:`1rem`,padding:`1.5rem`,background:`var(--bg-surface)`,borderRadius:`var(--radius-md)`,border:`2px solid ${m?`var(--color-primary)`:`rgba(255, 82, 82, 0.5)`}`},children:[(0,N.jsx)(oi,{label:n(`yourSpace`),value:`${i(d,`area`)} ${x}`}),(0,N.jsx)(oi,{label:n(`recPower`),value:`~${h}W`}),(0,N.jsx)(oi,{label:n(`remainingCoverage`),value:`${i(p,`area`)} ${x}`,highlight:!m,success:m})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsxs)(`button`,{onClick:y,style:{padding:`0.75rem 2rem`,background:`transparent`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:`pointer`},children:[`← `,n(`back`)]}),(0,N.jsxs)(`button`,{onClick:v,style:{padding:`0.75rem 2rem`,background:`var(--color-primary)`,color:`#000`,fontWeight:`bold`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:`pointer`},children:[n(`next`),` →`]})]})]})}function oi({label:e,value:t,highlight:n,success:r}){let i=`var(--border-color)`,a=`var(--text-secondary)`;return r?(i=`var(--color-primary)`,a=`var(--color-primary)`):n&&(i=`#ff5252`,a=`#ff5252`),(0,N.jsxs)(`div`,{style:{padding:`1rem`,background:`var(--bg-card)`,borderRadius:`var(--radius-sm)`,border:`1px solid ${i}`,textAlign:`center`},children:[(0,N.jsx)(`div`,{style:{fontSize:`0.75rem`,color:a,marginBottom:`0.5rem`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:e}),(0,N.jsx)(`div`,{style:{fontSize:`1.1rem`,fontWeight:`bold`,color:`var(--text-primary)`},children:t})]})}var si=[{id:`fan-4`,name:`4" Inline Fan + Filter`,type:`Inline Fan`,cfm:200,watts:30,price:110},{id:`fan-6`,name:`6" Inline Fan + Filter`,type:`Inline Fan`,cfm:400,watts:50,price:160},{id:`fan-8`,name:`8" Inline Fan + Filter`,type:`Inline Fan`,cfm:750,watts:110,price:240},{id:`circ-6`,name:`6" Clip-on Fan`,type:`Circulation`,cfm:150,watts:15,price:30},{id:`circ-osc`,name:`Oscillating Clip-on Fan`,type:`Circulation`,cfm:180,watts:20,price:50}];function ci(){let{state:e,dispatch:t}=Er(),{t:n,formatPrice:r}=P(),{totals:i,selectedItems:a}=e,o=a.ventilation,s=e=>{o.find(t=>t.id===e.id)?t({type:`REMOVE_ITEM`,payload:{category:`ventilation`,itemId:e.id}}):t({type:`ADD_ITEM`,payload:{category:`ventilation`,item:e}})},c=()=>{t({type:`NEXT_STEP`})},l=()=>{t({type:`PREV_STEP`})},u=o.filter(e=>e.type===`Inline Fan`).reduce((e,t)=>e+t.cfm,0);return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h2`,{style:{marginBottom:`1rem`,color:`var(--color-primary)`},children:n(`step3`)}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`2rem`,marginBottom:`2rem`,background:`var(--bg-card)`,padding:`1rem`,borderRadius:`var(--radius-md)`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`var(--text-secondary)`},children:n(`reqCFM`)}),(0,N.jsxs)(`div`,{style:{fontWeight:`bold`},children:[i.cfmRequired,` CFM`]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`var(--text-secondary)`},children:n(`selFanPower`)}),(0,N.jsxs)(`div`,{style:{fontWeight:`bold`,color:u>=i.cfmRequired?`var(--color-secondary)`:`#ff5252`},children:[u,` CFM`]})]})]}),(0,N.jsxs)(`div`,{style:{marginBottom:`2rem`},children:[(0,N.jsx)(`h3`,{style:{marginBottom:`1rem`,fontSize:`1.1rem`},children:n(`inlineFans`)}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(250px, 1fr))`,gap:`1rem`},children:si.filter(e=>e.type===`Inline Fan`).map(e=>{let t=o.find(t=>t.id===e.id);return(0,N.jsxs)(`div`,{onClick:()=>s(e),style:{padding:`1rem`,background:t?`var(--bg-surface-hover)`:`var(--bg-card)`,border:`2px solid ${t?`var(--color-primary)`:`var(--border-color)`}`,borderRadius:`var(--radius-md)`,cursor:`pointer`,transition:`all 0.2s ease`},children:[(0,N.jsx)(`div`,{style:{fontWeight:`bold`,marginBottom:`0.25rem`},children:e.name}),(0,N.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`var(--text-secondary)`,marginBottom:`0.5rem`},children:[e.cfm,` CFM • `,e.watts,`W`]}),(0,N.jsx)(`div`,{style:{color:`var(--color-primary)`,fontWeight:`bold`},children:r(e.price)})]},e.id)})})]}),(0,N.jsxs)(`div`,{style:{marginBottom:`2rem`},children:[(0,N.jsx)(`h3`,{style:{marginBottom:`1rem`,fontSize:`1.1rem`},children:n(`circFans`)}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(250px, 1fr))`,gap:`1rem`},children:si.filter(e=>e.type===`Circulation`).map(e=>{let t=o.find(t=>t.id===e.id);return(0,N.jsxs)(`div`,{onClick:()=>s(e),style:{padding:`1rem`,background:t?`var(--bg-surface-hover)`:`var(--bg-card)`,border:`2px solid ${t?`var(--color-primary)`:`var(--border-color)`}`,borderRadius:`var(--radius-md)`,cursor:`pointer`,transition:`all 0.2s ease`},children:[(0,N.jsx)(`div`,{style:{fontWeight:`bold`,marginBottom:`0.25rem`},children:e.name}),(0,N.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`var(--text-secondary)`,marginBottom:`0.5rem`},children:[e.cfm,` CFM • `,e.watts,`W`]}),(0,N.jsx)(`div`,{style:{color:`var(--color-primary)`,fontWeight:`bold`},children:r(e.price)})]},e.id)})})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsxs)(`button`,{onClick:l,style:{padding:`0.75rem 2rem`,background:`transparent`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:`pointer`},children:[`← `,n(`back`)]}),(0,N.jsxs)(`button`,{onClick:c,style:{padding:`0.75rem 2rem`,background:`var(--color-primary)`,color:`#000`,fontWeight:`bold`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:`pointer`},children:[n(`next`),` →`]})]})]})}var li=[{id:`humid-4l`,name:`4L Humidifier`,type:`Humidifier`,watts:30,price:40,capacity:`Small Tents`},{id:`humid-6l`,name:`6L Smart Humidifier`,type:`Humidifier`,watts:45,price:70,capacity:`Medium Tents`},{id:`dehumid-30`,name:`30 Pint Dehumidifier`,type:`Dehumidifier`,watts:280,price:150,capacity:`Up to 4x4`},{id:`dehumid-50`,name:`50 Pint Dehumidifier`,type:`Dehumidifier`,watts:450,price:220,capacity:`Large Rooms`},{id:`heater-oil`,name:`Oil Radiator Heater`,type:`Heater`,watts:700,price:60,capacity:`Safe Heat`},{id:`heater-ceramic`,name:`Ceramic Heater`,type:`Heater`,watts:1500,price:40,capacity:`Fast Heat`},{id:`ac-portable`,name:`Portable AC (8000 BTU)`,type:`AC`,watts:900,price:300,capacity:`Cooling`}];function ui(){let{state:e,dispatch:t}=Er(),{t:n,formatPrice:r}=P(),i=e.selectedItems.environment,a=e=>{i.find(t=>t.id===e.id)?t({type:`REMOVE_ITEM`,payload:{category:`environment`,itemId:e.id}}):t({type:`ADD_ITEM`,payload:{category:`environment`,item:e}})};return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h2`,{style:{marginBottom:`1rem`,color:`var(--color-primary)`},children:n(`step4`)}),(0,N.jsx)(`p`,{style:{marginBottom:`2rem`,color:`var(--text-secondary)`},children:n(`envDesc`)}),[`Humidifier`,`Dehumidifier`,`Heater`,`AC`].map(e=>(0,N.jsxs)(`div`,{style:{marginBottom:`2rem`},children:[(0,N.jsx)(`h3`,{style:{marginBottom:`1rem`,fontSize:`1.1rem`,borderBottom:`1px solid var(--border-color)`,paddingBottom:`0.5rem`},children:n(e.toLowerCase()+`s`)}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(250px, 1fr))`,gap:`1rem`},children:li.filter(t=>t.type===e).map(e=>{let t=i.find(t=>t.id===e.id);return(0,N.jsxs)(`div`,{onClick:()=>a(e),style:{padding:`1rem`,background:t?`var(--bg-surface-hover)`:`var(--bg-card)`,border:`2px solid ${t?`var(--color-primary)`:`var(--border-color)`}`,borderRadius:`var(--radius-md)`,cursor:`pointer`,transition:`all 0.2s ease`},children:[(0,N.jsx)(`div`,{style:{fontWeight:`bold`,marginBottom:`0.25rem`},children:e.name}),(0,N.jsxs)(`div`,{style:{fontSize:`0.875rem`,color:`var(--text-secondary)`,marginBottom:`0.5rem`},children:[e.capacity,` • `,e.watts,`W`]}),(0,N.jsx)(`div`,{style:{color:`var(--color-primary)`,fontWeight:`bold`},children:r(e.price)})]},e.id)})})]},e)),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginTop:`3rem`},children:[(0,N.jsxs)(`button`,{onClick:()=>{t({type:`PREV_STEP`})},style:{padding:`0.75rem 2rem`,background:`transparent`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:`pointer`},children:[`← `,n(`back`)]}),(0,N.jsxs)(`button`,{onClick:()=>{t({type:`NEXT_STEP`})},style:{padding:`0.75rem 2rem`,background:`var(--color-primary)`,color:`#000`,fontWeight:`bold`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:`pointer`},children:[n(`next`),` →`]})]})]})}var di=[{id:`soil`,nameKey:`mediaSoil`,descKey:`mediaSoilDesc`,icon:`🌱`},{id:`coco`,nameKey:`mediaCoco`,descKey:`mediaCocoDesc`,icon:`🥥`},{id:`hydro`,nameKey:`mediaHydro`,descKey:`mediaHydroDesc`,icon:`💧`}];function fi(){let{state:e,dispatch:t}=Er(),{t:n}=P(),{mediaType:r}=e,i=e=>{t({type:`SET_MEDIA_TYPE`,payload:e})};return(0,N.jsxs)(`div`,{className:`fade-in`,children:[(0,N.jsx)(`h2`,{style:{marginBottom:`1rem`,color:`var(--color-primary)`},children:n(`selectMedia`)}),(0,N.jsx)(`p`,{style:{marginBottom:`2rem`,color:`var(--text-secondary)`},children:n(`mediaDesc`)}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(250px, 1fr))`,gap:`1.5rem`,marginBottom:`2rem`},children:di.map(e=>{let t=r===e.id;return(0,N.jsxs)(`div`,{onClick:()=>i(e.id),className:`card-interactive`,style:{padding:`2rem`,background:t?`var(--bg-surface-hover)`:`var(--bg-card)`,border:`2px solid ${t?`var(--color-primary)`:`var(--border-color)`}`,borderRadius:`var(--radius-md)`,cursor:`pointer`,textAlign:`center`,transition:`all 0.2s ease`},children:[(0,N.jsx)(`div`,{style:{fontSize:`2.5rem`,marginBottom:`1rem`},children:e.icon}),(0,N.jsx)(`h3`,{style:{marginBottom:`0.5rem`,color:t?`var(--color-primary)`:`var(--text-primary)`},children:n(e.nameKey)}),(0,N.jsx)(`p`,{style:{fontSize:`0.875rem`,color:`var(--text-secondary)`},children:n(e.descKey)})]},e.id)})}),(0,N.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,N.jsxs)(`button`,{onClick:()=>{r&&t({type:`NEXT_STEP`})},disabled:!r,style:{padding:`0.75rem 2rem`,background:r?`var(--color-primary)`:`var(--bg-surface)`,color:r?`#000`:`var(--text-muted)`,fontWeight:`bold`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:r?`pointer`:`not-allowed`,border:`none`,boxShadow:r?`0 4px 14px 0 rgba(16, 185, 129, 0.39)`:`none`,transition:`all 0.2s ease`},children:[n(`next`),` →`]})})]})}var pi=[{id:`soil-kit`,name:`Organic Soil Starter Kit`,type:`Media`,mediaType:`soil`,price:45,description:`Premium potting mix + amendments`},{id:`nutes-soil-basic`,name:`Organic Nutrient Trio`,type:`Nutrients`,mediaType:`soil`,price:35,description:`Grow, Bloom, and Micro for Soil`},{id:`coco-kit`,name:`Coco Coir + Perlite Brick`,type:`Media`,mediaType:`coco`,price:35,description:`70/30 mix for high drainage`},{id:`nutes-coco-ab`,name:`Coco A+B Nutrients`,type:`Nutrients`,mediaType:`coco`,price:40,description:`Specific formula for Coco Coir`},{id:`calmag`,name:`CalMag Supplement`,type:`Nutrients`,mediaType:`coco`,price:20,description:`Essential for Coco grows`},{id:`dwc-bucket`,name:`DWC Hydro Bucket (Single)`,type:`System`,mediaType:`hydro`,price:40,description:`Deep Water Culture system`},{id:`rdwc-4`,name:`RDWC System (4 Site)`,type:`System`,mediaType:`hydro`,price:350,description:`Recirculating Deep Water Culture`},{id:`nutes-hydro-pro`,name:`Hydro Pro Series`,type:`Nutrients`,mediaType:`hydro`,price:85,description:`Complete sterile nutrient line`},{id:`hydroguard`,name:`Root Inoculant`,type:`Additives`,mediaType:`hydro`,price:30,description:`Prevents root rot`},{id:`autopot-2`,name:`AutoPot System (2 Pot)`,type:`System`,mediaType:`soil`,price:120,description:`Gravity fed watering system`}];function F(){let{state:e,dispatch:t}=Er(),{t:n,formatPrice:r}=P(),{selectedItems:i,mediaType:a}=e,o=i.nutrients,s=e=>{o.find(t=>t.id===e.id)?t({type:`REMOVE_ITEM`,payload:{category:`nutrients`,itemId:e.id}}):t({type:`ADD_ITEM`,payload:{category:`nutrients`,item:e}})},c=()=>{t({type:`NEXT_STEP`})},l=()=>{t({type:`PREV_STEP`})},u=pi.filter(e=>e.mediaType===a||!e.mediaType);return(0,N.jsxs)(`div`,{className:`fade-in`,children:[(0,N.jsx)(`h2`,{style:{marginBottom:`1rem`,color:`var(--color-primary)`},children:n(`step6`)}),(0,N.jsx)(`p`,{style:{marginBottom:`2rem`,color:`var(--text-secondary)`},children:n(`nutesDesc`)}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(250px, 1fr))`,gap:`1rem`,marginBottom:`2rem`},children:u.map(e=>{let t=o.find(t=>t.id===e.id);return(0,N.jsxs)(`div`,{onClick:()=>s(e),className:`card-interactive`,style:{padding:`1rem`,background:t?`var(--bg-surface-hover)`:`var(--bg-card)`,border:`2px solid ${t?`var(--color-primary)`:`var(--border-color)`}`,borderRadius:`var(--radius-md)`,cursor:`pointer`,transition:`all 0.2s ease`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`0.25rem`},children:[(0,N.jsx)(`span`,{style:{fontWeight:`bold`,color:t?`var(--color-primary)`:`var(--text-primary)`},children:e.name}),(0,N.jsx)(`span`,{style:{fontSize:`0.75rem`,background:`var(--bg-surface)`,padding:`2px 6px`,borderRadius:`4px`,color:`var(--text-muted)`},children:e.type})]}),(0,N.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`var(--text-secondary)`,marginBottom:`0.5rem`},children:e.description}),(0,N.jsx)(`div`,{style:{color:`var(--color-primary)`,fontWeight:`bold`},children:r(e.price)})]},e.id)})}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsxs)(`button`,{onClick:l,style:{padding:`0.75rem 2rem`,background:`transparent`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:`pointer`},children:[`← `,n(`back`)]}),(0,N.jsxs)(`button`,{onClick:c,style:{padding:`0.75rem 2rem`,background:`var(--color-primary)`,color:`#000`,fontWeight:`bold`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:`pointer`,border:`none`,boxShadow:`0 4px 14px 0 rgba(16, 185, 129, 0.39)`},children:[n(`next`),` →`]})]})]})}var mi=[{id:`hygro`,name:`Digital Thermo-Hygrometer`,type:`Sensor`,price:15,description:`Basic temp/humidity`},{id:`smart-sensor`,name:`WiFi Smart Sensor`,type:`Sensor`,price:45,description:`App connected logging`},{id:`ph-pen`,name:`pH Pen Tester`,type:`Tester`,price:20,description:`Essential for water checks`},{id:`ec-pen`,name:`EC/TDS Meter`,type:`Tester`,price:15,description:`Measure nutrient strength`},{id:`timer-mech`,name:`Mechanical Timer`,type:`Controller`,price:10,description:`Simple light control`},{id:`timer-digital`,name:`Digital Timer Strip`,type:`Controller`,price:25,description:`Programmable outlets`},{id:`env-controller`,name:`Environmental Controller`,type:`Controller`,price:150,description:`Auto fan/temp control`},{id:`camera`,name:`WiFi Camera`,type:`Controller`,price:35,description:`Monitor from anywhere`}];function hi(){let{state:e,dispatch:t}=Er(),{t:n,formatPrice:r}=P(),i=e.selectedItems.monitoring,a=e=>{i.find(t=>t.id===e.id)?t({type:`REMOVE_ITEM`,payload:{category:`monitoring`,itemId:e.id}}):t({type:`ADD_ITEM`,payload:{category:`monitoring`,item:e}})};return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h2`,{style:{marginBottom:`1rem`,color:`var(--color-primary)`},children:n(`step6`)}),(0,N.jsx)(`p`,{style:{marginBottom:`2rem`,color:`var(--text-secondary)`},children:n(`monitorDesc`)}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(250px, 1fr))`,gap:`1rem`,marginBottom:`2rem`},children:mi.map(e=>{let t=i.find(t=>t.id===e.id);return(0,N.jsxs)(`div`,{onClick:()=>a(e),style:{padding:`1rem`,background:t?`var(--bg-surface-hover)`:`var(--bg-card)`,border:`2px solid ${t?`var(--color-primary)`:`var(--border-color)`}`,borderRadius:`var(--radius-md)`,cursor:`pointer`,transition:`all 0.2s ease`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`0.25rem`},children:[(0,N.jsx)(`span`,{style:{fontWeight:`bold`},children:e.name}),(0,N.jsx)(`span`,{style:{fontSize:`0.75rem`,background:`var(--bg-surface)`,padding:`2px 6px`,borderRadius:`4px`},children:e.type})]}),(0,N.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`var(--text-secondary)`,marginBottom:`0.5rem`},children:e.description}),(0,N.jsx)(`div`,{style:{color:`var(--color-primary)`,fontWeight:`bold`},children:r(e.price)})]},e.id)})}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsxs)(`button`,{onClick:()=>{t({type:`PREV_STEP`})},style:{padding:`0.75rem 2rem`,background:`transparent`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:`pointer`},children:[`← `,n(`back`)]}),(0,N.jsxs)(`button`,{onClick:()=>{t({type:`NEXT_STEP`})},style:{padding:`0.75rem 2rem`,background:`var(--color-primary)`,color:`#000`,fontWeight:`bold`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:`pointer`},children:[n(`finish`),` →`]})]})]})}var gi=30,_i={veg:18,flower:12,fan:24},vi=e=>e/1e3,yi=(e,t)=>vi(e)*t;function bi(e=[],t,n=gi){let r=e.reduce((e,r)=>{let i=r.quantity||1,a=typeof r.hoursPerDay==`number`?r.hoursPerDay:t,o=yi(r.watt,a)*i,s=o*n;return e.total+=s,e.items.push({name:r.name||`unknown`,watt:r.watt,quantity:i,hoursPerDay:a,dailyKwh:Number(o.toFixed(4)),monthlyKwh:Number(s.toFixed(4))}),e},{total:0,items:[]});return r.total=Number(r.total.toFixed(4)),r}function xi(e,t){return Number((e*t).toFixed(4))}function Si(e={}){let{lights:t=[],fans:n=[],pricePerKwh:r,daysPerMonth:i=gi,overrideHours:a={}}=e;if(typeof r!=`number`||Number.isNaN(r))throw Error(`pricePerKwh must be provided as a number (kWh başına fiyat).`);let o={veg:typeof a.veg==`number`?a.veg:_i.veg,flower:typeof a.flower==`number`?a.flower:_i.flower,fan:typeof a.fan==`number`?a.fan:_i.fan},s=bi(t,o.veg,i),c=bi(t,o.flower,i),l=bi(n,o.fan,i),u=Number((s.total+l.total).toFixed(4)),d=Number((c.total+l.total).toFixed(4));xi(u,r),xi(d,r);let f=(e,t)=>{let n=[...e.items,...t.items],i=Number((e.total+t.total).toFixed(4));return{items:n,totalKwh:i,totalCost:xi(i,r)}};return{pricePerKwh:r,daysPerMonth:i,veg:{hoursPerDay:{light:o.veg,fan:o.fan},...f(s,l)},flower:{hoursPerDay:{light:o.flower,fan:o.fan},...f(c,l)}}}var Ci=Si,wi=`electricEstimator.v1`;function Ti(){try{let e=localStorage.getItem(wi);return e?JSON.parse(e):null}catch{return null}}function Ei(e){try{localStorage.setItem(wi,JSON.stringify(e))}catch{}}function Di({onClose:e}={}){let{currency:t}=P(),n=Ti(),{state:r}=Er(),i=(e=[])=>e.map(e=>({name:e.name||e.title||`unknown`,watt:Number(e.watts||e.watt||0),quantity:e.quantity||1,hoursPerDay:e.hoursPerDay})),a=r?.selectedItems?.lighting?.length>0?i(r.selectedItems.lighting):n?.lights||[{name:`LED 300W`,watt:300,quantity:1}],o=r?.selectedItems?.ventilation?.length>0?i(r.selectedItems.ventilation):n?.fans||[{name:`Inline Fan 100W`,watt:100,quantity:1}],[s,c]=(0,b.useState)(a),[l,u]=(0,b.useState)(o),[d,f]=(0,b.useState)(n?.pricePerKwh??1.2),[p,m]=(0,b.useState)(n?.daysPerMonth??30),[h,g]=(0,b.useState)(null),[_,v]=(0,b.useState)(!1);(0,b.useEffect)(()=>{g(Ci({lights:s,fans:l,pricePerKwh:Number(d),daysPerMonth:Number(p)})),Ei({lights:s,fans:l,pricePerKwh:d,daysPerMonth:p})},[s,l,d,p]),(0,b.useEffect)(()=>{if(!_)try{let e=r?.selectedItems?.lighting||[],t=r?.selectedItems?.ventilation||[];e.length>0&&c(i(e)),t.length>0&&u(i(t))}catch{}},[r?.selectedItems?.lighting,r?.selectedItems?.ventilation,_]);let y=(e,t,n,r)=>{t(e.map((e,t)=>t===n?{...e,...r}:e)),v(!0)},x=(e,t,n)=>t([...e,n]),S=(e,t,n)=>t(e.filter((e,t)=>t!==n));return(0,N.jsxs)(`div`,{className:`estimator-container`,children:[(0,N.jsxs)(`div`,{className:`estimator-header`,children:[(0,N.jsx)(`strong`,{children:`Elektrik Maliyet Tahmincisi`}),(0,N.jsx)(`div`,{style:{display:`flex`,gap:8},children:(0,N.jsx)(`button`,{className:`btn small`,onClick:()=>{Ei({lights:s,fans:l,pricePerKwh:d,daysPerMonth:p}),e&&e()},children:`Kapat`})})]}),(0,N.jsxs)(`div`,{className:`estimator-inputs-grid`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{style:{fontSize:12},children:`Elektrik fiyatı (kWh)`}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,N.jsx)(`input`,{type:`number`,step:`0.01`,min:`0`,value:d,onChange:e=>f(e.target.value),className:`input`}),(0,N.jsx)(`span`,{style:{fontSize:14},children:t})]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`label`,{style:{fontSize:12},children:`Gün/ay`}),(0,N.jsx)(`input`,{type:`number`,min:`1`,max:`31`,value:p,onChange:e=>m(e.target.value),className:`input`})]})]}),(0,N.jsx)(`hr`,{style:{margin:`12px 0`,borderColor:`var(--border-color)`}}),(0,N.jsxs)(`div`,{className:`estimator-devices-flex`,children:[(0,N.jsxs)(`div`,{className:`device-section`,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,N.jsx)(`strong`,{children:`Işıklar`}),(0,N.jsx)(`button`,{className:`btn small`,onClick:()=>x(s,c,{name:`Yeni ışık`,watt:100,quantity:1}),children:`Ekle`})]}),(0,N.jsx)(`div`,{style:{marginTop:8},children:s.map((e,t)=>(0,N.jsxs)(`div`,{className:`device-row`,children:[(0,N.jsx)(`input`,{value:e.name,onChange:e=>y(s,c,t,{name:e.target.value}),className:`input device-name`}),(0,N.jsx)(`input`,{type:`number`,value:e.watt,onChange:e=>y(s,c,t,{watt:Number(e.target.value)}),className:`input tiny`}),(0,N.jsx)(`input`,{type:`number`,value:e.quantity,min:1,onChange:e=>y(s,c,t,{quantity:Number(e.target.value)}),className:`input tiny`}),(0,N.jsx)(`button`,{className:`btn danger`,onClick:()=>S(s,c,t),children:`Sil`})]},t))})]}),(0,N.jsxs)(`div`,{className:`device-section`,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,N.jsx)(`strong`,{children:`Fanlar`}),(0,N.jsx)(`button`,{className:`btn small`,onClick:()=>x(l,u,{name:`Yeni fan`,watt:50,quantity:1}),children:`Ekle`})]}),(0,N.jsx)(`div`,{style:{marginTop:8},children:l.map((e,t)=>(0,N.jsxs)(`div`,{className:`device-row`,children:[(0,N.jsx)(`input`,{value:e.name,onChange:e=>y(l,u,t,{name:e.target.value}),className:`input device-name`}),(0,N.jsx)(`input`,{type:`number`,value:e.watt,onChange:e=>y(l,u,t,{watt:Number(e.target.value)}),className:`input tiny`}),(0,N.jsx)(`input`,{type:`number`,value:e.quantity,min:1,onChange:e=>y(l,u,t,{quantity:Number(e.target.value)}),className:`input tiny`}),(0,N.jsx)(`button`,{className:`btn danger`,onClick:()=>S(l,u,t),children:`Sil`})]},t))})]})]}),(0,N.jsx)(`hr`,{style:{margin:`12px 0`,borderColor:`var(--border-color)`}}),h&&(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,N.jsx)(`strong`,{children:`Büyüme (18/6)`}),(0,N.jsxs)(`span`,{children:[h.veg.totalKwh,` kWh — `,h.veg.totalCost.toFixed(2),` `,t]})]}),(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginTop:6},children:[(0,N.jsx)(`strong`,{children:`Çiçeklenme (12/12)`}),(0,N.jsxs)(`span`,{children:[h.flower.totalKwh,` kWh — `,h.flower.totalCost.toFixed(2),` `,t]})]}),(0,N.jsxs)(`details`,{style:{marginTop:10},children:[(0,N.jsx)(`summary`,{style:{cursor:`pointer`},children:`Detaylı döküm`}),(0,N.jsxs)(`div`,{style:{marginTop:8},children:[(0,N.jsx)(`strong`,{children:`Işıklar ve Fanlar (aylık kWh / adet)`}),(0,N.jsx)(`ul`,{className:`est-list`,children:h.veg.items.map((e,t)=>(0,N.jsxs)(`li`,{children:[e.name,`: `,e.monthlyKwh,` kWh`]},t))})]})]})]}),(0,N.jsx)(`style`,{children:`
        .estimator-container {
          width: 100%;
          padding: 12px;
          background: var(--bg-surface);
          box-shadow: 0 8px 24px rgba(2,6,23,0.6);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-primary);
        }
        
        .estimator-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .estimator-inputs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .estimator-devices-flex {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .device-section {
          flex: 1 1 300px;
          min-width: 0; /* Allow shrinking below content size */
        }

        .device-row {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
          align-items: center;
        }

        .input { width: 100%; padding: 8px 10px; border-radius: 8px; background: var(--bg-card); border: 1px solid var(--border-color); color: var(--text-primary); }
        .input.tiny { width: 60px; flex-shrink: 0; }
        .input.device-name { min-width: 0; flex-grow: 1; }

        /* Match header/controls style for consistency */
        .btn { background: rgba(255,255,255,0.05); color: var(--text-primary); border: 1px solid var(--border-color); padding: 6px 8px; border-radius: 8px; cursor: pointer; }
        .btn.small { padding: 4px 8px; font-size: 0.85rem; }
        .btn.danger { background: rgba(239,68,68,0.06); border-color: rgba(239,68,68,0.18); color: var(--text-primary); flex-shrink: 0; }

        .est-list { padding-left: 1rem; margin: 0.5rem 0; list-style-position: inside; }
        .est-list li { word-break: break-word; margin-left: 0.25rem; }

        @media (max-width: 600px) {
          .estimator-inputs-grid {
            grid-template-columns: 1fr;
          }
          
          .device-section {
            flex: 1 1 100%;
          }

          .device-row {
            gap: 6px;
          }
          
          .input.tiny {
            width: 50px;
            padding: 8px 4px;
            text-align: center;
          }
          
          .btn { padding: 6px 6px; }
        }
      `})]})}function Oi(){let{state:e,dispatch:t}=Er(),{t:n,formatPrice:r,formatUnit:i,getUnitLabel:a}=P(),{tentSize:o,selectedItems:s,totals:c}=e,l=()=>{window.confirm(n(`restartConfirm`))&&t({type:`RESET`})},u=()=>{t({type:`PREV_STEP`})},d=o.width*o.depth,f=o.width*o.depth*o.height,p=s.lighting.reduce((e,t)=>e+(t.coverage||0),0),m=s.ventilation.filter(e=>e.type===`Inline Fan`).reduce((e,t)=>e+t.cfm,0),h=a(`length`),g=a(`area`),_=a(`volume`),v=[];s.lighting.length>0&&p<d&&v.push(n(`warnLight`,{cov:i(p,`area`),area:i(d,`area`),unit:g})),s.ventilation.length>0&&m<c.cfmRequired&&v.push(n(`warnCFM`,{cfm:m,req:c.cfmRequired}));let y=[{key:`lighting`,label:n(`step2`)},{key:`ventilation`,label:n(`step3`)},{key:`environment`,label:n(`step4`)},{key:`nutrients`,label:n(`step5`)},{key:`monitoring`,label:n(`step6`)}];return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h2`,{style:{marginBottom:`1rem`,color:`var(--color-primary)`},children:n(`yourSetup`)}),v.length>0&&(0,N.jsxs)(`div`,{className:`no-print`,style:{marginBottom:`2rem`,padding:`1rem`,background:`rgba(255, 82, 82, 0.1)`,border:`1px solid #ff5252`,borderRadius:`var(--radius-md)`},children:[(0,N.jsx)(`h3`,{style:{color:`#ff5252`,marginBottom:`0.5rem`,fontSize:`1rem`},children:n(`compatWarn`)}),(0,N.jsx)(`ul`,{style:{paddingLeft:`1.5rem`,color:`#ff5252`},children:v.map((e,t)=>(0,N.jsx)(`li`,{children:e},t))})]}),(0,N.jsx)(`p`,{className:`no-print`,style:{marginBottom:`2rem`,color:`var(--text-secondary)`},children:n(`reviewDesc`)}),(0,N.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`2fr 1fr`,gap:`2rem`},className:`summary-grid`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`div`,{style:{marginBottom:`2rem`,background:`var(--bg-card)`,padding:`1.5rem`,borderRadius:`var(--radius-md)`},children:[(0,N.jsx)(`h3`,{style:{marginBottom:`1rem`,color:`var(--text-primary)`},children:n(`tentDetails`)}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`2rem`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`var(--text-secondary)`},children:n(`dimensions`)}),(0,N.jsxs)(`div`,{style:{fontWeight:`bold`},children:[i(o.width),`' x `,i(o.depth),`' x `,i(o.height),`' `,h]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`var(--text-secondary)`},children:n(`area`)}),(0,N.jsxs)(`div`,{style:{fontWeight:`bold`},children:[i(d,`area`),` `,g]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`var(--text-secondary)`},children:n(`volume`)}),(0,N.jsxs)(`div`,{style:{fontWeight:`bold`},children:[i(f,`volume`),` `,_]})]})]})]}),y.map(e=>{let t=s[e.key];return t.length===0?null:(0,N.jsxs)(`div`,{style:{marginBottom:`1.5rem`},children:[(0,N.jsx)(`h3`,{style:{fontSize:`1.1rem`,marginBottom:`0.5rem`,color:`var(--color-secondary)`},children:e.label}),(0,N.jsx)(`div`,{style:{background:`var(--bg-card)`,borderRadius:`var(--radius-md)`,overflow:`hidden`},children:t.map((e,n)=>{let i=e.quantity||1,a=e.price*i;return(0,N.jsxs)(`div`,{style:{padding:`1rem`,borderBottom:n<t.length-1?`1px solid var(--border-color)`:`none`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`div`,{style:{fontWeight:`500`},children:[i>1&&(0,N.jsxs)(`span`,{style:{color:`var(--color-primary)`,marginRight:`0.5rem`},children:[i,`x`]}),e.name]}),(0,N.jsxs)(`div`,{style:{fontSize:`0.85rem`,color:`var(--text-secondary)`},children:[e.type,` `,e.watts?`• ${e.watts}W`:``,` `,e.cfm?`• ${e.cfm} CFM`:``,i>1&&(0,N.jsxs)(`span`,{style:{marginLeft:`0.5rem`},children:[`(`,r(e.price),` each)`]})]})]}),(0,N.jsx)(`div`,{style:{fontWeight:`bold`},children:r(a)})]},n)})})]},e.key)})]}),(0,N.jsxs)(`div`,{className:`summary-sidebar`,children:[(0,N.jsxs)(`div`,{className:`summary-card`,style:{maxWidth:`600px`,margin:`0 auto`,width:`100%`,background:`rgba(255, 255, 255, 0.03)`,border:`1px solid rgba(255, 255, 255, 0.1)`,borderRadius:`1.5rem`,padding:`1.5rem`},children:[(0,N.jsx)(`h3`,{style:{marginBottom:`1.5rem`,fontSize:`1.25rem`,textAlign:`center`},children:n(`totalEst`)}),(0,N.jsxs)(`div`,{style:{marginBottom:`1rem`,display:`flex`,justifyContent:`space-between`},children:[(0,N.jsx)(`span`,{style:{color:`var(--text-secondary)`},children:n(`equipCost`)}),(0,N.jsx)(`span`,{style:{fontWeight:`bold`},children:r(c.cost)})]}),(0,N.jsxs)(`div`,{style:{marginBottom:`1rem`,display:`flex`,justifyContent:`space-between`},children:[(0,N.jsx)(`span`,{style:{color:`var(--text-secondary)`},children:n(`totalPower`)}),(0,N.jsxs)(`span`,{style:{fontWeight:`bold`},children:[c.power,`W`]})]}),(0,N.jsxs)(`div`,{style:{marginBottom:`1.5rem`,display:`flex`,justifyContent:`space-between`},children:[(0,N.jsx)(`span`,{style:{color:`var(--text-secondary)`},children:n(`estMonthly`)}),(0,N.jsx)(`span`,{style:{fontWeight:`bold`},children:r(c.power*18*30/1e3*.12)})]}),(0,N.jsx)(`div`,{style:{fontSize:`0.75rem`,color:`var(--text-muted)`,marginBottom:`1.5rem`,textAlign:`center`},children:n(`powerNote`)}),(0,N.jsx)(`button`,{className:`no-print`,style:{width:`100%`,padding:`1rem`,background:`var(--color-primary)`,color:`#000`,fontWeight:`bold`,borderRadius:`var(--radius-md)`,marginBottom:`1rem`,fontSize:`1.1rem`},onClick:()=>window.print(),children:n(`printPdf`)}),(0,N.jsx)(`button`,{className:`no-print`,onClick:l,style:{width:`100%`,padding:`0.75rem`,background:`transparent`,border:`1px solid var(--border-color)`,color:`var(--text-secondary)`,borderRadius:`var(--radius-md)`,cursor:`pointer`},children:n(`startOver`)})]}),(0,N.jsx)(`div`,{style:{marginTop:`1rem`},children:(0,N.jsx)(Di,{})})]})]}),(0,N.jsx)(`div`,{className:`no-print`,style:{marginTop:`2rem`},children:(0,N.jsxs)(`button`,{onClick:u,style:{padding:`0.75rem 2rem`,background:`transparent`,border:`1px solid var(--border-color)`,color:`var(--text-primary)`,borderRadius:`var(--radius-full)`,fontSize:`1rem`,cursor:`pointer`},children:[`← `,n(`back`)]})}),(0,N.jsx)(`style`,{children:`
                .summary-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .summary-card {
                    position: sticky;
                    top: 100px;
                }

                @media (max-width: 768px) {
                    .summary-grid {
                        display: flex !important;
                        flex-direction: column-reverse;
                        gap: 1.5rem;
                    }

                    .summary-card {
                        position: static;
                        padding: 1.5rem;
                        max-width: 100%;
                    }

                    .summary-sidebar {
                        order: -1;
                    }
                }
            `})]})}function ki(){return(0,N.jsx)(`div`,{className:`glass-header no-print`,style:{position:`sticky`,top:0,zIndex:1e3,padding:`0.75rem 0`,borderBottom:`1px solid rgba(255,255,255,0.05)`},children:(0,N.jsx)(`div`,{className:`container`,style:{display:`flex`,justifyContent:`center`,alignItems:`center`},children:(0,N.jsxs)(`div`,{style:{fontWeight:`700`,fontSize:`1.25rem`,color:`var(--color-primary)`,display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,N.jsx)(`span`,{style:{fontSize:`1.5rem`},children:`🌿`}),` GroWizard`]})})})}function Ai(){let{state:e}=Er(),{currentStep:t}=e;switch((0,b.useEffect)(()=>{window.scrollTo({top:0,behavior:`smooth`})},[t]),t){case 1:return(0,N.jsx)(Xr,{});case 2:return(0,N.jsx)(ai,{});case 3:return(0,N.jsx)(ci,{});case 4:return(0,N.jsx)(ui,{});case 5:return(0,N.jsx)(fi,{});case 6:return(0,N.jsx)(F,{});case 7:return(0,N.jsx)(hi,{});case 8:return(0,N.jsx)(Oi,{});default:return(0,N.jsx)(Xr,{})}}function ji(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(ki,{}),(0,N.jsx)(Jr,{children:(0,N.jsx)(Ai,{})}),(0,N.jsx)(Br,{})]})}var Mi=()=>{let{language:e,t}=P(),[n,r]=(0,b.useState)(`All`);(0,b.useEffect)(()=>{window.scrollTo(0,0)},[]);let i=n===`All`?Rr:Rr.filter(e=>e.category===n),a=Rr[0],o=i.filter(e=>e.id!==a.id||n!==`All`);return(0,N.jsxs)(`div`,{className:`blog-container`,children:[(0,N.jsx)(Vr,{}),(0,N.jsx)(`section`,{className:`blog-hero`,children:(0,N.jsxs)(`div`,{className:`container`,children:[(0,N.jsxs)(`div`,{className:`blog-header fade-in-up`,children:[(0,N.jsxs)(`span`,{className:`badge`,children:[`📚 `,t(`knowledgeBase`)]}),(0,N.jsxs)(`h1`,{children:[`Grow Wizard `,(0,N.jsx)(`span`,{className:`gradient-text`,children:`Blog`})]}),(0,N.jsx)(`p`,{children:t(`knowledgeBaseSubtitle`)})]}),n===`All`&&(0,N.jsx)(`div`,{className:`featured-post fade-in-up`,style:{animationDelay:`0.1s`},children:(0,N.jsxs)(M,{to:`/blog/${a.slug[e]}`,className:`featured-card`,children:[(0,N.jsx)(`div`,{className:`featured-image`,style:{backgroundImage:`url(${a.image})`}}),(0,N.jsxs)(`div`,{className:`featured-content`,children:[(0,N.jsx)(`span`,{className:`featured-badge`,children:t(`featuredArticle`)}),(0,N.jsx)(`h2`,{children:a.title[e]}),(0,N.jsx)(`p`,{children:a.excerpt[e]}),(0,N.jsxs)(`div`,{className:`blog-meta`,children:[(0,N.jsx)(`span`,{children:a.date}),(0,N.jsx)(`span`,{className:`dot`,children:`•`}),(0,N.jsx)(`span`,{children:a.readTime})]})]})]})})]})}),(0,N.jsxs)(`div`,{className:`category-nav container`,children:[(0,N.jsx)(`div`,{className:`category-label`,children:t(`blogCategoriesLabel`)}),(0,N.jsx)(`div`,{className:`category-scroll`,children:zr.map(e=>(0,N.jsx)(`button`,{className:`category-btn ${n===e?`active`:``}`,onClick:()=>r(e),children:t(`category${e}`)},e))})]}),(0,N.jsx)(`div`,{className:`blog-grid container`,children:o.map(n=>(0,N.jsxs)(M,{to:`/blog/${n.slug[e]}`,className:`blog-card card-interactive`,children:[(0,N.jsxs)(`div`,{className:`blog-card-image`,children:[(0,N.jsx)(`img`,{src:n.image,alt:n.title[e],loading:`lazy`}),(0,N.jsx)(`div`,{className:`blog-tags`,children:(0,N.jsx)(`span`,{className:`blog-tag`,children:t(`category${n.category}`)})})]}),(0,N.jsxs)(`div`,{className:`blog-card-content`,children:[(0,N.jsxs)(`div`,{className:`blog-meta`,children:[(0,N.jsx)(`span`,{children:n.date}),(0,N.jsx)(`span`,{className:`dot`,children:`•`}),(0,N.jsx)(`span`,{children:n.readTime})]}),(0,N.jsx)(`h3`,{children:n.title[e]}),(0,N.jsx)(`p`,{children:n.excerpt[e]}),(0,N.jsxs)(`div`,{className:`blog-author`,children:[(0,N.jsx)(`div`,{className:`author-avatar`,children:n.author.charAt(0)}),(0,N.jsx)(`span`,{children:n.author})]})]})]},n.id))}),(0,N.jsx)(Br,{}),(0,N.jsx)(`style`,{children:`
        .blog-container {
          min-height: 100vh;
          background: var(--bg-app);
          /* increase bottom padding so there's a visible gap above the footer */

        }

        .blog-hero {
          padding: 6rem 1rem 2rem;
          background: radial-gradient(circle at top center, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
        }

        .blog-header {
          text-align: center;
          margin-bottom: 3rem;
        }



        .blog-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin: 1rem 0;
          color: var(--text-primary);
        }

        .blog-header p {
          color: var(--text-secondary);
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .category-nav { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; }
        .category-label { color: var(--text-secondary); font-weight: 600; }

        /* Featured Post */
        .featured-post {
          margin-bottom: 3rem;
        }

        .featured-card {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-color);
          text-decoration: none;
          transition: transform 0.3s ease;
          height: 400px;
        }

        .featured-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-primary);
        }

        .featured-image {
          background-size: cover;
          background-position: center;
          height: 100%;
        }

        .featured-content {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .featured-badge {
          color: var(--color-primary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .featured-content h2 {
          color: var(--text-primary);
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .featured-content p {
          color: var(--text-secondary);
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        /* Category Nav */
        .category-nav {
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }

        .category-scroll {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .category-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          cursor: pointer;
          font-weight: 500;
          white-space: nowrap;
          transition: all 0.2s;
        }

        .category-btn:hover {
          color: var(--text-primary);
          background: var(--bg-surface);
        }

        .category-btn.active {
          background: var(--color-primary);
          color: white;
        }

        /* Grid */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem; /* gap between last row and footer */
        }

        .blog-card {
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          height: 100%;
        }

        .blog-card-image {
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-card-image img {
          transform: scale(1.05);
        }

        .blog-tags {
          position: absolute;
          top: 1rem;
          left: 1rem;
        }

        .blog-tag {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          color: var(--color-primary);
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .blog-card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .blog-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .dot {
          color: var(--border-color);
        }

        .blog-card h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .blog-card p {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-author {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.875rem;
        }

        .author-avatar {
          width: 32px;
          height: 32px;
          background: var(--bg-surface);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .blog-hero h1 {
            font-size: 2.5rem;
          }
          
          .featured-card {
            grid-template-columns: 1fr;
            height: auto;
          }

          .featured-image {
            height: 200px;
          }

          .featured-content {
            padding: 1.5rem;
          }

          .featured-content h2 {
            font-size: 1.75rem;
          }
          
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Ni=({headings:e,activeId:t})=>{let[n,r]=(0,b.useState)(!1),i=(e,t)=>{e.preventDefault();let n=document.getElementById(t);if(n){let e=n.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:e,behavior:`smooth`}),r(!1)}};return!e||e.length===0?null:(0,N.jsxs)(`nav`,{className:`toc-container`,children:[(0,N.jsxs)(`div`,{className:`toc-header`,onClick:()=>r(!n),children:[(0,N.jsxs)(`h3`,{children:[(0,N.jsx)(`span`,{className:`icon`,children:`📑`}),`İÇİNDEKİLER`]}),(0,N.jsx)(`span`,{className:`mobile-toggle ${n?`open`:``}`,children:`▼`})]}),(0,N.jsx)(`ul`,{className:`toc-list ${n?`open`:``}`,children:e.map(e=>(0,N.jsx)(`li`,{className:`toc-item level-${e.level}`,children:(0,N.jsx)(`a`,{href:`#${e.id}`,className:`toc-link ${t===e.id?`active`:``}`,onClick:t=>i(t,e.id),children:e.text})},e.id))})]})},Pi=({data:e})=>{let{language:t}=P(),[n,r]=(0,b.useState)(0),[i,a]=(0,b.useState)(null),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(0),[u,d]=(0,b.useState)(!1);(0,b.useEffect)(()=>{r(0),a(null),s(!1),l(0),d(!1)},[e]);let f=e=>{o||a(e)},p=()=>{s(!0),i===e[n].correctAnswer&&l(c+1)},m=()=>{n<e.length-1?(r(n+1),a(null),s(!1)):d(!0)},h=()=>{r(0),a(null),s(!1),l(0),d(!1)};if(u)return(0,N.jsx)(`div`,{className:`quiz-container fade-in-up`,children:(0,N.jsxs)(`div`,{className:`quiz-result`,children:[(0,N.jsxs)(`h3`,{children:[`🎉 `,t===`tr`?`Test Tamamlandı!`:`Quiz Completed!`]}),(0,N.jsxs)(`div`,{className:`score-circle`,children:[(0,N.jsx)(`span`,{className:`score-number`,children:c}),(0,N.jsxs)(`span`,{className:`score-total`,children:[`/ `,e.length]})]}),(0,N.jsx)(`p`,{className:`score-message`,children:c===e.length?t===`tr`?`Mükemmel skor! Sen bir usta yetiştiricisin! 🌿`:`Perfect score! You're a master grower! 🌿`:c>=e.length/2?t===`tr`?`İyi iş! Konuya hakimsin. 👍`:`Good job! You know your stuff. 👍`:t===`tr`?`Öğrenmeye devam! Bir dahaki sefere yaparsın. 📚`:`Keep learning! You'll get it next time. 📚`}),(0,N.jsx)(`button`,{className:`quiz-submit-btn`,onClick:h,children:t===`tr`?`Testi Tekrarla`:`Retake Quiz`})]})});let g=e[n],_=i===g.correctAnswer,v=Array.isArray(g.options)?g.options:g.options?.[t]||[];return(0,N.jsxs)(`div`,{className:`quiz-container fade-in-up`,children:[(0,N.jsxs)(`div`,{className:`quiz-header`,children:[(0,N.jsxs)(`div`,{className:`quiz-progress`,children:[(0,N.jsxs)(`span`,{children:[t===`tr`?`Soru`:`Question`,` `,n+1,` / `,e.length]}),(0,N.jsx)(`div`,{className:`progress-bar`,children:(0,N.jsx)(`div`,{className:`progress-fill`,style:{width:`${(n+1)/e.length*100}%`}})})]}),(0,N.jsxs)(`h3`,{children:[`🧠 `,t===`tr`?`Bilgini Test Et`:`Test Your Knowledge`]})]}),(0,N.jsxs)(`div`,{className:`quiz-body`,children:[(0,N.jsx)(`p`,{className:`quiz-question`,children:g.question[t]}),(0,N.jsx)(`div`,{className:`quiz-options`,children:v.map((e,t)=>(0,N.jsxs)(`button`,{className:`quiz-option ${i===t?`selected`:``} ${o&&t===g.correctAnswer?`correct`:``} ${o&&i===t&&!_?`incorrect`:``}`,onClick:()=>f(t),disabled:o,children:[e,o&&t===g.correctAnswer&&(0,N.jsx)(`span`,{className:`icon`,children:`✅`}),o&&i===t&&!_&&(0,N.jsx)(`span`,{className:`icon`,children:`❌`})]},t))}),o?(0,N.jsxs)(`div`,{className:`quiz-feedback-container`,children:[(0,N.jsxs)(`div`,{className:`quiz-feedback ${_?`success`:`error`}`,children:[(0,N.jsx)(`h4`,{children:_?t===`tr`?`Doğru!`:`Correct!`:t===`tr`?`Tam olarak değil...`:`Not quite...`}),(0,N.jsx)(`p`,{children:g.explanation[t]})]}),(0,N.jsx)(`button`,{className:`quiz-next-btn`,onClick:m,children:n<e.length-1?t===`tr`?`Sonraki Soru →`:`Next Question →`:t===`tr`?`Sonuçları Gör →`:`See Results →`})]}):(0,N.jsx)(`button`,{className:`quiz-submit-btn`,onClick:p,disabled:i===null,children:t===`tr`?`Cevabı Kontrol Et`:`Check Answer`})]})]})},Fi=()=>{let{language:e,setLanguage:t}=P(),{slug:n}=qt(),r=Gt(),[i,a]=(0,b.useState)(``),o=Rr.find(e=>e.slug.en===n||e.slug.tr===n);(0,b.useEffect)(()=>{if(!o||!n)return;let r=o.slug.en===n?`en`:`tr`;e!==r&&t(r)},[n]),(0,b.useEffect)(()=>{if(!(!o||!n)&&e!==(o.slug.en===n?`en`:`tr`)){let t=o.slug[e];t&&t!==n&&r(`/blog/${t}`)}},[e]),(0,b.useEffect)(()=>{},[e,o]),(0,b.useEffect)(()=>{window.scrollTo(0,0)},[n]);let{processedContent:s,headings:c}=b.useMemo(()=>{if(!o)return{processedContent:``,headings:[]};let t=o.content[e],n=[];return{processedContent:t.replace(/<h([23])>(.*?)<\/h\1>/g,(e,t,r)=>{let i=r.toLowerCase().replace(/[^a-z0-9\u00C0-\u00FF]+/g,`-`).replace(/^-+|-+$/g,``);return n.push({id:i,text:r,level:parseInt(t)}),`<h${t} id="${i}">${r}</h${t}>`}),headings:n}},[o,e]);return(0,b.useEffect)(()=>{if(!c.length)return;let e=()=>{let e=window.scrollY+200,t=``;for(let n of c){let r=document.getElementById(n.id);if(r){let{offsetTop:i}=r;if(e>=i)t=n.id;else break}}t&&t!==i?a(t):!t&&c.length>0&&document.getElementById(c[0].id)&&window.scrollY>400&&a(c[0].id)};return window.addEventListener(`scroll`,e),e(),()=>window.removeEventListener(`scroll`,e)},[c,i]),o?(0,N.jsxs)(`div`,{className:`blog-post-container`,children:[(0,N.jsxs)(ze,{children:[(0,N.jsxs)(`title`,{children:[o.title[e],` | GroWizard Blog`]}),(0,N.jsx)(`meta`,{name:`description`,content:o.excerpt[e]})]}),(0,N.jsx)(Vr,{}),(0,N.jsxs)(`div`,{className:`post-hero`,style:{backgroundImage:`url(${o.image})`},children:[(0,N.jsx)(`div`,{className:`hero-overlay`}),(0,N.jsxs)(`div`,{className:`hero-content container`,children:[(0,N.jsx)(`div`,{className:`post-nav`,children:(0,N.jsxs)(M,{to:`/blog`,className:`back-link`,children:[`← `,e===`tr`?`Bloga Dön`:`Back to Blog`]})}),(0,N.jsx)(`div`,{className:`post-tags`,children:(0,N.jsx)(`span`,{className:`post-category`,children:o.category})}),(0,N.jsx)(`h1`,{children:o.title[e]}),(0,N.jsxs)(`div`,{className:`post-meta`,children:[(0,N.jsxs)(`span`,{className:`author`,children:[e===`tr`?`Yazar:`:`By`,` `,o.author]}),(0,N.jsx)(`span`,{className:`dot`,children:`•`}),(0,N.jsx)(`span`,{className:`date`,children:o.date}),(0,N.jsx)(`span`,{className:`dot`,children:`•`}),(0,N.jsx)(`span`,{className:`read-time`,children:o.readTime})]})]})]}),(0,N.jsxs)(`div`,{className:`blog-layout container`,children:[(0,N.jsx)(`aside`,{className:`blog-sidebar`,children:(0,N.jsxs)(`div`,{className:`sticky-wrapper`,children:[(0,N.jsx)(Ni,{headings:c,activeId:i}),(0,N.jsxs)(`div`,{className:`share-widget`,children:[(0,N.jsx)(`h4`,{children:e===`tr`?`PAYLAŞ`:`SHARE`}),(0,N.jsxs)(`div`,{className:`share-buttons-row`,children:[(0,N.jsx)(`button`,{className:`share-icon-btn`,title:`WhatsApp`,children:`💬`}),(0,N.jsx)(`button`,{className:`share-icon-btn`,title:`Twitter`,children:`𝕏`}),(0,N.jsx)(`button`,{className:`share-icon-btn`,title:`LinkedIn`,children:`in`}),(0,N.jsx)(`button`,{className:`share-icon-btn`,title:`Facebook`,children:`f`})]})]})]})}),(0,N.jsxs)(`article`,{className:`post-content`,children:[(0,N.jsx)(`div`,{className:`content-body`,dangerouslySetInnerHTML:{__html:s}}),o.quiz&&o.quiz.length>0&&(0,N.jsx)(Pi,{data:o.quiz})]})]}),(0,N.jsx)(Br,{}),(0,N.jsx)(`style`,{children:`
        .blog-post-container {
          background: var(--bg-app);
          min-height: 100vh;
          padding-bottom: 4rem;
        }

        .post-hero {
          height: 60vh;
          min-height: 400px;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: flex-end;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(15, 23, 42, 0.3), var(--bg-app));
        }

        .hero-content {
          position: relative;
          z-index: 1;
          padding-bottom: 4rem;
          width: 100%;
        }

        .back-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 2rem;
          display: inline-block;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: var(--color-primary);
        }

        .post-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .post-category {
          color: var(--color-primary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          display: block;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          max-width: 900px;
        }

        .post-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-secondary);
          font-size: 1rem;
        }

        /* New Layout Styles */
        .blog-layout {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 4rem;
            margin-top: -4rem; /* Pull up into hero */
            position: relative;
            z-index: 2;
        }

        .blog-sidebar {
            position: relative;
        }

        .sticky-wrapper {
            position: sticky;
            top: 120px; /* Adjust based on navbar height */
        }

        .post-content {
            min-width: 0; /* Prevent overflow in grid */
        }

        /* TOC Styles */
        .toc-container {
            margin-bottom: 3rem;
        }

        .toc-header h3 {
            font-size: 0.9rem;
            font-weight: 700;
            color: var(--text-primary);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .toc-list {
            list-style: none;
            padding: 0;
            margin: 0;
            border-left: 2px solid var(--border-color);
        }

        .toc-item {
            margin: 0;
        }

        .toc-link {
            display: block;
            padding: 0.5rem 0 0.5rem 1.5rem;
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.95rem;
            line-height: 1.4;
            transition: all 0.2s;
            border-left: 2px solid transparent;
            margin-left: -2px;
        }

        .toc-link:hover {
            color: var(--color-primary);
        }

        .toc-link.active {
            color: var(--color-primary);
            border-left-color: var(--color-primary);
            font-weight: 500;
        }

        .toc-item.level-3 .toc-link {
            padding-left: 2.5rem;
            font-size: 0.9rem;
        }

        /* Share Widget Styles */
        .share-widget h4 {
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--text-secondary);
            margin-bottom: 1rem;
            letter-spacing: 0.05em;
        }

        .share-buttons-row {
            display: flex;
            gap: 0.75rem;
        }

        .share-icon-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid var(--border-color);
            background: var(--bg-surface);
            color: var(--text-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 1.1rem;
        }

        .share-icon-btn:hover {
            border-color: var(--color-primary);
            color: var(--color-primary);
            transform: translateY(-2px);
        }

        /* Content Styles */
        .content-body {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .content-body h2 {
            color: var(--text-primary);
            font-size: 2rem;
            margin: 3rem 0 1.5rem;
            scroll-margin-top: 120px; /* For sticky header */
        }

        .content-body h3 {
          color: var(--text-primary);
          font-size: 1.5rem;
          margin: 2.5rem 0 1rem;
          scroll-margin-top: 120px;
        }

        .content-body p {
          margin-bottom: 1.5rem;
        }

        .content-body ul, .content-body ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .content-body li {
          margin-bottom: 0.5rem;
        }

        .content-body blockquote {
          border-left: 4px solid var(--color-primary);
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: var(--text-primary);
          font-size: 1.25rem;
        }

        /* Quiz Styles */
        .quiz-container {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2rem;
          margin: 4rem 0;
        }

        .quiz-header {
          margin-bottom: 1.5rem;
        }

        .quiz-progress {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .progress-bar {
          height: 4px;
          background: var(--bg-surface);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--color-primary);
          transition: width 0.3s ease;
        }

        .quiz-header h3 {
          color: var(--text-primary);
          margin: 0;
        }

        .quiz-question {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .quiz-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .quiz-option {
          padding: 1rem;
          border: 2px solid var(--border-color);
          background: transparent;
          color: var(--text-secondary);
          border-radius: 0.5rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }

        .quiz-option:hover:not(:disabled) {
          border-color: var(--color-primary);
          background: var(--bg-surface);
        }

        .quiz-option.selected {
          border-color: var(--color-primary);
          background: rgba(16, 185, 129, 0.1);
        }

        .quiz-option.correct {
          border-color: #10b981;
          background: rgba(16, 185, 129, 0.2);
          color: white;
        }

        .quiz-option.incorrect {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.2);
        }

        .quiz-submit-btn, .quiz-next-btn {
          background: var(--color-primary);
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .quiz-submit-btn:hover, .quiz-next-btn:hover {
          background: #059669;
        }

        .quiz-submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .quiz-feedback-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .quiz-feedback {
          padding: 1rem;
          border-radius: 0.5rem;
        }

        .quiz-feedback.success {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid #10b981;
        }

        .quiz-feedback.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid #ef4444;
        }

        .quiz-feedback h4 {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        /* Quiz Result */
        .quiz-result {
          text-align: center;
          padding: 2rem 0;
        }

        .score-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 4px solid var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2rem auto;
          flex-direction: column;
          background: rgba(16, 185, 129, 0.1);
        }

        .score-number {
          font-size: 3rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
        }

        .score-total {
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .score-message {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 2rem;
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
            .blog-layout {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .blog-sidebar {
                order: -1; /* Move TOC to top on mobile */
            }

            .sticky-wrapper {
                position: static;
            }

            .toc-container {
                background: var(--bg-card);
                padding: 1rem;
                border-radius: 0.5rem;
                border: 1px solid var(--border-color);
            }

            .toc-header {
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .toc-header h3 {
                margin-bottom: 0;
            }

            .mobile-toggle {
                display: block;
                transition: transform 0.3s;
            }

            .mobile-toggle.open {
                transform: rotate(180deg);
            }

            .toc-list {
                display: none;
                margin-top: 1rem;
            }

            .toc-list.open {
                display: block;
            }

            .share-widget {
                display: none; /* Hide share widget on mobile sidebar to save space */
            }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .post-meta {
            flex-wrap: wrap;
          }
        }
      `})]}):(0,N.jsxs)(`div`,{className:`not-found-container`,children:[(0,N.jsx)(Vr,{}),(0,N.jsx)(`h2`,{children:e===`tr`?`Yazı Bulunamadı`:`Post Not Found`}),(0,N.jsx)(`p`,{children:e===`tr`?`Aradığınız makale mevcut değil veya taşınmış.`:`The article you're looking for doesn't exist or has been moved.`}),(0,N.jsx)(M,{to:`/blog`,className:`back-btn`,children:e===`tr`?`Bloga Dön`:`Back to Blog`})]})},Ii=()=>{let{language:e}=P(),t={en:{title:`Grow Tools`,subtitle:`Essential calculators and converters for your indoor garden`,tools:[{id:`cost`,icon:`⚡`,title:`Electricity Cost Calculator`,desc:`Estimate monthly electricity costs`,path:`/tools/electricity-cost-calculator`,color:`from-yellow-400 to-orange-500`},{id:`unit`,icon:`💧`,title:`Unit Converter`,desc:`Convert between Liters, Gallons and more`,path:`/tools/unit-converter`,color:`from-blue-400 to-cyan-500`},{id:`co2`,icon:`🌫️`,title:`CO2 Calculator`,desc:`Calculate CO2 requirements`,path:`/tools/co2-calculator`,color:`from-gray-400 to-gray-600`},{id:`ppfd`,icon:`🌡️`,title:`PPFD Heat Map`,desc:`Visualize light intensity distribution`,path:`/tools/ppfd-heatmap`,color:`from-red-400 to-red-600`}]},tr:{title:`Yetiştirme Araçları`,subtitle:`İç mekan bahçeniz için temel hesaplayıcılar ve dönüştürücüler`,tools:[{id:`cost`,icon:`⚡`,title:`Elektrik Maliyeti Hesaplayıcı`,desc:`Aylık elektrik maliyetini hesaplayın`,path:`/tools/electricity-cost-calculator`,color:`from-yellow-400 to-orange-500`},{id:`unit`,icon:`💧`,title:`Birim Çevirici`,desc:`Litre, Galon ve diğer birimler arası dönüşüm`,path:`/tools/unit-converter`,color:`from-blue-400 to-cyan-500`},{id:`co2`,icon:`🌫️`,title:`CO2 Hesaplayıcı`,desc:`CO2 gereksinimlerini hesaplayın`,path:`/tools/co2-calculator`,color:`from-gray-400 to-gray-600`},{id:`ppfd`,icon:`🌡️`,title:`PPFD Isı Haritası`,desc:`Işık yoğunluğu dağılımını görselleştirin`,path:`/tools/ppfd-heatmap`,color:`from-red-400 to-red-600`}]}}[e];return(0,N.jsxs)(`div`,{className:`page-container`,children:[(0,N.jsx)(Vr,{}),(0,N.jsxs)(`div`,{className:`tools-content`,children:[(0,N.jsxs)(`div`,{className:`tools-header`,children:[(0,N.jsx)(`h1`,{children:t.title}),(0,N.jsx)(`p`,{children:t.subtitle})]}),(0,N.jsx)(`div`,{className:`tools-grid`,children:t.tools.map(e=>(0,N.jsxs)(M,{to:e.path,className:`tool-card`,children:[(0,N.jsx)(`div`,{className:`card-icon`,children:e.icon}),(0,N.jsx)(`h3`,{children:e.title}),(0,N.jsx)(`p`,{children:e.desc}),(0,N.jsx)(`div`,{className:`card-arrow`,children:`→`})]},e.id))})]}),(0,N.jsx)(Br,{}),(0,N.jsx)(`style`,{children:`
                .page-container {
                    min-height: 100vh;
                    background: #0a0a0a;
                    color: white;
                    display: flex;
                    flex-direction: column;
                }

                .tools-content {
                    flex: 1;
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                    padding: 4rem 1.5rem;
                }

                .tools-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .tools-header h1 {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                    background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .tools-header p {
                    color: #94a3b8;
                    font-size: 1.25rem;
                }

                .tools-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .tool-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1.5rem;
                    padding: 2.5rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .tool-card:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(16, 185, 129, 0.3);
                }

                .card-icon {
                    font-size: 3rem;
                    margin-bottom: 1.5rem;
                }

                .tool-card h3 {
                    font-size: 1.5rem;
                    color: white;
                    margin-bottom: 0.5rem;
                    font-weight: 700;
                }

                .tool-card p {
                    color: #94a3b8;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }

                .card-arrow {
                    margin-top: auto;
                    color: #10b981;
                    font-size: 1.5rem;
                    transition: transform 0.3s ease;
                }

                .tool-card:hover .card-arrow {
                    transform: translateX(5px);
                }
            `})]})},Li=()=>{let{language:e}=P(),[t,n]=(0,b.useState)(200),[r,i]=(0,b.useState)(18),[a,o]=(0,b.useState)(0),[s,c]=(0,b.useState)(.12),l=t*(r+a/60)/1e3,u=l*s,d={en:{title:`Electricity Cost Calculator`,subtitle:`Calculate the cost of running your grow equipment`,inputs:{power:`Power consumption`,time:`Usage time`,price:`Energy price`,energy:`Energy consumed`,cost:`Cost`},units:{w:`W`,hrs:`hrs`,min:`min`,kwh:`kWh`,currency:`$`},content:{introTitle:`How to calculate electricity cost`,introText:`If you're wondering how much electricity costs, all you need to know is the power consumption of your electrical device, how long it runs, and the actual energy prices offered by your supplier. The calculation runs in two steps.`,introSteps:[`First, multiply power consumption of your device by usage time to find how much energy your device consumed: power consumption × usage time = energy consumed`,`Then, check the electricity cost per kWh from your local energy supplier and multiply it by the amount of energy consumed: cost = energy consumed × energy price`],introExample:`Example: 700W vacuum for 30 mins. 700W × 0.5h = 350Wh = 0.35 kWh. 0.35 kWh × $0.14/kWh = $0.05.`,worksTitle:`How electricity cost – single usage calculator works`,worksText:`Our electricity cost – single usage calculator needs just a few steps to tell you how much electricity costs once the selected device is running:`,worksList:[`Determine power consumption of your device in watts.`,`Enter usage time (hours and minutes).`,`The calculator returns the energy consumed in kWh.`,`Enter the actual electricity cost per kWh to see the total cost.`],tipsTitle:`How to lower your electric bill`,tipsList:[`Get a home energy audit.`,`Switch to dimmer switches.`,`Keep your fridge and freezer closed.`,`Keep the air circulating in your home with ceiling fans.`,`Eliminate phantom loads from televisions, computers, etc.`,`Switch to LED light bulbs.`,`Shade your home with trees, curtains, and blinds.`,`Use cool water for laundry.`,`Wash laundry in full loads or use 'eco' mode.`,`Install a water heater timer.`,`Check if your home is properly insulated.`],faqTitle:`FAQs`,faqs:[{q:`How to calculate my electric bill?`,a:`Get the power of each device, multiply by operating time to get energy consumption (convert to kWh), then multiply by electricity cost.`},{q:`How much does it cost to run a 1500 watt oven?`,a:`$0.36 for 1.5 hours at $0.16/kWh. (1500W × 1.5h = 2.25 kWh. 2.25 kWh × $0.16 = $0.36).`},{q:`What uses a lot of electricity?`,a:`Electrical heaters, water heaters, and HVAC systems consume a lot of electricity.`},{q:`Is 100 kWh per day a lot?`,a:`Yes. 100 kWh/day = 3000 kWh/month, which exceeds the U.S. average of 893 kWh/month.`}]}},tr:{title:`Elektrik Maliyeti Hesaplayıcı`,subtitle:`Ekipmanlarınızı çalıştırmanın maliyetini hesaplayın`,inputs:{power:`Güç tüketimi`,time:`Kullanım süresi`,price:`Enerji fiyatı`,energy:`Tüketilen enerji`,cost:`Maliyet`},units:{w:`W`,hrs:`saat`,min:`dk`,kwh:`kWh`,currency:`₺`},content:{introTitle:`Elektrik maliyeti nasıl hesaplanır`,introText:`Elektriğin ne kadar tuttuğunu merak ediyorsanız, bilmeniz gereken tek şey elektrikli cihazınızın güç tüketimi, ne kadar süre çalıştığı ve tedarikçiniz tarafından sunulan gerçek enerji fiyatlarıdır. Hesaplama iki adımda gerçekleşir.`,introSteps:[`İlk olarak, cihazınızın ne kadar enerji tükettiğini bulmak için güç tüketimini kullanım süresiyle çarpın: güç tüketimi × kullanım süresi = tüketilen enerji`,`Ardından, yerel enerji tedarikçinizden kWh başına elektrik maliyetini kontrol edin ve bunu tüketilen enerji miktarıyla çarpın: maliyet = tüketilen enerji × enerji fiyatı`],introExample:`Örnek: 30 dakika boyunca 700W süpürge. 700W × 0.5sa = 350Wh = 0.35 kWh. 0.35 kWh × 0.14₺/kWh = 0.05₺.`,worksTitle:`Elektrik maliyeti hesaplayıcı nasıl çalışır`,worksText:`Elektrik maliyeti hesaplayıcımız, seçilen cihaz çalıştığında elektriğin ne kadar tuttuğunu size söylemek için sadece birkaç adıma ihtiyaç duyar:`,worksList:[`Cihazınızın güç tüketimini watt cinsinden belirleyin.`,`Kullanım süresini (saat ve dakika) girin.`,`Hesaplayıcı, tüketilen enerjiyi kWh cinsinden döndürür.`,`Toplam maliyeti görmek için kWh başına gerçek elektrik maliyetini girin.`],tipsTitle:`Elektrik faturanızı nasıl düşürürsünüz`,tipsList:[`Ev enerji denetimi yaptırın.`,`Dimmer anahtarlara geçin.`,`Buzdolabınızı ve dondurucunuzu kapalı tutun.`,`Tavan vantilatörleri ile evinizdeki havayı dolaştırın.`,`Televizyonlar, bilgisayarlar vb. cihazlardan kaynaklanan hayalet yükleri ortadan kaldırın.`,`LED ampullere geçin.`,`Evinizi ağaçlar, perdeler ve panjurlarla gölgeleyin.`,`Çamaşır için soğuk su kullanın.`,`Çamaşırları tam yükte yıkayın veya 'eko' modunu kullanın.`,`Su ısıtıcı zamanlayıcısı takın.`,`Evinizin uygun şekilde yalıtılıp yalıtılmadığını kontrol edin.`],faqTitle:`SSS`,faqs:[{q:`Elektrik faturamı nasıl hesaplarım?`,a:`Her cihazın gücünü alın, enerji tüketimini (kWh'ye çevirin) elde etmek için çalışma süresiyle çarpın, ardından elektrik maliyetiyle çarpın.`},{q:`1500 watt'lık bir fırını çalıştırmak ne kadara mal olur?`,a:`1.5 saat için 0.16₺/kWh fiyatla 0.36₺. (1500W × 1.5sa = 2.25 kWh. 2.25 kWh × 0.16 = 0.36₺).`},{q:`Ne çok elektrik tüketir?`,a:`Elektrikli ısıtıcılar, su ısıtıcıları ve HVAC sistemleri çok fazla elektrik tüketir.`},{q:`Günde 100 kWh çok mu?`,a:`Evet. Günde 100 kWh = ayda 3000 kWh, bu da ortalamanın oldukça üzerindedir.`}]}}}[e];return(0,N.jsxs)(`div`,{className:`page-container`,children:[(0,N.jsxs)(ze,{children:[(0,N.jsxs)(`title`,{children:[d.title,` | GroWizard`]}),(0,N.jsx)(`meta`,{name:`description`,content:d.subtitle})]}),(0,N.jsx)(Vr,{}),(0,N.jsxs)(`div`,{className:`tool-content`,children:[(0,N.jsxs)(`div`,{className:`tool-card`,children:[(0,N.jsxs)(`div`,{className:`tool-header`,children:[(0,N.jsx)(`div`,{className:`tool-icon`,children:`⚡`}),(0,N.jsx)(`h1`,{children:d.title}),(0,N.jsx)(`p`,{children:d.subtitle})]}),(0,N.jsxs)(`div`,{className:`calculator-form`,children:[(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsxs)(`div`,{className:`label-row`,children:[(0,N.jsx)(`label`,{children:d.inputs.power}),(0,N.jsx)(`span`,{className:`dots`,children:`•••`})]}),(0,N.jsxs)(`div`,{className:`input-wrapper`,children:[(0,N.jsx)(`input`,{type:`number`,value:t,onChange:e=>n(parseFloat(e.target.value)||0)}),(0,N.jsx)(`span`,{className:`unit`,children:d.units.w}),(0,N.jsx)(`span`,{className:`arrow`,children:`⌄`})]})]}),(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsxs)(`div`,{className:`label-row`,children:[(0,N.jsx)(`label`,{children:d.inputs.time}),(0,N.jsx)(`span`,{className:`dots`,children:`•••`})]}),(0,N.jsxs)(`div`,{className:`input-wrapper time-wrapper`,children:[(0,N.jsxs)(`div`,{className:`time-input`,children:[(0,N.jsx)(`input`,{type:`number`,value:r,onChange:e=>i(parseFloat(e.target.value)||0)}),(0,N.jsx)(`span`,{className:`unit`,children:d.units.hrs})]}),(0,N.jsx)(`span`,{className:`divider`,children:`|`}),(0,N.jsxs)(`div`,{className:`time-input`,children:[(0,N.jsx)(`input`,{type:`number`,value:a,onChange:e=>o(parseFloat(e.target.value)||0)}),(0,N.jsx)(`span`,{className:`unit`,children:d.units.min})]}),(0,N.jsx)(`span`,{className:`arrow`,children:`⌄`})]})]}),(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsxs)(`div`,{className:`label-row`,children:[(0,N.jsx)(`label`,{children:d.inputs.energy}),(0,N.jsx)(`span`,{className:`dots`,children:`•••`})]}),(0,N.jsxs)(`div`,{className:`input-wrapper read-only`,children:[(0,N.jsx)(`span`,{className:`value highlight-blue`,children:l.toLocaleString(void 0,{maximumFractionDigits:2})}),(0,N.jsx)(`span`,{className:`unit highlight-blue`,children:d.units.kwh})]})]}),(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsxs)(`div`,{className:`label-row`,children:[(0,N.jsx)(`label`,{children:d.inputs.price}),(0,N.jsx)(`span`,{className:`pin`,children:`📌`}),(0,N.jsx)(`span`,{className:`dots`,children:`•••`})]}),(0,N.jsxs)(`div`,{className:`input-wrapper`,children:[(0,N.jsx)(`span`,{className:`currency-prefix`,children:d.units.currency}),(0,N.jsx)(`input`,{type:`number`,value:s,step:`0.01`,onChange:e=>c(parseFloat(e.target.value)||0),className:`price-input`}),(0,N.jsxs)(`span`,{className:`unit-suffix`,children:[`/ `,d.units.kwh]})]})]}),(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsxs)(`div`,{className:`label-row`,children:[(0,N.jsx)(`label`,{children:d.inputs.cost}),(0,N.jsx)(`span`,{className:`dots`,children:`•••`})]}),(0,N.jsxs)(`div`,{className:`input-wrapper read-only cost-wrapper`,children:[(0,N.jsx)(`span`,{className:`currency-prefix highlight-blue`,children:d.units.currency}),(0,N.jsx)(`span`,{className:`value highlight-blue`,children:u.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:3})})]})]})]})]}),(0,N.jsxs)(`div`,{className:`info-section`,children:[(0,N.jsx)(`h2`,{children:d.content.introTitle}),(0,N.jsx)(`p`,{children:d.content.introText}),(0,N.jsx)(`ul`,{children:d.content.introSteps.map((e,t)=>(0,N.jsx)(`li`,{children:e},t))}),(0,N.jsx)(`p`,{className:`example`,children:d.content.introExample}),(0,N.jsx)(`h2`,{children:d.content.worksTitle}),(0,N.jsx)(`p`,{children:d.content.worksText}),(0,N.jsx)(`ol`,{children:d.content.worksList.map((e,t)=>(0,N.jsx)(`li`,{children:e},t))}),(0,N.jsx)(`h2`,{children:d.content.tipsTitle}),(0,N.jsx)(`ul`,{className:`tips-list`,children:d.content.tipsList.map((e,t)=>(0,N.jsxs)(`li`,{children:[`✅ `,e]},t))}),(0,N.jsx)(`h2`,{children:d.content.faqTitle}),(0,N.jsx)(`div`,{className:`faq-list`,children:d.content.faqs.map((e,t)=>(0,N.jsxs)(`div`,{className:`faq-item`,children:[(0,N.jsx)(`h3`,{children:e.q}),(0,N.jsx)(`p`,{children:e.a})]},t))})]})]}),(0,N.jsx)(Br,{}),(0,N.jsx)(`style`,{children:`
                .page-container {
                    min-height: 100vh;
                    background: #0a0a0a;
                    color: white;
                    display: flex;
                    flex-direction: column;
                }

                .tool-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 4rem 1.5rem;
                    gap: 4rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                }

                .tool-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1.5rem;
                    padding: 3rem;
                    max-width: 500px;
                    width: 100%;
                    color: white;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
                }

                .tool-header {
                    text-align: center;
                    margin-bottom: 2.5rem;
                }

                .tool-icon {
                    font-size: 3.5rem;
                    margin-bottom: 1rem;
                    color: #f59e0b;
                }

                .tool-header h1 {
                    font-size: 1.75rem;
                    margin-bottom: 0.5rem;
                    color: white;
                    font-weight: 700;
                }

                .tool-header p {
                    color: #94a3b8;
                }

                .calculator-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .label-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #94a3b8;
                    font-size: 0.875rem;
                    font-weight: 600;
                }

                .dots {
                    color: #475569;
                    letter-spacing: 2px;
                    font-size: 1.2rem;
                    line-height: 0.5;
                }

                .input-wrapper {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.75rem;
                    padding: 0.75rem 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: all 0.2s;
                }

                .input-wrapper:focus-within {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }

                .input-wrapper.read-only {
                    background: rgba(255, 255, 255, 0.02);
                    border-color: rgba(255, 255, 255, 0.05);
                }

                .input-wrapper input {
                    background: transparent;
                    border: none;
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: white;
                    width: 100%;
                    outline: none;
                }

                .unit, .unit-suffix, .currency-prefix {
                    color: #3b82f6;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                .arrow {
                    color: #3b82f6;
                    font-weight: bold;
                    font-size: 0.8rem;
                }

                .time-wrapper {
                    justify-content: space-between;
                }

                .time-input {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                .time-input input {
                    width: 3rem;
                    text-align: right;
                }

                .divider {
                    color: #475569;
                }

                .highlight-blue {
                    color: #3b82f6;
                    font-weight: 700;
                    font-size: 1.25rem;
                }

                .cost-wrapper {
                    padding: 1rem;
                }

                .pin {
                    color: #ef4444;
                    font-size: 0.9rem;
                    transform: rotate(45deg);
                }

                .info-section {
                    max-width: 800px;
                    width: 100%;
                    color: #cbd5e1;
                    line-height: 1.7;
                }

                .info-section h2 {
                    color: white;
                    font-size: 1.75rem;
                    margin: 3rem 0 1.5rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 0.5rem;
                }

                .info-section h2:first-child {
                    margin-top: 0;
                }

                .info-section p {
                    margin-bottom: 1.5rem;
                }

                .info-section ul, .info-section ol {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }

                .info-section li {
                    margin-bottom: 0.5rem;
                }

                .example {
                    background: rgba(255, 255, 255, 0.05);
                    padding: 1rem;
                    border-radius: 0.5rem;
                    border-left: 4px solid #3b82f6;
                    margin-bottom: 1.5rem;
                }

                .tips-list {
                    list-style: none;
                    padding-left: 0 !important;
                }

                .faq-list {
                    display: grid;
                    gap: 1.5rem;
                }

                .faq-item {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    padding: 1.5rem;
                }

                .faq-item h3 {
                    color: #e2e8f0;
                    font-size: 1.1rem;
                    margin-bottom: 0.75rem;
                }

                .faq-item p {
                    margin-bottom: 0;
                    color: #94a3b8;
                }

                @media (max-width: 768px) {
                    .tool-content {
                        padding: 2rem 1rem;
                    }
                    
                    .tool-card {
                        padding: 1.5rem;
                    }
                }
            `})]})},Ri=()=>{let{language:e}=P(),[t,n]=(0,b.useState)(1),r={ml:.001,l:1,gal:3.78541,qt:.946353,pt:.473176,cup:.236588,floz:.0295735,tbsp:.0147868,tsp:.00492892,m3:1e3,ft3:28.3168},i=(e,t)=>{let i=parseFloat(t);isNaN(i)?t===``&&n(0):n(i*r[e])},a=e=>{let n=t/r[e];return n===0?``:parseFloat(n.toFixed(6))},o={en:{title:`Volume Converter`,subtitle:`Convert freely between imperial and metric volume units`,units:{ml:`Milliliters (ml)`,l:`Liters (L)`,gal:`Gallons (US gal)`,qt:`Quarts (US qt)`,pt:`Pints (US pt)`,cup:`Cups (US cup)`,floz:`Fluid Ounces (US fl oz)`,tbsp:`Tablespoons (tbsp)`,tsp:`Teaspoons (tsp)`,m3:`Cubic Meters (m³)`,ft3:`Cubic Feet (ft³)`},content:{introTitle:`Volume units`,introText:`Choose the unit and convert freely between imperial and metric systems. Our calculator contains the following:`,introList:[`cubic millimeters (mm³)*`,`cubic centimeters (cm³)*`,`cubic decimeters (dm³)*`,`cubic meters (m³)*`,`cubic inches (cu in)*`,`cubic feet (cu ft)*`,`cubic yards (cu yd)*`,`milliliters (ml)`,`liters (l)`,`gallons (US) / gallons (UK) (gal)`,`quarts (US) / quarts (UK) (qt)`,`pints (US) / pints (UK) (pt)`,`fluid ounces (US) / fluid ounces (UK) (fl oz)`,`US customary cups/glasses (236.59ml) (cups)`,`tablespoons (15 ml) (tablespoons)`,`teaspoons (5 ml) (teaspoons)`],introNote:`*Some units are simplified in this view for common usage.`,chartTitle:`Volume conversion chart`,chartText:`One quick way of changing imperial volume units to the most popular metric, one milliliter, is using this conversion chart:`,chartHeaders:[`Measure`,`US (ml)`,`Metric (ml)`],chartRows:[[`Teaspoon`,`4.93`,`5`],[`Tablespoon`,`14.79`,`15`],[`Fluid ounce`,`29.57`,`30`],[`Cup`,`236.59`,`250`],[`Pint`,`473.18`,`568.26 (UK)`],[`Quart`,`946.35`,`1136.52 (UK)`],[`Gallon`,`3785.41`,`4546.09 (UK)`]],howtoTitle:`How to find the volume in a different unit`,howtoText:`Let's imagine that you want to bake a cake, but the problem is that the recipe comes from a different part of the world. You are used to your standard units, such as cups or pints, but you have no idea how much is 550 ml of milk. What can you do? Put that value in the calculator next to the milliliters unit, and immediately you will get the answer in cups (2.32), pints (1.16), or even teaspoons (110) if you wish.`,faqTitle:`FAQs`,faqs:[{q:`How do I convert from liters to gallons?`,a:`To convert from liters to gallons, use the formula: 1 L = 0.264 gal (US). You can roughly divide by 4 for a quick estimate.`},{q:`How much is 5 liters in cubic feet?`,a:`5 liters equal to 0.177 cubic feet (ft³). Formula: 5 L / 1000 * 35.315 = 0.177 ft³.`},{q:`Why do we measure volume in cubic meters?`,a:`We measure volume in cubic meters because volume measures the space occupied in three dimensions. Since the meter is a measure of length, the cubic meter (m³) represents a three-dimensional quantity.`}]}},tr:{title:`Hacim Çevirici`,subtitle:`İmperyal ve metrik hacim birimleri arasında özgürce dönüşüm yapın`,units:{ml:`Mililitre (ml)`,l:`Litre (L)`,gal:`Galon (US gal)`,qt:`Çeyrek (US qt)`,pt:`Pint (US pt)`,cup:`Fincan (US cup)`,floz:`Sıvı Ons (US fl oz)`,tbsp:`Yemek Kaşığı (tbsp)`,tsp:`Çay Kaşığı (tsp)`,m3:`Metreküp (m³)`,ft3:`Fitküp (ft³)`},content:{introTitle:`Hacim birimleri`,introText:`Birimi seçin ve imperyal ve metrik sistemler arasında özgürce dönüştürün. Hesaplayıcımız şunları içerir:`,introList:[`milimetreküp (mm³)*`,`santimetreküp (cm³)*`,`desimetreküp (dm³)*`,`metreküp (m³)*`,`inçküp (cu in)*`,`fitküp (cu ft)*`,`yardaküp (cu yd)*`,`mililitre (ml)`,`litre (l)`,`galon (ABD) / galon (BK) (gal)`,`çeyrek (ABD) / çeyrek (BK) (qt)`,`pint (ABD) / pint (BK) (pt)`,`sıvı ons (ABD) / sıvı ons (BK) (fl oz)`,`ABD standart fincan/bardak (236.59ml) (cups)`,`yemek kaşığı (15 ml) (tablespoons)`,`çay kaşığı (5 ml) (teaspoons)`],introNote:`*Bazı birimler yaygın kullanım için bu görünümde basitleştirilmiştir.`,chartTitle:`Hacim dönüşüm tablosu`,chartText:`İmperyal hacim birimlerini en popüler metrik birim olan mililitreye değiştirmenin hızlı bir yolu bu dönüşüm tablosunu kullanmaktır:`,chartHeaders:[`Ölçü`,`ABD (ml)`,`Metrik (ml)`],chartRows:[[`Çay Kaşığı`,`4.93`,`5`],[`Yemek Kaşığı`,`14.79`,`15`],[`Sıvı Ons`,`29.57`,`30`],[`Fincan`,`236.59`,`250`],[`Pint`,`473.18`,`568.26 (BK)`],[`Çeyrek`,`946.35`,`1136.52 (BK)`],[`Galon`,`3785.41`,`4546.09 (BK)`]],howtoTitle:`Farklı bir birimde hacim nasıl bulunur`,howtoText:`Diyelim ki bir kek yapmak istiyorsunuz, ancak sorun şu ki tarif dünyanın farklı bir yerinden geliyor. Fincan veya pint gibi standart birimlerinize alışkınsınız, ancak 550 ml sütün ne kadar olduğu hakkında hiçbir fikriniz yok. Ne yapabilirsiniz? Bu değeri hesaplayıcıda mililitre biriminin yanına koyun ve hemen fincan (2.32), pint (1.16) veya isterseniz çay kaşığı (110) cinsinden cevabı alacaksınız.`,faqTitle:`SSS`,faqs:[{q:`Litreyi galona nasıl çeviririm?`,a:`Litreyi galona çevirmek için şu formülü kullanın: 1 L = 0.264 gal (ABD). Hızlı bir tahmin için 4'e bölebilirsiniz.`},{q:`5 litre kaç fitküptür?`,a:`5 litre 0.177 fitküpe (ft³) eşittir. Formül: 5 L / 1000 * 35.315 = 0.177 ft³.`},{q:`Neden hacmi metreküp olarak ölçüyoruz?`,a:`Hacmi metreküp olarak ölçüyoruz çünkü hacim, bir nesnenin üç boyutta kapladığı alanı ölçer. Metre bir uzunluk ölçüsü olduğundan, metreküp (m³) üç boyutlu bir niceliği temsil eder.`}]}}}[e];return(0,N.jsxs)(`div`,{className:`page-container`,children:[(0,N.jsx)(Vr,{}),(0,N.jsxs)(`div`,{className:`tool-content`,children:[(0,N.jsxs)(`div`,{className:`tool-card`,children:[(0,N.jsxs)(`div`,{className:`tool-header`,children:[(0,N.jsx)(`div`,{className:`tool-icon`,children:`💧`}),(0,N.jsx)(`h1`,{children:o.title}),(0,N.jsx)(`p`,{children:o.subtitle})]}),(0,N.jsx)(`div`,{className:`converter-grid`,children:[`ml`,`l`,`gal`,`qt`,`pt`,`cup`,`floz`,`tbsp`,`tsp`,`m3`,`ft3`].map(e=>(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsx)(`label`,{children:o.units[e]}),(0,N.jsx)(`input`,{type:`number`,value:a(e),onChange:t=>i(e,t.target.value),placeholder:`0`})]},e))})]}),(0,N.jsxs)(`div`,{className:`info-section`,children:[(0,N.jsx)(`h2`,{children:o.content.introTitle}),(0,N.jsx)(`p`,{children:o.content.introText}),(0,N.jsx)(`ul`,{children:o.content.introList.map((e,t)=>(0,N.jsx)(`li`,{children:e},t))}),(0,N.jsx)(`p`,{className:`note`,children:o.content.introNote}),(0,N.jsx)(`h2`,{children:o.content.chartTitle}),(0,N.jsx)(`p`,{children:o.content.chartText}),(0,N.jsx)(`div`,{className:`chart-container`,children:(0,N.jsxs)(`table`,{className:`conversion-table`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsx)(`tr`,{children:o.content.chartHeaders.map((e,t)=>(0,N.jsx)(`th`,{children:e},t))})}),(0,N.jsx)(`tbody`,{children:o.content.chartRows.map((e,t)=>(0,N.jsx)(`tr`,{children:e.map((e,t)=>(0,N.jsx)(`td`,{children:e},t))},t))})]})}),(0,N.jsx)(`h2`,{children:o.content.howtoTitle}),(0,N.jsx)(`p`,{children:o.content.howtoText}),(0,N.jsx)(`h2`,{children:o.content.faqTitle}),(0,N.jsx)(`div`,{className:`faq-list`,children:o.content.faqs.map((e,t)=>(0,N.jsxs)(`div`,{className:`faq-item`,children:[(0,N.jsx)(`h3`,{children:e.q}),(0,N.jsx)(`p`,{children:e.a})]},t))})]})]}),(0,N.jsx)(Br,{}),(0,N.jsx)(`style`,{children:`
                .page-container {
                    min-height: 100vh;
                    background: #0a0a0a;
                    color: white;
                    display: flex;
                    flex-direction: column;
                }

                .tool-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 4rem 1.5rem;
                    gap: 4rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                }

                .tool-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1.5rem;
                    padding: 3rem;
                    max-width: 600px;
                    width: 100%;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
                }

                .tool-header {
                    text-align: center;
                    margin-bottom: 2.5rem;
                }

                .tool-icon {
                    font-size: 3.5rem;
                    margin-bottom: 1rem;
                }

                .tool-header h1 {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .tool-header p {
                    color: #94a3b8;
                }

                .converter-grid {
                    display: grid;
                    gap: 1.5rem;
                }

                .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .input-group label {
                    color: #94a3b8;
                    font-size: 0.875rem;
                    font-weight: 600;
                }

                .input-group input[type="number"] {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    padding: 1rem;
                    border-radius: 0.75rem;
                    font-size: 1.25rem;
                    width: 100%;
                    transition: all 0.2s;
                }

                .input-group input[type="number"]:focus {
                    outline: none;
                    border-color: #3b82f6;
                    background: rgba(59, 130, 246, 0.1);
                }

                .info-section {
                    max-width: 800px;
                    width: 100%;
                    color: #cbd5e1;
                    line-height: 1.7;
                }

                .info-section h2 {
                    color: white;
                    font-size: 1.75rem;
                    margin: 3rem 0 1.5rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 0.5rem;
                }

                .info-section h2:first-child {
                    margin-top: 0;
                }

                .info-section p {
                    margin-bottom: 1.5rem;
                }

                .info-section ul {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 0.5rem;
                }

                .info-section li {
                    margin-bottom: 0.5rem;
                }

                .note {
                    font-style: italic;
                    color: #94a3b8;
                    font-size: 0.9rem;
                }

                .chart-container {
                    overflow-x: auto;
                    margin-bottom: 2rem;
                    border-radius: 1rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .conversion-table {
                    width: 100%;
                    border-collapse: collapse;
                    background: rgba(255, 255, 255, 0.02);
                }

                .conversion-table th,
                .conversion-table td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                .conversion-table th {
                    background: rgba(255, 255, 255, 0.05);
                    font-weight: 600;
                    color: white;
                }

                .conversion-table tr:last-child td {
                    border-bottom: none;
                }

                .faq-list {
                    display: grid;
                    gap: 1.5rem;
                }

                .faq-item {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    padding: 1.5rem;
                }

                .faq-item h3 {
                    color: #e2e8f0;
                    font-size: 1.1rem;
                    margin-bottom: 0.75rem;
                }

                .faq-item p {
                    margin-bottom: 0;
                    color: #94a3b8;
                }

                @media (max-width: 768px) {
                    .tool-content {
                        padding: 2rem 1rem;
                    }
                    
                    .tool-card {
                        padding: 1.5rem;
                    }
                }
            `})]})},zi=()=>{let{language:e}=P(),[t,n]=(0,b.useState)(120),[r,i]=(0,b.useState)(120),[a,o]=(0,b.useState)(200),[s,c]=(0,b.useState)(1200),[l,u]=(0,b.useState)(15),d=t*r*a/1e6,f=d*35.3147,p=f*Math.max(0,s-400)/1e6,m=p*28.3168,h=p/l,g=m/l,_={en:{title:`CO₂ Grow Room Calculator`,subtitle:`Optimize your grow space with precise CO₂ calculations`,dims:`Room Dimensions (cm)`,target:`Target CO₂ Level (PPM)`,fillTime:`Desired Fill Time (minutes)`,volume:`Room Volume`,required:`Required CO₂ Amount`,flow:`Required Flow Rate`,calculate:`Calculate`,content:{introTitle:`How much CO₂ to add to a grow room?`,introText:`Find out how much CO2 to add to a grow room with our CO2 grow room calculator! Read on to learn the optimum CO2 level for plant growth and how to calculate the CO2 flow rate of a tank to reach that level. But first, let's answer the most critical question: why would you add CO2 to a grow room?`,introText2:`As you may or may not know, plants perform photosynthesis, transforming carbon dioxide, water, and sunlight into oxygen and compounds they use to grow. While we have plenty of CO2 in the atmosphere (around 420 ppm), adding more CO2 may be beneficial if you care about yield. However, adding CO2 alone won't do much. You also need to provide enough nutrients, water, and light. Even if you add plenty of CO2, the amount of light can be a limiting factor if it's not intense enough, and the CO2 will go to waste.`,calcTitle:`How to use the CO₂ grow room calculator?`,calcText:`To calculate the volume of CO2 for a grow tent, you need to know the following:`,calcList:[`The dimensions or volume of the room/tent`,`The current and desired CO2 levels in parts per million (ppm)`],calcText2:`Then you can use the calculator above to find how much CO2 you need to add to your grow room.`,faqTitle:`FAQs`,faqs:[{q:`What is the optimal CO2 level?`,a:`For most plants, 1200-1500 PPM is considered optimal during the flowering stage with high light intensity.`},{q:`When should I add CO2?`,a:`CO2 should only be added when the lights are ON. Plants do not use CO2 during the dark period.`},{q:`Do I need to seal my room?`,a:`Yes, a sealed room is best to prevent CO2 from escaping. If using an exhaust fan, it should be timed or controlled to minimize waste.`}]}},tr:{title:`CO₂ Yetiştirme Odası Hesaplayıcı`,subtitle:`Hassas CO₂ hesaplamalarıyla yetiştirme alanınızı optimize edin`,dims:`Oda Boyutları (cm)`,target:`Hedef CO₂ Seviyesi (PPM)`,fillTime:`İstenen Dolum Süresi (dakika)`,volume:`Oda Hacmi`,required:`Gerekli CO₂ Miktarı`,flow:`Gerekli Akış Hızı`,calculate:`Hesapla`,content:{introTitle:`Yetiştirme odasına ne kadar CO₂ eklenmeli?`,introText:`CO2 yetiştirme odası hesaplayıcımızla yetiştirme odasına ne kadar CO2 ekleneceğini öğrenin! Bitki büyümesi için optimum CO2 seviyesini ve bu seviyeye ulaşmak için bir tankın CO2 akış hızını nasıl hesaplayacağınızı öğrenmek için okumaya devam edin. Ama önce en kritik soruyu cevaplayalım: neden bir yetiştirme odasına CO2 ekleyesiniz?`,introText2:`Bildiğiniz veya bilmediğiniz gibi, bitkiler fotosentez yapar; karbondioksit, su ve güneş ışığını oksijene ve büyümek için kullandıkları bileşiklere dönüştürür. Atmosferde bol miktarda CO2 (yaklaşık 420 ppm) bulunsa da, verimi önemsiyorsanız daha fazla CO2 eklemek faydalı olabilir. Ancak, sadece CO2 eklemek pek bir işe yaramaz. Ayrıca yeterli besin, su ve ışık sağlamanız gerekir. Bol miktarda CO2 ekleseniz bile, ışık miktarı yeterince yoğun değilse sınırlayıcı bir faktör olabilir ve CO2 boşa gider.`,calcTitle:`CO₂ yetiştirme odası hesaplayıcısı nasıl kullanılır?`,calcText:`Bir yetiştirme çadırı için CO2 hacmini hesaplamak için aşağıdakileri bilmeniz gerekir:`,calcList:[`Odanın/çadırın boyutları veya hacmi`,`Milyonda parça (ppm) cinsinden mevcut ve istenen CO2 seviyeleri`],calcText2:`Ardından, yetiştirme odanıza ne kadar CO2 eklemeniz gerektiğini bulmak için yukarıdaki hesaplayıcıyı kullanabilirsiniz.`,faqTitle:`Sıkça Sorulan Sorular`,faqs:[{q:`Optimal CO2 seviyesi nedir?`,a:`Çoğu bitki için, yüksek ışık yoğunluğuyla çiçeklenme döneminde 1200-1500 PPM optimal kabul edilir.`},{q:`Ne zaman CO2 eklemeliyim?`,a:`CO2 sadece ışıklar AÇIKKEN eklenmelidir. Bitkiler karanlık dönemde CO2 kullanmazlar.`},{q:`Odamı yalıtmam gerekir mi?`,a:`Evet, CO2'nin kaçmasını önlemek için yalıtılmış bir oda en iyisidir. Egzoz fanı kullanıyorsanız, israfı en aza indirmek için zamanlanmalı veya kontrol edilmelidir.`}]}}}[e];return(0,N.jsxs)(`div`,{className:`page-container`,children:[(0,N.jsx)(Vr,{}),(0,N.jsxs)(`div`,{className:`tool-content`,children:[(0,N.jsxs)(`div`,{className:`tool-card`,children:[(0,N.jsxs)(`div`,{className:`tool-header`,children:[(0,N.jsx)(`div`,{className:`tool-icon`,children:`🌫️`}),(0,N.jsx)(`h1`,{children:_.title}),(0,N.jsx)(`p`,{children:_.subtitle})]}),(0,N.jsxs)(`div`,{className:`calculator-form`,children:[(0,N.jsx)(`div`,{className:`section-label`,children:_.dims}),(0,N.jsxs)(`div`,{className:`dims-grid`,children:[(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsx)(`label`,{children:`W (cm)`}),(0,N.jsx)(`input`,{type:`number`,value:t,onChange:e=>n(parseFloat(e.target.value)||0)})]}),(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsx)(`label`,{children:`L (cm)`}),(0,N.jsx)(`input`,{type:`number`,value:r,onChange:e=>i(parseFloat(e.target.value)||0)})]}),(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsx)(`label`,{children:`H (cm)`}),(0,N.jsx)(`input`,{type:`number`,value:a,onChange:e=>o(parseFloat(e.target.value)||0)})]})]}),(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsx)(`label`,{children:_.target}),(0,N.jsxs)(`div`,{className:`range-wrapper`,children:[(0,N.jsx)(`input`,{type:`range`,min:`400`,max:`2000`,step:`50`,value:s,onChange:e=>c(parseFloat(e.target.value)),className:`range-slider`}),(0,N.jsxs)(`span`,{className:`range-value`,children:[s,` PPM`]})]})]}),(0,N.jsxs)(`div`,{className:`input-group`,children:[(0,N.jsx)(`label`,{children:_.fillTime}),(0,N.jsxs)(`div`,{className:`range-wrapper`,children:[(0,N.jsx)(`input`,{type:`range`,min:`1`,max:`60`,step:`1`,value:l,onChange:e=>u(parseFloat(e.target.value)),className:`range-slider`}),(0,N.jsxs)(`span`,{className:`range-value`,children:[l,` min`]})]})]}),(0,N.jsxs)(`div`,{className:`results-grid`,children:[(0,N.jsxs)(`div`,{className:`result-item`,children:[(0,N.jsx)(`span`,{className:`label`,children:_.volume}),(0,N.jsxs)(`span`,{className:`value`,children:[d.toFixed(2),` m³`]}),(0,N.jsxs)(`span`,{className:`sub-value`,children:[`(`,f.toFixed(2),` ft³)`]})]}),(0,N.jsxs)(`div`,{className:`result-item highlight`,children:[(0,N.jsx)(`span`,{className:`label`,children:_.required}),(0,N.jsxs)(`span`,{className:`value`,children:[p.toFixed(4),` ft³`]}),(0,N.jsxs)(`span`,{className:`sub-value`,children:[`(`,m.toFixed(2),` L)`]})]}),(0,N.jsxs)(`div`,{className:`result-item highlight-green`,children:[(0,N.jsx)(`span`,{className:`label`,children:_.flow}),(0,N.jsxs)(`span`,{className:`value`,children:[g.toFixed(2),` L/min`]}),(0,N.jsxs)(`span`,{className:`sub-value`,children:[`(`,h.toFixed(4),` CFM)`]})]})]})]})]}),(0,N.jsxs)(`div`,{className:`info-section`,children:[(0,N.jsx)(`h2`,{children:_.content.introTitle}),(0,N.jsx)(`p`,{children:_.content.introText}),(0,N.jsx)(`p`,{children:_.content.introText2}),(0,N.jsx)(`h2`,{children:_.content.calcTitle}),(0,N.jsx)(`p`,{children:_.content.calcText}),(0,N.jsx)(`ul`,{children:_.content.calcList.map((e,t)=>(0,N.jsx)(`li`,{children:e},t))}),(0,N.jsx)(`p`,{children:_.content.calcText2}),(0,N.jsx)(`h2`,{children:_.content.faqTitle}),(0,N.jsx)(`div`,{className:`faq-list`,children:_.content.faqs.map((e,t)=>(0,N.jsxs)(`div`,{className:`faq-item`,children:[(0,N.jsx)(`h3`,{children:e.q}),(0,N.jsx)(`p`,{children:e.a})]},t))})]})]}),(0,N.jsx)(Br,{}),(0,N.jsx)(`style`,{children:`
                .page-container {
                    min-height: 100vh;
                    background: #0a0a0a;
                    color: white;
                    display: flex;
                    flex-direction: column;
                }

                .tool-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 4rem 1.5rem;
                    gap: 4rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                }

                .tool-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1.5rem;
                    padding: 3rem;
                    max-width: 600px;
                    width: 100%;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
                }

                .tool-header {
                    text-align: center;
                    margin-bottom: 2.5rem;
                }

                .tool-icon {
                    font-size: 3.5rem;
                    margin-bottom: 1rem;
                }

                .tool-header h1 {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    background: linear-gradient(135deg, #94a3b8 0%, #e2e8f0 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .tool-header p {
                    color: #94a3b8;
                }

                .calculator-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .section-label {
                    color: #94a3b8;
                    font-size: 0.875rem;
                    font-weight: 600;
                    margin-bottom: -0.5rem;
                }

                .dims-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 1rem;
                }

                .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .input-group label {
                    color: #94a3b8;
                    font-size: 0.875rem;
                    font-weight: 600;
                }

                .input-group input[type="number"] {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    padding: 0.75rem;
                    border-radius: 0.5rem;
                    font-size: 1.125rem;
                    width: 100%;
                    text-align: center;
                }

                .range-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .range-value {
                    min-width: 80px;
                    text-align: right;
                    font-variant-numeric: tabular-nums;
                    color: #e2e8f0;
                    font-weight: 600;
                }

                .range-slider {
                    flex: 1;
                    height: 6px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                    appearance: none;
                }

                .range-slider::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    background: #e2e8f0;
                    border-radius: 50%;
                    cursor: pointer;
                    border: 2px solid #0a0a0a;
                    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
                }

                .results-grid {
                    display: grid;
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .result-item {
                    background: rgba(255, 255, 255, 0.03);
                    padding: 1.25rem;
                    border-radius: 1rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .result-item.highlight {
                    background: rgba(59, 130, 246, 0.1);
                    border: 1px solid rgba(59, 130, 246, 0.3);
                }

                .result-item.highlight-green {
                    background: rgba(16, 185, 129, 0.1);
                    border: 1px solid rgba(16, 185, 129, 0.3);
                }

                .result-item .label {
                    font-size: 0.875rem;
                    color: #94a3b8;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .result-item .value {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: white;
                    margin-bottom: 0.25rem;
                }

                .result-item .sub-value {
                    font-size: 0.9rem;
                    color: #64748b;
                }

                .info-section {
                    max-width: 800px;
                    width: 100%;
                    color: #cbd5e1;
                    line-height: 1.7;
                }

                .info-section h2 {
                    color: white;
                    font-size: 1.75rem;
                    margin: 3rem 0 1.5rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 0.5rem;
                }

                .info-section h2:first-child {
                    margin-top: 0;
                }

                .info-section p {
                    margin-bottom: 1.5rem;
                }

                .info-section ul {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }

                .info-section li {
                    margin-bottom: 0.5rem;
                }

                .faq-list {
                    display: grid;
                    gap: 1.5rem;
                }

                .faq-item {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    padding: 1.5rem;
                }

                .faq-item h3 {
                    color: #e2e8f0;
                    font-size: 1.1rem;
                    margin-bottom: 0.75rem;
                }

                .faq-item p {
                    margin-bottom: 0;
                    color: #94a3b8;
                }

                @media (max-width: 768px) {
                    .tool-content {
                        padding: 2rem 1rem;
                    }
                    
                    .tool-card {
                        padding: 1.5rem;
                    }

                    .dims-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `})]})},Bi=({language:e})=>{let[t,n]=(0,b.useState)(null),[r,i]=(0,b.useState)({}),[a,o]=(0,b.useState)(!1),s=e=>{n(t===e?null:e)},c=(e,t)=>{a||i(n=>({...n,[e]:t}))},l=()=>{o(!0)},u=()=>{i({}),o(!1)},d={en:{title:`Understanding PPFD & Light Physics`,intro:{title:`What is PPFD? 🌞`,desc:`PPFD (Photosynthetic Photon Flux Density) measures the amount of light that actually helps your plants photosynthesize.`,unit:`Unit: µmol/m²/s`,analogy:`In simple terms: How many 'photosynthesis packets' land on a 1-meter square area every second? It's not about how bright it looks to humans (Lumen), but how nutritious it is for plants.`},faq:{title:`🌿 PPFD FAQ`,items:[{q:`Is PPFD the same as PAR?`,a:`No. PAR is the range of light (400-700nm) that plants use. PPFD is the measurement of how much light within that range actually hits the plant.`},{q:`What does PPFD affect?`,a:`Growth speed, leaf size, flowering density, and overall yield.`},{q:`Is higher PPFD always better?`,a:`No. Too much light causes stress, bleaching, and can actually stop photosynthesis if CO₂ levels aren't increased to match.`},{q:`Ideal PPFD for Seedlings?`,a:`150 – 300 µmol/m²/s`},{q:`Ideal PPFD for Vegetation?`,a:`400 – 600 µmol/m²/s`},{q:`Ideal PPFD for Flowering?`,a:`600 – 1000 µmol/m²/s (1200-1500 with CO₂)`},{q:`Difference between Lux and PPFD?`,a:`Lux measures light for human eyes. PPFD measures light for plant metabolism.`},{q:`What happens with wrong PPFD?`,a:`Too low: Stretching, weak stems, poor yield. Too high: Light burn, bleaching, nutrient lockout.`},{q:`Can I grow without measuring PPFD?`,a:`Yes, but it's like driving a Ferrari blindfolded. You won't get the performance you paid for.`},{q:`Is PPFD important for house plants?`,a:`Yes, but they generally require much lower levels (100–300).`}]},importance:{title:`🌱 Why Control PPFD?`,desc:`Controlling PPFD is like taking the steering wheel of photosynthesis.`,uncontrolled:`❌ Uncontrolled: Plants stretch or burn, energy is wasted, yields are low.`,controlled:`✅ Controlled: Balanced growth, strong roots, intense aroma, maximum yield.`,summary:`PPFD is your plant's daily calorie counter. Too much sugar is bad, too little is starvation.`},comparison:{title:`🌞 PPFD vs Lux vs Lumen`,headers:[`Feature`,`PPFD`,`Lux`,`Lumen`],rows:[{feature:`Full Name`,ppfd:`Photosynthetic Photon Flux Density`,lux:`Illuminance`,lumen:`Luminous Flux`},{feature:`What it measures`,ppfd:`Plant food (Photons)`,lux:`Human brightness`,lumen:`Total visible light`},{feature:`Unit`,ppfd:`µmol/m²/s`,lux:`lx`,lumen:`lm`},{feature:`Target Audience`,ppfd:`🌱 Plants`,lux:`👁️ Human Eyes`,lumen:`👁️ Human Eyes`},{feature:`Photosynthesis Link`,ppfd:`✅ Direct`,lux:`❌ Indirect`,lumen:`❌ Indirect`},{feature:`Reliability for Grow`,ppfd:`⭐⭐⭐⭐⭐`,lux:`⭐⭐`,lumen:`⭐`}],summary:`PPFD = Real Food, Lux = Eye Comfort, Lumen = Marketing Fluff.`},quiz:{title:`🎯 PPFD Mini Quiz`,btnSubmit:`Check Answers`,btnReset:`Try Again`,score:`Your Score:`,questions:[{id:1,q:`What does PPFD measure?`,options:[{id:`a`,text:`Light Brightness`},{id:`b`,text:`Photons for Photosynthesis`,correct:!0},{id:`c`,text:`Electricity Usage`}]},{id:2,q:`Ideal PPFD for Flowering?`,options:[{id:`a`,text:`150`},{id:`b`,text:`300`},{id:`c`,text:`800`,correct:!0}]},{id:3,q:`Effect of extremely high PPFD?`,options:[{id:`a`,text:`Happy Plants`},{id:`b`,text:`No Effect`},{id:`c`,text:`Stress & Burn`,correct:!0}]}]}},tr:{title:`PPFD ve Işık Fiziğini Anlamak`,intro:{title:`PPFD Nedir? 🌞`,desc:`PPFD (Photosynthetic Photon Flux Density), bitkinin fotosentez yapabilmesi için aldığı ışık miktarını ifade eder.`,unit:`Birim: µmol/m²/s`,analogy:`Sade Türkçesiyle: 1 metrekare alana, 1 saniyede kaç adet 'fotosentez paketi' düşüyor? Işığın parlaklığından değil, bitkinin yiyebileceği ışık miktarından bahseder.`},faq:{title:`🌿 PPFD Hakkında SSS`,items:[{q:`PPFD ile PAR aynı şey mi?`,a:`Hayır. PAR ışık aralığıdır (400-700nm), PPFD ise o aralıkta bitkiye çarpan foton miktarıdır.`},{q:`PPFD neyi etkiler?`,a:`Büyüme hızı, yaprak genişliği, çiçeklenme yoğunluğu ve toplam hasat miktarı.`},{q:`Yüksek PPFD her zaman iyi mi?`,a:`Hayır. Fazlası stres, yanık ve CO₂ yetersizliğinde fotosentez durmasına yol açar.`},{q:`Fideler için ideal PPFD?`,a:`150 – 300 µmol/m²/s`},{q:`Vejetatif dönem için ideal PPFD?`,a:`400 – 600 µmol/m²/s`},{q:`Çiçeklenme dönemi için ideal PPFD?`,a:`600 – 1000 µmol/m²/s (CO₂ ile 1200-1500)`},{q:`PPFD ile Lüks arasındaki fark?`,a:`Lüks insan gözüne, PPFD bitki metabolizmasına göre ölçüm yapar.`},{q:`Yanlış PPFD neye yol açar?`,a:`Azı: Uzama, cılız gövde. Çoğu: Işık yanığı, renk açılması, besin kilitlenmesi.`},{q:`PPFD ölçmeden yetiştiricilik olur mu?`,a:`Olur ama bu Ferrari’yi gözler kapalı kullanmak gibidir. Performans alamazsınız.`},{q:`Ev bitkilerinde PPFD önemli mi?`,a:`Evet, ama genelde daha düşük aralıklar (100–300) yeterlidir.`}]},importance:{title:`🌱 Neden PPFD Kontrolü?`,desc:`PPFD kontrolü = fotosentezin direksiyonunu eline almak.`,uncontrolled:`❌ Kontrolsüz: Bitki ışığı arar veya kaçar, enerji boşa gider, verim düşer.`,controlled:`✅ Kontrollü: Dengeli gelişim, güçlü kökler, yoğun aroma, maksimum hasat.`,summary:`PPFD = bitkinin günlük kalori sayacı. Fazla şeker de zararlı, azı da.`},comparison:{title:`🌞 PPFD vs Lux vs Lumen`,headers:[`Özellik`,`PPFD`,`Lux`,`Lumen`],rows:[{feature:`Açılımı`,ppfd:`Photosynthetic Photon Flux Density`,lux:`Illuminance`,lumen:`Luminous Flux`},{feature:`Ne ölçer?`,ppfd:`Bitki besini (Foton)`,lux:`Göz parlaklığı`,lumen:`Toplam görünür ışık`},{feature:`Birim`,ppfd:`µmol/m²/s`,lux:`lx`,lumen:`lm`},{feature:`Kime hitap eder?`,ppfd:`🌱 Bitkiler`,lux:`👁️ İnsan Gözü`,lumen:`👁️ İnsan Gözü`},{feature:`Fotosentez İlişkisi`,ppfd:`✅ Doğrudan`,lux:`❌ Dolaylı`,lumen:`❌ Dolaylı`},{feature:`Güvenilirlik`,ppfd:`⭐⭐⭐⭐⭐`,lux:`⭐⭐`,lumen:`⭐`}],summary:`PPFD = Gerçek Besin, Lux = Göz Konforu, Lumen = Pazarlama Süsü.`},quiz:{title:`🎯 PPFD Mini Test`,btnSubmit:`Cevapları Kontrol Et`,btnReset:`Tekrar Dene`,score:`Puanınız:`,questions:[{id:1,q:`PPFD neyi ölçer?`,options:[{id:`a`,text:`Işığın Parlaklığını`},{id:`b`,text:`Fotosentez Fotonlarını`,correct:!0},{id:`c`,text:`Elektrik Tüketimini`}]},{id:2,q:`Çiçeklenme döneminde ideal PPFD?`,options:[{id:`a`,text:`150`},{id:`b`,text:`300`},{id:`c`,text:`800`,correct:!0}]},{id:3,q:`Çok yüksek PPFD ne yapar?`,options:[{id:`a`,text:`Bitkiyi mutlu eder`},{id:`b`,text:`Hiç etkisi yoktur`},{id:`c`,text:`Stres ve yanık oluşturur`,correct:!0}]}]}}}[e]||{en:{}}.en;return(0,N.jsxs)(`div`,{className:`ppfd-info-section`,children:[(0,N.jsx)(`h2`,{className:`section-title`,children:d.title}),(0,N.jsxs)(`div`,{className:`info-grid`,children:[(0,N.jsxs)(`div`,{className:`info-card glass-panel highlight`,children:[(0,N.jsx)(`h3`,{children:d.intro.title}),(0,N.jsx)(`p`,{className:`big-text`,children:d.intro.desc}),(0,N.jsx)(`div`,{className:`badge`,children:d.intro.unit}),(0,N.jsx)(`p`,{className:`sub-text`,children:d.intro.analogy})]}),(0,N.jsxs)(`div`,{className:`info-card glass-panel`,children:[(0,N.jsx)(`h3`,{children:d.importance.title}),(0,N.jsx)(`p`,{children:d.importance.desc}),(0,N.jsxs)(`ul`,{className:`check-list`,children:[(0,N.jsx)(`li`,{className:`negative`,children:d.importance.uncontrolled}),(0,N.jsx)(`li`,{className:`positive`,children:d.importance.controlled})]}),(0,N.jsxs)(`p`,{className:`quote`,children:[`"`,d.importance.summary,`"`]})]})]}),(0,N.jsxs)(`div`,{className:`comparison-section glass-panel`,children:[(0,N.jsx)(`h3`,{children:d.comparison.title}),(0,N.jsx)(`div`,{className:`table-responsive`,children:(0,N.jsxs)(`table`,{className:`comparison-table`,children:[(0,N.jsx)(`thead`,{children:(0,N.jsx)(`tr`,{children:d.comparison.headers.map((e,t)=>(0,N.jsx)(`th`,{children:e},t))})}),(0,N.jsx)(`tbody`,{children:d.comparison.rows.map((e,t)=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{children:e.feature}),(0,N.jsx)(`td`,{className:`highlight-col`,children:e.ppfd}),(0,N.jsx)(`td`,{children:e.lux}),(0,N.jsx)(`td`,{children:e.lumen})]},t))})]})}),(0,N.jsx)(`p`,{className:`table-summary`,children:d.comparison.summary})]}),(0,N.jsxs)(`div`,{className:`interactive-grid`,children:[(0,N.jsxs)(`div`,{className:`faq-section glass-panel`,children:[(0,N.jsx)(`h3`,{children:d.faq.title}),(0,N.jsx)(`div`,{className:`accordion`,children:d.faq.items.map((e,n)=>(0,N.jsxs)(`div`,{className:`accordion-item ${t===n?`active`:``}`,children:[(0,N.jsxs)(`button`,{className:`accordion-header`,onClick:()=>s(n),children:[(0,N.jsx)(`span`,{className:`icon`,children:t===n?`−`:`+`}),e.q]}),(0,N.jsx)(`div`,{className:`accordion-content`,children:(0,N.jsx)(`p`,{children:e.a})})]},n))})]}),(0,N.jsxs)(`div`,{className:`quiz-section glass-panel`,children:[(0,N.jsx)(`h3`,{children:d.quiz.title}),(0,N.jsx)(`div`,{className:`quiz-content`,children:d.quiz.questions.map(e=>(0,N.jsxs)(`div`,{className:`quiz-question`,children:[(0,N.jsxs)(`p`,{className:`question-text`,children:[e.id,`. `,e.q]}),(0,N.jsx)(`div`,{className:`options`,children:e.options.map(t=>{let n=`option-btn`;return a?t.correct?n+=` correct`:r[e.id]===t.id&&(n+=` wrong`):r[e.id]===t.id&&(n+=` selected`),(0,N.jsx)(`button`,{className:n,onClick:()=>c(e.id,t.id),disabled:a,children:t.text},t.id)})})]},e.id))}),(0,N.jsx)(`div`,{className:`quiz-footer`,children:a?(0,N.jsxs)(`div`,{className:`result-area`,children:[(0,N.jsxs)(`span`,{className:`score`,children:[d.quiz.score,` `,(()=>{let e=0;return d.quiz.questions.forEach(t=>{let n=t.options.find(e=>e.id===r[t.id]);n&&n.correct&&e++}),e})(),` / `,d.quiz.questions.length]}),(0,N.jsx)(`button`,{className:`reset-btn`,onClick:u,children:d.quiz.btnReset})]}):(0,N.jsx)(`button`,{className:`submit-btn`,onClick:l,disabled:Object.keys(r).length<d.quiz.questions.length,children:d.quiz.btnSubmit})})]})]}),(0,N.jsx)(`style`,{children:`
                .ppfd-info-section {
                    margin-top: 4rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
                .section-title {
                    text-align: center;
                    font-size: 2rem;
                    margin-bottom: 2rem;
                    background: linear-gradient(to right, #fff, #94a3b8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .glass-panel {
                    background: rgba(30, 41, 59, 0.4);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    padding: 1.5rem;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .info-card h3 { color: #10b981; margin-bottom: 1rem; font-size: 1.2rem; }
                .big-text { font-size: 1.1rem; line-height: 1.6; margin-bottom: 1rem; }
                .badge { 
                    display: inline-block; 
                    background: rgba(16, 185, 129, 0.2); 
                    color: #10b981; 
                    padding: 0.25rem 0.75rem; 
                    border-radius: 1rem; 
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
                .sub-text { color: #94a3b8; font-style: italic; }
                .check-list { list-style: none; padding: 0; margin-bottom: 1rem; }
                .check-list li { margin-bottom: 0.5rem; }
                .quote { border-left: 3px solid #10b981; padding-left: 1rem; color: #cbd5e1; font-style: italic; }

                .comparison-section { margin-bottom: 2rem; overflow: hidden; }
                .comparison-section h3 { color: #f59e0b; margin-bottom: 1rem; text-align: center; }
                .table-responsive { overflow-x: auto; }
                .comparison-table { width: 100%; border-collapse: collapse; min-width: 600px; }
                .comparison-table th, .comparison-table td { 
                    padding: 1rem; 
                    text-align: left; 
                    border-bottom: 1px solid rgba(255,255,255,0.05); 
                }
                .comparison-table th { color: #94a3b8; font-weight: 600; }
                .comparison-table td { color: #e2e8f0; }
                .highlight-col { background: rgba(16, 185, 129, 0.05); font-weight: 600; color: #10b981 !important; }
                .table-summary { text-align: center; margin-top: 1rem; font-weight: bold; color: #10b981; }

                .interactive-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 1.5rem;
                }
                .faq-section h3 { color: #3b82f6; margin-bottom: 1rem; }
                .accordion { display: flex; flex-direction: column; gap: 0.5rem; }
                .accordion-item { border: 1px solid rgba(255,255,255,0.05); border-radius: 0.5rem; overflow: hidden; transition: all 0.3s; }
                .accordion-item.active { background: rgba(255,255,255,0.03); border-color: rgba(59, 130, 246, 0.3); }
                .accordion-header {
                    width: 100%;
                    text-align: left;
                    padding: 1rem;
                    background: transparent;
                    border: none;
                    color: white;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-weight: 500;
                }
                .accordion-header .icon { color: #3b82f6; font-weight: bold; font-size: 1.2rem; width: 20px; }
                .accordion-content { 
                    max-height: 0; 
                    overflow: hidden; 
                    transition: max-height 0.3s ease-out; 
                    padding: 0 1rem; 
                    color: #94a3b8;
                }
                .accordion-item.active .accordion-content { max-height: 200px; padding-bottom: 1rem; }

                .quiz-section h3 { color: #ec4899; margin-bottom: 1rem; }
                .quiz-content { display: flex; flex-direction: column; gap: 1.5rem; }
                .question-text { font-weight: 600; margin-bottom: 0.5rem; }
                .options { display: flex; flex-direction: column; gap: 0.5rem; }
                .option-btn {
                    padding: 0.75rem;
                    background: rgba(0,0,0,0.2);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 0.5rem;
                    color: #cbd5e1;
                    cursor: pointer;
                    text-align: left;
                    transition: all 0.2s;
                }
                .option-btn:hover:not(:disabled) { background: rgba(255,255,255,0.05); }
                .option-btn.selected { border-color: #3b82f6; background: rgba(59, 130, 246, 0.1); color: white; }
                .option-btn.correct { border-color: #10b981; background: rgba(16, 185, 129, 0.2); color: white; }
                .option-btn.wrong { border-color: #ef4444; background: rgba(239, 68, 68, 0.2); opacity: 0.7; }
                
                .quiz-footer { margin-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem; }
                .submit-btn {
                    width: 100%;
                    padding: 0.75rem;
                    background: #ec4899;
                    border: none;
                    border-radius: 0.5rem;
                    color: white;
                    font-weight: bold;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }
                .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
                .result-area { display: flex; justify-content: space-between; align-items: center; }
                .score { font-size: 1.2rem; font-weight: bold; color: #10b981; }
                .reset-btn { background: transparent; border: 1px solid #94a3b8; color: #94a3b8; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; }
                .reset-btn:hover { border-color: white; color: white; }

                @media (max-width: 768px) {
                    .info-grid, .interactive-grid { grid-template-columns: 1fr; }
                    .comparison-table { font-size: 0.85rem; }
                }
            `})]})},Vi=[{id:`l1`,name:`Quantum Board 100W`,maxPPFD:800,recommendedHeight:18,physicalWidth:1,physicalDepth:1,beamAngle:120},{id:`l2`,name:`Bar Light 600W`,maxPPFD:1600,recommendedHeight:24,physicalWidth:3.5,physicalDepth:3.5,beamAngle:120},{id:`l3`,name:`COB LED 200W`,maxPPFD:1200,recommendedHeight:20,physicalWidth:1.5,physicalDepth:1.5,beamAngle:90}];function Hi(){let{language:e}=P(),[t,n]=(0,b.useState)(`ft`),[r,i]=(0,b.useState)({width:4,depth:4,height:1.5}),[a,o]=(0,b.useState)([]),[s,c]=(0,b.useState)({average:0,min:0,max:0,uniformity:0}),l=(0,b.useRef)(null),u=(0,b.useRef)(null),[d,f]=(0,b.useState)(null),p=e=>{e!==t&&(i(t=>{let n=e===`cm`?30.48:1/30.48;return{width:parseFloat((t.width*n).toFixed(1)),depth:parseFloat((t.depth*n).toFixed(1)),height:parseFloat((t.height*n).toFixed(1))}}),n(e))},m={en:{title:`Advanced PPFD Heat Map`,subtitle:`Visualize light intensity and optimize your grow space`,dimensions:`Room Dimensions (${t})`,width:`Width`,depth:`Depth`,addLight:`Add Light Source`,height:`Global Light Height (${t})`,metrics:{avg:`Average PPFD`,min:`Min PPFD`,max:`Max PPFD`,uni:`Uniformity`},legend:{low:`Low (<200)`,seedling:`Seedling (200-400)`,veg:`Veg (400-600)`,flower:`Flower (600-900)`,high:`High (900-1200)`,extreme:`Extreme (>1200)`},instructions:`Drag lights to position. Double click to rotate.`,unitToggle:`Unit System`},tr:{title:`Gelişmiş PPFD Isı Haritası`,subtitle:`Işık yoğunluğunu görselleştirin ve alanınızı optimize edin`,dimensions:`Oda Boyutları (${t})`,width:`Genişlik`,depth:`Derinlik`,addLight:`Işık Kaynağı Ekle`,height:`Genel Işık Yüksekliği (${t})`,metrics:{avg:`Ortalama PPFD`,min:`Min PPFD`,max:`Maks PPFD`,uni:`Üniformite`},legend:{low:`Düşük (<200)`,seedling:`Fide (200-400)`,veg:`Gelişim (400-600)`,flower:`Çiçek (600-900)`,high:`Yüksek (900-1200)`,extreme:`Aşırı (>1200)`},instructions:`Işıkları sürükleyerek konumlandırın. Döndürmek için çift tıklayın.`,unitToggle:`Birim Sistemi`}}[e],h=e=>{let t={...e,instanceId:Date.now(),positions:[{x:.5,y:.5,rotation:0}]};o([...a,t])},g=e=>{o(a.filter(t=>t.instanceId!==e))};(0,b.useEffect)(()=>{if(!u.current)return;let e=t===`cm`?r.width/30.48:r.width,n=t===`cm`?r.depth/30.48:r.depth,i=t===`cm`?r.height/30.48:r.height;if(!e||e<=0||!n||n<=0)return;let o=u.current,s=o.getContext(`2d`),l=$r(e,n,a,4,i);c(ei(l));let d=l[0].length,f=l.length;o.width=d,o.height=f;let p=s.createImageData(d,f),m=p.data,h=[400,600,900];for(let e=0;e<f;e++)for(let t=0;t<d;t++){let n=l[e][t],r=(e*d+t)*4,i,a,o,s;if(n<200){let e=n/200;i=30+50*e,a=30+50*e,o=30+50*e,s=180}else if(n<400){let e=(n-200)/200;i=50*e,a=50*e,o=150+105*e,s=180}else if(n<600){let e=(n-400)/200;i=50*(1-e),a=150+105*e,o=50*(1-e),s=180}else if(n<900){let e=(n-600)/300;i=200+55*e,a=200+55*(1-e*.5),o=0,s=190}else if(n<1200){let e=(n-900)/300;i=255,a=100*(1-e),o=0,s=200}else i=255,a=255,o=255,s=220;let c=!1;if(t<d-1){let r=l[e][t+1];for(let e of h)(n<e&&r>=e||n>=e&&r<e)&&(c=!0)}if(!c&&e<f-1){let r=l[e+1][t];for(let e of h)(n<e&&r>=e||n>=e&&r<e)&&(c=!0)}c&&(i=255,a=255,o=255,s=255),m[r]=i,m[r+1]=a,m[r+2]=o,m[r+3]=s}s.putImageData(p,0,0)},[r,a,t]);let _=(e,t,n,r)=>{e.preventDefault(),e.stopPropagation();let i=l.current.getBoundingClientRect();f({instanceId:t,startX:e.clientX,startY:e.clientY,initialX:n,initialY:r,rect:i}),e.target.setPointerCapture(e.pointerId)},v=e=>{if(!d)return;let t=(e.clientX-d.startX)/d.rect.width,n=(e.clientY-d.startY)/d.rect.height,r=Math.max(0,Math.min(1,d.initialX+t)),i=Math.max(0,Math.min(1,d.initialY+n));o(e=>e.map(e=>e.instanceId===d.instanceId?{...e,positions:[{...e.positions[0],x:r,y:i}]}:e))},y=e=>{d&&(e.target.releasePointerCapture(e.pointerId),f(null))},x=(e,t)=>{e.preventDefault(),e.stopPropagation(),o(e=>e.map(e=>{if(e.instanceId===t){let t=e.positions[0].rotation||0;return{...e,positions:[{...e.positions[0],rotation:t===0?90:0}]}}return e}))},S=(e,t)=>{if(t===``){i(t=>({...t,[e]:``}));return}let n=parseFloat(t);isNaN(n)||i(t=>({...t,[e]:n}))};return(0,N.jsxs)(`div`,{className:`ppfd-tool-container`,children:[(0,N.jsx)(Vr,{}),(0,N.jsxs)(`div`,{className:`tool-main`,children:[(0,N.jsxs)(`div`,{className:`tool-header`,children:[(0,N.jsx)(`h1`,{children:m.title}),(0,N.jsx)(`p`,{children:m.subtitle})]}),(0,N.jsxs)(`div`,{className:`tool-workspace`,children:[(0,N.jsxs)(`div`,{className:`controls-panel glass-panel`,children:[(0,N.jsxs)(`div`,{className:`control-group`,children:[(0,N.jsx)(`h3`,{children:m.unitToggle}),(0,N.jsxs)(`div`,{className:`unit-toggle`,children:[(0,N.jsx)(`button`,{className:t===`ft`?`active`:``,onClick:()=>p(`ft`),children:`FT`}),(0,N.jsx)(`button`,{className:t===`cm`?`active`:``,onClick:()=>p(`cm`),children:`CM`})]})]}),(0,N.jsxs)(`div`,{className:`control-group`,children:[(0,N.jsx)(`h3`,{children:m.dimensions}),(0,N.jsxs)(`div`,{className:`input-row`,children:[(0,N.jsxs)(`div`,{className:`input-wrap`,children:[(0,N.jsx)(`label`,{children:m.width}),(0,N.jsx)(`input`,{type:`number`,value:r.width,onChange:e=>S(`width`,e.target.value),min:`1`})]}),(0,N.jsxs)(`div`,{className:`input-wrap`,children:[(0,N.jsx)(`label`,{children:m.depth}),(0,N.jsx)(`input`,{type:`number`,value:r.depth,onChange:e=>S(`depth`,e.target.value),min:`1`})]})]})]}),(0,N.jsxs)(`div`,{className:`control-group`,children:[(0,N.jsx)(`h3`,{children:m.height}),(0,N.jsxs)(`div`,{className:`slider-wrap`,children:[(0,N.jsx)(`input`,{type:`range`,min:t===`cm`?15:.5,max:t===`cm`?150:5,step:t===`cm`?5:.1,value:r.height||0,onChange:e=>S(`height`,e.target.value)}),(0,N.jsxs)(`span`,{children:[r.height,` `,t]})]})]}),(0,N.jsxs)(`div`,{className:`control-group`,children:[(0,N.jsx)(`h3`,{children:m.addLight}),(0,N.jsx)(`div`,{className:`light-list`,children:Vi.map(e=>(0,N.jsxs)(`button`,{className:`light-btn`,onClick:()=>h(e),children:[(0,N.jsx)(`span`,{className:`light-icon`,children:`💡`}),(0,N.jsxs)(`div`,{className:`light-info`,children:[(0,N.jsx)(`span`,{className:`light-name`,children:e.name}),(0,N.jsxs)(`span`,{className:`light-specs`,children:[e.maxPPFD,` PPFD`]})]}),(0,N.jsx)(`span`,{className:`add-icon`,children:`+`})]},e.id))})]})]}),(0,N.jsxs)(`div`,{className:`canvas-area`,children:[(0,N.jsxs)(`div`,{className:`metrics-bar glass-panel`,children:[(0,N.jsxs)(`div`,{className:`metric`,children:[(0,N.jsx)(`span`,{className:`metric-label`,children:m.metrics.avg}),(0,N.jsx)(`span`,{className:`metric-value`,children:s.average})]}),(0,N.jsxs)(`div`,{className:`metric`,children:[(0,N.jsx)(`span`,{className:`metric-label`,children:m.metrics.min}),(0,N.jsx)(`span`,{className:`metric-value`,children:s.min})]}),(0,N.jsxs)(`div`,{className:`metric`,children:[(0,N.jsx)(`span`,{className:`metric-label`,children:m.metrics.max}),(0,N.jsx)(`span`,{className:`metric-value`,children:s.max})]}),(0,N.jsxs)(`div`,{className:`metric`,children:[(0,N.jsx)(`span`,{className:`metric-label`,children:m.metrics.uni}),(0,N.jsx)(`span`,{className:`metric-value`,children:s.uniformity})]})]}),(0,N.jsxs)(`div`,{className:`canvas-wrapper`,ref:l,style:{aspectRatio:`${(r.width||1)/(r.depth||1)}`},onPointerMove:v,onPointerUp:y,onPointerLeave:y,children:[(0,N.jsx)(`canvas`,{ref:u,className:`heatmap-canvas`}),(0,N.jsx)(`div`,{className:`grid-overlay`}),a.map(e=>{let n=e.positions[0],i=t===`cm`?e.physicalWidth*30.48:e.physicalWidth,a=t===`cm`?e.physicalDepth*30.48:e.physicalDepth,o=i/(r.width||1)*100,s=a/(r.depth||1)*100;return(0,N.jsx)(`div`,{className:`light-element`,style:{left:`${n.x*100}%`,top:`${n.y*100}%`,width:`${o}%`,height:`${s}%`,transform:`translate(-50%, -50%) rotate(${n.rotation}deg)`},onPointerDown:t=>_(t,e.instanceId,n.x,n.y),onDoubleClick:t=>x(t,e.instanceId),children:(0,N.jsx)(`div`,{className:`light-body`,children:(0,N.jsx)(`span`,{className:`remove-btn`,onClick:t=>{t.stopPropagation(),g(e.instanceId)},children:`×`})})},e.instanceId)})]}),(0,N.jsx)(`p`,{className:`instructions`,children:m.instructions}),(0,N.jsxs)(`div`,{className:`legend glass-panel`,children:[(0,N.jsxs)(`div`,{className:`legend-item`,children:[(0,N.jsx)(`span`,{className:`dot`,style:{background:`#333`}}),` `,m.legend.low]}),(0,N.jsxs)(`div`,{className:`legend-item`,children:[(0,N.jsx)(`span`,{className:`dot`,style:{background:`blue`}}),` `,m.legend.seedling]}),(0,N.jsxs)(`div`,{className:`legend-item`,children:[(0,N.jsx)(`span`,{className:`dot`,style:{background:`green`}}),` `,m.legend.veg]}),(0,N.jsxs)(`div`,{className:`legend-item`,children:[(0,N.jsx)(`span`,{className:`dot`,style:{background:`orange`}}),` `,m.legend.flower]}),(0,N.jsxs)(`div`,{className:`legend-item`,children:[(0,N.jsx)(`span`,{className:`dot`,style:{background:`red`}}),` `,m.legend.high]}),(0,N.jsxs)(`div`,{className:`legend-item`,children:[(0,N.jsx)(`span`,{className:`dot`,style:{background:`white`,border:`1px solid #555`}}),` `,m.legend.extreme]})]})]})]}),(0,N.jsx)(Bi,{language:e})]}),(0,N.jsx)(Br,{}),(0,N.jsx)(`style`,{children:`
                .ppfd-tool-container {
                    min-height: 100vh;
                    background: #0a0a0a;
                    color: white;
                    display: flex;
                    flex-direction: column;
                }
                .tool-main {
                    flex: 1;
                    max-width: 1400px;
                    margin: 0 auto;
                    width: 100%;
                    padding: 2rem;
                }
                .tool-header {
                    text-align: center;
                    margin-bottom: 2rem;
                }
                .tool-header h1 {
                    font-size: 2.5rem;
                    background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 0.5rem;
                }
                .tool-header p { color: #94a3b8; }

                .tool-workspace {
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    gap: 2rem;
                    align-items: start;
                }

                .glass-panel {
                    background: rgba(30, 41, 59, 0.5);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    padding: 1.5rem;
                }

                .controls-panel {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .control-group h3 {
                    font-size: 1rem;
                    color: #10b981;
                    margin-bottom: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .unit-toggle {
                    display: flex;
                    background: rgba(0,0,0,0.3);
                    border-radius: 0.5rem;
                    padding: 0.25rem;
                }
                .unit-toggle button {
                    flex: 1;
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    padding: 0.5rem;
                    border-radius: 0.25rem;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.2s;
                }
                .unit-toggle button.active {
                    background: #10b981;
                    color: white;
                }

                .input-row {
                    display: flex;
                    gap: 1rem;
                }
                .input-wrap {
                    flex: 1;
                }
                .input-wrap label {
                    display: block;
                    font-size: 0.8rem;
                    color: #94a3b8;
                    margin-bottom: 0.25rem;
                }
                .input-wrap input {
                    width: 100%;
                    background: rgba(0,0,0,0.3);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: white;
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                }

                .slider-wrap {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .slider-wrap input { flex: 1; }
                .slider-wrap span { font-family: monospace; color: #10b981; white-space: nowrap; }

                .light-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .light-btn {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.05);
                    padding: 0.75rem;
                    border-radius: 0.5rem;
                    color: white;
                    cursor: pointer;
                    transition: all 0.2s;
                    text-align: left;
                }
                .light-btn:hover {
                    background: rgba(255,255,255,0.1);
                    border-color: #10b981;
                }
                .light-info { flex: 1; }
                .light-name { display: block; font-weight: 600; font-size: 0.9rem; }
                .light-specs { display: block; font-size: 0.75rem; color: #94a3b8; }
                .add-icon { color: #10b981; font-weight: bold; }

                .canvas-area {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                }

                .metrics-bar {
                    display: flex;
                    justify-content: space-around;
                    width: 100%;
                    padding: 1rem;
                }
                .metric { text-align: center; }
                .metric-label { display: block; font-size: 0.75rem; color: #94a3b8; margin-bottom: 0.25rem; }
                .metric-value { font-size: 1.25rem; font-weight: 700; color: white; }

                .canvas-wrapper {
                    width: 100%;
                    max-width: 800px;
                    background: #111;
                    position: relative;
                    border-radius: 1rem;
                    overflow: hidden;
                    border: 2px solid rgba(255,255,255,0.1);
                    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                    touch-action: none;
                }

                .heatmap-canvas {
                    width: 100%;
                    height: 100%;
                    display: block;
                    opacity: 0.8;
                    image-rendering: pixelated;
                }

                .grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 20% 20%;
                    pointer-events: none;
                }

                .light-element {
                    position: absolute;
                    z-index: 10;
                    cursor: move;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .light-body {
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.15);
                    border: 2px solid white;
                    border-radius: 4px;
                    box-shadow: 0 0 15px rgba(255,255,255,0.3);
                    position: relative;
                }

                .remove-btn {
                    position: absolute;
                    top: -10px;
                    right: -10px;
                    width: 20px;
                    height: 20px;
                    background: red;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    cursor: pointer;
                    opacity: 0;
                    transition: opacity 0.2s;
                }

                .light-element:hover .remove-btn { opacity: 1; }

                .instructions {
                    color: #94a3b8;
                    font-size: 0.9rem;
                    margin-top: 0.5rem;
                }

                .legend {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                    justify-content: center;
                    margin-top: 1rem;
                }
                .legend-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                    color: #cbd5e1;
                }
                .dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                }

                @media (max-width: 1024px) {
                    .tool-workspace {
                        grid-template-columns: 1fr;
                    }
                    .canvas-wrapper {
                        order: -1;
                    }
                }
            `})]})}var Ui={en:{title:`404 - Light Leak!`,description:`You've wandered into the dark cycle.`,headline:`404: Light Leak Detected!`,subtext:`Shhh! The plants are sleeping.`,message:`You've wandered into the dark cycle. Let's get you back to the light before they get stressed.`,button:`Return to Garden 🌿`},tr:{title:`404 - Işık Sızıntısı!`,description:`Karanlık döngüye girdiniz.`,headline:`404: Işık Sızıntısı Tespit Edildi!`,subtext:`Şşşt! Bitkiler uyuyor.`,message:`Karanlık döngüye girdiniz. Bitkiler strese girmeden sizi ışığa geri döndürelim.`,button:`Bahçeye Dön 🌿`}};function Wi(){let[e,t]=(0,b.useState)({x:50,y:50}),{language:n}=P(),r=Ui[n];return(0,b.useEffect)(()=>{let e=e=>{t({x:e.clientX/window.innerWidth*100,y:e.clientY/window.innerHeight*100})};return window.addEventListener(`mousemove`,e),()=>window.removeEventListener(`mousemove`,e)},[]),(0,N.jsxs)(`div`,{className:`not-found-container`,children:[(0,N.jsxs)(ze,{children:[(0,N.jsxs)(`title`,{children:[r.title,` | GroWizard`]}),(0,N.jsx)(`meta`,{name:`description`,content:r.description})]}),(0,N.jsx)(`div`,{className:`flashlight`,style:{background:`radial-gradient(circle 300px at ${e.x}% ${e.y}%, rgba(16, 185, 129, 0.15) 0%, rgba(0, 0, 0, 0.98) 100%)`}}),(0,N.jsxs)(`div`,{className:`content`,children:[(0,N.jsx)(`div`,{className:`icon`,children:`🔦`}),(0,N.jsx)(`h1`,{children:r.headline}),(0,N.jsx)(`p`,{children:r.subtext}),(0,N.jsx)(`p`,{className:`sub-text`,children:r.message}),(0,N.jsx)(M,{to:`/`,className:`home-btn`,children:r.button})]}),(0,N.jsx)(`style`,{children:`
        .not-found-container {
          height: 100vh;
          width: 100vw;
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          color: #10b981;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .flashlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 600px;
          padding: 2rem;
        }

        .icon {
          font-size: 5rem;
          margin-bottom: 1rem;
          animation: flicker 4s infinite;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
          font-weight: 800;
        }

        p {
          font-size: 1.5rem;
          color: #a7f3d0;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .sub-text {
          font-size: 1.1rem;
          color: #6ee7b7;
          margin-bottom: 2.5rem;
          opacity: 0.8;
        }

        .home-btn {
          display: inline-block;
          padding: 1rem 2rem;
          background: #10b981;
          color: #000;
          text-decoration: none;
          font-weight: bold;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
        }

        .home-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.6);
          background: #34d399;
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          95% { opacity: 1; }
          96% { opacity: 0.3; }
          97% { opacity: 1; }
          98% { opacity: 0.5; }
          99% { opacity: 1; }
        }

        @media (max-width: 768px) {
          h1 { font-size: 2rem; }
          p { font-size: 1.2rem; }
        }
      `})]})}function Gi(){return(0,N.jsx)(Pr,{children:(0,N.jsx)(Lr,{children:(0,N.jsxs)(Tr,{children:[(0,N.jsxs)(ze,{children:[(0,N.jsx)(`title`,{children:`GroWizard`}),(0,N.jsx)(`meta`,{name:`description`,content:`Plan and optimize your perfect grow tent setup with advanced PPFD lighting simulation`})]}),(0,N.jsx)(er,{children:(0,N.jsxs)(_n,{children:[(0,N.jsx)(hn,{path:`/`,element:(0,N.jsx)(Ur,{})}),(0,N.jsx)(hn,{path:`/onboarding`,element:(0,N.jsx)(Wr,{})}),(0,N.jsx)(hn,{path:`/builder`,element:(0,N.jsx)(ji,{})}),(0,N.jsx)(hn,{path:`/grow-tent-setup-builder`,element:(0,N.jsx)(ji,{})}),(0,N.jsx)(hn,{path:`/buyume-cadiri-kurulum-olusturucu`,element:(0,N.jsx)(ji,{})}),(0,N.jsx)(hn,{path:`/blog`,element:(0,N.jsx)(Mi,{})}),(0,N.jsx)(hn,{path:`/blog/:slug`,element:(0,N.jsx)(Fi,{})}),(0,N.jsx)(hn,{path:`/tools`,element:(0,N.jsx)(Ii,{})}),(0,N.jsx)(hn,{path:`/tools/cost-calculator`,element:(0,N.jsx)(Li,{})}),(0,N.jsx)(hn,{path:`/tools/unit-converter`,element:(0,N.jsx)(Ri,{})}),(0,N.jsx)(hn,{path:`/tools/co2-calculator`,element:(0,N.jsx)(zi,{})}),(0,N.jsx)(hn,{path:`/tools/ppfd-heatmap`,element:(0,N.jsx)(Hi,{})}),(0,N.jsx)(hn,{path:`*`,element:(0,N.jsx)(Wi,{})})]})})]})})})}var Ki=Gi;function qi(){try{return}catch(e){console.warn(`Analytics init failed:`,e)}}var Ji=({updateSW:e})=>{let[t,n]=(0,b.useState)(!1),{language:r}=P(),i={en:{title:`🎉 New Update Available!`,message:`A new version of GroWizard is ready. Update now for the latest features and improvements.`,update:`Update Now`,later:`Later`},tr:{title:`🎉 Yeni Güncelleme Mevcut!`,message:`GroWizard'ın yeni bir versiyonu hazır. En son özellikler ve iyileştirmeler için şimdi güncelleyin.`,update:`Şimdi Güncelle`,later:`Sonra`}}[r];(0,b.useEffect)(()=>{n(!0)},[]);let a=()=>{n(!1),e(!0)},o=()=>{n(!1)};return t?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`div`,{className:`update-prompt-overlay`,onClick:o}),(0,N.jsxs)(`div`,{className:`update-prompt`,children:[(0,N.jsx)(`div`,{className:`update-icon`,children:`🚀`}),(0,N.jsx)(`h3`,{children:i.title}),(0,N.jsx)(`p`,{children:i.message}),(0,N.jsxs)(`div`,{className:`update-actions`,children:[(0,N.jsx)(`button`,{onClick:a,className:`btn-update`,children:i.update}),(0,N.jsx)(`button`,{onClick:o,className:`btn-later`,children:i.later})]})]}),(0,N.jsx)(`style`,{children:`
        .update-prompt-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 9998;
          animation: fadeIn 0.3s ease;
        }

        .update-prompt {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 1rem;
          padding: 1.5rem;
          max-width: 400px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          z-index: 9999;
          animation: slideUp 0.4s ease;
          color: white;
        }

        .update-icon {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
          animation: bounce 1s infinite;
        }

        .update-prompt h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .update-prompt p {
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .update-actions {
          display: flex;
          gap: 0.75rem;
        }

        .btn-update, .btn-later {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }

        .btn-update {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .btn-update:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
        }

        .btn-later {
          background: rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-later:hover {
          background: rgba(255, 255, 255, 0.15);
          color: white;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .update-prompt {
            bottom: 1rem;
            right: 1rem;
            left: 1rem;
            max-width: none;
          }

          .update-actions {
            flex-direction: column;
          }
        }
      `})]}):null},Yi=`true`,Xi=`false`,Zi=Yi===`true`,Qi=Xi===`true`;function I(e={}){let{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:a,onRegisterError:o}=e,s,c,l,u=async(e=!0)=>{await c,Zi||l?.()};async function d(){if(`serviceWorker`in navigator){if(s=await Ue(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-DAxhes2W.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/sw.js`,{scope:`/`,type:`classic`})).catch(e=>{o?.(e)}),!s)return;if(l=()=>{s?.messageSkipWaiting()},!Qi)if(Zi)s.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),s.addEventListener(`installed`,e=>{e.isUpdate||r?.()});else{let e=!1,t=()=>{e=!0,s?.addEventListener(`controlling`,e=>{e.isUpdate&&window.location.reload()}),n?.()};s.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&r?.():n.isExternal?t():!e&&r?.():n.isUpdate||r?.()}),s.addEventListener(`waiting`,t)}s.register({immediate:t}).then(e=>{a?a(`/sw.js`,e):i?.(e)}).catch(e=>{o?.(e)})}}return c=d(),u}qi();var L=null,$i=I({onNeedRefresh(){L&&L()},onOfflineReady(){console.log(`✅ App ready to work offline`)},onRegistered(e){console.log(`✅ Service Worker registered`),e&&setInterval(()=>{e.update()},3600*1e3)},onRegisterError(e){console.error(`❌ Service Worker registration error:`,e)}});function R(){let[e,t]=(0,b.useState)(!1);return L=()=>t(!0),(0,N.jsx)(b.StrictMode,{children:(0,N.jsxs)(je,{children:[(0,N.jsx)(Ki,{}),e&&(0,N.jsx)(Ji,{updateSW:$i})]})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,N.jsx)(R,{}));