import{b as s}from"./iframe-CAXRNL5R.js";import{a as o}from"./argTableProps-CxpU9HqQ.js";import{Default as r}from"./formatted-account.stories-BGOh0i0j.js";import{G as a}from"./sensitive-account.component-BAQ_Lx7M.js";import{a as n}from"./formatted-account-Cw993vMu.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-Dlz5o_yl.js";import"./flex.component-C6l2MwzK.js";import"./formatted-text-C5ArrnpM.js";import"./text-BeQh3Sn3.js";import"./text.component-DBX7t9zK.js";import"./default-typography.styles-DKUxmOMH.js";import"./blur.component-Bmi6L27T.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
