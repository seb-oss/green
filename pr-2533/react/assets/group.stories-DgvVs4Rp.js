import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as T}from"./button-CqjeQ36I.js";import{G as x,T as s}from"./buttonGroup-YK4cEaqK.js";const a=({children:f,...h})=>r.jsx(x,{...h,children:f}),b={title:"Components/Form/Group",component:x},e={render:a.bind({}),name:"Basic Group",parameters:{componentIds:["component-form-group"]},args:{children:[r.jsx(s,{placeholder:"Input field"}),r.jsx(T,{children:"Normal button"})]}},o={render:a.bind({}),name:"Static text and input field",args:{groupBorder:!0,groupFocus:!0,children:[r.jsx(s,{placeholder:"First input field"}),r.jsx("span",{className:"form-text",children:"kr"})]}},t={render:a.bind({}),name:"Group error",args:{groupBorder:!0,groupFocus:!0,error:"Error message",children:[r.jsx(s,{placeholder:"First input field"}),r.jsx("span",{className:"form-text",children:"kr"})]}};var n,p,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Basic Group',
  parameters: {
    componentIds: ['component-form-group']
  },
  args: {
    children: [<TextInput placeholder="Input field" />, <Button>Normal button</Button>]
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,d,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Static text and input field',
  args: {
    groupBorder: true,
    groupFocus: true,
    children: [<TextInput placeholder="First input field" />, <span className="form-text">kr</span>]
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,l,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Group error',
  args: {
    groupBorder: true,
    groupFocus: true,
    error: 'Error message',
    children: [<TextInput placeholder="First input field" />, <span className="form-text">kr</span>]
  }
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const j=["Default","StaticText","Error"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:t,StaticText:o,__namedExportsOrder:j,default:b},Symbol.toStringTag,{value:"Module"}));export{e as D,t as E,G,o as S};
