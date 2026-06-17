import{b as t}from"./iframe-C8p5Ql08.js";import{a as s}from"./argTableProps-Cb0gPlIv.js";import{n as o}from"./formatted-number-BA_hfya3.js";import{Default as n}from"./formatted-number.stories-BNeq3zGx.js";import{G as a}from"./sensitive-number.component-tN8xuHpz.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-Cc5fuE0f.js";import"./text-BOQpDNpW.js";import"./text.component-BHcbk5ee.js";import"./default-typography.styles-C1cDR_aT.js";import"./flex-PO9qnPgd.js";import"./flex.component-VzlpgbT2.js";import"./blur.component-DJ0tUvxT.js";import"./formatted-account-Dei-22hg.js";import"./formatted-date-CQitTYU8.js";import"./formatted-date.component-D7_nVNe8.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
