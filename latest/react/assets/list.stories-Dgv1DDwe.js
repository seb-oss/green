import{j as F}from"./jsx-runtime-D_zvdyIk.js";import{L as h}from"./list-CbwHw3n5.js";const n=({children:u,...T})=>F.jsx(h,{...T,children:u}),S={title:"Components/Lists",component:h},e={render:n.bind({}),name:"Ordered-list",args:{listType:"ordered",children:["First","Second","Third","Fourth"]}},r={render:n.bind({}),name:"Unordered-list",args:{listType:"unordered",children:["First","Second","Third","Fourth"]}},s={render:n.bind({}),name:"Check-list",args:{listType:"check",children:["First","Second","Third","Fourth"]}};var t,d,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Ordered-list',
  args: {
    listType: 'ordered',
    children: ['First', 'Second', 'Third', 'Fourth']
  }
}`,...(o=(d=e.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var i,a,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Unordered-list',
  args: {
    listType: 'unordered',
    children: ['First', 'Second', 'Third', 'Fourth']
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Check-list',
  args: {
    listType: 'check',
    children: ['First', 'Second', 'Third', 'Fourth']
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const g=["OrderedList","UnorderedList","CheckList"],y=Object.freeze(Object.defineProperty({__proto__:null,CheckList:s,OrderedList:e,UnorderedList:r,__namedExportsOrder:g,default:S},Symbol.toStringTag,{value:"Module"}));export{s as C,y as L,e as O,r as U};
