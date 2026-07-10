import{b as s}from"./iframe-BNCtr4fq.js";import{a as o}from"./argTableProps-BqWaDS6S.js";import{Default as r}from"./formatted-account.stories-D1Ccw1Mr.js";import{G as a}from"./sensitive-account.component-qQ2ZX7Hv.js";import{a as n}from"./formatted-account-DdslKdVF.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-fwZC4j0v.js";import"./flex.component-C4p7DvmF.js";import"./formatted-text-DQ1Un2Op.js";import"./text-DD9_Eodl.js";import"./text.component-CTs8LLyR.js";import"./default-typography.styles-CZfmBsWH.js";import"./blur.component-B3kMGlX9.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
