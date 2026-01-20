import{x as t}from"./iframe-VzA9xZxk.js";import{a as r}from"./argTableProps-DrA3g6xw.js";import{n as s}from"./formatted-number-CgPh5VLd.js";import{Default as o}from"./formatted-number.stories-znvZX57R.js";import{G as i}from"./sensitive-number.component-D8ufqsZQ.js";import"./formatted-text-Dj8YWfLm.js";import"./text-RTWexD8r.js";import"./default-typography.styles-DvEDDb3-.js";import"./flex-Bx_cgYYr.js";import"./flex.component-CtitCc60.js";import"./blur.component-8EHiacyC.js";import"./formatted-account-8SrLxf70.js";import"./formatted-date-D_vkf1Ll.js";import"./formatted-date.component-DPnHsVZd.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
