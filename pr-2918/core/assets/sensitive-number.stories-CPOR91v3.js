import{b as t}from"./iframe-DAdgaLKT.js";import{a as s}from"./argTableProps-DNJPfIHy.js";import{n as o}from"./formatted-number-DsFB48E5.js";import{Default as n}from"./formatted-number.stories-BFgF7yK6.js";import{G as a}from"./sensitive-number.component-Oc4zXkiI.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CPNKHBKi.js";import"./text-DkB-hkj5.js";import"./text.component-DZP0Yrns.js";import"./default-typography.styles-DdhwLFsT.js";import"./flex-YMPL1mJ4.js";import"./flex.component-BaKKDkug.js";import"./blur.component-CJuO5Tv_.js";import"./formatted-account-g99v3BPK.js";import"./formatted-date-DzBsdVm7.js";import"./formatted-date.component-DDNYbQb1.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
