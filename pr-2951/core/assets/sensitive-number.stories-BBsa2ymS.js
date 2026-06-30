import{b as t}from"./iframe-DvBWuSMC.js";import{a as s}from"./argTableProps-BpvwCjac.js";import{n as o}from"./formatted-number-CFJuJMbc.js";import{Default as n}from"./formatted-number.stories-DLV1qsJQ.js";import{G as a}from"./sensitive-number.component-Dae_IRNx.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-D9KwsXQf.js";import"./text-CsJ6vdN0.js";import"./text.component-CBUu4CkN.js";import"./default-typography.styles-CKlEBvmU.js";import"./flex-Dc0mLd8K.js";import"./flex.component-BtwOWVR0.js";import"./blur.component-Ce-8yY7E.js";import"./formatted-account-CtBaNoUJ.js";import"./formatted-date-DgTyIQyP.js";import"./formatted-date.component-CQZ30SS6.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
