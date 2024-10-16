exports.id = 3475;
exports.ids = [3475];
exports.modules = {

/***/ 12387:
/***/ ((module) => {

var g=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var V=Object.prototype.hasOwnProperty;var Y=(e,r)=>{for(var t in r)g(e,t,{get:r[t],enumerable:!0})},K=(e,r,t,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of L(r))!V.call(e,s)&&s!==t&&g(e,s,{get:()=>r[s],enumerable:!(o=j(r,s))||o.enumerable});return e};var $=e=>K(g({},"__esModule",{value:!0}),e);var h=(e,r,t)=>new Promise((o,s)=>{var i=a=>{try{l(t.next(a))}catch(m){s(m)}},c=a=>{try{l(t.throw(a))}catch(m){s(m)}},l=a=>a.done?o(a.value):Promise.resolve(a.value).then(i,c);l((t=t.apply(e,r)).next())});var W={};Y(W,{SubmissionError:()=>p,appendExtraData:()=>E,createClient:()=>F,getDefaultClient:()=>U,isSubmissionError:()=>A});module.exports=$(W);var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",J=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function I(e){e=String(e);for(var r,t,o,s,i="",c=0,l=e.length%3;c<e.length;){if((t=e.charCodeAt(c++))>255||(o=e.charCodeAt(c++))>255||(s=e.charCodeAt(c++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");r=t<<16|o<<8|s,i+=u.charAt(r>>18&63)+u.charAt(r>>12&63)+u.charAt(r>>6&63)+u.charAt(r&63)}return l?i.slice(0,l-3)+"===".substring(l):i}function O(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!J.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(e.length&3));for(var r,t="",o,s,i=0;i<e.length;)r=u.indexOf(e.charAt(i++))<<18|u.indexOf(e.charAt(i++))<<12|(o=u.indexOf(e.charAt(i++)))<<6|(s=u.indexOf(e.charAt(i++))),t+=o===64?String.fromCharCode(r>>16&255):s===64?String.fromCharCode(r>>16&255,r>>8&255):String.fromCharCode(r>>16&255,r>>8&255,r&255);return t}var G=()=>navigator.webdriver||!!document.documentElement.getAttribute(O("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,y=class{constructor(){this.loadedAt=Date.now(),this.webdriver=G()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}};var S=class{constructor(r){this.kind="success";this.next=r.next}};function w(e){return"next"in e&&typeof e.next=="string"}var b=class{constructor(r,t){this.paymentIntentClientSecret=r;this.resubmitKey=t;this.kind="stripePluginPending"}};function _(e){if("stripe"in e&&"resubmitKey"in e&&typeof e.resubmitKey=="string"){let{stripe:r}=e;return typeof r=="object"&&r!=null&&"paymentIntentClientSecret"in r&&typeof r.paymentIntentClientSecret=="string"}return!1}function A(e){return e.kind==="error"}var p=class{constructor(...r){this.kind="error";this.formErrors=[];this.fieldErrors=new Map;var t;for(let o of r){if(!o.field){this.formErrors.push({code:o.code&&z(o.code)?o.code:"UNSPECIFIED",message:o.message});continue}let s=(t=this.fieldErrors.get(o.field))!=null?t:[];s.push({code:o.code&&Q(o.code)?o.code:"UNSPECIFIED",message:o.message}),this.fieldErrors.set(o.field,s)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(r){var t;return(t=this.fieldErrors.get(r))!=null?t:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function z(e){return e in B}var B={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function Q(e){return e in Z}var Z={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function P(e){return"errors"in e&&Array.isArray(e.errors)&&e.errors.every(r=>typeof r.message=="string")||"error"in e&&typeof e.error=="string"}var D="3.0.1";var v=e=>I(JSON.stringify(e)),N=e=>{let r=`@formspree/core@${D}`;return e?`${e} ${r}`:r};function E(e,r,t){e instanceof FormData?e.append(r,t):e[r]=t}function M(e){return e!==null&&typeof e=="object"}var R=class{constructor(r={}){this.project=r.project,this.stripe=r.stripe,typeof window!="undefined"&&(this.session=new y)}submitForm(s,i){return h(this,arguments,function*(r,t,o={}){let c=o.endpoint||"https://formspree.io",l=this.project?`${c}/p/${this.project}/f/${r}`:`${c}/f/${r}`,a={Accept:"application/json","Formspree-Client":N(o.clientName)};this.session&&(a["Formspree-Session-Data"]=v(this.session.data())),t instanceof FormData||(a["Content-Type"]="application/json");function m(f){return h(this,null,function*(){try{let n=yield(yield fetch(l,{method:"POST",mode:"cors",body:f instanceof FormData?f:JSON.stringify(f),headers:a})).json();if(M(n)){if(P(n))return Array.isArray(n.errors)?new p(...n.errors):new p({message:n.error});if(_(n))return new b(n.stripe.paymentIntentClientSecret,n.resubmitKey);if(w(n))return new S({next:n.next})}return new p({message:"Unexpected response format"})}catch(d){let n=d instanceof Error?d.message:`Unknown error while posting to Formspree: ${JSON.stringify(d)}`;return new p({message:n})}})}if(this.stripe&&o.createPaymentMethod){let f=yield o.createPaymentMethod();if(f.error)return new p({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});E(t,"paymentMethod",f.paymentMethod.id);let d=yield m(t);if(d.kind==="error")return d;if(d.kind==="stripePluginPending"){let n=yield this.stripe.handleCardAction(d.paymentIntentClientSecret);if(n.error)return new p({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});t instanceof FormData?t.delete("paymentMethod"):delete t.paymentMethod,E(t,"paymentIntent",n.paymentIntent.id),E(t,"resubmitKey",d.resubmitKey);let x=yield m(t);return k(x),x}return d}let T=yield m(t);return k(T),T})}};function k(e){let{kind:r}=e;if(r!=="success"&&r!=="error")throw new Error(`Unexpected submission result (kind: ${r})`)}var F=e=>new R(e),U=()=>(C||(C=F()),C),C;0&&(0);


/***/ }),

