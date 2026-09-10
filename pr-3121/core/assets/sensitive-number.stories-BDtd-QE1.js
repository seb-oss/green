import{b as t}from"./iframe-C0qG-sy5.js";import{a as s}from"./argTableProps-Cqwip7Tf.js";import{n as o}from"./formatted-number-Qtg1oaMA.js";import{Default as n}from"./formatted-number.stories-Dkz-J99g.js";import{G as a}from"./sensitive-number.component-CzY-L6Nm.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-dqlSUd82.js";import"./text-CRjiwEPQ.js";import"./text.component-RW3wK4hT.js";import"./default-typography.styles-Cg_k6QNM.js";import"./flex-Cq2imSAz.js";import"./flex.component-DpUqvnMY.js";import"./blur.component-ChJrZwe5.js";import"./formatted-account-CI2qBudN.js";import"./formatted-date-Bjem4gQa.js";import"./formatted-date.component-DC5qm9Xx.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
