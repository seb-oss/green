import{b as s}from"./iframe-CpjcSp7s.js";import{a as o}from"./argTableProps-BrYLyXkV.js";import{Default as r}from"./formatted-account.stories-DpaGpYds.js";import{G as a}from"./sensitive-account.component-CxSRhr-C.js";import{a as n}from"./formatted-account-DCv2QUfd.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-CNHAusAk.js";import"./flex.component-CnkVJOKX.js";import"./formatted-text-DbdGrx_D.js";import"./text-B0Bqnfyh.js";import"./text.component-Dl99GF_F.js";import"./default-typography.styles-DV_y9Hng.js";import"./blur.component-BlnbDhm1.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
