import{b as t}from"./iframe-CAXRNL5R.js";import{a as s}from"./argTableProps-CxpU9HqQ.js";import{n as o}from"./formatted-number-QYRg6hgI.js";import{Default as n}from"./formatted-number.stories-Cz7aIdam.js";import{G as a}from"./sensitive-number.component-hf2i4UQI.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-C5ArrnpM.js";import"./text-BeQh3Sn3.js";import"./text.component-DBX7t9zK.js";import"./default-typography.styles-DKUxmOMH.js";import"./flex-Dlz5o_yl.js";import"./flex.component-C6l2MwzK.js";import"./blur.component-Bmi6L27T.js";import"./formatted-account-Cw993vMu.js";import"./formatted-date-4cyMDifB.js";import"./formatted-date.component-B0DqeOrA.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
