import{b as t}from"./iframe-C5yiOqFd.js";import{a as s}from"./argTableProps-CQRbZ4pH.js";import{n as o}from"./formatted-number-C2Vk-0py.js";import{Default as n}from"./formatted-number.stories-D3e8Rb52.js";import{G as a}from"./sensitive-number.component-CRIylbhx.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-D3SNPOXS.js";import"./text-Dla0O8Ms.js";import"./text.component-DVw3NRZA.js";import"./default-typography.styles-8-QjNWSN.js";import"./flex-BT54SglR.js";import"./flex.component-OO065dzV.js";import"./blur.component-Hpbkfh-H.js";import"./formatted-account-DJwnsfat.js";import"./formatted-date-a8Jv8Zdw.js";import"./formatted-date.component-CqSX7yyS.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
