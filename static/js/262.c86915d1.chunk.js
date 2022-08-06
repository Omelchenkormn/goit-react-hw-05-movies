"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[262,795,651],{6580:function(n,t,e){e.d(t,{Bt:function(){return l},FQ:function(){return s},aZ:function(){return p},rR:function(){return d},y:function(){return f}});var r=e(5861),a=e(4687),c=e.n(a),i=e(4569),u=e.n(i);u().defaults.baseURL="https://api.themoviedb.org/3";var o="4ab48dfc0ecb6ed8c49106d1e05906af",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,e=t.data,r=e.results,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,a=r.cast,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,a=r.results,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,a=r.results,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7262:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,c,i=e(5705),u=e(168),o=e(1993),s=o.Z.div(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),p=(0,o.Z)(i.gN)(a||(a=(0,u.Z)(["\n  height: 31px;\n  width: 150px;\n  font-size: 15px;\n  outline: none;\n"]))),f=o.Z.button(c||(c=(0,u.Z)(["\n  height: 30px;\n  width: 65px;\n  font-size: 15px;\n  margin-left: 5px;\n"]))),l=e(184),d={query:""},h=function(n){var t=n.searchHandler;return(0,l.jsx)(s,{children:(0,l.jsx)(i.J9,{initialValues:d,onSubmit:function(n,e){var r=e.resetForm,a=n.query;t(a),r()},children:(0,l.jsxs)(i.l0,{autoComplete:"off",children:[(0,l.jsx)(p,{type:"text",name:"query",placeholder:"Search movies"}),(0,l.jsx)(f,{type:"submit",children:"Search"})]})})})},x=e(3651),g=e(885),m=e(6580),v=e(2791),Z=e(501),b=e(9795),y=function(){var n=function(){var n=(0,v.useState)(""),t=(0,g.Z)(n,2),e=t[0],r=t[1],a=(0,v.useState)(""),c=(0,g.Z)(a,2),i=(c[0],c[1]),u=(0,Z.lr)(),o=(0,g.Z)(u,2),s=o[0],p=o[1],f=s.get("query")||"";return(0,v.useEffect)((function(){""!==f&&(0,m.rR)(f).then((function(n){r(n),console.log(n)})).catch((function(n){console.log(n)}))}),[f]),{searchQuery:e,searchHandler:function(n){i(n),p({query:n})}}}(),t=n.searchQuery,e=n.searchHandler;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{searchHandler:e}),(0,l.jsx)(x.Wraper,{children:t&&(0,l.jsx)("div",{children:(0,l.jsx)(x.UL,{children:t.map((function(n){return(0,l.jsx)(x.Links,{to:"/movies/".concat(n.id),children:(0,l.jsxs)(x.List,{children:[(0,l.jsx)(x.IMG,{src:n.backdrop_path?"https://image.tmdb.org/t/p/w200/".concat(n.backdrop_path):b,alt:n.original_title}),(0,l.jsx)(x.Title,{children:n.original_title})]},n.id)})}))})})})]})}},3651:function(n,t,e){e.r(t),e.d(t,{IMG:function(){return h},Links:function(){return m},List:function(){return d},Title:function(){return g},UL:function(){return x},Wraper:function(){return l}});var r,a,c,i,u,o,s=e(168),p=e(1993),f=e(501),l=p.Z.div(r||(r=(0,s.Z)(["\n  max-width: 1100px;\n  margin: 0 auto;\n  padding-top: 20px;\n"]))),d=p.Z.li(a||(a=(0,s.Z)(["\n  width: 900px;\n  height: 140px;\n  background-color: #e5e4e4;\n  margin-bottom: 10px;\n  display: flex;\n  border: 2px solid white;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    transform: scale(1.03);\n  }\n"]))),h=p.Z.img(c||(c=(0,s.Z)(["\n  width: 280px;\n"]))),x=p.Z.ul(i||(i=(0,s.Z)(["\n  margin: 0 auto;\n  width: 900px;\n"]))),g=p.Z.h2(u||(u=(0,s.Z)(["\n  font-size: 25px;\n  color: black;\n  text-align: center;\n  padding-left: 10px;\n  padding-top: 10px;\n  text-decoration: none;\n"]))),m=(0,p.Z)(f.rU)(o||(o=(0,s.Z)(["\n  text-decoration: none;\n"])))},9795:function(n,t,e){n.exports=e.p+"static/media/MovieDefault.9b9b77273f4c219b3f6d.png"}}]);
//# sourceMappingURL=262.c86915d1.chunk.js.map