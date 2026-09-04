import{b as t}from"./iframe-CuywSVrm.js";import{a as s}from"./argTableProps-C05_UJw2.js";import{n as o}from"./formatted-number-DdFIZ9nU.js";import{Default as n}from"./formatted-number.stories-CcKCszqr.js";import{G as a}from"./sensitive-number.component-BjMB-i0M.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BJ3gD526.js";import"./text-CdXfNzo8.js";import"./text.component-l2FBzpJh.js";import"./default-typography.styles-BfY9lhd4.js";import"./flex-ozvWlSW6.js";import"./flex.component-BVDzlAID.js";import"./blur.component-CWNxKasx.js";import"./formatted-account-KlS9Rbd3.js";import"./formatted-date-DKqlD5CJ.js";import"./formatted-date.component-BFMFNr7S.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
