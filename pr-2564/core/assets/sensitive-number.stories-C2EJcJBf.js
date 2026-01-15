import{x as t}from"./iframe-B2ZAK5ky.js";import{a as r}from"./argTableProps-wkae4PTT.js";import{n as s}from"./formatted-number-CPlUJZOD.js";import{Default as o}from"./formatted-number.stories-5XcMlia3.js";import{G as i}from"./sensitive-number.component-jjWcJxOd.js";import"./formatted-text-DtORRjYE.js";import"./text-Dqmmy3JR.js";import"./default-typography.styles-xLxdcv_U.js";import"./flex-BgzwqeWg.js";import"./flex.component-CU0xqsGF.js";import"./blur.component-CFeNIpRq.js";import"./formatted-account-RAVvkbvG.js";import"./formatted-date-jQ8Y9_7D.js";import"./formatted-date.component-BAJhzhSi.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
