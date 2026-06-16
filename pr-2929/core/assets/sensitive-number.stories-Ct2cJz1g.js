import{b as t}from"./iframe-CUpmeMNK.js";import{a as s}from"./argTableProps-bYqBR6o9.js";import{n as o}from"./formatted-number-B3nFrY2d.js";import{Default as n}from"./formatted-number.stories-CYeRowPG.js";import{G as a}from"./sensitive-number.component-DvH-a1Qu.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BsVtuV9B.js";import"./text-AcFjFvoe.js";import"./text.component-CKyIdy3a.js";import"./default-typography.styles-DcwPPUfq.js";import"./flex-Bm0dBo_c.js";import"./flex.component-BIdx6581.js";import"./blur.component-DVLku_B9.js";import"./formatted-account-ByfloWqx.js";import"./formatted-date-DA--Pgw_.js";import"./formatted-date.component-DXPZ94xK.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
