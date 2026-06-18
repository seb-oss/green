import{b as t}from"./iframe-Bezf6Gyf.js";import{a as s}from"./argTableProps-BQjuOeV1.js";import{n as o}from"./formatted-number-Bl8QHSwM.js";import{Default as n}from"./formatted-number.stories-jHHLIOVV.js";import{G as a}from"./sensitive-number.component-BO-Ypnu0.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-OuXCmGFN.js";import"./text-D56n_oZE.js";import"./text.component-KUUWm2tb.js";import"./default-typography.styles-BmZapqcB.js";import"./flex-BqOBLMZE.js";import"./flex.component-9-nqFDSl.js";import"./blur.component-Cd53_sTS.js";import"./formatted-account-BvyqNkZ8.js";import"./formatted-date-6tkdHgQD.js";import"./formatted-date.component-PBm7gCIy.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
