import{b as s}from"./iframe-GGkrsogq.js";import{a}from"./argTableProps-DqXuebLo.js";import{G as r}from"./sensitive-date.component-Ds-v0Dil.js";import{d as o}from"./formatted-date.component-BsLC0OZD.js";import"./preload-helper-PPVm8Dsz.js";import"./blur.component-GTtUH2Nl.js";import"./formatted-text-7efLNMI_.js";import"./text-CdQJa47J.js";import"./text.component-CYMo-4LT.js";import"./default-typography.styles-v2gvzg-2.js";r.define();const h={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...a("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys(o)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

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
