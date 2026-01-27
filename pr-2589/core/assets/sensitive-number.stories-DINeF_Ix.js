import{x as t}from"./iframe-1F4SKICq.js";import{a as r}from"./argTableProps-BdjseJtq.js";import{n as s}from"./formatted-number-BNKS7ogn.js";import{Default as o}from"./formatted-number.stories-BS5avIDD.js";import{G as i}from"./sensitive-number.component-BlqR-f72.js";import"./formatted-text-Bx5fZ5QW.js";import"./text-CmOQqe3d.js";import"./default-typography.styles-Ci50o2me.js";import"./flex-CrFbvP8x.js";import"./flex.component-DSn4JYs1.js";import"./blur.component-CBprQQH0.js";import"./formatted-account-DuqYHvYn.js";import"./formatted-date-BzUt2m57.js";import"./formatted-date.component-Dn6Beat_.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
