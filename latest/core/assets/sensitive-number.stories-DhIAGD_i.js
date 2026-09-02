import{b as t}from"./iframe-rjCVMJaw.js";import{a as s}from"./argTableProps-Dwv5UBs0.js";import{n as o}from"./formatted-number-DgQPZpYO.js";import{Default as n}from"./formatted-number.stories-CwBEhIaF.js";import{G as a}from"./sensitive-number.component-D1esDroB.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-B9mz59tw.js";import"./text-CTTGFwgZ.js";import"./text.component-COwi0oWQ.js";import"./default-typography.styles-CR_-HMjZ.js";import"./flex-BA95TzDo.js";import"./flex.component-BllWkbg_.js";import"./blur.component-DQrAfhOf.js";import"./formatted-account-D0r9q7N1.js";import"./formatted-date-7jixN7Ow.js";import"./formatted-date.component-DC7lrvN7.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
