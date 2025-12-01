import{x as n}from"./iframe-CY5pIDSk.js";import{a}from"./argTableProps-DieePtDq.js";import{n as i}from"./formatted-number-ByOB_G4A.js";import{Default as m}from"./formatted-number.stories-Dx6xgHik.js";import{G as c}from"./sensitive-number.component-COCFNUhO.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-ea0L3t0A.js";import"./text-OpfsOnjO.js";import"./default-typography.styles-EFBNqNTm.js";import"./flex-BFKwe3dr.js";import"./flex.component-DD9is5Ql.js";import"./blur.component-DRkg5SFX.js";import"./formatted-account-BVOJq75U.js";import"./formatted-date-DTp_sIkX.js";import"./formatted-date.component-yVog4eUv.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
