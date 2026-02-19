import{x as t}from"./iframe-CKOey5cL.js";import{a as r}from"./argTableProps-Dr6zKbEE.js";import{n as s}from"./formatted-number-DAKncqp1.js";import{Default as o}from"./formatted-number.stories-CsN5w4Nx.js";import{G as i}from"./sensitive-number.component-D_He8NSx.js";import"./formatted-text-DazMaDxk.js";import"./text-DA0OQrg-.js";import"./default-typography.styles-Dmp3DqfP.js";import"./flex-BoeMuVKe.js";import"./flex.component-SIwlxQ8w.js";import"./blur.component-u9mwLg4D.js";import"./formatted-account-BWnc60wF.js";import"./formatted-date-D2GByOl1.js";import"./formatted-date.component-DINyV9ff.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
