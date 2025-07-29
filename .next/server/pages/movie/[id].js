"use strict";(()=>{var e={};e.id=937,e.ids=[937,888,660],e.modules={4452:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.r(t),i.d(t,{config:()=>x,default:()=>p,getServerSideProps:()=>h,getStaticPaths:()=>m,getStaticProps:()=>g,reportWebVitals:()=>f,routeModule:()=>j,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>$,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>u});var r=i(7093),n=i(5244),a=i(1323),s=i(5211),c=i(4561),d=i(6735),l=e([d]);d=(l.then?(await l)():l)[0];let p=(0,a.l)(d,"default"),g=(0,a.l)(d,"getStaticProps"),m=(0,a.l)(d,"getStaticPaths"),h=(0,a.l)(d,"getServerSideProps"),x=(0,a.l)(d,"config"),f=(0,a.l)(d,"reportWebVitals"),u=(0,a.l)(d,"unstable_getStaticProps"),b=(0,a.l)(d,"unstable_getStaticPaths"),v=(0,a.l)(d,"unstable_getStaticParams"),w=(0,a.l)(d,"unstable_getServerProps"),$=(0,a.l)(d,"unstable_getServerSideProps"),j=new r.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/movie/[id]",pathname:"/movie/[id]",bundlePath:"",filename:""},components:{App:c.default,Document:s.default},userland:d});o()}catch(e){o(e)}})},232:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=i(997),n=i(6689),a=i(1163),s=i(9500),c=i(985),d=i(5894),l=i(71),p=i(6448),g=i(6363),m=e([s,l]);[s,l]=m.then?(await m)():m;let __WEBPACK_DEFAULT_EXPORT__=({movie:e})=>{var t;let i=(0,a.useRouter)(),o=(0,d.a)(),[m,h]=(0,n.useState)(!1),[x,f]=(0,n.useState)([]),[u,b]=(0,n.useState)(!1);(0,n.useEffect)(()=>{h(c.I.isFavorite(e.id));let loadRecommendations=async()=>{try{b(!0);let t=await s.W.getRecommendations(e.id.toString());f(t.slice(0,12))}catch(e){console.error("Failed to load recommendations:",e)}finally{b(!1)}};loadRecommendations()},[e.id]);let v=e.backdrop_path?(0,s.J)(e.backdrop_path,"w1280"):"/placeholder-movie.svg",w=e.poster_path?(0,s.J)(e.poster_path,"w500"):"/placeholder-movie.svg",$=e.release_date?new Date(e.release_date).getFullYear():"TBA";return(0,r.jsxs)(g.dq,{children:[(0,r.jsxs)(g.DH,{children:[r.jsx(g.bk,{children:r.jsx(g.N_,{src:v,alt:e.title,width:1280,height:400,priority:!0})}),(0,r.jsxs)(g.k_,{children:[r.jsx(g.ob,{children:r.jsx(g.Tx,{src:w,alt:e.title,width:300,height:450,priority:!0})}),(0,r.jsxs)(g.Zx,{children:[(0,r.jsxs)("div",{children:[r.jsx(g.rS,{children:e.title}),e.tagline&&(0,r.jsxs)(g.hM,{children:["“",e.tagline,"”"]})]}),(0,r.jsxs)(g.Vb,{children:[(0,r.jsxs)(g.y1,{children:[r.jsx(g.W$,{children:"Year"}),r.jsx(g.vB,{children:$})]}),e.runtime&&(0,r.jsxs)(g.y1,{children:[r.jsx(g.W$,{children:"Runtime"}),r.jsx(g.vB,{children:(t=e.runtime,`${Math.floor(t/60)}h ${t%60}m`)})]}),(0,r.jsxs)(g.y1,{children:[r.jsx(g.W$,{children:"Rating"}),(0,r.jsxs)(g.gs,{children:[r.jsx(g.lc,{$score:e.vote_average,children:e.vote_average.toFixed(1)}),r.jsx(g.TE,{children:"⭐"}),(0,r.jsxs)(g.vB,{children:["(",e.vote_count.toLocaleString()," votes)"]})]})]})]}),e.genres&&e.genres.length>0&&r.jsx(g.LK,{children:e.genres.map(e=>r.jsx(g.Eb,{children:e.name},e.id))}),e.overview&&(0,r.jsxs)(g.g2,{children:[r.jsx(g.Ju,{children:"Overview"}),r.jsx(g.SY,{children:e.overview})]}),(0,r.jsxs)(g.EY,{children:[(0,r.jsxs)(g._6,{onClick:()=>{m?(c.I.removeFavorite(e.id),o.info(`Removed "${e.title}" from favorites`)):(c.I.addFavorite(e),o.success(`Added "${e.title}" to favorites`)),h(!m)},$isFavorite:m,children:[r.jsx("span",{children:m?"❤️":"\uD83E\uDD0D"}),m?"Remove from Favorites":"Add to Favorites"]}),(0,r.jsxs)(g.xE,{onClick:()=>{i.back()},children:[r.jsx("span",{children:"←"}),"Back"]})]})]})]})]}),x.length>0&&(0,r.jsxs)(g.wg,{children:[r.jsx(g.NZ,{children:"You Might Also Like"}),u?r.jsx(p.Z,{}):r.jsx(l.Z,{movies:x})]})]})};o()}catch(e){o(e)}})},6363:(e,t,i)=>{i.d(t,{DH:()=>c,EY:()=>P,Eb:()=>S,Ju:()=>k,LK:()=>_,NZ:()=>q,N_:()=>l,SY:()=>I,TE:()=>y,Tx:()=>m,Vb:()=>u,W$:()=>v,Zx:()=>h,_6:()=>E,bk:()=>d,dq:()=>s,g2:()=>C,gs:()=>$,hM:()=>f,k_:()=>p,lc:()=>j,ob:()=>g,rS:()=>x,vB:()=>w,wg:()=>z,xE:()=>R,y1:()=>b});var o=i(7518),r=i.n(o),n=i(5675),a=i.n(n);let s=r().div.withConfig({componentId:"sc-cc56863a-0"})`
  max-width: 1200px;
  margin: 0 auto;
`,c=r().div.withConfig({componentId:"sc-cc56863a-1"})`
  position: relative;
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.surface} 0%, ${({theme:e})=>e.colors.background} 100%);
`,d=r().div.withConfig({componentId:"sc-cc56863a-2"})`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    height: 250px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.3) 0%,
      rgba(20, 20, 20, 0.8) 100%
    );
  }
