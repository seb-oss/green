import{x as t}from"./iframe-BZT1zFLW.js";import{a as s}from"./argTableProps-ps-zQReG.js";import{G as o}from"./sensitive-date.component-C8wBCavu.js";import{d as a}from"./formatted-date.component-BT7D_QSt.js";import"./blur.component-BxuscVv2.js";import"./formatted-text-mWE1n3V-.js";import"./text-DCAtWyOV.js";import"./default-typography.styles-fFf3-tfn.js";o.define();const f={title:"Components/Sensitive/Date",component:"gds-sensitive-date",tags:["autodocs"],argTypes:{...s("gds-sensitive-date"),format:{control:{type:"select"},options:Object.keys(a)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)

GdsSensitiveDate displays a formatted date and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{hide:!0,value:new Date(2025,1,25,14,17,30),locale:"sv-SE",format:"dateOnlyNumbers"}},v={...r,render:e=>t`<gds-sensitive-date
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .format=${e.format}
    ></gds-sensitive-date>`},h=["Default"];export{v as Default,h as __namedExportsOrder,f as default};
