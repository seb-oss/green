import{x as t}from"./iframe-0DX4ZrJa.js";import{a as r}from"./argTableProps-C0_5uOxq.js";import{n as s}from"./formatted-number-C86Kkygj.js";import{Default as o}from"./formatted-number.stories-BLy0zRMg.js";import{G as i}from"./sensitive-number.component-ylZcLv_i.js";import"./formatted-text-CuY9Uf7G.js";import"./text-roSAtP2A.js";import"./default-typography.styles-B9NXa1Bb.js";import"./flex-969M4YG9.js";import"./flex.component-CD85IxOy.js";import"./blur.component-C2DUDEVp.js";import"./formatted-account-BtSBZZWS.js";import"./formatted-date-CfDnvmE1.js";import"./formatted-date.component-BOC3o8Ep.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
