import{b as s}from"./iframe-C4yZLhah.js";import{a as o}from"./argTableProps-ydJwTBrt.js";import{Default as r}from"./formatted-account.stories-BrsfJxW0.js";import{G as a}from"./sensitive-account.component-DjRuLqgL.js";import{a as n}from"./formatted-account-d7GExeFT.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-1vFUuq7t.js";import"./flex.component-CP56clHh.js";import"./formatted-text-DSWnvgOe.js";import"./text-CcccT_gZ.js";import"./text.component-CRvgz2pu.js";import"./default-typography.styles-DhEvBON3.js";import"./blur.component-CuhemED8.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
