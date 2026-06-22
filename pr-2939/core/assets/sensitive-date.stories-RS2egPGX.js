import{b as s}from"./iframe-CIFw3hwN.js";import{a}from"./argTableProps-nXMCimIH.js";import{G as r}from"./sensitive-date.component-CzKh9zh2.js";import{d as o}from"./formatted-date.component-CF45y0Yp.js";import"./preload-helper-PPVm8Dsz.js";import"./blur.component-B8tsOdET.js";import"./formatted-text-BaxVg4jS.js";import"./text-uLFA-IkK.js";import"./text.component-DedGKdw4.js";import"./default-typography.styles-DHYoTK62.js";r.define();const h={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...a("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys(o)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

GdsSensitiveDate displays a formatted date and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},i={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{hide:!0,value:new Date(2025,1,25,14,17,30),locale:"sv-SE",format:"dateOnlyNumbers"}},t={...i,render:e=>s`<gds-sensitive-date
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .format=${e.format}
    ></gds-sensitive-date>`};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-date
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .format=\${args.format}
    ></gds-sensitive-date>\`
}`,...t.parameters?.docs?.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,h as default};
