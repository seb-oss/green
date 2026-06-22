import{b as s}from"./iframe-BdIyMRyJ.js";import{a as o}from"./argTableProps-BhpxojPe.js";import{Default as r}from"./formatted-account.stories-CX-dCb88.js";import{G as a}from"./sensitive-account.component-Ec6SmGo8.js";import{a as n}from"./formatted-account-Bz5t4ByU.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-EoGtWKop.js";import"./flex.component-BoiuKVL_.js";import"./formatted-text-rbmI5isX.js";import"./text-BIo0mwWb.js";import"./text.component-saIwnA2Y.js";import"./default-typography.styles-D04afdXo.js";import"./blur.component-Cgmkhtgr.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
