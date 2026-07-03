import{b as s}from"./iframe-DOT61pU6.js";import{a as o}from"./argTableProps-CS6f9cAl.js";import{Default as r}from"./formatted-account.stories-Bki8G_On.js";import{G as a}from"./sensitive-account.component-Ukhz6AYI.js";import{a as n}from"./formatted-account-D8oWDnO2.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-2Toe02uE.js";import"./flex.component-BP9ANZYa.js";import"./formatted-text-CuKbPQyB.js";import"./text-Dgxi5WWf.js";import"./text.component-DqEDHE6I.js";import"./default-typography.styles-DSEyIK3k.js";import"./blur.component-V0lAbgjm.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
