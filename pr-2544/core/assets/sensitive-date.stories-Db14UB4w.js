import{x as o}from"./iframe-B0_DOhT7.js";import{a as i}from"./argTableProps-P25ubQfo.js";import{G as n}from"./sensitive-date.component-LlVpAnqG.js";import{d}from"./formatted-date.component-D3a_Kp2D.js";import"./preload-helper-Dp1pzeXC.js";import"./blur.component-C-pTuVHA.js";import"./formatted-text-0Hq357dp.js";import"./text-DjyLG8t6.js";import"./default-typography.styles-BC8vn_N7.js";n.define();const b={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...i("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys(d)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

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
