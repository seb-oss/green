import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-BzZCe2To.js";import{M as h}from"./WithTooltip-SK46ZJ2J-Dfy8B5yN.js";import{F as c,a as m,b as t}from"./filter-chip.stories-D360Nw-D.js";import{C as d,G as n,a as s,b as l}from"./index-BlFhN65k.js";import"./iframe-CelaFuV7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CjXVhvJk.js";import"./create-component-CPRSibq9.js";import"./filter-chips.component-ffXJbIoX.js";import"./tokens.style-CHtZEMdX.js";import"./watch-Bh1rs_BK.js";import"./class-map-Nh3yQBam.js";import"./icon-BtVjnqF5.js";import"./resize-observer-B9k8v2TZ.js";import"./attribute-converters-CdI0trPX.js";import"./button.component-Bo6Ew2kg.js";import"./when-BR7zwNJC.js";import"./transitional-styles-sq-k3_K7.js";import"./checkmark.component-D7Y063x2.js";import"./index-DT6OBiWo.js";import"./triangle-exclamation.component-Dmhxb47C.js";import"./alert.component-BS1AP1jc.js";import"./runtime-nRyYmvPb.js";import"./unwrap-slots-h8c-w_RD.js";import"./dropdown.component-CMNGZOL6.js";import"./popover.component-aclLw27A.js";import"./cross-small.component-BxCgovwK.js";import"./chevron-bottom.component-D3DNmnRi.js";import"./circle-check.component-BTaWPirY.js";import"./chevron-right.component-kLEqnNGq.js";import"./datepicker.component-C631pmmB.js";import"./calender-add.component-CJ717alA.js";import"./index-Dt5knyk1.js";import"./dot-grid-one-horizontal.component-DSAY2UOa.js";import"./context-menu.component-4HJxQPnQ.js";import"./grouped-list.component-DtP5g2zx.js";import"./segmented-control.component-DWi7R9lk.js";import"./index-DZweOSf1.js";function p(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...r.components};return d||o("Core",!1),n||o("Core.GdsAlert",!0),s||o("Core.GdsDiv",!0),l||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:c}),`
`,e.jsx(l,{children:e.jsx(s,{margin:"xl 0",children:e.jsxs(n,{variant:"notice",children:[e.jsx(i.strong,{children:"Note:"})," This version of Filter chips is deprecated! Please use the ",e.jsx(i.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-filter-chips--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,e.jsx(i.h1,{id:"filter-chips",children:"Filter Chips"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://github.com/seb-oss/green/tree/main/libs/react/src/lib/filter-chips",rel:"nofollow",children:"Source code"}),`
 | 
`,e.jsx(i.a,{href:"https://designlibrary.sebgroup.com/components/filter-chip",rel:"nofollow",children:"Usage guidelines"})]}),`
`,e.jsx(i.h2,{id:"importing-the-component",children:"Importing the component"}),`
`,e.jsxs(i.p,{children:["To use the component, import ",e.jsx(i.code,{children:"FilterChips"})," and ",e.jsx(i.code,{children:"FilterChip"})," like this:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`import {
  FilterChips,
  FilterChip,
} from '@sebgroup/green-react/src/lib/filter-chips'

// Use as JSX element in your app
return (
  <FilterChips value="division" label="Select a filter category">
    <FilterChip value="all">All</FilterChip>
    <FilterChip value="top-news">Top news</FilterChip>
    <FilterChip value="division">Division</FilterChip>
    <FilterChip value="global">Global</FilterChip>
    <FilterChip value="country">Country</FilterChip>
    <FilterChip value="lcfi">
      Large Corporate & Financial Institutions
    </FilterChip>
  </FilterChips>
)
`})}),`
`,e.jsxs(m,{value:"division",label:"Select a filter category",children:[e.jsx(t,{value:"all",children:"All"}),e.jsx(t,{value:"top-news",children:"Top news"}),e.jsx(t,{value:"division",children:"Division"}),e.jsx(t,{value:"global",children:"Global"}),e.jsx(t,{value:"country",children:"Country"}),e.jsx(t,{value:"lcfi",children:"Large Corporate & Financial Institutions"})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Note:"})," It is important to remember to set the label attribute. Omitting it will cause poor accessibility for screen reader useSharedState. Internally in the component, the label attribute will be used to set ",e.jsx(i.code,{children:"aria-label"})," for the appropriate element."]}),`
`,e.jsx(i.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsxs(i.p,{children:["For various examples of how to use the component, head over to the ",e.jsx(i.a,{href:"https://storybook.seb.io/latest/core/?path=/story/components-filter-chips--page",rel:"nofollow",children:"Green Core storybook"})]})]})}function $(r={}){const{wrapper:i}={...a(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(p,{...r})}):p(r)}function o(r,i){throw new Error("Expected "+(i?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{$ as default};
