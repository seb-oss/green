import{j as i}from"./jsx-runtime-u17CrQMm.js";import{c as l}from"./buttonGroup-BUQNnuDr.js";const e=({...d})=>i.jsx(l,{...d}),c={title:"Components/Form/TextArea",component:l},r={render:e.bind({}),name:"TextArea",parameters:{componentIds:["component-textarea"]},args:{label:"Text Area"}},a={render:e.bind({}),name:"Label Information",args:{label:"Text Area",info:"Label Information"}},n={render:e.bind({}),name:"Expandable Information",args:{label:"Text Area",expandableInfo:"Expandable Information"}},o={render:e.bind({}),name:"Max Length",args:{label:"Text Area",maxLength:100}},s={render:e.bind({}),name:"More Rows",args:{label:"Text Area",rows:10}},t={render:e.bind({}),name:"Error message",args:{label:"Error message",validator:{indicator:"error",message:"Error message text"}}},m={render:e.bind({}),name:"Everthing enabled",args:{label:"Text Area",expandableInfo:"Expandable Information",info:"Label information",maxLength:1e3,rows:4,validator:{indicator:"error",message:"Error message"},placeholder:"Placeholder"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: TextAreaTemplate.bind({}),
  name: 'TextArea',
  parameters: {
    componentIds: ['component-textarea']
  },
  args: {
    label: 'Text Area'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: TextAreaTemplate.bind({}),
  name: 'Label Information',
  args: {
    label: 'Text Area',
    info: 'Label Information'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: TextAreaTemplate.bind({}),
  name: 'Expandable Information',
  args: {
    label: 'Text Area',
    expandableInfo: 'Expandable Information'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: TextAreaTemplate.bind({}),
  name: 'Max Length',
  args: {
    label: 'Text Area',
    maxLength: 100
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: TextAreaTemplate.bind({}),
  name: 'More Rows',
  args: {
    label: 'Text Area',
    rows: 10
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: TextAreaTemplate.bind({}),
  name: 'Error message',
  args: {
    label: 'Error message',
    validator: {
      indicator: 'error',
      message: 'Error message text'
    }
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: TextAreaTemplate.bind({}),
  name: 'Everthing enabled',
  args: {
    label: 'Text Area',
    expandableInfo: 'Expandable Information',
    info: 'Label information',
    maxLength: 1000,
    rows: 4,
    validator: {
      indicator: 'error',
      message: 'Error message'
    },
    placeholder: 'Placeholder'
  }
}`,...m.parameters?.docs?.source}}};const p=["Default","LabelInformation","ExpandableInformation","MaxLength","MoreRows","ErrorMessage","Everything"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ErrorMessage:t,Everything:m,ExpandableInformation:n,LabelInformation:a,MaxLength:o,MoreRows:s,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{r as D,n as E,a as L,o as M,g as T,s as a,t as b,m as c};
