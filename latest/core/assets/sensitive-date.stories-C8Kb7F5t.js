import{x as o}from"./iframe-BOjKxah_.js";import{a as i}from"./argTableProps-B_wxlf2D.js";import{G as n}from"./sensitive-date.component-B6qhWMqb.js";import{d}from"./formatted-date.component-DHjLw1Vr.js";import"./preload-helper-Dp1pzeXC.js";import"./blur.component-DDqhGzsj.js";import"./formatted-text-DHNaV4EQ.js";import"./text-CMtwcPtv.js";import"./default-typography.styles-yY3g6Dh1.js";n.define();const b={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...i("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys(d)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

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
