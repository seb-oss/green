import{b as t}from"./iframe-C64778fU.js";import{a as s}from"./argTableProps-0PADZMUT.js";import{n as o}from"./formatted-number-75RYmS1H.js";import{Default as n}from"./formatted-number.stories-ClT6fUnL.js";import{G as a}from"./sensitive-number.component-GtoDklne.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-Cjrg-UEf.js";import"./text-D1EFUDsP.js";import"./text.component-DC-1YQMr.js";import"./default-typography.styles-DQn9996i.js";import"./flex-fzhQFwxw.js";import"./flex.component-DjCVuwuY.js";import"./blur.component-d5A5Clqj.js";import"./formatted-account-he9F_4Nr.js";import"./formatted-date-fEvaPATY.js";import"./formatted-date.component-ppzRaAaS.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
