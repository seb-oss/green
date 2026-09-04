import{b as s}from"./iframe-cJ-G3WTm.js";import{a as o}from"./argTableProps-ua3rXx9X.js";import{Default as r}from"./formatted-account.stories-Dct-XABd.js";import{G as a}from"./sensitive-account.component-B6RdD8_Y.js";import{a as n}from"./formatted-account-CV3-GxHO.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-CE_KCpC0.js";import"./flex.component-BOo_oHAx.js";import"./formatted-text-DrxTNNdx.js";import"./text-TyS-w9R8.js";import"./text.component-D9YlODAM.js";import"./default-typography.styles-CTk53gt7.js";import"./blur.component-JjmbL1Hg.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
