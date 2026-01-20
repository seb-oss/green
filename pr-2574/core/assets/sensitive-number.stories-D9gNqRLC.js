import{x as t}from"./iframe-BkGvYmww.js";import{a as r}from"./argTableProps-CG7WeaAj.js";import{n as s}from"./formatted-number-D5RQBjUm.js";import{Default as o}from"./formatted-number.stories-dJ5QjTz6.js";import{G as i}from"./sensitive-number.component-CfEWw7_w.js";import"./formatted-text-BFvNGADO.js";import"./text-C0ri8XKx.js";import"./default-typography.styles-_GmNU5F6.js";import"./flex-CddmS-ZU.js";import"./flex.component-CsUSGEaD.js";import"./blur.component-NUxASk97.js";import"./formatted-account-CgEBz11_.js";import"./formatted-date-ZDhdZ4Qt.js";import"./formatted-date.component-TT9uYfwk.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
