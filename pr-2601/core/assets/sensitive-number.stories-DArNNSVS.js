import{x as t}from"./iframe-B9L5cDd9.js";import{a as r}from"./argTableProps-lQtjm2ap.js";import{n as s}from"./formatted-number-DxsDfLi_.js";import{Default as o}from"./formatted-number.stories-RbZHyQ5a.js";import{G as i}from"./sensitive-number.component-CYD6OwIc.js";import"./formatted-text-BnYSAA_V.js";import"./text-DRjkuZcp.js";import"./default-typography.styles-DIPnyiOV.js";import"./flex-CXVIlJmq.js";import"./flex.component-CXSgO6r7.js";import"./blur.component-BaVGYkjU.js";import"./formatted-account-s7BrF2_X.js";import"./formatted-date-Cd7OthiN.js";import"./formatted-date.component-V9q61WbF.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
