import{x as t}from"./iframe-lN6_ugwX.js";import{a as r}from"./argTableProps-CUHH72yP.js";import{n as s}from"./formatted-number-B2t0yi9L.js";import{Default as o}from"./formatted-number.stories-BacWH1MY.js";import{G as i}from"./sensitive-number.component-DLFenYZk.js";import"./formatted-text-qfjPECKq.js";import"./text-BnyIwtG1.js";import"./default-typography.styles-BT95qZUT.js";import"./flex-Dk-FlpcE.js";import"./flex.component-DPfdcRTn.js";import"./blur.component-DJ9pfOUu.js";import"./formatted-account-CADRQib8.js";import"./formatted-date-rsoaDBGT.js";import"./formatted-date.component-Dc3R3iHj.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
