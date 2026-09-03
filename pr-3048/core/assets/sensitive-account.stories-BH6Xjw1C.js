import{b as s}from"./iframe-CrCFIEgk.js";import{a as o}from"./argTableProps-A0FlUc4w.js";import{Default as r}from"./formatted-account.stories-BQxvc2zL.js";import{G as a}from"./sensitive-account.component-Ds8tAthq.js";import{a as n}from"./formatted-account-C8_WmfL9.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-CXpwof3l.js";import"./flex.component-DPNA_hsn.js";import"./formatted-text-BN8uzy09.js";import"./text-CNB39tPf.js";import"./text.component-DqkCezZ1.js";import"./default-typography.styles-B22o7PuP.js";import"./blur.component-D4EBsN37.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
