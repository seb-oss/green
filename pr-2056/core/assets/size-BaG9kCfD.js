import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as p}from"./index-BLvDu8vW.js";import"./chunk-HLWAVYOI-CqaWIEf1.js";import{ae as c}from"./index-CE2HOO1n.js";import"./container-BWpYY-L2.js";import"./card-C9GWk8PO.js";import"./flex-DUiJx2Io.js";import"./text-CqlRMvaX.js";import"./grid-B9oDXuf1.js";import"./iframe-CEHCnmGk.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./container.component-DqFWH8_x.js";import"./custom-element-scoping-b4c89-hi.js";import"./lit-element-Bx14lxc-.js";import"./div.component-CQRQJUd6.js";import"./tokens.style-C9bLefPj.js";import"./declarative-layout-mixins-p82vEmD5.js";import"./card.component-DypAPF8x.js";import"./flex.component-Ce9CKV12.js";import"./text.component-BX6-mZRL.js";import"./static-B8S6DEnV.js";import"./grid.component-BipTY3sY.js";const x={size:{"4XS":{value:"1",type:"float"},"3XS":{value:"2",type:"float"},"2XS":{value:"4",type:"float"},XS:{value:"8",type:"float"},S:{value:"12",type:"float"},M:{value:"16",type:"float"},L:{value:"24",type:"float"},XL:{value:"32",type:"float"},"2XL":{value:"40",type:"float"},"3XL":{value:"48",type:"float"},"4XL":{value:"64",type:"float"},"5XL":{value:"80",type:"float"},"6XL":{value:"96",type:"float"},"7XL":{value:"112",type:"float"},"8XL":{value:"120",type:"float"},MAX:{value:"999",type:"float"}}},d={ref:x};function l(r){const t={code:"code","gds-card":"gds-card","gds-flex":"gds-flex","gds-text":"gds-text",h1:"h1",h3:"h3",p:"p",pre:"pre",...p(),...r.components},i=t["gds-card"],a=t["gds-flex"],n=t["gds-text"];return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Style/Size"}),`
`,e.jsx(t.h1,{id:"size",children:"Size"}),`
`,e.jsx(t.h3,{id:"the-spacing-scale-is-based-on-a-4px-grid",children:"The spacing scale is based on a 4px grid."}),`
`,e.jsx(t.p,{children:"The spacing scale is used for margin, padding, gap, radius and all the spacing values."}),`
`,e.jsx(t.h3,{id:"spacing-scale",children:"Spacing Scale"}),`
`,e.jsx("gds-grid",{columns:Object.keys(d.ref.size).length,gap:"xs",width:"100%","auto-columns":"80",children:Object.entries(d.ref.size).map(([s,{value:o}])=>e.jsx(i,{padding:"s","border-radius":"l",children:e.jsxs(a,{gap:"l","align-items":"center","flex-direction":"column",children:[e.jsx(i,{variant:"secondary",padding:"s",width:"100%","box-sizing":"border-box",children:e.jsxs(a,{"align-items":"center","justify-content":"center","flex-direction":"column",children:[e.jsx(n,{children:s.toLowerCase()}),e.jsxs(n,{tag:"small",color:"secondary/0.4",children:[o,"px"]})]})}),e.jsx(i,{height:o+"px","max-height":"400px",padding:"0",width:"100%",border:"0",variant:"tertiary"})]})},s))}),`
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
`,e.jsx("gds-card",{variant:"tertiary","border-radius":"max",width:"200px",children:e.jsx("gds-flex",{"align-items":"center","justify-content":"center",height:"200px",children:e.jsx("gds-text",{tag:"h5",children:"max (999px)"})})})]})}function B(r={}){const{wrapper:t}={...p(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(l,{...r})}):l(r)}export{B as default};
