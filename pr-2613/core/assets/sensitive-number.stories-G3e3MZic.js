import{x as t}from"./iframe-NCz73qay.js";import{a as r}from"./argTableProps-CRbwnLW_.js";import{n as s}from"./formatted-number-Bdn9IGAU.js";import{Default as o}from"./formatted-number.stories-CvbYWrWg.js";import{G as i}from"./sensitive-number.component-DQ-hm9yn.js";import"./formatted-text-CV6omr8N.js";import"./text-BfBjpbow.js";import"./default-typography.styles-DtvMYO7g.js";import"./flex-DshQ0Vz1.js";import"./flex.component-CD_9lWUd.js";import"./blur.component-gSKCeXvO.js";import"./formatted-account-Crhf4Oz4.js";import"./formatted-date-BIAhh4eH.js";import"./formatted-date.component-Dd1VwHQD.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
