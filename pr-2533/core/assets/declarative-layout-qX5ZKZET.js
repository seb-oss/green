import{u as t,j as e,M as o}from"./iframe-BoTLJnrP.js";import"./preload-helper-Dp1pzeXC.js";function i(s){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Concepts/Declarative layout"}),`
`,e.jsx(n.h1,{id:"declarative-layout",children:"Declarative layout"}),`
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
are used to inform the component what CSS it needs to generate and inject into its Shadow DOM.`]}),`
`,e.jsx(n.p,{children:"The system introduces a set of layout oriented components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<gds-div>"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<gds-grid>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<gds-flex>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<gds-card>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"<gds-text>"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["The hierechy in the list here is intentional. ",e.jsx(n.code,{children:"<gds-div>"}),` is the base component, providing all the base properties,
while the other ones extend this base with specific defaults, and in some cases, additional properties.`]}),`
`,e.jsxs(n.p,{children:[`Additionally, some style expression properties are available on other components, where it makes sense. For example,
`,e.jsx(n.code,{children:"<gds-button>"}),` supports horizontal sizing properties, margin properties and flex/grid child items properties. Check
the API table for each component to see which properties are available. They are listed under a separate section in
the API table.`]}),`
`,e.jsx(n.h3,{id:"responsiveness",children:"Responsiveness"}),`
`,e.jsx(n.p,{children:"Style expression properties allows you to write responsive styles in a compact and declarative way. Here is an example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:'<!-- Here, we\'re setting the default padding to `xs`, but increasing it to `m` in `l` viewports -->\n<gds-div padding="xs; l {m}">\n  <!-- Similarly, here we default to 1 column, increase to 2 columns in `m` viewpors, and 4 columns in `xl` viewports -->\n  <gds-grid columns="1; m {2}; xl {4}">\n    <!-- Any HTML element can go as children -->\n  </gds-grid>\n</gds-div>\n'})}),`
`,e.jsx(n.p,{children:"This is a very simple example, but it should give you an idea of how the style expression properties work."}),`
`,e.jsx(n.p,{children:"Media queries can also be expressed as CSS units and as ranges, for example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:">m, <xl { ... }"})," - Above ",e.jsx(n.code,{children:"m"}),", below ",e.jsx(n.code,{children:"xl"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:">500px, <1000px { ... }"})," - Above 500px, below 1000px"]}),`
`]}),`
`,e.jsxs(n.p,{children:[`The value that goes in the media query is usually resolved to a css variable. In the padding example, it would
resolve to `,e.jsx(n.code,{children:"var(--gds-sys-space-m)"}),`. This is then transformed into a CSS property, typically of the same name as the
property used on the component. So, here it would be `,e.jsx(n.code,{children:"padding: var(--gds-sys-space-m)"}),`. That means you can also use
regular CSS shorthand patterns, like `,e.jsx(n.code,{children:"padding: 1em 2em 3em 4em"})," by adding more values. They will each resolve to",e.jsx(n.br,{}),`
`,"a CSS variable. For example: ",e.jsx(n.code,{children:'padding="xs; l {m xl m xl}"'})]}),`
`,e.jsxs(n.p,{children:["When no media query is specified, it is the same as setting the breakpoint to 0. So, ",e.jsx(n.code,{children:'padding="0 {m}"'}),` is equivalent
to `,e.jsx(n.code,{children:'padding="m"'}),"."]}),`
`,e.jsx(n.h3,{id:"pseudo-selectors",children:"Pseudo selectors"}),`
`,e.jsx(n.p,{children:"Psudeo selectors can be added to any media query as a separate value sequence. For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-div padding="xs; hover: s; l { s; hover: m }">
  <!-- Any HTML element can go as children -->
</gds-div>
`})}),`
`,e.jsxs(n.p,{children:["In the above example, the padding will be ",e.jsx(n.code,{children:"xs"})," by default, ",e.jsx(n.code,{children:"s"})," on hover, ",e.jsx(n.code,{children:"m"})," in ",e.jsx(n.code,{children:"l"})," viewports, and ",e.jsx(n.code,{children:"m"})," on hover in ",e.jsx(n.code,{children:"l"})," viewports."]}),`
`,e.jsx(n.h2,{id:"other-components",children:"Other components"}),`
`,e.jsxs(n.p,{children:["Style expression properties are not limited to the declarative layout components. In fact, they are a central part of the Green Core architecture, and is available in many components, wherever it makes sense. For example, on ",e.jsx(n.code,{children:"<gds-button>"})," you can set the width using style expression syntax."]}),`
`,e.jsx(n.p,{children:"In the API-tables in Storybook, you can find more information about the available style expression properties for each component under a separate section."}),`
`,e.jsx(n.h2,{id:"conclusion",children:"Conclusion"}),`
`,e.jsx(n.p,{children:`In conclusion, this system solves the conflict issue by injecting the CSS directly into the shadow DOM of the component,
and it solves the payload size issue by generating the CSS that is needed on the fly on the client side. It also solves
the version lock-in by using the same version scoping mechanism as the rest of the components in Green Core.`}),`
`,e.jsx(n.p,{children:`Internally, the style expression properties are using a custom property decorator which can be configured for different
needs on a per-property basis. This keeps the code size in the implementation to a minimum, while still allowing for a
sufficient level of flexibility.`}),`
`,e.jsxs(n.p,{children:["To learn more about Declarative layout, and the syntax for style expression properties, head over to the ",e.jsx(n.a,{href:"https://seb.io/primitives/declarative-layout",rel:"nofollow",children:"Declarative layout section on seb.io"}),"."]})]})}function l(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{l as default};
