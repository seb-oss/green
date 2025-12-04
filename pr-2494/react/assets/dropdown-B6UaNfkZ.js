import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-fbaLh2VC.js";import{M as m,C as i,a,b as u}from"./WithTooltip-SK46ZJ2J-Bq6-owqb.js";import{D as x}from"./dropdown-DGQJN_cJ.js";import{D as j,a as b,T as f,O as v,M as g,S as w}from"./dropdown.stories-CVfN60zQ.js";import{C as y,G as l,a as r,b as d}from"./index-B6tGHMLA.js";import"./iframe-QAiYAu7-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BcU5wZFA.js";import"./create-component-CPRSibq9.js";import"./dropdown.component-2z5VwQYz.js";import"./tokens.style-Ncxh0kol.js";import"./runtime-nRyYmvPb.js";import"./watch-Bh1rs_BK.js";import"./button.component-DFWW2dHH.js";import"./class-map-C_oZ4Z3U.js";import"./icon-CrVP6dfj.js";import"./when-BR7zwNJC.js";import"./transitional-styles-BZFv1c0z.js";import"./popover.component-Bjc4TXUa.js";import"./cross-small.component-vEIn4DuM.js";import"./triangle-exclamation.component-LRf1j3tK.js";import"./chevron-bottom.component-Bi0z_1ez.js";import"./unwrap-slots-CsqzZwf7.js";import"./checkmark.component-Br76-Pig.js";import"./context-menu-CXWyiM84.js";import"./context-menu.component-B7xCrnjM.js";import"./dot-grid-one-horizontal.component-DCE5ltWn.js";import"./index-lWHY7NR2.js";import"./alert.component-DAXLlyLO.js";import"./circle-check.component-CUB07vOr.js";import"./chevron-right.component-BzPiOtF_.js";import"./datepicker.component-pn5HmQY7.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-ln9Vnpnt.js";import"./index-CDmVktbx.js";import"./filter-chips.component-wyzOJi2f.js";import"./resize-observer-B9k8v2TZ.js";import"./grouped-list.component-Dhjo986p.js";import"./segmented-control.component-CSL2WgaW.js";import"./index-C5_UGhGE.js";function p(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...n.components};return y||t("Core",!1),l||t("Core.GdsAlert",!0),r||t("Core.GdsDiv",!0),d||t("Core.GdsTheme",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:j}),`
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
