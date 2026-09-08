import{b as t}from"./iframe-DdcifZmv.js";import{a as s}from"./argTableProps-pHOUnZ93.js";import{n as o}from"./formatted-number-Bvvo6eLO.js";import{Default as n}from"./formatted-number.stories-CArEaofH.js";import{G as a}from"./sensitive-number.component-YmDLYExG.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CdJBENIW.js";import"./text-CkB6-YD3.js";import"./text.component-BinMGgn9.js";import"./default-typography.styles-BL3lIE_v.js";import"./flex-DYJuzd81.js";import"./flex.component-CGuk9UQW.js";import"./blur.component-D9U7anTx.js";import"./formatted-account-CZ8-zzes.js";import"./formatted-date-CddXksFV.js";import"./formatted-date.component-DNRQ0ygZ.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
