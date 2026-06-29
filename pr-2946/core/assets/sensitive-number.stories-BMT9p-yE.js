import{b as t}from"./iframe-C30daY8o.js";import{a as s}from"./argTableProps-BYvLnMpu.js";import{n as o}from"./formatted-number-Ul6LiS_Y.js";import{Default as n}from"./formatted-number.stories-DL6jmRZ6.js";import{G as a}from"./sensitive-number.component-7IN6cmJx.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-C0Bxk1zJ.js";import"./text-C3euKiMT.js";import"./text.component-B55sY0SF.js";import"./default-typography.styles-DJJJCNpx.js";import"./flex-DZHIZFig.js";import"./flex.component-CJH7RqaR.js";import"./blur.component-mvHbdUdF.js";import"./formatted-account-RrAn8PIx.js";import"./formatted-date-C7_7dKeZ.js";import"./formatted-date.component-Akjcjx-r.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
