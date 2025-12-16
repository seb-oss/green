import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-BpbyqghF.js";import{M as l,C as d,S as c,b as m}from"./WithTooltip-SK46ZJ2J-Mxt942zU.js";import{B as o}from"./button-3TMYTcA7.js";import"./iconButton-DF_QUKBZ.js";import{F as h,a as i,T as x,N as u,E as p,B as j,R as b,b as n}from"./buttonGroup-C_i9qul4.js";import{C as v}from"./checkbox-B-pNI7Mx.js";import{T as f}from"./text-DANUJh4r.js";import{A as N}from"./alert-ribbon-CJZJpDO2.js";import{F as w,D as R}from"./form.stories-DP__VKRb.js";import"./iframe-ZyucWf8_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C2rWvvJc.js";import"./index-E52tKGXW.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./create-component-CPRSibq9.js";import"./triangle-exclamation-SEcsH3wx.js";import"./triangle-exclamation.component-BdWVh20Z.js";import"./tokens.style-CHPgHy6M.js";import"./icon.component-ByT0ty5F.js";import"./edit-Cs76S9LP.js";import"./index-DSE2I7M-.js";const g=()=>e.jsx("style",{children:`
    form{
      padding: 1rem 2rem;
      background-color: white
    }
    .row .col-12 .form-group{
      width: 100%;
    }
    .row .col-6 .form-group{
      width: 100%;
    }
    .row .col-12 button{
      width: 100%
    }
    .row{
      margin-bottom: 1.2rem;
    }
    div[role='alert']{
      width: 100%
    }
  `}),K=({children:s,...r})=>e.jsxs(h,{...r,children:[e.jsx(g,{}),e.jsx("h1",{children:"Form example"}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx(N,{type:"info",header:"",isCloseable:!1,children:"Alert content placed inside a paragraph. Inline link will inherit color from alert to make sure contrast is applied."})})}),e.jsx("h2",{children:"Inputs"}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-6 ",children:e.jsx(i,{name:"text",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(x,{id:"namedField",label:"Person name"})})}),e.jsx("div",{className:"col-6",children:e.jsx(i,{name:"number",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(u,{label:"Numeric field",min:-1,max:10,step:2})})}),e.jsx("div",{className:"col-12",children:e.jsx(i,{name:"email",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(p,{label:"Email field"})})})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("h2",{children:"Checkbox"}),e.jsx(i,{name:"checkbox",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(v,{label:"Some checkbox",value:"checkme"})})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("h2",{className:"mb-3",children:"Text"}),e.jsx(f,{children:"Static text"})]})]}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-12 mb-5",children:e.jsx("h2",{children:"Button Group"})}),e.jsx("div",{className:"col-6",children:e.jsxs(j,{children:[e.jsx(o,{children:"Button 1"}),e.jsx(o,{children:"Button 2"})]})})]}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-12 mb-5",children:e.jsx("h2",{children:"Radio Group"})}),e.jsx("div",{className:"col-6",children:e.jsx(i,{name:"radiobtnGroup",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsxs(b,{label:"Groups",children:[e.jsx(n,{label:"Radio Button 1",value:"button1"}),e.jsx(n,{label:"Radio Button 2",value:"button2"})]})})})]}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-12 mb-5",children:e.jsx("h2",{children:"Buttons"})}),e.jsx("div",{className:"col-12 mb-5",children:e.jsx(o,{type:"reset",children:"Reset"})}),e.jsx("div",{className:"col-12 mb-5",children:e.jsx(o,{type:"submit",children:"Submit"})})]})]});function t(s){const r={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:w}),`
`,e.jsx(r.h1,{id:"forms",children:"Forms"}),`
`,e.jsx(d,{children:e.jsx(c,{of:R})}),`
`,e.jsx(m,{}),`
`,e.jsx(r.h1,{id:"use-form-validation",children:"Use Form Validation"}),`
`,e.jsxs(r.p,{children:["To use form validation, every inputs thats need validation ",e.jsx(r.code,{children:"e.g. text-input, email-input"})," need to be wrapped with ",e.jsx(r.code,{children:"<FormItems />"})," component. The component takes in few parameters which are ",e.jsx(r.code,{children:"name"})," and ",e.jsx(r.code,{children:"validate"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`{
  message: string
  indicator: 'success' | 'error' | 'info'
  rules?: { type: 'Required' | 'Email', custom?: () => string | undefined }
}
`})}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`<Form>
  <FormItems name="text" validate={{ message: 'Required', indicator: 'error', rules: { type: 'Required' } }} >
    <TextInput id="namedField" label="Person name" />
  </FormItems>
</Form>

`})}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Please note"})," - Pass in normal html buttons with submit or reset to submit form or reset form accordinglly."]})]})}function O(s={}){const{wrapper:r}={...a(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(t,{...s})}):t(s)}export{g as Styles,K as Template,O as default};
