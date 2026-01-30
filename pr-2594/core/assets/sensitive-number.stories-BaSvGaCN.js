import{x as t}from"./iframe-BZbfo3FS.js";import{a as r}from"./argTableProps-D5GLtkVL.js";import{n as s}from"./formatted-number-DSMIuIUQ.js";import{Default as o}from"./formatted-number.stories-Bmm8mJaJ.js";import{G as i}from"./sensitive-number.component-BVD2Mmnr.js";import"./formatted-text-Dd-61EN-.js";import"./text-BKMkw5yD.js";import"./default-typography.styles-DldTq0TZ.js";import"./flex-CcZddjDc.js";import"./flex.component-BxowivKU.js";import"./blur.component-BDct-ITu.js";import"./formatted-account-BfRP-6ii.js";import"./formatted-date-Cf5dz94-.js";import"./formatted-date.component-CgBZbSoL.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
