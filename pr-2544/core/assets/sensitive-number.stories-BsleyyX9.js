import{x as t}from"./iframe-BuI_3Mva.js";import{a as r}from"./argTableProps-CNZq1neL.js";import{n as s}from"./formatted-number-COJd2uXM.js";import{Default as o}from"./formatted-number.stories-Du-xRGXS.js";import{G as i}from"./sensitive-number.component-BiW5sGKl.js";import"./formatted-text-BnJyQp0R.js";import"./text-CnP7Ryfb.js";import"./default-typography.styles-BQYP8mX0.js";import"./flex-CfDPvhY7.js";import"./flex.component-eYoLGB_i.js";import"./blur.component-CUrF_3vT.js";import"./formatted-account-BW1Cy5lm.js";import"./formatted-date-BmVZXeTp.js";import"./formatted-date.component-CJS7Ur-p.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
