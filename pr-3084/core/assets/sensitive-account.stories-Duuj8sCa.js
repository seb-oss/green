import{b as s}from"./iframe-DnMzMKkm.js";import{a as o}from"./argTableProps-C0nNgm3z.js";import{Default as r}from"./formatted-account.stories-CgIS0DzS.js";import{G as a}from"./sensitive-account.component-DLBhO46_.js";import{a as n}from"./formatted-account-DTQL9Pi7.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-D1x1ipTe.js";import"./flex.component-gGN3z-2J.js";import"./formatted-text-Bt2hF5pN.js";import"./text-Dbe3ejwK.js";import"./text.component-hPGkXdk9.js";import"./default-typography.styles-rNTnWigA.js";import"./blur.component-Cp2Tjj8_.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
