import{b as t}from"./iframe-qeEI_uNo.js";import{a as s}from"./argTableProps-tdGFykHV.js";import{n as o}from"./formatted-number-BhThTLmM.js";import{Default as n}from"./formatted-number.stories-VSlQcNTa.js";import{G as a}from"./sensitive-number.component-DwU2-u8X.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-ByEQ9pj9.js";import"./text-DsodcxuK.js";import"./text.component-p52fBAj4.js";import"./default-typography.styles-NcamnoGz.js";import"./flex-DGp1_pDp.js";import"./flex.component-qh20aZsh.js";import"./blur.component-QM5dfdvZ.js";import"./formatted-account-BzTIs8nt.js";import"./formatted-date-BB9wAk0j.js";import"./formatted-date.component-OTnW6QCt.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
