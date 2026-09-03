import{b as s}from"./iframe-tS67NpJ4.js";import{a as o}from"./argTableProps-cWTUIpeJ.js";import{Default as r}from"./formatted-account.stories-Bg7F1w74.js";import{G as a}from"./sensitive-account.component-CFVXIgFN.js";import{a as n}from"./formatted-account-DNeI83a_.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-FS1HDqUH.js";import"./flex.component-BFPMbxdW.js";import"./formatted-text-_avv8k0w.js";import"./text-B_tIOtpF.js";import"./text.component-D9AlA_Y_.js";import"./default-typography.styles-C998HRCC.js";import"./blur.component-Uv6myhuy.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
