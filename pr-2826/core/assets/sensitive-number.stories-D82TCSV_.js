import{b as t}from"./iframe-DgBS6O-a.js";import{a as s}from"./argTableProps-C9TqqsMF.js";import{n as o}from"./formatted-number-OFV0RLXv.js";import{Default as n}from"./formatted-number.stories-CW0ivjal.js";import{G as a}from"./sensitive-number.component-CMfSepUY.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BZ9PFsTa.js";import"./text-BPnuEA-3.js";import"./text.component-BjVsJApD.js";import"./default-typography.styles-CF6cB6xr.js";import"./flex-C_89Zkne.js";import"./flex.component-DFBrkLlP.js";import"./blur.component-d_f1JEpG.js";import"./formatted-account-DUSH8Gqw.js";import"./formatted-date-DJDFv_p0.js";import"./formatted-date.component-C5AZN58P.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
