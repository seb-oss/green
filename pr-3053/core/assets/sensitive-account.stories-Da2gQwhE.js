import{b as s}from"./iframe-CuywSVrm.js";import{a as o}from"./argTableProps-C05_UJw2.js";import{Default as r}from"./formatted-account.stories-G1opQ6g_.js";import{G as a}from"./sensitive-account.component-V3spENj7.js";import{a as n}from"./formatted-account-KlS9Rbd3.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-ozvWlSW6.js";import"./flex.component-BVDzlAID.js";import"./formatted-text-BJ3gD526.js";import"./text-CdXfNzo8.js";import"./text.component-l2FBzpJh.js";import"./default-typography.styles-BfY9lhd4.js";import"./blur.component-CWNxKasx.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
