import{b as a}from"./iframe-CL7Bfxf7.js";import{a as n}from"./argTableProps-CqaFD09l.js";import{Default as c}from"./formatted-account.stories-CsXQiMKK.js";import{G as i}from"./sensitive-account.component-uUkijhEC.js";import{a as m}from"./formatted-account-BtsIw8R6.js";import"./preload-helper-Dp1pzeXC.js";import"./flex-DKlmx7v_.js";import"./flex.component-C4sihmBH.js";import"./formatted-text-DFCE13Ku.js";import"./text-Bn_LZ5NK.js";import"./text.component-vzGgBPLb.js";import"./default-typography.styles-BxtTddnl.js";import"./blur.component-DOq0Q04V.js";i.define();const G={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...n("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(m)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

GdsSensitiveAccount displays a formatted account and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},p={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...c.args,hide:!0}},t={...p,render:e=>a`<gds-sensitive-account
      .hide=${e.hide}
      .account=${e.account}
    ></gds-sensitive-account>`};var s,o,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-account
      .hide=\${args.hide}
      .account=\${args.account}
    ></gds-sensitive-account>\`
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,G as default};
