import{x as t}from"./iframe-CQq7046-.js";import{a as r}from"./argTableProps-D4V1ERLU.js";import{n as s}from"./formatted-number-CNwdBjOd.js";import{Default as o}from"./formatted-number.stories-D2-L-WAc.js";import{G as i}from"./sensitive-number.component-ePO6iFWN.js";import"./formatted-text-BYyJikth.js";import"./text-C-9GmmKD.js";import"./default-typography.styles-D2yvnV8Q.js";import"./flex-CF_tJaOy.js";import"./flex.component-CxtwwoO6.js";import"./blur.component-DxOsqY5C.js";import"./formatted-account-B30qjH0p.js";import"./formatted-date-bqbBWPLo.js";import"./formatted-date.component-C7EG-wPy.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
