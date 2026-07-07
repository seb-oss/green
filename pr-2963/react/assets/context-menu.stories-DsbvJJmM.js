import{j as n}from"./jsx-runtime-u17CrQMm.js";import{C as r,M as o}from"./context-menu-e60Uypem.js";const c=({children:t,...s})=>n.jsx(r,{...s,children:t}),m={title:"Components/Context Menu",component:r},e={render:c.bind({}),name:"Context Menu",parameters:{componentIds:["component-contextmenu"]},args:{onMenuItemClick:t=>console.log(t),children:[n.jsx(o,{children:"Action 1"}),n.jsx(o,{children:"Action 2"}),n.jsx(o,{children:"Action 3"})]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Context Menu',
  parameters: {
    componentIds: ['component-contextmenu']
  },
  args: {
    onMenuItemClick: e => console.log(e),
    children: [<MenuItem>Action 1</MenuItem>, <MenuItem>Action 2</MenuItem>, <MenuItem>Action 3</MenuItem>]
  }
}`,...e.parameters?.docs?.source}}};const a=["Default"],l=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:a,default:m},Symbol.toStringTag,{value:"Module"}));export{l as C,e as D};
