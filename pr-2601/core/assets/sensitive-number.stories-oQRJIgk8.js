import{x as t}from"./iframe-B_dd3l6Z.js";import{a as r}from"./argTableProps-BQTkZNj4.js";import{n as s}from"./formatted-number-wZHQP-4n.js";import{Default as o}from"./formatted-number.stories-DQHQWFwA.js";import{G as i}from"./sensitive-number.component-APHmi6vz.js";import"./formatted-text-YjTrR8RU.js";import"./text-DJg3lkN2.js";import"./default-typography.styles-CBHVYBFU.js";import"./flex-B9P-0j-3.js";import"./flex.component-DKud6WrH.js";import"./blur.component-BmYsyqbY.js";import"./formatted-account-Dc2qVf12.js";import"./formatted-date-Cf_UrNet.js";import"./formatted-date.component-CUxkD2bs.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
