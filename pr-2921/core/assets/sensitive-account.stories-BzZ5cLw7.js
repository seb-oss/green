import{b as s}from"./iframe-BgnVXT15.js";import{a as o}from"./argTableProps-Cd6T2fHE.js";import{Default as r}from"./formatted-account.stories-DwNnvaup.js";import{G as a}from"./sensitive-account.component-BN30dA8W.js";import{a as n}from"./formatted-account-B3JhbNSH.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-BoRsA9ol.js";import"./flex.component-B_T29pzs.js";import"./formatted-text-B5l21-ML.js";import"./text-BGMpifsQ.js";import"./text.component-D2V6ELCw.js";import"./default-typography.styles-BVGU1Gld.js";import"./blur.component-CKwlrO21.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