`,l=r()(a()).withConfig({componentId:"sc-cc56863a-3"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,p=r().div.withConfig({componentId:"sc-cc56863a-4"})`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: ${({theme:e})=>e.spacing.xl};
  padding: ${({theme:e})=>e.spacing.xl};
  margin-top: -100px;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing.lg};
    padding: ${({theme:e})=>e.spacing.lg};
    margin-top: -50px;
  }
`,g=r().div.withConfig({componentId:"sc-cc56863a-5"})`
  position: relative;
  aspect-ratio: 2/3;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.lg};
  transition: ${({theme:e})=>e.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    max-width: 250px;
    margin: 0 auto;
  }
`,m=r()(a()).withConfig({componentId:"sc-cc56863a-6"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,h=r().div.withConfig({componentId:"sc-cc56863a-7"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
  padding-top: ${({theme:e})=>e.spacing.md};
`,x=r().h1.withConfig({componentId:"sc-cc56863a-8"})`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text.primary};
  line-height: 1.2;
  margin-bottom: ${({theme:e})=>e.spacing.sm};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 2rem;
    text-align: center;
  }
`,f=r().p.withConfig({componentId:"sc-cc56863a-9"})`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-style: italic;
  margin-bottom: ${({theme:e})=>e.spacing.md};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    text-align: center;
  }
`,u=r().div.withConfig({componentId:"sc-cc56863a-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    justify-content: center;
  }
`,b=r().div.withConfig({componentId:"sc-cc56863a-11"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
`,v=r().span.withConfig({componentId:"sc-cc56863a-12"})`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text.muted};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
`,w=r().span.withConfig({componentId:"sc-cc56863a-13"})`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: 500;
`,$=r().div.withConfig({componentId:"sc-cc56863a-14"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,j=r().span.withConfig({componentId:"sc-cc56863a-15"})`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({theme:e,$score:t})=>t>=7?e.colors.accent:t>=5?e.colors.warning:e.colors.error};
`,y=r().span.withConfig({componentId:"sc-cc56863a-16"})`
  color: ${({theme:e})=>e.colors.warning};
  font-size: 1.1rem;
`,_=r().div.withConfig({componentId:"sc-cc56863a-17"})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    justify-content: center;
  }
`,S=r().span.withConfig({componentId:"sc-cc56863a-18"})`
  background-color: ${({theme:e})=>e.colors.primary}20;
  color: ${({theme:e})=>e.colors.primary};
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid ${({theme:e})=>e.colors.primary}40;
`,C=r().div.withConfig({componentId:"sc-cc56863a-19"})`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,k=r().h3.withConfig({componentId:"sc-cc56863a-20"})`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,I=r().p.withConfig({componentId:"sc-cc56863a-21"})`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.text.secondary};
`,P=r().div.withConfig({componentId:"sc-cc56863a-22"})`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex-direction: column;
  }
