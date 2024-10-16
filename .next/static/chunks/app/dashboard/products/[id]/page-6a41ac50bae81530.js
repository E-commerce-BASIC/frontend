(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[340],{65524:function(e,t,r){Promise.resolve().then(r.bind(r,30030))},30030:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var a=r(57437),s=r(92173),i=r(16691),o=r.n(i),n=r(24033),l=r(2265),d=r(5925),c=()=>(0,a.jsx)("div",{className:"   w-full h-full flex items-center justify-center p-3 my-5   ",children:(0,a.jsxs)("div",{role:"status",className:"space-y-8 w-full md:w-9/12 mx-auto animate-pulse md:space-y-0 md:space-x-8 flex-col rtl:space-x-reverse md:flex md:items-center",children:[(0,a.jsx)("div",{className:"flex  items-center justify-center lg:w-2/5  h-96 bg-gray-300 rounded  ",children:(0,a.jsx)("svg",{className:"w-10 h-10 text-gray-200 ","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 18",children:(0,a.jsx)("path",{d:"M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"})})}),(0,a.jsxs)("div",{className:"w-full grid md:grid-cols-2 grid-rows-1 gap-3 ",children:[(0,a.jsx)("div",{className:" h-6 md:h-12 bg-gray-200 rounded  w-full  my-4"}),(0,a.jsx)("div",{className:" h-6 md:h-12 bg-gray-200 rounded  w-full  my-4"}),(0,a.jsx)("div",{className:" h-6 md:h-32 bg-gray-200 rounded  w-full  my-4"}),(0,a.jsx)("div",{className:" h-6 md:h-12 bg-gray-200 rounded  w-full  my-4"}),(0,a.jsx)("div",{className:" mt-3 h-6 md:h-12 bg-gray-200 rounded  w-full  my-4"}),(0,a.jsx)("div",{className:" mt-3 h-6 md:h-12 bg-gray-200 rounded  w-full  my-4"})]}),(0,a.jsx)("span",{className:"sr-only",children:"Loading..."})]})}),u=()=>{let e=(0,n.useParams)(),[t,r]=(0,l.useState)({}),i=(0,n.useRouter)();(0,l.useEffect)(()=>{let t=async()=>{var t;let a=await s.Z.get("/api/allproducts/".concat(e.id));r(null==a?void 0:null===(t=a.data)||void 0===t?void 0:t.data)};t()},[e]);let u=e=>{r({...t,[e.target.name]:e.target.value})},m=async()=>{let r=await s.Z.put("/api/allproducts/".concat(e.id),{product:t});return i.push("/dashboard/products"),d.default.success("Product updated successfully"),r},p=async()=>{let t=await s.Z.delete("/api/allproducts/".concat(e.id));return i.push("/dashboard/products"),d.default.success("Product deleted successfully"),t};return(null==t?void 0:t.mainImage)?(0,a.jsxs)("div",{className:"w-full h-full flex items-center justify-center flex-col bg-gray-100 relative",children:[(0,a.jsx)("h1",{className:"w-full text-center my-5",children:(0,a.jsx)("span",{className:"text-2xl md:text-4xl font-bold text-gray-900",children:"Edit Product OR Delete Product"})}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center  mt-3",children:[(0,a.jsx)("label",{htmlFor:"description",className:" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium",children:"Image:"}),(0,a.jsx)(o(),{src:null==t?void 0:t.mainImage,width:"500",height:"500",alt:"product image"})]}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),m()},className:"w-full lg:w-11/12 mx-auto md:grid grid-cols-2 grid-rows-1 gap-3 mt-5  p-4",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center mt-3",children:[(0,a.jsx)("label",{htmlFor:"name",className:" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium",children:"Product Name:"}),(0,a.jsx)("input",{type:"text",id:"name",name:"name",className:"w-full  border border-gray-300 p-2 rounded-md mt-2",required:!0,placeholder:"Enter product name",value:null==t?void 0:t.name,onChange:u})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center  mt-3",children:[(0,a.jsx)("label",{htmlFor:"price",className:" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium",children:"Price:"}),(0,a.jsx)("input",{type:"number",id:"price",name:"price",className:"w-full border  border-gray-300 p-2 rounded-md mt-2",required:!0,placeholder:"Enter product price in $",value:null==t?void 0:t.price,onChange:u})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center  mt-3",children:[(0,a.jsx)("label",{htmlFor:"description",className:" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium",children:"Description:"}),(0,a.jsx)("textarea",{type:"text",id:"description",name:"description",className:"w-full border border-gray-300 p-2 rounded-md mt-2",required:!0,placeholder:"Enter product description",rows:"4",cols:"50",value:null==t?void 0:t.description,onChange:u,style:{resize:"none"}})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center  mt-3",children:[(0,a.jsx)("label",{htmlFor:"description",className:" w-full flex items-start justify-start  text-gray-700 text-sm md:text-base font-medium",children:"Category:"}),(0,a.jsxs)("select",{name:"category",id:"category",className:"w-full border border-gray-300 p-2 rounded-md mt-2",placeholder:"Select category",required:!0,value:null==t?void 0:t.category,onChange:u,children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Select category"}),(0,a.jsx)("option",{value:"Men",children:"Men"}),(0,a.jsx)("option",{value:"Women",children:"Women"}),(0,a.jsx)("option",{value:"Kids",children:"Kids"})]})]}),(0,a.jsx)("div",{className:" flex flex-col items-center justify-center  mt-3",children:(0,a.jsx)("button",{type:"submit",className:"w-full bg-gray-900 text-white p-2 rounded-md",children:"Update Product"})}),(0,a.jsx)("div",{className:" flex flex-col items-center justify-center  mt-3",children:(0,a.jsxs)("button",{type:"button",onClick:p,className:"w-full bg-red-900 text-white p-2 rounded-md mt-2",children:[" ","Delete Product"," "]})})]})]}):(0,a.jsx)(c,{})}},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return d},unstable_getImgProps:function(){return l}});let a=r(21024),s=r(32301),i=r(27873),o=r(63222),n=a._(r(75033)),l=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},d=o.Image},16691:function(e,t,r){e.exports=r(1295)},24033:function(e,t,r){e.exports=r(68165)},5925:function(e,t,r){"use strict";let a,s;r.r(t),r.d(t,{CheckmarkIcon:function(){return B},ErrorIcon:function(){return q},LoaderIcon:function(){return U},ToastBar:function(){return ee},ToastIcon:function(){return K},Toaster:function(){return es},default:function(){return ei},resolveValue:function(){return E},toast:function(){return M},useToaster:function(){return Z},useToasterStore:function(){return S}});var i,o=r(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let r="",a="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":a+="f"==i[1]?m(o,i):i+"{"+m(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=m(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=m.p?m.p(i,o):i+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},p={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},g=(e,t,r,a,s)=>{var i;let o=f(e),n=p[o]||(p[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!p[n]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[n]=m(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&p.g?p.g:null;return r&&(p.g=p[n]),i=p[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},h=(e,t,r)=>e.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function x(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let y,b,v,w=x.bind({k:1});function j(e,t){let r=this||{};return function(){let a=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=x.apply(r,a)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),y(d,n)}return t?t(s):s}}var N=e=>"function"==typeof e,E=(e,t)=>N(e)?e(t):e,k=(a=0,()=>(++a).toString()),P=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},C=new Map,O=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),D({type:4,toastId:e})},1e3);C.set(e,t)},$=e=>{let t=C.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&$(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?I(e,{type:1,toast:r}):I(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?O(a):e.toasts.forEach(e=>{O(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},_=[],z={toasts:[],pausedAt:void 0},D=e=>{z=I(z,e),_.forEach(e=>{e(z)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e={})=>{let[t,r]=(0,o.useState)(z);(0,o.useEffect)(()=>(_.push(r),()=>{let e=_.indexOf(r);e>-1&&_.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},T=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||k()}),F=e=>(t,r)=>{let a=T(t,e,r);return D({type:2,toast:a}),a.id},M=(e,t)=>F("blank")(e,t);M.error=F("error"),M.success=F("success"),M.loading=F("loading"),M.custom=F("custom"),M.dismiss=e=>{D({type:3,toastId:e})},M.remove=e=>D({type:4,toastId:e}),M.promise=(e,t,r)=>{let a=M.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(M.success(E(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{M.error(E(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var H=(e,t)=>{D({type:1,toast:{id:e,height:t}})},L=()=>{D({type:5,time:Date.now()})},Z=e=>{let{toasts:t,pausedAt:r}=S(e);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&M.dismiss(t.id);return}return setTimeout(()=>M.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,o.useCallback)(()=>{r&&D({type:6,time:Date.now()})},[r]),s=(0,o.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:i}=r||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:L,endPause:a,calculateOffset:s}}},q=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,B=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,R=j("div")`
  position: absolute;
`,V=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,W=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(W,null,t):t:"blank"===r?null:o.createElement(V,null,o.createElement(U,{...a}),"loading"!==r&&o.createElement(R,null,"error"===r?o.createElement(q,{...a}):o.createElement(B,{...a})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Y=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,J=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=P()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(r),Y(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(K,{toast:e}),n=o.createElement(Q,{...e.ariaProps},E(e.message,e));return o.createElement(J,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,m.p=void 0,y=i,b=void 0,v=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let i=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:i,className:t,style:r},s)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:P()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:d}=Z(r);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(r=>{let i=r.position||t,n=er(i,d.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(et,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?ea:"",style:n},"custom"===r.type?E(r.message,r):s?s(r):o.createElement(ee,{toast:r,position:i}))}))},ei=M}},function(e){e.O(0,[580,222,971,596,744],function(){return e(e.s=65524)}),_N_E=e.O()}]);