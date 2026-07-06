import{b as s}from"./iframe-DoeOCJq9.js";import{a as o}from"./argTableProps-Ce_YPF1D.js";import{Default as r}from"./formatted-account.stories-BndQH6K6.js";import{G as a}from"./sensitive-account.component-Cb0ZD8sm.js";import{a as n}from"./formatted-account-CkZbV96W.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-Yiz4Fr2d.js";import"./flex.component-wT3w3-oz.js";import"./formatted-text-D2lZKaTy.js";import"./text-BW4Gp-M7.js";import"./text.component-CAbUzPLf.js";import"./default-typography.styles-1q-pEq_5.js";import"./blur.component-g8BTDmIA.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
