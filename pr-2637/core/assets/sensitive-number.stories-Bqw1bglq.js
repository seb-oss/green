import{x as t}from"./iframe-ClQhXCfa.js";import{a as r}from"./argTableProps-BMTvtpp0.js";import{n as s}from"./formatted-number-HR_bW40Z.js";import{Default as o}from"./formatted-number.stories-Db-ogqm3.js";import{G as i}from"./sensitive-number.component-CH77Z20q.js";import"./formatted-text-K0rcHRna.js";import"./text-oaJ4p7By.js";import"./default-typography.styles-BYndY-pe.js";import"./flex-CZ59H1Zd.js";import"./flex.component-fC1vQ49Q.js";import"./blur.component-u4oSp3aF.js";import"./formatted-account-bHFNkg36.js";import"./formatted-date-6y6CGDWY.js";import"./formatted-date.component-VDggFb1w.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
