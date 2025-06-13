import{x as c}from"./lit-element-Bx14lxc-.js";import{a as n}from"./argTableProps-BwJLn5uO.js";import{a as s}from"./formatted-account-BW1V3Hr0.js";import"./flex-BrHfEfu9.js";import"./custom-elements-Cq35m1z0.js";import"./custom-element-scoping-BmMuu402.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-CAPslJcA.js";import"./query-p8xgzTDt.js";import"./text-Dv-FEuyp.js";import"./static-B8S6DEnV.js";import"./tokens.style-Blxdz1wy.js";import"./declarative-layout-mixins-CDQpYbOZ.js";import"./div.component-DkCj2W0e.js";import"./flex.component-DTmt0IaX.js";const E={title:"Components/Formatted text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...n("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(s)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...m,name:"SEB Account",render:o=>c`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=${o.account}></gds-formatted-account>
      <gds-formatted-account>${o.account}</gds-formatted-account>
    </gds-flex>`};var e,a,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'SEB Account',
  render: args => html\`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=\${args.account}></gds-formatted-account>
      <gds-formatted-account>\${args.account}</gds-formatted-account>
    </gds-flex>\`
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const F=["Default"];export{t as Default,F as __namedExportsOrder,E as default};
