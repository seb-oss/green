import{x as n}from"./iframe-i8Wbx1Bl.js";import{a}from"./argTableProps-Ba9-lsfG.js";import{n as i}from"./formatted-number-DQUInSFd.js";import{Default as m}from"./formatted-number.stories-BarfVHeV.js";import{G as c}from"./sensitive-number.component-B4G9lLW7.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-CesgApqM.js";import"./text-Bm34wBNV.js";import"./default-typography.styles-Bwjz6nwU.js";import"./flex-ChFmRha0.js";import"./flex.component-DtKWDDeE.js";import"./blur.component-DAfhUaY4.js";import"./formatted-account-CIO4JeHq.js";import"./formatted-date-_K8cSz6C.js";import"./formatted-date.component-Vt9lSFHK.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
