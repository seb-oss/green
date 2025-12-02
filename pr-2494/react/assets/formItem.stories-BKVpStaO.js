import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as x,N as b}from"./buttonGroup-BX6xwggr.js";import{S as r,O as o}from"./select-BqqXJtmo.js";const h=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{label:"This is a label",info:"this is information label",children:[e.jsx(o,{children:"This is an option"}),e.jsx(o,{children:"This is an option"})]}),e.jsxs(r,{label:"This is a label",info:"this is information label",children:[e.jsx(o,{children:"This is an option"}),e.jsx(o,{children:"This is an option"})]})]}),I={title:"Components/FormItem",component:x},n={render:h.bind({}),name:"TextInput",parameters:{componentIds:["component-input"]},args:{label:"Text input",info:"Input some text here"}},a={render:()=>e.jsx(b,{label:"Hur mycket vill du låna?",info:"För att du ska kunna få låna pengar behöver vi veta hur mycket",expandableInfo:"This is some expandable information that is very long as was created that way in order to test how it preforms in such a situation",expandableInfoButtonLabel:"Toggle additional information"}),name:"Expandable information"},t={render:()=>e.jsx(b,{label:"Hur mycket vill du låna?",info:"För att du ska kunna få låna pengar behöver vi veta hur mycket",expandableInfo:e.jsxs(e.Fragment,{children:["Using JSX here is useful if you need to include for example a",e.jsx("a",{href:"#",children:"link"})]}),expandableInfoButtonLabel:"Toggle additional information"}),name:"Expandable information JSX"};var i,s,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'TextInput',
  parameters: {
    componentIds: ['component-input']
  },
  args: {
    label: 'Text input',
    info: 'Input some text here'
  }
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <NumberInput label="Hur mycket vill du låna?" info="För att du ska kunna få låna pengar behöver vi veta hur mycket" expandableInfo="This is some expandable information that is very long as was created that way in order to test how it preforms in such a situation" expandableInfoButtonLabel="Toggle additional information" />,
  name: 'Expandable information'
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,c,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <NumberInput label="Hur mycket vill du låna?" info="För att du ska kunna få låna pengar behöver vi veta hur mycket" expandableInfo={<>
          Using JSX here is useful if you need to include for example a
          <a href="#">link</a>
        </>} expandableInfoButtonLabel="Toggle additional information" />,
  name: 'Expandable information JSX'
}`,...(f=(c=t.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const g=["TextInput","ExpandableInformation","ExpandableInformationJsx"],y=Object.freeze(Object.defineProperty({__proto__:null,ExpandableInformation:a,ExpandableInformationJsx:t,TextInput:n,__namedExportsOrder:g,default:I},Symbol.toStringTag,{value:"Module"}));export{a as E,y as F,n as T,t as a};
