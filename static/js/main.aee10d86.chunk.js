(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{15:function(e,t,n){e.exports={content:"Content_content__2m6Ls",container:"Content_container__1DSdq"}},2:function(e,t,n){e.exports={modal:"Modal_modal__3nOwP",active:"Modal_active__1lwuK",modalContent:"Modal_modalContent__1n1mY",movieInfo:"Modal_movieInfo__qn4pj",movieInfoNone:"Modal_movieInfoNone__3XQoI",img:"Modal_img__2Pfi2",imgNone:"Modal_imgNone__3i6SJ",info:"Modal_info__1XHEp",infoNone:"Modal_infoNone__lOb4D",description:"Modal_description__lehUI"}},29:function(e,t,n){e.exports={search:"Search_search__2OMsh"}},35:function(e,t,n){},36:function(e,t,n){},5:function(e,t,n){e.exports={movie:"Movie_movie__dMeeA",coverInner:"Movie_coverInner__39sRh",movieCover:"Movie_movieCover__1X-i_",coverDarkened:"Movie_coverDarkened__1F6uK",info:"Movie_info__1BQB0",title:"Movie_title__2ivvv",category:"Movie_category__jrtZk",average:"Movie_average__3uygu"}},6:function(e,t,n){e.exports={header:"Header_header__eipLj",container:"Header_container__3iKJf",logo:"Header_logo__1mWE2",icon:"Header_icon__2CX6f",logoText:"Header_logoText__1n7Qw",search:"Header_search__qdNka"}},61:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(9),i=n.n(o),r=(n(35),n(36),n(6)),s=n.n(r),l=n(29),d=n.n(l),j=n(0),u=function(e){return Object(j.jsx)("form",{className:d.a.search,children:Object(j.jsx)("input",{type:"text",placeholder:"search..."})})},v=function(e){return Object(j.jsx)("div",{className:s.a.header,children:Object(j.jsxs)("div",{className:s.a.container,children:[Object(j.jsxs)("div",{className:s.a.logo,children:[Object(j.jsx)("div",{className:s.a.icon}),Object(j.jsx)("div",{className:s.a.logoText,children:"MOVIE"})]}),Object(j.jsx)("div",{className:s.a.search,children:Object(j.jsx)(u,{})})]})})},m=n(3),f=n(19),_=n(15),b=n.n(_),h=n(5),O=n.n(h),g=function(e){return Object(j.jsxs)("div",{className:O.a.movie,children:[Object(j.jsxs)("div",{className:O.a.coverInner,children:[Object(j.jsx)("img",{className:O.a.movieCover,src:e.posterUrl}),Object(j.jsx)("div",{onClick:function(){e.setActive(!0),e.getMovieModal(e.filmId)},className:O.a.coverDarkened})]}),Object(j.jsxs)("div",{className:O.a.info,children:[Object(j.jsxs)("div",{className:O.a.title,children:[" ",e.name]}),Object(j.jsx)("div",{className:O.a.category,children:e.genres.map((function(e){return e.genre})).join()}),Object(j.jsx)("div",{className:O.a.average,children:e.rating})]})]})},p=n(20),x=n(8),N=n.n(x),M=n(16),C=n(17),I=n.n(C),P="128d4a2b-b5a5-48b6-beeb-bdfb70407d2c",E=function(e){return I.a.get("https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=".concat(e),{headers:{"Content-Type":"application/json","X-API-KEY":P}})},y=function(e){return I.a.get("https://kinopoiskapiunofficial.tech/api/v2.1/films/".concat(e),{headers:{"Content-Type":"application/json","X-API-KEY":P}})},k="SET_MOVIE",T="SET_MODAL",S="SET_FETCHING",w="SET_CURRENT_PAGE",A="SET_PAGES_COUNT",F=function(e){return{type:T,modal:e}},H=function(e){return{type:w,currentPage:e}},L={movie:[],modal:null,totalCount:null,currentPage:1,fetching:!0},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(m.a)(Object(m.a)({},e),{},{movie:[].concat(Object(p.a)(e.movie),Object(p.a)(t.movie))});case T:return Object(m.a)(Object(m.a)({},e),{},{modal:t.modal});case S:return Object(m.a)(Object(m.a)({},e),{},{fetching:t.fetch});case A:return Object(m.a)(Object(m.a)({},e),{},{totalCount:t.count});case w:return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});default:return e}},D=n(11),R=n(2),X=n.n(R),K=function(e){return console.log(e),Object(j.jsx)(j.Fragment,{children:e.nameRu?Object(j.jsx)("div",{onClick:function(){e.setActive(!1),e.setModal(null)},className:"".concat(X.a.modal,"\n    ").concat(e.active?X.a.active:""),children:Object(j.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:X.a.modalContent,children:[Object(j.jsxs)("div",{className:X.a.movieInfo,children:[Object(j.jsx)("img",{src:e.posterUrlPreview,className:X.a.img}),Object(j.jsxs)("div",{className:X.a.info,children:[Object(j.jsx)("h2",{children:e.nameRu}),Object(j.jsx)("div",{children:Object(j.jsx)("i",{children:e.slogan})}),Object(j.jsxs)("div",{children:[" ",Object(j.jsx)("span",{children:"\u0416\u0430\u043d\u0440 : "}),e.genres?e.genres.map((function(e){return e.genre})).join():""]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"\u0413\u043e\u0434 : "}),e.year]})]})]}),Object(j.jsx)("div",{className:X.a.description,children:e.description})]})}):Object(j.jsx)("div",{onClick:function(){e.setActive(!1)},className:"".concat(X.a.modal,"\n   ").concat(e.active?X.a.active:""),children:Object(j.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:X.a.modalContent,children:[Object(j.jsxs)("div",{className:X.a.movieInfoNone,children:[Object(j.jsx)("div",{className:X.a.imgNone}),Object(j.jsxs)("div",{className:X.a.infoNone,children:[Object(j.jsx)("h2",{}),Object(j.jsx)("div",{className:X.a.sloganNone}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{className:X.a.yearNone})]})]}),Object(j.jsx)("div",{className:X.a.descriptionNone})]})})})},B=Object(D.b)((function(e){return{movie:e.movie.movie,modal:e.movie.modal,currentPage:e.movie.currentPage,fetching:e.movie.fetching,totalCount:e.movie.totalCount}}),{getMovie:function(e){return function(){var t=Object(M.a)(N.a.mark((function t(n){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:a=t.sent,n((o=a.data.films,{type:k,movie:o})),n(H(e+1)),n((c=a.data.pagesCount,{type:A,count:c}));case 6:case"end":return t.stop()}var c,o}),t)})));return function(e){return t.apply(this,arguments)}}()},getMovieModal:function(e){return function(){var t=Object(M.a)(N.a.mark((function t(n){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:a=t.sent,n(F(null)),n(F(a.data.data)),console.log(a.data.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setFetching:function(e){return{type:S,fetch:e}},setCurrentPage:H,setModal:F})((function(e){var t=c.a.useState(e.movie),n=Object(f.a)(t,2),a=(n[0],n[1],c.a.useState(!1)),o=Object(f.a)(a,2),i=o[0],r=o[1];c.a.useEffect((function(){e.fetching&&e.getMovie(e.currentPage),e.setFetching(!1)}),[e.fetching,i]),c.a.useEffect((function(){return document.addEventListener("scroll",s),function(){document.removeEventListener("scroll",s)}}),[e.totalCount]);var s=function(t){t.target.documentElement.scrollHeight-(t.target.documentElement.scrollTop+window.innerHeight)<150&&e.currentPage<e.totalCount&&e.setFetching(!0)},l=e.movie.map((function(t){return Object(j.jsx)(g,{getMovieModal:e.getMovieModal,filmId:t.filmId,active:i,setActive:r,name:t.nameRu,rating:t.rating,genres:t.genres,posterUrl:t.posterUrl},t.filmId)}));return Object(j.jsx)("div",{className:b.a.content,children:Object(j.jsxs)("div",{className:b.a.container,children:[Object(j.jsx)(K,Object(m.a)(Object(m.a)({},e.modal),{},{setModal:e.setModal,active:i,setActive:r})),l]})})}));var J=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(v,{}),Object(j.jsx)(B,{})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))},G=n(12),Q=n(30),Y=Object(G.b)({movie:U}),V=Object(G.c)(Y,Object(G.a)(Q.a));i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D.a,{store:V,children:Object(j.jsx)(J,{})})}),document.getElementById("root")),q()}},[[61,1,2]]]);
//# sourceMappingURL=main.aee10d86.chunk.js.map