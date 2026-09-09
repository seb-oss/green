import{j as i}from"./jsx-runtime-u17CrQMm.js";import{L as t}from"./list-Boy6qtUn.js";const n=({children:d,...o})=>i.jsx(t,{...o,children:d}),a={title:"Components/Lists",component:t},e={render:n.bind({}),name:"Ordered-list",args:{listType:"ordered",children:["First","Second","Third","Fourth"]}},r={render:n.bind({}),name:"Unordered-list",args:{listType:"unordered",children:["First","Second","Third","Fourth"]}},s={render:n.bind({}),name:"Check-list",args:{listType:"check",children:["First","Second","Third","Fourth"]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Ordered-list',
  args: {
    listType: 'ordered',
    children: ['First', 'Second', 'Third', 'Fourth']
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Unordered-list',
  args: {
    listType: 'unordered',
    children: ['First', 'Second', 'Third', 'Fourth']
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Check-list',
  args: {
    listType: 'check',
    children: ['First', 'Second', 'Third', 'Fourth']
  }
}`,...s.parameters?.docs?.source}}};const c=["OrderedList","UnorderedList","CheckList"],p=Object.freeze(Object.defineProperty({__proto__:null,CheckList:s,OrderedList:e,UnorderedList:r,__namedExportsOrder:c,default:a},Symbol.toStringTag,{value:"Module"}));export{s as C,p as L,e as O,r as U};
