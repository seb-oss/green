import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-D2jS698Z.js";import{M as h}from"./blocks-g4TUngPW.js";import{F as c,a as m,b as t}from"./filter-chip.stories-CzOL3aWL.js";import{C as d,G as n,a as s,b as l}from"./index-QSXBKjBJ.js";import"./iframe-B-N5FGiE.js";import"./index-qz3X-sPr.js";import"./create-component-CPRSibq9.js";import"./filter-chips.component-Q3l19kZQ.js";import"./tokens.style-C24p9acv.js";import"./watch-Bh1rs_BK.js";import"./class-map-DH61F9SL.js";import"./icon.component-BCR178Y-.js";import"./resize-observer-B9k8v2TZ.js";import"./attribute-converters-CdI0trPX.js";import"./button.component-69URmvQk.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BMeaCdJi.js";import"./checkmark.component-iICiFQwq.js";import"./alert.component-D2j1z5rL.js";import"./runtime-nRyYmvPb.js";import"./unwrap-slots-BoGO-XKl.js";import"./dropdown.component-BrkepUU2.js";import"./popover.component-HlTjm07V.js";import"./cross-small.component-C6e-BcqV.js";import"./triangle-exclamation.component-BAgPP_Ce.js";import"./chevron-bottom.component-wGf5karL.js";import"./circle-check.component-ClU7gW4x.js";import"./index-BcsqWjhl.js";import"./chevron-right.component-zX4kZ6GF.js";import"./datepicker.component-B-SR0a1-.js";import"./calender-add.component-BQfrTK6U.js";import"./index-BzFaq4kC.js";import"./dot-grid-one-horizontal.component-CT3wBNnB.js";import"./context-menu.component-C3SZ5eOQ.js";import"./grouped-list.component-ptLBvkiB.js";import"./segmented-control.component-CZXn3Jgr.js";import"./index-B3nPpzMi.js";function p(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...r.components};return d||o("Core",!1),n||o("Core.GdsAlert",!0),s||o("Core.GdsDiv",!0),l||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:c}),`
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
