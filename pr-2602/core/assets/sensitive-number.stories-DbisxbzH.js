import{x as t}from"./iframe-uFM-9jO7.js";import{a as r}from"./argTableProps-BmNmGI9b.js";import{n as s}from"./formatted-number-BnMjseWB.js";import{Default as o}from"./formatted-number.stories-gvIGwg-g.js";import{G as i}from"./sensitive-number.component-DLr28mYB.js";import"./formatted-text-DQRVA96y.js";import"./text-BF7Svg2b.js";import"./default-typography.styles-BQ3GHWCQ.js";import"./flex-DogaCPPn.js";import"./flex.component-DwjWo8Me.js";import"./blur.component-Bh8pzoLB.js";import"./formatted-account-BLLfxxGP.js";import"./formatted-date-BK-TvILd.js";import"./formatted-date.component-S692ZQIN.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
