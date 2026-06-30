import{b as s}from"./iframe-wg8wLRxR.js";import{a as o}from"./argTableProps-CJXpmQRN.js";import{Default as r}from"./formatted-account.stories-T6I9Vpo-.js";import{G as a}from"./sensitive-account.component-0-x0oKBT.js";import{a as n}from"./formatted-account-B78UtnZi.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-zkzzK2MI.js";import"./flex.component-Be-IWHT3.js";import"./formatted-text-sp8kZCh0.js";import"./text-D0yNWOnY.js";import"./text.component-DnMohhkS.js";import"./default-typography.styles-Kv6M5g43.js";import"./blur.component-C0Ng-Q4h.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
