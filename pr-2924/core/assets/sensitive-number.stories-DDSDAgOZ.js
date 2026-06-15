import{b as t}from"./iframe-DeZzR3Q-.js";import{a as s}from"./argTableProps-ChTPzmbf.js";import{n as o}from"./formatted-number-Dv0EcZsO.js";import{Default as n}from"./formatted-number.stories-B83P46Ew.js";import{G as a}from"./sensitive-number.component-DDZ7klH_.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BeB4Kqt3.js";import"./text-Bn42DMOa.js";import"./text.component-BIlEiFmQ.js";import"./default-typography.styles-C_vVBpR5.js";import"./flex-Bb5_PfmY.js";import"./flex.component-BaqhG-ob.js";import"./blur.component-B3XJ2En2.js";import"./formatted-account-BA68gAt3.js";import"./formatted-date-DTg8vq6g.js";import"./formatted-date.component-GMvkRDf7.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
