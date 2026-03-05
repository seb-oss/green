import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as s}from"./link-D4A9Ir6Y.js";const f=({...k})=>e.jsx(s,{...k}),L={title:"Components/Link",component:s,argTypes:{button:{options:[void 0,"primary","secondary","ghost"]}}},n={render:f.bind({}),name:"Link",parameters:{componentIds:["component-inlinelinks"]},args:{children:"Go to seb.se",href:"https://seb.se"}},r={render:()=>e.jsxs("div",{children:[e.jsx("div",{className:"bg-info p-4 my-4",children:e.jsx(s,{href:"https://seb.se",variant:"white",children:"Go to seb.se in blue"})}),e.jsx("div",{className:"bg-success p-4 my-4",children:e.jsx(s,{href:"https://seb.se",variant:"white",children:"Go to seb.se in green"})}),e.jsx("div",{className:"bg-warning p-4 my-4",children:e.jsx(s,{href:"https://seb.se",variant:"black",children:"Go to seb.se in yellow"})}),e.jsx("div",{className:"bg-danger p-4 my-4",children:e.jsx(s,{href:"https://seb.se",variant:"white",children:"Go to seb.se in red"})})]})},t={render:()=>e.jsxs("div",{children:[e.jsx(s,{button:"secondary",href:"https://seb.se",children:"Go to seb.se as default button"}),e.jsx(s,{button:"primary",href:"https://seb.se",children:"Go to seb.se as primary button"}),e.jsx(s,{button:"ghost-dark",href:"https://seb.se",children:"Go to seb.se as ghost button"})]})},o={render:()=>e.jsx("div",{children:e.jsxs(s,{variant:"black",href:"#",children:["Go to page",e.jsx(GdsIconArrowRight,{})]})})};var a,i,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Link',
  parameters: {
    componentIds: ['component-inlinelinks']
  },
  args: {
    children: 'Go to seb.se',
    href: 'https://seb.se'
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,h,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div>
      <div className="bg-info p-4 my-4">
        <Link href="https://seb.se" variant="white">
          Go to seb.se in blue
        </Link>
      </div>

      <div className="bg-success p-4 my-4">
        <Link href="https://seb.se" variant="white">
          Go to seb.se in green
        </Link>
      </div>

      <div className="bg-warning p-4 my-4">
        <Link href="https://seb.se" variant="black">
          Go to seb.se in yellow
        </Link>
      </div>

      <div className="bg-danger p-4 my-4">
        <Link href="https://seb.se" variant="white">
          Go to seb.se in red
        </Link>
      </div>
    </div>
}`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var b,l,m;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div>
      <Link button="secondary" href="https://seb.se">
        Go to seb.se as default button
      </Link>
      <Link button="primary" href="https://seb.se">
        Go to seb.se as primary button
      </Link>
      <Link button="ghost-dark" href="https://seb.se">
        Go to seb.se as ghost button
      </Link>
    </div>
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,g,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div>
      <Link variant="black" href="#">
        Go to page
        <GdsIconArrowRight />
      </Link>
    </div>
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const j=["Default","OnBackground","AsButton","WithIcon"],G=Object.freeze(Object.defineProperty({__proto__:null,AsButton:t,Default:n,OnBackground:r,WithIcon:o,__namedExportsOrder:j,default:L},Symbol.toStringTag,{value:"Module"}));export{t as A,n as D,G as L,r as O};
