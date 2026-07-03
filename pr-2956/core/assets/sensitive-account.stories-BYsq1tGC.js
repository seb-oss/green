import{b as s}from"./iframe-BZB1ZMZ5.js";import{a as o}from"./argTableProps-CQPXCoz8.js";import{Default as r}from"./formatted-account.stories-BdJdIjeA.js";import{G as a}from"./sensitive-account.component-iIB-UDq3.js";import{a as n}from"./formatted-account-C4_YywUQ.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-CliBYqiP.js";import"./flex.component-CKb5Hk-C.js";import"./formatted-text-DNNN620N.js";import"./text-6BCG1VP7.js";import"./text.component-DbGV4K93.js";import"./default-typography.styles-CEzl3z22.js";import"./blur.component-fyQYoc4g.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
