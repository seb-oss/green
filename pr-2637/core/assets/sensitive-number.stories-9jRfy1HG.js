import{x as t}from"./iframe-DGZYUm69.js";import{a as r}from"./argTableProps-Bd7W653B.js";import{n as s}from"./formatted-number-Bk5_5e9i.js";import{Default as o}from"./formatted-number.stories-CjJhnZrs.js";import{G as i}from"./sensitive-number.component-L-Uof-BV.js";import"./formatted-text-Bl6olIhW.js";import"./text-AbLCoytC.js";import"./default-typography.styles-C5H707uS.js";import"./flex-DfqPPlMQ.js";import"./flex.component-CHXmzPnI.js";import"./blur.component-CVk5lFdZ.js";import"./formatted-account-DMHrYY6x.js";import"./formatted-date-DlT8_sps.js";import"./formatted-date.component-BuHcengX.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
