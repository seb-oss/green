import{b as t}from"./iframe-CuxsUX_F.js";import{a as s}from"./argTableProps-C7J0OUwq.js";import{n as o}from"./formatted-number-Dr6tIRD7.js";import{Default as n}from"./formatted-number.stories-BTu7lBs_.js";import{G as a}from"./sensitive-number.component-DwSMTXt0.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DiZqxEBU.js";import"./text-DSIeCLRu.js";import"./text.component-ChaZDA3Y.js";import"./default-typography.styles-CBdhTQ4g.js";import"./flex-B8RHlhOf.js";import"./flex.component-D7L8YDSC.js";import"./blur.component-ChH75Adi.js";import"./formatted-account-B9Z8NDLK.js";import"./formatted-date-D7jukWiS.js";import"./formatted-date.component-D2Y5oCt7.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
