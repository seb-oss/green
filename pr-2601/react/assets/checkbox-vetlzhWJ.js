import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DmdK0IQD.js";import{M as h,C as m,b as p}from"./blocks-BgH8kG7Y.js";import{C as r}from"./checkbox-B4RG9gWT.js";import{C as l,D as x}from"./checkbox.stories-DxBOMqoU.js";import{C as b,G as i,a as s,b as c}from"./index-BkIsvssX.js";import"./iframe-CqfFa81k.js";import"./index-C9vAlVEg.js";import"./index-BdCkYTB_.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-Xmr9yF_G.js";import"./triangle-exclamation.component-CFkBuoq4.js";import"./tokens.style-HBwg9KGc.js";import"./icon.component-D2ESjZu1.js";import"./alert.component-C9G-Musm.js";import"./runtime-nRyYmvPb.js";import"./class-map-BbG83oJ1.js";import"./unwrap-slots-0mQdTIgZ.js";import"./button.component-BBhGaIbV.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-C972XKdt.js";import"./dropdown.component-BjycduEo.js";import"./popover.component-TgRsO7FV.js";import"./cross-small.component-B8o65NhJ.js";import"./chevron-bottom.component-CA5mjfQZ.js";import"./checkmark.component-es9A4tMe.js";import"./circle-check.component-CmY-y4iY.js";import"./chevron-right.component-CDll9CxB.js";import"./datepicker.component-ooK_gycA.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-D3GFPnZy.js";import"./index-B_T7ZP0z.js";import"./dot-grid-one-horizontal.component-DVx5TlZH.js";import"./context-menu.component-BPBlXFI5.js";import"./filter-chips.component-B4AfD4qa.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-Bcq7LVeU.js";import"./segmented-control.component-D0lR0nSE.js";import"./index-BDzHFakD.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
