import{b as t}from"./iframe-DPE2fEK0.js";import{a as s}from"./argTableProps-gbt3sTWK.js";import{n as o}from"./formatted-number-e487rEBF.js";import{Default as n}from"./formatted-number.stories-DUMTt4dQ.js";import{G as a}from"./sensitive-number.component-BMjDMj7I.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BUQ--URw.js";import"./text-CaWd8fEQ.js";import"./text.component-DDRvhMXw.js";import"./default-typography.styles-UG-eDFyd.js";import"./flex-Dlrss4jx.js";import"./flex.component-BDz_64BG.js";import"./blur.component-D5LSmLVN.js";import"./formatted-account-D_BBg97l.js";import"./formatted-date-CxM0C-0p.js";import"./formatted-date.component-BxZdbzcc.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
