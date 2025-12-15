import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as m}from"./alert-ribbon-Chjqc9hH.js";import{B as a}from"./button-CLInvB7i.js";import"./iconButton-CudX14ce.js";import{F as d,a as r,T as u,N as h,E as x,B as j,R as p,b as l}from"./buttonGroup-CxyZbyCo.js";import{C as b}from"./checkbox-D2iu7767.js";import{T as v}from"./text-DANUJh4r.js";const N=()=>e.jsx("style",{children:`
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
  `}),f=({children:i,...c})=>e.jsxs(d,{...c,children:[e.jsx(N,{}),e.jsx("h1",{children:"Form example"}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx(m,{type:"info",header:"",isCloseable:!1,children:"Alert content placed inside a paragraph. Inline link will inherit color from alert to make sure contrast is applied."})})}),e.jsx("h2",{children:"Inputs"}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-6 ",children:e.jsx(r,{name:"text",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(u,{id:"namedField",label:"Person name"})})}),e.jsx("div",{className:"col-6",children:e.jsx(r,{name:"number",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(h,{label:"Numeric field",min:-1,max:10,step:2})})}),e.jsx("div",{className:"col-12",children:e.jsx(r,{name:"email",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(x,{label:"Email field"})})})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("h2",{children:"Checkbox"}),e.jsx(r,{name:"checkbox",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(b,{label:"Some checkbox",value:"checkme"})})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("h2",{className:"mb-3",children:"Text"}),e.jsx(v,{children:"Static text"})]})]}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-12 mb-5",children:e.jsx("h2",{children:"Button Group"})}),e.jsx("div",{className:"col-6",children:e.jsxs(j,{children:[e.jsx(a,{children:"Button 1"}),e.jsx(a,{children:"Button 2"})]})})]}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-12 mb-5",children:e.jsx("h2",{children:"Radio Group"})}),e.jsx("div",{className:"col-6",children:e.jsx(r,{name:"radiobtnGroup",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsxs(p,{label:"Groups",children:[e.jsx(l,{label:"Radio Button 1",value:"button1"}),e.jsx(l,{label:"Radio Button 2",value:"button2"})]})})})]}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-12 mb-5",children:e.jsx("h2",{children:"Buttons"})}),e.jsx("div",{className:"col-12 mb-5",children:e.jsx(a,{type:"reset",children:"Reset"})}),e.jsx("div",{className:"col-12 mb-5",children:e.jsx(a,{type:"submit",children:"Submit"})})]})]}),R={title:"Components/Form",component:d},s={render:f.bind({}),name:"Form",args:{onFormSubmit:i=>{alert("You have submitted these values: "+JSON.stringify(i))}}};var o,t,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Form',
  args: {
    onFormSubmit: values => {
      alert('You have submitted these values: ' + JSON.stringify(values));
    }
  }
}`,...(n=(t=s.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const g=["Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:g,default:R},Symbol.toStringTag,{value:"Module"}));export{s as D,T as F};
