(this["webpackJsonpomdb-shopify"]=this["webpackJsonpomdb-shopify"]||[]).push([[0],{88:function(e,t,a){},91:function(e,t,a){},96:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),r=a.n(c),o=a(11),i=a.n(o),s=(a(88),a(34)),l=a.n(s),u=a(46),b=a(13),d=(a(90),a(91),a(62)),j=a(151),p=a(159),m=a(150),g=a(148),h=a(143),O=a(161),f=a(149),x=a(71),v=a(70),w=a(145),C=r.a.forwardRef((function(e,t){return Object(n.jsx)(h.a,Object(d.a)({direction:"up",ref:t},e))})),P=Object(w.a)((function(e){return{root:{flexGrow:1},movieInfoDialog:{padding:e.spacing(2),maxWidth:"md"},image:{justifyContent:"space-evenly",maxWidth:200,maxHeight:300},img:{justifyContent:"space-evenly",margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},rating:{width:"12%",fontSize:"100%"}}})),k=function(e){var t=P(),a=r.a.useState(!1),c=Object(b.a)(a,2),o=(c[0],c[1]);return Object(n.jsxs)(p.a,{overflow:"hidden",fullWidth:!0,maxWidth:"md",scroll:"body",open:e.open,TransitionComponent:C,keepMounted:!0,onClose:function(){o(!1)},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(n.jsx)(g.a,{children:Object(n.jsxs)(f.a,{container:!0,spacing:2,fullWidth:!0,children:[Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(x.a,{className:t.image,children:Object(n.jsx)("img",{className:t.img,alt:"complex",src:e.poster})})}),Object(n.jsx)(f.a,{item:!0,xs:12,sm:!0,container:!0,children:Object(n.jsxs)(f.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,children:[Object(n.jsxs)(f.a,{item:!0,xs:!0,children:[Object(n.jsx)(v.a,{gutterBottom:!0,variant:"h5",children:e.title}),Object(n.jsx)(v.a,{variant:"body2",gutterBottom:!0,children:e.plot})]}),Object(n.jsx)(f.a,{item:!0,justify:"flex-end",children:Object(n.jsx)(O.a,{className:t.rating,label:e.rating,color:"secondary"})})]})})]})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(j.a,{onClick:e.onDialogClosed,color:"primary",children:"CLOSE"})})]})},y=function(e){console.log("Get more data");var t=r.a.useState(!1),a=Object(b.a)(t,2),o=a[0],i=a[1],s=r.a.useState({}),d=Object(b.a)(s,2),j=d[0],p=d[1],m=r.a.useState(e.poster),g=Object(b.a)(m,2),h=g[0],O=g[1],f=function(){var t=Object(u.a)(l.a.mark((function t(){var a,n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="http://www.omdbapi.com/?i="+e.imdbID+"&apikey=a7d62505&plot=full",t.next=3,fetch(a);case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,p(c);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){x()}),[e.poster]);var x=function(){"N/A"===e.poster?O("https://toppng.com/uploads/preview/movie-moviemaker-film-cut-svg-png-icon-free-download-movie-icon-11563265487xzdashbdvx.png"):O(e.poster)};return Object(n.jsxs)("div",{className:"image-container d-flex justify-content-center ml-4 mr-4 mb-3 mt-3",children:[Object(n.jsx)("img",{width:330,height:415,src:h,onClick:function(){f(),i(!0)},onError:x,alt:"movie"}),Object(n.jsx)(k,{open:o,onDialogClosed:function(){i(!1)},title:e.title,poster:e.poster,plot:j.Plot,rating:j.imdbRating+"/10"},e.imdbID)]},e.imdbID)},S=function(e){var t=r.a.useState(!1),a=Object(b.a)(t,2),c=(a[0],a[1]),o=function(){c(!0)};return Object(n.jsx)(n.Fragment,{children:e.movies.map((function(e,t){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(y,{imdbID:e.imdbID,title:e.Title,poster:e.Poster,onClick:o}),Object(n.jsx)("div",{className:"overlay d-flex align-items-center justify-content-center"})]})}))})},N=a(40),I=a(152),F=a(153),D=a(160),E=a(9),B=a(65),R=a.n(B),T=a(64),W=a.n(T),H=(a(96),Object(w.a)((function(e){return{appBar:{backgroundColor:"#181818"},root:{flexGrow:1},movieIcon:{fontSize:"300%",marginRight:e.spacing(2),color:"#ff316f"},search:Object(N.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(E.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(E.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"30%"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(N.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}))),L=function(e){var t=H();return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(I.a,{position:"static",className:t.appBar,children:Object(n.jsxs)(F.a,{children:[Object(n.jsx)(W.a,{className:t.movieIcon}),Object(n.jsx)(v.a,{className:"OMDBTitle",variant:"h4",noWrap:!0,children:"OMDB MOVIES"}),Object(n.jsxs)("div",{className:t.search,children:[Object(n.jsx)("div",{className:t.searchIcon,children:Object(n.jsx)(R.a,{})}),Object(n.jsx)(D.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(t){return e.setSearchTerm(t.target.value)}})]})]})})})},M=a(154),z=a(50),G=a(66),A=a.n(G),J=a(67),K=a.n(J),V=a(155),q=a(157),Q=a(68),U=a.n(Q),X=a(156),Y=Object(w.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:600,position:"relative",minHeight:200},nextPageFab:{position:"absolute",color:e.palette.common.white,backgroundColor:z.a[900],"&:hover":{backgroundColor:"#f50057"},bottom:e.spacing(4),right:e.spacing(4)},pageIndicatorFab:{position:"absolute",bottom:e.spacing(4),right:e.spacing(12)},prevPageFab:{position:"absolute",color:e.palette.common.white,backgroundColor:z.a[900],"&:hover":{backgroundColor:"#f50057"},bottom:e.spacing(4),right:e.spacing(20)}}})),Z=function(e){var t=Y(),a=Object(c.useState)(!1),r=Object(b.a)(a,2),o=r[0],i=r[1],s=Object(c.useState)(1),l=Object(b.a)(s,2),u=l[0],d=l[1],h=Object(c.useState)(!1),O=Object(b.a)(h,2),f=O[0],x=O[1],v=Object(c.useState)(""),w=Object(b.a)(v,2),C=w[0],P=w[1],k=function(){i(!1)},y=[{color:"inherit",className:t.nextPageFab,icon:Object(n.jsx)(A.a,{}),label:"Next",clickHandler:function(t){var a=e.currentPage+1;a<=e.maxPages&&(e.setCurrentPage(a),console.log("Current page changed ",e.currentPage))}},{color:"secondary",className:t.pageIndicatorFab,icon:"".concat(e.currentPage,"/").concat(e.maxPages),label:"".concat(e.currentPage,"/").concat(e.maxPages),clickHandler:function(e){i(!0)}},{color:"inherit",className:t.prevPageFab,icon:Object(n.jsx)(K.a,{}),label:"Prev",clickHandler:function(t){var a=e.currentPage-1;a>=e.minPages&&(e.setCurrentPage(a),console.log("prev current page changed ",a))}}];return Object(n.jsxs)(n.Fragment,{children:[y.map((function(e,t){return Object(n.jsx)(M.a,{"aria-label":e.label,className:e.className,color:e.color,onClick:e.clickHandler,children:e.icon})})),Object(n.jsxs)(p.a,{open:o,onClose:k,"aria-labelledby":"form-dialog-title",children:[Object(n.jsx)(V.a,{id:"form-dialog-title",children:"Enter Page Number"}),Object(n.jsx)(g.a,{children:Object(n.jsx)(q.a,{autoFocus:!0,margin:"dense",id:"pageNumber",label:"Page Number",type:"number",fullWidth:!0,error:f,helperText:C,onChange:function(t){e.minPages<=t.target.value&&t.target.value<=e.maxPages?(d(t.target.value),x(!1),P("")):(x(!0),P("Input a page number between ".concat(e.minPages,"-").concat(e.maxPages)))},onKeyDown:function(t){"Enter"===t.key&&(f||(i(!1),e.setCurrentPage(u),t.preventDefault()))},InputProps:{startAdornment:Object(n.jsx)(X.a,{position:"start",children:Object(n.jsx)(U.a,{})})}})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(j.a,{onClick:k,color:"primary",children:"CLOSE"})})]})]})};var $=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)([]),i=Object(b.a)(o,2),s=i[0],d=i[1],j=Object(c.useState)(1),p=Object(b.a)(j,2),m=p[0],g=p[1],h=Object(c.useState)(1),O=Object(b.a)(h,2),f=O[0],x=O[1];Object(c.useEffect)((function(){console.log("Search term was changed, ",a),v()}),[a,m]);var v=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,c,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://www.omdbapi.com/?s="+a+"&apikey=a7d62505&page="+m,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:(c=e.sent).Search&&(d(c.Search),r=parseInt(c.totalResults),o=Math.ceil(r/c.Search.length),x(o));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(L,{setSearchTerm:r}),Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(S,{movies:s})}),Object(n.jsx)(Z,{maxPages:f,minPages:1,currentPage:m,setCurrentPage:g})]})]})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,162)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)($,{})}),document.getElementById("root")),_()}},[[99,1,2]]]);
//# sourceMappingURL=main.3fb1b7db.chunk.js.map