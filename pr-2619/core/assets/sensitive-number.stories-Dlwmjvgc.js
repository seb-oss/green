import{x as t}from"./iframe-CFqsouBd.js";import{a as r}from"./argTableProps-R0keO9q2.js";import{n as s}from"./formatted-number-DsU466BV.js";import{Default as o}from"./formatted-number.stories-DCSiGCDj.js";import{G as i}from"./sensitive-number.component-CbCoiZaD.js";import"./formatted-text-Dr3PXYIw.js";import"./text-CKpd57ZT.js";import"./default-typography.styles-BKWNFBB3.js";import"./flex-D96bEdk7.js";import"./flex.component-DW9Blz64.js";import"./blur.component-DqS-zjFz.js";import"./formatted-account-I-QCXsLt.js";import"./formatted-date-Dy-DQhm9.js";import"./formatted-date.component-BF77K6ai.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
