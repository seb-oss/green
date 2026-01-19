import{x as t}from"./iframe-Bs7dWGrf.js";import{a as r}from"./argTableProps-X4Lk-nTn.js";import{n as s}from"./formatted-number-aDFDK5xF.js";import{Default as o}from"./formatted-number.stories-CHSuSOrW.js";import{G as i}from"./sensitive-number.component-fJBwfxhB.js";import"./formatted-text-BLVrSX1m.js";import"./text-BNn59ZVb.js";import"./default-typography.styles-TQR90ZrP.js";import"./flex-B_bhn7LZ.js";import"./flex.component-Dqm4oVBu.js";import"./blur.component-MIGhNWhN.js";import"./formatted-account-YiGKi_os.js";import"./formatted-date-XojSj5dA.js";import"./formatted-date.component-CGdi2jQ9.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
