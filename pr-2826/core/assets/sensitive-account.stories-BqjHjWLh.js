import{b as s}from"./iframe-GGkrsogq.js";import{a as o}from"./argTableProps-DqXuebLo.js";import{Default as r}from"./formatted-account.stories-EGnMZj7A.js";import{G as a}from"./sensitive-account.component-BdiEUL5n.js";import{a as n}from"./formatted-account-CNpPIFj0.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-CO5TCcWz.js";import"./flex.component-BCVN4gJl.js";import"./formatted-text-7efLNMI_.js";import"./text-CdQJa47J.js";import"./text.component-CYMo-4LT.js";import"./default-typography.styles-v2gvzg-2.js";import"./blur.component-GTtUH2Nl.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