/***/ 83475:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function e(e,r){if(r==null||r>e.length)r=e.length;for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function r(e){if(Array.isArray(e))return e}function t(e,r,t,n,o,u,i){try{var a=e[u](i);var l=a.value}catch(e){t(e);return}if(a.done){r(l)}else{Promise.resolve(l).then(n,o)}}function n(e){return function(){var r=this,n=arguments;return new Promise(function(o,u){var i=e.apply(r,n);function a(e){t(i,o,u,a,l,"next",e)}function l(e){t(i,o,u,a,l,"throw",e)}a(undefined)})}}function o(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}function u(e,r){if(r!=null&&typeof Symbol!=="undefined"&&r[Symbol.hasInstance]){return!!r[Symbol.hasInstance](e)}else{return e instanceof r}}function i(e,r){var t=e==null?null:typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t==null)return;var n=[];var o=true;var u=false;var i,a;try{for(t=t.call(e);!(o=(i=t.next()).done);o=true){n.push(i.value);if(r&&n.length===r)break}}catch(e){u=true;a=e}finally{try{if(!o&&t["return"]!=null)t["return"]()}finally{if(u)throw a}}return n}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};var n=Object.keys(t);if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))}n.forEach(function(r){o(e,r,t[r])})}return e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(r){n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})}t.push.apply(t,n)}return t}function f(e,r){r=r!=null?r:{};if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e,r){if(e==null)return{};var t=p(e,r);var n,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++){n=u[o];if(r.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;t[n]=e[n]}}return t}function p(e,r){if(e==null)return{};var t={};var n=Object.keys(e);var o,u;for(u=0;u<n.length;u++){o=n[u];if(r.indexOf(o)>=0)continue;t[o]=e[o]}return t}function v(e,t){return r(e)||i(e,t)||d(e,t)||a()}function d(r,t){if(!r)return;if(typeof r==="string")return e(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor)n=r.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(r,t)}function y(e,r){var t,n,o,u,i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),"throw":a(1),"return":a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(e){return function(r){return l([e,r])}}function l(u){if(t)throw new TypeError("Generator is already executing.");while(i)try{if(t=1,n&&(o=u[0]&2?n["return"]:u[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;if(n=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:i.label++;return{value:u[1],done:false};case 5:i.label++;n=u[1];u=[0];continue;case 7:u=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){i=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(u[0]===6&&i.label<o[1]){i.label=o[1];o=u;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(u);break}if(o[2])i.ops.pop();i.trys.pop();continue}u=r.call(e,i)}catch(e){u=[6,e];n=0}finally{t=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}}var m=Object.create;var b=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var O=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var w=function(e,r){for(var t in r)b(e,t,{get:r[t],enumerable:!0})},S=function(e,r,t,n){var o=true,u=false,i=undefined;if(r&&typeof r=="object"||typeof r=="function")try{var a=function(){var o=c.value;!j.call(e,o)&&o!==t&&b(e,o,{get:function(){return r[o]},enumerable:!(n=h(r,o))||n.enumerable})};for(var l=g(r)[Symbol.iterator](),c;!(o=(c=l.next()).done);o=true)a()}catch(e){u=true;i=e}finally{try{if(!o&&l.return!=null){l.return()}}finally{if(u){throw i}}}return e};var E=function(e,r,t){return t=e!=null?m(O(e)):{},S(r||!e||!e.__esModule?b(t,"default",{value:e,enumerable:!0}):t,e)},P=function(e){return S(b({},"__esModule",{value:!0}),e)};var x={};w(x,{CardElement:function(){return F.CardElement},FormspreeProvider:function(){return I},ValidationError:function(){return _},useForm:function(){return J},useFormspree:function(){return N},useSubmit:function(){return U}});module.exports=P(x);var F=__webpack_require__(16699);var D=E(__webpack_require__(18038));function _(e){var r=e.prefix,t=e.field,n=e.errors,o=s(e,["prefix","field","errors"]);if(n==null)return null;var u=t?n.getFieldErrors(t):n.getFormErrors();return u.length===0?null:D.default.createElement("div",l({},o),r?"".concat(r," "):null,u.map(function(e){return e.message}).join(", "))}var C=__webpack_require__(12387),q=__webpack_require__(16699),k=__webpack_require__(29017),M=E(__webpack_require__(18038)),A=M.default.createContext(null);function I(e){var r=e.children,t=e.project,n=e.stripePK,o=v((0,M.useState)((0,C.createClient)({project:t})),2),u=o[0],i=o[1],a=(0,M.useMemo)(function(){return n?(0,k.loadStripe)(n):null},[n]);return(0,M.useEffect)(function(){var e=!0;return e&&i(function(e){return e.project!==t?(0,C.createClient)(f(l({},e),{project:t})):e}),function(){e=!1}},[t]),(0,M.useEffect)(function(){var e=!0;return a===null||a===void 0?void 0:a.then(function(r){e&&r&&i(function(e){return(0,C.createClient)(f(l({},e),{stripe:r}))})}),function(){e=!1}},[a]),M.default.createElement(A.Provider,{value:{client:u}},a?M.default.createElement(q.Elements,{stripe:a},r):r)}function N(){var e;return(e=(0,M.useContext)(A))!==null&&e!==void 0?e:{client:(0,C.getDefaultClient)()}}var T=__webpack_require__(18038);var V=__webpack_require__(12387),z=__webpack_require__(16699),G=__webpack_require__(18038);var K="2.5.1";var R="@formspree/react@".concat(K);function U(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};var t=N(),o=r.client,u=o===void 0?t.client:o,i=r.extraData,a=r.onError,l=r.onSuccess,c=r.origin,f=u.stripe,s=(0,G.useMemo)(function(){return f===null||f===void 0?void 0:f.elements().getElement(z.CardElement)},[f]);return function(){var r=n(function(r){var t,n,o,p,d,m,b,h,g,O,j,w,S;return y(this,function(y){switch(y.label){case 0:t=Y(r)?$(r):r;n=true,o=false,p=undefined;if(!(typeof i=="object"))return[3,10];y.label=1;case 1:y.trys.push([1,8,9,10]);d=Object.entries(i)[Symbol.iterator]();y.label=2;case 2:if(!!(n=(m=d.next()).done))return[3,7];b=v(m.value,2),h=b[0],g=b[1];O=void 0;if(!(typeof g=="function"))return[3,4];return[4,g()];case 3:j=O=y.sent();return[3,5];case 4:j=O=g;y.label=5;case 5:j,O!==void 0&&(0,V.appendExtraData)(t,h,O);y.label=6;case 6:n=true;return[3,2];case 7:return[3,10];case 8:w=y.sent();o=true;p=w;return[3,10];case 9:try{if(!n&&d.return!=null){d.return()}}finally{if(o){throw p}}return[7];case 10:return[4,u.submitForm(e,t,{endpoint:c,clientName:R,createPaymentMethod:f&&s?function(){return f.createPaymentMethod({type:"card",card:s,billing_details:B(t)})}:void 0})];case 11:S=y.sent();(0,V.isSubmissionError)(S)?a===null||a===void 0?void 0:a(S):l===null||l===void 0?void 0:l(S);return[2]}})});return function(e){return r.apply(this,arguments)}}()}function Y(e){return"preventDefault"in e&&typeof e.preventDefault=="function"}function $(e){e.preventDefault();var r=e.currentTarget;if(r.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(r)}function B(e){var r={address:H(e)};for(var t=0,n=["name","email","phone"];t<n.length;t++){var o=n[t];var i=u(e,FormData)?e.get(o):e[o];i&&typeof i=="string"&&(r[o]=i)}return r}function H(e){var r={};for(var t=0,n=[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]];t<n.length;t++){var o=v(n[t],2),i=o[0],a=o[1];var l=u(e,FormData)?e.get(i):e[i];l&&typeof l=="string"&&(r[a]=l)}return r}function J(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};var t=v((0,T.useState)(null),2),o=t[0],u=t[1],i=v((0,T.useState)(null),2),a=i[0],l=i[1],c=v((0,T.useState)(!1),2),f=c[0],s=c[1],p=v((0,T.useState)(!1),2),d=p[0],m=p[1];if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');var b=U(e,{client:r.client,extraData:r.data,onError:function e(e){u(e),s(!1),m(!1)},onSuccess:function e(e){u(null),l(e),s(!1),m(!0)},origin:r.endpoint});return[{errors:o,result:a,submitting:f,succeeded:d},function(){var e=n(function(e){return y(this,function(r){switch(r.label){case 0:s(!0);return[4,b(e)];case 1:r.sent();return[2]}})});return function(r){return e.apply(this,arguments)}}(),function(){u(null),l(null),s(!1),m(!1)}]}0&&(0);

/***/ }),

