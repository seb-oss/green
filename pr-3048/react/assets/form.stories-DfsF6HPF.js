import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as n}from"./alert-ribbon-DkIQbUCr.js";import{B as a}from"./button-BC3GUDMV.js";import"./iconButton-CMKeE49G.js";import{F as o,a as r,T as d,N as c,E as m,B as u,R as h,b as l}from"./buttonGroup-D1LeGVaD.js";import{C as x}from"./checkbox-Dy9gakta.js";import{T as j}from"./text-lsZ75dff.js";const p=()=>e.jsx("style",{children:`
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
  `}),b=({children:i,...t})=>e.jsxs(o,{...t,children:[e.jsx(p,{}),e.jsx("h1",{children:"Form example"}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx(n,{type:"info",header:"",isCloseable:!1,children:"Alert content placed inside a paragraph. Inline link will inherit color from alert to make sure contrast is applied."})})}),e.jsx("h2",{children:"Inputs"}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-6 ",children:e.jsx(r,{name:"text",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(d,{id:"namedField",label:"Person name"})})}),e.jsx("div",{className:"col-6",children:e.jsx(r,{name:"number",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(c,{label:"Numeric field",min:-1,max:10,step:2})})}),e.jsx("div",{className:"col-12",children:e.jsx(r,{name:"email",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(m,{label:"Email field"})})})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("h2",{children:"Checkbox"}),e.jsx(r,{name:"checkbox",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(x,{label:"Some checkbox",value:"checkme"})})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("h2",{className:"mb-3",children:"Text"}),e.jsx(j,{children:"Static text"})]})]}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-12 mb-5",children:e.jsx("h2",{children:"Button Group"})}),e.jsx("div",{className:"col-6",children:e.jsxs(u,{children:[e.jsx(a,{children:"Button 1"}),e.jsx(a,{children:"Button 2"})]})})]}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-12 mb-5",children:e.jsx("h2",{children:"Radio Group"})}),e.jsx("div",{className:"col-6",children:e.jsx(r,{name:"radiobtnGroup",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsxs(h,{label:"Groups",children:[e.jsx(l,{label:"Radio Button 1",value:"button1"}),e.jsx(l,{label:"Radio Button 2",value:"button2"})]})})})]}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-12 mb-5",children:e.jsx("h2",{children:"Buttons"})}),e.jsx("div",{className:"col-12 mb-5",children:e.jsx(a,{type:"reset",children:"Reset"})}),e.jsx("div",{className:"col-12 mb-5",children:e.jsx(a,{type:"submit",children:"Submit"})})]})]}),v={title:"Components/Form",component:o},s={render:b.bind({}),name:"Form",args:{onFormSubmit:i=>{alert("You have submitted these values: "+JSON.stringify(i))}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Form',
  args: {
    onFormSubmit: values => {
      alert('You have submitted these values: ' + JSON.stringify(values));
    }
  }
}`,...s.parameters?.docs?.source}}};const N=["Default"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:N,default:v},Symbol.toStringTag,{value:"Module"}));export{s as D,B as F};
