import{x as t}from"./iframe-Ckb5JYy8.js";import{a as r}from"./argTableProps-MFub6R6M.js";import{n as s}from"./formatted-number-CKcdjKF6.js";import{Default as o}from"./formatted-number.stories-BnU6_JD2.js";import{G as i}from"./sensitive-number.component-Clv4cWrP.js";import"./formatted-text-4eDNblK9.js";import"./text-DbqlWi-X.js";import"./default-typography.styles-LjEH_hAg.js";import"./flex-C2S1XgmO.js";import"./flex.component-bq63keLP.js";import"./blur.component-UYxj1WpH.js";import"./formatted-account-CGgJI4XZ.js";import"./formatted-date-8yf54PVU.js";import"./formatted-date.component-BUA_A_fD.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
