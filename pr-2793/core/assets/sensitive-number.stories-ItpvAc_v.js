import{b as n}from"./iframe-0Xj-FSRu.js";import{a}from"./argTableProps-C5IZiN1D.js";import{n as i}from"./formatted-number-W13pRt6X.js";import{Default as m}from"./formatted-number.stories-wsM6dx3K.js";import{G as c}from"./sensitive-number.component-DFWEXJlw.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-4Xzs0Tpr.js";import"./text-Qp32TztE.js";import"./text.component-Bt59VfFw.js";import"./default-typography.styles-La8Oq4bY.js";import"./flex-CPexrmYS.js";import"./flex.component-C24BRjUC.js";import"./blur.component-0J6JNkWU.js";import"./formatted-account-DZybDKDE.js";import"./formatted-date-BV8EISIH.js";import"./formatted-date.component-B_2BxF0b.js";c.define();const F={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
