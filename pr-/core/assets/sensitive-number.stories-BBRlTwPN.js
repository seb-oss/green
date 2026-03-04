import{x as t}from"./iframe-BZiKkoLE.js";import{a as r}from"./argTableProps-Cpq9k_Rz.js";import{n as s}from"./formatted-number-BltN-Zko.js";import{Default as o}from"./formatted-number.stories-BgoSaz_o.js";import{G as i}from"./sensitive-number.component-Bs0v7IbR.js";import"./formatted-text-tFHp7UgC.js";import"./text-BUiW9ujq.js";import"./default-typography.styles-CYhmgng3.js";import"./flex-CZyw3eXd.js";import"./flex.component-DkRYPV9U.js";import"./blur.component-3GCiH-gq.js";import"./formatted-account-8E60NMQR.js";import"./formatted-date-BQvGGHCZ.js";import"./formatted-date.component-DpELbV0T.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
