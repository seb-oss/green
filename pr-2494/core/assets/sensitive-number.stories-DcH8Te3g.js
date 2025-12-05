import{x as n}from"./iframe-CVpOu8hK.js";import{a}from"./argTableProps-Dd0LYG43.js";import{n as i}from"./formatted-number-DJeURTZR.js";import{Default as m}from"./formatted-number.stories-P1S9HG0_.js";import{G as c}from"./sensitive-number.component-CB-zGYon.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-FaXwGhNr.js";import"./text-CsIhgOxc.js";import"./default-typography.styles-CRc-umch.js";import"./flex-C7Pf8j15.js";import"./flex.component-Dz5Jd6q1.js";import"./blur.component-BZ9xObEB.js";import"./formatted-account-BnBOMj2K.js";import"./formatted-date-CpRZbn6r.js";import"./formatted-date.component-BUKvojNN.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const F=["Default"];export{r as Default,F as __namedExportsOrder,P as default};
