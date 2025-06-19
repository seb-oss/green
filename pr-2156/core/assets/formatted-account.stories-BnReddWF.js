import{x as c}from"./lit-element-Bx14lxc-.js";import{a as n}from"./argTableProps-BGMn6vac.js";import{a as s}from"./formatted-account-CkTdN5zM.js";import"./flex-0EBFStdI.js";import"./custom-elements-bx19eHBQ.js";import"./gds-element-KHa0AloG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-DyWClbZy.js";import"./query-p8xgzTDt.js";import"./text-DWhf5Ayy.js";import"./static-B8S6DEnV.js";import"./tokens.style-YygOKULa.js";import"./declarative-layout-mixins-V-x3wfiD.js";import"./div.component-OjLeAa38.js";import"./flex.component-BF3O-Nq2.js";const E={title:"Components/Formatted text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...n("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(s)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...m,name:"SEB Account",render:o=>c`<gds-flex gap="m" flex-direction="column">
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
