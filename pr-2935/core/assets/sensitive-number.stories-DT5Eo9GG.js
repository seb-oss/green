import{b as t}from"./iframe-cGXq8Nq8.js";import{a as s}from"./argTableProps-AxTF_zh-.js";import{n as o}from"./formatted-number-C0IAqX1r.js";import{Default as n}from"./formatted-number.stories-D-iOReHu.js";import{G as a}from"./sensitive-number.component-EN51hrZF.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-D9qjlNnt.js";import"./text-Bg16-db7.js";import"./text.component-Dlmqkd50.js";import"./default-typography.styles-C7ZGAxYb.js";import"./flex-DPISSdaL.js";import"./flex.component-BTMg4R10.js";import"./blur.component-Bmp18YO1.js";import"./formatted-account--j1Xj9PK.js";import"./formatted-date-CSv_e9XF.js";import"./formatted-date.component-DX45vUWy.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
