import{b as t}from"./iframe-P4Ox4Kkx.js";import{a as s}from"./argTableProps-D0L2oOd1.js";import{n as o}from"./formatted-number-jcPvZViM.js";import{Default as n}from"./formatted-number.stories-S2iz1hyW.js";import{G as a}from"./sensitive-number.component-CNM5nEQM.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-pep_d3u-.js";import"./text-DcUvFhSS.js";import"./text.component-B3ETixnq.js";import"./default-typography.styles-BTFbOdRW.js";import"./flex-BkIWLlGE.js";import"./flex.component-DzWItV-N.js";import"./blur.component-Bn6BzTgP.js";import"./formatted-account-BD7HCjpT.js";import"./formatted-date-lsmv7ufS.js";import"./formatted-date.component-ZxEOxaJ5.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
