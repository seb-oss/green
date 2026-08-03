import{b as t}from"./iframe-BjfT8dE4.js";import{a as s}from"./argTableProps-8LcIwTKQ.js";import{n as o}from"./formatted-number-C5La02yB.js";import{Default as n}from"./formatted-number.stories-COSzA1Lp.js";import{G as a}from"./sensitive-number.component-BkXL1ClO.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DdNDOqW4.js";import"./text-CcSDQw1i.js";import"./text.component-CPLZxKk4.js";import"./default-typography.styles-DUxB9laU.js";import"./flex-CzHfTq9c.js";import"./flex.component-DK3HDRBd.js";import"./blur.component-CRfg89O1.js";import"./formatted-account-C17leLuy.js";import"./formatted-date-DPZdwWPC.js";import"./formatted-date.component-BdqYSKew.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
