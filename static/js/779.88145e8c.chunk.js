"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var c,r=e(439),o=e(689),i=e(791),a=e(635),u=e(168),f=e(444).ZP.ul(c||(c=(0,u.Z)(["\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  li {\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n  }\n"]))),d=e(184),l=function(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],c=t[1],u=(0,o.UO)().movieId;return(0,i.useEffect)((function(){(0,a.tx)(u).then((function(n){var t=n.data;c(t.results)}))}),[u]),e.length?(0,d.jsx)(f,{children:e.map((function(n){var t=n.id,e=n.content,c=n.author;return(0,d.jsxs)("li",{children:[(0,d.jsx)("h3",{children:c}),(0,d.jsx)("p",{children:e})]},t)}))}):(0,d.jsx)("p",{children:"Sorry, we don't have any reviews for this movie."})}},635:function(n,t,e){e.d(t,{Df:function(){return i},M1:function(){return f},Pg:function(){return a},Zh:function(){return d},tx:function(){return u}});var c=e(912),r="https://api.themoviedb.org/3/",o="api_key=2d54f3365ed9e7717bfee9cb79f47a9c",i=function(){return c.Z.get("".concat(r,"trending/movie/day?").concat(o))},a=function(n){return c.Z.get("".concat(r,"movie/").concat(n,"?").concat(o))},u=function(n){return c.Z.get("".concat(r,"movie/").concat(n,"/reviews?").concat(o))},f=function(n){return c.Z.get("".concat(r,"movie/").concat(n,"/credits?").concat(o))},d=function(n){return c.Z.get("".concat(r,"search/movie?").concat(o,"&query=").concat(n))}}}]);
//# sourceMappingURL=779.88145e8c.chunk.js.map