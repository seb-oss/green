import{x as o}from"./lit-element-Bx14lxc-.js";import{a as i}from"./argTableProps-C6iIPmRa.js";import{G as n}from"./sensitive-date.component-COGhKRjd.js";import{d as m}from"./formatted-date.component-GhM3u7ad.js";import"./custom-elements-gECymll6.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./when-BR7zwNJC.js";import"./gds-element-DTROifYq.js";import"./blur.component-BGBTarqF.js";import"./formatted-text-5NVRG0Cj.js";import"./query-p8xgzTDt.js";import"./text-C8_sHSHj.js";import"./static-B8S6DEnV.js";import"./tokens.style-DeseHqaM.js";import"./declarative-layout-mixins-C4FFYA_h.js";import"./div.component-DqhUfBPf.js";import"./default-typography.styles-B_Uut80G.js";n.define();const w={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...i("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys(m)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

GdsSensitiveDate displays a formatted date and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{hide:!0,value:new Date(2025,1,25,14,17,30),locale:"sv-SE",format:"dateOnlyNumbers"}},t={...d,render:e=>o`<gds-sensitive-date
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
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const E=["Default"];export{t as Default,E as __namedExportsOrder,w as default};
