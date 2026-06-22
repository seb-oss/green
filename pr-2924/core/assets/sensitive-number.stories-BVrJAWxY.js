import{b as t}from"./iframe-c0lJwxcK.js";import{a as s}from"./argTableProps-CGkSV677.js";import{n as o}from"./formatted-number-D_tsxhV4.js";import{Default as n}from"./formatted-number.stories-CPybq82o.js";import{G as a}from"./sensitive-number.component-CiNGRUq2.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-2zuI-xdn.js";import"./text-DkERf-iL.js";import"./text.component-CpcO_mSE.js";import"./default-typography.styles-DC99OCN3.js";import"./flex-BTAREFFx.js";import"./flex.component-ClU-nez5.js";import"./blur.component-C95ybyyr.js";import"./formatted-account-D6i66-X6.js";import"./formatted-date-DYrPOCuT.js";import"./formatted-date.component-DXdSWE5o.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
