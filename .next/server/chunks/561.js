"use strict";exports.id=561,exports.ids=[561],exports.modules={5894:(e,r,t)=>{t.d(r,{V:()=>ToastProvider,a:()=>useToastContext});var o=t(997),s=t(6689),a=t(7518),n=t.n(a);let i=a.keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,l=a.keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,c=n().div.withConfig({componentId:"sc-7af2adf8-0"})`
  position: fixed;
  top: ${({theme:e})=>e.spacing.xl};
  right: ${({theme:e})=>e.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  z-index: 1000;
  min-width: 300px;
  animation: ${({$isVisible:e})=>e?i:l} 0.3s ease-out;
  
  background-color: ${({theme:e,$type:r})=>{switch(r){case"success":return e.colors.accent;case"error":return e.colors.error;case"info":return e.colors.primary;default:return e.colors.surface}}};
  
  color: ${({theme:e})=>e.colors.text.primary};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    top: ${({theme:e})=>e.spacing.lg};
    right: ${({theme:e})=>e.spacing.lg};
    left: ${({theme:e})=>e.spacing.lg};
    min-width: auto;
  }
`,d=n().span.withConfig({componentId:"sc-7af2adf8-1"})`
  font-size: 1.25rem;
  font-weight: bold;
`,u=n().span.withConfig({componentId:"sc-7af2adf8-2"})`
  font-size: 0.875rem;
  font-weight: 500;
`,components_Toast=({message:e,type:r,duration:t=3e3,onClose:a})=>{let[n,i]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let e=setTimeout(()=>{i(!1),setTimeout(a,300)},t);return()=>clearTimeout(e)},[t,a]),(0,o.jsxs)(c,{$type:r,$isVisible:n,children:[o.jsx(d,{children:(()=>{switch(r){case"success":return"✓";case"error":return"✕";default:return"ℹ"}})()}),o.jsx(u,{children:e})]})},useToast=()=>{let[e,r]=(0,s.useState)([]),t=(0,s.useCallback)((e,t="info",o=3e3)=>{let s=Date.now().toString(),a={id:s,message:e,type:t,duration:o};r(e=>[...e,a])},[]),o=(0,s.useCallback)(e=>{r(r=>r.filter(r=>r.id!==e))},[]),a=(0,s.useCallback)(e=>{t(e,"success")},[t]),n=(0,s.useCallback)(e=>{t(e,"error")},[t]),i=(0,s.useCallback)(e=>{t(e,"info")},[t]);return{toasts:e,showToast:t,removeToast:o,success:a,error:n,info:i}},m=(0,s.createContext)(void 0),useToastContext=()=>{let e=(0,s.useContext)(m);if(!e)throw Error("useToastContext must be used within a ToastProvider");return e},ToastProvider=({children:e})=>{let{toasts:r,removeToast:t,success:s,error:a,info:n}=useToast();return(0,o.jsxs)(m.Provider,{value:{success:s,error:a,info:n},children:[e,r.map(e=>o.jsx(components_Toast,{message:e.message,type:e.type,duration:e.duration,onClose:()=>t(e.id)},e.id))]})}},4561:(e,r,t)=>{t.r(r),t.d(r,{default:()=>App});var o=t(997),s=t(7518);let a=s.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text.primary};
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ${({theme:e})=>e.transitions.fast};
    
    &:hover {
      color: ${({theme:e})=>e.colors.primary};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    transition: ${({theme:e})=>e.transitions.fast};
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  input, textarea {
    font-family: inherit;
    border: none;
    outline: none;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.text.muted};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.text.secondary};
  }
`;var n=t(5894);let i={colors:{primary:"#e50914",secondary:"#221f1f",background:"#141414",surface:"#1f1f1f",text:{primary:"#ffffff",secondary:"#b3b3b3",muted:"#808080"},accent:"#46d369",warning:"#f5c518",error:"#e50914"},breakpoints:{mobile:"480px",tablet:"768px",desktop:"1024px",large:"1200px"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem"},borderRadius:{sm:"4px",md:"8px",lg:"12px",xl:"16px"},shadows:{sm:"0 1px 3px rgba(0, 0, 0, 0.12)",md:"0 4px 6px rgba(0, 0, 0, 0.16)",lg:"0 10px 25px rgba(0, 0, 0, 0.2)"},transitions:{fast:"0.15s ease-in-out",normal:"0.3s ease-in-out",slow:"0.5s ease-in-out"}};function App({Component:e,pageProps:r}){return(0,o.jsxs)(s.ThemeProvider,{theme:i,children:[o.jsx(a,{}),o.jsx(n.V,{children:o.jsx(e,{...r})})]})}}};