import{b as t}from"./iframe-DHb17V61.js";import{a as s}from"./argTableProps-D79ziHBk.js";import{n as o}from"./formatted-number-CffswDb6.js";import{Default as n}from"./formatted-number.stories-BQoGl4KM.js";import{G as a}from"./sensitive-number.component-fN_au4pH.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DWmvaNt7.js";import"./text-CALyQ7CJ.js";import"./text.component-AjbXVrfB.js";import"./default-typography.styles-CJ-oO9tF.js";import"./flex-B5CeFECb.js";import"./flex.component-Y_eZTP4a.js";import"./blur.component-CIlZe-PU.js";import"./formatted-account-CzSGTqvE.js";import"./formatted-date-CRdZlZZK.js";import"./formatted-date.component-CbzUB5IL.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
