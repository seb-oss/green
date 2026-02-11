import{x as t}from"./iframe-DBW64OS2.js";import{a as r}from"./argTableProps-maZYkxIi.js";import{n as s}from"./formatted-number-hDmKyTfs.js";import{Default as o}from"./formatted-number.stories-Bq_6TwtW.js";import{G as i}from"./sensitive-number.component-CiKqAfip.js";import"./formatted-text-CKdDb9MO.js";import"./text-BJG-x9Wt.js";import"./default-typography.styles-CTHBRRb4.js";import"./flex-DPzRndwJ.js";import"./flex.component-xcxbZ-V6.js";import"./blur.component-B7C0e3e5.js";import"./formatted-account-CFSJhDUz.js";import"./formatted-date-CrVHgn44.js";import"./formatted-date.component-BUxsuOyx.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
