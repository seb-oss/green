import{x as t}from"./iframe-XCkOX_Dk.js";import{a as r}from"./argTableProps-DqGmbBtA.js";import{n as s}from"./formatted-number-GNKMqr-h.js";import{Default as o}from"./formatted-number.stories-C7AgGytq.js";import{G as i}from"./sensitive-number.component-tbRR4Bre.js";import"./formatted-text-B2P93usd.js";import"./text-DGnSjNfA.js";import"./default-typography.styles-BNcNdRUi.js";import"./flex-CctrsQiv.js";import"./flex.component-DKiKeHQX.js";import"./blur.component-D0MxLIHb.js";import"./formatted-account-HObakXVJ.js";import"./formatted-date-DagbvGGL.js";import"./formatted-date.component-BkAvMTtw.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
