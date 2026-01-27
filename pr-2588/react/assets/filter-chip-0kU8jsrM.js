import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-Dwjuudgj.js";import{M as h}from"./blocks-DJORzTg3.js";import{F as c,a as m,b as t}from"./filter-chip.stories-uapIV9ip.js";import{C as d,G as n,a as s,b as l}from"./index-DA3fCxWN.js";import"./iframe-C7u6Df3I.js";import"./index-D32to4Ek.js";import"./create-component-CPRSibq9.js";import"./filter-chips.component-BPRBKZjL.js";import"./tokens.style-32YJW_c-.js";import"./watch-Bh1rs_BK.js";import"./class-map-BfixnKaV.js";import"./icon.component-DloYyqYd.js";import"./resize-observer-B9k8v2TZ.js";import"./attribute-converters-CdI0trPX.js";import"./button.component-BtjDTI7q.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CEXP73Kh.js";import"./checkmark.component-CnuCJl7Z.js";import"./alert.component-DbCBfmSy.js";import"./runtime-nRyYmvPb.js";import"./unwrap-slots-C6NhPEve.js";import"./dropdown.component-CEZE2Mb1.js";import"./popover.component-BOHP0DLu.js";import"./cross-small.component-BOlP-zyx.js";import"./triangle-exclamation.component-CB8dMO1Z.js";import"./chevron-bottom.component-C6aXz_1M.js";import"./circle-check.component-C3MCsx5f.js";import"./index-DYs1l-Un.js";import"./chevron-right.component-DGnMDGPw.js";import"./datepicker.component-CKmelqaT.js";import"./calender-add.component-BZ2jvM2Q.js";import"./index-DGl0jUwe.js";import"./dot-grid-one-horizontal.component-ahzgi9GH.js";import"./context-menu.component-DZ_3trJi.js";import"./grouped-list.component-CQx17oh3.js";import"./segmented-control.component-t_tBVVtT.js";import"./index-CyFwEkb0.js";function p(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...r.components};return d||o("Core",!1),n||o("Core.GdsAlert",!0),s||o("Core.GdsDiv",!0),l||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:c}),`
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
