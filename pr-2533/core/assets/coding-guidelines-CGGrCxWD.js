import{u as i,j as e,M as o}from"./iframe-CygdAg_6.js";import"./preload-helper-Dp1pzeXC.js";function s(n){const t={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Contributing/Coding Guidelines"}),`
`,e.jsx(t.h1,{id:"code-conventions-for-green-core",children:"Code conventions for Green Core"}),`
`,e.jsx(t.h2,{id:"naming-convention",children:"Naming convention"}),`
`,e.jsx(t.h3,{id:"file-names",children:"File names"}),`
`,e.jsxs(t.p,{children:["File names should always be written in kebab-case, and should reflect the name of the component or feature that the file contains. For example, a file containing a button component should be named ",e.jsx(t.code,{children:"gds-button.ts"}),"."]}),`
`,e.jsx(t.h3,{id:"prefix-names",children:"Prefix names"}),`
`,e.jsxs(t.p,{children:["Names should be prefixed with ",e.jsx(t.code,{children:"Gds"})," to indicate that they are part of a Green Component library. This is to avoid naming conflicts with other libraries or custom code."]}),`
`,e.jsx(t.h3,{id:"class-names",children:"Class names"}),`
`,e.jsxs(t.p,{children:["Class names should be written in PascalCase, and should reflect the name of the component or feature that the class represents. For example, a class representing a button component should be named ",e.jsx(t.code,{children:"GdsButton"}),"."]}),`
`,e.jsx(t.h3,{id:"custom-element-names",children:"Custom element names"}),`
`,e.jsxs(t.p,{children:["Custom element names should be written in kebab-case, and should reflect the name of the component that the class represents. For example, a class representing a button component should be named ",e.jsx(t.code,{children:"gds-button"}),"."]}),`
`,e.jsx(t.h2,{id:"always-extend-gdselement",children:"Always extend GdsElement"}),`
`,e.jsxs(t.p,{children:["All components in Green Core should extend the ",e.jsx(t.code,{children:"GdsElement"})," base class. Among some other minor things, this class adds the standard ",e.jsx(t.code,{children:"gds-element"})," attribute to all components. Check the source code for more details."]}),`
`,e.jsx(t.h2,{id:"events",children:"Events"}),`
`,e.jsxs(t.p,{children:["Aim to use standard events when applicable, for example, a form control should dispatch a standard ",e.jsx(t.code,{children:"input"})," event when the value is updated. In other cases, where you need to use a custom event, name it ",e.jsx(t.code,{children:"gds-[custom-event-name]"}),"."]}),`
`,e.jsxs(t.p,{children:["The GdsElement base class has event dispatch helper methods that should be used for all event dispatching. The helpers will automatically emit a CamelCased version of the event, so that it can be used in React and other frameworks that use CamelCase for event names. For example, if you dispatch a ",e.jsx(t.code,{children:"gds-ui-state"})," event, the helper will also emit an ",e.jsx(t.code,{children:"GdsUiState"})," event, which can be used as ",e.jsx(t.code,{children:"onGdsUiState"})," in React."]}),`
`,e.jsx(t.h2,{id:"-for-private-properties",children:"# for private properties"}),`
`,e.jsx(t.p,{children:"Private properties and functions should use the ES2022 private identifier (#) syntax. This ensures that the field is private at both compile-time and run-time."}),`
`,e.jsxs(t.p,{children:["There are a few common arguments against using private identifiers, such as added overhead when targeting older JS versions, but in this case the added protection against incorrect use of internal API is worth it. Remember that this is a Web Component library and that it is perfectly valid to use it outside of Typescript, where there's no compiler to yell at you for incorrectly using ",e.jsx(t.code,{children:"private"})," properties."]}),`
`,e.jsxs(t.p,{children:["In the event that ",e.jsx(t.code,{children:"#"})," cannot be used, for example together with decorators, we can fall back on the Typescript ",e.jsx(t.code,{children:"private"})," keyword. We should then also prefix the method or property with an underscore. The underscore helps communicate the intended visibility to non-typescript consumers and at runtime. This means that a component class may contain some private fields with the # syntax and some with the ",e.jsx(t.code,{children:"private"})," keyword, which may seem confusing."]}),`
`,e.jsx(t.h2,{id:"code-order",children:"Code order"}),`
`,e.jsx(t.p,{children:"The suggested order of code in a component is something like this:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Static properties"}),`
`,e.jsx(t.li,{children:"Static functions"}),`
`,e.jsx(t.li,{children:"Public properties"}),`
`,e.jsx(t.li,{children:"Private properties"}),`
`,e.jsx(t.li,{children:"Constructor"}),`
`,e.jsx(t.li,{children:"Public methods"}),`
`,e.jsx(t.li,{children:"Render function"}),`
`,e.jsx(t.li,{children:"Private methods"}),`
`]}),`
`,e.jsx(t.h3,{id:"whats-what",children:"What’s what?"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Property:"})," A field that holds a value. Includes Lit reactive properties. Also commonly referred to as members ",e.jsx(t.br,{}),`
`,e.jsx(t.strong,{children:"Method:"})," Functions that can be called on an instance of the component. Arrow functions also fall under this category. ",e.jsx(t.br,{}),`
`,e.jsx(t.strong,{children:"Render function:"})," This the the standard Lit ",e.jsx(t.code,{children:"render()"})," function that all components use to render their view."]}),`
`,e.jsx(t.h2,{id:"aria--and-state-attribute-reflection",children:"Aria- and state attribute reflection"}),`
`,e.jsx(t.p,{children:`As a rule-of-thumb, all primitives should be responsible for setting their own aria-attributes. If the aria-attribute reflects state, then the aria-attribute can be a reactive prop that reflects that internal state, such as “selected”, “hidden”, etc. State that can’t be expressed as aria attributes can have custom reflected attributes.
Also, primitives should generally be responsible for setting their own role attribute.`}),`
`,e.jsx(t.p,{children:"At some point in the future, when the Accessibility Object Model (AOM) has matured a bit more and gained better browser support, we might move the aria attributes there instead, and set them though ElementInternals as the AOM spec suggests."}),`
`,e.jsx(t.h3,{id:"propagating-aria",children:"Propagating aria"}),`
`,e.jsx(t.p,{children:"In many cases, the aria attribute should apply to an inner element of the component, rather than the host."}),`
`,e.jsxs(t.p,{children:["For example, setting ",e.jsx(t.code,{children:"aria-label"})," on ",e.jsx(t.code,{children:"<gds-button>"})," would be incorrect, because it should really be set on the internal ",e.jsx(t.code,{children:"<button>"}),` element. Therefor,
there should either be a part of the component API that handles it, for example, `,e.jsx(t.code,{children:"<gds-button>"})," has a ",e.jsx(t.code,{children:"label"})," property that will in turn set the ",e.jsx(t.code,{children:"aria-label"}),`
on the internal `,e.jsx(t.code,{children:"<button>"}),", or the component should forward (and rename) attributes prefixed with ",e.jsx(t.code,{children:"gds-aria"})," to the appropriate underlying component."]}),`
`,e.jsx(t.h2,{id:"form-controls",children:"Form controls"}),`
`,e.jsxs(t.p,{children:["Form control components should extend the ",e.jsx(t.code,{children:"GdsFormControlElement"})," abstract class. This ensures that the component gets set up as a native form control, and has all the expected attributes and methods."]}),`
`,e.jsx(t.h2,{id:"consider-which-primitive-or-component-should-be-responsible-for-behaviours",children:"Consider which primitive or component should be responsible for behaviours"}),`
`,e.jsx(t.p,{children:"Many types of UI widgets have certain expected behaviours, such as keyboard navigation. When developing a component and breaking it down into primitives, carefully consider where the responsibility for controlling those behaviours should lie. Sometimes, the containing component is the appropriate entity, and sometimes it is inside the primitive itself. Consider how focus is managed and flows through the interface."}),`
`,e.jsx(t.h2,{id:"composition",children:"Composition"}),`
`,e.jsx(t.p,{children:"Many aspects of components are shared between many component. When we come across shared features, we should work with composition, through Lit controllers, helper functions, class mixins or decorators. That way we create reusable and composable building blocks."}),`
`,e.jsx(t.h2,{id:"documentation",children:"Documentation"}),`
`,e.jsx(t.p,{children:"At a minimum, all public methods and properties should be documented using JSDoc."}),`
`,e.jsx(t.p,{children:"In addition the the public interface, it can also be useful to have JSDoc comments for internal methods and properties. These are helpful when maintaining the library or when working on new features, as the JSDoc comments gets picked up by code editors such as VS Code and displayed when hovering parts of the code."}),`
`,e.jsx(t.h2,{id:"component-status",children:"Component status"}),`
`,e.jsx(t.h3,{id:"beta-or-stable",children:"Beta or Stable"}),`
`,e.jsxs(t.p,{children:["Status can be added in the main JSDoc entry for a component, byt using the ",e.jsx(t.code,{children:"@status"})," tag. The status can be either ",e.jsx(t.code,{children:"stable"})," or ",e.jsx(t.code,{children:"beta"}),"."]}),`
`,e.jsx(t.p,{children:"Newly added components should usually be marked as Beta until they have been fully review, tested and processed in all relevant aspects. A component marked as Beta is not included in the Semantic Versioning guarantees of the rest of the system. Using a beta component means accepting the risk that breaking changes can, and will, occur even in patch releases of the framework."}),`
`,e.jsx(t.h2,{id:"testing",children:"Testing"}),`
`,e.jsx(t.p,{children:"Every component that is part of the public API should have full test coverage of all of its features."}),`
`,e.jsx(t.p,{children:"Preferrably, any new components or features added to existing components should be developed using a test-driven approach."}),`
`,e.jsx(t.p,{children:"Tests run in headless browsers using the Modern Web test runner together with Playwright."})]})}function h(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default};
