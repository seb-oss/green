import{j as e}from"./jsx-runtime-GDhDNiBb.js";import{u as o}from"./index-owqzdwHr.js";import"./chunk-HLWAVYOI-DmXXFC43.js";import{ae as i}from"./index-COtUlpMS.js";import"./iframe-Bf3TfRkN.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function t(r){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Form/Angular"}),`
`,e.jsx(n.h1,{id:"using-green-core-form-controls-with-angular",children:"Using Green Core form controls with Angular"}),`
`,e.jsx(n.p,{children:"The form control component from Green Core can be used in Angular, either with just the standard Angular funntionality, or using helper directives from the Green Angular library."}),`
`,e.jsxs(n.p,{children:["Let's look at ",e.jsx(n.code,{children:"<gds-input>"})," as an example in this guide. The same principles apply to all form controls in Green Core."]}),`
`,e.jsx(n.p,{children:"The most basic way to use a form control is to just include it in the template like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-input *nggCoreElement label="My label"></gds-input>
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Ps. Check ",e.jsx(n.a,{href:"/docs/get-started--docs",children:"Get Started"})," for details on how to import and set up the stuff you need."]})}),`
`,e.jsx(n.p,{children:"Of course, this is not very useful by itself. You probably want to bind the control to a datamodel of some kind too."}),`
`,e.jsx(n.h2,{id:"reactive-forms",children:"Reactive forms"}),`
`,e.jsx(n.p,{children:"The recommended way to use form controls in Angular is to use reactive forms. This is a way to define the form in the component code, and bind the form controls to the form model."}),`
`,e.jsxs(n.p,{children:["You bind form controls to the form model by using the ",e.jsx(n.code,{children:"formControlName"})," directive. Here is an example of how to use ",e.jsx(n.code,{children:"<gds-input>"})," in a reactive form:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form [formGroup]="myForm">
  <gds-input
    *nggCoreElement
    label="My label"
    formControlName="myInput">
  </gds-input>
</form>
`})}),`
`,e.jsxs(n.p,{children:["Except, in this case, Angular has no idea what a ",e.jsx(n.code,{children:"<gds-input>"})," is. So this won\\t actually do anything. To get around this, you could add the ",e.jsx(n.code,{children:"ngDefaultControl"})," directive to tell Angular that it can just pretend that ",e.jsx(n.code,{children:"<gds-input>"})," is a regular input element:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form [formGroup]="myForm">
  <gds-input
    *nggCoreElement
    ngDefaultControl
    label="My label"
    formControlName="myInput">
  </gds-input>
</form>
`})}),`
`,e.jsx(n.p,{children:"Now we're talking! The form model get's updated when the input is changed, just like you would expect!"}),`
`,e.jsx(n.h3,{id:"validation",children:"Validation"}),`
`,e.jsx(n.p,{children:"Ok, great! But what about validation?"}),`
`,e.jsx(n.p,{children:"Reactive form validators can be specified either in the form model, or directly in the template. Here is an example of how to add a required validator to the input:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form [formGroup]="myForm">
  <gds-input
    *nggCoreElement
    ngDefaultControl
    label="My label"
    formControlName="myInput"
    required>
  </gds-input>
</form>
`})}),`
`,e.jsx(n.p,{children:"Now the form control will be invalid if the input is empty."}),`
`,e.jsx(n.p,{children:"But hold on. Why is the error state not reflected in the rendered input?"}),`
`,e.jsxs(n.p,{children:["That's because the control needs to have it's ",e.jsx(n.code,{children:"invalid"})," property set to ",e.jsx(n.code,{children:"true"})," for the error state to be shown:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form [formGroup]="myForm">
  <gds-input
    *nggCoreElement
    ngDefaultControl
    label="My label"
    formControlName="myInput"
    required
    [invalid]="myForm.get('myInput').invalid">
  </gds-input>
</form>
`})}),`
`,e.jsx(n.p,{children:"Finally, you may also want to display an actual error message text:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form [formGroup]="myForm">
  <gds-input
    *nggCoreElement
    ngDefaultControl
    label="My label"
    formControlName="myInput"
    required
    [invalid]="myForm.get('myInput').invalid"
    errorMessage="This field is required">
  </gds-input>
</form>
`})}),`
`,e.jsx(n.h3,{id:"using-nggcorerenderer-and-nggcoreformsmodule",children:"Using NggCoreRenderer and NggCoreFormsModule"}),`
`,e.jsx(n.p,{children:"As you can see, even this basic example is starting to get a bit cluttered at this point, with all the different attributes and directives. To make it a bit cleaner, you can use some helper features from Green Angular."}),`
`,e.jsxs(n.p,{children:["First, you can change your module from using the NggCoreWrapperModule to using the NggCoreRendererFactory. This will automatically handle scoping, so that you can get rid of the ",e.jsx(n.code,{children:"*nggCoreElement"})," directive."]}),`
`,e.jsxs(n.p,{children:["Secondly, you can import Green Angular's ",e.jsx(n.code,{children:"NggCoreFormsModule"}),". This will add a custom controlValueAccesor to green core form controls, so that you can use them in reactive forms without the need for the ",e.jsx(n.code,{children:"ngDefaultControl"})," directive. It will also handle the invalid state automatically."]}),`
`,e.jsx(n.p,{children:"With these two changes, the template will look like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form [formGroup]="myForm">
  <gds-input
    label="My label"
    formControlName="myInput"
    required
    errorMessage="This field is required">
  </gds-input>
</form>
`})}),`
`,e.jsx(n.p,{children:"Much cleaner!"}),`
`,e.jsx(n.h2,{id:"template-driven-forms",children:"Template-driven forms"}),`
`,e.jsx(n.p,{children:"TODO"}),`
`,e.jsx(n.h2,{id:"green-core-built-in-validation-features",children:"Green Core built-in validation features"}),`
`,e.jsx(n.p,{children:"TODO"})]})}function f(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{f as default};
