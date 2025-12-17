import{x as n}from"./iframe-BqGQMgre.js";import{a}from"./argTableProps-CAUpexYb.js";import{n as i}from"./formatted-number-DIyjQDpp.js";import{Default as m}from"./formatted-number.stories-8Ogjq3-C.js";import{G as c}from"./sensitive-number.component-C10CaTiz.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-CYqmMm-p.js";import"./text-B8fzJkGN.js";import"./default-typography.styles-CRFJxRoL.js";import"./flex-CgpeA6DV.js";import"./flex.component-BYJoTcL2.js";import"./blur.component-Cti9FF5C.js";import"./formatted-account-BEmhdRqh.js";import"./formatted-date-6T05g6RC.js";import"./formatted-date.component-BM4j1zw9.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
