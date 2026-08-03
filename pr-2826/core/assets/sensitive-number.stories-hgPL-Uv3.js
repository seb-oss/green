import{b as t}from"./iframe-B0gVlyf4.js";import{a as s}from"./argTableProps-Dx1uLdBh.js";import{n as o}from"./formatted-number-DWTxq38E.js";import{Default as n}from"./formatted-number.stories-e_yEjosr.js";import{G as a}from"./sensitive-number.component-BoDAaena.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DYbrFr8N.js";import"./text-bNIawRco.js";import"./text.component-OhrzxPu8.js";import"./default-typography.styles-CD8zGkYg.js";import"./flex-JdGzj_d0.js";import"./flex.component-D5bOJKzU.js";import"./blur.component-BFYTMuHg.js";import"./formatted-account-Cls3jKeX.js";import"./formatted-date-C-3DWVS4.js";import"./formatted-date.component-Cz2KH8qJ.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
