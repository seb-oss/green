import{b as t}from"./iframe-B5Cc-pXz.js";import{a as s}from"./argTableProps-DC0n9Hpa.js";import{n as o}from"./formatted-number-D7h0AVfD.js";import{Default as n}from"./formatted-number.stories-CmhkqFUB.js";import{G as a}from"./sensitive-number.component-BcTFfw2f.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DBBLLI3R.js";import"./text-dCmaf9iX.js";import"./text.component-BQegN6Ay.js";import"./default-typography.styles-CFA2jsVS.js";import"./flex-D_7Y_kbG.js";import"./flex.component-pyQsV2ys.js";import"./blur.component-DsWMgMoI.js";import"./formatted-account-CVeyc6qH.js";import"./formatted-date-Dyu2jWeh.js";import"./formatted-date.component-CUTrJlxz.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
