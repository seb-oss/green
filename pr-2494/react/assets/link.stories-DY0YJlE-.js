import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as s}from"./link-CdaY8df8.js";const v=({...k})=>e.jsx(s,{...k}),y={title:"Components/Link",component:s,argTypes:{button:{options:[void 0,"primary","secondary","ghost"]}}},n={render:v.bind({}),name:"Link",parameters:{componentIds:["component-inlinelinks"]},args:{children:"Go to seb.se",href:"https://seb.se"}},r={render:()=>e.jsxs("div",{children:[e.jsx("div",{className:"bg-info p-4 my-4",children:e.jsx(s,{href:"https://seb.se",className:"bg-info",children:"Go to seb.se in blue"})}),e.jsx("div",{className:"bg-success p-4 my-4",children:e.jsx(s,{href:"https://seb.se",children:"Go to seb.se in green"})}),e.jsx("div",{className:"bg-warning p-4 my-4",children:e.jsx(s,{href:"https://seb.se",children:"Go to seb.se in yellow"})}),e.jsx("div",{className:"bg-danger p-4 my-4",children:e.jsx(s,{href:"https://seb.se",children:"Go to seb.se in red"})})]})},t={render:()=>e.jsxs("div",{children:[e.jsx(s,{button:!0,href:"https://seb.se",children:"Go to seb.se as default button"}),e.jsx(s,{button:"primary",href:"https://seb.se",children:"Go to seb.se as primary button"}),e.jsx(s,{button:"ghost",href:"https://seb.se",children:"Go to seb.se as ghost button"})]})},o={render:()=>e.jsx("div",{children:e.jsxs(s,{secondary:!0,href:"#",children:["Go to page",e.jsx(GdsIconArrowRight,{})]})})};var i,a,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Link',
  parameters: {
    componentIds: ['component-inlinelinks']
  },
  args: {
    children: 'Go to seb.se',
    href: 'https://seb.se'
  }
}`,...(d=(a=n.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var c,p,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div>
      <div className="bg-info p-4 my-4">
        <Link href="https://seb.se" className="bg-info">
          Go to seb.se in blue
        </Link>
      </div>

      <div className="bg-success p-4 my-4">
        <Link href="https://seb.se">Go to seb.se in green</Link>
      </div>

      <div className="bg-warning p-4 my-4">
        <Link href="https://seb.se">Go to seb.se in yellow</Link>
      </div>

      <div className="bg-danger p-4 my-4">
        <Link href="https://seb.se">Go to seb.se in red</Link>
      </div>
    </div>
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,m,l;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div>
      <Link button href="https://seb.se">
        Go to seb.se as default button
      </Link>
      <Link button="primary" href="https://seb.se">
        Go to seb.se as primary button
      </Link>
      <Link button="ghost" href="https://seb.se">
        Go to seb.se as ghost button
      </Link>
    </div>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div>
      <Link secondary href="#">
        Go to page
        <GdsIconArrowRight />
      </Link>
    </div>
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const L=["Default","OnBackground","AsButton","Secondary"],G=Object.freeze(Object.defineProperty({__proto__:null,AsButton:t,Default:n,OnBackground:r,Secondary:o,__namedExportsOrder:L,default:y},Symbol.toStringTag,{value:"Module"}));export{t as A,n as D,G as L,r as O,o as S};
