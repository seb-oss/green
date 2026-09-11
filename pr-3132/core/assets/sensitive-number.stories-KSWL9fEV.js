import{b as t}from"./iframe-COLb4ZzD.js";import{a as s}from"./argTableProps-DVPTHsUT.js";import{n as o}from"./formatted-number-CCrkmlMI.js";import{Default as n}from"./formatted-number.stories-BA8cLLAp.js";import{G as a}from"./sensitive-number.component-D2AB8UgR.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-D-GAIrbd.js";import"./text-FHsKFPja.js";import"./text.component-BR0EV8AF.js";import"./default-typography.styles-BCN7sVpH.js";import"./flex-uLRrs3cL.js";import"./flex.component-D48-uqu7.js";import"./blur.component-7ceijNr_.js";import"./formatted-account-D0PiA052.js";import"./formatted-date-DjHm3F9K.js";import"./formatted-date.component-Baczgo-7.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
