import{b as t}from"./iframe-Dcaup0t1.js";import{a as s}from"./argTableProps-Di8qFt0a.js";import{n as o}from"./formatted-number-PVamO3-f.js";import{Default as n}from"./formatted-number.stories-CrCGrKfM.js";import{G as a}from"./sensitive-number.component-cHcl_JH3.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-EB1bHLmE.js";import"./text-LNyc5Rc6.js";import"./text.component-Bmi1cuRp.js";import"./default-typography.styles-Bv8pVuN5.js";import"./flex-BM4-Rcia.js";import"./flex.component-D0B6eADt.js";import"./blur.component-D11N5L50.js";import"./formatted-account-Dkag3hlv.js";import"./formatted-date--5sGq0yM.js";import"./formatted-date.component-Cp20L-Fj.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
