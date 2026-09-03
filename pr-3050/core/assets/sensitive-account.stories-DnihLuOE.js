import{b as s}from"./iframe-C9vl5CI1.js";import{a as o}from"./argTableProps-xov3vLYX.js";import{Default as r}from"./formatted-account.stories-Bi6P2pKS.js";import{G as a}from"./sensitive-account.component-CCveF443.js";import{a as n}from"./formatted-account-DuSkSMDy.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DfOrsBDP.js";import"./flex.component-DhVZE6-t.js";import"./formatted-text-CrHL0Bdp.js";import"./text-CHU4bqIm.js";import"./text.component-BXSo7-sn.js";import"./default-typography.styles-DkX2A4Wv.js";import"./blur.component-DM_6M0au.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
