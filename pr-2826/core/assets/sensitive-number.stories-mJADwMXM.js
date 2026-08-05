import{b as t}from"./iframe-DX1nX-Km.js";import{a as s}from"./argTableProps-DMmoMgv3.js";import{n as o}from"./formatted-number-B6XBUC3_.js";import{Default as n}from"./formatted-number.stories-BSutkE1P.js";import{G as a}from"./sensitive-number.component-CSwubaO0.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BCOtOiov.js";import"./text-DrF2nVoG.js";import"./text.component-D4oaXRYE.js";import"./default-typography.styles-B8qii3yw.js";import"./flex-BAN0r9E4.js";import"./flex.component-DD6Mxhry.js";import"./blur.component-DncU9Mfx.js";import"./formatted-account-Cc6q-mjB.js";import"./formatted-date-Dpi6U962.js";import"./formatted-date.component-B3NpGZsW.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
