import{b as s}from"./iframe-BFOz556-.js";import{a as o}from"./argTableProps-B4rPkO2R.js";import{Default as r}from"./formatted-account.stories-C2Bc_NBj.js";import{G as a}from"./sensitive-account.component-CWCciH_x.js";import{a as n}from"./formatted-account-C4gJqmsd.js";import"./preload-helper-PPVm8Dsz.js";import"./flex--w2-iAi1.js";import"./flex.component-Bks9EXN7.js";import"./formatted-text-DhAgVi-d.js";import"./text-CvfIS86a.js";import"./text.component-Do2fdDQH.js";import"./default-typography.styles-Y2Emtnpw.js";import"./blur.component-CdsUAvU3.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
