import{x as n}from"./iframe-44dIHiuC.js";import{a}from"./argTableProps-CvY6TmsS.js";import{n as i}from"./formatted-number-DqeV6eLM.js";import{Default as m}from"./formatted-number.stories-DhzME7GD.js";import{G as c}from"./sensitive-number.component-D0oNKzg1.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-AHT8vgMW.js";import"./text-CkiBHEyb.js";import"./default-typography.styles-DvmCignJ.js";import"./flex-DcPQaU2n.js";import"./flex.component-DBlH9lIG.js";import"./blur.component-CpRKosSo.js";import"./formatted-account-DC9UskmI.js";import"./formatted-date-JpW89SDx.js";import"./formatted-date.component-D0uMkJ7Q.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
