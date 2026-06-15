import{b as t}from"./iframe-DqXyxUZP.js";import{a as s}from"./argTableProps-B7SPYFsn.js";import{n as o}from"./formatted-number-f5kzSx7e.js";import{Default as n}from"./formatted-number.stories-roK80nl2.js";import{G as a}from"./sensitive-number.component-ujzSSY6l.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-Nmb98RCo.js";import"./text-CD8Relyc.js";import"./text.component-CNFpdwq5.js";import"./default-typography.styles-DpVxFnRh.js";import"./flex-Uyk1jk5A.js";import"./flex.component-DADDpO1o.js";import"./blur.component-CtGUW7K9.js";import"./formatted-account-BVCrzlxF.js";import"./formatted-date-BtuRdvTw.js";import"./formatted-date.component-CQP2PyjU.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
