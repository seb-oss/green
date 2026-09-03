import{b as t}from"./iframe-wighnWuJ.js";import{a as s}from"./argTableProps-BpwJjB3T.js";import{n as o}from"./formatted-number-Dh9UHGKJ.js";import{Default as n}from"./formatted-number.stories-aY6sT_KP.js";import{G as a}from"./sensitive-number.component-DBEEATWS.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BPeZJxcI.js";import"./text-sgXoT6fc.js";import"./text.component-BgGP_WUR.js";import"./default-typography.styles-Cg0NZSVD.js";import"./flex-Chd0MBpF.js";import"./flex.component-BpivGmBq.js";import"./blur.component-tgV-NAc6.js";import"./formatted-account-BnrCPMgF.js";import"./formatted-date-L8Iuoz_y.js";import"./formatted-date.component-zKwvGv7W.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
