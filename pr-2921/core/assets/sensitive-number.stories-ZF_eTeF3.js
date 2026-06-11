import{b as t}from"./iframe-BgnVXT15.js";import{a as s}from"./argTableProps-Cd6T2fHE.js";import{n as o}from"./formatted-number-Dl_cS_-L.js";import{Default as n}from"./formatted-number.stories-DLmPeRTo.js";import{G as a}from"./sensitive-number.component-DbyfIAq8.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-B5l21-ML.js";import"./text-BGMpifsQ.js";import"./text.component-D2V6ELCw.js";import"./default-typography.styles-BVGU1Gld.js";import"./flex-BoRsA9ol.js";import"./flex.component-B_T29pzs.js";import"./blur.component-CKwlrO21.js";import"./formatted-account-B3JhbNSH.js";import"./formatted-date-BN1G3yXz.js";import"./formatted-date.component-BAujhFgp.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
