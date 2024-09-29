/*! For license information please see component---src-pages-index-tsx-8425dceb69da21e14d9b.js.LICENSE.txt */
(self.webpackChunkscostadavid_github_io=self.webpackChunkscostadavid_github_io||[]).push([[691],{644:function(e,t,a){"use strict";a.d(t,{Dr:function(){return i},H1:function(){return c},H2:function(){return o},nv:function(){return s}});var r=a(7294),n=a(3967),l=a.n(n);const c=e=>{let{className:t,children:a,text:n}=e;return r.createElement("h1",{className:l()("text-content font-bold text-3xl mb-4",t)},a,n)},o=e=>{let{className:t,text:a}=e;return r.createElement("h2",{className:l()("font-bold text-2xl mb-4",t)},a)},s=e=>{let{children:t}=e;return r.createElement("p",{className:"text-content text-lg mb-4"},t)},i=e=>{let{className:t,children:a}=e;return r.createElement("span",{className:l()(t)},a)}},2401:function(e,t,a){"use strict";a.r(t),a.d(t,{Contact:function(){return f},Head:function(){return E},Projects:function(){return g},default:function(){return v}});var r=a(7294),n=a(644);const l=[{id:1,title:"💪 Gym Logger",description:"An app to track your workout consistency with ease",url:"https://gym-logger.vercel.app"},{id:2,title:"🌱 Focus Garden",description:"Grow your productivity with my focus driven app",url:"https://scostadavid.github.io/focusgarden/"},{id:3,title:"🕹️ Dawn's Lighthouse",description:"A short gaming experience about a sailor trapped in a lighthouse",url:"https://gamejolt.com/games/dawnslighthouse/574359"}],c=[{id:1,title:"Email",url:"mailto:scostadavid@proton.me",urlText:"scostadavid@proton.me"},{id:2,title:"Linkedin",url:"https://linkedin.com/in/scostadavid",urlText:"in/scostadavid"},{id:3,title:"Github",url:"https://github.com/scostadavid",urlText:"gh/scostadavid"},{id:4,title:"X/Twitter (Game Dev)",url:"https://x.com/011cubano",urlText:"@011cubano"},{id:4,title:"X/Twitter",url:"https://x.com/scostadavid",urlText:"@scostadavid"}];var o=a(4160),s=a(3967),i=a.n(s);const m=e=>{let{className:t,children:a,onClick:n}=e;return r.createElement("button",{className:i()("bg-cta text-white font-bold rounded","py-2 px-4 rounded",t),onClick:n},a)},d=e=>{let{theme:t,toggleTheme:a}=e;return r.createElement("header",{className:" items-center"},r.createElement("div",{className:"flex flex-row justify-between max-w-xl px-8 pt-8 pb-8 mx-auto"},r.createElement("div",{className:"flex flex-row"},r.createElement(o.rU,{to:"/",className:"text-cta font-bold text-2xl align-middle self-center hover:scale-105"},"scostadavid"),r.createElement(m,{"aria-label":"theme-switcher",className:"flex bg-cta text-white font-bold rounded rounded bg-transparent hover:bg-transparent relative justify-center items-center align-middle hover:animate-spin",onClick:a},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",className:"feather feather-sun absolute transition-all duration-500 ease-in-out "+("dark"===t?"opacity-100 transform scale-100 rotate-0 text-cta":"opacity-0 transform scale-0 rotate-45 text-cta"),stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("circle",{cx:"12",cy:"12",r:"5"}),r.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),r.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),r.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),r.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),r.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),r.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),r.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),r.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})),r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",className:"feather feather-moon absolute transition-all duration-500 ease-in-out "+("dark"===t?"opacity-0 transform scale-0 rotate-45 text-cta":"opacity-100 transform scale-100 rotate-0 text-cta"),stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))))))},u=()=>r.createElement("footer",{className:""},r.createElement("div",{className:"max-w-xl mx-auto px-8 pt-8 pb-8"},r.createElement("a",{className:"text-content",href:"https://github.com/scostadavid",target:"_blank",rel:"noreferrer noopener"},"© 2024"," - ","scostadavid"))),p=e=>{let{children:t}=e;const{0:a,1:n}=(0,r.useState)("light");(0,r.useEffect)((()=>{const e=localStorage.getItem("theme");e?n(e):localStorage.setItem("theme",a)}),[]),(0,r.useEffect)((()=>{document.body.classList.remove("light","dark"),document.body.classList.add(a),localStorage.setItem("theme",a)}),[a]);return r.createElement("div",{className:"bg-background h-screen"},r.createElement(d,{theme:a,toggleTheme:()=>{n("light"===a?"dark":"light")}}),r.createElement("main",{className:""},t),r.createElement(u,null))},x=e=>{let{title:t,description:a,pathname:n,children:l}=e;const{title:c,description:s,siteUrl:i}=(0,o.K2)("3764592887").site.siteMetadata,m={title:t||c,description:a||s,url:""+i+(n||"")};return r.createElement(r.Fragment,null,r.createElement("title",null,m.title),r.createElement("meta",{name:"description",content:m.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:m.title}),r.createElement("meta",{name:"twitter:url",content:m.url}),r.createElement("meta",{name:"twitter:description",content:m.description}),r.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👨‍💻</text></svg>"}),l)},h=()=>r.createElement("section",{className:"text-slate-200 "},r.createElement("div",{className:"max-w-xl mx-auto px-8 pt-8 pb-8"},r.createElement(n.Dr,{className:"text-content"},"Hello, I’m David Costa a"),r.createElement(n.H1,{text:"Software Developer"}),r.createElement(n.nv,null,"I enjoy crafting solid and scalable software experiences"),r.createElement("nav",{className:"flex flex-row gap-4 align-middle"},r.createElement(o.rU,{to:"https://linkedin.com/in/scostadavid",className:"text-cta self-center hover:scale-105",target:"_blank"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor"},r.createElement("path",{d:"M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"}))),r.createElement(o.rU,{to:"https://github.com/scostadavid",className:"text-cta text-lg self-center hover:scale-105",target:"_blank"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor"},r.createElement("path",{d:"M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"})))))),g=()=>r.createElement("div",{className:"text-slate-200  "},r.createElement("div",{className:"max-w-xl mx-auto px-8 pb-8 pt-8"},r.createElement(n.H2,{text:"Selected Projects",className:"text-cta"}),r.createElement("ul",null,l.map((e=>{let{id:t,title:a,description:n,url:l}=e;return r.createElement("li",{key:"pj-"+t},r.createElement("a",{href:l,target:"_blank",rel:"noreferrer noopener",className:"text-content hover:text-cta font-black block bg-card mb-2 p-2 rounded-md transform transition-transform duration-200 hover:scale-105"},a,r.createElement("span",{className:"text-content font-normal"}," - ",n)))}))),r.createElement("span",{className:"pt-2"},r.createElement(o.rU,{to:"https://github.com/scostadavid?tab=repositories",className:"hover:text-cta text-content",target:"_blank",rel:"noreferrer noopener"},"see more →")))),f=()=>r.createElement("div",{className:"text-slate-200  "},r.createElement("div",{className:"max-w-xl mx-auto px-8 pb-8 pt-8"},r.createElement(n.H2,{text:"Contact",className:"text-cta"}),r.createElement("ul",null,c.map((e=>{let{id:t,title:a,urlText:n,url:l}=e;return r.createElement("li",{className:" text-content my-4",key:"pj-"+t},r.createElement("a",{href:l,target:"_blank",rel:"noreferrer noopener",className:"mr-4 text-content hover:text-cta font-black"},a,r.createElement("span",{className:"text-content font-normal"}," - ",n)))})))));var v=()=>r.createElement(r.Fragment,null,r.createElement("meta",{name:"description",content:"scostadavid blog, software developer"}),r.createElement("meta",{name:"keywords",content:"scostadavid, David Costa, software developer, full stack, portfolio, projects, skills, experience"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.createElement("meta",{name:"author",content:"David Costa"}),r.createElement("title",null,"scostadavid | software developer"),r.createElement(p,null,r.createElement(h,null),r.createElement(g,null)));const E=()=>r.createElement(r.Fragment,null,r.createElement("html",{lang:"en"}),r.createElement(x,null))},3967:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=c(e,l(a)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)r.call(e,a)&&e[a]&&(t=c(t,a));return t}function c(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8425dceb69da21e14d9b.js.map