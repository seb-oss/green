import{b as t}from"./iframe-BRFq_Aky.js";import{a as s}from"./argTableProps-9dqwXCLt.js";import{n as o}from"./formatted-number-MFRzGrQS.js";import{Default as n}from"./formatted-number.stories-B0L2WKHH.js";import{G as a}from"./sensitive-number.component-CT5hxsU7.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BJv5f1SS.js";import"./text-BTXqbkI5.js";import"./text.component-DZx4uezc.js";import"./default-typography.styles-tqOHiHYf.js";import"./flex-EYYFlaq_.js";import"./flex.component-9EqdPDfF.js";import"./blur.component-BMcIaI8o.js";import"./formatted-account-RTvAKpDF.js";import"./formatted-date-DLVD1n7K.js";import"./formatted-date.component-DwB-LPEA.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
