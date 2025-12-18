import{x as n}from"./iframe-CSksZRap.js";import{a}from"./argTableProps-C0RvZXHq.js";import{n as i}from"./formatted-number-Cy-uwh2G.js";import{Default as m}from"./formatted-number.stories-CenyoTz1.js";import{G as c}from"./sensitive-number.component-WI20Pr6B.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-BAsqx9N1.js";import"./text-s_8Cf5UQ.js";import"./default-typography.styles-2JU9FDcA.js";import"./flex-C_U2b4Qa.js";import"./flex.component-DQfvqduE.js";import"./blur.component-B947w7Bk.js";import"./formatted-account-wyK2sEwl.js";import"./formatted-date-CWYxg7Rb.js";import"./formatted-date.component-aQxKvMnG.js";c.define();const P={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
