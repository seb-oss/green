import{b as t}from"./iframe-3oEnhsFE.js";import{a as s}from"./argTableProps-CR9Nwp75.js";import{n as o}from"./formatted-number-B1RpAz2I.js";import{Default as n}from"./formatted-number.stories-DFPEmhDo.js";import{G as a}from"./sensitive-number.component-3ae56SUI.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-DNirix6w.js";import"./text-DEJ6yRmD.js";import"./text.component-DDnpOvcb.js";import"./default-typography.styles-CbPdZMWQ.js";import"./flex-Bu8xaZam.js";import"./flex.component-DZs_wmTf.js";import"./blur.component-CNVGwvzx.js";import"./formatted-account-BysJotHp.js";import"./formatted-date-DO-ajPkb.js";import"./formatted-date.component-CwQLmN3b.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
