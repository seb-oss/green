import{b as t}from"./iframe-C1LXsbkn.js";import{a as s}from"./argTableProps-DZydE7Zy.js";import{n as o}from"./formatted-number-Xwjd55JA.js";import{Default as n}from"./formatted-number.stories-Cf93Ee8s.js";import{G as a}from"./sensitive-number.component-EcecgNhW.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CJChLKQN.js";import"./text-Uq5AGErf.js";import"./text.component-NbkTWyc3.js";import"./default-typography.styles-B4I68Zcz.js";import"./flex-CCst7dbG.js";import"./flex.component-BxbgJBW4.js";import"./blur.component-D3c96f3_.js";import"./formatted-account-CySfgC4i.js";import"./formatted-date-CwttGWd3.js";import"./formatted-date.component-vrqMhdlr.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
