import{b as t}from"./iframe-DECnLmkM.js";import{a as s}from"./argTableProps-DCScQ2Tp.js";import{n as o}from"./formatted-number-BmrruvyP.js";import{Default as n}from"./formatted-number.stories-BH0CsO3d.js";import{G as a}from"./sensitive-number.component-CARvTlXL.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BuukVoM_.js";import"./text-DuXSvayV.js";import"./text.component-CFcVFTYH.js";import"./default-typography.styles-vVker8wY.js";import"./flex-CbcawyL2.js";import"./flex.component-C0w496fX.js";import"./blur.component-x_J5wlVM.js";import"./formatted-account-BjL1I0O4.js";import"./formatted-date-BNnhp68k.js";import"./formatted-date.component-wsJ5snhE.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
