import{b as t}from"./iframe-Ddc77rkg.js";import{a as s}from"./argTableProps-BNIjOmCg.js";import{n as o}from"./formatted-number-1sk_3xCV.js";import{Default as n}from"./formatted-number.stories-5PRpJcxf.js";import{G as a}from"./sensitive-number.component-vLK0OusF.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-D-3fO1aT.js";import"./text-7M97Nx9Z.js";import"./text.component-Dz28oxSf.js";import"./default-typography.styles-Qmwj8D13.js";import"./flex-C3tCFzFu.js";import"./flex.component-CY1YtVva.js";import"./blur.component-B6LflqqE.js";import"./formatted-account-oz42JZFy.js";import"./formatted-date-289cbSVr.js";import"./formatted-date.component-XyuuNTLk.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
