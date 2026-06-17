import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as c}from"./button-C4-0s8QX.js";import{G as n,T as s}from"./buttonGroup-BQW9yXUs.js";const a=({children:p,...u})=>r.jsx(n,{...u,children:p}),d={title:"Components/Form/Group",component:n},e={render:a.bind({}),name:"Basic Group",parameters:{componentIds:["component-form-group"]},args:{children:[r.jsx(s,{placeholder:"Input field"}),r.jsx(c,{children:"Normal button"})]}},o={render:a.bind({}),name:"Static text and input field",args:{groupBorder:!0,groupFocus:!0,children:[r.jsx(s,{placeholder:"First input field"}),r.jsx("span",{className:"gds-form-text",children:"kr"})]}},t={render:a.bind({}),name:"Group error",args:{groupBorder:!0,groupFocus:!0,error:"Error message",children:[r.jsx(s,{placeholder:"First input field"}),r.jsx("span",{className:"gds-form-text",children:"kr"})]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Basic Group',
  parameters: {
    componentIds: ['component-form-group']
  },
  args: {
    children: [<TextInput placeholder="Input field" />, <Button>Normal button</Button>]
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Static text and input field',
  args: {
    groupBorder: true,
    groupFocus: true,
    children: [<TextInput placeholder="First input field" />, <span className="gds-form-text">kr</span>]
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Group error',
  args: {
    groupBorder: true,
    groupFocus: true,
    error: 'Error message',
    children: [<TextInput placeholder="First input field" />, <span className="gds-form-text">kr</span>]
  }
}`,...t.parameters?.docs?.source}}};const i=["Default","StaticText","Error"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:t,StaticText:o,__namedExportsOrder:i,default:d},Symbol.toStringTag,{value:"Module"}));export{e as D,t as E,x as G,o as S};
