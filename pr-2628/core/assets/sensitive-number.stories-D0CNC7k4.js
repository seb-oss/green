import{x as t}from"./iframe-CpqjK228.js";import{a as r}from"./argTableProps-DNo5QX-O.js";import{n as s}from"./formatted-number-CwQlE0Lc.js";import{Default as o}from"./formatted-number.stories-Bxm_lFOM.js";import{G as i}from"./sensitive-number.component-Cg9LbKFu.js";import"./formatted-text-DzLUBNEI.js";import"./text-DJlZz-OA.js";import"./default-typography.styles-tcImCxvC.js";import"./flex-CQad1IfU.js";import"./flex.component-DVPv3sYg.js";import"./blur.component-DcrMsHM3.js";import"./formatted-account-ngs48ojz.js";import"./formatted-date-gCUgpeQy.js";import"./formatted-date.component-CF8NeU5T.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
