import{x as t}from"./iframe-B_Sc2FD_.js";import{a as r}from"./argTableProps-BYn1nrRx.js";import{n as s}from"./formatted-number-BqVQXvmn.js";import{Default as o}from"./formatted-number.stories-DzuZ6NHl.js";import{G as i}from"./sensitive-number.component-BQVJ0z2E.js";import"./formatted-text-CZhXyJGA.js";import"./text-BmZzRDhG.js";import"./default-typography.styles-BPayJJs_.js";import"./flex-CK-KMwcg.js";import"./flex.component-7kB9yVhW.js";import"./blur.component-BSVSCjZ1.js";import"./formatted-account-CoYKwFtp.js";import"./formatted-date-xTryB_x6.js";import"./formatted-date.component-CVGYBIbt.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
