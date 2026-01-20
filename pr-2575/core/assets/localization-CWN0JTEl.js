import{u as i,j as e,M as l}from"./iframe-CdkNm90d.js";function t(n){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Concepts/Localization"}),`
`,e.jsx(o.h1,{id:"localization",children:"Localization"}),`
`,e.jsxs(o.p,{children:[`Green Core has built in localization for English (default) and Swedish. This affects the built-in copy of the components.
For the rest of the copy in your application, you need to handle the localization separately. The localization in Green Core
is based on the `,e.jsx(o.code,{children:"@lit/localize"})," library."]}),`
`,e.jsxs(o.p,{children:["To use the localization features, you need to import and call the ",e.jsx(o.code,{children:"gdsInitLocalization"})," function from Green Core:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`import { gdsInitLocalization } from '@sebgroup/green-core/localization'
const { setLocale } = gdsInitLocalization()
`})}),`
`,e.jsxs(o.p,{children:["The current language can be set by calling the ",e.jsx(o.code,{children:"setLocale"})," function that is returned from ",e.jsx(o.code,{children:"gdsInitLocalization"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`setLocale('sv')
`})}),`
`,e.jsx(o.p,{children:"This can be called at any time, and it will cause all Green Core components on the page to re-render with the correct locale."}),`
`,e.jsxs(o.p,{children:["Note that ",e.jsx(o.code,{children:"gdsInitLocalization()"})," can only be called once, so you need to set up a singleton of some kind (for example a service in Angular or ",e.jsx(o.code,{children:"useEffect"}),` in React) to make sure that
you only do this once per page load. If it is called twice, it'll throw an error the second time.`]}),`
`,e.jsx(o.h3,{id:"list-available-locals",children:"List available locals"}),`
`,e.jsxs(o.p,{children:["You can get a list of all available target locales by importing ",e.jsx(o.code,{children:"targetLocales"})," from ",e.jsx(o.code,{children:"@sebgroup/green-core/localization"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`import { targetLocales } from '@sebgroup/green-core/localization'

// This will log an array of all available target locales
console.log(targetLocales)
`})}),`
`,e.jsxs(o.p,{children:["Note that this list will not include the ",e.jsx(o.em,{children:"source"})," locale, which is English in our case. Since we currently only support English and Swedish, the list will only contain ",e.jsx(o.code,{children:"['sv']"}),"."]}),`
`,e.jsx(o.h2,{id:"additional-locales",children:"Additional locales"}),`
`,e.jsx(o.p,{children:"Green should have translations for all the required languages built-in, so if you are missing the locale that you need, please get in touch and we will help you add it."}),`
`,e.jsx(o.p,{children:"If you find yourself in some edge case where you absolutely need a custom translation or locale, we got you covered too."}),`
`,e.jsxs(o.p,{children:["When calling ",e.jsx(o.code,{children:"gdsInitLocalization"})," you can supply additional locales and templates:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`const { setLocale, getLocale } = gdsInitLocalization({
  extraLocales,
  extraTemplates,
})
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"extraLocales"})," is just an array of locale ids, like ",e.jsx(o.code,{children:"['es', 'fr']"})," and ",e.jsx(o.code,{children:"extraTemplates"})," needs to be a ",e.jsx(o.code,{children:"Map"})," with locale id keys and ",e.jsx(o.code,{children:"@lit/localize"})," templates as values. These templates can be generated using the ",e.jsx(o.code,{children:"lit-localize"})," CLI. Check the ",e.jsx(o.a,{href:"https://lit.dev/docs/localization/overview/",rel:"nofollow",children:"Lit website"})," for more info. You can also check the Green Core source code to see how it is done there."]}),`
`,e.jsxs(o.h2,{id:"litlocalize-doesnt-work-with-framework-x-why-not-use-a-framework-agnostic-solution",children:[e.jsx(o.code,{children:"@lit/localize"})," doesn't work with framework X. Why not use a framework agnostic solution?"]}),`
`,e.jsx(o.p,{children:"Localization is one of those things that is often tightly coupled to the template engine of the framework you're using, which makes it tricky to provide a single framework agnostic solution."}),`
`,e.jsx(o.p,{children:"The approach Green Core is going with is to provide built-in localization for standard copy in its components, but leave the rest of the app up to the consumer. The consumer-side requirements can be quite diverse from case to case. For example, translations may come from a CMS or some legacy back-end, so a lot of case-by-case flexibility is needed there, and it's hard to anticipate all of those requirements up front."}),`
`,e.jsxs(o.p,{children:["For the Green Core web components, ",e.jsx(o.code,{children:"@lit/localize"})," makes sense, since it is a fairly simple and light-weight library, and the components use the lit-html template engine for their internal rendering needs."]}),`
`,e.jsxs(o.p,{children:["So the mental model you should have here, is that you set up localization however you want in your application, and then in whichever function you set the locale, you also call ",e.jsx(o.code,{children:"setLocale"})," from Green to keep the component language in sync."]})]})}function s(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{s as default};
