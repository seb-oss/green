import{x as t}from"./iframe-CaSnqVAO.js";import{a as r}from"./argTableProps-C6iN36Xh.js";import{n as s}from"./formatted-number-Bd89LOv5.js";import{Default as o}from"./formatted-number.stories-C4r-GE5l.js";import{G as i}from"./sensitive-number.component-CSRhBnt_.js";import"./formatted-text-DV0gM5SB.js";import"./text-ChPVSlNm.js";import"./default-typography.styles-JlCI9qIa.js";import"./flex-Dg1XC8wP.js";import"./flex.component-xmOxoKSe.js";import"./blur.component-DPV9jecR.js";import"./formatted-account-B77Lzfbu.js";import"./formatted-date-RD-cMyot.js";import"./formatted-date.component-gKbiiZR7.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
