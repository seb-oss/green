import{b as t}from"./iframe-BCI2c7Bh.js";import{a as s}from"./argTableProps-H4RGnk6k.js";import{n as o}from"./formatted-number-B4ld5Vuz.js";import{Default as n}from"./formatted-number.stories-OVCe43mZ.js";import{G as a}from"./sensitive-number.component-CEBcuwfN.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-gm9oKVNx.js";import"./text-DQmP6rRv.js";import"./text.component-qGlgSTZB.js";import"./default-typography.styles-DdTfTVMx.js";import"./flex-C3Hxoa7A.js";import"./flex.component-xNjZLWhM.js";import"./blur.component-BaOQIjwn.js";import"./formatted-account-CjPZDCt9.js";import"./formatted-date-IvNEQVbH.js";import"./formatted-date.component-CDne5rDo.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
