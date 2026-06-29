import{b as t}from"./iframe-CmdnQHuO.js";import{a as s}from"./argTableProps-Bge85YhE.js";import{n as o}from"./formatted-number-BxbTPUzh.js";import{Default as n}from"./formatted-number.stories-D7Mx8SSR.js";import{G as a}from"./sensitive-number.component-DRDJWcBb.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DOvVz8L2.js";import"./text-J1vwm1g2.js";import"./text.component-BZq6AN_3.js";import"./default-typography.styles-CIIttSSp.js";import"./flex-ChElhYVR.js";import"./flex.component-CpauUpKG.js";import"./blur.component-Bl1v2ZIa.js";import"./formatted-account-a22wuR8j.js";import"./formatted-date-BuNfSLhA.js";import"./formatted-date.component-uv1g7Hfa.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
