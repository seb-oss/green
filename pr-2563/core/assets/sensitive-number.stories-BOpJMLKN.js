import{x as t}from"./iframe-DB_oVbyA.js";import{a as r}from"./argTableProps-B76e1JNV.js";import{n as s}from"./formatted-number-duCzgntW.js";import{Default as o}from"./formatted-number.stories--vkE-iT5.js";import{G as i}from"./sensitive-number.component-CPxpyWE1.js";import"./formatted-text-BAqKSg3p.js";import"./text-Ca5QqvNs.js";import"./default-typography.styles-CDGosH0E.js";import"./flex-B1McPFGg.js";import"./flex.component-BuewdMkP.js";import"./blur.component-CQxhK_Z3.js";import"./formatted-account-CiptSyli.js";import"./formatted-date-C4S_siD5.js";import"./formatted-date.component-rbQkwAqE.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
