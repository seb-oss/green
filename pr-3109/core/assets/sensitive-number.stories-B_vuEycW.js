import{b as t}from"./iframe-BGkyvTqG.js";import{a as s}from"./argTableProps-B3GC4NN4.js";import{n as o}from"./formatted-number-BLL1xJ8a.js";import{Default as n}from"./formatted-number.stories-Sq2qfH-A.js";import{G as a}from"./sensitive-number.component-Gaqv-LkY.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-D-37E8CO.js";import"./text-SkKJbc6S.js";import"./text.component-DXNodQTR.js";import"./default-typography.styles-BIQUxlvn.js";import"./flex-BW8i_Tcg.js";import"./flex.component-DakDuI5N.js";import"./blur.component-2iCDDG39.js";import"./formatted-account-DWdeeFsB.js";import"./formatted-date-lKEMCr_E.js";import"./formatted-date.component-5ouvxsdl.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
