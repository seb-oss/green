import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-Z5fD0fR_.js";import{M as p,S as d}from"./blocks-D24D8KSH.js";import{B as h,a as t}from"./breadcrumb-BZdw1kxH.js";import{B as l,D as u}from"./breadcrumb.stories-CWg-ZYaM.js";import{C as x,G as n,a as m,b as s}from"./index-BBKL6L6X.js";import"./iframe-D5za-sDm.js";import"./index-CdYOo6_N.js";import"./index-Zqm_AfoP.js";import"./alert.component-Cc7L6T_X.js";import"./tokens.style-S4lj6_Ik.js";import"./runtime-nRyYmvPb.js";import"./class-map-Ce7Of4vy.js";import"./icon.component-CYxstYSl.js";import"./unwrap-slots-CrJjDXMy.js";import"./button.component-CfdDL-JY.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Bu4BLl5x.js";import"./dropdown.component-BFo2LCZv.js";import"./popover.component-kT9GRZA2.js";import"./cross-small.component-CGOoVB7c.js";import"./triangle-exclamation.component-2jYArF7m.js";import"./chevron-bottom.component-O5Yg08u6.js";import"./checkmark.component-B_5na6qS.js";import"./circle-check.component-DOqjf_r0.js";import"./index-DxcQqL6R.js";import"./chevron-right.component-Czt3NaSb.js";import"./datepicker.component-CYz_Y2XO.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DXK9REtB.js";import"./index-DRPLSXJa.js";import"./dot-grid-one-horizontal.component-Bj76e-M6.js";import"./context-menu.component-D2daTIUe.js";import"./filter-chips.component-ab5Tqbum.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-niBHsEqO.js";import"./segmented-control.component-v_WxZy27.js";import"./index-DPzOjoN0.js";import"./triangle-exclamation-OQjucEpl.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
`,r.jsx(s,{children:r.jsx(m,{margin:"xl 0",children:r.jsxs(n,{variant:"notice",children:[r.jsx(e.strong,{children:"Note:"})," This version of Breadcrumbs is deprecated! Please use the ",r.jsx(e.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-breadcrumbs--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,r.jsx(e.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,r.jsx(e.p,{children:"Displays the path to the current resource using a hierarchy of links."}),`
`,r.jsx(d,{of:u}),`
`,r.jsx("br",{}),`
`,r.jsx("br",{}),`
`,r.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-typescript",children:`import {
  Breadcrumb,
  BreadcrumbItem,
} from '@sebgroup/green-react/src/lib/breadcrumbs'
`})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`<Breadcrumb>
  <BreadcrumbItem>
    <a href="/home">Home</a>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <a href="/home/cart">Cart</a>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <a href="/home/cart/shopping">Shopping</a>
  </BreadcrumbItem>
  <BreadcrumbItem>Billing</BreadcrumbItem>
</Breadcrumb>
`})})]})}function tr(o={}){const{wrapper:e}={...c(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(a,{...o})}):a(o)}function i(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{or as Template,tr as default};
