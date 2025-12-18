import{x as n}from"./iframe-BOjKxah_.js";import{a}from"./argTableProps-B_wxlf2D.js";import{n as i}from"./formatted-number-BdFYw_Ov.js";import{Default as m}from"./formatted-number.stories-BmrrB1FZ.js";import{G as c}from"./sensitive-number.component-C0PNBfQc.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-DHNaV4EQ.js";import"./text-CMtwcPtv.js";import"./default-typography.styles-yY3g6Dh1.js";import"./flex-CGCV4cze.js";import"./flex.component-BVX8zNtn.js";import"./blur.component-DDqhGzsj.js";import"./formatted-account-DVekBPWY.js";import"./formatted-date-Bct7tkLD.js";import"./formatted-date.component-DHjLw1Vr.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
