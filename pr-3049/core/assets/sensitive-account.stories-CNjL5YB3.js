import{b as s}from"./iframe-BTEMi5uh.js";import{a as o}from"./argTableProps-DhGDpDNW.js";import{Default as r}from"./formatted-account.stories-BY08WaC5.js";import{G as a}from"./sensitive-account.component-CFAE5Hyg.js";import{a as n}from"./formatted-account-CjfQEYca.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DR3h5pID.js";import"./flex.component-DarE5pY2.js";import"./formatted-text-BXA9vOp4.js";import"./text-CWtwuBvJ.js";import"./text.component-BNADgX4E.js";import"./default-typography.styles-BU1f2-fr.js";import"./blur.component-C9Jz7VZd.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
