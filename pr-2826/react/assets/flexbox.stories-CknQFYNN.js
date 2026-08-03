import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as t}from"./flexbox-BzAHYJvX.js";import{C as r}from"./card-DfFZvj_n.js";const n=s=>e.jsxs("div",{className:"custom-card-storybook",children:[e.jsx(a,{}),e.jsxs(t,{...s,children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"}),e.jsx(r,{children:"4"}),e.jsx(r,{children:"5"})]})]}),a=()=>e.jsx("style",{children:`
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
  `}),c={title:"Components/Layout/Flexbox",component:t},o={render:n.bind({}),name:"Flexbox",args:{justifyContent:"between"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Flexbox',
  args: {
    justifyContent: 'between'
  }
}`,...o.parameters?.docs?.source}}};const i=["Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:i,default:c},Symbol.toStringTag,{value:"Module"}));export{o as D,x as F};
