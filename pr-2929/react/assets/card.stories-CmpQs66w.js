import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as n}from"./button-BHHXjU-v.js";import{L as a}from"./link-Bkzpeui1.js";import{C as t}from"./card-DfFZvj_n.js";const d=({children:o,...s})=>e.jsx(t,{...s,children:o}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Card Headline"}),e.jsxs("button",{className:"gds-close",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx("i",{})]})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{href:"https://seb.se",button:!0,children:"Link"}),e.jsx(n,{variant:"secondary",children:"Default button"}),e.jsx(n,{variant:"primary",children:"Primary"})]}),i={title:"Components/Card",component:t},r={render:d.bind({}),name:"Card",parameters:{componentIds:["component-card"]},args:{header:e.jsx(c,{}),footer:e.jsx(m,{}),children:"Card content"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Card',
  parameters: {
    componentIds: ['component-card']
  },
  args: {
    header: <Header />,
    footer: <Footer />,
    children: 'Card content'
  }
}`,...r.parameters?.docs?.source}}};const l=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{h as C,r as D};
