import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-C8ZLIS3H.js";import{M as p,S as d}from"./WithTooltip-SK46ZJ2J-vmS5DYSy.js";import{B as h,a as t}from"./breadcrumb-DTaycVDQ.js";import{B as l,D as u}from"./breadcrumb.stories-BX2Ofn1W.js";import{C as x,G as n,a as m,b as s}from"./index-CPu2XIXJ.js";import"./iframe-BkqhFXmA.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BionDmrU.js";import"./index-De3UUc4c.js";import"./index-BSWUPTgx.js";import"./tokens.style-BwYgqDhN.js";import"./triangle-exclamation.component-GRxxB6gk.js";import"./icon.component-4WiCsPwS.js";import"./alert.component-aSIpcmXQ.js";import"./runtime-nRyYmvPb.js";import"./class-map-CfplM-s0.js";import"./unwrap-slots-f8o5yKSg.js";import"./button.component-CCqs5uad.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BcxA5fIg.js";import"./dropdown.component-B6zD3IG8.js";import"./popover.component-DggK9l4J.js";import"./cross-small.component-ClCkQAwd.js";import"./chevron-bottom.component-Csz9HocX.js";import"./checkmark.component-ColKDfDc.js";import"./circle-check.component-CfMQAx6Y.js";import"./chevron-right.component-C8OC1QMX.js";import"./datepicker.component-Bz05L3Ac.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DcreXzTq.js";import"./index-Cm7oA6-p.js";import"./dot-grid-one-horizontal.component-CP5MjLel.js";import"./context-menu.component-WmgcOyut.js";import"./filter-chips.component-DTIGvDSv.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-DBgVSWj0.js";import"./segmented-control.component-Cp5reE_Y.js";import"./index-DgWA9wbp.js";const or=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||i("Core",!1),n||i("Core.GdsAlert",!0),m||i("Core.GdsDiv",!0),s||i("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
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
