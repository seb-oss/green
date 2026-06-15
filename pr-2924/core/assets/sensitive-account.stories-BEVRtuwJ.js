import{b as s}from"./iframe-D2OkY6_k.js";import{a as o}from"./argTableProps-TU86pZ0q.js";import{Default as r}from"./formatted-account.stories-CwaTsICc.js";import{G as a}from"./sensitive-account.component-DS_lQuAp.js";import{a as n}from"./formatted-account-B7JQgOAg.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-CNcedzU4.js";import"./flex.component-Dk5ioDXD.js";import"./formatted-text-CJ6WAg-E.js";import"./text-BAZPrF1M.js";import"./text.component-D0Xw8xtT.js";import"./default-typography.styles-r-riYQjk.js";import"./blur.component-By2bgESY.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
