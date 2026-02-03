import{x as t}from"./iframe-DSf9_LvW.js";import{a as r}from"./argTableProps-CvLgaC2h.js";import{n as s}from"./formatted-number-Rkd85wGw.js";import{Default as o}from"./formatted-number.stories-1HlvwSaI.js";import{G as i}from"./sensitive-number.component-C8KCvN-t.js";import"./formatted-text-UOulKoJq.js";import"./text-BLJABEjk.js";import"./default-typography.styles-AyUN2D44.js";import"./flex-ChIeOriE.js";import"./flex.component-Du3E9zfb.js";import"./blur.component-DFawBKkp.js";import"./formatted-account-Do45vqja.js";import"./formatted-date-MWWGTdXP.js";import"./formatted-date.component-BGlFzwMU.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
