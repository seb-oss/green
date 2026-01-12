import{x as t}from"./iframe-CPczCUo-.js";import{a as r}from"./argTableProps-CrQdz3qL.js";import{n as s}from"./formatted-number-D2aRU2cr.js";import{Default as o}from"./formatted-number.stories-BpnqDf-g.js";import{G as i}from"./sensitive-number.component-Bf2829cP.js";import"./formatted-text-CksFYA3M.js";import"./text-CmL7eINf.js";import"./default-typography.styles-CEojdXoX.js";import"./flex-BDBlis32.js";import"./flex.component-BjCQub8k.js";import"./blur.component-B1OGkxeJ.js";import"./formatted-account--IzJf0uo.js";import"./formatted-date-qmZ7GrK9.js";import"./formatted-date.component-B1hpYF5V.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
