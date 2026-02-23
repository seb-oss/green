import{x as t}from"./iframe-DVjfo5Ln.js";import{a as r}from"./argTableProps-CnpqC5LF.js";import{n as s}from"./formatted-number-DkYy0KPz.js";import{Default as o}from"./formatted-number.stories-D3DU9o5Y.js";import{G as i}from"./sensitive-number.component-aVqH7SSq.js";import"./formatted-text-IaaM7YaM.js";import"./text-COZJ_Ib1.js";import"./default-typography.styles-XHEVKs03.js";import"./flex-DsCeaan8.js";import"./flex.component-DZ5xRByU.js";import"./blur.component-BplfAb9Q.js";import"./formatted-account-DjHziaFH.js";import"./formatted-date-B7g-DJrM.js";import"./formatted-date.component-CjBOcIgE.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
