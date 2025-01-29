/*! For license information please see component---src-templates-blog-post-tsx-2b897e15247da6b93fbd.js.LICENSE.txt */
(self.webpackChunkscostadavid_github_io=self.webpackChunkscostadavid_github_io||[]).push([[7],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),o=new RegExp(s.source+n.source,"gu"),i=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,l=!1,o=!1;for(let i=0;i<e.length;i++){const c=e[i];s&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),s=!1,o=l,l=!0,i++):l&&o&&a.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),o=l,l=!1,s=!0):(s=r(c)===c&&n(c)!==c,o=l,l=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,i.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){"use strict";a.d(t,{G:function(){return q},L:function(){return h},M:function(){return k},P:function(){return E},_:function(){return o},a:function(){return l},b:function(){return u},c:function(){return c},g:function(){return m},h:function(){return i}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,s,o,i){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),i&&(c.objectPosition=i);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=o(e,g);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:i}=e,c=o(e,f);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:s}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,y);const i=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,l({},s,t,{sizes:i,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:i})})),c):c};var x;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(v,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(x=v.propTypes)?void 0:x.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(v,l({},e)),r.createElement("noscript",null,r.createElement(v,l({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],S=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:s().object.isRequired,alt:C},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],_=new Set;let A,O;const R=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:u,class:m,onStartLoad:g,onLoad:p,onError:h}=e,f=o(e,T);const{width:y,height:b,layout:v}=n,x=d(y,b,v),{style:w,className:E}=x,k=o(x,j),L=(0,r.useRef)(),N=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((()=>{A||(A=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(N);if(O&&_.has(N))return;let t,r;return A.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=a(l({isLoading:!0,isLoaded:_.has(N),image:n},f)),_.has(N)||(t=requestAnimationFrame((()=>{L.current&&(r=o(L.current,N,_,s,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(N)&&O&&(L.current.innerHTML=O(l({isLoading:_.has(N),isLoaded:_.has(N),image:n},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},k,{style:l({},w,s,{backgroundColor:c}),className:E+(u?" "+u:""),ref:L,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));q.propTypes=I,q.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function W(e){return function(t){let{src:a,__imageData:n,__error:s}=t,i=o(t,P);return s&&console.warn(s),n?r.createElement(e,l({image:n},i)):(console.warn("Image not loaded",a),null)}}const z=W((function(e){let{as:t="div",className:a,class:n,style:s,image:i,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:f,objectFit:y,objectPosition:b}=e,v=o(e,L);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=l({objectFit:y,objectPosition:b,backgroundColor:f},p);const{width:x,height:w,layout:C,images:I,placeholder:T,backgroundColor:j}=i,_=d(x,w,C),{style:A,className:O}=_,R=o(_,N),q={fallback:void 0,sources:[]};return I.fallback&&(q.fallback=l({},I.fallback,{srcSet:I.fallback.srcSet?S(I.fallback.srcSet):void 0})),I.sources&&(q.sources=I.sources.map((e=>l({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,l({},R,{style:l({},A,s,{backgroundColor:f}),className:O+(a?" "+a:"")}),r.createElement(h,{layout:C,width:x,height:w},r.createElement(E,l({},m(T,!1,C,x,w,j,y,b))),r.createElement(k,l({"data-gatsby-image-ssr":"",className:g},v,u("eager"===c,!1,q,c,p)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},D=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:C,width:M,height:M,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=F;const H=W(q);H.displayName="StaticImage",H.propTypes=F},2296:function(e,t,a){"use strict";a.d(t,{A:function(){return d}});var r=a(7294),n=a(4160),s=a(3967),l=a.n(s);const o=e=>{let{className:t,children:a,onClick:n}=e;return r.createElement("button",{className:l()("bg-cta text-white font-bold rounded","py-2 px-4 rounded",t),onClick:n},a)},i=e=>{let{theme:t,toggleTheme:a}=e;return r.createElement("header",{className:" items-center"},r.createElement("div",{className:"flex flex-row justify-between max-w-3xl mx-auto px-8 py-8"},r.createElement(n.rU,{to:"/",className:"text-cta font-bold text-2xl align-middle self-center "},"scostadavid"),r.createElement(o,{"aria-label":"theme-switcher",className:"flex border-1 border border-card bg-cta text-white font-bold rounded rounded bg-transparent hover:bg-transparent relative justify-center items-center align-middle",onClick:a},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",className:"feather feather-sun absolute transition-all duration-500 ease-in-out "+("dark"===t?"opacity-100 transform scale-100 rotate-0 text-cta":"opacity-0 transform scale-0 rotate-45 text-cta"),stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("circle",{cx:"12",cy:"12",r:"5"}),r.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),r.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),r.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),r.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),r.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),r.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),r.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),r.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})),r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",className:"feather feather-moon absolute transition-all duration-500 ease-in-out "+("dark"===t?"opacity-0 transform scale-0 rotate-45 text-cta":"opacity-100 transform scale-100 rotate-0 text-cta"),stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})))))},c=()=>r.createElement("footer",{className:""},r.createElement("div",{className:"max-w-3xl mx-auto px-8 py-8"},r.createElement("a",{className:"text-content",href:"https://github.com/scostadavid",target:"_blank",rel:"noreferrer noopener"},"© 2024 scostadavid. All rights reserved."))),d=e=>{let{children:t}=e;const{0:a,1:n}=(0,r.useState)("dark");(0,r.useEffect)((()=>{const e=localStorage.getItem("theme")||"dark";n(e),document.body.classList.remove("light","dark"),document.body.classList.add(e)}),[]),(0,r.useEffect)((()=>{"undefined"!=typeof window&&localStorage.setItem("theme",a),document.body.classList.remove("light","dark"),document.body.classList.add(a)}),[a]);return r.createElement("div",{className:"bg-background min-h-screen "+a},r.createElement(i,{theme:a,toggleTheme:()=>{n((e=>"light"===e?"dark":"light"))}}),r.createElement("main",null,t),r.createElement(c,null))}},4068:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(8032),s=a(2296);t.default=e=>{let{data:t}=e;const a=t.markdownRemark,l=(0,n.c)(a.frontmatter.cover);return a?r.createElement(s.A,null,r.createElement("main",{className:"max-w-3xl mx-auto px-8 py-16"},r.createElement("h1",{className:"text-4xl font-bold text-content mb-4"},a.frontmatter.title),r.createElement("div",{className:"flex flex-col"},r.createElement("p",{className:"flex text-content dark:text-neutral-400 text-sm"},new Date(a.frontmatter.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})),r.createElement("p",{className:"flex text-content dark:text-neutral-400 text-sm mb-8"},"by ",a.frontmatter.author)),r.createElement("div",{className:"border-b border-neutral-300 dark:border-neutral-800 mb-8"}),l&&r.createElement("div",{className:"mb-8"},r.createElement(n.G,{image:l,alt:a.frontmatter.title,className:"rounded-lg shadow-md"})),r.createElement("article",{className:"text-content space-y-4 leading-relaxed",dangerouslySetInnerHTML:{__html:a.html}}))):r.createElement(s.A,null,r.createElement("main",{className:"flex items-center justify-center min-h-screen"},r.createElement("p",{className:"text-neutral-600"},"Loading...")))}},3967:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=l(e,s(a)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)r.call(e,a)&&e[a]&&(t=l(t,a));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-2b897e15247da6b93fbd.js.map