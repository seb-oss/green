import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DOM_0Pq-.js";import{M as h,C as m,b as p}from"./blocks-Ca56WLdH.js";import{C as r}from"./checkbox-B82pkXnX.js";import{C as l,D as x}from"./checkbox.stories-5BrmhDqs.js";import{C as b,G as i,a as s,b as c}from"./index-Bw_cHvuO.js";import"./iframe-DnsZ7RXJ.js";import"./index-BDXhKWz8.js";import"./index-DCdqRzWL.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-dIoErRNY.js";import"./triangle-exclamation.component-BDb7Zw2H.js";import"./tokens.style-DU4-GlOx.js";import"./icon.component-C9WS0uNd.js";import"./alert.component-BD74-VGW.js";import"./runtime-nRyYmvPb.js";import"./class-map-B8J4c4KG.js";import"./unwrap-slots-BZ3vio6c.js";import"./button.component-CcJkliSM.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-D6iQNWMA.js";import"./dropdown.component-uW7TrvcL.js";import"./popover.component-WUJbqAkq.js";import"./cross-small.component-CHKf5eOn.js";import"./chevron-bottom.component-DVa4R0Co.js";import"./checkmark.component-DKDaTmbt.js";import"./circle-check.component-B1X4VNjc.js";import"./chevron-right.component-C-iKWR8F.js";import"./datepicker.component-DJpodxaH.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-4NzATuy_.js";import"./index-D1f0pSsy.js";import"./dot-grid-one-horizontal.component-BdVr2_QD.js";import"./context-menu.component-BoZSTfT0.js";import"./filter-chips.component-ZXcdsQCf.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-7PC_kQDW.js";import"./segmented-control.component-VYSFGfsX.js";import"./index-BFJI-W8J.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
