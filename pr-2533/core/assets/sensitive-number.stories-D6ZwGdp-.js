import{b as f,h as b,n as h,g,x as v}from"./iframe-BDogtV4N.js";import{a as y}from"./argTableProps-TTsEO0I-.js";import{G as $,n as c,D}from"./formatted-number.stories-DgnIBNId.js";import{G as _}from"./blur.component-Dg8A0ZYe.js";import"./formatted-account-BIlO2PNd.js";import"./formatted-date-CtI6NnCN.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-DzUA88wx.js";import"./text-DV57oZIr.js";import"./default-typography.styles-Btc_wgMs.js";import"./flex-I30YdJ6z.js";import"./flex.component-CJAmK2r0.js";import"./formatted-date.component-CmhCClEb.js";var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,l=(e,t,o,s)=>{for(var r=s>1?void 0:s?P(t,o):t,i=e.length-1,u;i>=0;i--)(u=e[i])&&(r=(s?u(t,o,r):u(r))||r);return s&&r&&O(t,o,r),r};let a=class extends ${constructor(){super(...arguments),this.hide=!1}get formattedValue(){return this.hide?c[this.format](0,this.locale,this.currency):super.formattedValue}render(){return f(this.hide,()=>b`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}updated(e){super.updated(e),this.element&&(this.element.ariaLabel=super.formattedValue)}};l([h({type:Boolean})],a.prototype,"hide",2);a=l([g("gds-sensitive-number",{dependsOn:[_]})],a);a.define();const z={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...y("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(c)},currency:{type:"string"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},G={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...D.args,hide:!0}},n={...G,render:e=>v`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
    ></gds-sensitive-number>`};var m,d,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-number
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .currency=\${args.currency}
    ></gds-sensitive-number>\`
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const A=["Default"];export{n as Default,A as __namedExportsOrder,z as default};
