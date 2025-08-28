import{x as u}from"./lit-element-Bx14lxc-.js";import{a as f}from"./argTableProps-igFDfjcn.js";import{n as v}from"./Reflect-DJ7r0WLU.js";import{n as g}from"./when-BR7zwNJC.js";import{h,g as b}from"./gds-element-DJNCW3iR.js";import{G as y}from"./blur.component-l586ZG_e.js";import{G as D,d as $}from"./formatted-date.component-B81iK-mR.js";import"./custom-elements-FfewbHFV.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-Bnmv-l1x.js";import"./query-p8xgzTDt.js";import"./text-CpLxPS4E.js";import"./text.component-sQTeJzVf.js";import"./static-B8S6DEnV.js";import"./tokens.style-iX6aIK9m.js";import"./declarative-layout-mixins-CquYcIh8.js";import"./div.component-Cx0JXo06.js";var O=Object.defineProperty,_=Object.getOwnPropertyDescriptor,c=(e,r,n,s)=>{for(var t=s>1?void 0:s?_(r,n):r,i=e.length-1,d;i>=0;i--)(d=e[i])&&(t=(s?d(r,n,t):d(t))||t);return s&&t&&O(r,n,t),t};let o=class extends D{constructor(){super(...arguments),this.hide=!1}render(){return g(this.hide,()=>h`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};c([v({type:Boolean})],o.prototype,"hide",2);o=c([b("gds-sensitive-date",{dependsOn:[y]})],o);o.define();const K={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...f("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys($)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

GdsSensitiveDate displays a formatted date and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},P={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{hide:!0,value:new Date(2025,1,25,14,17,30),locale:"sv-SE",format:"dateOnlyNumbers"}},a={...P,render:e=>u`<gds-sensitive-date
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .format=${e.format}
    ></gds-sensitive-date>`};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-date
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .format=\${args.format}
    ></gds-sensitive-date>\`
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const L=["Default"];export{a as Default,L as __namedExportsOrder,K as default};
