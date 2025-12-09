import{u as a,j as e,M as r}from"./iframe-CsVaiW1A.js";import"./preload-helper-Dp1pzeXC.js";function o(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Form/React"}),`
`,e.jsx(n.h1,{id:"using-green-core-form-controls-with-react",children:"Using Green Core form controls with React"}),`
`,e.jsx(n.p,{children:"Form control components from Green Core can be used in React using Lit wrappers. For basic validation needs, built-in validators can be used."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If you want to look at a complete example, you can check out ",e.jsx(n.a,{href:"https://github.com/seb-oss/green/blob/main/apps/react-lib-dev/src/app/green-core-form.tsx",rel:"nofollow",children:"this code"})," from our React testing app."]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic example"}),`
`,e.jsx(n.p,{children:"Let's look at a basic example using the input component."}),`
`,e.jsx(n.p,{children:"First we need to import a few things:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import React, { useState } from 'react'

// We'll use this function from @react/lit to create a React wrapper for the web component
import { createComponent } from '@lit/react'

// Then, we need this to get the correctly scoped element name when creating the wrapper
import { getScopedTagName } from '@sebgroup/green-core/scoping'

// Finally, we also need to import the \`gds-input\` component itself
import { GdsInput } from '@sebgroup/green-core/components/input/index.js'
`})}),`
`,e.jsx(n.p,{children:"Now we can create the wrapper."}),`
`,e.jsx(n.p,{children:"At some point in the future, the Green React library will have predefined wrappers to import, and at that point, you would only need to do this step if you want to customize the wrapper in some way. but for now, you need to create the wrapper yourself."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// CoreInput will be the name of the React component. This can be anything you choose.
const CoreInput = createComponent({
  // Here we use the \`getScopedTagName\` function to get the correctly scoped element name.
  // It will return something along the lines of \`gds-input-ac5d3ef\`, where the suffix is a
  // unique identifier based on the version of Green Core.
  tagName: getScopedTagName('gds-input'),

  // Here we supply the componet class that we want to wrap
  elementClass: GdsInput,

  // And finally we need to map some events to React callbacks
  events: {
    // Mapping the input event to the onChange callback will make the component behave
    // like a normal input element in React
    onChange: 'input',
  },
  react: React,
})
`})}),`
`,e.jsx(n.p,{children:"Now we can use the wrapper in our React component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function MyComponent() {
  const [value, setValue] = useState('')

  return (
    <CoreInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="My label"
    />
  )
}
`})}),`
`,e.jsx(n.h2,{id:"validation",children:"Validation"}),`
`,e.jsxs(n.p,{children:["For basic validation needs, you can use the built-in validation features of the Green Core components. In this example, we'll make the ",e.jsx(n.code,{children:"gds-input"})," control required."]}),`
`,e.jsx(n.p,{children:"First, we need to set up a validator that checks if the input is empty:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {
  GdsFormControlElement,
  GdsValidator,
} from '@sebgroup/green-core/components/form/form-control'

const requiredValidator: GdsValidator = {
  // This function will be called when the control is validated, and should return a
  // tuple with an updated validity state and an error message than will be displayed
  // if the control is invalid
  validate: (el: GdsFormControlElement) => {
    if (!el.value)
      return [
        { ...el.validity, valid: false, customError: true },
        'This field is required',
      ]
    return
  },
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The validity state object used above is a standard ValidityState object. You can ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ValidityState",rel:"nofollow",children:"read about it on MDN"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Now that we have a validator, let's assign it to the ",e.jsx(n.code,{children:"gds-input"})," control:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`function MyComponent() {
  const [value, setValue] = useState('')
  const [validity, setValidity] = useState({})

  return (
    <CoreInput
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        setValidity(e.target.validity.valid);
        // ^ here we can use the native validity state from the element.
        // This will be updated by the validator behind the scenes
      }}
      label="My label"
      validator={requiredValidator}
    />
  )
}
`})}),`
`,e.jsx(n.p,{children:"That's it!"}),`
`,e.jsxs(n.p,{children:["This is a very simple example, and in reality you'd probably want to set up a state model for the whole form rather than just an individual control, but this should give you an idea of how to work with Greens framework agnostic form controls in React. A more complete example is available ",e.jsx(n.a,{href:"https://github.com/seb-oss/green/blob/main/apps/react-lib-dev/src/app/green-core-form.tsx",rel:"nofollow",children:"here"}),"."]})]})}function l(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{l as default};
