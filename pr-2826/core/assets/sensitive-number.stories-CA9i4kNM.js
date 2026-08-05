import{b as t}from"./iframe-CNBLKHAI.js";import{a as s}from"./argTableProps-La1hXNwq.js";import{n as o}from"./formatted-number-CjeyiaWi.js";import{Default as n}from"./formatted-number.stories-CWoOe_88.js";import{G as a}from"./sensitive-number.component-DEt76AVO.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DueQ8gLV.js";import"./text-CXSck02E.js";import"./text.component-DQmsZSRs.js";import"./default-typography.styles-CsaXZOSh.js";import"./flex-C-2MP59K.js";import"./flex.component-C_C1DZ1B.js";import"./blur.component-bITAcP0S.js";import"./formatted-account-LH4KEjIN.js";import"./formatted-date-IkVpzAsh.js";import"./formatted-date.component-BN_M78-0.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
