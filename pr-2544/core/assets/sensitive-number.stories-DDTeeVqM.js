import{x as t}from"./iframe-Bt1Yqfo9.js";import{a as r}from"./argTableProps-hzukFYMZ.js";import{n as s}from"./formatted-number-K-A721r9.js";import{Default as o}from"./formatted-number.stories-C3riaqdW.js";import{G as i}from"./sensitive-number.component-BuluRKDH.js";import"./formatted-text-ceEzMoJQ.js";import"./text-G6ryxO7f.js";import"./default-typography.styles-CXDKqlWj.js";import"./flex-CBF_aTZD.js";import"./flex.component-B24ezWRH.js";import"./blur.component-CVfjjo5N.js";import"./formatted-account-CyPJvlTY.js";import"./formatted-date-CRw_tBE6.js";import"./formatted-date.component-6j02AP5D.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
