import{b as t}from"./iframe-_t4ul9Kp.js";import{a as s}from"./argTableProps-DVB4H0W9.js";import{n as o}from"./formatted-number-Cv1KxhWo.js";import{Default as n}from"./formatted-number.stories-DO8vhdD4.js";import{G as a}from"./sensitive-number.component-ccEDqV4e.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BTcjGoiw.js";import"./text-DlPTKlro.js";import"./text.component-BO1dA5_x.js";import"./default-typography.styles-CZ87N88o.js";import"./flex-BhgxY_l5.js";import"./flex.component-DneYDJUz.js";import"./blur.component-CtvF1N1I.js";import"./formatted-account-BD4YG100.js";import"./formatted-date-C7u0S9II.js";import"./formatted-date.component-DNJYtISm.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
