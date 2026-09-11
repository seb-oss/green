import{b as s}from"./iframe-DECnLmkM.js";import{a as o}from"./argTableProps-DCScQ2Tp.js";import{Default as r}from"./formatted-account.stories-CgrKvvBW.js";import{G as a}from"./sensitive-account.component-BsRrcps_.js";import{a as n}from"./formatted-account-BjL1I0O4.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-CbcawyL2.js";import"./flex.component-C0w496fX.js";import"./formatted-text-BuukVoM_.js";import"./text-DuXSvayV.js";import"./text.component-CFcVFTYH.js";import"./default-typography.styles-vVker8wY.js";import"./blur.component-x_J5wlVM.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
