import{x as t}from"./iframe-BjB7oDKT.js";import{a as r}from"./argTableProps-CX7AXzvE.js";import{n as s}from"./formatted-number-CcN0FKnf.js";import{Default as o}from"./formatted-number.stories-D482Z5-O.js";import{G as i}from"./sensitive-number.component-CVv7o-Ab.js";import"./formatted-text-B9GI8v6Y.js";import"./text-CGzplvtA.js";import"./default-typography.styles-BrFKFl9e.js";import"./flex-CZsta-58.js";import"./flex.component-Z2JnHsVp.js";import"./blur.component-DX4vtbD0.js";import"./formatted-account-COGcamMU.js";import"./formatted-date-DKRG8m8a.js";import"./formatted-date.component-CmbM8mGv.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
