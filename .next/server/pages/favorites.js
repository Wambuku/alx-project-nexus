"use strict";(()=>{var e={};e.id=389,e.ids=[389,888,660],e.modules={7353:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>p,getServerSideProps:()=>g,getStaticPaths:()=>x,getStaticProps:()=>u,reportWebVitals:()=>m,routeModule:()=>b,unstable_getServerProps:()=>f,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>_,unstable_getStaticProps:()=>v});var a=r(7093),i=r(5244),o=r(1323),n=r(5211),c=r(4561),l=r(1691),d=e([l]);l=(d.then?(await d)():d)[0];let p=(0,o.l)(l,"default"),u=(0,o.l)(l,"getStaticProps"),x=(0,o.l)(l,"getStaticPaths"),g=(0,o.l)(l,"getServerSideProps"),h=(0,o.l)(l,"config"),m=(0,o.l)(l,"reportWebVitals"),v=(0,o.l)(l,"unstable_getStaticProps"),_=(0,o.l)(l,"unstable_getStaticPaths"),S=(0,o.l)(l,"unstable_getStaticParams"),f=(0,o.l)(l,"unstable_getServerProps"),P=(0,o.l)(l,"unstable_getServerSideProps"),b=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/favorites",pathname:"/favorites",bundlePath:"",filename:""},components:{App:c.default,Document:n.default},userland:l});s()}catch(e){s(e)}})},59:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=r(997),i=r(6689),o=r(71);r(985);var n=r(9241),c=e([o]);o=(c.then?(await c)():c)[0];let __WEBPACK_DEFAULT_EXPORT__=()=>{let[e,t]=(0,i.useState)([]),[r,s]=(0,i.useState)(!1),loadFavorites=()=>{};return((0,i.useEffect)(()=>{s(!0),loadFavorites()},[]),r)?0===e.length?(0,a.jsxs)(n.gE,{children:[a.jsx(n.y_,{children:"My Favorite Movies"}),(0,a.jsxs)(n.xS,{children:[a.jsx("p",{children:"You haven't added any favorite movies yet."}),a.jsx("p",{children:"Browse movies and click the heart icon to add them to your favorites!"})]})]}):(0,a.jsxs)(n.gE,{children:[(0,a.jsxs)(n.y_,{children:["My Favorite Movies (",e.length,")"]}),a.jsx(o.Z,{movies:e,onFavoriteToggle:()=>{loadFavorites()}})]}):(0,a.jsxs)(n.gE,{children:[a.jsx(n.y_,{children:"My Favorite Movies"}),a.jsx(n.xS,{children:a.jsx("p",{children:"Loading your favorites..."})})]})};s()}catch(e){s(e)}})},9241:(e,t,r)=>{r.d(t,{gE:()=>i,xS:()=>n,y_:()=>o});var s=r(7518),a=r.n(s);let i=a().div.withConfig({componentId:"sc-c8e6e1b4-0"})`
  max-width: 1200px;
  margin: 0 auto;
`,o=a().h1.withConfig({componentId:"sc-c8e6e1b4-1"})`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  color: ${({theme:e})=>e.colors.text.primary};
  text-align: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 1.5rem;
    margin-bottom: ${({theme:e})=>e.spacing.lg};
  }
`,n=a().div.withConfig({componentId:"sc-c8e6e1b4-2"})`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  color: ${({theme:e})=>e.colors.text.secondary};
  
  p {
    font-size: 1.1rem;
    margin-bottom: ${({theme:e})=>e.spacing.md};
    
    &:last-child {
      color: ${({theme:e})=>e.colors.text.muted};
      font-size: 1rem;
    }
  }
`},1691:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>FavoritesPage,getStaticProps:()=>getStaticProps});var a=r(997),i=r(968),o=r.n(i),n=r(1003),c=r(59),l=r(2698),d=e([c]);function FavoritesPage(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[a.jsx("title",{children:"My Favorites - ALX Movie Nexus"}),a.jsx("meta",{name:"description",content:"Your saved favorite movies"})]}),a.jsx(n.Z,{children:a.jsx(l.Z,{children:a.jsx(c.Z,{})})})]})}async function getStaticProps(){return{props:{}}}c=(d.then?(await d)():d)[0],s()}catch(e){s(e)}})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7518:e=>{e.exports=require("styled-components")},9648:e=>{e.exports=import("axios")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},7310:e=>{e.exports=require("url")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[859,510,640,561,211,66],()=>__webpack_exec__(7353));module.exports=r})();