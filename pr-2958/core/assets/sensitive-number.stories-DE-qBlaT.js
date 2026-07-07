import{b as t}from"./iframe-7cQTFavr.js";import{a as s}from"./argTableProps-2KitSP6r.js";import{n as o}from"./formatted-number-DD9nMiLO.js";import{Default as n}from"./formatted-number.stories-CjjCwN6X.js";import{G as a}from"./sensitive-number.component-CCy19Z3B.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BEJ44Ub4.js";import"./text-CzcfAkRh.js";import"./text.component-DHfay3Ig.js";import"./default-typography.styles-oYHINIYQ.js";import"./flex-_-LG-6eT.js";import"./flex.component-SondyWuq.js";import"./blur.component-GeGgMmqm.js";import"./formatted-account-Dfrayttf.js";import"./formatted-date-BQtgbb3e.js";import"./formatted-date.component-DhnzXhjz.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
