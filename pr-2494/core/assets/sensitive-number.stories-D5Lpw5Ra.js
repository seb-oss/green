import{x as n}from"./iframe-C2q7SHgj.js";import{a}from"./argTableProps-Rs6uLhLk.js";import{n as i}from"./formatted-number-CTQKWjx5.js";import{Default as m}from"./formatted-number.stories-n9poHq9q.js";import{G as c}from"./sensitive-number.component-MGaRVstL.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-fCSewwqa.js";import"./text-hNWEXlFQ.js";import"./default-typography.styles-B0UJOMM0.js";import"./flex-n1Qk_6ys.js";import"./flex.component-CLd_GDCu.js";import"./blur.component-1l9laQjW.js";import"./formatted-account-Bs02Amha.js";import"./formatted-date-ChNm9jaR.js";import"./formatted-date.component-BGYdvKMV.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
