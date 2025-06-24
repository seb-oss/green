import{x as u}from"./lit-element-Bx14lxc-.js";import{a as f}from"./argTableProps-CLK4BX4x.js";import{h as v,n as g,g as h}from"./gds-element-DKcDvDP5.js";import{n as b}from"./when-BR7zwNJC.js";import{G as y}from"./blur.component-L2D1JH52.js";import{G as D,d as $}from"./formatted-date.component-CrDx1Qaw.js";import"./custom-elements-DLWnBe5L.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-iJrcrAkf.js";import"./query-p8xgzTDt.js";import"./text-DbbUfaRq.js";import"./static-B8S6DEnV.js";import"./tokens.style-BxbMzGpH.js";import"./declarative-layout-mixins-mU9_fNeX.js";import"./div.component-CD5LQ9NF.js";var O=Object.defineProperty,_=Object.getOwnPropertyDescriptor,c=(e,s,n,r)=>{for(var t=r>1?void 0:r?_(s,n):s,i=e.length-1,d;i>=0;i--)(d=e[i])&&(t=(r?d(s,n,t):d(t))||t);return r&&t&&O(s,n,t),t};let o=class extends D{constructor(){super(...arguments),this.hide=!1}render(){return b(this.hide,()=>v`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};c([g({type:Boolean})],o.prototype,"hide",2);o=c([h("gds-sensitive-date",{dependsOn:[y]})],o);o.define();const I={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...f("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys($)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

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
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const J=["Default"];export{a as Default,J as __namedExportsOrder,I as default};
