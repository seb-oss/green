import{b as t}from"./iframe-DnMzMKkm.js";import{a as s}from"./argTableProps-C0nNgm3z.js";import{n as o}from"./formatted-number-C2wjeQus.js";import{Default as n}from"./formatted-number.stories-DqQ60oxW.js";import{G as a}from"./sensitive-number.component-nMz5e3vI.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-Bt2hF5pN.js";import"./text-Dbe3ejwK.js";import"./text.component-hPGkXdk9.js";import"./default-typography.styles-rNTnWigA.js";import"./flex-D1x1ipTe.js";import"./flex.component-gGN3z-2J.js";import"./blur.component-Cp2Tjj8_.js";import"./formatted-account-DTQL9Pi7.js";import"./formatted-date-BE7zNDAW.js";import"./formatted-date.component-0_g18cjk.js";a.define();const N={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...s("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(o)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
