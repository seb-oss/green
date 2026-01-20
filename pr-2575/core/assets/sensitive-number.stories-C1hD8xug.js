import{x as t}from"./iframe-CdkNm90d.js";import{a as r}from"./argTableProps-BcVyA3w1.js";import{n as s}from"./formatted-number-BgwhFHhC.js";import{Default as o}from"./formatted-number.stories-Bd0cOZOU.js";import{G as i}from"./sensitive-number.component-B1GRBYOK.js";import"./formatted-text-D3VqO2gx.js";import"./text-DolJvl3u.js";import"./default-typography.styles-C4zuZ3To.js";import"./flex-Dqx94wbI.js";import"./flex.component-CR4a_v6h.js";import"./blur.component-BvhpJYgI.js";import"./formatted-account-DHfXyMl0.js";import"./formatted-date-BWOQIjXK.js";import"./formatted-date.component-ChVSxQYd.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
