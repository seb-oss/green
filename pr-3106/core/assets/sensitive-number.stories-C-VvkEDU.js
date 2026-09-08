import{b as t}from"./iframe-D58RQQ6P.js";import{a as s}from"./argTableProps-DEPatxSc.js";import{n as o}from"./formatted-number-BO3JO3ge.js";import{Default as n}from"./formatted-number.stories-u1Iq1pn2.js";import{G as a}from"./sensitive-number.component-DTzIGBeN.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BM39LXyi.js";import"./text-Btq0tRky.js";import"./text.component-CJkUcZos.js";import"./default-typography.styles-CCquCKlT.js";import"./flex-B7cCEKVX.js";import"./flex.component-CpFiFjq9.js";import"./blur.component-Bx5cAsTe.js";import"./formatted-account-JDez_bRt.js";import"./formatted-date-YRfTYF5x.js";import"./formatted-date.component-CPPWaINO.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
