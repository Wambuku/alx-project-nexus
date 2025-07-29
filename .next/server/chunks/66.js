"use strict";exports.id=66,exports.ids=[66],exports.modules={1003:(e,o,t)=>{t.d(o,{Z:()=>components_Layout});var a=t(997),r=t(6689),i=t(1664),n=t.n(i),s=t(1163),l=t(7518),d=t.n(l);let c=d().div.withConfig({componentId:"sc-98995f2f-0"})`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,p=d().header.withConfig({componentId:"sc-98995f2f-1"})`
  background-color: ${({theme:e})=>e.colors.surface};
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({theme:e})=>e.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: ${({theme:e})=>e.spacing.md};
  }
`,g=d().h1.withConfig({componentId:"sc-98995f2f-2"})`
  color: ${({theme:e})=>e.colors.primary};
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    opacity: 0.8;
  }
`,m=d().nav.withConfig({componentId:"sc-98995f2f-3"})`
  display: flex;
  gap: ${({theme:e})=>e.spacing.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    gap: ${({theme:e})=>e.spacing.md};
  }
`,h=d().a.withConfig({componentId:"sc-98995f2f-4"})`
  color: ${({theme:e,$active:o})=>o?e.colors.primary:e.colors.text.secondary};
  font-weight: ${({$active:e})=>e?"600":"400"};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    background-color: rgba(229, 9, 20, 0.1);
  }
`,u=d().main.withConfig({componentId:"sc-98995f2f-5"})`
  flex: 1;
  padding: ${({theme:e})=>e.spacing.xl};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.md};
  }
`,f=d().footer.withConfig({componentId:"sc-98995f2f-6"})`
  background-color: ${({theme:e})=>e.colors.surface};
  padding: ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.xl};
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.md};
  }
`,v=d().p.withConfig({componentId:"sc-98995f2f-7"})`
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: 0.875rem;
`,Layout_Header=()=>{let e=(0,s.useRouter)();return(0,a.jsxs)(p,{children:[a.jsx(n(),{href:"/",children:a.jsx(g,{children:"ALX Movie Nexus"})}),(0,a.jsxs)(m,{children:[a.jsx(n(),{href:"/",children:a.jsx(h,{as:"span",$active:"/"===e.pathname,children:"Home"})}),a.jsx(n(),{href:"/favorites",children:a.jsx(h,{as:"span",$active:"/favorites"===e.pathname,children:"Favorites"})})]})]})},Layout_Footer=()=>a.jsx(f,{children:a.jsx(v,{children:"\xa9 2024 ALX Movie Nexus - Built for ProDev Frontend Engineering Program"})}),b=d().button.withConfig({componentId:"sc-71de4d3c-0"})`
  position: fixed;
  bottom: ${({theme:e})=>e.spacing.xl};
  right: ${({theme:e})=>e.spacing.xl};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.text.primary};
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
  transition: all ${({theme:e})=>e.transitions.normal};
  opacity: ${({$isVisible:e})=>e?1:0};
  visibility: ${({$isVisible:e})=>e?"visible":"hidden"};
  transform: ${({$isVisible:e})=>e?"translateY(0)":"translateY(20px)"};
  box-shadow: ${({theme:e})=>e.shadows.lg};

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary}dd;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(229, 9, 20, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    bottom: ${({theme:e})=>e.spacing.lg};
    right: ${({theme:e})=>e.spacing.lg};
    width: 45px;
    height: 45px;
    font-size: 1.25rem;
  }
