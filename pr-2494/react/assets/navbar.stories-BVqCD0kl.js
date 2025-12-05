import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{N as k}from"./navbar-4wuu1b_B.js";const n=({children:T,...L})=>s.jsx(k,{...L,children:T}),x={title:"Components/Navbar",component:k,argTypes:{variant:{options:[void 0,"bg-light","bg-dark"]}}},e={render:n.bind({}),name:"Transparent",args:{title:"Transparent navbar",titleLink:"http://seb.se",variant:void 0}},t={render:n.bind({}),name:"Light",args:{title:"Light navbar",titleLink:"http://seb.se",variant:"bg-light"}},a={render:n.bind({}),name:"Dark",args:{title:"Dark navbar",titleLink:"http://seb.se",variant:"bg-dark"}},r={render:n.bind({}),name:"Content",args:{title:"Page heading",variant:"bg-light",children:[s.jsx("input",{type:"text",placeholder:"Input field"}),s.jsx("button",{type:"button",className:"ghost",children:"Search"})]}};var i,o,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Transparent',
  args: {
    title: 'Transparent navbar',
    titleLink: 'http://seb.se',
    variant: undefined
  }
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Light',
  args: {
    title: 'Light navbar',
    titleLink: 'http://seb.se',
    variant: 'bg-light'
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var b,g,m;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Dark',
  args: {
    title: 'Dark navbar',
    titleLink: 'http://seb.se',
    variant: 'bg-dark'
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var h,u,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Content',
  args: {
    title: 'Page heading',
    variant: 'bg-light',
    children: [<input type="text" placeholder="Input field" />, <button type="button" className="ghost">
        Search
      </button>]
  }
}`,...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const S=["Transparent","Light","Dark","Content"],y=Object.freeze(Object.defineProperty({__proto__:null,Content:r,Dark:a,Light:t,Transparent:e,__namedExportsOrder:S,default:x},Symbol.toStringTag,{value:"Module"}));export{r as C,a as D,t as L,y as N,e as T};
