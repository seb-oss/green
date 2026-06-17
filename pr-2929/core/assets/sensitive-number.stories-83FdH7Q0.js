import{b as t}from"./iframe-BqBOLG1S.js";import{a as s}from"./argTableProps-C1CkZ-K0.js";import{n as o}from"./formatted-number-CojTrnYF.js";import{Default as n}from"./formatted-number.stories-6Mt8pf_I.js";import{G as a}from"./sensitive-number.component-D-i8ItCh.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-B-tGJvp9.js";import"./text-BuAtEYkj.js";import"./text.component-D_-7a4b7.js";import"./default-typography.styles-BUZeiKG-.js";import"./flex-DTRitpzI.js";import"./flex.component-DTLXrlcv.js";import"./blur.component-CsYKpbjV.js";import"./formatted-account-CS-ZKw1V.js";import"./formatted-date-Bnq9VeZK.js";import"./formatted-date.component-C0tCgi_y.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
