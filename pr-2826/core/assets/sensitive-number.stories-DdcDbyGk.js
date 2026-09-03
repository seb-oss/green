import{b as t}from"./iframe-Bs4J-K7K.js";import{a as s}from"./argTableProps-DlxhLjU6.js";import{n as o}from"./formatted-number-UV7V0KPi.js";import{Default as n}from"./formatted-number.stories-DxrIC4jm.js";import{G as a}from"./sensitive-number.component-C2WN5XiE.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-bzDLYZ7v.js";import"./text-D6FrN9m_.js";import"./text.component-8M8b2Ks5.js";import"./default-typography.styles-DdX4sO2e.js";import"./flex-C0fVZUtm.js";import"./flex.component-Cw8Ck61a.js";import"./blur.component-DC-r4BHE.js";import"./formatted-account-A5a2A8Lf.js";import"./formatted-date-BP_Yi6Pt.js";import"./formatted-date.component--hu_QXtm.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
