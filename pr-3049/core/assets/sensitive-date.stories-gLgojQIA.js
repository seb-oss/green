import{b as s}from"./iframe-Dcaup0t1.js";import{a}from"./argTableProps-Di8qFt0a.js";import{G as r}from"./sensitive-date.component-Dmuyzinq.js";import{d as o}from"./formatted-date.component-Cp20L-Fj.js";import"./preload-helper-PPVm8Dsz.js";import"./blur.component-D11N5L50.js";import"./formatted-text-EB1bHLmE.js";import"./text-LNyc5Rc6.js";import"./text.component-Bmi1cuRp.js";import"./default-typography.styles-Bv8pVuN5.js";r.define();const h={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...a("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys(o)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

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
