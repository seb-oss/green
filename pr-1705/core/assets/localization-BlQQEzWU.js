import{ae as e,af as l}from"./index-CpnrQuJX.js";import{u as a}from"./index-BXD8eaay.js";import"./chunk-HLWAVYOI-DR7fJ2aV.js";import"./iframe-CvYqSKhb.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";function t(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Concepts/Localization"}),`
`,e.jsx(o.h1,{id:"localization",children:"Localization"}),`
`,e.jsxs(o.p,{children:[`Green Core has built in localization for English (default) and Swedish. This affects the built-in copy of the components.
For the rest of the copy in your application, you need to handle the localization separately. The localization in Green Core
is based on the `,e.jsx(o.code,{children:"@lit/localize"})," library."]}),`
`,e.jsxs(o.p,{children:["The current language can be set by calling the ",e.jsx(o.code,{children:"setLocale"})," function from Green Core:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`import {
  gdsInitLocalization,
  targetLocales,
} from '@sebgroup/green-core/localization'
const { setLocale } = gdsInitLocalization()

setLocale('se')

// log a list of available built-in locales
console.log(targetLocales)
`})}),`
`,e.jsx(o.p,{children:"This can be called at any time, and it will cause all Green Core components on the page to re-render with the correct locale."}),`
`,e.jsxs(o.p,{children:["Note that ",e.jsx(o.code,{children:"gdsInitLocalization()"}),` can only be called once, so you need to set up a singleton of some kind (for example a service in Angular or useEffect in React) to make sure that
you only do this once per page load. If it is called twice, it'll throw an error the second time.`]}),`
`,e.jsx(o.h2,{id:"additional-locales",children:"Additional locales"}),`
`,e.jsx(o.p,{children:"Green should have translations for all the required languages built-in, so if you are missing the locale that you need, please get in touch and we will help you add it."}),`
`,e.jsx(o.p,{children:"If you find yourself in some edge case where you absolutely need a custom translation or locale, we got you covered too."}),`
`,e.jsxs(o.p,{children:["When calling ",e.jsx(o.code,{children:"gdsInitLocalization"})," you can supply additional locales and templates:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`const { setLocale, getLocale } = gdsInitLocalization({
  extraLocales,
  extraTemplates,
})
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"extraLocales"})," is just an array of locale ids, like ",e.jsx(o.code,{children:"['es', 'fr']"})," and ",e.jsx(o.code,{children:"extraTempletes"})," needs to be a ",e.jsx(o.code,{children:"Map"})," with locale id keys and ",e.jsx(o.code,{children:"@lit/localize"})," templates as values. These templates can be generated using the ",e.jsx(o.code,{children:"lit-localize"})," CLI. Check the Lit website for more info. You can also check the Green Core source code to see how it is done there."]})]})}function x(n={}){const{wrapper:o}={...a(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{x as default};
