import{x as t}from"./iframe-D81rLJ6U.js";import{a as r}from"./argTableProps-D6vTgEqi.js";import{n as s}from"./formatted-number-CbCx4_uK.js";import{Default as o}from"./formatted-number.stories-93HAK0AX.js";import{G as i}from"./sensitive-number.component-Bd190GEr.js";import"./formatted-text-Cph9K38H.js";import"./text-JPxX7fDf.js";import"./default-typography.styles-CX69FEly.js";import"./flex-CIgC-9Fp.js";import"./flex.component-BR9MmH-R.js";import"./blur.component-BBThJhDX.js";import"./formatted-account-NlOIs279.js";import"./formatted-date-BQXb8Kda.js";import"./formatted-date.component-DOndbyLN.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
