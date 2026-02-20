import{x as t}from"./iframe-kVMXU6GJ.js";import{a as s}from"./argTableProps-kewaEdtf.js";import{G as o}from"./sensitive-date.component-Cma3iH9t.js";import{d as a}from"./formatted-date.component-wpI2yC88.js";import"./blur.component-Dx_QgUbm.js";import"./formatted-text-DcpAyrQg.js";import"./text-gpHilPNi.js";import"./default-typography.styles-WHhdsZOR.js";o.define();const f={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...s("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys(a)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

GdsSensitiveDate displays a formatted date and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{hide:!0,value:new Date(2025,1,25,14,17,30),locale:"sv-SE",format:"dateOnlyNumbers"}},v={...r,render:e=>t`<gds-sensitive-date
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .format=${e.format}
    ></gds-sensitive-date>`},h=["Default"];export{v as Default,h as __namedExportsOrder,f as default};
