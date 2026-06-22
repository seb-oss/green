import{j as m}from"./jsx-runtime-u17CrQMm.js";import{I as i}from"./buttonGroup-DBR3pJKE.js";const e=({...l})=>m.jsx(i,{...l}),d={title:"Components/Form/Input",component:i},n={render:e.bind({}),name:"Input",parameters:{componentIds:["component-input"]},args:{}},a={render:e.bind({}),name:"With form info",args:{label:"Label",info:"Some info text"}},r={render:e.bind({}),name:"With expandable info",args:{label:"Label",expandableInfo:"Some info text",expandableInfoButtonLabel:"Show more info"}},o={render:e.bind({}),name:"With unit label",args:{label:"Label",unit:"kr"}},t={render:e.bind({}),name:"With validator",args:{label:"Label",validator:{indicator:"error",message:"Error message"}}},s={render:e.bind({}),name:"With everything enabled",args:{label:"Label",expandableInfo:"Some expandable text",info:"Some info text",maxLength:100,rows:5,placeholder:"Placeholder",unit:"kr",validator:{indicator:"error",message:"Error message"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: InputTemplate.bind({}),
  name: 'Input',
  parameters: {
    componentIds: ['component-input']
  },
  args: {}
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: InputTemplate.bind({}),
  name: 'With form info',
  args: {
    label: 'Label',
    info: 'Some info text'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: InputTemplate.bind({}),
  name: 'With expandable info',
  args: {
    label: 'Label',
    expandableInfo: 'Some info text',
    expandableInfoButtonLabel: 'Show more info'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: InputTemplate.bind({}),
  name: 'With unit label',
  args: {
    label: 'Label',
    unit: 'kr'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: InputTemplate.bind({}),
  name: 'With validator',
  args: {
    label: 'Label',
    validator: {
      indicator: 'error',
      message: 'Error message'
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: InputTemplate.bind({}),
  name: 'With everything enabled',
  args: {
    label: 'Label',
    expandableInfo: 'Some expandable text',
    info: 'Some info text',
    maxLength: 100,
    rows: 5,
    placeholder: 'Placeholder',
    unit: 'kr',
    validator: {
      indicator: 'error',
      message: 'Error message'
    }
  }
}`,...s.parameters?.docs?.source}}};const p=["Default","WithFormInfo","WithExpandableInfo","UnitLabel","Validator","Everything"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Everything:s,UnitLabel:o,Validator:t,WithExpandableInfo:r,WithFormInfo:a,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{n as D,s as E,u as I,o as U,t as V,a as W,r as a};
