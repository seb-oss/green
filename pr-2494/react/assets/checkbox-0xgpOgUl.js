import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-BwKcGpbV.js";import{M as h,C as m,b as p}from"./WithTooltip-SK46ZJ2J-DwhutTAy.js";import{C as r}from"./checkbox-Dru6nwt8.js";import{C as l,D as x}from"./checkbox.stories-D4xMmU8X.js";import{C as b,G as i,a as s,b as c}from"./index-xtG0sMt6.js";import"./iframe-Dn_htULk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-tSageb4e.js";import"./index-Dnl_1eEf.js";import"./helperFunction-Cj5aMlP9.js";import"./id-D3UFNDLZ.js";import"./index-jXCqxWEJ.js";import"./tokens.style-0Zu8bpSk.js";import"./triangle-exclamation.component-BbU1k-wY.js";import"./icon-kZL5gSOa.js";import"./alert.component-hrDQ79CR.js";import"./runtime-nRyYmvPb.js";import"./class-map-CoHbcHyZ.js";import"./unwrap-slots-DjYGAbGz.js";import"./button.component-OG8PkpWh.js";import"./watch-Bh1rs_BK.js";import"./when-BR7zwNJC.js";import"./transitional-styles-CsGCktAT.js";import"./dropdown.component-gVoW_U5-.js";import"./popover.component-BCAP6uZ9.js";import"./cross-small.component-DC23WTg6.js";import"./chevron-bottom.component-D-9aWC2U.js";import"./checkmark.component-GQDQMprw.js";import"./circle-check.component-CXCh5Xx9.js";import"./chevron-right.component-D3Qii65P.js";import"./datepicker.component-BH9KNIlu.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-q-b8wgho.js";import"./index-DPnjumtU.js";import"./dot-grid-one-horizontal.component-D9tWGVsx.js";import"./context-menu.component-Ce-JYO55.js";import"./filter-chips.component-C8yu4lhi.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-BJ7dEwEh.js";import"./segmented-control.component-6xRxN0aF.js";import"./index-B1ol2VoP.js";const ne=({...t})=>e.jsx(r,{...t});function a(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...t.components};return b||n("Core",!1),i||n("Core.GdsAlert",!0),s||n("Core.GdsDiv",!0),c||n("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
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
