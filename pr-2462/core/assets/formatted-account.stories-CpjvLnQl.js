import{x as c}from"./lit-element-Bx14lxc-.js";import{a as n}from"./argTableProps-CtrJ3BiC.js";import{a as s}from"./formatted-account-B7zwqNJg.js";import"./flex-Bn8qcBnP.js";import"./custom-elements-B5Qu5T4G.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./gds-element-DTROifYq.js";import"./formatted-text-BpLfleIZ.js";import"./query-p8xgzTDt.js";import"./text-Btf7_e45.js";import"./static-B8S6DEnV.js";import"./tokens.style-DPGnhRAf.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./div.component-CkXoa4vH.js";import"./default-typography.styles-DG7u6j1x.js";import"./flex.component-DyMuprS_.js";const P={title:"Components/Formatted text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...n("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(s)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...m,name:"SEB Account",render:o=>c`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=${o.account}></gds-formatted-account>
      <gds-formatted-account>${o.account}</gds-formatted-account>
    </gds-flex>`};var e,a,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'SEB Account',
  render: args => html\`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=\${args.account}></gds-formatted-account>
      <gds-formatted-account>\${args.account}</gds-formatted-account>
    </gds-flex>\`
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,P as default};
