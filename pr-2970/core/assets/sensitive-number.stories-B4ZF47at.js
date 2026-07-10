import{b as t}from"./iframe-BNCtr4fq.js";import{a as s}from"./argTableProps-BqWaDS6S.js";import{n as o}from"./formatted-number-TSWKtDk5.js";import{Default as n}from"./formatted-number.stories-G6Ql5L3j.js";import{G as a}from"./sensitive-number.component-CjG6vHK2.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DQ1Un2Op.js";import"./text-DD9_Eodl.js";import"./text.component-CTs8LLyR.js";import"./default-typography.styles-CZfmBsWH.js";import"./flex-fwZC4j0v.js";import"./flex.component-C4p7DvmF.js";import"./blur.component-B3kMGlX9.js";import"./formatted-account-DdslKdVF.js";import"./formatted-date-BfocKV1v.js";import"./formatted-date.component-dwHMfTVM.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
