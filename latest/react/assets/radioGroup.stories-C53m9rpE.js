import{j as a}from"./jsx-runtime-u17CrQMm.js";import{R as i,b as o}from"./buttonGroup-CMFAhgVv.js";const s=({...l})=>a.jsxs(i,{...l,children:[a.jsx(o,{value:"value-1",label:"First label"}),a.jsx(o,{value:"value-2",label:"Second label"})]}),d={title:"Components/Form/RadioGroup",component:i},e={render:s.bind({}),name:"Default",parameters:{componentIds:["component-radiogroup"]},args:{label:"Radio group",labelInformation:"This is longer information describing the input"}},n={render:()=>a.jsxs(i,{label:"Radio Group",labelInformation:"Radio Group Description",expandableInfo:"This is a long expandable information that can be sent to the radio group component",expandableInfoButtonLabel:"Toggle additional information",children:[a.jsx(o,{label:"Radio Button 1",name:"name",value:"button1"}),a.jsx(o,{label:"Radio Button 2",name:"name",value:"button2"})]}),name:"Expandable information"},t={render:()=>a.jsxs(i,{label:"Radio Group",labelInformation:"Radio Group Description",validator:{message:"This form item is invalid! And what happens if its really long?",indicator:"error"},children:[a.jsx(o,{label:"Radio Button 1",name:"name",value:"button1"}),a.jsx(o,{label:"Radio Button 2",name:"name",value:"button2"})]}),name:"Validation"},r={render:()=>a.jsxs(i,{label:"Radio Group",labelInformation:"Radio Group Description",validator:{message:"This form item is invalid! And what happens if its really long?",indicator:"error"},horizontal:!0,children:[a.jsx(o,{label:"Radio Button 1",name:"name",value:"button1"}),a.jsx(o,{label:"Radio Button 2",name:"name",value:"button2"})]}),name:"Horizontal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: RadioGroupTemplate.bind({}),
  name: 'Default',
  parameters: {
    componentIds: ['component-radiogroup']
  },
  args: {
    label: 'Radio group',
    labelInformation: 'This is longer information describing the input'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Radio Group" labelInformation="Radio Group Description" expandableInfo="This is a long expandable information that can be sent to the radio group component" expandableInfoButtonLabel="Toggle additional information">
      <RadioButton label="Radio Button 1" name="name" value="button1" />
      <RadioButton label="Radio Button 2" name="name" value="button2" />
    </RadioGroup>,
  name: 'Expandable information'
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Radio Group" labelInformation="Radio Group Description" validator={{
    message: 'This form item is invalid! And what happens if its really long?',
    indicator: 'error'
  }}>
      <RadioButton label="Radio Button 1" name="name" value="button1" />
      <RadioButton label="Radio Button 2" name="name" value="button2" />
    </RadioGroup>,
  name: 'Validation'
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Radio Group" labelInformation="Radio Group Description" validator={{
    message: 'This form item is invalid! And what happens if its really long?',
    indicator: 'error'
  }} horizontal>
      <RadioButton label="Radio Button 1" name="name" value="button1" />
      <RadioButton label="Radio Button 2" name="name" value="button2" />
    </RadioGroup>,
  name: 'Horizontal'
}`,...r.parameters?.docs?.source}}};const u=["Default","ExpandableInformation","Validation","Horizontal"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,ExpandableInformation:n,Horizontal:r,Validation:t,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{e as D,n as E,r as H,b as R,t as V};
