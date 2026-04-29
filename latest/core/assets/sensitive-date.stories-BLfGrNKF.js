import{b as o}from"./iframe-BPg3AppR.js";import{a as i}from"./argTableProps-VDLpxmDJ.js";import{G as n}from"./sensitive-date.component-DBMr_JjX.js";import{d}from"./formatted-date.component-CV5sJVXg.js";import"./preload-helper-Dp1pzeXC.js";import"./blur.component-C11AxtkC.js";import"./formatted-text-CSd_DVkg.js";import"./text-PA2IszVR.js";import"./text.component-DiBI4Sow.js";import"./default-typography.styles-CxCElSmj.js";n.define();const D={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...i("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys(d)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

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
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,D as default};
