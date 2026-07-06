import{b as t}from"./iframe-DoeOCJq9.js";import{a as s}from"./argTableProps-Ce_YPF1D.js";import{n as o}from"./formatted-number-BAdPrfOT.js";import{Default as n}from"./formatted-number.stories-y4upa6Rr.js";import{G as a}from"./sensitive-number.component-BIYdXrs6.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-D2lZKaTy.js";import"./text-BW4Gp-M7.js";import"./text.component-CAbUzPLf.js";import"./default-typography.styles-1q-pEq_5.js";import"./flex-Yiz4Fr2d.js";import"./flex.component-wT3w3-oz.js";import"./blur.component-g8BTDmIA.js";import"./formatted-account-CkZbV96W.js";import"./formatted-date-DZg41Xo-.js";import"./formatted-date.component-lmz7v05Q.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
