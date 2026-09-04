import{b as t}from"./iframe-cJ-G3WTm.js";import{a as s}from"./argTableProps-ua3rXx9X.js";import{n as o}from"./formatted-number-Dq_YE9XD.js";import{Default as n}from"./formatted-number.stories-CClyWVku.js";import{G as a}from"./sensitive-number.component-DWAOGLOp.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DrxTNNdx.js";import"./text-TyS-w9R8.js";import"./text.component-D9YlODAM.js";import"./default-typography.styles-CTk53gt7.js";import"./flex-CE_KCpC0.js";import"./flex.component-BOo_oHAx.js";import"./blur.component-JjmbL1Hg.js";import"./formatted-account-CV3-GxHO.js";import"./formatted-date-rl74d3cA.js";import"./formatted-date.component-BmGN736L.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
