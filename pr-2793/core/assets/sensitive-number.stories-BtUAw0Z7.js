import{b as n}from"./iframe-BOWV0qpc.js";import{a}from"./argTableProps-Cre6jRDN.js";import{n as i}from"./formatted-number-D7VdJZNu.js";import{Default as m}from"./formatted-number.stories-By08bG-c.js";import{G as c}from"./sensitive-number.component-2Cav08gF.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-BQgB91Nk.js";import"./text-DQkjIYNi.js";import"./text.component-Bo0ErOds.js";import"./default-typography.styles-DuMe7sc-.js";import"./flex-COaGnwRs.js";import"./flex.component-B7JFuEAZ.js";import"./blur.component-CD_oI3lP.js";import"./formatted-account-n7qX_fRk.js";import"./formatted-date-Dz80SE9b.js";import"./formatted-date.component-CeIFeDfq.js";c.define();const F={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...a("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(i)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

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
