import{j as e,M as o,C as i}from"./blocks--uo8Vprr.js";import{useMDXComponents as d}from"./index-BYoxYqaN.js";import"./iframe-D06iXPVv.js";function n(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Utilities/Flexbox/Order"}),`
`,e.jsx(r.h1,{id:"flexbox-order",children:"Flexbox order"}),`
`,e.jsxs(r.p,{children:["This utility class can be applied to elements with ",e.jsx(r.code,{children:"display: flex"})," or ",e.jsx(r.code,{children:"display: inline-flex"}),". Some common cases include ",e.jsx(r.code,{children:".row"}),", ",e.jsx(r.code,{children:".d-flex"})," etc."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Class:"})," ",e.jsx(r.code,{children:"order-{breakpoint}-{value}"})," ",e.jsx("br",{}),`
`,e.jsx(r.strong,{children:"Values:"})," ",e.jsx(r.code,{children:"first"}),",",e.jsx(r.code,{children:"0-5"}),",",e.jsx(r.code,{children:"last"})," ",e.jsx("br",{}),`
`,e.jsx(r.strong,{children:"Responsive:"})," true"]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r.h3,{id:"responsive",children:"Responsive"}),`
`,e.jsx(r.p,{children:"Reverse order by default and switch order on medium screens and up."}),`
`,e.jsx(i,{children:e.jsxs("div",{class:"d-flex",children:[e.jsx("div",{class:"p-3 border border-info order-last order-md-2",children:"Item 1"}),e.jsx("div",{class:"p-3 border border-info order-md-0",children:"Item 2"}),e.jsx("div",{class:"p-3 border border-info order-first order-md-1",children:"Item 3"})]})})]})}function x(s={}){const{wrapper:r}={...d(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{x as default};
