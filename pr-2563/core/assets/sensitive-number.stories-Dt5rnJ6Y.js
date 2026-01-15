import{x as t}from"./iframe-Bq9RTfZq.js";import{a as r}from"./argTableProps-BvHKU4bS.js";import{n as s}from"./formatted-number-B0eHMnpw.js";import{Default as o}from"./formatted-number.stories-B8xEko-K.js";import{G as i}from"./sensitive-number.component-iNdXx4mz.js";import"./formatted-text-D1Rab7F5.js";import"./text-DZW7lia4.js";import"./default-typography.styles-D1LRjJau.js";import"./flex-CzK9Xn1s.js";import"./flex.component-DEey0ruJ.js";import"./blur.component-cmjOiyK8.js";import"./formatted-account-CpBaRqgA.js";import"./formatted-date-CxZ92wmz.js";import"./formatted-date.component-BGZr3ibm.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
