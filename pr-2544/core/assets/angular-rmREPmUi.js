import{u as t,j as e,M as s}from"./iframe-CcFU4emh.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Form/Angular"}),`
`,e.jsx(n.h1,{id:"using-green-core-form-controls-with-angular",children:"Using Green Core form controls with Angular"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"This document is obsolete, form controls works out of the box when using Core NG wrappers"})}),`
`,e.jsxs(n.p,{children:["Check out the ",e.jsx(n.a,{href:"/docs/guides-angular--docs",children:"Angular guide"})," for more information."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"The form control components from Green Core can be used in Angular, either with just the standard Angular functionality, or using helper directives from the Green Angular library."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If you want to look at a complete example, you can check out ",e.jsx(n.a,{href:"https://github.com/seb-oss/green/tree/main/apps/angular-lib-dev/src/app/form",rel:"nofollow",children:"this code"})," from our Angular testing app."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Let's look at ",e.jsx(n.code,{children:"<gds-input>"})," as an example in this guide. The same principles apply to all form controls in Green Core."]}),`
`,e.jsx(n.p,{children:"The most basic way to use a form control is to just include it in the template like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-input *nggCoreElement label="My label"></gds-input>
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Ps. Check ",e.jsx(n.a,{href:"/docs/get-started--docs",children:"Get Started"})," for details on how to import and set up the stuff you need."]})}),`
`,e.jsx(n.p,{children:"Of course, this is not very useful by itself. You probably want to bind the control to a datamodel of some kind too."}),`
`,e.jsx(n.h2,{id:"reactive-forms",children:"Reactive forms"}),`
`,e.jsx(n.p,{children:"The recommended way to use form controls in Angular is to use reactive forms. This is a way to define the form in code, and bind the form controls to the form model."}),`
`,e.jsxs(n.p,{children:["You bind form controls to the form model by using the ",e.jsx(n.code,{children:"formControlName"})," directive. Here is an example of how to use ",e.jsx(n.code,{children:"<gds-input>"})," in a reactive form:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form [formGroup]="myForm">
  <gds-input
    *nggCoreElement
    ngDefaultControl
    label="My label"
    formControlName="myInput">
  </gds-input>
</form>
`})}),`
`,e.jsxs(n.p,{children:["Notice the ",e.jsx(n.code,{children:"ngDefaultControl"})," directive. This is there to convinde angular that this is indeed an input element, since Angular has no idea what an ",e.jsx(n.code,{children:"<gds-input>"})," is otherwise."]}),`
`,e.jsx(n.h3,{id:"validation",children:"Validation"}),`
`,e.jsx(n.p,{children:"Ok, great! But what about validation?"}),`
`,e.jsx(n.p,{children:"Reactive form validators can be specified either in the form model, or directly in the template. Here is an example of how to add a required validator to the input:"}),`
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
`,e.jsxs(n.p,{children:["In this example, the ",e.jsx(n.code,{children:"required"}),` attribute, which is a standard HTML attribute, will inform reactive forms to add a required validator to the form control.
Then, to actually change the style of the control to match the validity state, we add the boolean `,e.jsx(n.code,{children:"invalid"})," attribute. This is a custom attribute in the ",e.jsx(n.code,{children:"<gds-input>"}),` component used to control it's internal validity state and associated styling.
Finally, the `,e.jsx(n.code,{children:"errorMessage"})," attribute, another custom attribute, is used to control the error message text that renderls below the input when the control is invalid."]}),`
`,e.jsx(n.h3,{id:"using-nggcorerenderer-and-nggcoreformsmodule",children:"Using NggCoreRenderer and NggCoreFormsModule"}),`
`,e.jsx(n.p,{children:"As you can see, even this basic example is starting to look a bit cluttered, with all the different attributes and directives. To make it a bit cleaner, you can use some helper features from Green Angular."}),`
`,e.jsxs(n.p,{children:["First, you can change your module from using the ",e.jsx(n.code,{children:"NggCoreWrapperModule"})," to using the ",e.jsx(n.code,{children:"NggCoreRendererFactory"}),". This will automatically handle scoping, so that you can get rid of the ",e.jsx(n.code,{children:"*nggCoreElement"})," directive."]}),`
`,e.jsxs(n.p,{children:["Secondly, you can import Green Angular's ",e.jsx(n.code,{children:"NggCoreFormsModule"}),". This will add a custom controlValueAccesor to green core form controls, so that you can use them in reactive forms without the need for the ",e.jsx(n.code,{children:"ngDefaultControl"})," directive. It will also handle the invalid state automatically."]}),`
`,e.jsx(n.p,{children:"In your module:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`@NgModule({
  declarations: [MyFormComponent],
  imports: [
    NggCoreFormsModule, // This allows us to use Green Core form controls just like native HTML form controls
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      // By providing our custom renderer factory, we can use <gds-*> elements without any extra directives.
      // The NggCoreRenderer will handle element name scoping automatically.
      provide: RendererFactory2,
      useClass: NggCoreRendererFactory,
    },
  ],
})
export class MyFormModule {}
`})}),`
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
`,e.jsx(n.p,{children:"Much cleaner!"})]})}function l(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{l as default};
