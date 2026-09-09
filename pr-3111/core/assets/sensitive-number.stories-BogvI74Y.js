import{b as t}from"./iframe-Bzn41Cqm.js";import{a as s}from"./argTableProps-B9o9sCuj.js";import{n as o}from"./formatted-number-DPf7Dpl2.js";import{Default as n}from"./formatted-number.stories-D3WpLfYF.js";import{G as a}from"./sensitive-number.component-Cf0TNjXN.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CwOiq6wR.js";import"./text-lYSBKqbv.js";import"./text.component-CaLnjFlb.js";import"./default-typography.styles-PZXqhJ0n.js";import"./flex-DFeDoMmc.js";import"./flex.component-CIHidJru.js";import"./blur.component-p1TdttyW.js";import"./formatted-account-B5V7o177.js";import"./formatted-date-BGhy12NW.js";import"./formatted-date.component-Cbmykb_r.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
