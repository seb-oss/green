import{x as t}from"./iframe-YMtIRB43.js";import{a as r}from"./argTableProps-T5Ml5YC2.js";import{n as s}from"./formatted-number-DuHMooEu.js";import{Default as o}from"./formatted-number.stories-Bb333dKx.js";import{G as i}from"./sensitive-number.component-DErynGHG.js";import"./formatted-text-uPPHTRL2.js";import"./text-DFCchvyS.js";import"./default-typography.styles-Dq6tzE1r.js";import"./flex-bxGUU3Dm.js";import"./flex.component-CQ1kCPd9.js";import"./blur.component-pAhMGeKr.js";import"./formatted-account-DXqmgnzF.js";import"./formatted-date-C-02KxG2.js";import"./formatted-date.component-3B-Sxz9f.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
