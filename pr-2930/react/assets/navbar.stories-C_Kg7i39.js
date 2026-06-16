import{j as s}from"./jsx-runtime-u17CrQMm.js";import{N as i}from"./navbar-CbY2mBYa.js";const n=({children:o,...p})=>s.jsx(i,{...p,children:o}),d={title:"Components/Navbar",component:i,argTypes:{variant:{options:[void 0,"bg-light","bg-dark"]}}},e={render:n.bind({}),name:"Transparent",args:{title:"Transparent navbar",titleLink:"http://seb.se",variant:void 0}},t={render:n.bind({}),name:"Light",args:{title:"Light navbar",titleLink:"http://seb.se",variant:"bg-light"}},a={render:n.bind({}),name:"Dark",args:{title:"Dark navbar",titleLink:"http://seb.se",variant:"bg-dark"}},r={render:n.bind({}),name:"Content",args:{title:"Page heading",variant:"bg-light",children:[s.jsx("input",{type:"text",placeholder:"Input field"}),s.jsx("button",{type:"button",className:"ghost",children:"Search"})]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Transparent',
  args: {
    title: 'Transparent navbar',
    titleLink: 'http://seb.se',
    variant: undefined
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Light',
  args: {
    title: 'Light navbar',
    titleLink: 'http://seb.se',
    variant: 'bg-light'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Dark',
  args: {
    title: 'Dark navbar',
    titleLink: 'http://seb.se',
    variant: 'bg-dark'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Content',
  args: {
    title: 'Page heading',
    variant: 'bg-light',
    children: [<input type="text" placeholder="Input field" />, <button type="button" className="ghost">
        Search
      </button>]
  }
}`,...r.parameters?.docs?.source}}};const l=["Transparent","Light","Dark","Content"],g=Object.freeze(Object.defineProperty({__proto__:null,Content:r,Dark:a,Light:t,Transparent:e,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{r as C,a as D,t as L,g as N,e as T};
