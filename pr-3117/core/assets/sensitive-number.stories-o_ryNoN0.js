import{b as t}from"./iframe-CNKgzuNj.js";import{a as s}from"./argTableProps-B-dOYbWl.js";import{n as o}from"./formatted-number-DQdWyhIR.js";import{Default as n}from"./formatted-number.stories-CLRka9m0.js";import{G as a}from"./sensitive-number.component-Avx4arMA.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-Bp7tYtLt.js";import"./text-06p9brQz.js";import"./text.component-D8B9iHxs.js";import"./default-typography.styles-DoyUr0tc.js";import"./flex-D8jqHeTt.js";import"./flex.component-BuTa86Ai.js";import"./blur.component-DnSQDXHZ.js";import"./formatted-account-z8Fy2FnE.js";import"./formatted-date-ComkklEK.js";import"./formatted-date.component-BQy0Q7xC.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
