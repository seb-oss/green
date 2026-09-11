import{b as s}from"./iframe-DwPQCKDR.js";import{a as o}from"./argTableProps-BYGCzEjT.js";import{Default as r}from"./formatted-account.stories-CJo8zhDR.js";import{G as a}from"./sensitive-account.component-CXbP10l_.js";import{a as n}from"./formatted-account-fMPJ_MLu.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-Jnuy-5oX.js";import"./flex.component-BaQ9h5su.js";import"./formatted-text-CBgg5-2N.js";import"./text-BeibnTZq.js";import"./text.component-d9639t4X.js";import"./default-typography.styles-CTbmXhUJ.js";import"./blur.component-D-2yQrCp.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
