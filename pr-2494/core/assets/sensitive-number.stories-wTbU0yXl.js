import{x as n}from"./iframe-HnSwFImm.js";import{a}from"./argTableProps-DTy5431Z.js";import{n as i}from"./formatted-number-bH2Bco0A.js";import{Default as m}from"./formatted-number.stories-CA7iPSOk.js";import{G as c}from"./sensitive-number.component-Cgu-U59f.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-7_S14GSt.js";import"./text-Bcz6X7lT.js";import"./default-typography.styles-CzTlC7NM.js";import"./flex-Dqe91J_1.js";import"./flex.component-D4_0-Nhc.js";import"./blur.component-BCgdeuAQ.js";import"./formatted-account-BsJVHB1b.js";import"./formatted-date-p1TOIrU0.js";import"./formatted-date.component-BFlcd6ci.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
