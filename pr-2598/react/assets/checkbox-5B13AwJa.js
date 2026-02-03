import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DJXl2c4L.js";import{M as h,C as m,b as p}from"./blocks-BIp_qpjr.js";import{C as r}from"./checkbox-ofw9l4aP.js";import{C as l,D as x}from"./checkbox.stories-CoVij-Tl.js";import{C as b,G as i,a as s,b as c}from"./index-BPAGger_.js";import"./iframe-euRLsyEz.js";import"./index-CNa2Es-4.js";import"./index-CjQ2RVtd.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-D8zH01Bg.js";import"./triangle-exclamation.component-v10moAf8.js";import"./tokens.style-CXxtJL7i.js";import"./icon.component-B4l8jdQp.js";import"./alert.component-DmcTQz0T.js";import"./runtime-nRyYmvPb.js";import"./class-map-DU9gYQ8g.js";import"./unwrap-slots-C8ML-w92.js";import"./button.component-HmVPCC5Y.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DzP7xuVq.js";import"./dropdown.component-C5UjmNw9.js";import"./popover.component-BhnNW-6v.js";import"./cross-small.component-BNNtjl3i.js";import"./chevron-bottom.component-UsEhzlFb.js";import"./checkmark.component-CwYHcjV0.js";import"./circle-check.component-BH1M3vSk.js";import"./chevron-right.component-dHwEKQVb.js";import"./datepicker.component-DwQWaYzS.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-BsZhh7yj.js";import"./index-nvsmbgR3.js";import"./dot-grid-one-horizontal.component-D_-YDTay.js";import"./context-menu.component-DdO1uIwd.js";import"./filter-chips.component-BB0_GMI0.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-B1W7QCR-.js";import"./segmented-control.component-B1SVKBiI.js";import"./index-BAiWi6t8.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
