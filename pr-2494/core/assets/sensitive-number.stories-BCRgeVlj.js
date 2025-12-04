import{x as n}from"./iframe-gDWanhIN.js";import{a}from"./argTableProps-BWKiSl53.js";import{n as i}from"./formatted-number-TFhgsAVS.js";import{Default as m}from"./formatted-number.stories-BgXhsg9f.js";import{G as c}from"./sensitive-number.component-CifWBBdX.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-4l6igGiA.js";import"./text-C0qTsNgY.js";import"./default-typography.styles-CXJOV7R1.js";import"./flex-Bko5Oza0.js";import"./flex.component-C8s5G8eM.js";import"./blur.component-BrCkTBSB.js";import"./formatted-account-D188XmVK.js";import"./formatted-date-ZhCP4oNs.js";import"./formatted-date.component-mGzy5QRs.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