`,components_ScrollToTop=()=>{let[e,o]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let toggleVisibility=()=>{window.pageYOffset>300?o(!0):o(!1)};return window.addEventListener("scroll",toggleVisibility),()=>window.removeEventListener("scroll",toggleVisibility)},[]),a.jsx(b,{$isVisible:e,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"Scroll to top",children:"↑"})},components_Layout=({children:e})=>(0,a.jsxs)(c,{children:[a.jsx(Layout_Header,{}),a.jsx(u,{children:e}),a.jsx(Layout_Footer,{}),a.jsx(components_ScrollToTop,{})]})},6448:(e,o,t)=>{t.d(o,{Z:()=>components_LoadingSpinner});var a=t(997);t(6689);var r=t(7518),i=t.n(r);let n=r.keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,s=r.keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,l=r.keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -8px, 0); }
  70% { transform: translate3d(0, -4px, 0); }
  90% { transform: translate3d(0, -2px, 0); }
`,d=i().div.withConfig({componentId:"sc-65c8d85e-0"})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,c=i().div.withConfig({componentId:"sc-65c8d85e-1"})`
  border: 3px solid ${({theme:e})=>e.colors.surface};
  border-top: 3px solid ${({theme:e})=>e.colors.primary};
  border-radius: 50%;
  width: ${({$size:e})=>{switch(e){case"small":return"20px";case"large":return"60px";default:return"40px"}}};
  height: ${({$size:e})=>{switch(e){case"small":return"20px";case"large":return"60px";default:return"40px"}}};
  animation: ${n} 1s linear infinite;
`,p=i().p.withConfig({componentId:"sc-65c8d85e-2"})`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 0.875rem;
  animation: ${s} 1.5s ease-in-out infinite;
`,g=i().div.withConfig({componentId:"sc-65c8d85e-3"})`
  display: flex;
  gap: 4px;
  
  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.primary};
    animation: ${l} 1.4s ease-in-out infinite both;
    
    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
    &:nth-child(3) { animation-delay: 0s; }
  }
`,components_LoadingSpinner=({size:e="medium",text:o="Loading...",variant:t="spinner"})=>(0,a.jsxs)(d,{children:["spinner"===t?a.jsx(c,{$size:e}):(0,a.jsxs)(g,{children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),o&&a.jsx(p,{children:o})]})},8269:(e,o,t)=>{t.a(e,async(e,a)=>{try{t.d(o,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=t(997),i=t(6689),n=t.n(i),s=t(1163),l=t(9500),d=t(985),c=t(5894),p=t(8075),g=e([l]);l=(g.then?(await g)():g)[0];let __WEBPACK_DEFAULT_EXPORT__=({movie:e,onFavoriteToggle:o})=>{let[t,a]=n().useState(!1),[i,g]=n().useState(!1),m=(0,s.useRouter)(),h=(0,c.a)();n().useEffect(()=>{g(!0),a(d.I.isFavorite(e.id))},[e.id]);let u=e.release_date?new Date(e.release_date).getFullYear():"TBA",f=e.poster_path?(0,l.J)(e.poster_path,"w500"):"/placeholder-movie.svg";return(0,r.jsxs)(p._L,{onClick:()=>{m.push(`/movie/${e.id}`)},children:[(0,r.jsxs)(p.mo,{children:[r.jsx(p.jx,{src:f,alt:e.title,width:300,height:450,priority:!1}),i&&r.jsx(p._6,{onClick:r=>{r.preventDefault(),r.stopPropagation(),t?(d.I.removeFavorite(e.id),h.info(`Removed "${e.title}" from favorites`)):(d.I.addFavorite(e),h.success(`Added "${e.title}" to favorites`)),a(!t),o?.()},$isFavorite:t,children:r.jsx(p.h_,{$isFavorite:t,children:"♥"})})]}),(0,r.jsxs)(p.Zx,{children:[r.jsx(p.rS,{children:e.title}),(0,r.jsxs)(p.Vb,{children:[r.jsx(p.UD,{children:u}),(0,r.jsxs)(p.iG,{children:[r.jsx("span",{className:"star",children:"⭐"}),e.vote_average.toFixed(1)]})]})]})]})};a()}catch(e){a(e)}})},8075:(e,o,t)=>{t.d(o,{UD:()=>w,Vb:()=>x,Zx:()=>v,_6:()=>u,_L:()=>g,h_:()=>f,iG:()=>y,jx:()=>h,mo:()=>m,rS:()=>b});var a=t(7518),r=t.n(a),i=t(5675),n=t.n(i);let s=a.keyframes`
  0% { 
    transform: translateY(0) scale(1); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  100% { 
    transform: translateY(-8px) scale(1.03); 
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`,l=a.keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`,d=a.keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`,c=a.keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,p=a.keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`,g=r().div.withConfig({componentId:"sc-dac7124e-0"})`
  background: linear-gradient(145deg, ${({theme:e})=>e.colors.surface}, ${({theme:e})=>e.colors.background});
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
  animation: ${c} 0.6s ease-out;

  &:hover {
    animation: ${s} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    border-color: ${({theme:e})=>e.colors.primary}40;
  }

  &:active {
    transform: translateY(-6px) scale(0.98);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }

  &:hover::before {
    opacity: 1;
  }
`,m=r().div.withConfig({componentId:"sc-dac7124e-1"})`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.surface} 0%,
    ${({theme:e})=>e.colors.background} 50%,
    ${({theme:e})=>e.colors.surface} 100%
  );
  background-size: 200px 100%;
  animation: ${d} 1.5s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  ${g}:hover &::after {
    opacity: 1;
  }
