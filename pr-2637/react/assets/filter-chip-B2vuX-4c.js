import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-BgIFfsAk.js";import{M as h}from"./blocks-BjKm7Oyq.js";import{F as c,a as m,b as t}from"./filter-chip.stories-6SNzcHF9.js";import{C as d,G as n,a as s,b as l}from"./index-CiALi0El.js";import"./iframe-wgvpIZJe.js";import"./index-CMfatIV6.js";import"./create-component-CPRSibq9.js";import"./filter-chips.component-DBVi0o6n.js";import"./tokens.style-Da293HWS.js";import"./watch-Bh1rs_BK.js";import"./class-map-B3Dn4cI9.js";import"./icon.component-k7Fc9T4S.js";import"./resize-observer-B9k8v2TZ.js";import"./attribute-converters-CdI0trPX.js";import"./button.component-CqNqqRVV.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CEYqXxVr.js";import"./checkmark.component-DjK8W8eY.js";import"./alert.component-DlzJ-7pq.js";import"./runtime-nRyYmvPb.js";import"./unwrap-slots-DRRB1gGk.js";import"./dropdown.component-KdFLl3Mr.js";import"./popover.component-CNwcth1u.js";import"./cross-small.component-CVksBO7x.js";import"./triangle-exclamation.component-C782Gtez.js";import"./chevron-bottom.component-GL-T3iyb.js";import"./circle-check.component-CoQCVTWU.js";import"./index-D5gw2i8_.js";import"./chevron-right.component-B7DmydZo.js";import"./datepicker.component-CgjH0GsD.js";import"./calender-add.component-Db-CdXni.js";import"./index-DkuUYeYc.js";import"./dot-grid-one-horizontal.component-CERojkN1.js";import"./context-menu.component-uDLwl-5W.js";import"./grouped-list.component-DYTwHehJ.js";import"./segmented-control.component-feiyu0oc.js";import"./index-D8fFHKma.js";function p(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...r.components};return d||o("Core",!1),n||o("Core.GdsAlert",!0),s||o("Core.GdsDiv",!0),l||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:c}),`
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
