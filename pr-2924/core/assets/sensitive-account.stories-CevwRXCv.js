import{b as s}from"./iframe-DeZzR3Q-.js";import{a as o}from"./argTableProps-ChTPzmbf.js";import{Default as r}from"./formatted-account.stories-CfStYz1t.js";import{G as a}from"./sensitive-account.component-BS9xgVzE.js";import{a as n}from"./formatted-account-BA68gAt3.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-Bb5_PfmY.js";import"./flex.component-BaqhG-ob.js";import"./formatted-text-BeB4Kqt3.js";import"./text-Bn42DMOa.js";import"./text.component-BIlEiFmQ.js";import"./default-typography.styles-C_vVBpR5.js";import"./blur.component-B3XJ2En2.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
