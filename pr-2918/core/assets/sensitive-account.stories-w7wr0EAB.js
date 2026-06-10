import{b as s}from"./iframe-BRFq_Aky.js";import{a as o}from"./argTableProps-9dqwXCLt.js";import{Default as r}from"./formatted-account.stories-CZRS9YvD.js";import{G as a}from"./sensitive-account.component-CIM9aBL7.js";import{a as n}from"./formatted-account-RTvAKpDF.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-EYYFlaq_.js";import"./flex.component-9EqdPDfF.js";import"./formatted-text-BJv5f1SS.js";import"./text-BTXqbkI5.js";import"./text.component-DZx4uezc.js";import"./default-typography.styles-tqOHiHYf.js";import"./blur.component-BMcIaI8o.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
