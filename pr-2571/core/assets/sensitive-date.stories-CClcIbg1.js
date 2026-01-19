import{x as t}from"./iframe-DMDyobL-.js";import{a as s}from"./argTableProps-BVaUXf6e.js";import{G as o}from"./sensitive-date.component-DeC6wjMj.js";import{d as a}from"./formatted-date.component-D2hk0x43.js";import"./blur.component-ppr2-xFq.js";import"./formatted-text-D_ZiXYZ7.js";import"./text-B-vzt8Fz.js";import"./default-typography.styles-e6bvIdGX.js";o.define();const f={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...s("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys(a)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

GdsSensitiveDate displays a formatted date and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{hide:!0,value:new Date(2025,1,25,14,17,30),locale:"sv-SE",format:"dateOnlyNumbers"}},v={...r,render:e=>t`<gds-sensitive-date
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .format=${e.format}
    ></gds-sensitive-date>`},h=["Default"];export{v as Default,h as __namedExportsOrder,f as default};
