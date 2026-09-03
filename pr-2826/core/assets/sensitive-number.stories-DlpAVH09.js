import{b as t}from"./iframe-Db8hCJ7u.js";import{a as s}from"./argTableProps-CvYua6PL.js";import{n as o}from"./formatted-number-BdRBMgOL.js";import{Default as n}from"./formatted-number.stories-pXNPEYMx.js";import{G as a}from"./sensitive-number.component-C_LBeMnM.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-kvIEMBAG.js";import"./text-BpYpbPBo.js";import"./text.component-CxRzcGJW.js";import"./default-typography.styles-CKREnxVV.js";import"./flex-DPWEKlvy.js";import"./flex.component-m6iZ_CDd.js";import"./blur.component-ClUhvmPe.js";import"./formatted-account-Dlu-392T.js";import"./formatted-date-BLfsEo1Y.js";import"./formatted-date.component-DNMBVrpU.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
