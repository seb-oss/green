import{b as t}from"./iframe-DIuN8nTZ.js";import{a as s}from"./argTableProps-bx3iZUN_.js";import{n as o}from"./formatted-number-DYL69F1x.js";import{Default as n}from"./formatted-number.stories-Bx4u50qJ.js";import{G as a}from"./sensitive-number.component-ctPAqeXN.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-JdbYGALT.js";import"./text-BzzFYkf5.js";import"./text.component-CnlK7HYV.js";import"./default-typography.styles-BQCd5xjp.js";import"./flex-D7mAkQr3.js";import"./flex.component-R-DVnNSW.js";import"./blur.component-CYSF7egE.js";import"./formatted-account-DDJTa9nQ.js";import"./formatted-date-CtXrE4F0.js";import"./formatted-date.component-B1IaSYqo.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
