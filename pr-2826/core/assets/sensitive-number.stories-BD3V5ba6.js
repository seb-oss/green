import{b as t}from"./iframe-DQGdI21_.js";import{a as s}from"./argTableProps-ykM4JGRk.js";import{n as o}from"./formatted-number-gMbSLpMF.js";import{Default as n}from"./formatted-number.stories-CXG5_lPq.js";import{G as a}from"./sensitive-number.component-RAO5euv_.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CS39lMvG.js";import"./text-zwfE2kp4.js";import"./text.component-CnChIIGh.js";import"./default-typography.styles-Dh5hveEe.js";import"./flex-D8w3moks.js";import"./flex.component-CuV0uZQ9.js";import"./blur.component--jzqi0Tm.js";import"./formatted-account-CRtBX1V2.js";import"./formatted-date-B9dzcVmq.js";import"./formatted-date.component-BM2yMar2.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
