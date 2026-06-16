import{b as t}from"./iframe-3V4vje3A.js";import{a as s}from"./argTableProps-Dn1rlvZU.js";import{n as o}from"./formatted-number-BnhGQf0O.js";import{Default as n}from"./formatted-number.stories-Dhb6bbEr.js";import{G as a}from"./sensitive-number.component-C317LL5o.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CmaxzZf3.js";import"./text-Bcspz2J9.js";import"./text.component-DPFT1tIi.js";import"./default-typography.styles-iB2U2yhA.js";import"./flex-CifrN5YK.js";import"./flex.component-oZnb797Y.js";import"./blur.component-dWwHKJOv.js";import"./formatted-account-BDsqRqOZ.js";import"./formatted-date-D8chJV6-.js";import"./formatted-date.component-BnPyrNWV.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
