import{b as s}from"./iframe--MLfqQYT.js";import{a as o}from"./argTableProps-BpdoFiEM.js";import{Default as r}from"./formatted-account.stories-CWp4kSsQ.js";import{G as a}from"./sensitive-account.component-C4L2-mi1.js";import{a as n}from"./formatted-account-DSddEZ6q.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DksfZ1O-.js";import"./flex.component-BUCAhQ1W.js";import"./formatted-text-BnqltqAv.js";import"./text-CzWyNq1B.js";import"./text.component-DibKKvYh.js";import"./default-typography.styles-CawhV9CK.js";import"./blur.component-BK2VMXXS.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
