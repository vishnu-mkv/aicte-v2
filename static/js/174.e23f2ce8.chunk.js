"use strict";(self.webpackChunkaicte=self.webpackChunkaicte||[]).push([[174],{5424:function(e,n,s){s.d(n,{l0:function(){return u},IH:function(){return c},qS:function(){return l},yj:function(){return o}});var t=s(2426),a=s.n(t),r=(s(2791),s(3032)),i=s(184);function c(e){var n,s,t,c=e.data;return(0,i.jsxs)("div",{className:"news-container",children:[(0,i.jsxs)("div",{className:"news-bottom",children:[(0,i.jsx)(r.Z,{name:"calendar_today"}),(0,i.jsx)("span",{children:a()(c.date).format("MMMM Do, YYYY")}),(0,i.jsx)("div",{className:"circle"}),(0,i.jsx)("span",{className:"source",children:c.source})]}),(0,i.jsx)("a",{className:"headline",href:c.url,children:c.headline}),(0,i.jsx)("p",{className:"content",children:-1!==(null===(n=c.content)||void 0===n?void 0:n.indexOf("."))?null===(s=c.content)||void 0===s?void 0:s.substring(0,null===(t=c.content)||void 0===t?void 0:t.indexOf(".")):c.content})]})}function l(e){var n=e.data;return(0,i.jsxs)("div",{className:"news-container press-container",children:[(0,i.jsx)(r.Z,{name:"newspaper",className:"news-icon"}),(0,i.jsx)("a",{className:"headline",href:n.url,children:n.content}),(0,i.jsx)("span",{className:"date",children:a()(n.date).format("MMMM Do, YYYY")})]})}function o(e){var n=e.data;return(0,i.jsxs)("div",{className:"media-container",children:[(0,i.jsx)("div",{class:"media",children:(0,i.jsx)("iframe",{class:"media-file",type:"text/html",src:"https://".concat(n.video_url,"?autoplay=0&showinfo=0&controls=0"),frameborder:"0"})}),(0,i.jsx)("p",{children:n.title})]})}function u(e){var n=e.data,s=e.onClick;return(0,i.jsxs)("div",{class:"pointer media-container image-container",onClick:s,children:[(0,i.jsxs)("div",{class:"media",children:[(0,i.jsx)("img",{class:"media-file front",src:n.cover}),(0,i.jsx)("img",{class:"media-file back-1",src:n.images[0]}),(0,i.jsx)("img",{class:"media-file back-2",src:n.images[1]})]}),(0,i.jsx)("p",{children:n.name}),(0,i.jsxs)("div",{class:"flex space-between media-bottom",children:[(0,i.jsxs)("div",{class:"flex",children:[(0,i.jsx)(r.Z,{name:"web_stories"}),(0,i.jsxs)("span",{children:[n.images.length," images"]})]}),(0,i.jsx)("span",{children:a()(n.date).format("DD-MM-YYYY")})]})]})}},1609:function(e,n,s){s.d(n,{XM:function(){return i},bU:function(){return r}});s(2791);var t=s(3032),a=s(184);function r(e){var n=e.title,s=e.className,r=e.icon,i=e.src;return e.left&&(s="left "+(s||"")),e.right&&(s="right "+(s||"")),(0,a.jsxs)("div",{className:"flex subheading "+(s||""),style:{marginBottom:"1em"},children:[(0,a.jsx)(t.Z,{src:i,name:r}),(0,a.jsx)("h6",{style:{fontWeight:600},children:n})]})}function i(e){var n=e.title,s=e.className,r=e.icon,i=e.src;return(0,a.jsxs)("div",{className:"flex"+(s||""),children:[(0,a.jsx)(t.Z,{src:i,name:r}),(0,a.jsx)("h6",{style:{fontWeight:600},children:n})]})}n.ZP=function(e){var n=e.title,s=e.className,r=e.src,i=e.icon;return(0,a.jsxs)("div",{className:"flex "+(s||""),style:{marginBlock:"1em"},children:[(0,a.jsx)(t.Z,{src:r,name:i}),(0,a.jsx)("h5",{style:{fontWeight:700},children:n})]})}},4265:function(e,n,s){s.d(n,{Z:function(){return r}});s(2791);var t=s(3032),a=s(184);var r=function(e){var n=e.title,s=e.img,r=e.desc;return(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"page-title",children:n}),(0,a.jsx)("div",{className:"banner-wrap",children:(0,a.jsx)("div",{className:"media-image",children:(0,a.jsx)(t.Z,{src:s})})}),(0,a.jsx)("p",{className:"hero-desc",children:r})]})}},3665:function(e,n,s){s.d(n,{Z:function(){return f}});var t=s(2791),a=s(8152),r=s(3786);var i=function(e){var n=e.url,s=(0,t.useState)(0),i=(0,a.Z)(s,2),c=i[0],l=i[1],o=(0,t.useState)(0),u=(0,a.Z)(o,2),d=u[0],f=u[1],h=(0,t.useState)(""),m=(0,a.Z)(h,2),x=m[0],v=m[1],j=(0,r.Z)(x),p=(0,a.Z)(j,3),g=p[0],N=p[1],w=p[2];return(0,t.useEffect)((function(){var e=new URLSearchParams(window.location.search),n=parseInt(e.get("page"))||1;l(n)}),[]),(0,t.useEffect)((function(){n&&c&&v(n+"?page="+c)}),[c]),(0,t.useEffect)((function(){if(w){f(w.totalPages),l(w.page);var e=new URLSearchParams(window.location.search);e.set("page",c),window.history.pushState(null,null,"?"+e.toString())}}),[w]),{loading:g,pageNumber:c,gotoPage:function(e){e<1||e>d||l(e)},totalPages:d,docs:N,limit:null===w||void 0===w?void 0:w.limit}},c=s(9355),l=s(1609),o=s(9388),u=s(184),d=function(e,n){for(var s=[],t=1;t<=Math.min(n,3);t++)s.push(t);for(t+2<e&&s.push(-1),t=Math.max(t,e-2);t<=e+2&&t<=n;t++)s.push(t);for(t<n-2&&s.push(-1),t=Math.max(t,n-2);t<=n;t++)s.push(t);return s};var f=function(e){var n=e.title,s=e.api,a=e.Container,r=e.setCurrentDataItem,f=i({url:s}),h=f.loading,m=f.pageNumber,x=f.gotoPage,v=f.totalPages,j=f.docs,p=(0,t.useRef)(null);function g(e){x(e),p.current.scrollIntoView()}return(0,u.jsxs)("div",{class:"pages-container",ref:p,children:[(0,u.jsx)(l.bU,{title:n,left:!0}),h?(0,u.jsx)(o.Z,{}):j&&0!==j.length?(0,u.jsx)("div",{className:"content-container",children:j.map((function(e,n){return(0,u.jsx)(a,{data:e,onClick:function(){r&&r(e)}},n)}))}):(0,u.jsx)("p",{children:"No records found"}),(0,u.jsxs)("div",{className:"flex wrap paginations",children:[(0,u.jsx)(c.z,{icon:"chevron_left",text:"Previous",className:"flex-reverse page-button",onClick:function(){return g(m-1)}}),d(m,v).map((function(e){return-1===e?(0,u.jsx)("span",{children:"..."}):(0,u.jsx)("button",{className:"pointer number nav-button"+(e===m?" active":""),onClick:function(){return g(e)},children:e})})),(0,u.jsx)(c.z,{icon:"chevron_right",text:"Next",className:"page-button",onClick:function(){return g(m+1)}})]})]})}},3786:function(e,n,s){var t=s(8214),a=s(5861),r=s(8152),i=s(4569),c=s.n(i),l=s(2791);n.Z=function(e){var n=(0,l.useState)(!0),s=(0,r.Z)(n,2),i=s[0],o=s[1],u=(0,l.useState)(),d=(0,r.Z)(u,2),f=d[0],h=d[1],m=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(){var s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("http://localhost:3000"+e);case 2:s=n.sent,h(s.data),o(!1);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,l.useEffect)((function(){e&&(o(!0),m())}),[e]),[i,(null===f||void 0===f?void 0:f.docs)||[],f]}},8174:function(e,n,s){s.r(n),s.d(n,{default:function(){return c}});s(2791);var t=s(4265),a=s(3665),r=s(5424),i=s(184);var c=function(){return(0,i.jsxs)("div",{className:"pad",children:[(0,i.jsx)(t.Z,{title:"News",img:"news-news-hero.svg"}),(0,i.jsx)(a.Z,{title:"News",api:"/api/news",Container:r.IH})]})}}}]);
//# sourceMappingURL=174.e23f2ce8.chunk.js.map