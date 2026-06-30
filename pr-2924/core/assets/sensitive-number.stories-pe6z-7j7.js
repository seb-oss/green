import{b as t}from"./iframe-wg8wLRxR.js";import{a as s}from"./argTableProps-CJXpmQRN.js";import{n as o}from"./formatted-number-8ccrzgEo.js";import{Default as n}from"./formatted-number.stories-CrfzkYoP.js";import{G as a}from"./sensitive-number.component-CmYqwyKS.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-sp8kZCh0.js";import"./text-D0yNWOnY.js";import"./text.component-DnMohhkS.js";import"./default-typography.styles-Kv6M5g43.js";import"./flex-zkzzK2MI.js";import"./flex.component-Be-IWHT3.js";import"./blur.component-C0Ng-Q4h.js";import"./formatted-account-B78UtnZi.js";import"./formatted-date-CAWpEVHg.js";import"./formatted-date.component-CB0Ah5i2.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