/***/ 16699:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(__webpack_require__(18038));
var PropTypes = _interopDefault(__webpack_require__(55601));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var usePrevious = function usePrevious(value) {
  var ref = React.useRef(value);
  React.useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
};

var isUnknownObject = function isUnknownObject(raw) {
  return raw !== null && _typeof(raw) === 'object';
};
var isPromise = function isPromise(raw) {
  return isUnknownObject(raw) && typeof raw.then === 'function';
}; // We are using types to enforce the `stripe` prop in this lib,
// but in an untyped integration `stripe` could be anything, so we need
// to do some sanity validation to prevent type errors.

var isStripe = function isStripe(raw) {
  return isUnknownObject(raw) && typeof raw.elements === 'function' && typeof raw.createToken === 'function' && typeof raw.createPaymentMethod === 'function' && typeof raw.confirmCardPayment === 'function';
};

var PLAIN_OBJECT_STR = '[object Object]';
var isEqual = function isEqual(left, right) {
  if (!isUnknownObject(left) || !isUnknownObject(right)) {
    return left === right;
  }

  var leftArray = Array.isArray(left);
  var rightArray = Array.isArray(right);
  if (leftArray !== rightArray) return false;
  var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
  var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
  if (leftPlainObject !== rightPlainObject) return false; // not sure what sort of special object this is (regexp is one option), so
  // fallback to reference check.

  if (!leftPlainObject && !leftArray) return left === right;
  var leftKeys = Object.keys(left);
  var rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) return false;
  var keySet = {};

  for (var i = 0; i < leftKeys.length; i += 1) {
    keySet[leftKeys[i]] = true;
  }

  for (var _i = 0; _i < rightKeys.length; _i += 1) {
    keySet[rightKeys[_i]] = true;
  }

  var allKeys = Object.keys(keySet);

  if (allKeys.length !== leftKeys.length) {
    return false;
  }

  var l = left;
  var r = right;

  var pred = function pred(key) {
    return isEqual(l[key], r[key]);
  };

  return allKeys.every(pred);
};

