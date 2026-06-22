import{b as t}from"./iframe-BdIyMRyJ.js";import{a as s}from"./argTableProps-BhpxojPe.js";import{n as o}from"./formatted-number-BBOWUJSx.js";import{Default as n}from"./formatted-number.stories-aXigy9Vq.js";import{G as a}from"./sensitive-number.component-BphR03Oa.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-rbmI5isX.js";import"./text-BIo0mwWb.js";import"./text.component-saIwnA2Y.js";import"./default-typography.styles-D04afdXo.js";import"./flex-EoGtWKop.js";import"./flex.component-BoiuKVL_.js";import"./blur.component-Cgmkhtgr.js";import"./formatted-account-Bz5t4ByU.js";import"./formatted-date-CRR0ILGw.js";import"./formatted-date.component-BE-dNMDp.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
