import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DFtB3ODn.js";import{M as h,C as m,b as p}from"./blocks-CL6gPPkl.js";import{C as r}from"./checkbox-CdBqbGoB.js";import{C as l,D as x}from"./checkbox.stories-DrzcGOLm.js";import{C as b,G as i,a as s,b as c}from"./index-fsp2jETf.js";import"./iframe-DoovJds3.js";import"./index-QLDR1iRA.js";import"./index-DW0d8f8x.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-tXjeSACO.js";import"./triangle-exclamation.component-stSeI6CS.js";import"./tokens.style-CZwiTwPq.js";import"./icon.component-Dzi55V2m.js";import"./alert.component-B-UoPf4-.js";import"./runtime-nRyYmvPb.js";import"./class-map-DHhHo6bH.js";import"./unwrap-slots-DGJvZTmx.js";import"./button.component-Dbv-Va2z.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-B4argvb7.js";import"./dropdown.component-rsB-S79U.js";import"./popover.component-YWZYiCIt.js";import"./cross-small.component-CZEegwur.js";import"./chevron-bottom.component-5j5GX0kU.js";import"./checkmark.component-DQ_Tyx5t.js";import"./circle-check.component-DiZDIJsL.js";import"./chevron-right.component-Bzh3Qg-u.js";import"./datepicker.component-CwjpukzO.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-DIUApxzc.js";import"./index-D1x-yLiA.js";import"./dot-grid-one-horizontal.component-D4ki081T.js";import"./context-menu.component-z8RyTMfU.js";import"./filter-chips.component-Cnjwjwmx.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BHaLUA_k.js";import"./segmented-control.component-6m7h9pS2.js";import"./index-BXchmaDx.js";const re=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
