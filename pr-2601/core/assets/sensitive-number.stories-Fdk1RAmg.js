import{x as t}from"./iframe-Cg-uRGyf.js";import{a as r}from"./argTableProps-Dr8eZcy2.js";import{n as s}from"./formatted-number-D5mlbFRL.js";import{Default as o}from"./formatted-number.stories-DOMA3G6G.js";import{G as i}from"./sensitive-number.component-8NBldFTt.js";import"./formatted-text-DkEZz9AW.js";import"./text-BMteJ2zy.js";import"./default-typography.styles-CAa_femO.js";import"./flex-DMo5xvlQ.js";import"./flex.component-DTgxc_ij.js";import"./blur.component-BBBWS-_k.js";import"./formatted-account-Bnm-_xgh.js";import"./formatted-date-BcRtWIeY.js";import"./formatted-date.component-DrkfNk63.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
