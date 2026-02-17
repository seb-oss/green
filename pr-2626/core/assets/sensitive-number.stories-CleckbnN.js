import{x as t}from"./iframe-9Cc4SVh6.js";import{a as r}from"./argTableProps-DvCV5CVB.js";import{n as s}from"./formatted-number-dxHYECTN.js";import{Default as o}from"./formatted-number.stories-BBDt_GXN.js";import{G as i}from"./sensitive-number.component-mu87kt_j.js";import"./formatted-text-BxdjjKXY.js";import"./text-DGW4sABd.js";import"./default-typography.styles-Dr9H6OoG.js";import"./flex-DoveuQPA.js";import"./flex.component-H_OEGOx6.js";import"./blur.component-Czse-sbs.js";import"./formatted-account-DZS0rjSG.js";import"./formatted-date-BgRSGBKW.js";import"./formatted-date.component-Cj07K2oT.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
