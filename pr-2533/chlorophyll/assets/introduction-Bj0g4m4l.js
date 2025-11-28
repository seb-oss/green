import{j as e,M as i}from"./WithTooltip-SK46ZJ2J-BqBj9YUi.js";import{useMDXComponents as s}from"./index-CwPMOufD.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-Bi3z28Tk.js";function o(t){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Use cases/Mixing frameworks/Introduction"}),`
`,e.jsx(n.h1,{id:"mixing-frameworks",children:"Mixing frameworks"}),`
`,e.jsxs(n.p,{children:[`It's not something we encourage, but sometimes you might need to use a component built or created for a different framework than Green.
Ideally you'd create an `,e.jsx(n.a,{href:"https://github.com/seb-oss/green/issues",rel:"nofollow",children:"issue in github"})," for the component you want or need to use, so that we could help you add it to Green."]}),`
`,e.jsx(n.p,{children:"With that said, to mix CSS frameworks you need to consider the cascading aspect of CSS (Cascading Style Sheets) and try to avoid CSS leakage, i.e. avoid element styles and rules from affecting other elements than the ones you intend to style."}),`
`,e.jsx(n.h3,{id:"mixing-with-custom-css-you-own",children:"Mixing with custom CSS you own"}),`
`,e.jsx(n.p,{children:"Consider the following CSS:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`button {
  background: red;
}
`})}),`
`,e.jsx(n.p,{children:"It will make all buttons on our page red which we want to avoid when mixing frameworks. One obvious solution would be to assign our button style to a more specific selector, maybe something like:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.button-critical {
  background: red;
}
`})}),`
`,e.jsx(n.p,{children:"We can now add that class to the buttons we want to style and skip the ones that should use some other styling (maybe from another framework)."}),`
`,e.jsxs(n.p,{children:["This works when you own the framework and one could argue that you should be even more specific and add a unique prefix to your selector. Most frameworks (and browsers) however add generic styles to elements like ",e.jsx(n.code,{children:"html"}),",",e.jsx(n.code,{children:"body"}),",",e.jsx(n.code,{children:"a"}),` etc. and it's hard to avoid all conflicts that might occur even when you add a unique selector.
Scoping or encapsulating parts of the app using `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM#styling_the_shadow_dom",rel:"nofollow",children:"Shadow DOM"})," is one option, but it's not without challenges, and it's often not an option when mixing frameworks or third-party components."]}),`
`,e.jsxs(n.p,{children:["If we go back to the previous example, unique selectors are good and another recommendation is to scope all the style you add/own to avoid them from leaking (affecting other elements than the ones you want). We recommend using ",e.jsx(n.a,{href:"https://sass-lang.com/",rel:"nofollow",children:"SASS"})," which is a CSS pre-processor."]}),`
`,e.jsx(n.p,{children:"With SASS it's easy to make sure styles don't leak, simply include them inside a selector and they won't affect elements outside it."}),`
`,e.jsx(n.h3,{id:"scoping-selectors",children:"Scoping selectors"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"scss"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.foo-bar-app {
  // generic element selector
  button {
    border: none;
  }
  // specific selector
  .button-critical {
    background: red;
  }
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"html"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<main>
  <div class="foo-bar-app">
    <button class="button-critical">
      Red button without border (affected)
    </button>
  </div>
  <div>
    <button class="button-critical">
      Button without styling (not affected)
    </button>
  </div>
</main>
`})}),`
`,e.jsx(n.h3,{id:"scoping-mixins-and-imports",children:"Scoping mixins and imports"}),`
`,e.jsxs(n.p,{children:["The same concept works for mixins and imports too. Note however that ",e.jsx(n.code,{children:"@use"})," which is the new and preferred way of including external style modules can't be scoped, but it's perfectly safe and fine to use ",e.jsx(n.code,{children:"@import"})," here. If possible use mixins to include styles."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"scss"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@mixin add-critical-button() {
  .button-critical {
      background: red;
  }
}
.foo-bar-app {
  @include add-critical-button; // add own styles using mixin
  @import "@sebgroup/bootstrap/scss/styles/buttons"; // add buttons from bootstrap
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"html"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<main>
  <div class="foo-bar-app">
    <button class="button-critical">Red button (affected)</button>
    <button class="btn btn-primary">
      Primary button from bootstrap (affected)
    </button>
  </div>
  <div>
    <button class="button-critical">
      Button without styling (not affected)
    </button>
    <button class="btn btn-primary">
      Button without styling (not affected)
    </button>
  </div>
</main>
`})}),`
`,e.jsx(n.p,{children:"The example above is a bit trivial and to get buttons from bootstrap to display correctly you need fonts too so there's a bit more to it although the concept is the same."}),`
`,e.jsxs(n.p,{children:["Read more and view examples on how to ",e.jsx(n.a,{href:"/docs/use-cases-mixing-frameworks-use-green-with-bootstrap--page",children:"use Green with Bootstrap"})]})]})}function l(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{l as default};
