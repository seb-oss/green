import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as m,M as o}from"./context-menu-BSNP2aQQ.js";const u=({children:t,...a})=>n.jsx(m,{...a,children:t}),i={title:"Components/Context Menu",component:m},e={render:u.bind({}),name:"Context Menu",parameters:{componentIds:["component-contextmenu"]},args:{onMenuItemClick:t=>console.log(t),children:[n.jsx(o,{children:"Action 1"}),n.jsx(o,{children:"Action 2"}),n.jsx(o,{children:"Action 3"})]}};var r,s,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Context Menu',
  parameters: {
    componentIds: ['component-contextmenu']
  },
  args: {
    onMenuItemClick: e => console.log(e),
    children: [<MenuItem>Action 1</MenuItem>, <MenuItem>Action 2</MenuItem>, <MenuItem>Action 3</MenuItem>]
  }
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const l=["Default"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{M as C,e as D};
