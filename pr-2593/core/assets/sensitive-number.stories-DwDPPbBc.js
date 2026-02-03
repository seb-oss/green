import{x as t}from"./iframe-CELF-Vyq.js";import{a as r}from"./argTableProps-DUFUo9tI.js";import{n as s}from"./formatted-number-CE9BuaPz.js";import{Default as o}from"./formatted-number.stories-BeCwa3dG.js";import{G as i}from"./sensitive-number.component-DegxJ0XR.js";import"./formatted-text-BouoYY5r.js";import"./text-BIMLwBqY.js";import"./default-typography.styles-vxbcaer-.js";import"./flex-BkVBScXw.js";import"./flex.component-0Gth6Pct.js";import"./blur.component-CuAxb7_q.js";import"./formatted-account-BXapfr56.js";import"./formatted-date-BTBez-pB.js";import"./formatted-date.component-B2ICrD3D.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
