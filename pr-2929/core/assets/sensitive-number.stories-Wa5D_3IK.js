import{b as t}from"./iframe-D3YvZi8A.js";import{a as s}from"./argTableProps-BoaoPIpf.js";import{n as o}from"./formatted-number-DafwgAAI.js";import{Default as n}from"./formatted-number.stories-CATcsk2x.js";import{G as a}from"./sensitive-number.component-DU6qmTA1.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CLJolMkN.js";import"./text-4HsInMKw.js";import"./text.component-D3_Xg0J2.js";import"./default-typography.styles-Bif4e1Yj.js";import"./flex-f26zb8Yq.js";import"./flex.component-BjS_6d1L.js";import"./blur.component-BMpIl2hf.js";import"./formatted-account-Br9Rp5iX.js";import"./formatted-date-YK6IVdoy.js";import"./formatted-date.component-C1Mbpdor.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
