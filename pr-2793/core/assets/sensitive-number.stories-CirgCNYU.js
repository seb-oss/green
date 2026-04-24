import{b as n}from"./iframe-pTSexOyH.js";import{a}from"./argTableProps-ChRIsf-L.js";import{n as i}from"./formatted-number-Cxx3bIYg.js";import{Default as m}from"./formatted-number.stories-G2vA8t8n.js";import{G as c}from"./sensitive-number.component-D9SiwoC5.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-F0lF9snt.js";import"./text-C8QVjGqi.js";import"./text.component-HeyCXqFC.js";import"./default-typography.styles-mimnni2d.js";import"./flex-CvI6xnho.js";import"./flex.component-CilBrwEk.js";import"./blur.component-zqtXXyBb.js";import"./formatted-account-BbJRnB-Y.js";import"./formatted-date-B_0qv7Kg.js";import"./formatted-date.component-B2Fdwpov.js";c.define();const F={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
