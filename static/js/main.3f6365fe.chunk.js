(this["webpackJsonpomdb-shopify"]=this["webpackJsonpomdb-shopify"]||[]).push([[0],{123:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),c=a.n(i),o=a(11),s=a.n(o),r=(a(123),a(69)),l=a(8),j=(a(124),a(213)),d=a(98),h=a(212),b=a(195),m=a(217),O=a(190),u=a(191),g=a(192),x=a(193),p=a(194),f=function(e){var t=c.a.useState(!1),a=Object(l.a)(t,2),o=a[0],s=a[1],r=function(){s(!1)};return Object(i.useEffect)((function(){!0===e.open?s(!0):s(!1)}),[e.open,e.nominations]),Object(n.jsx)("div",{children:Object(n.jsxs)(m.a,{open:o,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",I:!0,children:[Object(n.jsx)(O.a,{children:"Nominations Submitted"}),Object(n.jsx)(u.a,{children:e.nominations.map((function(e,t){return Object(n.jsxs)(g.a,{children:[t+1,". ",e.Title]})}))}),Object(n.jsx)(x.a,{children:Object(n.jsx)(p.a,{onClick:r,color:"primary",children:"CLOSE"})})]})})},v=a(197),w=a(42),S=a.n(w),y=a(60),N=a(196),k=(a(198),a(89),a(90),a(70)),C=(a.p,Object(b.a)((function(e){return{root:{flexGrow:1,paddingBottom:"5%"},moveMoreInfo:{padding:e.spacing(2),maxWidth:"md"},image:{justifyContent:"space-evenly",maxWidth:200,maxHeight:300},img:{justifyContent:"space-evenly",margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},rating:{backgroundColor:e.palette.info.main,width:"20%",fontSize:"100%"},cover:{width:"100%"},fallbackPoster:{fontSize:"100%",width:"100%",height:"100%"},ratingMargin:{margin:e.spacing(1)},imdbLink:{maxWidth:50,backgroundColor:e.palette.warning.light,color:"black"}}})),a(24)),I=a(199),F=a(201),B=a(200),T=Object(b.a)((function(e){return{root:{height:"100%",width:"100%"},details:{display:"flex",flexDirection:"column"},content:{flex:"auto",height:"100%"},cover:{width:"100%",height:"100%"},title:{fontSize:"1.2rem"},year:{fontSize:"1rem"}}})),E=function(e){var t=T(),a=Object(i.useState)(!1),c=Object(l.a)(a,2),o=c[0],s=c[1];Object(C.a)();return Object(i.useEffect)((function(){s(e.showSkeleton)}),[e.showSkeleton]),Object(n.jsx)(N.a,{className:t.root,children:Object(n.jsxs)(v.a,{container:!0,className:t.root,children:[Object(n.jsxs)(v.a,{item:!0,container:!0,xs:10,children:[Object(n.jsx)(v.a,{item:!0,xs:12,children:Object(n.jsx)(I.a,{className:t.content,children:o?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{animation:"wave",height:10,width:"80%"}),Object(n.jsx)(B.a,{animation:"wave",height:10,width:"60%"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k.a,{variant:"h6",className:t.title,noWrap:!0,children:e.movie.Title}),Object(n.jsx)(k.a,{variant:"subtitle1",color:"textSecondary",className:t.year,children:e.movie.Year})]})})}),Object(n.jsx)(v.a,{item:!0,xs:12,children:Object(n.jsx)("div",{className:t.controls,children:o?Object(n.jsx)(B.a,{animation:!1,height:"25%",width:"30%"}):Object(n.jsx)(p.a,{size:"small",color:"primary",onClick:function(){e.onRemoveNominationClicked(e.movie)},children:"Remove"})})})]}),Object(n.jsx)(v.a,{item:!0,xs:2,children:o?Object(n.jsx)(B.a,{animation:!1,variant:"rect",className:t.cover}):Object(n.jsx)(F.a,{className:t.cover,image:e.movie.Poster})})]})})},M=Object(b.a)((function(e){return{root:{width:"100%",height:"100%",minHeight:"10vh",border:".15rem",borderStyle:"dashed",borderWidth:"100",borderColor:e.palette.action.disabled}}})),L=function(){var e=M();return Object(n.jsx)(N.a,{className:e.root,raised:!1,elevation:0})},D=Object(b.a)((function(e){return{resultEntry:{alignItems:"flex-start"},root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.black,height:100,overflow:"auto"},removeNominationButton:{color:"red"},grid:{alignItems:"stretch"},typography:{fontSize:"1.2rem"}}})),z=function(e){var t=D();return Object(i.useEffect)((function(){}),[e.movies]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(v.a,{item:!0,container:!0,xs:12,alignItems:"center",justify:"space-around",children:[Object(n.jsx)(v.a,{item:!0,children:Object(n.jsx)(k.a,{variant:"h6",className:t.typography,children:"NOMINATIONS"})}),Object(n.jsx)(v.a,{item:!0,children:Object(n.jsxs)(k.a,{variant:"h6",className:t.typography,children:[e.movies.length,"/",5]})})]}),e.movies.map((function(t,a){return Object(n.jsx)(v.a,{item:!0,xs:12,children:Object(n.jsx)(E,{movie:t,onRemoveNominationClicked:e.onRemoveNominationClicked})})})),Array(5-e.movies.length).fill({Poster:"",Title:"",Type:"",Year:"",disableNominate:!1,imdbID:""}).map((function(e,t){return Object(n.jsx)(v.a,{item:!0,xs:12,children:Object(n.jsx)(L,{})})}))]})})},P=(a(92),a(91),a(93),a(202)),R=a(214),W=a(62),A=(Object(b.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:600,position:"relative",minHeight:200},nextPageFab:{position:"absolute",color:e.palette.common.white,backgroundColor:W.a[900],"&:hover":{backgroundColor:"#f50057"},bottom:e.spacing(1),right:e.spacing(190)},pageIndicatorFab:{position:"absolute",bottom:e.spacing(1),right:e.spacing(198)},prevPageFab:{position:"absolute",color:e.palette.common.white,backgroundColor:W.a[900],"&:hover":{backgroundColor:"#f50057"},bottom:e.spacing(1),right:e.spacing(206)}}})),a(203),a(61)),H=a.n(A),J=(a(204),Object(b.a)((function(e){return{appBar:{backgroundColor:"#000000"},movieIcon:{fontSize:"250%",color:e.palette.primary.main}}})),a(68)),Y=a(215),G=a(205),q=a(206),K=Object(b.a)((function(e){return{root:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",marginRight:e.spacing(2)},cover:{width:"100%",height:"20vh"},content:{height:"100%"},title:{fontSize:"1rem"},year:{fontSize:"1rem"},controls:{paddingTop:"20%"}}})),Q=function(e){var t=K();return Object(i.useEffect)((function(){console.log("Search result card loading -> ",e.loading),console.log("Search result movie -> ",e.movie)}),[e.loading,e.movie]),Object(n.jsxs)(N.a,{className:t.root,children:[Object(n.jsxs)(G.a,{children:[e.loading?Object(n.jsx)(B.a,{animation:"wave",variant:"rect",height:"20vh",width:"100%"}):Object(n.jsx)(F.a,{component:"img",className:t.cover,image:e.movie.Poster}),Object(n.jsx)(I.a,{className:t.content,children:e.loading?Object(n.jsxs)("div",{className:t.skeletonContent,children:[Object(n.jsx)(B.a,{animation:"wave",height:"100%",width:"100%"}),Object(n.jsx)(B.a,{animation:"wave",height:"100%",width:"80%"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k.a,{variant:"h6",className:t.title,children:e.movie.Title}),Object(n.jsx)(k.a,{variant:"body2",color:"textSecondary",className:t.year,children:e.movie.Year})]})})]}),Object(n.jsx)(q.a,{className:t.controls,children:e.loading?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{animation:"wave",height:"100%",width:"100%"}),Object(n.jsx)(B.a,{animation:"wave",height:"100%",width:"100%"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p.a,{size:"small",color:"primary",disabled:e.movie.disableNominate||e.disableNominations,onClick:function(){e.onNominateClicked(e.movie)},children:"Nominate"}),Object(n.jsx)(p.a,{size:"small",color:"primary",onClick:function(){window.open("https://www.imdb.com/title/".concat(e.movie.imdbID))},children:"Learn More"})]})})]})},U=Object(b.a)((function(e){return{root:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",marginRight:e.spacing(2)},cover:{width:"100%",height:"20vh"},content:{},skeletonTitle:{width:"80%",height:"3.5vh"},skeletonSubTitle:{width:"5vw",height:"3.5vh"},skeletonMedia:{height:"20vh",width:"100%"},skeletonContent:{width:"5vw",paddingBottom:"32%"}}})),V=function(e){var t=U();return Object(i.useEffect)((function(){console.log("Search result card loading -> ",e.loading),console.log("Search result movie -> ",e.movie)}),[e.loading,e.movie]),Object(n.jsxs)(N.a,{className:t.root,fullWidth:!0,children:[Object(n.jsxs)(G.a,{children:[Object(n.jsx)(F.a,{children:Object(n.jsx)(B.a,{animation:"wave",variant:"rect",height:"20vh",width:"100%"})}),Object(n.jsx)(I.a,{className:t.content,children:Object(n.jsxs)("div",{className:t.skeletonContent,children:[Object(n.jsx)(B.a,{animation:"wave",height:"100%",width:"100%"}),Object(n.jsx)(B.a,{animation:"wave",height:"100%",width:"80%"})]})})]}),Object(n.jsxs)(q.a,{children:[Object(n.jsx)(B.a,{animation:"wave",height:"100%",width:"100%"}),Object(n.jsx)(B.a,{animation:"wave",height:"100%",width:"100%"})]})]})},X=a(207),Z=a(208),$=Object(b.a)((function(e){return{root:{paddingLeft:"1%",paddingRight:"1%"}}})),_=function(e){var t=Object(C.a)(),a=$();return Object(n.jsxs)(v.a,{container:!0,className:a.root,justify:"space-between",alignItems:"center",maxStepsmaxStepsmaxSteps:!0,children:[Object(n.jsx)(v.a,{item:!0,children:Object(n.jsxs)(p.a,{size:"small",onClick:e.onBack,disabled:1==e.activePage,children:["rtl"===t.direction?Object(n.jsx)(X.a,{}):Object(n.jsx)(Z.a,{}),"Back"]})}),Object(n.jsx)(v.a,{item:!0,children:Object(n.jsxs)(k.a,{variant:"body2",children:[e.activePage," / ",e.steps]})}),Object(n.jsx)(v.a,{item:!0,children:Object(n.jsxs)(p.a,{size:"small",onClick:e.onNext,disabled:e.activePage===e.steps-1,children:["Next","rtl"===t.direction?Object(n.jsx)(Z.a,{}):Object(n.jsx)(X.a,{})]})})]})},ee=a(94),te=a.n(ee),ae=Object(b.a)((function(e){var t;return{row:(t={display:"flex",height:"100%",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"stretch"},Object(J.a)(t,"height","100%"),Object(J.a)(t,"marginBottom",e.spacing(2)),t)}})),ne=function(e,t,a,n){var i=a-t;console.log("Array len ",i);for(var c=Array(i),o=0;o<i;o++)c[o]=e(n[o+t],o);return c},ie=function(e){var t=ae(),a=(Object(C.a)(),Object(i.useState)([])),c=Object(l.a)(a,2),o=c[0],s=c[1],r=Object(i.useState)(!1),j=Object(l.a)(r,2),d=j[0],h=j[1],b=Object(i.useState)(!1),m=Object(l.a)(b,2),O=m[0],u=m[1],g=Object(i.useState)(""),x=Object(l.a)(g,2),p=(x[0],x[1]),f=Object(i.useState)(1),w=Object(l.a)(f,2),N=w[0],k=w[1],I=Object(i.useState)(1),F=Object(l.a)(I,2),B=F[0],T=F[1],E=new Array(10).fill({Title:"",Year:"",Poster:""}),M=Object(i.useState)(E),L=Object(l.a)(M,2),D=L[0],z=L[1],P=Object(i.useState)(!1),R=Object(l.a)(P,2),W=R[0],A=R[1];Object(i.useEffect)((function(){console.log("Search term was changed, ",e.searchTerm),T(1),e.searchTerm.length>0&&H()}),[e.searchTerm]),Object(i.useEffect)((function(){H()}),[B]),Object(i.useEffect)((function(){e.nominatedMoviesList.length>=5?A(!0):A(!1)}),[e.nominatedMoviesList]),console.log("Data test ",o),console.log("Loading stats ",O);var H=function(){var t=Object(y.a)(S.a.mark((function t(){var a,n,i,c,r,l;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://www.omdbapi.com/?s="+e.searchTerm+"&apikey=a7d62505&page="+B,u(!0),t.prev=2,t.next=5,te()(a);case 5:if(n=t.sent,s(n.data),e.nominatedMoviesList)for(i=0;i<n.data.Search.length;i++)for(n.data.Search[i].disableNominate=!1,c=0;c<e.nominatedMoviesList.length;c++)console.log("Search id ",n.data.Search[i].imdbID," storageid ",e.nominatedMoviesList[c].imdbID),n.data.Search[i].imdbID===e.nominatedMoviesList[c].imdbID&&(console.log("Disabled comparison succeeded "),n.data.Search[i].disableNominate=!0);else for(r=0;r<n.data.Search.length;r++)n.data.Search[r].disableNominate=!1;z(n.data.Search),l=Math.ceil(n.data.totalResults/10),k(l),u(!1),h(!0),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(2),p(t.t0),u(!1);case 19:console.log("Search data -> ",o);case 20:case"end":return t.stop()}}),t,null,[[2,15]])})));return function(){return t.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:d?Object(n.jsxs)(Y.a,{component:"flex",style:{height:"100%",width:"100%"},spacing:2,children:[Object(n.jsx)(_,{steps:N,activePage:B,onBack:function(){T((function(e){return e-1}))},onNext:function(){T((function(e){return e+1}))}}),Object(n.jsxs)(v.a,{container:!0,spacing:2,children:[Object(n.jsx)(v.a,{item:!0,xs:12,children:Object(n.jsx)(Y.a,{className:t.row,children:ne((function(t,a){return Object(n.jsx)(n.Fragment,{children:O?Object(n.jsx)(V,{}):Object(n.jsx)(Q,{movie:t,loading:O,disableNominations:W,onSearchEntryClicked:e.onSearchEntryClicked,onNominateClicked:e.onNominateClicked})})}),0,parseInt(D.length/2),D)})}),Object(n.jsx)(v.a,{item:!0,xs:12,children:Object(n.jsx)(Y.a,{className:t.row,children:ne((function(t,a){return Object(n.jsx)(n.Fragment,{children:O?Object(n.jsx)(V,{}):Object(n.jsx)(Q,{movie:t,loading:O,disableNominations:W,onSearchEntryClicked:e.onSearchEntryClicked,onNominateClicked:e.onNominateClicked})})}),parseInt(D.length/2),D.length,D)})})]})]}):null})},ce=a(95),oe=a(209),se=a(210),re=a(211),le=(a(151),a(67)),je=a.n(le),de=a.p+"static/media/shopify.0d7bd304.svg",he=function(e){var t=Object(i.useState)(!0),a=Object(l.a)(t,2),c=a[0],o=a[1],s=Object(i.useState)(""),r=Object(l.a)(s,2),j=r[0],d=r[1];Object(i.useEffect)((function(){w()}),[e.landing]);var h=Object(i.useState)({"& .MuiOutlinedInput-root":{borderRadius:"20vh"}}),m=Object(l.a)(h,2),O=m[0],u=m[1],g=Object(i.useState)({paddingTop:"25vh",paddingBottom:"16px",alignItems:"center"}),x=Object(l.a)(g,2),p=x[0],f=x[1],w=function(){0==e.landing?(f({paddingTop:"0vh",paddingBottom:"1vh",alignItems:"center"}),u({paddingTop:"16px"})):f({paddingTop:"25vh",paddingBottom:"16px",alignItems:"center"}),o(e.landing)},S=Object(b.a)((function(e){return{textField:{"& .MuiOutlinedInput-root":{background:e.palette.background.paper,borderRadius:"20vh"}},input:{color:e.palette.text.primary},icon:{height:"30vh",width:"30vh",fill:"red"},banner:{paddingBottom:e.spacing(4)},iconRoot:{textAlign:"center",height:"100%",width:"100%"},shoppies:{fontFamily:"Roboto"},homeIcon:{color:e.palette.primary.main,fontSize:"3rem",marginLeft:"1rem",marginTop:".3rem"}}}))();return Object(n.jsxs)(v.a,{container:!0,style:p,children:[c?Object(n.jsxs)(v.a,{item:!0,container:!0,xs:12,justify:"flex-start",alignItems:"center",className:S.banner,children:[Object(n.jsx)(v.a,{item:!0,xs:3}),Object(n.jsx)(v.a,{item:!0,children:Object(n.jsx)(oe.a,{className:S.iconRoot,children:Object(n.jsx)("img",{src:de,className:S.icon})})}),Object(n.jsx)(v.a,{item:!0,children:Object(n.jsx)(se.a,{orientation:"vertical"})}),Object(n.jsx)(v.a,{item:!0,xs:3,children:Object(n.jsx)(k.a,{variant:"h1",className:S.shoppies,children:"the shoppies"})})]}):null,Object(n.jsxs)(v.a,{item:!0,container:!0,xs:12,justify:"center",alignItems:"stretch",children:[Object(n.jsx)(v.a,{item:!0,xs:c?3:1,children:c?null:Object(n.jsx)(re.a,{edge:"start",color:"inherit","aria-label":"home",onClick:function(t){d(""),e.onHomeClick()},children:Object(n.jsx)(H.a,{className:S.homeIcon})})}),Object(n.jsx)(v.a,{item:!0,xs:c?6:10,children:Object(n.jsx)(R.a,{className:S.textField,style:O,placeholder:"Search to nominate your top 5 favorite movies & series.",fullWidth:!0,variant:"outlined",onChange:function(t){d(t.target.value),e.setSearchTerm(t.target.value)},value:j,InputProps:{className:S.input,startAdornment:Object(n.jsx)(P.a,{children:Object(n.jsx)(re.a,{children:Object(n.jsx)(je.a,{})})})}})}),Object(n.jsx)(v.a,{item:!0,xs:c?3:1})]})]})},be=Object(b.a)((function(e){return{nominationsHeader:{paddingLeft:"1%",fontFamily:"Open Sans Light",width:"100%"}}}));var me=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(i.useState)(!1),s=Object(l.a)(o,2),b=(s[0],s[1]),m=Object(i.useState)(!1),O=Object(l.a)(m,2),u=O[0],g=O[1],x=Object(i.useState)(1),p=Object(l.a)(x,2),w=(p[0],p[1],Object(i.useState)([])),S=Object(l.a)(w,2),y=S[0],N=S[1],k=Object(i.useState)(1),C=Object(l.a)(k,2),I=(C[0],C[1],Object(i.useState)(!1)),F=Object(l.a)(I,2),B=F[0],T=F[1],E=Object(i.useState)(!1),M=Object(l.a)(E,2),L=(M[0],M[1]),D=Object(i.useState)(!0),P=Object(l.a)(D,2),R=P[0],W=P[1],A=Object(i.useState)(!1),H=Object(l.a)(A,2),J=(H[0],H[1]),G=Object(i.useState)({}),q=Object(l.a)(G,2);q[0],q[1],Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("omdb-app-nominations"));console.log("Nominated movies local storage ",e),e&&N(e)}),[]),Object(i.useEffect)((function(){a.length>0?(W(!1),b(!0)):0===a.length&&(b(!1),J(!1)),y.length>0&&(W(!1),g(!0))}),[a,y]);var K=function(e){localStorage.setItem("omdb-app-nominations",JSON.stringify(e))},Q=(be(),Object(d.a)({}));return Object(d.a)({palette:{primary:{main:"#BB86FC"},background:{default:"#121212",paper:"#1e1e1e"},text:{primary:"#e3e3e3",secondary:"#a5a5a5",disabled:"#BB86FC"},action:{active:"#e3e3e3",disabledBackground:"#BB86FC"},divider:"#BB86FC",searchfield:"#2f2f2f"}}),Object(d.a)({}),Object(n.jsxs)(h.a,{theme:Q,children:[Object(n.jsx)(j.a,{}),Object(n.jsx)(ce.a,{children:Object(n.jsx)("title",{children:"OMDb Movies"})}),Object(n.jsx)(Y.a,{children:Object(n.jsxs)(v.a,{container:!0,direction:"row",alignItems:"stretch",children:[Object(n.jsx)(v.a,{item:!0,xs:12,children:Object(n.jsx)(he,{landing:R,onHomeClick:function(){c(""),N([]),W(!0)},setSearchTerm:c})}),Object(n.jsx)(v.a,{item:!0,xs:1}),R?null:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(v.a,{item:!0,container:!0,xs:7,alignItems:"stretch",children:Object(n.jsx)(ie,{searchTerm:a,onNominateClicked:function(e){if(y.length<4){e.disableNominate=!0;var t=[].concat(Object(r.a)(y),[e]);N(t),K(t)}else if(4===y.length){e.disableNominate=!0;var a=[].concat(Object(r.a)(y),[e]);N(a),K(a),T(!0)}else T(!0)},nominatedMoviesList:y})}),Object(n.jsx)(v.a,{item:!0,container:!0,direction:"row",xs:3,spacing:2,alignItems:"stretch",children:Object(n.jsx)(z,{movies:y,setNominationsCompleted:L,onRemoveNominationClicked:function(e){e.disableNominate=!1;var t=y.filter((function(t){return t.imdbID!==e.imdbID}));T(!1),N(t),K(t)}})}),Object(n.jsx)(v.a,{item:!0,xs:1})]})]})}),Object(n.jsx)(f,{hideButton:u,open:B,nominations:y})]})},Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,220)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),c(e),o(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(me,{})}),document.getElementById("root")),Oe()}},[[152,1,2]]]);
//# sourceMappingURL=main.3f6365fe.chunk.js.map