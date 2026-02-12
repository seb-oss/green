import{x as t}from"./iframe-Dp9IHT7M.js";import{a as r}from"./argTableProps-R5F9VmLh.js";import{n as s}from"./formatted-number-DSEUt-Xh.js";import{Default as o}from"./formatted-number.stories-BBSuDbO-.js";import{G as i}from"./sensitive-number.component-LXv0RloM.js";import"./formatted-text-BBTqO6nh.js";import"./text-DBbTD983.js";import"./default-typography.styles-C-XkYi72.js";import"./flex-BwWHANmJ.js";import"./flex.component-_Iuoz229.js";import"./blur.component-CEaTbaeS.js";import"./formatted-account-DKljkWdu.js";import"./formatted-date-BkikWDQH.js";import"./formatted-date.component-CtN8IRvf.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
