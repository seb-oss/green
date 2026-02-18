import{x as t}from"./iframe-CQ6C5171.js";import{a as r}from"./argTableProps-DPj_u8QI.js";import{n as s}from"./formatted-number-yZxXAwbg.js";import{Default as o}from"./formatted-number.stories-DlIwgwMW.js";import{G as i}from"./sensitive-number.component-1NuByKFR.js";import"./formatted-text-DnUWlbmO.js";import"./text-CszMod1C.js";import"./default-typography.styles-DVh8uprT.js";import"./flex-CPbiCARk.js";import"./flex.component-DFXFpgUj.js";import"./blur.component-BD5nM8VE.js";import"./formatted-account-cnQjNh0x.js";import"./formatted-date-BbXZqsWr.js";import"./formatted-date.component-XzSNMLwL.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
