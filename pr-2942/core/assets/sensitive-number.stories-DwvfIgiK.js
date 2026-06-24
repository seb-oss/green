import{b as t}from"./iframe-BMtxp-Hq.js";import{a as s}from"./argTableProps-C7JeJWfg.js";import{n as o}from"./formatted-number-CB6C5-3Y.js";import{Default as n}from"./formatted-number.stories-mK9VHZtL.js";import{G as a}from"./sensitive-number.component-C-_OGMPu.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CcI73fAY.js";import"./text-0hlLkItd.js";import"./text.component-DKvbGBO3.js";import"./default-typography.styles-45JrLuNk.js";import"./flex-BWZVaoBl.js";import"./flex.component-CoUPMP16.js";import"./blur.component-D2tumWkq.js";import"./formatted-account-DyHtuxrL.js";import"./formatted-date-C5awvKqP.js";import"./formatted-date.component-D8-W9vHN.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
