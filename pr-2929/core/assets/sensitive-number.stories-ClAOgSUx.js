import{b as t}from"./iframe-WmA5gf4D.js";import{a as s}from"./argTableProps-D-ADgv_g.js";import{n as o}from"./formatted-number-B4tLt6Yo.js";import{Default as n}from"./formatted-number.stories-DEmw-ToA.js";import{G as a}from"./sensitive-number.component-Bt6tfNbf.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-D8ErdvF4.js";import"./text-Cj_ZtiZq.js";import"./text.component-O6HWmemq.js";import"./default-typography.styles-B8UhQWwR.js";import"./flex-DTeM_M18.js";import"./flex.component-_6X8CS5F.js";import"./blur.component-DogSyi47.js";import"./formatted-account-CjXz7LCi.js";import"./formatted-date-D_Mo4Dnn.js";import"./formatted-date.component-DzLsOrm1.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
