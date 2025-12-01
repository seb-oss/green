import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-C5oJpNRW.js";import{M as h}from"./WithTooltip-SK46ZJ2J-CK15S0Zh.js";import{F as c,a as m,b as t}from"./filter-chip.stories-Cnsp01Pp.js";import{C as d,G as n,a as s,b as l}from"./index-CNn1d-Zp.js";import"./iframe-9OBOoU6R.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CrdGTv1U.js";import"./create-component-CPRSibq9.js";import"./filter-chips.component-C1dgvvvG.js";import"./tokens.style-CqgZymbm.js";import"./watch-Bh1rs_BK.js";import"./class-map-DHz9gKKQ.js";import"./icon-ByC3juK-.js";import"./resize-observer-B9k8v2TZ.js";import"./attribute-converters-CdI0trPX.js";import"./button.component-BXCcVAdP.js";import"./when-BR7zwNJC.js";import"./transitional-styles-Bun1TfMT.js";import"./checkmark.component-D36GOulY.js";import"./index-DjZgV2fS.js";import"./triangle-exclamation.component-DbM6sWMJ.js";import"./alert.component-CHWYIFD1.js";import"./runtime-nRyYmvPb.js";import"./unwrap-slots-BSQTgm6z.js";import"./dropdown.component-D0FWeZQD.js";import"./popover.component-C8v_5ETb.js";import"./cross-small.component-BLoZtCYD.js";import"./chevron-bottom.component-C3kstdy9.js";import"./circle-check.component-BOahM6qY.js";import"./chevron-right.component-B3x39hfP.js";import"./datepicker.component-DHvKZFhy.js";import"./calender-add.component-BCin-o8X.js";import"./index-D1ZO4q4d.js";import"./dot-grid-one-horizontal.component-uHdoNnAi.js";import"./context-menu.component-L2GTjDQN.js";import"./grouped-list.component-M8V3F_gb.js";import"./segmented-control.component-EYWKyeYa.js";import"./index-CiBkDJZC.js";function p(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...r.components};return d||o("Core",!1),n||o("Core.GdsAlert",!0),s||o("Core.GdsDiv",!0),l||o("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:c}),`
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