`,h=r()(n()).withConfig({componentId:"sc-dac7124e-2"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  filter: brightness(0.9) contrast(1.1);

  ${g}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }

  &[src*="placeholder"] {
    filter: grayscale(0.3) brightness(0.7);
  }
`,u=r().button.withConfig({componentId:"sc-dac7124e-3"})`
  position: absolute;
  top: ${({theme:e})=>e.spacing.md};
  right: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e,$isFavorite:o})=>o?`linear-gradient(135deg, ${e.colors.primary}, ${e.colors.primary}dd)`:"rgba(0, 0, 0, 0.8)"};
  border: 2px solid ${({theme:e,$isFavorite:o})=>o?e.colors.primary:"rgba(255, 255, 255, 0.2)"};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: scale(0.8);
  backdrop-filter: blur(10px);
  z-index: 2;

  ${g}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    background: ${({theme:e,$isFavorite:o})=>o?`linear-gradient(135deg, ${e.colors.primary}dd, ${e.colors.primary})`:"rgba(0, 0, 0, 0.95)"};
    transform: scale(1.15);
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 8px 25px rgba(229, 9, 20, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`,f=r().span.withConfig({componentId:"sc-dac7124e-4"})`
  color: ${({theme:e,$isFavorite:o})=>o?e.colors.text.primary:e.colors.text.secondary};
  font-size: 1.3rem;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

  ${({$isFavorite:e})=>e&&a.css`
    animation: ${l} 0.6s ease-in-out;
    color: ${({theme:e})=>e.colors.text.primary};
  `}
`,v=r().div.withConfig({componentId:"sc-dac7124e-5"})`
  padding: ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.md};
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.05) 100%
  );
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({theme:e})=>e.colors.primary}40,
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${g}:hover &::before {
    opacity: 1;
  }
`,b=r().h3.withConfig({componentId:"sc-dac7124e-6"})`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease;

  ${g}:hover & {
    color: ${({theme:e})=>e.colors.primary};
  }
`,x=r().div.withConfig({componentId:"sc-dac7124e-7"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,w=r().p.withConfig({componentId:"sc-dac7124e-8"})`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.text.muted};
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  border: 1px solid rgba(255, 255, 255, 0.1);
`,y=r().div.withConfig({componentId:"sc-dac7124e-9"})`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.warning};
  font-weight: 600;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.warning}20, ${({theme:e})=>e.colors.warning}10);
  padding: 4px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.warning}30;
  transition: all 0.3s ease;

  &:hover {
    animation: ${p} 0.6s ease-in-out;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.warning}30, ${({theme:e})=>e.colors.warning}20);
  }

  .star {
    font-size: 1rem;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
  }
`},71:(e,o,t)=>{t.a(e,async(e,a)=>{try{t.d(o,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=t(997);t(6689);var i=t(8269),n=t(6448),s=t(7169),l=e([i]);i=(l.then?(await l)():l)[0];let __WEBPACK_DEFAULT_EXPORT__=({movies:e,loading:o=!1,error:t=null,onLoadMore:a,hasMore:l=!1,onFavoriteToggle:d})=>t?(0,r.jsxs)(s.ub,{children:[r.jsx("div",{className:"icon",children:"⚠️"}),r.jsx("div",{className:"message",children:"Oops! Something went wrong"}),r.jsx("div",{className:"submessage",children:t})]}):o&&0===e.length?r.jsx(n.Z,{}):o||0!==e.length?(0,r.jsxs)(r.Fragment,{children:[r.jsx(s.T5,{children:e.map(e=>r.jsx(i.Z,{movie:e,onFavoriteToggle:d},e.id))}),l&&a&&r.jsx(s.nw,{onClick:a,disabled:o,children:o?"Loading...":"Load More"})]}):(0,r.jsxs)(s.ub,{children:[r.jsx("div",{className:"icon",children:"\uD83C\uDFAC"}),r.jsx("div",{className:"message",children:"No movies found"}),r.jsx("div",{className:"submessage",children:"Try adjusting your search or browse our trending movies"})]});a()}catch(e){a(e)}})},7169:(e,o,t)=>{t.d(o,{T5:()=>i,nw:()=>s,ub:()=>n});var a=t(7518),r=t.n(a);let i=r().div.withConfig({componentId:"sc-40f2c454-0"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  padding: ${({theme:e})=>e.spacing.md};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: ${({theme:e})=>e.spacing.lg};
    padding: ${({theme:e})=>e.spacing.sm};
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({theme:e})=>e.spacing.md};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.large}) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: ${({theme:e})=>e.spacing.xxl};
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`,n=r().div.withConfig({componentId:"sc-40f2c454-1"})`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 1.1rem;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.surface}40, ${({theme:e})=>e.colors.background}40);
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  border: 2px dashed ${({theme:e})=>e.colors.text.muted}40;
  margin: ${({theme:e})=>e.spacing.xl} 0;

  .icon {
    font-size: 3rem;
    margin-bottom: ${({theme:e})=>e.spacing.md};
    opacity: 0.5;
  }

  .message {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: ${({theme:e})=>e.spacing.sm};
  }

  .submessage {
    font-size: 1rem;
    opacity: 0.7;
  }
