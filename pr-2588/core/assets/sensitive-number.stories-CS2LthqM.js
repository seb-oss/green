import{x as t}from"./iframe-CEr8kq7n.js";import{a as r}from"./argTableProps-BdS5mSvC.js";import{n as s}from"./formatted-number-B2UE97NS.js";import{Default as o}from"./formatted-number.stories-LOcczO6e.js";import{G as i}from"./sensitive-number.component-Cm4JVicD.js";import"./formatted-text-CgAzXc8u.js";import"./text-MaGBuDwH.js";import"./default-typography.styles-Cfd7Qixz.js";import"./flex-DffIo4Jg.js";import"./flex.component-J8rJot38.js";import"./blur.component-cVqgY4-b.js";import"./formatted-account-Bsf76pGp.js";import"./formatted-date-CN_c0nSz.js";import"./formatted-date.component-CRdufZFm.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
