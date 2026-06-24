import{b as t}from"./iframe-DzFVIyCe.js";import{a as s}from"./argTableProps-Tx9LS6k9.js";import{n as o}from"./formatted-number-B_BuHCsV.js";import{Default as n}from"./formatted-number.stories-C0X0r9bt.js";import{G as a}from"./sensitive-number.component-BbEclDao.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-Bg__36h7.js";import"./text-BQhY6npA.js";import"./text.component-Q94igepL.js";import"./default-typography.styles-GHtnlLHb.js";import"./flex-B4PKXUFR.js";import"./flex.component-DkXZb1a9.js";import"./blur.component-BQu6ZMZZ.js";import"./formatted-account-CC-zuUVr.js";import"./formatted-date-BgM8zL44.js";import"./formatted-date.component-DYGvLhML.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
