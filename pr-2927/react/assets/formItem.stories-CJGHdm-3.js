import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as s,N as i}from"./buttonGroup-BbTOpb0T.js";import{S as r,O as o}from"./select-BmDfOJGM.js";const l=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{label:"This is a label",info:"this is information label",children:[e.jsx(o,{children:"This is an option"}),e.jsx(o,{children:"This is an option"})]}),e.jsxs(r,{label:"This is a label",info:"this is information label",children:[e.jsx(o,{children:"This is an option"}),e.jsx(o,{children:"This is an option"})]})]}),m={title:"Components/FormItem",component:s},n={render:l.bind({}),name:"TextInput",parameters:{componentIds:["component-input"]},args:{label:"Text input",info:"Input some text here"}},a={render:()=>e.jsx(i,{label:"Hur mycket vill du låna?",info:"För att du ska kunna få låna pengar behöver vi veta hur mycket",expandableInfo:"This is some expandable information that is very long as was created that way in order to test how it preforms in such a situation",expandableInfoButtonLabel:"Toggle additional information"}),name:"Expandable information"},t={render:()=>e.jsx(i,{label:"Hur mycket vill du låna?",info:"För att du ska kunna få låna pengar behöver vi veta hur mycket",expandableInfo:e.jsxs(e.Fragment,{children:["Using JSX here is useful if you need to include for example a",e.jsx("a",{href:"#",children:"link"})]}),expandableInfoButtonLabel:"Toggle additional information"}),name:"Expandable information JSX"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'TextInput',
  parameters: {
    componentIds: ['component-input']
  },
  args: {
    label: 'Text input',
    info: 'Input some text here'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <NumberInput label="Hur mycket vill du låna?" info="För att du ska kunna få låna pengar behöver vi veta hur mycket" expandableInfo="This is some expandable information that is very long as was created that way in order to test how it preforms in such a situation" expandableInfoButtonLabel="Toggle additional information" />,
  name: 'Expandable information'
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <NumberInput label="Hur mycket vill du låna?" info="För att du ska kunna få låna pengar behöver vi veta hur mycket" expandableInfo={<>
          Using JSX here is useful if you need to include for example a
          <a href="#">link</a>
        </>} expandableInfoButtonLabel="Toggle additional information" />,
  name: 'Expandable information JSX'
}`,...t.parameters?.docs?.source}}};const d=["TextInput","ExpandableInformation","ExpandableInformationJsx"],f=Object.freeze(Object.defineProperty({__proto__:null,ExpandableInformation:a,ExpandableInformationJsx:t,TextInput:n,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{a as E,f as F,n as T,t as a};
