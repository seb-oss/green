import{b as s}from"./iframe-COzfmFJx.js";import{a as o}from"./argTableProps-Cq7WlXmJ.js";import{Default as r}from"./formatted-account.stories-DKPb7qKS.js";import{G as a}from"./sensitive-account.component-CxuID5FQ.js";import{a as n}from"./formatted-account-MWZuJCMW.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-C2ZOevgm.js";import"./flex.component-ODx9SUsP.js";import"./formatted-text-j70W9C_m.js";import"./text-BYeNF6SL.js";import"./text.component-S2tODZae.js";import"./default-typography.styles-CukvtOXb.js";import"./blur.component-yTSKnGnJ.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
