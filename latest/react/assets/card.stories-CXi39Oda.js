import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./button-ylN_B76c.js";import{L as m}from"./link-D4A9Ir6Y.js";import{C as a}from"./card-CnoZmIKq.js";const i=({children:d,...c})=>e.jsx(a,{...c,children:d}),l=()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Card Headline"}),e.jsxs("button",{className:"gds-close",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx("i",{})]})]}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{href:"https://seb.se",button:!0,children:"Link"}),e.jsx(n,{variant:"secondary",children:"Default button"}),e.jsx(n,{variant:"primary",children:"Primary"})]}),j={title:"Components/Card",component:a},r={render:i.bind({}),name:"Card",parameters:{componentIds:["component-card"]},args:{header:e.jsx(l,{}),footer:e.jsx(p,{}),children:"Card content"}};var t,o,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const u=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:u,default:j},Symbol.toStringTag,{value:"Module"}));export{b as C,r as D};
