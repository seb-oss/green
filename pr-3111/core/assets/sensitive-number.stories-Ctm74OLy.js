import{b as t}from"./iframe-C23GnPn7.js";import{a as s}from"./argTableProps-CwmP72kH.js";import{n as o}from"./formatted-number-CGSbHEdY.js";import{Default as n}from"./formatted-number.stories-CW5MjFx8.js";import{G as a}from"./sensitive-number.component-BlTDnjWE.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CH1RhRxw.js";import"./text-AlEpXYut.js";import"./text.component-DG7lk5wS.js";import"./default-typography.styles-ABfOuypi.js";import"./flex-DBKPi_Yr.js";import"./flex.component-DASmqb-J.js";import"./blur.component-Ct99uvRD.js";import"./formatted-account-BMzp1B_S.js";import"./formatted-date-C_y6Vpwp.js";import"./formatted-date.component-CMBhKxH-.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
