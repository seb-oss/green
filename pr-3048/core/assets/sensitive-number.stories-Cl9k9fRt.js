import{b as t}from"./iframe-CrCFIEgk.js";import{a as s}from"./argTableProps-A0FlUc4w.js";import{n as o}from"./formatted-number-BPdBlkBM.js";import{Default as n}from"./formatted-number.stories-DCVyFokb.js";import{G as a}from"./sensitive-number.component-B4xiC3Ok.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BN8uzy09.js";import"./text-CNB39tPf.js";import"./text.component-DqkCezZ1.js";import"./default-typography.styles-B22o7PuP.js";import"./flex-CXpwof3l.js";import"./flex.component-DPNA_hsn.js";import"./blur.component-D4EBsN37.js";import"./formatted-account-C8_WmfL9.js";import"./formatted-date-InD0zxk1.js";import"./formatted-date.component-BJQItutJ.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
