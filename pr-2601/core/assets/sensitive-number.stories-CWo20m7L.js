import{x as t}from"./iframe-BRqPtqKR.js";import{a as r}from"./argTableProps-DrN1Zarc.js";import{n as s}from"./formatted-number-7AQyWBMB.js";import{Default as o}from"./formatted-number.stories-Pju1xDuj.js";import{G as i}from"./sensitive-number.component-BJNX1jaX.js";import"./formatted-text-DcEOASjb.js";import"./text-DowpWU4n.js";import"./default-typography.styles-CCxG5D8D.js";import"./flex-CkQlgCzk.js";import"./flex.component-BjuBNezR.js";import"./blur.component-C9Bk_AwP.js";import"./formatted-account-CaJfWapM.js";import"./formatted-date-CtsXaHOq.js";import"./formatted-date.component-DEGPjSRh.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
