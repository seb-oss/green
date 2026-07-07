import{b as t}from"./iframe-oKN12R8m.js";import{a as s}from"./argTableProps-C8dEnH4v.js";import{n as o}from"./formatted-number-3DF5NZEw.js";import{Default as n}from"./formatted-number.stories-CxE4_u5d.js";import{G as a}from"./sensitive-number.component-F8SuSFWk.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-jtgLW-mU.js";import"./text-BqgjERau.js";import"./text.component-DBo6gfqP.js";import"./default-typography.styles-DZv3zCGx.js";import"./flex-CVMQ3wdb.js";import"./flex.component-VMy8uwuh.js";import"./blur.component-C_xkY8HW.js";import"./formatted-account-DdXkZcan.js";import"./formatted-date-BhoYClgK.js";import"./formatted-date.component-BcJQgJPm.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
