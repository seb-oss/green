import{x as u}from"./lit-element-Bx14lxc-.js";import{a as f}from"./argTableProps-C58ol04L.js";import{n as v}from"./Reflect-DJ7r0WLU.js";import{n as g}from"./when-BR7zwNJC.js";import{h,g as b}from"./gds-element-DTROifYq.js";import{G as y}from"./blur.component-BGBTarqF.js";import{G as D}from"./formatted-date.component-DW96camp.js";import{d as $}from"./date-time-formatter-CDCzkLUh.js";import"./custom-elements-CY29-qw6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-eReGnt3N.js";import"./query-p8xgzTDt.js";import"./text-BKUjny80.js";import"./static-B8S6DEnV.js";import"./tokens.style-CQAfIFlK.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./div.component-CXtUXgO1.js";import"./default-typography.styles-B_Uut80G.js";var O=Object.defineProperty,_=Object.getOwnPropertyDescriptor,c=(e,r,i,s)=>{for(var t=s>1?void 0:s?_(r,i):r,n=e.length-1,m;n>=0;n--)(m=e[n])&&(t=(s?m(r,i,t):m(t))||t);return s&&t&&O(r,i,t),t};let a=class extends D{constructor(){super(...arguments),this.hide=!1}render(){return g(this.hide,()=>h`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};c([v({type:Boolean})],a.prototype,"hide",2);a=c([b("gds-sensitive-date",{dependsOn:[y]})],a);a.define();const L={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...f("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys($)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

GdsSensitiveDate displays a formatted date and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},P={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{hide:!0,value:new Date(2025,1,25,14,17,30),locale:"sv-SE",format:"dateOnlyNumbers"}},o={...P,render:e=>u`<gds-sensitive-date
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .format=${e.format}
    ></gds-sensitive-date>`};var d,p,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-date
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .format=\${args.format}
    ></gds-sensitive-date>\`
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,L as default};
