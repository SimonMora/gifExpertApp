(this["webpackJsonpgif-experts-app"]=this["webpackJsonpgif-experts-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=n(9),s=n(2),u=n(0),o=function(t){var e=t.handleAdd,n=Object(r.useState)("Insert your category..."),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),e(a),i("Insert your category...")},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){i(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,r,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=SMsq7N9q3Dl9CKVtQz5gKXmaiJQ19xaS&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title.slice(0,10),url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=t.id,n=t.title,r=t.url;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("p",{children:n},e),Object(u.jsx)("img",{alt:n,src:r})]})},O=function(t){var e=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){f(t).then((function(t){a({data:t,loading:!1})}))}),[t]),c}(t.category),n=e.data,c=e.loading;return Object(u.jsxs)("div",{className:"card-grid",children:[Object(u.jsx)("br",{}),c&&Object(u.jsx)("p",{children:"Loading.."}),n.map((function(t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p,Object(j.a)({},t),t.id)})}))]})},h=function(){var t=Object(r.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Gif react!"}),Object(u.jsx)("hr",{}),Object(u.jsx)(o,{handleAdd:function(t){c((function(e){return[t].concat(Object(i.a)(e))}))}}),n.map((function(t){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)(O,{category:t},t)]})}))]})};n(17);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.81c169fc.chunk.js.map