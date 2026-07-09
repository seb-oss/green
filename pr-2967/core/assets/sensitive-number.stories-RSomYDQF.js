import{b as t}from"./iframe-DVOBMRBC.js";import{a as s}from"./argTableProps-Dr29w7G2.js";import{n as o}from"./formatted-number-yTdq2p5F.js";import{Default as n}from"./formatted-number.stories-CmnsEabB.js";import{G as a}from"./sensitive-number.component-C9Hy-TEH.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-nm8DQYjh.js";import"./text-MjrmKoyz.js";import"./text.component-CQ_nBneW.js";import"./default-typography.styles-Btt_dt-M.js";import"./flex-Dv5sg83X.js";import"./flex.component-CiNWtacO.js";import"./blur.component-XDF_0W-U.js";import"./formatted-account-Dk81Y6Jk.js";import"./formatted-date-BKMxtwnY.js";import"./formatted-date.component-DO-TnsBL.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
