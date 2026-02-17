import{x as t}from"./iframe-BavzDZMV.js";import{a as r}from"./argTableProps-gX0lf344.js";import{n as s}from"./formatted-number-BxOdG01b.js";import{Default as o}from"./formatted-number.stories-AmiCffRO.js";import{G as i}from"./sensitive-number.component-Dd6Vsrae.js";import"./formatted-text-CleEYq12.js";import"./text-CpmbrUWp.js";import"./default-typography.styles-CLT6BhIi.js";import"./flex-Dp2zcodN.js";import"./flex.component-Do3AdSpB.js";import"./blur.component-B-ggq729.js";import"./formatted-account-qYCt9XG9.js";import"./formatted-date-DSfyKdBE.js";import"./formatted-date.component-Cfuo8eAX.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
