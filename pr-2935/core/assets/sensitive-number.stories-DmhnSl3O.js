import{b as t}from"./iframe-p6wZi82o.js";import{a as s}from"./argTableProps-ClcgwrkG.js";import{n as o}from"./formatted-number-BN0UMsw5.js";import{Default as n}from"./formatted-number.stories-B9QC6LyE.js";import{G as a}from"./sensitive-number.component-JO3Uv_Yy.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-B3QH1B5H.js";import"./text-Cd23Sqbe.js";import"./text.component-DbvyuRW5.js";import"./default-typography.styles-GRPFSEgZ.js";import"./flex-CjpmMnjD.js";import"./flex.component-DrgzHBV3.js";import"./blur.component--kF_WV75.js";import"./formatted-account-dRIT6S8f.js";import"./formatted-date-lP116J6G.js";import"./formatted-date.component-B4OW14Yl.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},i={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...n.args,hide:!0}},r={...i,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-number
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .currency=\${args.currency}
      .decimals=\${args.decimals}
    ></gds-sensitive-number>\`
}`,...r.parameters?.docs?.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,N as default};
