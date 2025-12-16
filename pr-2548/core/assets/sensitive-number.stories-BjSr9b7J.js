import{x as n}from"./iframe-DFccSH9C.js";import{a}from"./argTableProps-BAbYt3nJ.js";import{n as i}from"./formatted-number-3jgqanOJ.js";import{Default as m}from"./formatted-number.stories-egYn6jOu.js";import{G as c}from"./sensitive-number.component-HUMf5I6G.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-JXGxLaVJ.js";import"./text-RRtvUC8E.js";import"./default-typography.styles-DteksY2v.js";import"./flex-CttofJdE.js";import"./flex.component-CuhhaUY8.js";import"./blur.component-CqD-bxmt.js";import"./formatted-account-yKsPT-IV.js";import"./formatted-date-BsmZ2Z6T.js";import"./formatted-date.component-DvsxpE8l.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
