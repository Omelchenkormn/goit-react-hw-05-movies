"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[863,333],{6580:function(n,e,t){t.d(e,{Bt:function(){return d},FQ:function(){return s},aZ:function(){return p},rR:function(){return v},y:function(){return f}});var r=t(5861),a=t(4687),u=t.n(a),c=t(4569),i=t.n(c);i().defaults.baseURL="https://api.themoviedb.org/3";var o="4ab48dfc0ecb6ed8c49106d1e05906af",s=function(){var n=(0,r.Z)(u().mark((function n(){var e,t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,t=e.data,r=t.results,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,a=r.cast,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,a=r.results,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,a=r.results,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},8863:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r=t(3333),a=t(885),u=t(6871),c=t(6580),i=t(2791),o=t(184),s=function(){var n=function(){var n=(0,u.UO)().movieId,e=(0,i.useState)(null),t=(0,a.Z)(e,2),r=t[0],o=t[1];return(0,i.useEffect)((function(){(0,c.Bt)(n).then(o)}),[n]),{reviews:r}}(),e=n.reviews;return(0,o.jsx)("ul",{children:e&&e.map((function(n){return n.content?(0,o.jsxs)("li",{children:[(0,o.jsx)(r.Header,{children:n.author}),(0,o.jsx)(r.TextReview,{children:n.content})]},n.id):(0,o.jsx)("p",{children:"Rewies not found"})}))})}},3333:function(n,e,t){t.r(e),t.d(e,{Header:function(){return i},TextReview:function(){return o}});var r,a,u=t(168),c=t(1993),i=c.Z.h4(r||(r=(0,u.Z)(["\n  padding-bottom: 10px;\n"]))),o=c.Z.p(a||(a=(0,u.Z)(["\n  line-height: normal;\n  padding-bottom: 10px;\n"])))}}]);
//# sourceMappingURL=863.e3fa2a5d.chunk.js.map