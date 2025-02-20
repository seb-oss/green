import{j as e}from"./jsx-runtime-CbpSgkuz.js";import{u as i}from"./index-VBAam7Od.js";import"./chunk-HLWAVYOI-JPCOSYh-.js";import{ae as o}from"./index-C0KTpcTv.js";import"./iframe-CKT8pGps.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";function t(s){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Concepts/Declarative layout"}),`
`,e.jsx(n.h1,{id:"declarative-layout",children:"Declarative layout"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The declarative layout system is still in beta, and API may change in breaking ways."]}),`
`,e.jsx(n.h2,{id:"why",children:"Why?"}),`
`,e.jsx(n.p,{children:`One of the main reasons we are building Green Core using web components is style encapsulation. The use
of Shadow DOM greatly reduces the risk of styling conflicts in a micro-frontend architecture environment.`}),`
`,e.jsx(n.p,{children:`This is great for styling the components themselves, but what about the rest of the stuff in an application?
Things like margins, paddings, and grid systems also need styling. These sorts of things are usually handled
by utility classes in traditional CSS frameworks. Utility classes are good, because you don't need to think
about class names for everything. It allows you to quickly build out a responsive layout without writing
a lot of CSS, and it also makes it clear from looking at the markup what the layout is supposed to be.`}),`
`,e.jsx(n.p,{children:`The main problem with utility classes, in our case, is that they are, in fact, still CSS classes. And CSS classes
can, and will, lead to conflicts.`}),`
`,e.jsx(n.p,{children:`But, you may ask, if everyone just agrees to use Tailwind or Bootstrap, or some other available
library, won't that solve the problem? Well, it may, initially. But as is always the case with libraries,
they evolve over time. They have to, because CSS evolves over time. And so it inevitably leads to a version
lock-in effect. Because if the next version of Bootstrap have any breaking changes, it means that every
micro-frontend needs to upgrade at the same time to avoid conflicts. This is not a good situation to be in,
because coordinating upgrades across multiple teams and products is hard, bordering on impossible.`}),`
`,e.jsx(n.p,{children:`And even if we could solve the lock-in problem, there is still the issue of the size of the CSS payload. Any utility
framework will have a lot of utility classes, and if you only use a few of them, you may be shipping a lot of
unused CSS to the client. In a single application context, this is typically not that big of an issue, because there
are ways to tree-shake the classes and keep only the used ones. This (amongst other things) is what the Tailwind
compiler does for you. But in a micro-frontend environment, it is often not possible to determine ahead of time which
classes are going to be used in a given document, since it may consist of multiple independently developed parts.`}),`
`,e.jsx(n.p,{children:`The declarative layout system in Green Core is an attempt to solve these problems in a way that let's us have the
cake and eat it too.`}),`
`,e.jsx(n.h2,{id:"how",children:"How?"}),`
`,e.jsxs(n.p,{children:[`Instead of utility classes, the declarative layout system generates CSS on the fly and injects into the
shadow roots of components. It does this using something we call `,e.jsx(n.code,{children:"style expression properties"}),`. These properties
are used to inform the components what CSS it needs to generate, and that CSS is then injected into the Shadow DOM
of the component.`]}),`
`,e.jsx(n.p,{children:"The system introduces a set of layout oriented components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<gds-container>"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<gds-grid>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<gds-flex>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<gds-card>"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["The hierechy in the list here is intentional. ",e.jsx(n.code,{children:"<gds-container>"}),` is the base component, containing most of the properties,
while the other ones extends this base with specific specializations.`]}),`
`,e.jsx(n.p,{children:"Style expression properties allows you to write responsive styles in a compact and declarative way. Here is an example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:'<!-- Here, we\'re setting the default padding to `xs`, but increasing it to `m` in `l` viewports -->\n<gds-container padding="xs; l {m}">\n  <!-- Similarly, here we default to 1 column, increase to 2 columns in `m` viewpors, and 4 columns in `xl` viewports -->\n  <gds-grid columns="1; m {2}; xl {4}">\n    <!-- Any HTML element can go as children -->\n  </gds-grid>\n</gds-container>\n'})}),`
`,e.jsx(n.p,{children:"This is a very simple example, but it should give you an idea of how the style expression properties work."}),`
`,e.jsx(n.p,{children:"Media queries can also be expressed as CSS units and as ranges, for example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:">m, <xl { ... }"})," - Above ",e.jsx(n.code,{children:"m"}),", below ",e.jsx(n.code,{children:"xl"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:">500px, <1000px { ... }"})," - Above 500px, below 1000px"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`The value that goes in the media query is usually resolved to a css variable. In the padding example, it would
resolve to `,e.jsx(n.code,{children:"var(--gds-space-m)"}),`. This is then transformed into a CSS property, typically of the same name as the
property used on the component. So, here it would be `,e.jsx(n.code,{children:"padding: var(--gds-space-m)"}),`. That means you can also use
regular CSS shorthand patterns, like `,e.jsx(n.code,{children:"padding: 1em 2em 3em 4em"})," by adding more values. They will each resolve to",e.jsx(n.br,{}),`
`,"a CSS variable. For example: ",e.jsx(n.code,{children:'padding="xs; l {m xl m xl}"'})]}),`
`,e.jsxs(n.p,{children:["When no media query is specified, it is the same as setting the breakpoint to 0. So, ",e.jsx(n.code,{children:'padding="0 {m}"'}),` is equivalent
to `,e.jsx(n.code,{children:'padding="m"'}),"."]}),`
`,e.jsx(n.h3,{id:"pseudo-selectors",children:"Pseudo selectors"}),`
`,e.jsx(n.p,{children:"Psudeo selectors can be added to any media query as a separate value sequence. For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-container padding="xs; hover: s; l { s; hover: m }">
  <!-- Any HTML element can go as children -->
</gds-container>
`})}),`
`,e.jsxs(n.p,{children:["In the above example, the padding will be ",e.jsx(n.code,{children:"xs"})," by default, ",e.jsx(n.code,{children:"s"})," on hover, ",e.jsx(n.code,{children:"m"})," in ",e.jsx(n.code,{children:"l"})," viewports, and ",e.jsx(n.code,{children:"m"})," on hover in ",e.jsx(n.code,{children:"l"})," viewports."]}),`
`,e.jsx(n.p,{children:"For more examples, see the stories under Components/Layout."}),`
`,e.jsx(n.h2,{id:"conslusion",children:"Conslusion"}),`
`,e.jsx(n.p,{children:`In conclusion, this system solves the conflict issue by injecting the CSS directly into the shadow DOM of the component,
and it solves the payload size issue by generating the CSS that is needed on the fly on the client side. It also solves
the version lock-in by using the same version scoping mechanism as the rest of the components in Green Core.`}),`
`,e.jsx(n.p,{children:`Internally, the style expression properties are using a custom property decorator which can be configured for different
needs on a per-property basis. This keeps the code size in the implementation to a minumum, while still allowing for a
sufficient level of flexibility.`}),`
`,e.jsx(n.h2,{id:"work-in-progress",children:"Work in progress"}),`
`,e.jsx(n.p,{children:`The declarative layout system is still in beta, and may seem both limited and a bit confusing at this point. There is
still quite a bit that needs to be irnoed out before it can be considered stable. But we are working on it, and we
welcome any feedback you may have!`}),`
`,e.jsx(n.p,{children:`One thing to note is that this system is not intended to be a complete CSS replacement at the same level as something
like Tailwind. It is more geared towards filling the most common layout and positioning needs for a typical micro-frontend
application, in a way that makes it easy to follow the guidelines of the design system.`}),`
`,e.jsx(n.p,{children:"Other, more specific, styling needs will still need to be handled by regular CSS."})]})}function x(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
