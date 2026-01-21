import{x as t}from"./iframe-DNCl8bwN.js";import{a as r}from"./argTableProps-CoNdzu2L.js";import{n as s}from"./formatted-number-D46bWvkp.js";import{Default as o}from"./formatted-number.stories-D6udVqm9.js";import{G as i}from"./sensitive-number.component-CFeA-SN2.js";import"./formatted-text-DEly4PAA.js";import"./text-CVbgGQTd.js";import"./default-typography.styles-CF6mh9dY.js";import"./flex-CRILzedP.js";import"./flex.component-C_-d_UZv.js";import"./blur.component-BdJRd7Yd.js";import"./formatted-account-BswqeOes.js";import"./formatted-date-BK8Tuv68.js";import"./formatted-date.component-BsOmFKwt.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
