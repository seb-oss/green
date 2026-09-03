import{b as s}from"./iframe-Bs4J-K7K.js";import{a as o}from"./argTableProps-DlxhLjU6.js";import{Default as r}from"./formatted-account.stories-HOjQHLUA.js";import{G as a}from"./sensitive-account.component-vg1TLedt.js";import{a as n}from"./formatted-account-A5a2A8Lf.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-C0fVZUtm.js";import"./flex.component-Cw8Ck61a.js";import"./formatted-text-bzDLYZ7v.js";import"./text-D6FrN9m_.js";import"./text.component-8M8b2Ks5.js";import"./default-typography.styles-DdX4sO2e.js";import"./blur.component-DC-r4BHE.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
