import{x as t}from"./iframe-BQ8Xjw8d.js";import{a as r}from"./argTableProps-Da36wL0g.js";import{n as s}from"./formatted-number-BJG4DFuh.js";import{Default as o}from"./formatted-number.stories-CkWzMB4V.js";import{G as i}from"./sensitive-number.component-CndeSZqy.js";import"./formatted-text-3hjCgESB.js";import"./text-B0enSeDh.js";import"./default-typography.styles-JpAfgxcb.js";import"./flex-4r-oBX8S.js";import"./flex.component--lZWSZDD.js";import"./blur.component-CIavgLon.js";import"./formatted-account-C8lKQkiR.js";import"./formatted-date-N5_3IQCh.js";import"./formatted-date.component-BQSZq78C.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
