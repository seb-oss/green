import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-BX-bkEjS.js";import{M as h}from"./blocks-ByvxI8nN.js";import{F as c,a as m,b as t}from"./filter-chip.stories-C2EAxcK4.js";import{C as d,G as n,a as s,b as l}from"./index-IbSvgK3d.js";import"./iframe-Ceh7Cnv8.js";import"./index-DDbs0oTt.js";import"./create-component-CPRSibq9.js";import"./filter-chips.component-JiETGs1N.js";import"./tokens.style-D73RF4NU.js";import"./watch-Bh1rs_BK.js";import"./class-map-BZDYvrsw.js";import"./icon.component-CFuY4QjF.js";import"./resize-observer-B9k8v2TZ.js";import"./attribute-converters-CdI0trPX.js";import"./button.component-Bp8BJNaQ.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DgU_QGNU.js";import"./checkmark.component-kUKSvS4M.js";import"./alert.component-z_Ubv_pp.js";import"./runtime-nRyYmvPb.js";import"./unwrap-slots-BJ5Mo3M4.js";import"./dropdown.component-D_CrZIZi.js";import"./popover.component-CqFwUuyf.js";import"./cross-small.component-Cmu6u631.js";import"./triangle-exclamation.component-CSa9IuJV.js";import"./chevron-bottom.component-BBKkUmS9.js";import"./circle-check.component-De_0eI4B.js";import"./index-B0vxqB_Y.js";import"./chevron-right.component-a5m_-60z.js";import"./datepicker.component-UfJ3BnPQ.js";import"./calender-add.component-BciWoRWi.js";import"./index-DOkRlWeD.js";import"./dot-grid-one-horizontal.component-4uETGotd.js";import"./context-menu.component-D3DIzSDn.js";import"./grouped-list.component-Vv9EzYnw.js";import"./segmented-control.component-MdL97JY0.js";import"./index-eXcJXjLL.js";import"./triangle-exclamation-BP1JX-Du.js";function p(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...r.components};return d||o("Core",!1),n||o("Core.GdsAlert",!0),s||o("Core.GdsDiv",!0),l||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:c}),`
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
