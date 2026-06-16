import{b as s}from"./iframe-BSZXZYIs.js";import{a as o}from"./argTableProps-CxV3XV9a.js";import{Default as r}from"./formatted-account.stories-CyGDziiL.js";import{G as a}from"./sensitive-account.component-7hYc4sVF.js";import{a as n}from"./formatted-account-BZ0dkpp2.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-BTZg0uBO.js";import"./flex.component-CLYsO7Fp.js";import"./formatted-text-DXpCmRWI.js";import"./text-D6ppvjvL.js";import"./text.component-DBe5kr_I.js";import"./default-typography.styles-C-Jt-k6g.js";import"./blur.component-t7vPqrPU.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
