import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-B4ytBV2m.js";import{M as o,C as r,b as l}from"./WithTooltip-SK46ZJ2J-BKHoK_Ea.js";import{S as t}from"./stepper-CUx-jWew.js";import{S as p,D as d,B as c,P as h,a as m}from"./stepper.stories-ClBWqTF8.js";import"./iframe-CR_Org8W.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D-kncHLa.js";import"./helperFunction-Cj5aMlP9.js";const w=s=>e.jsx(t,{...s});function i(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:p}),`
`,e.jsx(n.h1,{id:"stepper",children:"Stepper"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.p,{children:"A stepper makes it easier to input values that are in a narrow range."}),`
`,e.jsx(n.h2,{id:"basic-stepper",children:"Basic stepper"}),`
`,e.jsxs(n.p,{children:["Create a basic Stepper that can be placed within a form by passing a label. The component has a ",e.jsx(n.code,{children:"form-group"})," wrapping to simplify form building."]}),`
`,e.jsx(r,{of:c}),`
`,e.jsxs(n.p,{children:["The Stepper currently only works in ",e.jsx(n.em,{children:"controlled"}),` mode, meaning that you app needs to handle all state.
Here's a basic example:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const [value, setValue] = useState(0)

return (
  <Stepper
    label="Label"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    onIncrease={() => setValue(value + 1)}
    onDecrease={() => setValue(value - 1)}
  />
)
`})}),`
`,e.jsx(n.h2,{id:"primitive-stepper",children:"Primitive stepper"}),`
`,e.jsxs(n.p,{children:["By omitting ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"description"})," and ",e.jsx(n.code,{children:"statusMessage"})," props we don't wrap the component in a ",e.jsx(n.code,{children:"form-group"})," and you can use it more unrestricted."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsxs(n.p,{children:["We can then custom build our ",e.jsx(n.code,{children:"form-group"}),"as needed."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:e.jsx(n.strong,{children:"If using the component in this way you have to handle rendering of error messages yourself"})}),"."]}),`
`,e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"multiple-steppers",className:"mb-5",children:e.jsx(n.p,{children:"How many people will live in your new home?"})}),e.jsxs("div",{id:"multiple-steppers",className:"horizontal",children:[e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("div",{className:"form-info",children:"Adults"}),e.jsx(t,{})]})}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("div",{className:"form-info",children:"Children under 18"}),e.jsx(t,{})]})})]})]}),`
`,e.jsx(n.h2,{id:"validation",children:"Validation"}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(n.p,{children:"Note: Many of these are default HTMLInput props, and may not be relevant for this component."}),`
`,e.jsx(l,{})]})}function C(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{w as Template,C as default};
