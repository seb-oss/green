import{j as u}from"./jsx-runtime-u17CrQMm.js";import{S as i}from"./slider-Bk1mhZZU.js";const e=s=>u.jsx(i,{...s}),m={title:"Components/Slider",component:i,argTypes:{name:{name:"name",control:{type:"text"}},value:{name:"value",defaultValue:50,control:{type:"number"}},min:{name:"min",defaultValue:0,control:{type:"number"}},max:{name:"max",defaultValue:100,control:{type:"number"}},showMinMax:{name:"showMinMax",defaultValue:!1,control:{type:"boolean"}},step:{name:"step",defaultValue:1,control:{type:"number"}},label:{name:"label",defaultValue:"Slider label text in one line",control:{type:"text"}},instruction:{name:"instruction",defaultValue:"Element instruction",control:{type:"text"}},hasTextbox:{name:"hasTextbox",control:{type:"boolean"}},unitLabel:{name:"Unit label",control:{type:"text"}},errorMessage:{name:"errorMessage",control:{type:"text"}},disabled:{name:"disabled",control:{type:"boolean"}}}},n={render:e.bind({}),name:"Default",args:{label:"Slider label text in one line",instruction:"Element instruction",value:0}},t={render:e.bind({}),name:"Textbox",args:{label:"Slider label text in one line",instruction:"Element instruction",value:50,hasTextbox:!0}},r={render:e.bind({}),name:"UnitTextbox",args:{label:"Slider label text in one line",instruction:"Element instruction",value:50,hasTextbox:!0,unitLabel:"kr",showMinMax:!0}},a={render:e.bind({}),name:"Error",args:{label:"Slider label text in one line",instruction:"Element instruction",value:50,hasTextbox:!0,errorMessage:"Error text can be quite long"}},l={render:e.bind({}),name:"Disabled",args:{label:"Slider label text in one line",instruction:"Element instruction",value:50,hasTextbox:!0,disabled:!0}},o={render:e.bind({}),name:"HighNumber",args:{label:"Slider label text in one line",instruction:"Element instruction",min:3e3,max:15e3,value:5e3,hasTextbox:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Default',
  args: {
    label: 'Slider label text in one line',
    instruction: 'Element instruction',
    value: 0
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Textbox',
  args: {
    label: 'Slider label text in one line',
    instruction: 'Element instruction',
    value: 50,
    hasTextbox: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'UnitTextbox',
  args: {
    label: 'Slider label text in one line',
    instruction: 'Element instruction',
    value: 50,
    hasTextbox: true,
    unitLabel: 'kr',
    showMinMax: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Error',
  args: {
    label: 'Slider label text in one line',
    instruction: 'Element instruction',
    value: 50,
    hasTextbox: true,
    errorMessage: 'Error text can be quite long'
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Disabled',
  args: {
    label: 'Slider label text in one line',
    instruction: 'Element instruction',
    value: 50,
    hasTextbox: true,
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'HighNumber',
  args: {
    label: 'Slider label text in one line',
    instruction: 'Element instruction',
    min: 3000,
    max: 15000,
    value: 5000,
    hasTextbox: true
  }
}`,...o.parameters?.docs?.source}}};const c=["Default","Textbox","UnitTextbox","Error","Disabled","HighNumber"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:l,Error:a,HighNumber:o,Textbox:t,UnitTextbox:r,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{n as D,a as E,o as H,x as S,t as T,r as U,l as a};
