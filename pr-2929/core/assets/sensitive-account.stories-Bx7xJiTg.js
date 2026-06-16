import{b as s}from"./iframe-3oEnhsFE.js";import{a as o}from"./argTableProps-CR9Nwp75.js";import{Default as r}from"./formatted-account.stories-Cg1P-8SI.js";import{G as a}from"./sensitive-account.component-Df1hk5L0.js";import{a as n}from"./formatted-account-BysJotHp.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-Bu8xaZam.js";import"./flex.component-DZs_wmTf.js";import"./formatted-text-DNirix6w.js";import"./text-DEJ6yRmD.js";import"./text.component-DDnpOvcb.js";import"./default-typography.styles-CbPdZMWQ.js";import"./blur.component-CNVGwvzx.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
