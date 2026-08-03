import{b as s}from"./iframe-Ddc77rkg.js";import{a as o}from"./argTableProps-BNIjOmCg.js";import{Default as r}from"./formatted-account.stories-BMdtI0yl.js";import{G as a}from"./sensitive-account.component-BKE_Gkqx.js";import{a as n}from"./formatted-account-oz42JZFy.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-C3tCFzFu.js";import"./flex.component-CY1YtVva.js";import"./formatted-text-D-3fO1aT.js";import"./text-7M97Nx9Z.js";import"./text.component-Dz28oxSf.js";import"./default-typography.styles-Qmwj8D13.js";import"./blur.component-B6LflqqE.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

GdsSensitiveAccount displays a formatted account and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},c={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...r.args,hide:!0}},t={...c,render:e=>s`<gds-sensitive-account
      .hide=${e.hide}
      .account=${e.account}
    ></gds-sensitive-account>`};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-account
      .hide=\${args.hide}
      .account=\${args.account}
    ></gds-sensitive-account>\`
}`,...t.parameters?.docs?.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,S as default};
