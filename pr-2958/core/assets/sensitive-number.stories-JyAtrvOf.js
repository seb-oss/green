import{b as t}from"./iframe-DOT61pU6.js";import{a as s}from"./argTableProps-CS6f9cAl.js";import{n as o}from"./formatted-number-RVD7BaM7.js";import{Default as n}from"./formatted-number.stories-fMcZPK_A.js";import{G as a}from"./sensitive-number.component-zretbVCU.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CuKbPQyB.js";import"./text-Dgxi5WWf.js";import"./text.component-DqEDHE6I.js";import"./default-typography.styles-DSEyIK3k.js";import"./flex-2Toe02uE.js";import"./flex.component-BP9ANZYa.js";import"./blur.component-V0lAbgjm.js";import"./formatted-account-D8oWDnO2.js";import"./formatted-date-B4C42xyk.js";import"./formatted-date.component-B6iYQMw5.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
