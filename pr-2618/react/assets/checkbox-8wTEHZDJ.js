import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-BX88_Slj.js";import{M as h,C as m,b as p}from"./blocks-CdQLTdTL.js";import{C as r}from"./checkbox-D-BrR5xT.js";import{C as l,D as x}from"./checkbox.stories-D0RwFrGZ.js";import{C as b,G as i,a as s,b as c}from"./index-CJOTP-uq.js";import"./iframe-BSXYVhZH.js";import"./index-fKoJm_6Z.js";import"./index-DboBgs4_.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-B5QtNA5X.js";import"./triangle-exclamation.component-860qu7K_.js";import"./tokens.style-BA9E91QJ.js";import"./icon.component-DO354uGi.js";import"./alert.component-DPbHETxB.js";import"./runtime-nRyYmvPb.js";import"./class-map-D51U-So0.js";import"./unwrap-slots-Tc58j8H4.js";import"./button.component-DhXWNn-7.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-ChvUZ0ch.js";import"./dropdown.component-CbmGDxmE.js";import"./popover.component-De48aFIl.js";import"./cross-small.component-C0WH5BgW.js";import"./chevron-bottom.component-BUDuiTr5.js";import"./checkmark.component-DceMbvSB.js";import"./circle-check.component-BqgSGv3G.js";import"./chevron-right.component-B7jMOxvh.js";import"./datepicker.component-O0AwZZb8.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-CSBiVobk.js";import"./index-CPu4lWlM.js";import"./dot-grid-one-horizontal.component-CCBGRx7F.js";import"./context-menu.component-PVt0ziDc.js";import"./filter-chips.component-72Ct5b92.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-C1uHeTig.js";import"./segmented-control.component-Cr804QBi.js";import"./index-RMlFEToD.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
