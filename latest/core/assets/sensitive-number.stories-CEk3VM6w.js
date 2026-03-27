import{b as n}from"./iframe-CxIvAeSU.js";import{a}from"./argTableProps-VrDnAR9Y.js";import{n as i}from"./formatted-number-o225Opq5.js";import{Default as m}from"./formatted-number.stories-BNfTQ-G3.js";import{G as c}from"./sensitive-number.component-ODKplx1z.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-NtvV7Qx_.js";import"./text-DNJgMH5h.js";import"./default-typography.styles-dYRggBQH.js";import"./flex-D90Dx1lB.js";import"./flex.component-DlMPiiPD.js";import"./blur.component-CHJl7k-4.js";import"./formatted-account-D_5OKIwI.js";import"./formatted-date-BxxtfUgC.js";import"./formatted-date.component-fLLHbgYt.js";c.define();const x={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},u={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...m.args,hide:!0}},r={...u,render:e=>n`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`};var s,t,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-number
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .currency=\${args.currency}
      .decimals=\${args.decimals}
    ></gds-sensitive-number>\`
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const F=["Default"];export{r as Default,F as __namedExportsOrder,x as default};
