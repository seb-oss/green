import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-BcWSDjD9.js";import{M as h}from"./WithTooltip-SK46ZJ2J-C2gwnHNw.js";import{F as c,a as m,b as t}from"./filter-chip.stories-BiCpuqBv.js";import{C as d,G as n,a as s,b as l}from"./index-D3yUuyKC.js";import"./iframe-DLviRDmB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-fchADxIv.js";import"./create-component-CPRSibq9.js";import"./filter-chips.component-D46emnm3.js";import"./tokens.style-eh0fOWGS.js";import"./watch-Bh1rs_BK.js";import"./class-map-DnJuhoFG.js";import"./icon-Dghe-sAX.js";import"./resize-observer-B9k8v2TZ.js";import"./attribute-converters-CdI0trPX.js";import"./button.component-DYbBIhPW.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CrtHx0eJ.js";import"./checkmark.component-BP8Ny7G1.js";import"./index-DZISCQbu.js";import"./triangle-exclamation.component-r_qUHe0g.js";import"./alert.component-C69l0uz7.js";import"./runtime-nRyYmvPb.js";import"./unwrap-slots-B55ibK7r.js";import"./dropdown.component-DTn28Lrw.js";import"./popover.component-YImAX3Wz.js";import"./cross-small.component-BLLIJ9Gj.js";import"./chevron-bottom.component-gsVsx_CN.js";import"./circle-check.component-BlFUbedC.js";import"./chevron-right.component-CYGhZ5hy.js";import"./datepicker.component-NMXjIxBB.js";import"./calender-add.component-DiM-_-6G.js";import"./index-BVbMUtlz.js";import"./dot-grid-one-horizontal.component-CG3BcLcD.js";import"./context-menu.component-DRvnNhp2.js";import"./grouped-list.component-Cn-7LOZk.js";import"./segmented-control.component-8ZOGZ38T.js";import"./index-CwsPAabN.js";function p(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...r.components};return d||o("Core",!1),n||o("Core.GdsAlert",!0),s||o("Core.GdsDiv",!0),l||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:c}),`
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
