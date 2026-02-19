import{x as t}from"./iframe-Cz3AnkGr.js";import{a as r}from"./argTableProps-uL3iCL7t.js";import{n as s}from"./formatted-number-BEWlrzFT.js";import{Default as o}from"./formatted-number.stories-CJCppW61.js";import{G as i}from"./sensitive-number.component-Be6hug6B.js";import"./formatted-text-DWxBaT9c.js";import"./text-Cxk__6Bp.js";import"./default-typography.styles-CysHEKWE.js";import"./flex-CIhTEAFk.js";import"./flex.component-CnBVnkT5.js";import"./blur.component-DY8NT6mr.js";import"./formatted-account-CVDOK3pk.js";import"./formatted-date-DQr4HjcA.js";import"./formatted-date.component-45Ac_Q1T.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
