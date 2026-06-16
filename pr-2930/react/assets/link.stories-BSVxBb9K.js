import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as s}from"./link-CABbgsMJ.js";const i=({...a})=>e.jsx(s,{...a}),d={title:"Components/Link",component:s,argTypes:{button:{options:[void 0,"primary","secondary","ghost"]}}},n={render:i.bind({}),name:"Link",parameters:{componentIds:["component-inlinelinks"]},args:{children:"Go to seb.se",href:"https://seb.se"}},r={render:()=>e.jsxs("div",{children:[e.jsx("div",{className:"bg-info p-4 my-4",children:e.jsx(s,{href:"https://seb.se",variant:"white",children:"Go to seb.se in blue"})}),e.jsx("div",{className:"bg-success p-4 my-4",children:e.jsx(s,{href:"https://seb.se",variant:"white",children:"Go to seb.se in green"})}),e.jsx("div",{className:"bg-warning p-4 my-4",children:e.jsx(s,{href:"https://seb.se",variant:"black",children:"Go to seb.se in yellow"})}),e.jsx("div",{className:"bg-danger p-4 my-4",children:e.jsx(s,{href:"https://seb.se",variant:"white",children:"Go to seb.se in red"})})]})},t={render:()=>e.jsxs("div",{children:[e.jsx(s,{button:"secondary",href:"https://seb.se",children:"Go to seb.se as default button"}),e.jsx(s,{button:"primary",href:"https://seb.se",children:"Go to seb.se as primary button"}),e.jsx(s,{button:"ghost-dark",href:"https://seb.se",children:"Go to seb.se as ghost button"})]})},o={render:()=>e.jsx("div",{children:e.jsxs(s,{variant:"black",href:"#",children:["Go to page",e.jsx(GdsIconArrowRight,{})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Link',
  parameters: {
    componentIds: ['component-inlinelinks']
  },
  args: {
    children: 'Go to seb.se',
    href: 'https://seb.se'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Link variant="black" href="#">
        Go to page
        <GdsIconArrowRight />
      </Link>
    </div>
}`,...o.parameters?.docs?.source}}};const c=["Default","OnBackground","AsButton","WithIcon"],b=Object.freeze(Object.defineProperty({__proto__:null,AsButton:t,Default:n,OnBackground:r,WithIcon:o,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{t as A,n as D,b as L,r as O};
