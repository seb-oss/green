import{x as t}from"./iframe-BNlHJcLe.js";import{a as r}from"./argTableProps-BNFgqABZ.js";import{n as s}from"./formatted-number-Dlz_67MA.js";import{Default as o}from"./formatted-number.stories-D6TsEWIp.js";import{G as i}from"./sensitive-number.component-B1Y9RZAr.js";import"./formatted-text-EtBEFBcj.js";import"./text-C515lem5.js";import"./default-typography.styles-CLZsTHM9.js";import"./flex-CWGmE_P8.js";import"./flex.component-Bcx4JsMO.js";import"./blur.component-DWm2WYxF.js";import"./formatted-account-Cf8ixWPO.js";import"./formatted-date-BpZSXBjT.js";import"./formatted-date.component-BLP4plVA.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
