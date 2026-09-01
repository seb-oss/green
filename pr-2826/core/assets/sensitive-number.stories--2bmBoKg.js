import{b as t}from"./iframe-CGsDBcID.js";import{a as s}from"./argTableProps-DSYDeAGX.js";import{n as o}from"./formatted-number-DoJuLm4a.js";import{Default as n}from"./formatted-number.stories-Cmm6PiAG.js";import{G as a}from"./sensitive-number.component-D7KX_DoS.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BJ-Ya8_4.js";import"./text-DpJoZVcK.js";import"./text.component-BQVLZ4PE.js";import"./default-typography.styles-9h2W0NAq.js";import"./flex-S14LC1Q-.js";import"./flex.component-CH1KhIZH.js";import"./blur.component-CWHr4nSE.js";import"./formatted-account-qv772Ghk.js";import"./formatted-date-BxuN7mYp.js";import"./formatted-date.component-DffMNShH.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
