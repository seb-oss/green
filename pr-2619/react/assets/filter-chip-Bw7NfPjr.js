import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DMXsWXKd.js";import{M as h}from"./blocks-CyN-ueWr.js";import{F as c,a as m,b as t}from"./filter-chip.stories-DFE9KSnk.js";import{C as d,G as n,a as s,b as l}from"./index-Cli4iAw5.js";import"./iframe-CvYMQRfi.js";import"./index-BazfhaL8.js";import"./create-component-CPRSibq9.js";import"./filter-chips.component-rANHWx45.js";import"./tokens.style-Pp7pKpta.js";import"./watch-Bh1rs_BK.js";import"./class-map-DsqPT6mB.js";import"./icon.component-oIdw6dgV.js";import"./resize-observer-B9k8v2TZ.js";import"./attribute-converters-CdI0trPX.js";import"./button.component-BidA3SMn.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CAIvb23M.js";import"./checkmark.component-nYhUlJIf.js";import"./alert.component-BSCidB7R.js";import"./runtime-nRyYmvPb.js";import"./unwrap-slots-B9NalaCj.js";import"./dropdown.component-D2Cpx-9G.js";import"./popover.component-CNwShoPn.js";import"./cross-small.component-CbRqNqae.js";import"./triangle-exclamation.component-B3ct3Cr0.js";import"./chevron-bottom.component-CX3SyZWT.js";import"./circle-check.component-BMbT8cdv.js";import"./index-C5YZabN9.js";import"./chevron-right.component-b5ZiNc8H.js";import"./datepicker.component-C3wmypVF.js";import"./calender-add.component-DMNqPobo.js";import"./index-cvA7HtGp.js";import"./dot-grid-one-horizontal.component-C_8-Ipvh.js";import"./context-menu.component-C0U-F4T5.js";import"./grouped-list.component-CFNB5xZv.js";import"./segmented-control.component-DysPX3B6.js";import"./index-BLVVigxh.js";function p(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...r.components};return d||o("Core",!1),n||o("Core.GdsAlert",!0),s||o("Core.GdsDiv",!0),l||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:c}),`
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
`,e.jsxs(i.p,{children:["For various examples of how to use the component, head over to the ",e.jsx(i.a,{href:"https://storybook.seb.io/latest/core/?path=/story/components-filter-chips--page",rel:"nofollow",children:"Green Core storybook"})]})]})}function Z(r={}){const{wrapper:i}={...a(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(p,{...r})}):p(r)}function o(r,i){throw new Error("Expected "+(i?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Z as default};
