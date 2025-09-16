import{x as f}from"./lit-element-Bx14lxc-.js";import{a as h}from"./argTableProps-D7nlzLws.js";import{G as b,n as c,D as g}from"./formatted-number.stories-Chs8MPBv.js";import{n as v}from"./Reflect-DJ7r0WLU.js";import{n as y}from"./when-BR7zwNJC.js";import{h as $,g as D}from"./gds-element-DTROifYq.js";import{G as _}from"./blur.component-BGBTarqF.js";import"./formatted-account-DBOEfVjE.js";import"./formatted-date-CbBodzz2.js";import"./custom-elements-iWGUBrkm.js";import"./formatted-text-C2Pi_Ah9.js";import"./query-p8xgzTDt.js";import"./text-CGs4FaNM.js";import"./text.component-Bj-mfcJo.js";import"./static-B8S6DEnV.js";import"./tokens.style-BbYzqIl5.js";import"./declarative-layout-mixins-DjJmHTNk.js";import"./div.component-B29G9lH6.js";import"./flex-BtxQsGDK.js";import"./flex.component-DrvIPzOi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-date.component-Ba0nCo3_.js";var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,l=(e,t,a,s)=>{for(var r=s>1?void 0:s?P(t,a):t,i=e.length-1,m;i>=0;i--)(m=e[i])&&(r=(s?m(t,a,r):m(r))||r);return s&&r&&O(t,a,r),r};let n=class extends b{constructor(){super(...arguments),this.hide=!1}get formattedValue(){return this.hide?c[this.format](0,this.locale,this.currency):super.formattedValue}render(){return y(this.hide,()=>$`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}updated(e){super.updated(e),this.element&&(this.element.ariaLabel=super.formattedValue)}};l([v({type:Boolean})],n.prototype,"hide",2);n=l([D("gds-sensitive-number",{dependsOn:[_]})],n);n.define();const U={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...h("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(c)},currency:{type:"string"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},G={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...g.args,hide:!0}},o={...G,render:e=>f`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
    ></gds-sensitive-number>`};var u,p,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-number
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .currency=\${args.currency}
    ></gds-sensitive-number>\`
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
