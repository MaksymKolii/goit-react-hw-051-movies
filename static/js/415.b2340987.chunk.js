"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{2415:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,c,i,s,o=e(5861),u=e(9439),p=e(7757),f=e.n(p),l=e(7689),d=e(2791),h=e(2596),m=e(168),v=e(6444),x=v.ZP.ul(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: center;\n\n  margin: -10px;\n"]))),g=v.ZP.li(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: baseline;\n  max-width: 150px;\n  background-color: #304040;\n\n  margin: 10px;\n  flex-grow: 1;\n  transition: transform 250ms linear;\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),w=v.ZP.img(c||(c=(0,m.Z)(["\n  display: block;\n  max-width: 100%;\n  height: 100%;\n  margin-bottom: 3px;\n"]))),y=v.ZP.p(i||(i=(0,m.Z)(["\n  display: block;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 5px;\n  color: white;\n"]))),Z=v.ZP.span(s||(s=(0,m.Z)(["\n  display: block;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 5px;\n  color: white;\n"]))),b=e(184),k=function(n){var t=n.cast;return(0,b.jsx)(x,{children:t&&t.map((function(n){var t,e=n.id,r=n.name,a=n.gender,c=n.profile;return(0,b.jsxs)(g,{children:[(0,b.jsx)(w,{src:c?"https://image.tmdb.org/t/p/w500"+c:"https://louisville.edu/history/images/noimage.jpg/image",alt:r,width:"150",height:"100%"}),(0,b.jsx)(y,{children:(t=a,2===t?"Actor":1===t?"Actress":0===t?"Individual":void 0)}),(0,b.jsx)(Z,{children:r})]},e)}))})},j=e(7793),_=function(){var n=(0,d.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,d.useRef)(!0),c=(0,d.useState)(!1),i=(0,u.Z)(c,2),s=i[0],p=i[1],m=(0,l.UO)().movieId;return(0,d.useEffect)((function(){function n(){return(n=(0,o.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.prev=1,n.next=4,h.Z.fetchActors(m);case 4:t=n.sent,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}if(a.current)return function(){n.apply(this,arguments)}(),void(a.current=!1)}),[m]),(0,b.jsxs)(b.Fragment,{children:[s&&(0,b.jsx)(j.a,{}),0!==e.length||s?(0,b.jsx)(k,{cast:e}):(0,b.jsx)("p",{children:" We don't have any actors"})]})}},2596:function(n,t,e){e.d(t,{Z:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),i=e(2388),s=function(n){return n.map((function(n){return{id:n.cast_id,name:n.name,gender:n.gender,profile:n.profile_path}}))},o=function(n){return n.map((function(n){var t=n.author,e=n.content,r=n.updated_at;return{id:n.id,author:t,updated:r,content:e}}))},u=e(2306);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var p=new URLSearchParams({api_key:"cf140a587ec927271eacbad378897741",language:"en-US"});function f(){return f=(0,r.Z)(c().mark((function n(t){var e,r,a,s,o=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:1,r="search/movie?".concat(p,"&query=").concat(t,"&page=").concat(e),n.next=4,i.Z.get(r);case 4:return a=n.sent,s=a.data,console.log(s),n.abrupt("return",s);case 8:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="trending/movie/day?".concat(p),n.next=3,(0,i.Z)(t);case 3:return e=n.sent,r=e.data.results,n.abrupt("return",(0,u.s)(r));case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"?").concat(p),n.next=3,i.Z.get(e,{params:{append_to_response:"videos"}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r,a,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/credits?").concat(p),n.next=3,(0,i.Z)(e);case 3:return r=n.sent,a=r.data.cast,o=s(a),n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e,r,a,s;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/reviews?").concat(p),n.next=3,i.Z.get(e);case 3:return r=n.sent,a=r.data.results,s=o(a),n.abrupt("return",s);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var v={fetchMoviesByName:function(n){return f.apply(this,arguments)},fetchMostPopular:function(){return l.apply(this,arguments)},fetchMovieById:function(n){return d.apply(this,arguments)},fetchActors:function(n){return h.apply(this,arguments)},fetchReviews:function(n){return m.apply(this,arguments)}},x=v},2306:function(n,t,e){e.d(t,{s:function(){return r}});var r=function(n){return n.map((function(n){var t=n.release_date,e=n.title,r=n.poster_path;return{id:n.id,title:e,release:new Date(t).getFullYear(),poster:r}}))}}}]);
//# sourceMappingURL=415.b2340987.chunk.js.map