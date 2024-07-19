import{j as e}from"./jsx-runtime-dea4c036.js";import"./chunk-HLWAVYOI-335379f4.js";import{M as l}from"./index-8723d273.js";import{u as a}from"./index-4dddc443.js";import"./iframe-097feb80.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function t(o){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2"},a(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Concepts/Localization"}),`
`,e.jsx(n.h1,{id:"localization",children:"Localization"}),`
`,e.jsxs(n.p,{children:[`Green Core has built in localization for English (default) and Swedish. This affects the built-in copy of the components.
For the rest of the copy in your application, you need to handle the localization separately. The localization in Green Core
is based on the `,e.jsx(n.code,{children:"@lit/localize"})," library."]}),`
`,e.jsxs(n.p,{children:["The current language can be set by calling the ",e.jsx(n.code,{children:"setLocale"})," function from Green Core:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {
  gdsInitLocalization,
  targetLocales,
} from '@sebgroup/green-core/localization'
const { setLocale } = gdsInitLocalization()

setLocale('se')

// log a list of available built-in locales
console.log(targetLocales)
`})}),`
`,e.jsx(n.p,{children:"This can be called at any time, and it will cause all Green Core components on the page to re-render with the correct locale."}),`
`,e.jsxs(n.p,{children:["Note that ",e.jsx(n.code,{children:"gdsInitLocalization()"}),` can only be called once, so you need to set up a singleton of some kind (for example a service in Angular or useEffect in React) to make sure that
you only do this once per page load. If it is called twice, it'll throw an error the second time.`]}),`
`,e.jsx(n.h2,{id:"additional-locales",children:"Additional locales"}),`
`,e.jsx(n.p,{children:"Green should have translations for all the required languages built-in, so if you are missing the locale that you need, please get in touch and we will help you add it."}),`
`,e.jsx(n.p,{children:"If you find yourself in some edge case where you absolutely need a custom translation or locale, we got you covered too."}),`
`,e.jsxs(n.p,{children:["When calling ",e.jsx(n.code,{children:"gdsInitLocalization"})," you can supply additional locales and templates:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const { setLocale, getLocale } = gdsInitLocalization({
  extraLocales,
  extraTemplates,
})
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"extraLocales"})," is just an array of locale ids, like ",e.jsx(n.code,{children:"['es', 'fr']"})," and ",e.jsx(n.code,{children:"extraTempletes"})," needs to be a ",e.jsx(n.code,{children:"Map"})," with locale id keys and ",e.jsx(n.code,{children:"@lit/localize"})," templates as values. These templates can be generated using the ",e.jsx(n.code,{children:"lit-localize"})," CLI. Check the Lit website for more info. You can also check the Green Core source code to see how it is done there."]})]})}function g(o={}){const{wrapper:n}=Object.assign({},a(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(t,o)})):t(o)}export{g as default};
