import{b as t}from"./iframe-CNPadLMU.js";import{a as s}from"./argTableProps-COpB81kl.js";import{n as o}from"./formatted-number-CnPq8-Sm.js";import{Default as n}from"./formatted-number.stories-CXf7ErtL.js";import{G as a}from"./sensitive-number.component-gwynzQYD.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CLG8KI1c.js";import"./text-I0DUdfb6.js";import"./text.component-DAbnq5Gg.js";import"./default-typography.styles-BAnDJVcY.js";import"./flex-ClS-Rak4.js";import"./flex.component-CoRjFOls.js";import"./blur.component-DGYH0G7u.js";import"./formatted-account-BQ_QsHwF.js";import"./formatted-date-nB_JV9cR.js";import"./formatted-date.component-D1vWyrqj.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
