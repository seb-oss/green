import{u as s,j as e,M as t}from"./iframe-i12o6XVU.js";import"./preload-helper-Dp1pzeXC.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Guides/Angular"}),`
`,e.jsx(n.h1,{id:"using-green-core-components-with-angular",children:"Using Green Core components with Angular"}),`
`,e.jsxs(n.p,{children:["Angular has support for using web components directly. To enable this support, you need to add ",e.jsx(n.a,{href:"https://angular.dev/guide/components/advanced-configuration#custom-element-schemas",rel:"nofollow",children:e.jsx(n.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})})," to your module or component."]}),`
`,e.jsxs(n.p,{children:["You also need to ensure that you handle Green Core's ",e.jsx(n.a,{href:"/docs/concepts-scoping--docs",children:"element name scoping"}),", and if you use routing, make sure that ",e.jsx(n.code,{children:"hrefs"})," are handled correctly. Read on to learn how to do all of this."]}),`
`,e.jsx(n.h2,{id:"scoping",children:"Scoping"}),`
`,e.jsxs(n.p,{children:["In addition to the schema, you also need a way to handle Green Core's ",e.jsx(n.a,{href:"/docs/concepts-scoping--docs",children:"element name scoping"}),". There are two ways to do this:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use the ",e.jsx(n.code,{children:"NggCoreRenderer"})," custom renderer"]}),e.jsx("br",{}),`
This renderer automatically applies scoping to all Green Core elements in your template.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use the ",e.jsx(n.code,{children:"NggCoreWrapperModule"})," module"]}),e.jsx("br",{}),`
This module provides a directive, `,e.jsx(n.code,{children:"*nggCoreElement"})," that you can use to apply scoping to individual elements in your template."]}),`
`]}),`
`,e.jsx(n.p,{children:"The renderer is the most convenient way to use Green Core components with Angular, but the directive can provide more explicit control when needed, or should the renderer conflict with other custom renderers, or cause any other unexpected side effects."}),`
`,e.jsxs(n.p,{children:["With both the renderer and the directive, you can provide a local reference of the ",e.jsx(n.code,{children:"getScopedTagName"})," function from ",e.jsx(n.code,{children:"@sebgroup/green-core/scoping"}),". By doing that, you ensure that the scope resolver comes from the same package version that you import the components from."]}),`
`,e.jsxs(n.h3,{id:"using-nggcorerenderer",children:["Using ",e.jsx(n.code,{children:"NggCoreRenderer"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"NggCoreRenderer"})," is a custom renderer that automatically applies scoping to all Green Core elements in your template. It does this by overriding the call to ",e.jsx(n.code,{children:"document.createElement()"})," and applying the scoping suffix to the element names before creation. This is the easiest way to use Green Core components in your Angular application."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your module:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { provideCoreRenderer } from '@sebgroup/green-angular/src/lib/shared'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

@NgModule({
    // Provides \`NggCoreRenderer\` as a custom renderer, with a local reference to the \`getScopedTagName\` function
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@sebgroup/green-core/components/button/index.js'
`})}),`
`,e.jsx(n.p,{children:"Now you can use Green Core components in your template like any other elements:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-button (click)="handleEvent($event)">Click me!</gds-button>
`})}),`
`,e.jsx(n.h4,{id:"using-the-custom-renderer-with-angular-animations",children:"Using the custom renderer with Angular animations"}),`
`,e.jsx(n.p,{children:"If you also need to use Angular animations, you need to use a special version of the provider. This is because Angular animations also use a custom renderer under the hood, so we need a bit of specialized initialization to make sure both the Green Core renderer and the Angular animations renderer can coexist and do their things."}),`
`,e.jsxs(n.p,{children:["All you need to do on your end is to use ",e.jsx(n.code,{children:"provideCoreRendererWithAnimations()"})," instead of ",e.jsx(n.code,{children:"provideCoreRenderer()"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideCoreRendererWithAnimations } from '@sebgroup/green-angular/src/lib/shared'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

@NgModule({
    imports: [BrowserAnimationsModule] // You also need to make sure you have imported the \`BrowserAnimationsModule\` module
    providers: [provideCoreRendererWithAnimations(getScopedTagName)],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
`})}),`
`,e.jsxs(n.h3,{id:"using-nggcorewrappermodule",children:["Using ",e.jsx(n.code,{children:"NggCoreWrapperModule"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"NggCoreWrapperModule"})," is a module that provides a directive, ",e.jsx(n.code,{children:"*nggCoreElement"}),", that you can use to apply scoping to individual elements in your template. This can be useful if you need more explicit control over which elements are scoped, or if the ",e.jsx(n.code,{children:"NggCoreRenderer"})," is causing any issues."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your module:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { NggCoreWrapperModule, SCOPE_RESOLVER } from '@sebgroup/green-angular/src/lib/shared'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

@NgModule({
    // Add the NggCoreWrapperModule to the \`imports\` array
    imports: [NggCoreWrapperModule],
    // Optional, but recommended, provide a local reference to the \`getScopedTagName\` function
    providers: [
        {
          provide: SCOPE_RESOLVER,
          useValue: { getScopedTagName },
        },
      ],
    // Add the CUSTOM_ELEMENTS_SCHEMA to the \`schemas\` array
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your component:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@sebgroup/green-core/components/button/index.js'
`})}),`
`,e.jsxs(n.p,{children:["Use the web component in your template with the ",e.jsx(n.code,{children:"*nggCoreElement"})," directive."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your template:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-button *nggCoreElement (click)="handleEvent($event)">Click me!</gds-button>
`})}),`
`,e.jsx(n.h2,{id:"routing",children:"Routing"}),`
`,e.jsxs(n.p,{children:["If you are using Angular's routing, you need to make sure that ",e.jsx(n.code,{children:"hrefs"})," are handled correctly. The ",e.jsx(n.code,{children:"routerLink"})," directive from Angular will apply ",e.jsx(n.code,{children:"href"})," automatically to ",e.jsx(n.code,{children:"a"})," tags, but not to custom elements. To make sure that ",e.jsx(n.code,{children:"href"})," is applied to custom elements, you can use the ",e.jsx(n.code,{children:"nggCoreRouterLink"})," directive from the Green Angular package."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"In your module:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {
  NggCoreRouterLinkModule
} from '@sebgroup/green-angular/src/lib/shared'

@NgModule({
  imports: [NggCoreRouterLinkModule],
})
export class AppModule {}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"In your template:"}),e.jsx("br",{}),`
This assumes you have routes already defined in `,e.jsx(n.code,{children:"routes"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-menu-button
  *ngFor="let route of routes"
  [routerLink]="route.path"
  routerLinkActive
  nggCoreRouterLink
>
  {{ route.data?.name }}
</gds-menu-button>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"nggCoreRouterLink"})," will cause the href attribute to be added regardless of tag name, by telling the ",e.jsx(n.code,{children:"routerLink"})," directive to treat the element as an anchor tag."]}),`
`,e.jsxs(n.p,{children:["In addition, if the element is a ",e.jsx(n.code,{children:"<gds-menu-button>"}),", and Angular's ",e.jsx(n.code,{children:"routerLinkActive"})," directive is also present, the ",e.jsx(n.code,{children:"selected"})," property will automatically be set for active router links."]}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"nggCoreRouterLink"})," directive whenever you use ",e.jsx(n.code,{children:"routerLink"})," with a Green Core component."]})]})}function a(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{a as default};
