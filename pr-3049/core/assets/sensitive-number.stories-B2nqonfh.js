import{b as t}from"./iframe-Ckbk1qpL.js";import{a as s}from"./argTableProps-B8n-BZH3.js";import{n as o}from"./formatted-number-CeQQcjoo.js";import{Default as n}from"./formatted-number.stories-DzvOtYdA.js";import{G as a}from"./sensitive-number.component-CQ5bD6vy.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-ClRNIZgn.js";import"./text-D9cLEtLS.js";import"./text.component-BDZ4vNo7.js";import"./default-typography.styles-Bj3vWlMM.js";import"./flex-mNe987eR.js";import"./flex.component-qNxcAGFN.js";import"./blur.component-D5-M3psM.js";import"./formatted-account-CUMotUqg.js";import"./formatted-date-M4l1NTX_.js";import"./formatted-date.component-C3dNiD-m.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
