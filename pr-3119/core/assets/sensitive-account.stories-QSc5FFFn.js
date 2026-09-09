import{b as s}from"./iframe-_t4ul9Kp.js";import{a as o}from"./argTableProps-DVB4H0W9.js";import{Default as r}from"./formatted-account.stories-BpW9l6Fv.js";import{G as a}from"./sensitive-account.component-1xhX3QY_.js";import{a as n}from"./formatted-account-BD4YG100.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-BhgxY_l5.js";import"./flex.component-DneYDJUz.js";import"./formatted-text-BTcjGoiw.js";import"./text-DlPTKlro.js";import"./text.component-BO1dA5_x.js";import"./default-typography.styles-CZ87N88o.js";import"./blur.component-CtvF1N1I.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
