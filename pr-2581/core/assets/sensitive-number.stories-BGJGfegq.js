import{x as t}from"./iframe-BvJ9qi3m.js";import{a as r}from"./argTableProps-Dlf7tHQD.js";import{n as s}from"./formatted-number-DAi_OoAs.js";import{Default as o}from"./formatted-number.stories-BDFi8yId.js";import{G as i}from"./sensitive-number.component-CtUzNyIW.js";import"./formatted-text-n-hvgTp1.js";import"./text-BrMLrS7G.js";import"./default-typography.styles-B98YBXGb.js";import"./flex-Ci9-TNGk.js";import"./flex.component-D0FPoO6_.js";import"./blur.component-B1ErYt0k.js";import"./formatted-account-CNzNXJVn.js";import"./formatted-date-BPaJwqRL.js";import"./formatted-date.component-CoOCnvXI.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
