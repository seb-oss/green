import{x as t}from"./iframe-BVoLPnv3.js";import{a as r}from"./argTableProps-CY2QTUI5.js";import{n as s}from"./formatted-number-DlaX_XE0.js";import{Default as o}from"./formatted-number.stories-BgSOXi0V.js";import{G as i}from"./sensitive-number.component-DFpMCKvN.js";import"./formatted-text-DlK1vWQQ.js";import"./text-DFkDUm4n.js";import"./default-typography.styles-D2kjhLCA.js";import"./flex-CEVsZ2mS.js";import"./flex.component-CNqmiosl.js";import"./blur.component-BY6BLcjN.js";import"./formatted-account-BNp6tjGe.js";import"./formatted-date-CUepSs3Y.js";import"./formatted-date.component-CPoz0x6A.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
