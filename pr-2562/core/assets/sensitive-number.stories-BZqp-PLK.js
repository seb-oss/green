import{x as t}from"./iframe-7i7lbGMR.js";import{a as r}from"./argTableProps-BA-K5YhN.js";import{n as s}from"./formatted-number-DEz05wkQ.js";import{Default as o}from"./formatted-number.stories-BYEBny1W.js";import{G as i}from"./sensitive-number.component-CPwvDAD4.js";import"./formatted-text-BbEasH3m.js";import"./text-D4tvslQK.js";import"./default-typography.styles-BHvGbRgn.js";import"./flex-DdIb4vgO.js";import"./flex.component-Bexu0K20.js";import"./blur.component-CKva1ZKs.js";import"./formatted-account-XV3DuLQ5.js";import"./formatted-date-DxNYlETC.js";import"./formatted-date.component-DBsjRFgt.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
