"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[568],{4672:function(n,e,t){t.d(e,{Z:function(){return g}});var r,i,a,o,s=t(501),c=t(6871),u=t(168),p=t(6444),f=p.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 1560px;\n  max-width: 98%;\n  padding: 2em 0;\n"]))),d=p.ZP.li(i||(i=(0,u.Z)(["\n"]))),l=p.ZP.p(a||(a=(0,u.Z)(["\n  font-size: 16px;\n  text-align: center;\n  font-weight: 700;\n  color: #fff;\n  max-width: 250px;\n  margin: 0 auto;\n"]))),x=p.ZP.img(o||(o=(0,u.Z)(["\n  border-radius: 10px;\n  margin-bottom: 10px;\n  box-shadow: 0 1px 1px rgb(255,255,255, 11%), 0 2px 2px rgb(255,255,255, 11%), 0 4px 4px rgb(255,255,255, 11%), 0 8px 8px rgb(255,255,255, 11%), 0 16px 16px rgb(255,255,255, 11%), 0 32px 32px rgb(255,255,255, 11%);\n"]))),h=t(184),g=function(n){var e=n.films,t=(0,c.TH)();return(0,h.jsx)(f,{children:e.map((function(n){return(0,h.jsx)(d,{children:(0,h.jsxs)(s.rU,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,h.jsx)(x,{width:"250",src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.original_title}),(0,h.jsx)(l,{children:n.original_title})]})},n.id)}))})}},5568:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,i,a,o=t(5861),s=t(885),c=t(7757),u=t.n(c),p=t(4672),f=t(2791),d=t(501),l=t(7029),x=t(6066),h=t(168),g=t(6444),m=g.ZP.input(r||(r=(0,h.Z)(["\n  width: 700px;\n  height: 50px;\n  padding-left: 10px;\n  outline: none;\n  border: none;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  &:hover {\n    transition: all 250ms linear 0s;\n    background-color: #fff;\n  }\n"]))),b=g.ZP.form(i||(i=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 50px;\n  padding-bottom: 30px;\n"]))),v=g.ZP.button(a||(a=(0,h.Z)(["\n  display: inline-block;\n  width: 68px;\n  height: 52px;\n  border: 0px;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  cursor: pointer;\n  outline: none;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  font-size: 0;\n  background-color: #fff;\n  &:hover {\n    svg {\n      transform: scale(1.1);\n      transition: all 250ms linear 0s;\n      background-color: #fff;\n    }\n  }\n"]))),y=t(9135),w=t(184),Z=function(){var n=(0,f.useState)(""),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=(0,f.useState)([]),a=(0,s.Z)(i,2),c=a[0],h=a[1],g=(0,d.lr)(),Z=(0,s.Z)(g,2),k=Z[0],_=Z[1],j=k.get("query");(0,f.useEffect)((function(){(0,o.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{j&&l.Z.getSearchMovies(j).then((function(n){return h(n.results)}))}catch(e){x.Am.error(e.message)}case 1:case"end":return n.stop()}}),n)})))()}),[j]);return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("main",{children:[(0,w.jsxs)(b,{onSubmit:function(n){n.preventDefault(),_({query:t}),r("")},children:[(0,w.jsx)(m,{type:"text",placeholder:"Enter film name...",onChange:function(n){r(n.target.value)},value:t}),(0,w.jsxs)(v,{type:"submit",children:[(0,w.jsx)(y.U41,{size:30}),"Search"]})]}),c&&(0,w.jsx)(p.Z,{films:c})]})})}},7029:function(n,e,t){var r=t(5861),i=t(7757),a=t.n(i),o=t(4569),s=t.n(o),c=t(2007),u=t.n(c);s().defaults.baseURL="https://api.themoviedb.org/3";var p="f534638cb3304b9759e126ecf8f1bc28";function f(){return(f=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/trending/movie/week?api_key=".concat(p));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/search/movie?api_key=".concat(p,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(e,"?api_key=").concat(p));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(e,"/credits?api_key=").concat(p));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(e,"/reviews?api_key=").concat(p));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var y={getTrendingMovies:function(){return f.apply(this,arguments)},getSearchMovies:d,getMovieDetails:x,getMovieCast:g,getMovieReviews:b};e.Z=y,d.propTypes={query:u().string.isRequired},x.propTypes={movie_id:u().number.isRequired},g.propTypes={movie_id:u().number.isRequired},b.propTypes={movie_id:u().number.isRequired}}}]);
//# sourceMappingURL=568.2b2bf97a.chunk.js.map