import{x as c}from"./lit-element-DurN2HL2.js";import{a as n}from"./argTableProps-dxkJ46CC.js";import{a as s}from"./formatted-account-MNYKAV7a.js";import"./flex-Hi-aWsz6.js";import"./custom-elements-DQo22rdN.js";import"./Reflect-BIo-zK4X.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./gds-element-4C_whPou.js";import"./formatted-text-Cp014Txr.js";import"./query-p8xgzTDt.js";import"./text-jcXmMPmS.js";import"./static-Bn3NESYl.js";import"./tokens.style-Boei6TBQ.js";import"./declarative-layout-mixins-TUy19cvx.js";import"./div.component-BwtVtTeM.js";import"./flex.component-D5YHBXrr.js";const F={title:"Components/Formatted text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...n("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(s)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...m,name:"SEB Account",render:o=>c`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=${o.account}></gds-formatted-account>
      <gds-formatted-account>${o.account}</gds-formatted-account>
    </gds-flex>`};var e,a,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'SEB Account',
  render: args => html\`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=\${args.account}></gds-formatted-account>
      <gds-formatted-account>\${args.account}</gds-formatted-account>
    </gds-flex>\`
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,F as default};
