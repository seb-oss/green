import{b as t}from"./iframe-DuBKvbTM.js";import{a as s}from"./argTableProps-BV53iAhP.js";import{n as o}from"./formatted-number-DcaIQsAW.js";import{Default as n}from"./formatted-number.stories-CIDgL0_Z.js";import{G as a}from"./sensitive-number.component-DEp3C902.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-Cmzu6AJn.js";import"./text-Da8sJ74a.js";import"./text.component-ClFA9x5w.js";import"./default-typography.styles-moOMOm0I.js";import"./flex-DduxFC4A.js";import"./flex.component-Bilq_XdN.js";import"./blur.component-BTU-mc1n.js";import"./formatted-account-CMH9HXF1.js";import"./formatted-date-CqMtBc3a.js";import"./formatted-date.component-DuYa6O4i.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