var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates(options, prevOptions, immutableKeys) {
  if (!isUnknownObject(options)) {
    return null;
  }

  return Object.keys(options).reduce(function (newOptions, key) {
    var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);

    if (immutableKeys.includes(key)) {
      if (isUpdated) {
        console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
      }

      return newOptions;
    }

    if (!isUpdated) {
      return newOptions;
    }

    return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
  }, null);
};

var INVALID_STRIPE_ERROR = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.'; // We are using types to enforce the `stripe` prop in this lib, but in a real
// integration `stripe` could be anything, so we need to do some sanity
// validation to prevent type errors.

var validateStripe = function validateStripe(maybeStripe) {
  if (maybeStripe === null || isStripe(maybeStripe)) {
    return maybeStripe;
  }

  throw new Error(INVALID_STRIPE_ERROR);
};

var parseStripeProp = function parseStripeProp(raw) {
  if (isPromise(raw)) {
    return {
      tag: 'async',
      stripePromise: Promise.resolve(raw).then(validateStripe)
    };
  }

  var stripe = validateStripe(raw);

  if (stripe === null) {
    return {
      tag: 'empty'
    };
  }

  return {
    tag: 'sync',
    stripe: stripe
  };
};

var ElementsContext = /*#__PURE__*/React.createContext(null);
ElementsContext.displayName = 'ElementsContext';
var parseElementsContext = function parseElementsContext(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }

  return ctx;
};
var CartElementContext = /*#__PURE__*/React.createContext(null);
CartElementContext.displayName = 'CartElementContext';
var parseCartElementContext = function parseCartElementContext(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }

  return ctx;
};
/**
 * The `Elements` provider allows you to use [Element components](https://stripe.com/docs/stripe-js/react#element-components) and access the [Stripe object](https://stripe.com/docs/js/initializing) in any nested component.
 * Render an `Elements` provider at the root of your React app so that it is available everywhere you need it.
 *
 * To use the `Elements` provider, call `loadStripe` from `@stripe/stripe-js` with your publishable key.
 * The `loadStripe` function will asynchronously load the Stripe.js script and initialize a `Stripe` object.
 * Pass the returned `Promise` to `Elements`.
 *
 * @docs https://stripe.com/docs/stripe-js/react#elements-provider
 */

