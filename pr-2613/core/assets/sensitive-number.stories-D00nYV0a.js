import{x as t}from"./iframe-BIlJ1H3j.js";import{a as r}from"./argTableProps-Cns_LyGz.js";import{n as s}from"./formatted-number-BoNKL02g.js";import{Default as o}from"./formatted-number.stories-B1PVC46k.js";import{G as i}from"./sensitive-number.component-_rtcEepK.js";import"./formatted-text-8XCHmKCG.js";import"./text-CkfTOVpQ.js";import"./default-typography.styles-DUj4f0nI.js";import"./flex-DLu567hQ.js";import"./flex.component-Bm698bf9.js";import"./blur.component-C-BByOwO.js";import"./formatted-account-D89trtPr.js";import"./formatted-date-eBUTd-Il.js";import"./formatted-date.component-C4VeTXMl.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
