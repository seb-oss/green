import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-BjnLyPsG.js";import{M as h}from"./blocks-6TEFU5KA.js";import{F as c,a as m,b as t}from"./filter-chip.stories-DggLPAjW.js";import{C as d,G as n,a as s,b as l}from"./index-CwIyOUgR.js";import"./iframe-Y-KxOYKz.js";import"./index-BhU1qnJw.js";import"./create-component-CPRSibq9.js";import"./filter-chips.component-BkcUqBI1.js";import"./tokens.style-D-4pL0_J.js";import"./watch-Bh1rs_BK.js";import"./class-map-Db9jdZw3.js";import"./icon.component-CHivlQJj.js";import"./resize-observer-B9k8v2TZ.js";import"./attribute-converters-CdI0trPX.js";import"./button.component-C2wBx_Tr.js";import"./when-BR7zwNJC.js";import"./transitional-styles-oO2zGOF5.js";import"./checkmark.component-S51zsMc0.js";import"./alert.component-DSPywWDJ.js";import"./runtime-nRyYmvPb.js";import"./unwrap-slots-TD9WxEkU.js";import"./dropdown.component-C4Llwo8X.js";import"./popover.component-DsELjKfL.js";import"./cross-small.component-Dc_t4_6r.js";import"./triangle-exclamation.component-CpuTYxxw.js";import"./chevron-bottom.component-BaJxtlIt.js";import"./circle-check.component-D0teqKrp.js";import"./index-DhMPe-2Q.js";import"./chevron-right.component-iB_WCXh-.js";import"./datepicker.component-BBM15R9O.js";import"./calender-add.component-LhdNdAZz.js";import"./index-CmLgmK9T.js";import"./dot-grid-one-horizontal.component-CfbzSQsL.js";import"./context-menu.component-Bq3lVvcb.js";import"./grouped-list.component-BVC61oiK.js";import"./segmented-control.component-DBK_9_OF.js";import"./index-C-2AFl1M.js";function p(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...r.components};return d||o("Core",!1),n||o("Core.GdsAlert",!0),s||o("Core.GdsDiv",!0),l||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:c}),`
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
