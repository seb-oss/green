import{x as t}from"./iframe-LkT8NquK.js";import{a as r}from"./argTableProps-CODBAdLs.js";import{n as s}from"./formatted-number-2aSUciuc.js";import{Default as o}from"./formatted-number.stories-DwGKs9h7.js";import{G as i}from"./sensitive-number.component-xIVdH5I6.js";import"./formatted-text-B-hzw5bC.js";import"./text-DQY7-3D7.js";import"./default-typography.styles-Bceb0tr3.js";import"./flex-oqJDwYhp.js";import"./flex.component-D5Os17a3.js";import"./blur.component-CLSY6IPL.js";import"./formatted-account-DeQ4qgii.js";import"./formatted-date-BkpJTyoA.js";import"./formatted-date.component-B9MCapQ1.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
