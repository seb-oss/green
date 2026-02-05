import{x as t}from"./iframe-BA3TVzOL.js";import{a as r}from"./argTableProps-cE9rvP7h.js";import{n as s}from"./formatted-number-D9_2ydkv.js";import{Default as o}from"./formatted-number.stories-BEBFuMyD.js";import{G as i}from"./sensitive-number.component-CDjRb6VY.js";import"./formatted-text-nravaaiM.js";import"./text-BSZQlWvp.js";import"./default-typography.styles-D-ZQ6c8M.js";import"./flex-BEV7UTdd.js";import"./flex.component-DaRqz6HB.js";import"./blur.component-YJNOX3th.js";import"./formatted-account-HMqcc-0-.js";import"./formatted-date-DK3y5Qum.js";import"./formatted-date.component-BVhM42EG.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
