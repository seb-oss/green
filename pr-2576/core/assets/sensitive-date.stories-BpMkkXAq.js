import{x as t}from"./iframe-CmrrH2XL.js";import{a as s}from"./argTableProps-B_GSohNW.js";import{G as o}from"./sensitive-date.component-Ce29uBn6.js";import{d as a}from"./formatted-date.component-CuaflhCl.js";import"./blur.component-CQ51AwjM.js";import"./formatted-text-Cav1ra9t.js";import"./text-CufSApbj.js";import"./default-typography.styles-Fl8KvEhp.js";o.define();const f={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...s("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys(a)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

GdsSensitiveDate displays a formatted date and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{hide:!0,value:new Date(2025,1,25,14,17,30),locale:"sv-SE",format:"dateOnlyNumbers"}},v={...r,render:e=>t`<gds-sensitive-date
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .format=${e.format}
    ></gds-sensitive-date>`},h=["Default"];export{v as Default,h as __namedExportsOrder,f as default};
