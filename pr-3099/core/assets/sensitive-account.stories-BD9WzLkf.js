import{b as s}from"./iframe-E9JrStd9.js";import{a as o}from"./argTableProps-D7xC35vz.js";import{Default as r}from"./formatted-account.stories-Dy_NarJ0.js";import{G as a}from"./sensitive-account.component-C_nPuA0C.js";import{a as n}from"./formatted-account-DRWYBEPs.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-N3PySF-s.js";import"./flex.component-DLGXTqX9.js";import"./formatted-text-BkRAlz_l.js";import"./text-wm71KQ6Z.js";import"./text.component-BuLcOGZC.js";import"./default-typography.styles-VqdXFT9H.js";import"./blur.component-D_0hKhIm.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
