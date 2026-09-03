import{b as t}from"./iframe-C9vl5CI1.js";import{a as s}from"./argTableProps-xov3vLYX.js";import{n as o}from"./formatted-number-BtuSBYDM.js";import{Default as n}from"./formatted-number.stories-Btj6RrvC.js";import{G as a}from"./sensitive-number.component-LYnbQ4-0.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CrHL0Bdp.js";import"./text-CHU4bqIm.js";import"./text.component-BXSo7-sn.js";import"./default-typography.styles-DkX2A4Wv.js";import"./flex-DfOrsBDP.js";import"./flex.component-DhVZE6-t.js";import"./blur.component-DM_6M0au.js";import"./formatted-account-DuSkSMDy.js";import"./formatted-date-CD6kxJ9n.js";import"./formatted-date.component-E27CqQOE.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
