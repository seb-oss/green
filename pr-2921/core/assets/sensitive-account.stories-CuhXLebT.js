import{b as s}from"./iframe-B6b8lEsx.js";import{a as o}from"./argTableProps-CTt8uGct.js";import{Default as r}from"./formatted-account.stories-VCN2m2fI.js";import{G as a}from"./sensitive-account.component-BhoFYkjg.js";import{a as n}from"./formatted-account-CWeZGsR3.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-BFKK5gCD.js";import"./flex.component-DiatQJPJ.js";import"./formatted-text-CfXNO-wz.js";import"./text-Cc9E1CGj.js";import"./text.component-Dg68zOIe.js";import"./default-typography.styles-CnqW_myG.js";import"./blur.component-_jKQsfBz.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
