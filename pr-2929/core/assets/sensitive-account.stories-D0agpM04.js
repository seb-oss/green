import{b as s}from"./iframe-BqBOLG1S.js";import{a as o}from"./argTableProps-C1CkZ-K0.js";import{Default as r}from"./formatted-account.stories-C4Zhm6G-.js";import{G as a}from"./sensitive-account.component-DWJiH2CU.js";import{a as n}from"./formatted-account-CS-ZKw1V.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DTRitpzI.js";import"./flex.component-DTLXrlcv.js";import"./formatted-text-B-tGJvp9.js";import"./text-BuAtEYkj.js";import"./text.component-D_-7a4b7.js";import"./default-typography.styles-BUZeiKG-.js";import"./blur.component-CsYKpbjV.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
