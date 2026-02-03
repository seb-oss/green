import{x as t}from"./iframe-DeD76d6T.js";import{a as r}from"./argTableProps-BGfxXVL2.js";import{n as s}from"./formatted-number-Dg5MP7FM.js";import{Default as o}from"./formatted-number.stories-qKnw-F1p.js";import{G as i}from"./sensitive-number.component-BwU-U2-n.js";import"./formatted-text-CqdtmWHM.js";import"./text-D6Z6RL40.js";import"./default-typography.styles-OTLSTH63.js";import"./flex-DDqUgCky.js";import"./flex.component-BHtdtXy8.js";import"./blur.component-Dgh5LhlK.js";import"./formatted-account-Bic8O98R.js";import"./formatted-date-DGcZp0qW.js";import"./formatted-date.component-Crj2Tabd.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
