import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-D_bTug2w.js";import{M as h,C as m,b as p}from"./blocks-D4eRE9TD.js";import{C as r}from"./checkbox-DZGT0OZl.js";import{C as l,D as x}from"./checkbox.stories-CesCluKm.js";import{C as b,G as i,a as s,b as c}from"./index-D3GaoswC.js";import"./iframe-B0xb44om.js";import"./index-4PccMhvF.js";import"./index-BeuzQTkG.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-BrLkh1wZ.js";import"./triangle-exclamation.component-CfHL4jYP.js";import"./tokens.style-TCTLvSFQ.js";import"./icon.component-uuIToOO9.js";import"./alert.component-D-i2P9Oq.js";import"./runtime-nRyYmvPb.js";import"./class-map-DR4jIqih.js";import"./unwrap-slots-BWntZpxK.js";import"./button.component-Cih7voq1.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DgOldKCQ.js";import"./dropdown.component-DV345hIE.js";import"./popover.component-BMQzZsVt.js";import"./cross-small.component-D-HDowrc.js";import"./chevron-bottom.component-DwvORoJO.js";import"./checkmark.component-DvPMRUE0.js";import"./circle-check.component-2kjTeTUk.js";import"./chevron-right.component-MgEhXRJb.js";import"./datepicker.component-BEXEK6fE.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CyfcHujq.js";import"./index--CPRgisf.js";import"./dot-grid-one-horizontal.component-CjOMr7yl.js";import"./context-menu.component-BgDMWPp1.js";import"./filter-chips.component-Dc_A6xiH.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-D9-SZvem.js";import"./segmented-control.component-BLpSKAFQ.js";import"./index-BXwKHPgI.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
`,e.jsx(c,{children:e.jsx(s,{margin:"xl 0",children:e.jsxs(i,{variant:"notice",children:[e.jsx(o.strong,{children:"Note:"})," This version of Checkbox is deprecated! Please use the ",e.jsx(o.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-checkbox--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,e.jsx(o.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(o.h2,{id:"basic",children:"Basic"}),`
`,e.jsx(m,{of:x}),`
`,e.jsx(o.h2,{id:"checked-state",children:"Checked state"}),`
`,e.jsxs(o.p,{children:["You control the state of the checkbox by setting the ",e.jsx(o.code,{children:"checked"})," prop to true or false. You can use the ",e.jsx(o.code,{children:"onChange"})," handler to listen to user input and update state in your app accordingly."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`function RobotCheckComponent () {
  const [isRobot, setIsRobot] = useState<boolean>()

  return (
    <Checkbox
      label="Check this if you are a robot"
      checked={isRobot}
      onChange={(event) => { setIsRobot(event.target.checked) }
    />
  )
}
`})}),`
`,e.jsx(o.h2,{id:"states-and-variants-checkbox",children:"States and variants checkbox"}),`
`,e.jsxs("form",{children:[e.jsx(r,{label:"Normal unchecked"}),e.jsx(r,{label:"Normal checked",checked:!0}),e.jsx(r,{label:"Invalid unchecked",validator:{indicator:"error",message:"Invalid"}}),e.jsx(r,{label:"Invalid checked",validator:{indicator:"error",message:"Invalid"},checked:!0})]}),`
`,e.jsx(o.h2,{id:"validation",children:"Validation"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Checkbox
  label="Invalid checked"
  validator={{
    indicator: 'error',
    message: 'Error',
  }}
  checked
/>
`})}),`
`,e.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{})]})}function ne(t={}){const{wrapper:o}={...d(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}function n(t,o){throw new Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{re as CheckboxTemplate,ne as default};
