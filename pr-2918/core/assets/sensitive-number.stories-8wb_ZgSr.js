import{b as t}from"./iframe-DGN3rWLd.js";import{a as s}from"./argTableProps-DghJexTW.js";import{n as o}from"./formatted-number-CosePPzr.js";import{Default as n}from"./formatted-number.stories-CKKje7_T.js";import{G as a}from"./sensitive-number.component-DW-GhRkv.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BEUNFD0e.js";import"./text-BY-HMTZU.js";import"./text.component-Qy1AxcqM.js";import"./default-typography.styles-DoSy3_Vg.js";import"./flex-CO9lfU8X.js";import"./flex.component-V9gqo_dk.js";import"./blur.component-HCmCQaNl.js";import"./formatted-account-DVcDF7AK.js";import"./formatted-date-C9OB9_g2.js";import"./formatted-date.component-Cj1ujRoE.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
