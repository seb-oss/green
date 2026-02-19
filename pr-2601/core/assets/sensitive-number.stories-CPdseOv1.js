import{x as t}from"./iframe-DZfCx1ov.js";import{a as r}from"./argTableProps-ChfjJlnJ.js";import{n as s}from"./formatted-number-C7fBGBot.js";import{Default as o}from"./formatted-number.stories-Dc2HEtFA.js";import{G as i}from"./sensitive-number.component-ckywx20E.js";import"./formatted-text-DBexKm6C.js";import"./text-CWJnAPn6.js";import"./default-typography.styles-C_xj-fmf.js";import"./flex-DQL0f5nx.js";import"./flex.component-DTmNbtRV.js";import"./blur.component-gq-V0mdb.js";import"./formatted-account-DBLk9Xy5.js";import"./formatted-date-XBQBhMZ1.js";import"./formatted-date.component-Bf1EyUlj.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
