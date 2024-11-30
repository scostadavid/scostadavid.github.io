/*! For license information please see component---src-pages-index-tsx-96a5b9ba39d9cc7a8498.js.LICENSE.txt */
(self.webpackChunkscostadavid_github_io=self.webpackChunkscostadavid_github_io||[]).push([[691],{644:function(e,t,r){"use strict";r.d(t,{Dr:function(){return s},H1:function(){return o},H2:function(){return c}});var a=r(7294),n=r(3967),l=r.n(n);const o=e=>{let{className:t,children:r}=e;return a.createElement("h1",{className:l()("text-content font-bold text-3xl mb-4",t)},r)},c=e=>{let{className:t,text:r}=e;return a.createElement("h2",{className:l()("font-bold text-2xl mb-4",t)},r)},s=e=>{let{className:t,children:r}=e;return a.createElement("span",{className:l()(t)},r)}},20:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return C},Projects:function(){return h},Skills:function(){return E},default:function(){return v}});var a=r(7294),n=r(644);const l=[{id:0,title:"📦 Byte Kit",description:"Everyday developer tools to make your programming easier",url:"https://bytekit.xyz",status:"available"},{id:1,title:"💪 Gym Logger",description:"An app to track your workout consistency with ease",url:"https://gymlogger.xyz",status:"coming-soon"},{id:2,title:"🎱 The Challengers",description:"Grab your cue and take part in a pool based adventure game",url:"#",status:"coming-soon"}];var o=r(4160),c=r(3967),s=r.n(c);const i=e=>{let{className:t,children:r,onClick:n}=e;return a.createElement("button",{className:s()("bg-cta text-white font-bold rounded","py-2 px-4 rounded",t),onClick:n},r)},m=e=>{let{theme:t,toggleTheme:r}=e;return a.createElement("header",{className:" items-center"},a.createElement("div",{className:"flex flex-row justify-between max-w-2xl mx-auto px-8 py-8"},a.createElement(o.rU,{to:"/",className:"text-cta font-bold text-2xl align-middle self-center hover:scale-105"},"scostadavid"),a.createElement(i,{"aria-label":"theme-switcher",className:"flex border-1 border border-card bg-cta text-white font-bold rounded rounded bg-transparent hover:bg-transparent relative justify-center items-center align-middle",onClick:r},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",className:"feather feather-sun absolute transition-all duration-500 ease-in-out "+("dark"===t?"opacity-100 transform scale-100 rotate-0 text-cta":"opacity-0 transform scale-0 rotate-45 text-cta"),stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("circle",{cx:"12",cy:"12",r:"5"}),a.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),a.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),a.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),a.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),a.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),a.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),a.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),a.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})),a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",className:"feather feather-moon absolute transition-all duration-500 ease-in-out "+("dark"===t?"opacity-0 transform scale-0 rotate-45 text-cta":"opacity-100 transform scale-100 rotate-0 text-cta"),stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})))))},d=()=>a.createElement("footer",{className:""},a.createElement("div",{className:"max-w-2xl mx-auto px-8 py-8"},a.createElement("a",{className:"text-content",href:"https://github.com/scostadavid",target:"_blank",rel:"noreferrer noopener"},"© 2024 scostadavid. All rights reserved."))),u=e=>{let{children:t}=e;const{0:r,1:n}=(0,a.useState)("dark");(0,a.useEffect)((()=>{const e=localStorage.getItem("theme")||"dark";n(e),document.body.classList.remove("light","dark"),document.body.classList.add(e)}),[]),(0,a.useEffect)((()=>{"undefined"!=typeof window&&localStorage.setItem("theme",r),document.body.classList.remove("light","dark"),document.body.classList.add(r)}),[r]);return a.createElement("div",{className:"bg-background min-h-screen "+r},a.createElement(m,{theme:r,toggleTheme:()=>{n((e=>"light"===e?"dark":"light"))}}),a.createElement("main",null,t),a.createElement(d,null))},x=e=>{let{title:t,description:r,pathname:n,children:l}=e;const{title:c,description:s,siteUrl:i}=(0,o.K2)("3764592887").site.siteMetadata,m={title:t||c,description:r||s,url:""+i+(n||"")};return a.createElement(a.Fragment,null,a.createElement("title",null,m.title),a.createElement("meta",{name:"description",content:m.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:m.title}),a.createElement("meta",{name:"twitter:url",content:m.url}),a.createElement("meta",{name:"twitter:description",content:m.description}),a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👨‍💻</text></svg>"}),l)};var g=r(160);const p=()=>a.createElement("section",{className:"text-slate-200"},a.createElement("div",{className:"max-w-2xl mx-auto px-8 py-16"},a.createElement(n.Dr,{className:"text-content text-lg"},"Hello, I'm David Costa a"),a.createElement(n.H1,{className:"my-4"},"Software"," ",a.createElement(n.Dr,{className:"text-cta"},"Developer")),a.createElement("p",{className:"text-cta text-lg mb-8 leading-relaxed max-w-xl"},"Over 4 years of experience building software solutions. Focused on TDD and SOLID principles, skilled in Linux environments, monolithic and microservices architectures."),a.createElement("nav",{className:"flex flex-row gap-6 align-middle flex-wrap"},a.createElement(o.rU,{to:"https://linkedin.com/in/scostadavid",className:"flex flex-row gap-2 items-center text-content hover:text-cta self-center  transition-all duration-300 ease-in-out hover:scale-105",target:"_blank"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},a.createElement("path",{d:"M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"})),a.createElement("span",null,"Linkedin")),a.createElement(o.rU,{to:"https://github.com/scostadavid",className:"flex flex-row gap-2 items-center text-content hover:text-cta self-center  transition-all duration-300 ease-in-out hover:scale-105",target:"_blank"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},a.createElement("path",{d:"M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"})),a.createElement("span",null,"Github")),a.createElement(o.rU,{to:"https://x.com/scostadavid",className:"flex flex-row gap-2 items-center text-content hover:text-cta self-center  transition-all duration-300 ease-in-out hover:scale-105",target:"_blank"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor"},a.createElement("path",{d:"M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"})),a.createElement("span",null,"Twitter")),a.createElement(o.rU,{to:"mailto:scostadavid.dev@gmail.com",className:"flex flex-row gap-2 items-center text-content hover:text-cta self-center  transition-all duration-300 ease-in-out hover:scale-105",target:"_blank"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},a.createElement("path",{d:"M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.6418 20 15.1681 19.5054 16.4381 18.6571L17.5476 20.3214C15.9602 21.3818 14.0523 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13.5C22 15.433 20.433 17 18.5 17C17.2958 17 16.2336 16.3918 15.6038 15.4659C14.6942 16.4115 13.4158 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.1258 7 14.1647 7.37209 15.0005 8H17V13.5C17 14.3284 17.6716 15 18.5 15C19.3284 15 20 14.3284 20 13.5V12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"})),a.createElement("span",null,"Email"))))),h=()=>a.createElement("div",{className:"text-slate-200"},a.createElement("div",{className:"max-w-2xl mx-auto px-8 py-16"},a.createElement(n.H2,{text:"Selected Projects",className:"text-content mb-8"}),a.createElement("ul",{className:"space-y-4"},l.map((e=>{let{id:t,title:r,description:n,url:l,status:o}=e;return a.createElement("li",{key:"pj-"+t,className:"group"},a.createElement("a",{href:l,target:"_blank",rel:"noreferrer noopener",className:"block pb-4 rounded-lg transition-all duration-300 hover:border-card bg-card/5 hover:bg-card/10 text-content hover:text-cta"},a.createElement("div",{className:"flex justify-between items-start"},a.createElement("div",null,a.createElement("h3",{className:"font-bold text-lg mb-1"},r),a.createElement("p",{className:"text-content/80 group-hover:text-content/100 transition-colors"},n),"available"===o&&a.createElement("span",{className:"inline-block mt-2 text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full"},"Available"),"coming-soon"===o&&a.createElement("span",{className:"inline-block mt-2 text-sm text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full"},"Coming Soon")),a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})))))}))),a.createElement("div",{className:"mt-8"},a.createElement(o.rU,{to:"https://github.com/scostadavid?tab=repositories",className:"inline-flex items-center text-content hover:text-cta transition-colors",target:"_blank",rel:"noreferrer noopener"},"see more",a.createElement("span",{className:"ml-1 group-hover:translate-x-1 transition-transform"},"→"))))),E=()=>{const e=[{icon:a.createElement(g.Ez,null),title:"Golang",backgroundColor:"#00acd770",borderColor:"#00acd7a0"},{icon:a.createElement(g.xg,null),title:"Typescript",backgroundColor:"#007acc70",borderColor:"#007acc70"},{icon:a.createElement(g.lw,null),title:"C-Sharp",backgroundColor:"#9B4F9670",borderColor:"#9B4F96a0"},{icon:a.createElement(g.N3,null),title:"Ruby",backgroundColor:"#d9140470",borderColor:"#d91404a0"},{icon:a.createElement(g.Nn,null),title:".NET",backgroundColor:"#1384C870",borderColor:"#1384C8a0"},{icon:a.createElement(g.DF,null),title:"AWS",backgroundColor:"#FF990070",borderColor:"#FF9900a0"},{icon:a.createElement(g.Y9,null),title:"NodeJS",backgroundColor:"#5fa04e70",borderColor:"#5fa04ea0"},{icon:a.createElement(g.yL,null),title:"Rails",backgroundColor:"#d9140470",borderColor:"#d91404a0"},{icon:a.createElement(g.u3,null),title:"React",backgroundColor:"#61DAFB70",borderColor:"#61DAFB70"},{icon:a.createElement(g.EI,null),title:"Postgres",backgroundColor:"#33679170",borderColor:"#33679170"},{icon:a.createElement(g.lq,null),title:"MongoDB",backgroundColor:"#43993470",borderColor:"#439934a0"},{icon:a.createElement(g.L6,null),title:"Linux",backgroundColor:"#33333370",borderColor:"#333333a0"},{icon:a.createElement(g.h2,null),title:"Docker",backgroundColor:"#1384C870",borderColor:"#1384C8a0"}];return a.createElement("div",{className:"text-slate-200"},a.createElement("div",{className:"max-w-2xl mx-auto px-8 py-16"},a.createElement(n.H2,{text:"Solving problems with",className:"text-content mb-8"}),a.createElement("ul",{className:"flex flex-row flex-wrap gap-3"},e.map(((e,t)=>a.createElement("li",{key:t,className:"flex flex-row items-center gap-2 rounded-lg p-2 text-content",style:{backgroundColor:e.backgroundColor,border:"1px solid "+e.borderColor}},e.icon&&a.createElement("span",{className:"opacity-90"},e.icon),a.createElement("span",{className:"font-medium"},e.title)))))))};var v=()=>a.createElement(a.Fragment,null,a.createElement("meta",{name:"description",content:"scostadavid blog, software developer"}),a.createElement("meta",{name:"keywords",content:"scostadavid, David Costa, software developer, full stack, portfolio, projects, skills, experience"}),a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a.createElement("meta",{name:"author",content:"David Costa"}),a.createElement("title",null,"scostadavid | software developer"),a.createElement(u,null,a.createElement(p,null),a.createElement(h,null),a.createElement(E,null)));const C=()=>a.createElement(a.Fragment,null,a.createElement("html",{lang:"en"}),a.createElement(x,null))},3967:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,l(r)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)a.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=component---src-pages-index-tsx-96a5b9ba39d9cc7a8498.js.map