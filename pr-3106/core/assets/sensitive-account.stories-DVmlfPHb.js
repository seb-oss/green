import{b as s}from"./iframe-D58RQQ6P.js";import{a as o}from"./argTableProps-DEPatxSc.js";import{Default as r}from"./formatted-account.stories-DDFD-6qL.js";import{G as a}from"./sensitive-account.component-BKgp5Yk2.js";import{a as n}from"./formatted-account-JDez_bRt.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-B7cCEKVX.js";import"./flex.component-CpFiFjq9.js";import"./formatted-text-BM39LXyi.js";import"./text-Btq0tRky.js";import"./text.component-CJkUcZos.js";import"./default-typography.styles-CCquCKlT.js";import"./blur.component-Bx5cAsTe.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
