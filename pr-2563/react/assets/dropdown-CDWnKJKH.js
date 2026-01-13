import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DoSfTK6r.js";import{M as m,C as i,a,b as u}from"./blocks-YWNeQBYD.js";import{D as x}from"./dropdown-Dp_PTxa_.js";import{D as j,a as b,T as f,O as v,M as g,S as w}from"./dropdown.stories-CDQ8YY4W.js";import{C as y,G as l,a as r,b as d}from"./index-Cd3BL2Y3.js";import"./iframe-DYS0wwl6.js";import"./index-PiVaSsYd.js";import"./create-component-CPRSibq9.js";import"./dropdown.component-B0aBD9pb.js";import"./tokens.style-CEj53FLI.js";import"./runtime-nRyYmvPb.js";import"./watch-Bh1rs_BK.js";import"./button.component-CtvYwCLb.js";import"./class-map-DFQxccEl.js";import"./icon.component-IewqXgD1.js";import"./when-BR7zwNJC.js";import"./transitional-styles-AerxwP10.js";import"./popover.component-DDqRcw0S.js";import"./cross-small.component-B7YSS0Up.js";import"./triangle-exclamation.component-DIXE-yhT.js";import"./chevron-bottom.component-K0ZxR76K.js";import"./unwrap-slots-DDD1K7Sv.js";import"./checkmark.component-CT8OUiUd.js";import"./context-menu-Dxa29p9V.js";import"./context-menu.component-DGn8vbwc.js";import"./dot-grid-one-horizontal.component-Dr2uGYme.js";import"./index-CtLU9TUz.js";import"./alert.component-IN9tym-c.js";import"./circle-check.component-DNLg0IRE.js";import"./chevron-right.component-Ct0m0QtA.js";import"./datepicker.component-DW8W7gXo.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-Cn4UpmAR.js";import"./index-C0bueOUO.js";import"./filter-chips.component-BltRdOkh.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-CZLeDOWy.js";import"./segmented-control.component-BrS8_Vq8.js";import"./index-B0uyyt6T.js";import"./triangle-exclamation-CXu53-uK.js";function p(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...n.components};return y||t("Core",!1),l||t("Core.GdsAlert",!0),r||t("Core.GdsDiv",!0),d||t("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:j}),`
`,e.jsx(d,{children:e.jsx(r,{margin:"xl 0",children:e.jsxs(l,{variant:"notice",children:[e.jsx(o.strong,{children:"Note:"})," This version of Dropdown is deprecated! Please use the ",e.jsx(o.a,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-dropdown--docs",rel:"nofollow",children:"web component from Green Core"})," instead."]})})}),`
`,e.jsx(o.h1,{id:"dropdown",children:"Dropdown"}),`
`,e.jsx(o.p,{children:"Dropdown Component"}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(o.h2,{id:"options",children:"Options"}),`
`,e.jsx(o.p,{children:"The dropdown options should be provided as an array of objects with label and value. When a user chooses an option the value will be selected and emitted to onChange."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-typescript",children:`const options = [
  { label: 'Select', value: null },
  { label: 'Tacos', value: 'tacos' },
  { label: 'Pizza', value: 'pizza' },
  { label: 'Sushi', value: 'sushi' },
]
`})}),`
`,e.jsxs(o.p,{children:["Set the ",e.jsx(o.code,{children:"value"})," prop to set the selected option/options. In multiple select mode, the value should be an array of values."]}),`
`,e.jsx(o.p,{children:"By default, the dropdown will look for a label and value pair for the data. The following inputs can be set to alter the options if neccesary."}),`
`,e.jsx(a,{children:`
| Input (attribute) | Description                                                          | Default |
| :---------------- | :------------------------------------------------------------------- | :------ |
| useValue          | Which key to use as value.                                           | \`value\` |
| display           | Which key to use as display value when selected and in options list. | \`label\` |
`}),`
`,e.jsx(o.h2,{id:"value-object",children:"Value Object"}),`
`,e.jsxs(o.p,{children:["Dropdown option values can even be an object, but note that it requires a ",e.jsx(o.code,{children:"compareWith"})," function to uniquely identify each object. Eg:"]}),`
`,e.jsx(x,{label:"Complex values",options:[{label:"Tacos",value:{id:"tacos",kitchen:"mexican"}},{label:"Pizza",value:{id:"pizza",kitchen:"italian"}},{label:"Sushi",value:{id:"sushi",kitchen:"japanese"}}],compareWith:(s,h)=>s.id===h.id,onChange:s=>console.log("OnChange",s)}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Dropdown
  label="Complex values"
  options={[
    { label: 'Tacos', value: { id: 'tacos', kitchen: 'mexican' } },
    { label: 'Pizza', value: { id: 'pizza', kitchen: 'italian' } },
    { label: 'Sushi', value: { id: 'sushi', kitchen: 'japanese' } },
  ]}
  compareWith={(meal1, meal2) => meal1.id === meal2.id}
  onChange={(value) => console.log('OnChange', value)}
/>
`})}),`
`,e.jsx(o.h2,{id:"texts-and-placeholder",children:"Texts and placeholder"}),`
`,e.jsxs(o.p,{children:["Custom texts can be set using the ",e.jsx(o.code,{children:"texts"})," prop which takes an object with the following keys:"]}),`
`,e.jsx(a,{children:"\n| Key           | Type     | Description                                 |\n| :------------ | :------- | :------------------------------------------ |\n| `placeholder` | `string` | Text to display when no option is selected. |\n"}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(o.h2,{id:"option-headings",children:"Option headings"}),`
`,e.jsxs(o.p,{children:["You can add an option heading by adding the ",e.jsx(o.code,{children:"heading"})," property to the to the option object and set it to ",e.jsx(o.code,{children:"true"}),"."]}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(o.h2,{id:"multi-select",children:"Multi select"}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(o.h2,{id:"small-dropdown",children:"Small dropdown"}),`
`,e.jsxs(o.p,{children:["Size can be controlled using the ",e.jsx(o.code,{children:"size"})," prop. The default size is ",e.jsx(o.code,{children:"medium"}),"."]}),`
`,e.jsxs(o.p,{children:["Optionally, the label can also be hidden using the ",e.jsx(o.code,{children:"hideLabel"})," prop."]}),`
`,e.jsx(i,{of:w}),`
`,e.jsx(o.h2,{id:"available-props",children:"Available props"}),`
`,e.jsx(u,{})]})}function pe(n={}){const{wrapper:o}={...c(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(p,{...n})}):p(n)}function t(n,o){throw new Error("Expected "+(o?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{pe as default};
