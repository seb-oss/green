import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-D_uOcH7E.js";import{M as d,S as p}from"./blocks-CCBy5lyq.js";import{B as h,a as t}from"./breadcrumb-DeAI0JTK.js";import{B as l,D as u}from"./breadcrumb.stories-BKuKObz9.js";import{C as x,G as s,a as i,b as m}from"./index-BN57CZCC.js";import"./iframe-82Rx1u5H.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C7LAu3ps.js";import"./index-Bhl-iNyV.js";import"./alert.component-Co9JZA-o.js";import"./gds-element-EmizKElO.js";import"./runtime-nRyYmvPb.js";import"./class-map-Cm6pwG8C.js";import"./icon.component-YocLzsoq.js";import"./ref-CUirhiHu.js";import"./button.component-DRY2iMeD.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Bg7A93fM.js";import"./card.component-Bcd2zWAv.js";import"./circle-check.component-DivYQw4s.js";import"./chevron-bottom.component-Dn5IH_cq.js";import"./cross-small.component-B3REXKST.js";import"./triangle-exclamation.component-D5Pnbvpf.js";import"./index-lfOyEtzJ.js";import"./index-DmEsCdDc.js";import"./calender-add.component-DBK4ydli.js";import"./chevron-right.component-CSGUJw-m.js";import"./dot-grid-one-horizontal.component-coWD4qIG.js";import"./index-BEZBfkBF.js";import"./checkmark.component-zhLIgX2V.js";const Q=()=>r.jsx("div",{className:"card",children:r.jsxs(h,{children:[r.jsx(t,{children:r.jsx("a",{href:"",children:"Home"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Cart"})}),r.jsx(t,{children:r.jsx("a",{href:"",children:"Shopping"})}),r.jsx(t,{children:"Billing"})]})});function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return x||n("Core",!1),s||n("Core.GdsAlert",!0),i||n("Core.GdsDiv",!0),m||n("Core.GdsTheme",!0),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:l}),`
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
