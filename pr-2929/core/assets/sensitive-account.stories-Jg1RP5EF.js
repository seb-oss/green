import{b as s}from"./iframe-3V4vje3A.js";import{a as o}from"./argTableProps-Dn1rlvZU.js";import{Default as r}from"./formatted-account.stories-CW4Gt8i-.js";import{G as a}from"./sensitive-account.component-Dbc8OSjA.js";import{a as n}from"./formatted-account-BDsqRqOZ.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-CifrN5YK.js";import"./flex.component-oZnb797Y.js";import"./formatted-text-CmaxzZf3.js";import"./text-Bcspz2J9.js";import"./text.component-DPFT1tIi.js";import"./default-typography.styles-iB2U2yhA.js";import"./blur.component-dWwHKJOv.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
