import{b as n}from"./iframe-DK0RITXN.js";import{a}from"./argTableProps-DKKQpteZ.js";import{n as i}from"./formatted-number-Bm3rlVuL.js";import{Default as m}from"./formatted-number.stories-BpkcKISu.js";import{G as c}from"./sensitive-number.component-Ca_y6xLw.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-DB5_Iy36.js";import"./text-CFGZV6Vb.js";import"./text.component-cCX79pHX.js";import"./default-typography.styles-DA0MYNa-.js";import"./flex-CF1KIpAj.js";import"./flex.component-wPtAFch1.js";import"./blur.component-n2I8zQI7.js";import"./formatted-account-DZqwguIy.js";import"./formatted-date-BoYpPiLb.js";import"./formatted-date.component-D4eHytpU.js";c.define();const F={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},u={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...m.args,hide:!0}},r={...u,render:e=>n`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`};var t,s,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-number
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .currency=\${args.currency}
      .decimals=\${args.decimals}
    ></gds-sensitive-number>\`
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const O=["Default"];export{r as Default,O as __namedExportsOrder,F as default};
