import{b as t}from"./iframe-DIuetfR5.js";import{a as s}from"./argTableProps-D_ugAvq9.js";import{n as o}from"./formatted-number-GLHumBWa.js";import{Default as n}from"./formatted-number.stories-B24YlSkc.js";import{G as a}from"./sensitive-number.component-DO-23z2k.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-D85mxwiC.js";import"./text-Df_eTKoy.js";import"./text.component-BcTwev9O.js";import"./default-typography.styles-C_gDalVT.js";import"./flex-CMKnqV_l.js";import"./flex.component-DJxDbP2P.js";import"./blur.component-DmhKTf0x.js";import"./formatted-account-CU87spdp.js";import"./formatted-date-DpHRA_DU.js";import"./formatted-date.component-C0kkZk7h.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
