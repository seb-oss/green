import{b as t}from"./iframe-DlIMbJFh.js";import{a as s}from"./argTableProps-B6MCuoK1.js";import{n as o}from"./formatted-number-CXkpRtzz.js";import{Default as n}from"./formatted-number.stories-1DDaNmgv.js";import{G as a}from"./sensitive-number.component-mpIstMCb.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CrhGeTj3.js";import"./text-BVO-0UxU.js";import"./text.component-0srPIWId.js";import"./default-typography.styles-BzSf7jm1.js";import"./flex-WBRZJ0Gr.js";import"./flex.component-00d2Alrn.js";import"./blur.component-DYDb9lFK.js";import"./formatted-account-KsyRIRUa.js";import"./formatted-date-cTJAp44A.js";import"./formatted-date.component-DcZiHR50.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
