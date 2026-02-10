import{x as t}from"./iframe-BGqbqd8h.js";import{a as r}from"./argTableProps-CcX74XCV.js";import{n as s}from"./formatted-number-gL_oxdvK.js";import{Default as o}from"./formatted-number.stories-X-nfLlEX.js";import{G as i}from"./sensitive-number.component-C5lUJf3v.js";import"./formatted-text-DHhX7BB5.js";import"./text-Qt3Pb9-c.js";import"./default-typography.styles-7b6NmtYf.js";import"./flex-Dp-86o0X.js";import"./flex.component-5Rea7j4r.js";import"./blur.component-BK4FxMHw.js";import"./formatted-account-DEktr7Co.js";import"./formatted-date-Dd9gpgmy.js";import"./formatted-date.component-DaT6vZBg.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
