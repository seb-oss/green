import{x as c}from"./lit-element-Bx14lxc-.js";import{a as n}from"./argTableProps-DLhuueLD.js";import{a as s}from"./formatted-account-CVa4rpgi.js";import"./flex-B5mJpYvo.js";import"./custom-elements-fB1Z3nnq.js";import"./custom-element-scoping-b4c89-hi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-B97grCwS.js";import"./query-p8xgzTDt.js";import"./text-DHkStq5a.js";import"./text.component-3PmMqu4q.js";import"./static-B8S6DEnV.js";import"./tokens.style-BY4y5f1K.js";import"./declarative-layout-mixins-CxeMR8ZJ.js";import"./div.component-C5EmBRSK.js";import"./flex.component-BpIVa_-p.js";const F={title:"Components/Formatted Text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...n("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(s)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...m,name:"SEB Account",render:o=>c`<gds-flex gap="m" flex-direction="column">
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
