import{b as t}from"./iframe-CNiEufxD.js";import{a as s}from"./argTableProps-qOcvBZf0.js";import{n as o}from"./formatted-number-ElwG7CKL.js";import{Default as n}from"./formatted-number.stories-kEfwh17g.js";import{G as a}from"./sensitive-number.component-DRTV0v6v.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-Dq02EBJv.js";import"./text-Dxqvlw4M.js";import"./text.component-DnBQEB4R.js";import"./default-typography.styles-owR9B58u.js";import"./flex-azlKYDTV.js";import"./flex.component-BMIxndx4.js";import"./blur.component-CFiDX5U7.js";import"./formatted-account-CFzMSUfJ.js";import"./formatted-date-B6dBjrr7.js";import"./formatted-date.component-D2YBSmK8.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
