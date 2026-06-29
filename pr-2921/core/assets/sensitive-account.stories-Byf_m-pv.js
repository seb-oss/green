import{b as s}from"./iframe-D12PU7C-.js";import{a as o}from"./argTableProps-IRxhQanW.js";import{Default as r}from"./formatted-account.stories-D6kAMnBo.js";import{G as a}from"./sensitive-account.component-JJBNH0Eq.js";import{a as n}from"./formatted-account-BO2gyVRI.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DguH1G8l.js";import"./flex.component-DPXlP2QX.js";import"./formatted-text-DSIgk0gY.js";import"./text-Cq0bWdAd.js";import"./text.component-cPTVwBto.js";import"./default-typography.styles-CIR4cJg8.js";import"./blur.component-VYLBCxUm.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
