import{b as t}from"./iframe-BQBiNmH_.js";import{a as s}from"./argTableProps-C2COD3R6.js";import{n as o}from"./formatted-number-BfGqPpAL.js";import{Default as n}from"./formatted-number.stories-CbTDhEVv.js";import{G as a}from"./sensitive-number.component-BAMHgHsp.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-C2hsMHCF.js";import"./text-BQP2q-4d.js";import"./text.component-Ddv93aOT.js";import"./default-typography.styles-CY-dADHx.js";import"./flex-DNTtcIva.js";import"./flex.component-D_j--owZ.js";import"./blur.component-BEJX8eME.js";import"./formatted-account-DbhfVIbJ.js";import"./formatted-date-BxWLcj-N.js";import"./formatted-date.component-DxS0lfX0.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
