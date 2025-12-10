import{b,h as f,n as h,g,x as v}from"./iframe-DnRiYRln.js";import{a as y}from"./argTableProps-CubD1d-K.js";import{G as $,n as l,D}from"./formatted-number.stories-B1grIr_a.js";import{G as _}from"./blur.component-BseXeXKx.js";import"./formatted-account-DmEx_lln.js";import"./formatted-date-DuxmNuP1.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-CKsUjYKF.js";import"./text-BIgWqEN0.js";import"./default-typography.styles-D8JCcNIF.js";import"./flex-Beakqozz.js";import"./flex.component-DeEW3Lm0.js";import"./formatted-date.component-DGNkhtVy.js";var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,p=(e,s,o,t)=>{for(var r=t>1?void 0:t?P(s,o):s,i=e.length-1,m;i>=0;i--)(m=e[i])&&(r=(t?m(s,o,r):m(r))||r);return t&&r&&O(s,o,r),r};let n=class extends ${constructor(){super(...arguments),this.hide=!1}get formattedValue(){return this.hide?l[this.format](0,this.locale,this.currency,this.decimals):super.formattedValue}render(){return b(this.hide,()=>f`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}updated(e){super.updated(e),this.element&&(this.element.ariaLabel=super.formattedValue)}};p([h({type:Boolean})],n.prototype,"hide",2);n=p([g("gds-sensitive-number",{dependsOn:[_]})],n);n.define();const z={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...y("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(l)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},G={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...D.args,hide:!0}},a={...G,render:e=>v`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`};var u,d,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-number
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .currency=\${args.currency}
      .decimals=\${args.decimals}
    ></gds-sensitive-number>\`
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const A=["Default"];export{a as Default,A as __namedExportsOrder,z as default};