`,E=r().button.withConfig({componentId:"sc-cc56863a-23"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.xl};
  background-color: ${({theme:e,$isFavorite:t})=>t?e.colors.primary:"transparent"};
  color: ${({theme:e,$isFavorite:t})=>t?e.colors.text.primary:e.colors.primary};
  border: 2px solid ${({theme:e})=>e.colors.primary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text.primary};
    transform: translateY(-2px);
  }
`,R=r().button.withConfig({componentId:"sc-cc56863a-24"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.xl};
  background-color: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  border: 2px solid ${({theme:e})=>e.colors.text.muted};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.text.secondary};
    transform: translateY(-2px);
  }
`,z=r().section.withConfig({componentId:"sc-cc56863a-25"})`
  margin-top: ${({theme:e})=>e.spacing.xxl};
  padding-top: ${({theme:e})=>e.spacing.xxl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,q=r().h2.withConfig({componentId:"sc-cc56863a-26"})`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  text-align: center;
`},6735:(e,t,i)=>{i.a(e,async(e,o)=>{try{i.r(t),i.d(t,{default:()=>MoviePage,getServerSideProps:()=>getServerSideProps});var r=i(997),n=i(968),a=i.n(n),s=i(1003),c=i(232),d=i(2698),l=i(9500),p=e([c,l]);function MoviePage({movie:e}){return e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsxs)("title",{children:[e.title," - ALX Movie Nexus"]}),r.jsx("meta",{name:"description",content:e.overview})]}),r.jsx(s.Z,{children:r.jsx(d.Z,{children:r.jsx(c.Z,{movie:e})})})]}):r.jsx(s.Z,{children:r.jsx("div",{children:"Movie not found"})})}[c,l]=p.then?(await p)():p;let getServerSideProps=async({params:e})=>{try{let t=e?.id,i=await l.W.getMovieDetails(t);return{props:{movie:i}}}catch(e){return{props:{movie:null}}}};o()}catch(e){o(e)}})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7518:e=>{e.exports=require("styled-components")},9648:e=>{e.exports=import("axios")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},7310:e=>{e.exports=require("url")},9796:e=>{e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),i=t.X(0,[859,510,640,561,211,66],()=>__webpack_exec__(4452));module.exports=i})();