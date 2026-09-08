import{b as t}from"./iframe-COzfmFJx.js";import{a as s}from"./argTableProps-Cq7WlXmJ.js";import{n as o}from"./formatted-number-LTkw82fZ.js";import{Default as n}from"./formatted-number.stories-CaVutm6_.js";import{G as a}from"./sensitive-number.component-D2qS7X4I.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-j70W9C_m.js";import"./text-BYeNF6SL.js";import"./text.component-S2tODZae.js";import"./default-typography.styles-CukvtOXb.js";import"./flex-C2ZOevgm.js";import"./flex.component-ODx9SUsP.js";import"./blur.component-yTSKnGnJ.js";import"./formatted-account-MWZuJCMW.js";import"./formatted-date-DGu-9EOv.js";import"./formatted-date.component-CGo04tz1.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
