import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{S as g}from"./stepper-CUx-jWew.js";const _=v=>f.jsx(g,{...v}),L={title:"Components/Stepper",component:g},e={render:_.bind({}),name:"Stepper",parameters:{componentIds:["component-stepper"]},args:{label:"Label",description:"Label information"}},r={name:"Basic stepper",args:{label:"Label"}},a={name:"Primitive Stepper"},t={name:"Stepper validation",args:{value:"Two",validator:{message:"Must be a number",indicator:"error"}}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Stepper',
  parameters: {
    componentIds: ['component-stepper']
  },
  args: {
    label: 'Label',
    description: 'Label information'
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var p,i,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Basic stepper',
  args: {
    label: 'Label'
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Primitive Stepper'
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,S,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Stepper validation',
  args: {
    value: 'Two',
    validator: {
      message: 'Must be a number',
      indicator: 'error'
    }
  }
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const P=["Default","BasicStepper","PrimitiveStepper","StepperValidation"],B=Object.freeze(Object.defineProperty({__proto__:null,BasicStepper:r,Default:e,PrimitiveStepper:a,StepperValidation:t,__namedExportsOrder:P,default:L},Symbol.toStringTag,{value:"Module"}));export{r as B,e as D,a as P,B as S,t as a};
