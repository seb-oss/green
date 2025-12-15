import{x as n}from"./iframe-BpgTv49n.js";import{a}from"./argTableProps-DwmyJ90z.js";import{n as i}from"./formatted-number-CUWw710o.js";import{Default as m}from"./formatted-number.stories-DVtSJoN8.js";import{G as c}from"./sensitive-number.component-BoMkxeba.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-CtF450xr.js";import"./text-B5Ik5m2S.js";import"./default-typography.styles-CQkk3ZXP.js";import"./flex-BKUq8LUU.js";import"./flex.component-Coy8xeVO.js";import"./blur.component-1Zvau3Cx.js";import"./formatted-account-DhT_nX8Y.js";import"./formatted-date-D4O0ADrC.js";import"./formatted-date.component-DN1M_4_u.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
