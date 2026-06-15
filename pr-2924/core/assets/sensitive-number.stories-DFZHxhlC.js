import{b as t}from"./iframe-CpjcSp7s.js";import{a as s}from"./argTableProps-BrYLyXkV.js";import{n as o}from"./formatted-number-D_e6EBea.js";import{Default as n}from"./formatted-number.stories-Dz9YYiTO.js";import{G as a}from"./sensitive-number.component-Dayu5mj1.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DbdGrx_D.js";import"./text-B0Bqnfyh.js";import"./text.component-Dl99GF_F.js";import"./default-typography.styles-DV_y9Hng.js";import"./flex-CNHAusAk.js";import"./flex.component-CnkVJOKX.js";import"./blur.component-BlnbDhm1.js";import"./formatted-account-DCv2QUfd.js";import"./formatted-date-D5sklLeT.js";import"./formatted-date.component-CbC_OcjZ.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
