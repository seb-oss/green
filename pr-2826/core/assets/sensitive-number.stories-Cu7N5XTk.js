import{b as t}from"./iframe-C3aS2Lld.js";import{a as s}from"./argTableProps-CYP60nnt.js";import{n as o}from"./formatted-number-Ctem04Wp.js";import{Default as n}from"./formatted-number.stories-BuItMVOc.js";import{G as a}from"./sensitive-number.component-DPEUEjbS.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CLqfaAR-.js";import"./text-DPPMZ_LT.js";import"./text.component-BI5od6rl.js";import"./default-typography.styles-DY6Og3PJ.js";import"./flex-lM-zgPOG.js";import"./flex.component-CH-j8PZG.js";import"./blur.component-D-kN-68Y.js";import"./formatted-account-B3J0a2wT.js";import"./formatted-date-CPO7AObx.js";import"./formatted-date.component-B3XUtJ6u.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
