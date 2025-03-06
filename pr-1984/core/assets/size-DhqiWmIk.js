import{j as e}from"./jsx-runtime-kUEEpKY5.js";import{u as c}from"./index-CkAxDmMO.js";import"./chunk-HLWAVYOI-CvhMNacn.js";import{ae as p}from"./index-eUoi71ga.js";import"./container-CBRi4R0h.js";import"./card-BihnooJR.js";import"./flex-tnFv_7np.js";import"./text-DQ_oI5A1.js";import"./grid-Cf24TEIC.js";import"./iframe-Cu8N814t.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./custom-element-scoping-BEGY3AqQ.js";import"./lit-element-C_s9q329.js";import"./div-Cnle9s5w.js";import"./tokens.style-CFvqdzpw.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./static-_ukc2i0J.js";const x={size:{"4XS":{value:"1",type:"float"},"3XS":{value:"2",type:"float"},"2XS":{value:"4",type:"float"},XS:{value:"8",type:"float"},S:{value:"12",type:"float"},M:{value:"16",type:"float"},L:{value:"24",type:"float"},XL:{value:"32",type:"float"},"2XL":{value:"40",type:"float"},"3XL":{value:"48",type:"float"},"4XL":{value:"64",type:"float"},"5XL":{value:"80",type:"float"},"6XL":{value:"96",type:"float"},"7XL":{value:"112",type:"float"},"8XL":{value:"120",type:"float"},MAX:{value:"999",type:"float"}}},d={ref:x};function l(a){const t={code:"code","gds-card":"gds-card","gds-flex":"gds-flex","gds-text":"gds-text",h1:"h1",h3:"h3",p:"p",pre:"pre",...c(),...a.components},n=t["gds-card"],r=t["gds-flex"],s=t["gds-text"];return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Style/Size"}),`
`,e.jsx(t.h1,{id:"size",children:"Size"}),`
`,e.jsx(t.h3,{id:"the-spacing-scale-is-based-on-a-4px-grid",children:"The spacing scale is based on a 4px grid."}),`
`,e.jsx(t.p,{children:"The spacing scale is used for margin, padding, gap, radius and all the spacing values."}),`
`,e.jsx(t.h3,{id:"spacing-scale",children:"Spacing Scale"}),`
`,e.jsx("gds-grid",{columns:Object.keys(d.ref.size).length,gap:"xs",width:"100%","auto-columns":"80",children:Object.entries(d.ref.size).map(([i,{value:o}])=>e.jsx(n,{padding:"s","border-radius":"l",children:e.jsxs(r,{gap:"l","align-items":"center","flex-direction":"column",children:[e.jsx(n,{variant:"secondary",padding:"s",width:"100%","box-sizing":"border-box",children:e.jsxs(r,{"align-items":"center","justify-content":"center","flex-direction":"column",children:[e.jsx(s,{children:i.toLowerCase()}),e.jsxs(s,{tag:"small",color:"secondary/0.4",children:[o,"px"]})]})}),e.jsx(n,{height:o+"px","max-height":"400px",padding:"0",width:"100%",border:"0",variant:"tertiary"})]})},i))}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h3,{id:"1-max",children:"*1 max"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"max"})," size is the maximum size of the spacing scale used when you want to create a circular shape."]}),`
`,e.jsx(t.p,{children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`    <gds-card border-radius="max">max</gds-card>
`})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("gds-card",{variant:"tertiary","border-radius":"max",width:"200px",children:e.jsx("gds-flex",{"align-items":"center","justify-content":"center",height:"200px",children:e.jsx("gds-text",{tag:"h5",children:"max (999px)"})})})]})}function O(a={}){const{wrapper:t}={...c(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(l,{...a})}):l(a)}export{O as default};
