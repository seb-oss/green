import{x as t}from"./iframe-BwkPDoxN.js";import{a as r}from"./argTableProps-CaSK2nfy.js";import{n as s}from"./formatted-number-CRRPUvKm.js";import{Default as o}from"./formatted-number.stories-D4lUmQNm.js";import{G as i}from"./sensitive-number.component-Dl4f5mC3.js";import"./formatted-text-C1NWKj9s.js";import"./text-CGGKdvw_.js";import"./default-typography.styles-YTALL5T0.js";import"./flex-COwZRp-g.js";import"./flex.component-D2nCY6Na.js";import"./blur.component-BRTbu44h.js";import"./formatted-account-B0tgMBfB.js";import"./formatted-date-DHci4qRN.js";import"./formatted-date.component-DzNbLwLG.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
