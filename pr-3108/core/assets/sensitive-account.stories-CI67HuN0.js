import{b as s}from"./iframe-HjqklIbq.js";import{a as o}from"./argTableProps-kga1Ow2w.js";import{Default as r}from"./formatted-account.stories-BKfpCxip.js";import{G as a}from"./sensitive-account.component-DMqvmKie.js";import{a as n}from"./formatted-account-Dh_CD5kM.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-BDdpQq_O.js";import"./flex.component-BBE2JBAD.js";import"./formatted-text-BB7lTm3q.js";import"./text-CLb8zKss.js";import"./text.component-7rNDfW5j.js";import"./default-typography.styles-BpyiKY0w.js";import"./blur.component-zr0DDCZl.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
