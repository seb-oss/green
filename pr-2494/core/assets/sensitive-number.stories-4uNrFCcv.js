import{x as n}from"./iframe-r7XMIE4J.js";import{a}from"./argTableProps-y201VjCF.js";import{n as i}from"./formatted-number-30JYC61w.js";import{Default as m}from"./formatted-number.stories-Dd9YZ-1K.js";import{G as c}from"./sensitive-number.component-CctAryDz.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-DkjlxPo7.js";import"./text-BKzhkOL1.js";import"./default-typography.styles-D3NTB3uO.js";import"./flex-IgstLLT-.js";import"./flex.component-BQ5NBM0P.js";import"./blur.component-LbUUjS95.js";import"./formatted-account-BmyYLAgF.js";import"./formatted-date-BIHef_20.js";import"./formatted-date.component-BodadPSB.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},u={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...m.args,hide:!0}},r={...u,render:e=>n`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
    ></gds-sensitive-number>`};var t,s,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-number
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .currency=\${args.currency}
    ></gds-sensitive-number>\`
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const F=["Default"];export{r as Default,F as __namedExportsOrder,P as default};
