import{x as t}from"./iframe-Dq4KnV63.js";import{a as r}from"./argTableProps-n5KuER0n.js";import{n as s}from"./formatted-number-DcequT4z.js";import{Default as o}from"./formatted-number.stories-8ro0EsWX.js";import{G as i}from"./sensitive-number.component-DJcmOQfh.js";import"./formatted-text-DxpB-tAj.js";import"./text-x4kS8ocY.js";import"./default-typography.styles-D_ltfjF3.js";import"./flex-B9ezabvY.js";import"./flex.component-BnWYtpRs.js";import"./blur.component-k9NACARh.js";import"./formatted-account-CYwaHEfR.js";import"./formatted-date-DMXxwqxo.js";import"./formatted-date.component-y__WxNKj.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
