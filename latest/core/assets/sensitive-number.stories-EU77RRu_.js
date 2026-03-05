import{x as t}from"./iframe-CoeSBRAZ.js";import{a as r}from"./argTableProps-DTyVduFY.js";import{n as s}from"./formatted-number-CGn_h8i_.js";import{Default as o}from"./formatted-number.stories-BJsGwfKx.js";import{G as i}from"./sensitive-number.component-cC3rvwwd.js";import"./formatted-text-C2Gwd97U.js";import"./text-DuxmBuJm.js";import"./default-typography.styles-BFvv6EPf.js";import"./flex-C0fWOohi.js";import"./flex.component-DzRSufS9.js";import"./blur.component-CHnrXefK.js";import"./formatted-account-CVWZzNh2.js";import"./formatted-date-D78rqoQ2.js";import"./formatted-date.component-BU9smSLB.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