`,s=r().button.withConfig({componentId:"sc-40f2c454-2"})`
  display: block;
  margin: ${({theme:e})=>e.spacing.xxl} auto;
  padding: ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.xxl};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.primary}dd);
  color: ${({theme:e})=>e.colors.text.primary};
  border: 2px solid transparent;
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 25px rgba(229, 9, 20, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}dd, ${({theme:e})=>e.colors.primary});
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 35px rgba(229, 9, 20, 0.4);
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`},2698:(e,o,t)=>{t.d(o,{Z:()=>components_PageTransition});var a=t(997);t(6689);var r=t(7518),i=t.n(r);let n=r.keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,s=i().div.withConfig({componentId:"sc-8fdbad50-0"})`
  width: 100%;
`,l=i().div.withConfig({componentId:"sc-8fdbad50-1"})`
  animation: ${n} 0.6s ease-out forwards;
  animation-delay: ${({$delay:e=0})=>e}ms;
  opacity: 0;
`,components_PageTransition=({children:e,delay:o=0})=>a.jsx(s,{children:a.jsx(l,{$delay:o,children:e})})},3566:(e,o,t)=>{t.a(e,async(e,a)=>{try{t.d(o,{B:()=>d});var r=t(9648),i=e([r]);r=(i.then?(await i)():i)[0];let n=process.env.NEXT_PUBLIC_OMDB_API_KEY,convertOMDbToMovie=(e,o)=>({id:parseInt(e.imdbID.replace("tt",""))||o,title:e.Title,overview:e.Plot||"No overview available",poster_path:"N/A"!==e.Poster?e.Poster:"/placeholder-movie.svg",backdrop_path:"N/A"!==e.Poster?e.Poster:"/placeholder-movie.svg",release_date:e.Year?`${e.Year}-01-01`:"2024-01-01",vote_average:e.imdbRating?parseFloat(e.imdbRating):7,vote_count:e.imdbVotes?parseInt(e.imdbVotes.replace(/,/g,"")):1e3,genre_ids:[18],adult:!1,original_language:"en",original_title:e.Title,popularity:e.imdbRating?10*parseFloat(e.imdbRating):70,video:!1}),s=["The Shawshank Redemption","The Godfather","The Dark Knight","Pulp Fiction","Forrest Gump","Inception","The Matrix","Goodfellas","The Lord of the Rings","Star Wars","Titanic","Avatar","Avengers","Spider-Man","Batman","Superman","Iron Man","Jurassic Park","Terminator","Back to the Future"],l=["Oppenheimer","Barbie","Spider-Man: No Way Home","Top Gun: Maverick","Black Panther","Dune","No Time to Die","Fast X"],d={getTrendingMovies:async()=>{if(!n)return console.warn("No OMDb API key found"),[];try{let e=l.slice(0,6).map(async(e,o)=>{let t=await r.default.get(n?`https://www.omdbapi.com/?t=${encodeURIComponent(e)}&apikey=${n}`:`https://www.omdbapi.com/?t=${encodeURIComponent(e)}&apikey=demo`);return"True"===t.data.Response?convertOMDbToMovie(t.data,o+100):null}),o=await Promise.all(e);return o.filter(e=>null!==e)}catch(e){return console.error("OMDb API error:",e),[]}},getPopularMovies:async(e=1)=>{if(!n)return{page:1,results:[],total_pages:1,total_results:0};try{let o=(e-1)*10,t=o+10,a=s.slice(o,t),i=a.map(async(e,t)=>{let a=await r.default.get(`https://www.omdbapi.com/?t=${encodeURIComponent(e)}&apikey=${n}`);return"True"===a.data.Response?convertOMDbToMovie(a.data,o+t):null}),l=await Promise.all(i),d=l.filter(e=>null!==e);return{page:e,results:d,total_pages:Math.ceil(s.length/10),total_results:s.length}}catch(e){return console.error("OMDb API error:",e),{page:1,results:[],total_pages:1,total_results:0}}},getMovieDetails:async e=>{if(!n)throw Error("No OMDb API key configured");try{let o=parseInt(e)%s.length,t=s[o],a=await r.default.get(`https://www.omdbapi.com/?t=${encodeURIComponent(t)}&plot=full&apikey=${n}`);if("True"===a.data.Response){let o=convertOMDbToMovie(a.data,parseInt(e));return{...o,genres:a.data.Genre?a.data.Genre.split(", ").map((e,o)=>({id:o,name:e})):[{id:1,name:"Drama"}],runtime:a.data.Runtime?parseInt(a.data.Runtime):120,budget:0,revenue:0,production_companies:[],production_countries:a.data.Country?a.data.Country.split(", ").map(e=>({iso_3166_1:"US",name:e})):[],spoken_languages:[],status:"Released",tagline:a.data.Plot||"A great movie"}}throw Error("Movie not found")}catch(e){throw console.error("OMDb API error:",e),Error("Movie not found")}},searchMovies:async(e,o=1)=>{if(!n)return{page:1,results:[],total_pages:1,total_results:0};try{let t=await r.default.get(`https://www.omdbapi.com/?s=${encodeURIComponent(e)}&page=${o}&apikey=${n}`);if("True"===t.data.Response){let e=t.data.Search.map((e,o)=>convertOMDbToMovie(e,o));return{page:o,results:e,total_pages:Math.ceil(t.data.totalResults/10),total_results:parseInt(t.data.totalResults)}}return{page:1,results:[],total_pages:1,total_results:0}}catch(e){return console.error("OMDb API error:",e),{page:1,results:[],total_pages:1,total_results:0}}},getRecommendations:async()=>{if(!n)return[];try{let e=[...s].sort(()=>.5-Math.random()),o=e.slice(0,4),t=o.map(async(e,o)=>{let t=await r.default.get(`https://www.omdbapi.com/?t=${encodeURIComponent(e)}&apikey=${n}`);return"True"===t.data.Response?convertOMDbToMovie(t.data,o+200):null}),a=await Promise.all(t);return a.filter(e=>null!==e)}catch(e){return console.error("OMDb API error:",e),[]}}};a()}catch(e){a(e)}})},9500:(e,o,t)=>{t.a(e,async(e,a)=>{try{t.d(o,{J:()=>getImageUrl,W:()=>g});var r=t(9648),i=t(3566),n=e([r,i]);[r,i]=n.then?(await n)():n;let s=process.env.NEXT_PUBLIC_OMDB_API_KEY,l="d17e2d864c0455c884123a0110983054",d="https://api.themoviedb.org/3";console.log("\uD83D\uDD27 Environment check:"),console.log("- TMDB_API_KEY:",l?`${l.substring(0,8)}...`:"NOT FOUND"),console.log("- NODE_ENV:","production");let c=[{id:1,title:"The Shawshank Redemption",overview:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",poster_path:"/placeholder-movie.svg",backdrop_path:"/placeholder-movie.svg",release_date:"1994-09-23",vote_average:9.3,vote_count:25e5,genre_ids:[18,80],adult:!1,original_language:"en",original_title:"The Shawshank Redemption",popularity:95.5,video:!1},{id:2,title:"The Godfather",overview:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",poster_path:"/placeholder-movie.svg",backdrop_path:"/placeholder-movie.svg",release_date:"1972-03-24",vote_average:9.2,vote_count:18e5,genre_ids:[18,80],adult:!1,original_language:"en",original_title:"The Godfather",popularity:92.1,video:!1},{id:3,title:"The Dark Knight",overview:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",poster_path:"/placeholder-movie.svg",backdrop_path:"/placeholder-movie.svg",release_date:"2008-07-18",vote_average:9,vote_count:22e5,genre_ids:[28,18,80],adult:!1,original_language:"en",original_title:"The Dark Knight",popularity:88.7,video:!1},{id:4,title:"Pulp Fiction",overview:"The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",poster_path:"/placeholder-movie.svg",backdrop_path:"/placeholder-movie.svg",release_date:"1994-10-14",vote_average:8.9,vote_count:19e5,genre_ids:[80,18],adult:!1,original_language:"en",original_title:"Pulp Fiction",popularity:85.3,video:!1},{id:5,title:"Forrest Gump",overview:"The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",poster_path:"/placeholder-movie.svg",backdrop_path:"/placeholder-movie.svg",release_date:"1994-07-06",vote_average:8.8,vote_count:21e5,genre_ids:[18,10749],adult:!1,original_language:"en",original_title:"Forrest Gump",popularity:82.9,video:!1},{id:6,title:"Inception",overview:"A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",poster_path:"/placeholder-movie.svg",backdrop_path:"/placeholder-movie.svg",release_date:"2010-07-16",vote_average:8.7,vote_count:2e6,genre_ids:[28,878,53],adult:!1,original_language:"en",original_title:"Inception",popularity:89.4,video:!1}],p=r.default.create({baseURL:d,params:{api_key:l}}),g={getTrendingMovies:async()=>{if(console.log("\uD83D\uDD11 TMDB_API_KEY:",l?`${l.substring(0,8)}...`:"NOT FOUND"),console.log("\uD83C\uDF10 TMDB_BASE_URL:",d),l)try{console.log("\uD83D\uDE80 Attempting TMDB API call for trending movies..."),console.log("\uD83D\uDCE1 Request URL:",`${d}/trending/movie/week?api_key=${l.substring(0,8)}...`);let e=await p.get("/trending/movie/week");return console.log("✅ TMDB API SUCCESS! Got",e.data.results.length,"movies"),console.log("\uD83C\uDFAC First movie:",e.data.results[0]?.title,"poster:",e.data.results[0]?.poster_path),e.data.results}catch(e){console.error("❌ TMDB API FAILED with error:",e),r.default.isAxiosError(e)&&(console.error("\uD83D\uDCCA Status:",e.response?.status),console.error("\uD83D\uDCDD Response:",e.response?.data),console.error("\uD83D\uDD17 URL:",e.config?.url)),console.warn("TMDB API failed, trying OMDb...")}else console.warn("⚠️ No TMDB API key found in environment variables");if(s)try{let e=await i.B.getTrendingMovies();if(e.length>0)return console.log("Using OMDb API for trending movies"),e}catch(e){console.warn("OMDb API failed...")}return console.log("⚠️ Using demo data for trending movies"),c.slice(0,4)},getPopularMovies:async(e=1)=>{if(l)try{console.log("Attempting TMDB API call for popular movies...");let o=await p.get("/movie/popular",{params:{page:e}});return console.log("✅ Using TMDB API for popular movies",o.data.results.length,"movies"),o.data}catch(e){console.error("❌ TMDB API failed:",e),console.warn("TMDB API failed, trying OMDb...")}else console.warn("⚠️ No TMDB API key found");if(s)try{let o=await i.B.getPopularMovies(e);if(o.results.length>0)return console.log("Using OMDb API for popular movies"),o}catch(e){console.warn("OMDb API failed...")}return console.log("⚠️ Using demo data for popular movies"),{page:1,results:c,total_pages:1,total_results:c.length}},getMovieDetails:async e=>{if(s)try{let o=await i.B.getMovieDetails(e);return console.log("Using OMDb API for movie details"),o}catch(e){console.warn("OMDb API failed, trying TMDB...")}if(l)try{let o=await p.get(`/movie/${e}`);return console.log("Using TMDB API for movie details"),o.data}catch(e){console.warn("TMDB API failed, using demo data...")}let o=c.find(o=>o.id.toString()===e);if(o)return console.log("Using demo data for movie details"),{...o,genres:[{id:18,name:"Drama"},{id:80,name:"Crime"}],runtime:142,budget:25e6,revenue:16e6,production_companies:[],production_countries:[],spoken_languages:[],status:"Released",tagline:"Demo movie for ALX Movie Nexus"};throw Error("Movie not found")},searchMovies:async(e,o=1)=>{if(s)try{let t=await i.B.searchMovies(e,o);if(t.results.length>0)return console.log("Using OMDb API for search"),t}catch(e){console.warn("OMDb API search failed, trying TMDB...")}if(l)try{let t=await p.get("/search/movie",{params:{query:e,page:o}});return console.log("Using TMDB API for search"),t.data}catch(e){console.warn("TMDB API search failed, using demo data...")}console.log("Using demo data for search");let t=c.filter(o=>o.title.toLowerCase().includes(e.toLowerCase()));return{page:1,results:t,total_pages:1,total_results:t.length}},getRecommendations:async e=>{if(s)try{let e=await i.B.getRecommendations();if(e.length>0)return console.log("Using OMDb API for recommendations"),e}catch(e){console.warn("OMDb API recommendations failed, trying TMDB...")}if(l)try{let o=await p.get(`/movie/${e}/recommendations`);return console.log("Using TMDB API for recommendations"),o.data.results}catch(e){console.warn("TMDB API recommendations failed, using demo data...")}return console.log("Using demo data for recommendations"),c.filter(o=>o.id.toString()!==e).slice(0,4)}},getImageUrl=(e,o="w500")=>{if(!e||"/placeholder-movie.svg"===e||"null"===e)return"/placeholder-movie.svg";let t=e.startsWith("/")?e:`/${e}`;return`https://image.tmdb.org/t/p/${o}${t}`};a()}catch(e){a(e)}})},985:(e,o,t)=>{t.d(o,{I:()=>a});let a={getFavorites:()=>[],addFavorite:e=>{},removeFavorite:e=>{},isFavorite:e=>{let o=a.getFavorites();return o.some(o=>o.id===e)}}}};