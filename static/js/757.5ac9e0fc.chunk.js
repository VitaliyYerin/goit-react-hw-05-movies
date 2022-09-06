"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[757],{1757:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r,a,i,o,s,c,u,p,d,l=t(5861),f=t(885),h=t(7757),x=t.n(h),v=t(6871),g=t(2791),m=t(7029),b=t(6066),w=t(168),k=t(6444),Z=t(501),y=k.ZP.div(r||(r=(0,w.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 1560px;\n  max-width: 98%;\n  padding: 2em 0;\n"]))),j=k.ZP.div(a||(a=(0,w.Z)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 2em 0;\n"]))),_=k.ZP.div(i||(i=(0,w.Z)(["\n  padding: 20px;\n  margin: 0 0 0 50px;\n  background-color: rgba(0, 0, 0, 0.5);\n  height: auto;\n  border-radius: 10px;\n  color: #fff;\n"]))),P=k.ZP.img(o||(o=(0,w.Z)(["\n  border-radius: 10px;\n"]))),R=k.ZP.div(s||(s=(0,w.Z)(["\n  text-align: center;\n  color: #fff;\n"]))),q=(0,k.ZP)(Z.OL)(c||(c=(0,w.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  color: #fff;\n  text-decoration: none;\n  &.active {\n    color: brown;\n  }\n  &:hover:not(.active) {\n    text-decoration: underline;\n  }\n  &:last-child {\n    margin-left: 20px;\n  }\n"]))),M=(k.ZP.ul(u||(u=(0,w.Z)(["\n  display: flex;\n  padding-left: 125px;\n"]))),k.ZP.nav(p||(p=(0,w.Z)(["\n  padding: 20px 30px;\n  -webkit-box-shadow: -2px -1px 15px 7px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: -3px -2px 30px 14px rgba(0, 0, 0, 0.425);\n  box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.35);\n"]))),k.ZP.button(d||(d=(0,w.Z)(["\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  color: #fff;\n  background-color: red;\n  &:hover {\n    background-color: #fff;\n    color: black;\n  }\n"])))),T=t(184),C=function(){var e=(0,v.UO)().movieId,n=(0,g.useState)(null),t=(0,f.Z)(n,2),r=t[0],a=t[1],i=(0,v.TH)(),o=(0,v.s0)();(0,g.useEffect)((function(){e&&(0,l.Z)(x().mark((function n(){return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{m.Z.getMovieDetails(e).then((function(e){return a(e)}))}catch(t){b.Am.error(t.message)}case 1:case"end":return n.stop()}}),n)})))()}),[e]);return(0,T.jsx)(y,{children:r&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(M,{type:"button",onClick:function(){var e;o((null===(e=i.state)||void 0===e?void 0:e.from)||"/")},children:"Go Back"}),(0,T.jsxs)(j,{children:[(0,T.jsx)(P,{width:"300",src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:r.original_title}),(0,T.jsxs)(_,{children:[(0,T.jsxs)("h2",{children:["".concat(r.original_title," (").concat(r.release_date.slice(0,4),")")," "]}),(0,T.jsx)("h3",{children:"User score"}),(0,T.jsx)("p",{children:"".concat(10*r.vote_average,"%")}),(0,T.jsx)("h3",{children:"Owerview:"}),(0,T.jsx)("p",{children:r.overview}),(0,T.jsxs)("ul",{children:[(0,T.jsx)("h3",{children:"Genres:"}),r.genres.map((function(e){return(0,T.jsx)("li",{children:e.name},e.id)}))]})]})]}),(0,T.jsxs)(R,{children:[(0,T.jsx)("h2",{children:"Additional Information"}),(0,T.jsx)(q,{to:"cast",state:i.state,children:"Cast"}),(0,T.jsx)(q,{to:"reviews",state:i.state,children:"Reviews"})]}),(0,T.jsx)(v.j3,{context:e})]})})}},7029:function(e,n,t){var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),s=t.n(o),c=t(2007),u=t.n(c);s().defaults.baseURL="https://api.themoviedb.org/3";var p="f534638cb3304b9759e126ecf8f1bc28";function d(){return(d=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/movie/week?api_key=".concat(p));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=".concat(p,"&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"?api_key=").concat(p));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"/credits?api_key=").concat(p));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"/reviews?api_key=").concat(p));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w={getTrendingMovies:function(){return d.apply(this,arguments)},getSearchMovies:l,getMovieDetails:h,getMovieCast:v,getMovieReviews:m};n.Z=w,l.propTypes={query:u().string.isRequired},h.propTypes={movie_id:u().number.isRequired},v.propTypes={movie_id:u().number.isRequired},m.propTypes={movie_id:u().number.isRequired}}}]);
//# sourceMappingURL=757.5ac9e0fc.chunk.js.map