var Elements = function Elements(_ref) {
  var rawStripeProp = _ref.stripe,
      options = _ref.options,
      children = _ref.children;
  var parsed = React.useMemo(function () {
    return parseStripeProp(rawStripeProp);
  }, [rawStripeProp]);

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      cart = _React$useState2[0],
      setCart = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      cartState = _React$useState4[0],
      setCartState = _React$useState4[1]; // For a sync stripe instance, initialize into context


  var _React$useState5 = React.useState(function () {
    return {
      stripe: parsed.tag === 'sync' ? parsed.stripe : null,
      elements: parsed.tag === 'sync' ? parsed.stripe.elements(options) : null
    };
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      ctx = _React$useState6[0],
      setContext = _React$useState6[1];

  React.useEffect(function () {
    var isMounted = true;

    var safeSetContext = function safeSetContext(stripe) {
      setContext(function (ctx) {
        // no-op if we already have a stripe instance (https://github.com/stripe/react-stripe-js/issues/296)
        if (ctx.stripe) return ctx;
        return {
          stripe: stripe,
          elements: stripe.elements(options)
        };
      });
    }; // For an async stripePromise, store it in context once resolved


    if (parsed.tag === 'async' && !ctx.stripe) {
      parsed.stripePromise.then(function (stripe) {
        if (stripe && isMounted) {
          // Only update Elements context if the component is still mounted
          // and stripe is not null. We allow stripe to be null to make
          // handling SSR easier.
          safeSetContext(stripe);
        }
      });
    } else if (parsed.tag === 'sync' && !ctx.stripe) {
      // Or, handle a sync stripe instance going from null -> populated
      safeSetContext(parsed.stripe);
    }

    return function () {
      isMounted = false;
    };
  }, [parsed, ctx, options]); // Warn on changes to stripe prop

  var prevStripe = usePrevious(rawStripeProp);
  React.useEffect(function () {
    if (prevStripe !== null && prevStripe !== rawStripeProp) {
      console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
    }
  }, [prevStripe, rawStripeProp]); // Apply updates to elements when options prop has relevant changes

  var prevOptions = usePrevious(options);
  React.useEffect(function () {
    if (!ctx.elements) {
      return;
    }

    var updates = extractAllowedOptionsUpdates(options, prevOptions, ['clientSecret', 'fonts']);

    if (updates) {
      ctx.elements.update(updates);
    }
  }, [options, prevOptions, ctx.elements]); // Attach react-stripe-js version to stripe.js instance

  React.useEffect(function () {
    var anyStripe = ctx.stripe;

    if (!anyStripe || !anyStripe._registerWrapper || !anyStripe.registerAppInfo) {
      return;
    }

    anyStripe._registerWrapper({
      name: 'react-stripe-js',
      version: "1.16.5"
    });

    anyStripe.registerAppInfo({
      name: 'react-stripe-js',
      version: "1.16.5",
      url: 'https://stripe.com/docs/stripe-js/react'
    });
  }, [ctx.stripe]);
  return /*#__PURE__*/React.createElement(ElementsContext.Provider, {
    value: ctx
  }, /*#__PURE__*/React.createElement(CartElementContext.Provider, {
    value: {
      cart: cart,
      setCart: setCart,
      cartState: cartState,
      setCartState: setCartState
    }
  }, children));
};
Elements.propTypes = {
  stripe: PropTypes.any,
  options: PropTypes.object
};
var useElementsContextWithUseCase = function useElementsContextWithUseCase(useCaseMessage) {
  var ctx = React.useContext(ElementsContext);
  return parseElementsContext(ctx, useCaseMessage);
};
var useCartElementContextWithUseCase = function useCartElementContextWithUseCase(useCaseMessage) {
  var ctx = React.useContext(CartElementContext);
  return parseCartElementContext(ctx, useCaseMessage);
};
/**
 * @docs https://stripe.com/docs/stripe-js/react#useelements-hook
 */

var useElements = function useElements() {
  var _useElementsContextWi = useElementsContextWithUseCase('calls useElements()'),
      elements = _useElementsContextWi.elements;

  return elements;
};
/**
 * @docs https://stripe.com/docs/stripe-js/react#usestripe-hook
 */

var useStripe = function useStripe() {
  var _useElementsContextWi2 = useElementsContextWithUseCase('calls useStripe()'),
      stripe = _useElementsContextWi2.stripe;

  return stripe;
};
/**
 * @docs https://stripe.com/docs/payments/checkout/cart-element
 */

var useCartElement = function useCartElement() {
  var _useCartElementContex = useCartElementContextWithUseCase('calls useCartElement()'),
      cart = _useCartElementContex.cart;

  return cart;
};
/**
 * @docs https://stripe.com/docs/payments/checkout/cart-element
 */

var useCartElementState = function useCartElementState() {
  var _useCartElementContex2 = useCartElementContextWithUseCase('calls useCartElementState()'),
      cartState = _useCartElementContex2.cartState;

  return cartState;
};
/**
 * @docs https://stripe.com/docs/stripe-js/react#elements-consumer
 */

var ElementsConsumer = function ElementsConsumer(_ref2) {
  var children = _ref2.children;
  var ctx = useElementsContextWithUseCase('mounts <ElementsConsumer>'); // Assert to satisfy the busted React.FC return type (it should be ReactNode)

  return children(ctx);
};
ElementsConsumer.propTypes = {
  children: PropTypes.func.isRequired
};

var useAttachEvent = function useAttachEvent(element, event, cb) {
  var cbDefined = !!cb;
  var cbRef = React.useRef(cb); // In many integrations the callback prop changes on each render.
  // Using a ref saves us from calling element.on/.off every render.

  React.useEffect(function () {
    cbRef.current = cb;
  }, [cb]);
  React.useEffect(function () {
    if (!cbDefined || !element) {
      return function () {};
    }

    var decoratedCb = function decoratedCb() {
      if (cbRef.current) {
        cbRef.current.apply(cbRef, arguments);
      }
    };

    element.on(event, decoratedCb);
    return function () {
      element.off(event, decoratedCb);
    };
  }, [cbDefined, event, element, cbRef]);
};

var capitalized = function capitalized(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var createElementComponent = function createElementComponent(type, isServer) {
  var displayName = "".concat(capitalized(type), "Element");

  var ClientElement = function ClientElement(_ref) {
    var id = _ref.id,
        className = _ref.className,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options,
        onBlur = _ref.onBlur,
        onFocus = _ref.onFocus,
        onReady = _ref.onReady,
        onChange = _ref.onChange,
        onEscape = _ref.onEscape,
        onClick = _ref.onClick,
        onLoadError = _ref.onLoadError,
        onLoaderStart = _ref.onLoaderStart,
        onNetworksChange = _ref.onNetworksChange,
        onCheckout = _ref.onCheckout,
        onLineItemClick = _ref.onLineItemClick,
        onConfirm = _ref.onConfirm,
        onCancel = _ref.onCancel,
        onShippingAddressChange = _ref.onShippingAddressChange,
        onShippingRateChange = _ref.onShippingRateChange;

    var _useElementsContextWi = useElementsContextWithUseCase("mounts <".concat(displayName, ">")),
        elements = _useElementsContextWi.elements;

    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        element = _React$useState2[0],
        setElement = _React$useState2[1];

    var elementRef = React.useRef(null);
    var domNode = React.useRef(null);

    var _useCartElementContex = useCartElementContextWithUseCase("mounts <".concat(displayName, ">")),
        setCart = _useCartElementContex.setCart,
        setCartState = _useCartElementContex.setCartState; // For every event where the merchant provides a callback, call element.on
    // with that callback. If the merchant ever changes the callback, removes
    // the old callback with element.off and then call element.on with the new one.


    useAttachEvent(element, 'blur', onBlur);
    useAttachEvent(element, 'focus', onFocus);
    useAttachEvent(element, 'escape', onEscape);
    useAttachEvent(element, 'click', onClick);
    useAttachEvent(element, 'loaderror', onLoadError);
    useAttachEvent(element, 'loaderstart', onLoaderStart);
    useAttachEvent(element, 'networkschange', onNetworksChange);
    useAttachEvent(element, 'lineitemclick', onLineItemClick);
    useAttachEvent(element, 'confirm', onConfirm);
    useAttachEvent(element, 'cancel', onCancel);
    useAttachEvent(element, 'shippingaddresschange', onShippingAddressChange);
    useAttachEvent(element, 'shippingratechange', onShippingRateChange);
    var readyCallback;

    if (type === 'cart') {
      readyCallback = function readyCallback(event) {
        setCartState(event);
        onReady && onReady(event);
      };
    } else if (onReady) {
      if (type === 'payButton') {
        // Passes through the event, which includes visible PM types
        readyCallback = onReady;
      } else {
        // For other Elements, pass through the Element itself.
        readyCallback = function readyCallback() {
          onReady(element);
        };
      }
    }

    useAttachEvent(element, 'ready', readyCallback);
    var changeCallback = type === 'cart' ? function (event) {
      setCartState(event);
      onChange && onChange(event);
    } : onChange;
    useAttachEvent(element, 'change', changeCallback);
    var checkoutCallback = type === 'cart' ? function (event) {
      setCartState(event);
      onCheckout && onCheckout(event);
    } : onCheckout;
    useAttachEvent(element, 'checkout', checkoutCallback);
    React.useLayoutEffect(function () {
      if (elementRef.current === null && elements && domNode.current !== null) {
        var newElement = elements.create(type, options);

        if (type === 'cart' && setCart) {
          // we know that elements.create return value must be of type StripeCartElement if type is 'cart',
          // we need to cast because typescript is not able to infer which overloaded method is used based off param type
          setCart(newElement);
        } // Store element in a ref to ensure it's _immediately_ available in cleanup hooks in StrictMode


        elementRef.current = newElement; // Store element in state to facilitate event listener attachment

        setElement(newElement);
        newElement.mount(domNode.current);
      }
    }, [elements, options, setCart]);
    var prevOptions = usePrevious(options);
    React.useEffect(function () {
      if (!elementRef.current) {
        return;
      }

      var updates = extractAllowedOptionsUpdates(options, prevOptions, ['paymentRequest']);

      if (updates) {
        elementRef.current.update(updates);
      }
    }, [options, prevOptions]);
    React.useLayoutEffect(function () {
      return function () {
        if (elementRef.current) {
          elementRef.current.destroy();
          elementRef.current = null;
        }
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      id: id,
      className: className,
      ref: domNode
    });
  }; // Only render the Element wrapper in a server environment.


  var ServerElement = function ServerElement(props) {
    // Validate that we are in the right context by calling useElementsContextWithUseCase.
    useElementsContextWithUseCase("mounts <".concat(displayName, ">"));
    useCartElementContextWithUseCase("mounts <".concat(displayName, ">"));
    var id = props.id,
        className = props.className;
    return /*#__PURE__*/React.createElement("div", {
      id: id,
      className: className
    });
  };

  var Element = isServer ? ServerElement : ClientElement;
  Element.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onReady: PropTypes.func,
    onEscape: PropTypes.func,
    onClick: PropTypes.func,
    onLoadError: PropTypes.func,
    onLoaderStart: PropTypes.func,
    onNetworksChange: PropTypes.func,
    onCheckout: PropTypes.func,
    onLineItemClick: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onShippingAddressChange: PropTypes.func,
    onShippingRateChange: PropTypes.func,
    options: PropTypes.object
  };
  Element.displayName = displayName;
  Element.__elementType = type;
  return Element;
};

var isServer = typeof window === 'undefined';
/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var AuBankAccountElement = createElementComponent('auBankAccount', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var CardElement = createElementComponent('card', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var CardNumberElement = createElementComponent('cardNumber', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var CardExpiryElement = createElementComponent('cardExpiry', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var CardCvcElement = createElementComponent('cardCvc', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var FpxBankElement = createElementComponent('fpxBank', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var IbanElement = createElementComponent('iban', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var IdealBankElement = createElementComponent('idealBank', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var P24BankElement = createElementComponent('p24Bank', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var EpsBankElement = createElementComponent('epsBank', isServer);
var PaymentElement = createElementComponent('payment', isServer);
/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var PayButtonElement = createElementComponent('payButton', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var PaymentRequestButtonElement = createElementComponent('paymentRequestButton', isServer);
/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var LinkAuthenticationElement = createElementComponent('linkAuthentication', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var AddressElement = createElementComponent('address', isServer);
/**
 * @deprecated
 * Use `AddressElement` instead.
 *
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var ShippingAddressElement = createElementComponent('shippingAddress', isServer);
/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * @docs https://stripe.com/docs/elements/cart-element
 */

var CartElement = createElementComponent('cart', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var PaymentMethodMessagingElement = createElementComponent('paymentMethodMessaging', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var AffirmMessageElement = createElementComponent('affirmMessage', isServer);
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */

var AfterpayClearpayMessageElement = createElementComponent('afterpayClearpayMessage', isServer);

exports.AddressElement = AddressElement;
exports.AffirmMessageElement = AffirmMessageElement;
exports.AfterpayClearpayMessageElement = AfterpayClearpayMessageElement;
exports.AuBankAccountElement = AuBankAccountElement;
exports.CardCvcElement = CardCvcElement;
exports.CardElement = CardElement;
exports.CardExpiryElement = CardExpiryElement;
exports.CardNumberElement = CardNumberElement;
exports.CartElement = CartElement;
exports.Elements = Elements;
exports.ElementsConsumer = ElementsConsumer;
exports.EpsBankElement = EpsBankElement;
exports.FpxBankElement = FpxBankElement;
exports.IbanElement = IbanElement;
exports.IdealBankElement = IdealBankElement;
exports.LinkAuthenticationElement = LinkAuthenticationElement;
exports.P24BankElement = P24BankElement;
exports.PayButtonElement = PayButtonElement;
exports.PaymentElement = PaymentElement;
exports.PaymentMethodMessagingElement = PaymentMethodMessagingElement;
exports.PaymentRequestButtonElement = PaymentRequestButtonElement;
exports.ShippingAddressElement = ShippingAddressElement;
exports.useCartElement = useCartElement;
exports.useCartElementState = useCartElementState;
exports.useElements = useElements;
exports.useStripe = useStripe;


/***/ }),

/***/ 47793:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.54.2",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

var validateLoadParams = function validateLoadParams(params) {
  var errorMessage = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(params), "\n");

  if (params === null || _typeof(params) !== 'object') {
    throw new Error(errorMessage);
  }

  if (Object.keys(params).length === 1 && typeof params.advancedFraudSignals === 'boolean') {
    return params;
  }

  throw new Error(errorMessage);
};

var loadParams;
var loadStripeCalled = false;
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadStripeCalled = true;
  var startTime = Date.now();
  return loadScript(loadParams).then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};

loadStripe.setLoadParameters = function (params) {
  // we won't throw an error if setLoadParameters is called with the same values as before
  if (loadStripeCalled && loadParams) {
    var validatedParams = validateLoadParams(params);
    var parameterKeys = Object.keys(validatedParams);
    var sameParameters = parameterKeys.reduce(function (previousValue, currentValue) {
      var _loadParams;

      return previousValue && params[currentValue] === ((_loadParams = loadParams) === null || _loadParams === void 0 ? void 0 : _loadParams[currentValue]);
    }, true);

    if (sameParameters) {
      return;
    }
  }

  if (loadStripeCalled) {
    throw new Error('You cannot change load parameters after calling loadStripe');
  }

  loadParams = validateLoadParams(params);
};

exports.loadStripe = loadStripe;


/***/ }),

/***/ 29017:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(47793);


/***/ })

};
;