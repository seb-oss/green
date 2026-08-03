import{b as t}from"./iframe-GGkrsogq.js";import{a as s}from"./argTableProps-DqXuebLo.js";import{n as o}from"./formatted-number-pDqLxi1T.js";import{Default as n}from"./formatted-number.stories-CslXw36D.js";import{G as a}from"./sensitive-number.component-CHSsVRNb.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-7efLNMI_.js";import"./text-CdQJa47J.js";import"./text.component-CYMo-4LT.js";import"./default-typography.styles-v2gvzg-2.js";import"./flex-CO5TCcWz.js";import"./flex.component-BCVN4gJl.js";import"./blur.component-GTtUH2Nl.js";import"./formatted-account-CNpPIFj0.js";import"./formatted-date-Cx52GtTu.js";import"./formatted-date.component-BsLC0OZD.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
