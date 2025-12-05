import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-ec869S6v.js";import{M as h}from"./WithTooltip-SK46ZJ2J-BD-Q3AR1.js";import{F as c,a as m,b as t}from"./filter-chip.stories-CzyTDPeY.js";import{C as d,G as n,a as s,b as l}from"./index-DTNdmlOP.js";import"./iframe-7aEMfM0w.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B1mvUCto.js";import"./create-component-CPRSibq9.js";import"./filter-chips.component-gtFSBM6_.js";import"./tokens.style-BikTQVaw.js";import"./watch-Bh1rs_BK.js";import"./class-map-DJx0wTub.js";import"./icon-BW9wliAN.js";import"./resize-observer-B9k8v2TZ.js";import"./attribute-converters-CdI0trPX.js";import"./button.component-B37oCp3Q.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BFq9Cnc-.js";import"./checkmark.component-Cbdr5VMY.js";import"./index-DIaAcdpA.js";import"./triangle-exclamation.component-01vj7Rzu.js";import"./alert.component-Cery4_z6.js";import"./runtime-nRyYmvPb.js";import"./unwrap-slots-BZNnNzQM.js";import"./dropdown.component-BXqBv9iT.js";import"./popover.component-BR6pKgpn.js";import"./cross-small.component-Cl3p_Pxn.js";import"./chevron-bottom.component-B_QTbmzP.js";import"./circle-check.component-DPEJSak1.js";import"./chevron-right.component-D8id3DsP.js";import"./datepicker.component-D3MQoO8H.js";import"./calender-add.component-qflMY-vd.js";import"./index-DyCpoGwf.js";import"./dot-grid-one-horizontal.component-BIvjQf7-.js";import"./context-menu.component-Csb6RDDd.js";import"./grouped-list.component-BCSfXO_Q.js";import"./segmented-control.component-CgNhjTeY.js";import"./index-CxySW7SI.js";function p(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...r.components};return d||o("Core",!1),n||o("Core.GdsAlert",!0),s||o("Core.GdsDiv",!0),l||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:c}),`
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
