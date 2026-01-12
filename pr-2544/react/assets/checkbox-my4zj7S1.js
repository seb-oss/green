import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-CHndHT4e.js";import{M as h,C as m,b as p}from"./blocks-Kyd30Fr1.js";import{C as r}from"./checkbox-Dd9pLfLr.js";import{C as l,D as x}from"./checkbox.stories-BH8J1ym_.js";import{C as b,G as i,a as s,b as c}from"./index-CDepr1II.js";import"./iframe-Bu5FTowg.js";import"./index-DCcQG9PO.js";import"./index-ByQHE7MR.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-CIIRDkGN.js";import"./triangle-exclamation.component-_5xZK4St.js";import"./tokens.style-DWvVAB8z.js";import"./icon.component-CRSPgIzU.js";import"./alert.component-BguVJLrB.js";import"./runtime-nRyYmvPb.js";import"./class-map-DNIoihhy.js";import"./unwrap-slots-L8uozOzr.js";import"./button.component-CT72pl5N.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-D5oYl55y.js";import"./dropdown.component-Cp2Y07Ea.js";import"./popover.component-Bh9ugCDg.js";import"./cross-small.component-B38pN81t.js";import"./chevron-bottom.component-C9dMwCBy.js";import"./checkmark.component-BDwvP46d.js";import"./circle-check.component-CsDsLUW0.js";import"./chevron-right.component-D0DEoms0.js";import"./datepicker.component-B5mwxEjN.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-mHPenV3I.js";import"./index-9Yjb4S5V.js";import"./dot-grid-one-horizontal.component-DZvSQuJ1.js";import"./context-menu.component-BGtSxqpn.js";import"./filter-chips.component-BPt7Hc0w.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-CliTUPbh.js";import"./segmented-control.component-BtoAP_1e.js";import"./index-BtqS51Hg.js";import"./triangle-exclamation-D9wOZQeK.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
`,e.jsx(p,{})]})}function ie(t={}){const{wrapper:o}={...d(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}function n(t,o){throw new Error("Expected "+(o?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ne as CheckboxTemplate,ie as default};
