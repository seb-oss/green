import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{S as D}from"./slider-DX_uHrMb.js";const e=V=>_.jsx(D,{...V}),U={title:"Components/Slider",component:D,argTypes:{name:{name:"name",control:{type:"text"}},value:{name:"value",defaultValue:50,control:{type:"number"}},min:{name:"min",defaultValue:0,control:{type:"number"}},max:{name:"max",defaultValue:100,control:{type:"number"}},showMinMax:{name:"showMinMax",defaultValue:!1,control:{type:"boolean"}},step:{name:"step",defaultValue:1,control:{type:"number"}},label:{name:"label",defaultValue:"Slider label text in one line",control:{type:"text"}},instruction:{name:"instruction",defaultValue:"Element instruction",control:{type:"text"}},hasTextbox:{name:"hasTextbox",control:{type:"boolean"}},unitLabel:{name:"Unit label",control:{type:"text"}},errorMessage:{name:"errorMessage",control:{type:"text"}},disabled:{name:"disabled",control:{type:"boolean"}}}},n={render:e.bind({}),name:"Default",args:{label:"Slider label text in one line",instruction:"Element instruction",value:0}},t={render:e.bind({}),name:"Textbox",args:{label:"Slider label text in one line",instruction:"Element instruction",value:50,hasTextbox:!0}},r={render:e.bind({}),name:"UnitTextbox",args:{label:"Slider label text in one line",instruction:"Element instruction",value:50,hasTextbox:!0,unitLabel:"kr",showMinMax:!0}},a={render:e.bind({}),name:"Error",args:{label:"Slider label text in one line",instruction:"Element instruction",value:50,hasTextbox:!0,errorMessage:"Error text can be quite long"}},l={render:e.bind({}),name:"Disabled",args:{label:"Slider label text in one line",instruction:"Element instruction",value:50,hasTextbox:!0,disabled:!0}},o={render:e.bind({}),name:"HighNumber",args:{label:"Slider label text in one line",instruction:"Element instruction",min:3e3,max:15e3,value:5e3,hasTextbox:!0}};var i,s,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Default',
  args: {
    label: 'Slider label text in one line',
    instruction: 'Element instruction',
    value: 0
  }
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var m,c,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Textbox',
  args: {
    label: 'Slider label text in one line',
    instruction: 'Element instruction',
    value: 50,
    hasTextbox: true
  }
}`,...(b=(c=t.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var d,x,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(x=r.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var g,T,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Error',
  args: {
    label: 'Slider label text in one line',
    instruction: 'Element instruction',
    value: 50,
    hasTextbox: true,
    errorMessage: 'Error text can be quite long'
  }
}`,...(S=(T=a.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,h,f;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Disabled',
  args: {
    label: 'Slider label text in one line',
    instruction: 'Element instruction',
    value: 50,
    hasTextbox: true,
    disabled: true
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,y,M;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(M=(y=o.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const j=["Default","Textbox","UnitTextbox","Error","Disabled","HighNumber"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:l,Error:a,HighNumber:o,Textbox:t,UnitTextbox:r,__namedExportsOrder:j,default:U},Symbol.toStringTag,{value:"Module"}));export{n as D,a as E,o as H,N as S,t as T,r as U,l as a};
