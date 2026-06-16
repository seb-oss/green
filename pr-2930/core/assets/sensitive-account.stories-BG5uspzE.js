import{b as s}from"./iframe-xJCTAFzf.js";import{a as o}from"./argTableProps-CdwwSlVO.js";import{Default as r}from"./formatted-account.stories-B4ehDFbm.js";import{G as a}from"./sensitive-account.component-CLsWBUTX.js";import{a as n}from"./formatted-account-Ce-yOxSv.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DmC1j9Lo.js";import"./flex.component-BFSCO_Lu.js";import"./formatted-text-DXn46yIo.js";import"./text-BVySNPKe.js";import"./text.component-CmSTRl5O.js";import"./default-typography.styles-DCHpU9wN.js";import"./blur.component-2djduOKH.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
