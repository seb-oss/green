import{b as t}from"./iframe-HjqklIbq.js";import{a as s}from"./argTableProps-kga1Ow2w.js";import{n as o}from"./formatted-number-eY3WaIvf.js";import{Default as n}from"./formatted-number.stories-hOPGzWKS.js";import{G as a}from"./sensitive-number.component-BvFcZ1T2.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BB7lTm3q.js";import"./text-CLb8zKss.js";import"./text.component-7rNDfW5j.js";import"./default-typography.styles-BpyiKY0w.js";import"./flex-BDdpQq_O.js";import"./flex.component-BBE2JBAD.js";import"./blur.component-zr0DDCZl.js";import"./formatted-account-Dh_CD5kM.js";import"./formatted-date-kImA_KBl.js";import"./formatted-date.component-22SeTMQd.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
