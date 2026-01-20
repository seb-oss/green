import{x as t}from"./iframe-CJoIiIdK.js";import{a as r}from"./argTableProps-BRcL5L6l.js";import{n as s}from"./formatted-number-CwI81nin.js";import{Default as o}from"./formatted-number.stories-DP-9TNuj.js";import{G as i}from"./sensitive-number.component-CDjEwQFC.js";import"./formatted-text-yvyG0kER.js";import"./text-Br9EQg5A.js";import"./default-typography.styles-D2Jg-mgg.js";import"./flex-WZpX7R1u.js";import"./flex.component-D_xxqkO6.js";import"./blur.component-PR4Impww.js";import"./formatted-account-Cez_x8C5.js";import"./formatted-date-DIETcJTq.js";import"./formatted-date.component-MIDZ32lp.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
