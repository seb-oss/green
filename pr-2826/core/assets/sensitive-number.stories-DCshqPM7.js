import{b as t}from"./iframe-NY0pB7lA.js";import{a as s}from"./argTableProps-7Xuutl__.js";import{n as o}from"./formatted-number-R-VN9j77.js";import{Default as n}from"./formatted-number.stories-BVa5nkUb.js";import{G as a}from"./sensitive-number.component-DIwp9kkr.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DDQ9cRzO.js";import"./text-BRh9M9Tb.js";import"./text.component-Dkhkt2QX.js";import"./default-typography.styles-kF5E4rWA.js";import"./flex-M44wN04h.js";import"./flex.component-7KDeio0v.js";import"./blur.component-XpLdOWR0.js";import"./formatted-account-BKBMGQm7.js";import"./formatted-date-D8tTQ5FD.js";import"./formatted-date.component-CO8FAJVP.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},i={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...n.args,hide:!0}},r={...i,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-number
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .currency=\${args.currency}
      .decimals=\${args.decimals}
    ></gds-sensitive-number>\`
}`,...r.parameters?.docs?.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,N as default};
