import{b as t}from"./iframe-CqBe2TfV.js";import{a as s}from"./argTableProps-M11Ecom4.js";import{n as o}from"./formatted-number-cM4SHMMF.js";import{Default as n}from"./formatted-number.stories-BnewY1uF.js";import{G as a}from"./sensitive-number.component-PUMsqTtd.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-I28hu_ma.js";import"./text-DvZZrCEp.js";import"./text.component-DzNRFrwt.js";import"./default-typography.styles-Cl58c87B.js";import"./flex-D-tyDyNJ.js";import"./flex.component-DPR4rLzo.js";import"./blur.component-BYNWxW2L.js";import"./formatted-account-BNMRH_uu.js";import"./formatted-date-DKTGcdXG.js";import"./formatted-date.component-ucRcPa9P.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
