import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as t}from"./alert-ribbon-Ng7exHN8.js";import{B as r}from"./button-ChC6RKhm.js";import"./iconButton-jJMjQvsL.js";import{F as a,a as s,T as d,N as c,E as n,B as m,R as h,b as l}from"./buttonGroup-DGx3Y0D-.js";import{C as x}from"./checkbox-BoscAlUQ.js";import{T as u}from"./text-DANUJh4r.js";const j=()=>e.jsx("style",{children:`
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
  `}),p=({children:i,...o})=>e.jsxs(a,{...o,children:[e.jsx(j,{}),e.jsx("h1",{children:"Form example"}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx(t,{type:"info",header:"",isCloseable:!1,children:"Alert content placed inside a paragraph. Inline link will inherit color from alert to make sure contrast is applied."})})}),e.jsx("h2",{children:"Inputs"}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-6 ",children:e.jsx(s,{name:"text",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(d,{id:"namedField",label:"Person name"})})}),e.jsx("div",{className:"col-6",children:e.jsx(s,{name:"number",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(c,{label:"Numeric field",min:-1,max:10,step:2})})}),e.jsx("div",{className:"col-12",children:e.jsx(s,{name:"email",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(n,{label:"Email field"})})})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("h2",{children:"Checkbox"}),e.jsx(s,{name:"checkbox",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsx(x,{label:"Some checkbox",value:"checkme"})})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("h2",{className:"mb-3",children:"Text"}),e.jsx(u,{children:"Static text"})]})]}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-12 mb-5",children:e.jsx("h2",{children:"Button Group"})}),e.jsx("div",{className:"col-6",children:e.jsxs(m,{children:[e.jsx(r,{children:"Button 1"}),e.jsx(r,{children:"Button 2"})]})})]}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-12 mb-5",children:e.jsx("h2",{children:"Radio Group"})}),e.jsx("div",{className:"col-6",children:e.jsx(s,{name:"radiobtnGroup",validate:{message:"Required",indicator:"error",rules:{type:"Required"}},children:e.jsxs(h,{label:"Groups",children:[e.jsx(l,{label:"Radio Button 1",value:"button1"}),e.jsx(l,{label:"Radio Button 2",value:"button2"})]})})})]}),e.jsxs("div",{className:"row mb-0",children:[e.jsx("div",{className:"col-12 mb-5",children:e.jsx("h2",{children:"Buttons"})}),e.jsx("div",{className:"col-12 mb-5",children:e.jsx(r,{type:"reset",children:"Reset"})}),e.jsx("div",{className:"col-12 mb-5",children:e.jsx(r,{type:"submit",children:"Submit"})})]})]}),b={title:"Components/Form",component:a},v={render:p.bind({}),name:"Form",args:{onFormSubmit:i=>{alert("You have submitted these values: "+JSON.stringify(i))}}},N=["Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:v,__namedExportsOrder:N,default:b},Symbol.toStringTag,{value:"Module"}));export{v as D,F};
