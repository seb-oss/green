import{b as t}from"./iframe-l1vqnyNy.js";import{a as s}from"./argTableProps-D-df9zCo.js";import{n as o}from"./formatted-number-2mYT69AX.js";import{Default as n}from"./formatted-number.stories-Clo2Wf13.js";import{G as a}from"./sensitive-number.component-StivyUkq.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DpiDrcZf.js";import"./text-BfKUXKA4.js";import"./text.component-DnHmoxfy.js";import"./default-typography.styles-gg-J5jE1.js";import"./flex-9ne_RgSn.js";import"./flex.component-Dnyjoiwc.js";import"./blur.component-C-ME7gP_.js";import"./formatted-account-DQMw6Vg_.js";import"./formatted-date-J9l1eLXZ.js";import"./formatted-date.component-C5wLxa_w.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
