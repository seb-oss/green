import{x as t}from"./iframe-D9vAKIAs.js";import{a as r}from"./argTableProps-DKtduvzU.js";import{n as s}from"./formatted-number-BEXIqvH7.js";import{Default as o}from"./formatted-number.stories-w3s-nwa2.js";import{G as i}from"./sensitive-number.component-DjLsGYVR.js";import"./formatted-text-DEhNqGNN.js";import"./text-BGf6PIQN.js";import"./default-typography.styles-DhvZ45Mv.js";import"./flex-anx3d26R.js";import"./flex.component-CZ9qApdD.js";import"./blur.component-xTe1RcdP.js";import"./formatted-account-DmptlORK.js";import"./formatted-date-Dts4wrFk.js";import"./formatted-date.component-CUNKmM9L.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
