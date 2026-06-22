import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-D3PHHxJB.js";import{M as d,S as p}from"./blocks-Co93X8-n.js";import{B as h,a as t}from"./breadcrumb-BFiecJ1s.js";import{B as l,D as u}from"./breadcrumb.stories-DEuXGVut.js";import{C as x,G as s,a as i,b as m}from"./index-Tw2gzLpB.js";import"./iframe-BfwFbF3G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5UEUmGu.js";import"./index-BGGGTVwr.js";import"./alert.component-D99RxHY8.js";import"./declarative-layout-mixins-C991bcwN.js";import"./runtime-Cgryh99k.js";import"./class-map-BGu40tII.js";import"./icon.component-BleTYbZd.js";import"./ref-Da2bNEKR.js";import"./button.component-CD6w2Va7.js";import"./aria-forwarding-D9KxWeew.js";import"./when-CI7b_ccM.js";import"./transitional-styles-Cn39F69u.js";import"./card.component-C0gHpyrc.js";import"./circle-check.component-DD9rOAYF.js";import"./chevron-bottom.component-C7wJwRgJ.js";import"./cross-small.component-Bjv6cjrS.js";import"./triangle-exclamation.component-Cn3haFYa.js";import"./index-Biz4zKXv.js";import"./index-Cxy_7pne.js";import"./calender-add.component-Br6uolH3.js";import"./chevron-left.component-Du3b-Ryz.js";import"./dot-grid-one-horizontal.component-1LxtI9Kp.js";import"./index-Dme2AcqU.js";import"./checkmark.component-CraGf_tQ.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
`,r.jsx(m,{children:r.jsx(i,{margin:"xl 0",children:r.jsxs(s,{variant:"notice",children:[r.jsx(e.strong,{children:"Note:"})," This version of Breadcrumbs is deprecated! Please use the ",r.jsx(e.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-breadcrumbs--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,r.jsx(e.h1,{id:"breadcrumb",children:"Breadcrumb"}),`
`,r.jsx(e.p,{children:"Displays the path to the current resource using a hierarchy of links."}),`
`,r.jsx(p,{of:u}),`
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
`})})]})}function V(o={}){const{wrapper:e}={...c(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(a,{...o})}):a(o)}function n(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Q as Template,V as default};
