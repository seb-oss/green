import{x as t}from"./iframe-CDTFv-C8.js";import{a as r}from"./argTableProps-D94_5j3M.js";import{n as s}from"./formatted-number-41UQ1XE0.js";import{Default as o}from"./formatted-number.stories-CpKaDTtz.js";import{G as i}from"./sensitive-number.component-CRiXWnyK.js";import"./formatted-text-BzOrx6V2.js";import"./text-Cpc0Aa2b.js";import"./default-typography.styles-BtSdAxzw.js";import"./flex-Bk9zj1Ie.js";import"./flex.component-DealITh5.js";import"./blur.component-C1-bGz4Z.js";import"./formatted-account-B99pyNfV.js";import"./formatted-date-CSuza4gR.js";import"./formatted-date.component-eSPbcVJA.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
