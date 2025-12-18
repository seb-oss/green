import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./button-CWdnjbQG.js";import{L as i}from"./link-Bq0uakur.js";import{C as s}from"./card-DAydkd46.js";const m=({children:d,...c})=>e.jsx(s,{...c,children:d}),l=()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Card Headline"}),e.jsxs(n,{variant:"close",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx("i",{})]})]}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{href:"https://seb.se",className:"button link",children:"Link"}),e.jsx(n,{children:"Default button"}),e.jsx(n,{variant:"primary",children:"Primary"})]}),j={title:"Components/Card",component:s},r={render:m.bind({}),name:"Card",parameters:{componentIds:["component-card"]},args:{header:e.jsx(l,{}),footer:e.jsx(p,{}),children:"Card content"}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const x=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{b as C,r as D};
