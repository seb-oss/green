import{b as t}from"./iframe-C0RAaW_Y.js";import{a as s}from"./argTableProps-Chn1Qo_E.js";import{n as o}from"./formatted-number-DkdCvzIK.js";import{Default as n}from"./formatted-number.stories-CgSq93Yn.js";import{G as a}from"./sensitive-number.component-CjLn-pVa.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DH0ir4zq.js";import"./text-Bbq1moz1.js";import"./text.component-BXuA8C9L.js";import"./default-typography.styles-BLgIPA7s.js";import"./flex-B92nd2s4.js";import"./flex.component-ykAiY8ib.js";import"./blur.component-DR02YRIk.js";import"./formatted-account-CzsyNhHn.js";import"./formatted-date-D2BI8tri.js";import"./formatted-date.component-BIVYiER4.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
