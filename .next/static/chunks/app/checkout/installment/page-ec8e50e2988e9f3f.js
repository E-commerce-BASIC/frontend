(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56],{30235:function(e,t,a){Promise.resolve().then(a.bind(a,55397))},28576:function(e,t,a){"use strict";a.r(t),a.d(t,{InstallmentContext:function(){return n},InstallmentContextProvider:function(){return l}});var r=a(57437),s=a(92173),o=a(2265),i=a(5925);a(24033);let n=(0,o.createContext)(),l=e=>{let{children:t}=e,[a,l]=(0,o.useState)(!1),[d,c]=(0,o.useState)({name:"",address:"",idCard:"",passport:"",visa:"",passport_image:null,visa_image:null,salary_slip_image:null,id_card:null}),u=async e=>{e.preventDefault();let t=new FormData;t.append("name",d.name),t.append("address",d.address),t.append("idCard",d.idCard),t.append("passport",d.passport),t.append("visa",d.visa),t.append("passport_image",d.passport_image),t.append("visa_image",d.visa_image),t.append("salary_slip_image",d.salary_slip_image);try{if(a){i.default.error("Please wait while image is uploading");return}await s.Z.post("/api/checkout/installment",t)}catch(e){i.default.error(e.message),console.log(e);return}};return(0,r.jsx)(n.Provider,{value:{installment:d,setInstallment:c,fetchProduct:u},children:t})}},55397:function(e,t,a){"use strict";a.r(t);var r=a(57437),s=a(2265),o=a(28576);t.default=()=>{let{installment:e,setInstallment:t,fetchProduct:a}=(0,s.useContext)(o.InstallmentContext),[i,n]=(0,s.useState)(""),[l,d]=(0,s.useState)({advance:0,installment:0}),c=a=>{let{name:r,value:s}=a.target;t({...e,[r]:s})},u=a=>{let{name:r}=a.target,s=a.target.files[0];t({...e,[r]:s})};return(0,r.jsx)("div",{className:"container mx-auto my-10",children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsxs)("div",{className:"w-2/3 bg-white shadow-lg rounded-lg p-8",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-gray-900 mb-6 text-center",children:"Installment Form"}),(0,r.jsx)("h2",{className:"text-xl font-bold text-gray-900 mb-4",children:"Your Information"}),(0,r.jsxs)("form",{onSubmit:a,children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-gray-700 font-semibold",children:"Name:"}),(0,r.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:c,className:"w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"address",className:"block text-gray-700 font-semibold",children:"Address:"}),(0,r.jsx)("input",{type:"text",id:"address",name:"address",value:e.address,onChange:c,className:"w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"idCard",className:"block text-gray-700 font-semibold",children:"ID Card Number:"}),(0,r.jsx)("input",{type:"text",id:"idCard",name:"idCard",value:e.idCard,onChange:c,className:"w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"passport",className:"block text-gray-700 font-semibold",children:"Passport Number:"}),(0,r.jsx)("input",{type:"text",id:"passport",name:"passport",value:e.passport,onChange:c,className:"w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"visa",className:"block text-gray-700 font-semibold",children:"Visa Number:"}),(0,r.jsx)("input",{type:"text",id:"visa",name:"visa",value:e.visa,onChange:c,className:"w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"passport_image",className:"block text-gray-700 font-semibold",children:"Upload Passport"}),(0,r.jsx)("input",{type:"file",id:"passport_image",name:"passport_image",accept:"image/*",onChange:u,className:"w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"visa_image",className:"block text-gray-700 font-semibold",children:"Upload visa image:"}),(0,r.jsx)("input",{type:"file",id:"visa_image",name:"visa_image",accept:"image/*",onChange:u,className:"w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"salary_slip_image",className:"block text-gray-700 font-semibold",children:"Upload salary slip image:"}),(0,r.jsx)("input",{type:"file",id:"salary_slip_image",name:"salary_slip_image",accept:"image/*",onChange:u,className:"w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"})]}),(0,r.jsx)("div",{className:"flex justify-center mt-4",children:(0,r.jsx)("button",{type:"submit",className:"bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-200",children:"Submit Performa"})})]})]}),(0,r.jsxs)("div",{className:"w-1/3 bg-indigo-100 p-8 ml-8 rounded-lg shadow-lg",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Payment Plan"}),(0,r.jsx)("label",{htmlFor:"plan",className:"block text-gray-700 font-semibold mb-2",children:"Choose a Plan:"}),(0,r.jsxs)("select",{id:"plan",name:"plan",value:i,onChange:e=>{let t,a,r;let s=e.target.value;n(s),"3 months"===s?(t=140,a=20,r=3):"6 months"===s?(t=140,a=10,r=6):"1 year"===s&&(t=140,a=5,r=12),console.log("Advance: $".concat(t,", Installment: $").concat(a.toFixed(2),", Total Installments: ").concat(r)),d({advance:t,installment:a,totalInstallments:r})},className:"w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200",children:[(0,r.jsx)("option",{value:"",children:"Select Plan"}),(0,r.jsx)("option",{value:"3 months",children:"3 Months"}),(0,r.jsx)("option",{value:"6 months",children:"6 Months"}),(0,r.jsx)("option",{value:"1 year",children:"1 Year"})]}),i&&(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsx)("h3",{className:"text-lg font-bold text-gray-800",children:"Payment Details:"}),(0,r.jsxs)("p",{children:["Advance Payment: $",l.advance.toFixed(2)]}),(0,r.jsxs)("p",{children:["Installments per Period: $",l.installment.toFixed(2)]})]})]})]})})}},24033:function(e,t,a){e.exports=a(68165)},5925:function(e,t,a){"use strict";let r,s;a.r(t),a.d(t,{CheckmarkIcon:function(){return V},ErrorIcon:function(){return Y},LoaderIcon:function(){return B},ToastBar:function(){return ee},ToastIcon:function(){return G},Toaster:function(){return es},default:function(){return eo},resolveValue:function(){return C},toast:function(){return M},useToaster:function(){return U},useToasterStore:function(){return S}});var o,i=a(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let a="",r="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+i+";":r+="f"==o[1]?m(i,o):o+"{"+m(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=m(i,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=m.p?m.p(o,i):o+":"+i+";")}return a+(t&&s?t+"{"+s+"}":s)+r},p={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},g=(e,t,a,r,s)=>{var o;let i=f(e),n=p[i]||(p[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!p[n]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);p[n]=m(s?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&p.g?p.g:null;return a&&(p.g=p[n]),o=p[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=r?o+t.data:t.data+o),n},h=(e,t,a)=>e.reduce((e,r,s)=>{let o=t[s];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function b(e){let t=this||{},a=e.call?e(t.p):e;return g(a.unshift?a.raw?h(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let x,y,v,j=b.bind({k:1});function w(e,t){let a=this||{};return function(){let r=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;a.p=Object.assign({theme:y&&y()},n),a.o=/ *go\d+/.test(l),n.className=b.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),x(d,n)}return t?t(s):s}}var N=e=>"function"==typeof e,C=(e,t)=>N(e)?e(t):e,_=(r=0,()=>(++r).toString()),k=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},E=new Map,$=e=>{if(E.has(e))return;let t=setTimeout(()=>{E.delete(e),D({type:4,toastId:e})},1e3);E.set(e,t)},P=e=>{let t=E.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&P(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?I(e,{type:1,toast:a}):I(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?$(r):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},F=[],O={toasts:[],pausedAt:void 0},D=e=>{O=I(O,e),F.forEach(e=>{e(O)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e={})=>{let[t,a]=(0,i.useState)(O);(0,i.useEffect)(()=>(F.push(a),()=>{let e=F.indexOf(a);e>-1&&F.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},T=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||_()}),z=e=>(t,a)=>{let r=T(t,e,a);return D({type:2,toast:r}),r.id},M=(e,t)=>z("blank")(e,t);M.error=z("error"),M.success=z("success"),M.loading=z("loading"),M.custom=z("custom"),M.dismiss=e=>{D({type:3,toastId:e})},M.remove=e=>D({type:4,toastId:e}),M.promise=(e,t,a)=>{let r=M.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(M.success(C(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{M.error(C(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var H=(e,t)=>{D({type:1,toast:{id:e,height:t}})},L=()=>{D({type:5,time:Date.now()})},U=e=>{let{toasts:t,pausedAt:a}=S(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&M.dismiss(t.id);return}return setTimeout(()=>M.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,i.useCallback)(()=>{a&&D({type:6,time:Date.now()})},[a]),s=(0,i.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:o}=a||{},i=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:L,endPause:r,calculateOffset:s}}},Y=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
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
    animation: ${j`
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
    animation: ${j`
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
`,B=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,V=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
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
    animation: ${j`
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
`,Z=w("div")`
  position: absolute;
`,q=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,R=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(R,null,t):t:"blank"===a?null:i.createElement(q,null,i.createElement(B,{...r}),"loading"!==a&&i.createElement(Z,null,"error"===a?i.createElement(Y,{...r}):i.createElement(V,{...r})))},J=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Q=w("div")`
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
`,W=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[J(a),K(a)];return{animation:t?`${j(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(G,{toast:e}),n=i.createElement(W,{...e.ariaProps},C(e.message,e));return i.createElement(Q,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});o=i.createElement,m.p=void 0,x=o,y=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let o=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:o,className:t,style:a},s)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,containerStyle:o,containerClassName:n})=>{let{toasts:l,handlers:d}=U(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let o=a.position||t,n=ea(o,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(et,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?C(a.message,a):s?s(a):i.createElement(ee,{toast:a,position:o}))}))},eo=M}},function(e){e.O(0,[580,971,596,744],function(){return e(e.s=30235)}),_N_E=e.O()}]);