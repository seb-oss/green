import{x as t}from"./iframe-CqMRxf4t.js";import{a as r}from"./argTableProps-BB_wX5CW.js";import{n as s}from"./formatted-number-CQxGSIui.js";import{Default as o}from"./formatted-number.stories-BggqM79f.js";import{G as i}from"./sensitive-number.component-p51YuIKu.js";import"./formatted-text-I-Tuxrnr.js";import"./text-CB7_rb84.js";import"./default-typography.styles-EquihxG1.js";import"./flex-DFeOhYoa.js";import"./flex.component-D01Szg88.js";import"./blur.component-Otu85nGQ.js";import"./formatted-account-BqcYp06t.js";import"./formatted-date-CcjdmiWv.js";import"./formatted-date.component-uwtnIqrO.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
