import{b as t}from"./iframe-BfmYTVu1.js";import{a as s}from"./argTableProps-By5MOcg-.js";import{n as o}from"./formatted-number-BtF3OHdd.js";import{Default as n}from"./formatted-number.stories-CejM-lQM.js";import{G as a}from"./sensitive-number.component-yQZ4VLV6.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DUCkN8YU.js";import"./text-g-f38mK2.js";import"./text.component-B8oDUZM6.js";import"./default-typography.styles-CYtUtFkZ.js";import"./flex-DdxjeIV5.js";import"./flex.component-D8eYup9G.js";import"./blur.component-DkfWhEL0.js";import"./formatted-account-BjTWDUqh.js";import"./formatted-date-DlB5bUFc.js";import"./formatted-date.component-QRthLR8E.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
