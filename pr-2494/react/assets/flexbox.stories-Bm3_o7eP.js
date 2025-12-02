import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as a}from"./flexbox-Bl8ffZqV.js";import{C as r}from"./card-DAydkd46.js";const i=c=>e.jsxs("div",{className:"custom-card-storybook",children:[e.jsx(l,{}),e.jsxs(a,{...c,children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"}),e.jsx(r,{children:"4"}),e.jsx(r,{children:"5"})]})]}),l=()=>e.jsx("style",{children:`
    .custom-card-storybook .card{
      border: 3px solid #007ac7;
      margin: 1rem;
      min-width: 8rem;
    }
    .custom-card-storybook .card p {
      text-align:center;
      font-weight: 500;
      font-size: 1.1rem;
    }
  `}),d={title:"Components/Layout/Flexbox",component:a},o={render:i.bind({}),name:"Flexbox",args:{justifyContent:"between"}};var t,s,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Flexbox',
  args: {
    justifyContent: 'between'
  }
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const m=["Default"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{o as D,u as F};
