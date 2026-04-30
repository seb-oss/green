import{b as n}from"./iframe-CsT9moiw.js";import{a}from"./argTableProps-A5yy1ZV7.js";import{n as i}from"./formatted-number-D47j6x95.js";import{Default as m}from"./formatted-number.stories-uq13RFof.js";import{G as c}from"./sensitive-number.component-BABxT3Z5.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-sWTmWu77.js";import"./text-D6YmuKVt.js";import"./text.component-C-iPFyM3.js";import"./default-typography.styles-0H7Awlzh.js";import"./flex-BGpOyHJY.js";import"./flex.component-DByS7Bd2.js";import"./blur.component-T23_A-QT.js";import"./formatted-account-Bt10ABKV.js";import"./formatted-date-uy27_ian.js";import"./formatted-date.component-BbJ7jNHm.js";c.define();const F={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
