import{x as t}from"./iframe-BQ4eNaz6.js";import{a as r}from"./argTableProps--jdXpSJZ.js";import{n as s}from"./formatted-number-BWhBNIXE.js";import{Default as o}from"./formatted-number.stories-DyNe-ljl.js";import{G as i}from"./sensitive-number.component-CChdoAkg.js";import"./formatted-text-DLYy2Hhv.js";import"./text-CUz5McFs.js";import"./default-typography.styles-Cz8sT2uQ.js";import"./flex-DLRQzNAh.js";import"./flex.component-BRb9Ckho.js";import"./blur.component-Oc-aXz99.js";import"./formatted-account-BFPuBtpR.js";import"./formatted-date-D7yoySQ3.js";import"./formatted-date.component-DLAYcAke.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
