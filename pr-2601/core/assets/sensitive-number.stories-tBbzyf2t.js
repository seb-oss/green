import{x as t}from"./iframe-BW-l_IqU.js";import{a as r}from"./argTableProps-CuH1d52u.js";import{n as s}from"./formatted-number-BZY6kw_R.js";import{Default as o}from"./formatted-number.stories-DDMAGOyE.js";import{G as i}from"./sensitive-number.component-CBiLJjee.js";import"./formatted-text-CZQdMu_9.js";import"./text-yiX1z59m.js";import"./default-typography.styles-BknD54WI.js";import"./flex-2_Dtey6n.js";import"./flex.component-Dh0WZ1Jk.js";import"./blur.component-BwIEFhr-.js";import"./formatted-account-B0ezGGz6.js";import"./formatted-date-Dh9qj7UQ.js";import"./formatted-date.component-7_y8nj0v.js";i.define();const D={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...r("gds-sensitive-number"),format:{control:{type:"select"},options:Object.keys(s)},currency:{type:"string"},decimals:{type:"number"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)

GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...o.args,hide:!0}},S={...n,render:e=>t`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
      .decimals=${e.decimals}
    ></gds-sensitive-number>`},x=["Default"];export{S as Default,x as __namedExportsOrder,D as default};
