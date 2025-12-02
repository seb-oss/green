import{x as n}from"./iframe-C2QuDLmI.js";import{a}from"./argTableProps-Blg0_0lN.js";import{n as i}from"./formatted-number-Cj895a_I.js";import{Default as m}from"./formatted-number.stories-7huHSUgd.js";import{G as c}from"./sensitive-number.component-DiZEuFDc.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-BiShNB8H.js";import"./text-DimnLn_I.js";import"./default-typography.styles-BS8BnFVW.js";import"./flex-CYoMrG-o.js";import"./flex.component-DfsRJ6Pw.js";import"./blur.component-ClhWKVvt.js";import"./formatted-account-D7PIKjaA.js";import"./formatted-date-CnSQlPX4.js";import"./formatted-date.component-BHWryZKg.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},u={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...m.args,hide:!0}},r={...u,render:e=>n`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
    ></gds-sensitive-number>`};var t,s,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-number
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .currency=\${args.currency}
    ></gds-sensitive-number>\`
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const F=["Default"];export{r as Default,F as __namedExportsOrder,P as default};
