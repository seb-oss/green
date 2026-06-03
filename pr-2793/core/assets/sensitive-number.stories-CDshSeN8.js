import{b as n}from"./iframe-DeOIKC_g.js";import{a}from"./argTableProps-BnOVaxed.js";import{n as i}from"./formatted-number-BpkdLwuJ.js";import{Default as m}from"./formatted-number.stories-DnCkdLa9.js";import{G as c}from"./sensitive-number.component-CJmB5Dd2.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-CzWd62S6.js";import"./text-Day6PM3a.js";import"./text.component-DA1Ym0T0.js";import"./default-typography.styles-BBwnfNfM.js";import"./flex-D8BmS7bA.js";import"./flex.component-BS1lVn8F.js";import"./blur.component-TFCgLrz7.js";import"./formatted-account-BHY9cX52.js";import"./formatted-date-DPySkEk7.js";import"./formatted-date.component-COBiwNj1.js";c.define();const F={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},u={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...m.args,hide:!0}},r={...u,render:e=>n`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`};var t,s,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-number
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .currency=\${args.currency}
      .decimals=\${args.decimals}
    ></gds-sensitive-number>\`
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const O=["Default"];export{r as Default,O as __namedExportsOrder,F as default};
