import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{I as T}from"./buttonGroup-B6pTL06F.js";const e=({..._})=>y.jsx(T,{..._}),j={title:"Components/Form/Input",component:T},n={render:e.bind({}),name:"Input",parameters:{componentIds:["component-input"]},args:{}},a={render:e.bind({}),name:"With form info",args:{label:"Label",info:"Some info text"}},r={render:e.bind({}),name:"With expandable info",args:{label:"Label",expandableInfo:"Some info text",expandableInfoButtonLabel:"Show more info"}},o={render:e.bind({}),name:"With unit label",args:{label:"Label",unit:"kr"}},t={render:e.bind({}),name:"With validator",args:{label:"Label",validator:{indicator:"error",message:"Error message"}}},s={render:e.bind({}),name:"With everything enabled",args:{label:"Label",expandableInfo:"Some expandable text",info:"Some info text",maxLength:100,rows:5,placeholder:"Placeholder",unit:"kr",validator:{indicator:"error",message:"Error message"}}};var i,l,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: InputTemplate.bind({}),
  name: 'Input',
  parameters: {
    componentIds: ['component-input']
  },
  args: {}
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: InputTemplate.bind({}),
  name: 'With form info',
  args: {
    label: 'Label',
    info: 'Some info text'
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var b,u,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: InputTemplate.bind({}),
  name: 'With expandable info',
  args: {
    label: 'Label',
    expandableInfo: 'Some info text',
    expandableInfoButtonLabel: 'Show more info'
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,x,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: InputTemplate.bind({}),
  name: 'With unit label',
  args: {
    label: 'Label',
    unit: 'kr'
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var I,S,L;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: InputTemplate.bind({}),
  name: 'With validator',
  args: {
    label: 'Label',
    validator: {
      indicator: 'error',
      message: 'Error message'
    }
  }
}`,...(L=(S=t.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var W,v,E;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const k=["Default","WithFormInfo","WithExpandableInfo","UnitLabel","Validator","Everything"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Everything:s,UnitLabel:o,Validator:t,WithExpandableInfo:r,WithFormInfo:a,__namedExportsOrder:k,default:j},Symbol.toStringTag,{value:"Module"}));export{n as D,s as E,F as I,o as U,t as V,a as W,r as a};
