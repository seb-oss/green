import{b as s}from"./iframe-DuBKvbTM.js";import{a as o}from"./argTableProps-BV53iAhP.js";import{Default as r}from"./formatted-account.stories-CBxLsBSE.js";import{G as a}from"./sensitive-account.component-DFClsStE.js";import{a as n}from"./formatted-account-CMH9HXF1.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DduxFC4A.js";import"./flex.component-Bilq_XdN.js";import"./formatted-text-Cmzu6AJn.js";import"./text-Da8sJ74a.js";import"./text.component-ClFA9x5w.js";import"./default-typography.styles-moOMOm0I.js";import"./blur.component-BTU-mc1n.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
