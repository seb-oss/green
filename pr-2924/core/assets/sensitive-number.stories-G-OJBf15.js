import{b as t}from"./iframe-hcAuhNpX.js";import{a as s}from"./argTableProps-1SZrAAX3.js";import{n as o}from"./formatted-number-B-XK2vdg.js";import{Default as n}from"./formatted-number.stories-BalF4M2u.js";import{G as a}from"./sensitive-number.component-CM3HAJJ5.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-VBFwywgv.js";import"./text-CzclxooS.js";import"./text.component-BmkoDSaL.js";import"./default-typography.styles-DktVWXvN.js";import"./flex-RVsKt9sw.js";import"./flex.component-BEJf6KTE.js";import"./blur.component-QHreuBYp.js";import"./formatted-account-CSoX3VUc.js";import"./formatted-date-DoU_aTM6.js";import"./formatted-date.component-DJacq-4J.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
