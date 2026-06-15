import{b as t}from"./iframe-D2OkY6_k.js";import{a as s}from"./argTableProps-TU86pZ0q.js";import{n as o}from"./formatted-number-BGEHbODH.js";import{Default as n}from"./formatted-number.stories-BL62mKV4.js";import{G as a}from"./sensitive-number.component-lUY3kn9D.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CJ6WAg-E.js";import"./text-BAZPrF1M.js";import"./text.component-D0Xw8xtT.js";import"./default-typography.styles-r-riYQjk.js";import"./flex-CNcedzU4.js";import"./flex.component-Dk5ioDXD.js";import"./blur.component-By2bgESY.js";import"./formatted-account-B7JQgOAg.js";import"./formatted-date-Bq2HE0Oe.js";import"./formatted-date.component-D8pUuS33.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
