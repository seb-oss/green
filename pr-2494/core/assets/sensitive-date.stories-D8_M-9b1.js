import{x as o}from"./iframe-BOHAtbDc.js";import{a as i}from"./argTableProps-BNNY_mfG.js";import{G as n}from"./sensitive-date.component-rQUepN1m.js";import{d}from"./formatted-date.component-DR32mbpQ.js";import"./preload-helper-Dp1pzeXC.js";import"./blur.component-DVVDDUW4.js";import"./formatted-text-Cng6BM_O.js";import"./text-BCb6UGLk.js";import"./default-typography.styles-dLhtVCim.js";n.define();const b={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...i("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys(d)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

GdsSensitiveDate displays a formatted date and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{hide:!0,value:new Date(2025,1,25,14,17,30),locale:"sv-SE",format:"dateOnlyNumbers"}},t={...m,render:e=>o`<gds-sensitive-date
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .format=${e.format}
    ></gds-sensitive-date>`};var s,a,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-date
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .format=\${args.format}
    ></gds-sensitive-date>\`
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,b as default};
