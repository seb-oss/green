import{x as t}from"./iframe-DrpbGOBy.js";import{a as r}from"./argTableProps-bZqWRwhQ.js";import{n as s}from"./formatted-number-B2V8Qsin.js";import{Default as o}from"./formatted-number.stories-Dl5N4Ebe.js";import{G as i}from"./sensitive-number.component-2up8OBt4.js";import"./formatted-text-BzHCw-IR.js";import"./text-YmIhC6ea.js";import"./default-typography.styles-D6Os5mfZ.js";import"./flex-CBHUutJ_.js";import"./flex.component-BBy4cixO.js";import"./blur.component-UPa8Nyeq.js";import"./formatted-account-B_RAC7Ot.js";import"./formatted-date-dHSvspaS.js";import"./formatted-date.component-Rsldp6Mk.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
