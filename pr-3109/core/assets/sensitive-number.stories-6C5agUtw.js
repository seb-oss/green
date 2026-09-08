import{b as t}from"./iframe-DzfnFMm5.js";import{a as s}from"./argTableProps-FYe5WMKF.js";import{n as o}from"./formatted-number-C-Nkblhk.js";import{Default as n}from"./formatted-number.stories-BIK9J235.js";import{G as a}from"./sensitive-number.component-CD64lE7f.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CSXchjGm.js";import"./text-_dpX34gB.js";import"./text.component-DyDvaD-Z.js";import"./default-typography.styles-C6qkFO32.js";import"./flex-BRATN8Fe.js";import"./flex.component-CxreXvOT.js";import"./blur.component-DY_v6R_Q.js";import"./formatted-account-CIwuEoUO.js";import"./formatted-date-C64Ic8RU.js";import"./formatted-date.component-BWGPqyHF.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
