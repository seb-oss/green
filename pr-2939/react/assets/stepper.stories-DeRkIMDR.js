import{j as o}from"./jsx-runtime-u17CrQMm.js";import{S as s}from"./stepper-DUTAGRrX.js";const p=n=>o.jsx(s,{...n}),i={title:"Components/Stepper",component:s},e={render:p.bind({}),name:"Stepper",parameters:{componentIds:["component-stepper"]},args:{label:"Label",description:"Label information"}},r={name:"Basic stepper",args:{label:"Label"}},a={name:"Primitive Stepper"},t={name:"Stepper validation",args:{value:"Two",validator:{message:"Must be a number",indicator:"error"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Stepper',
  parameters: {
    componentIds: ['component-stepper']
  },
  args: {
    label: 'Label',
    description: 'Label information'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Basic stepper',
  args: {
    label: 'Label'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Primitive Stepper'
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Stepper validation',
  args: {
    value: 'Two',
    validator: {
      message: 'Must be a number',
      indicator: 'error'
    }
  }
}`,...t.parameters?.docs?.source}}};const m=["Default","BasicStepper","PrimitiveStepper","StepperValidation"],d=Object.freeze(Object.defineProperty({__proto__:null,BasicStepper:r,Default:e,PrimitiveStepper:a,StepperValidation:t,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{r as B,e as D,a as P,d as S,t as a};
