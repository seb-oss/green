import{x as t}from"./iframe-ws1MlFGZ.js";import{a as r}from"./argTableProps-jIkb-kzq.js";import{n as s}from"./formatted-number---sd_ZkK.js";import{Default as o}from"./formatted-number.stories-uDp835ML.js";import{G as i}from"./sensitive-number.component-BOcYRmvV.js";import"./formatted-text-CkEZbiOq.js";import"./text-COvUSJaP.js";import"./default-typography.styles-mZJAAUIR.js";import"./flex-D29d2Q1o.js";import"./flex.component-BHjGU510.js";import"./blur.component-BA7xuPbv.js";import"./formatted-account-XaA0tfxD.js";import"./formatted-date-BvUUD5AY.js";import"./formatted-date.component-D8QyZj9N.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
