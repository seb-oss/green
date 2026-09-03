import{b as t}from"./iframe-C01hbSNl.js";import{a as s}from"./argTableProps-kTFLZNyl.js";import{n as o}from"./formatted-number-D_grXAza.js";import{Default as n}from"./formatted-number.stories-Cw10geuA.js";import{G as a}from"./sensitive-number.component-DqNBoRvo.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CBPy_yhP.js";import"./text-CI2Easmj.js";import"./text.component-BLKAYUZB.js";import"./default-typography.styles-CdSp4K_I.js";import"./flex-BCIT_pCB.js";import"./flex.component-BIxNmTAN.js";import"./blur.component-CqAmk5_Q.js";import"./formatted-account-DV0JE4nu.js";import"./formatted-date-BbLVW-n_.js";import"./formatted-date.component-mYIX0gIb.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
