import{b as t}from"./iframe-BFOz556-.js";import{a as s}from"./argTableProps-B4rPkO2R.js";import{n as o}from"./formatted-number-DnI2Auvo.js";import{Default as n}from"./formatted-number.stories-C5O1e-9T.js";import{G as a}from"./sensitive-number.component-O0N9LLsn.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DhAgVi-d.js";import"./text-CvfIS86a.js";import"./text.component-Do2fdDQH.js";import"./default-typography.styles-Y2Emtnpw.js";import"./flex--w2-iAi1.js";import"./flex.component-Bks9EXN7.js";import"./blur.component-CdsUAvU3.js";import"./formatted-account-C4gJqmsd.js";import"./formatted-date-BpNq32N3.js";import"./formatted-date.component-DwZ96Tjy.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
