import{b as s}from"./iframe-DIuetfR5.js";import{a as o}from"./argTableProps-D_ugAvq9.js";import{Default as r}from"./formatted-account.stories-DD-xoyY1.js";import{G as a}from"./sensitive-account.component-DJdJxXAB.js";import{a as n}from"./formatted-account-CU87spdp.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-CMKnqV_l.js";import"./flex.component-DJxDbP2P.js";import"./formatted-text-D85mxwiC.js";import"./text-Df_eTKoy.js";import"./text.component-BcTwev9O.js";import"./default-typography.styles-C_gDalVT.js";import"./blur.component-DmhKTf0x.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
