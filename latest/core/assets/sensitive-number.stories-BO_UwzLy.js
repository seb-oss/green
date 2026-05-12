import{b as n}from"./iframe-WQFYoQO9.js";import{a}from"./argTableProps-BVau8RXv.js";import{n as i}from"./formatted-number-DcGXu-y6.js";import{Default as m}from"./formatted-number.stories-586LgjWT.js";import{G as c}from"./sensitive-number.component-C9og6BHK.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-DcnncLr2.js";import"./text-DgucYaSW.js";import"./text.component-jcC2vn4E.js";import"./default-typography.styles-DF4gMSGd.js";import"./flex-DWB72lsx.js";import"./flex.component-IAhzQliM.js";import"./blur.component-DV0QVS1B.js";import"./formatted-account-DCaEdxsA.js";import"./formatted-date-CSsCgK34.js";import"./formatted-date.component-BPyKkgMa.js";c.define();const F={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
