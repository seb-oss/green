import{u as s,j as e,M as t}from"./iframe-Dbe_U8av.js";import"./preload-helper-Dp1pzeXC.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Guides/Angular"}),`
`,e.jsx(n.h1,{id:"using-green-core-components-with-angular",children:"Using Green Core components with Angular"}),`
`,e.jsx(n.p,{children:"There are a few things you need to know about and set up in order to use the Green Core web components with Angular. This document covers how to use the components, handle element name scoping, form controls and how to integrate with Angulars router. It is recommended to at least skim through this document before you begin."}),`
`,e.jsx(n.h2,{id:"wrappers-",children:"Wrappers 🌯"}),`
`,e.jsxs(n.p,{children:["Angular has support for using web components directly by using ",e.jsx(n.a,{href:"https://angular.dev/guide/components/advanced-configuration#custom-element-schemas",rel:"nofollow",children:e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})})," in your module or component. However, this also disables type-checking for any non-angular components in your templates, which can lead to a frustrating developer experience."]}),`
`,e.jsxs(n.p,{children:["To improve this situation, Green provides a wrapper library for Angular. To use it, install ",e.jsx(n.code,{children:"@sebgroup/green-core-ng"})," instead of ",e.jsx(n.code,{children:"@sebgroup/green-core"})," in your project. The wrapper library is automatically built, versioned and published alongside Core, and has ",e.jsx(n.code,{children:"@sebgroup/green-core"})," defined as a sub-dependency, so you typically only need to have ",e.jsx(n.code,{children:"@sebgroup/green-core-ng"})," as a direct dependency. Since the wrapper components are tightly mapped to their underlying counterparts, it's important that the versions of these two packages are always in sync in your project."]}),`
`,e.jsx(n.h2,{id:"scoping",children:"Scoping"}),`
`,e.jsxs(n.p,{children:["You also need to handle Green Core's ",e.jsx(n.a,{href:"/docs/concepts-scoping--docs",children:"element name scoping"}),". There are two ways to do this:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use the ",e.jsx(n.code,{children:"GdsCoreRenderer"})," custom renderer"]})," (preferred)",e.jsx("br",{}),`
This renderer automatically applies scoping to all Green Core elements in your template.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use the ",e.jsx(n.code,{children:"GdsCoreWrapperModule"})," module"]}),e.jsx("br",{}),`
This module provides a directive, `,e.jsx(n.code,{children:"*gdsCoreElement"})," that you can use to apply scoping to individual elements in your template."]}),`
`]}),`
`,e.jsx(n.p,{children:"The renderer is the most convenient way to use Green Core components with Angular, but the directive can provide more explicit control when needed, or should the renderer conflict with other custom renderers, or cause any other unexpected side effects."}),`
`,e.jsxs(n.p,{children:["With both the renderer and the directive, you can provide a local reference of the ",e.jsx(n.code,{children:"getScopedTagName"})," function from ",e.jsx(n.code,{children:"@sebgroup/green-core/scoping"}),". By doing that, you ensure that the scope resolver comes from the same package version that you import the components from."]}),`
`,e.jsxs(n.h3,{id:"using-gdscorerenderer",children:["Using ",e.jsx(n.code,{children:"GdsCoreRenderer"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"GdsCoreRenderer"})," is a custom renderer that automatically applies scoping to all Green Core elements in your template. It does this by overriding the call to ",e.jsx(n.code,{children:"document.createElement()"})," and applying the scoping suffix to the element names before creation. This is the easiest way to use Green Core components in your Angular application."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your module:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { provideCoreRenderer } from '@sebgroup/green-core-ng'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

@NgModule({
    // Provides \`GdsCoreRenderer\` as a custom renderer, with a local reference to the \`getScopedTagName\` function
    providers: [provideCoreRenderer(getScopedTagName)],
    // CUSTOM_ELEMENTS_SCHEMA is still needed
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
`})}),`
`,e.jsx(n.p,{children:"Or, if you are only using standalone components, you can either create a root app module and provide the renderer there, or you can provide it in bootstrapping:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// app.config.ts
const appConfig: ApplicationConfig = {
  providers: [...other providers..., provideCoreRenderer(getScopedTagName)],
};

// main.ts
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your component:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Import standalone wrapper component
import { GdsButtonComponent } from '@sebgroup/green-core-ng'

@Component({
    standalone: true,
    imports: [GdsButtonComponent],
})
export class MyComponent {}
`})}),`
`,e.jsx(n.p,{children:"Or, you can get everything from a module:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { GreenCoreNgModule } from '@sebgroup/green-core-ng'

@Component({
    standalone: true,
    imports: [GreenCoreNgModule],
})
export class MyComponent {}
`})}),`
`,e.jsx(n.p,{children:"Now you can use Green Core components in your template like any other elements, and intellisense and type checking should work as expected."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-button (click)="handleEvent($event)">Click me!</gds-button>
`})}),`
`,e.jsx(n.h4,{id:"using-the-custom-renderer-with-angular-animations",children:"Using the custom renderer with Angular animations"}),`
`,e.jsx(n.p,{children:"If you also need to use Angular animations, you need to use a special version of the provider. This is because Angular animations also use a custom renderer under the hood, so we need a bit of specialized initialization to make sure both the Green Core renderer and the Angular animations renderer can coexist and do their things."}),`
`,e.jsxs(n.p,{children:["All you need to do on your end is to use ",e.jsx(n.code,{children:"provideCoreRendererWithAnimations()"})," instead of ",e.jsx(n.code,{children:"provideCoreRenderer()"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideCoreRendererWithAnimations } from '@sebgroup/green-core-ng'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

@NgModule({
    imports: [BrowserAnimationsModule] // You also need to make sure you have imported the \`BrowserAnimationsModule\` module
    providers: [provideCoreRendererWithAnimations(getScopedTagName)],
})
`})}),`
`,e.jsxs(n.h3,{id:"using-gdscorewrappermodule",children:["Using ",e.jsx(n.code,{children:"GdsCoreWrapperModule"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"GdsCoreWrapperModule"})," is a module that provides a directive, ",e.jsx(n.code,{children:"*gdsCoreElement"}),", that you can use to apply scoping to individual elements in your template. This can be useful if you need more explicit control over which elements are scoped, or if the ",e.jsx(n.code,{children:"GdsCoreRenderer"})," is causing any issues."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your module:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { GdsCoreWrapperModule, SCOPE_RESOLVER } from '@sebgroup/green-angular/src/lib/shared'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

@NgModule({
    // Add the GdsCoreWrapperModule to the \`imports\` array
    imports: [GdsCoreWrapperModule],
    // Optional, but recommended, provide a local reference to the \`getScopedTagName\` function
    providers: [
        {
          provide: SCOPE_RESOLVER,
          useValue: { getScopedTagName },
        },
      ],
})
`})}),`
`,e.jsxs(n.p,{children:["Use the web component in your template with the ",e.jsx(n.code,{children:"*gdsCoreElement"})," directive."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your template:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-button *gdsCoreElement (click)="handleEvent($event)">Click me!</gds-button>
`})}),`
`,e.jsx(n.h2,{id:"form-controls",children:"Form controls"}),`
`,e.jsxs(n.p,{children:["The wrappers for Green Core form controls, such as ",e.jsx(n.code,{children:"<gds-input>"}),", ",e.jsx(n.code,{children:"<gds-select>"}),", and ",e.jsx(n.code,{children:"<gds-checkbox>"}),", implement Angular's ",e.jsx(n.code,{children:"ControlValueAccessor"})," interface. This means that they can be used seamlessly with Angular forms, both template-driven and reactive forms. No additional directives or configuration is needed."]}),`
`,e.jsx(n.h2,{id:"routing",children:"Routing"}),`
`,e.jsxs(n.p,{children:["The wrapper library also provides support for Angular's ",e.jsx(n.code,{children:"RouterLink"})," directive. This allows you to use Green Core link components, such as ",e.jsx(n.code,{children:"<gds-link>"}),", ",e.jsx(n.code,{children:"<gds-menu-button>"}),", and ",e.jsx(n.code,{children:"<gds-breadcrumb>"}),", with Angular's router."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"In your template:"}),e.jsx("br",{}),`
This assumes you have routes already defined in `,e.jsx(n.code,{children:"routes"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-menu-button
  *ngFor="let route of routes"
  [routerLink]="route.path"
  routerLinkActive
>
  {{ route.data?.name }}
</gds-menu-button>
`})}),`
`,e.jsxs(n.p,{children:["This should work as expected, with the ",e.jsx(n.code,{children:"href"})," attribute being set automatically based on the ",e.jsx(n.code,{children:"routerLink"})," value, and the ",e.jsx(n.code,{children:"selected"})," property being set based on the active route."]})]})}function a(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{a as default};
