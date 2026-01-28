import{x as t}from"./iframe-ByPMS9JH.js";import{a as r}from"./argTableProps-SHyGeyBT.js";import{n as s}from"./formatted-number-CPpxtlCI.js";import{Default as o}from"./formatted-number.stories-_TgmkGtz.js";import{G as i}from"./sensitive-number.component-Bk2BNhti.js";import"./formatted-text-DWrfZ-Ii.js";import"./text-BzAiAWlR.js";import"./default-typography.styles-CY0bZKhT.js";import"./flex-nBIrz49p.js";import"./flex.component-DXQ-9hxN.js";import"./blur.component-CSq6tnr3.js";import"./formatted-account-CHcrIIW4.js";import"./formatted-date-uCFREG8J.js";import"./formatted-date.component-Cug2fiBQ.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
