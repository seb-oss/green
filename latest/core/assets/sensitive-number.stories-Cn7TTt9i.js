import{b as t}from"./iframe-D5_6QphS.js";import{a as s}from"./argTableProps-sDh6mTdo.js";import{n as o}from"./formatted-number-B9Z75D-R.js";import{Default as n}from"./formatted-number.stories-DODji6L0.js";import{G as a}from"./sensitive-number.component-CQWNPeRJ.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BNi52UBI.js";import"./text-Dq7VlogH.js";import"./text.component-DGNJO9Sm.js";import"./default-typography.styles-BL8vcvwt.js";import"./flex-BPIrVcBL.js";import"./flex.component-BjyvNHfw.js";import"./blur.component-BMaB5ygE.js";import"./formatted-account-LwTmaGL2.js";import"./formatted-date-BbOelTp6.js";import"./formatted-date.component-DfJNF4rx.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
