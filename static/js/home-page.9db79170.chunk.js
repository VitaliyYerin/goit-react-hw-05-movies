"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{4672:function(e,n,t){t.d(n,{Z:function(){return v}});var r,i,a,c,s=t(501),u=t(6871),o=t(168),p=t(6444),f=p.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 150px;\n  align-items: center;\n  justify-content: center;\n"]))),d=p.ZP.li(i||(i=(0,o.Z)(["\n"]))),l=p.ZP.p(a||(a=(0,o.Z)(["\n  display: inline;\n  width: 200px;\n  padding-top: 5px;\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n"]))),h=p.ZP.img(c||(c=(0,o.Z)(["\n  border-radius: 10px;\n"]))),m=t(184),v=function(e){var n=e.films,t=(0,u.TH)();return(0,m.jsx)(f,{children:n.map((function(e){return(0,m.jsx)(d,{children:(0,m.jsxs)(s.rU,{to:"/movies/".concat(e.id),state:{from:t},children:[(0,m.jsx)(h,{width:"250",src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.original_title}),(0,m.jsx)(l,{children:e.original_title})]})},e.id)}))})}},2877:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,i,a=t(5861),c=t(885),s=t(7757),u=t.n(s),o=t(4672),p=t(2791),f=t(7029),d=t(6066),l=t(168),h=t(6444),m=h.ZP.main(r||(r=(0,l.Z)(["\n  padding: 50px;\n"]))),v=h.ZP.h2(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-bottom: 30px;\n"]))),g=t(184),x=function(){var e=(0,p.useState)(null),n=(0,c.Z)(e,2),t=n[0],r=n[1];return(0,p.useEffect)((function(){(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{f.Z.getTrendingMovies().then((function(e){r(e)}))}catch(n){d.Am.error(n.message)}case 1:case"end":return e.stop()}}),e)})))()}),[]),(0,g.jsxs)(m,{children:[(0,g.jsx)(v,{children:"Trending Films"}),t&&(0,g.jsx)(o.Z,{films:t})]})}},7029:function(e,n,t){var r=t(5861),i=t(7757),a=t.n(i),c=t(4569),s=t.n(c),u=t(2007),o=t.n(u);s().defaults.baseURL="https://api.themoviedb.org/3";var p="f534638cb3304b9759e126ecf8f1bc28";function f(){return(f=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/movie/week?api_key=".concat(p));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=".concat(p,"&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"?api_key=").concat(p));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"/credits?api_key=").concat(p));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"/reviews?api_key=").concat(p));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w={getTrendingMovies:function(){return f.apply(this,arguments)},getSearchMovies:d,getMovieDetails:h,getMovieCast:v,getMovieReviews:x};n.Z=w,d.propTypes={query:o().string.isRequired},h.propTypes={movie_id:o().number.isRequired},v.propTypes={movie_id:o().number.isRequired},x.propTypes={movie_id:o().number.isRequired}}}]);
//# sourceMappingURL=home-page.9db79170.chunk.js.map