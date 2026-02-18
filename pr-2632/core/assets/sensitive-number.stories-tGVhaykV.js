import{x as t}from"./iframe-g2RbAea7.js";import{a as r}from"./argTableProps-B00LFve7.js";import{n as s}from"./formatted-number-Csw3UNqo.js";import{Default as o}from"./formatted-number.stories-DfFBADgm.js";import{G as i}from"./sensitive-number.component-D68ReDGL.js";import"./formatted-text-Bb34oAbi.js";import"./text-DNVqpZdS.js";import"./default-typography.styles-D091n18q.js";import"./flex-I4T-OjO6.js";import"./flex.component-lJw3gVPm.js";import"./blur.component-BZx-as8d.js";import"./formatted-account-DD0QtfI4.js";import"./formatted-date-CqSV7dfT.js";import"./formatted-date.component-CCLoKXH4.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
