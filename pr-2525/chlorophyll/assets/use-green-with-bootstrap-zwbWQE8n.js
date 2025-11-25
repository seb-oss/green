import{j as e,M as r}from"./WithTooltip-SK46ZJ2J-BqBj9YUi.js";import{useMDXComponents as n}from"./index-CwPMOufD.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-Bi3z28Tk.js";function t(o){const s={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Use cases/Mixing frameworks/Use Green with Bootstrap"}),`
`,e.jsx(s.h1,{id:"use-green-with-bootstrap",children:"Use Green with Bootstrap"}),`
`,e.jsxs(s.p,{children:["Since Bootstrap follows ",e.jsx(s.a,{href:"http://getbem.com/",rel:"nofollow",children:"BEM"}),` and uses pretty well-defined and specific class names it's fairly easy to predict how it will cascade and affect an app.
We recommend adding just the parts from Bootstrap that you need, you can read more about it in the `,e.jsx(s.a,{href:"https://github.com/sebgroup/bootstrap/wiki/Don't-want-to-load-all-of-bootstrap%3F",rel:"nofollow",children:"@sebgroup/bootstrap wiki"}),"."]}),`
`,e.jsxs(s.p,{children:["The different parts from Bootstrap are easily scoped with a few exceptions. ",e.jsx(s.code,{children:"Reboot"})," which aims to normalize browser differences apply some rules to the ",e.jsx(s.code,{children:"html"})," and ",e.jsx(s.code,{children:"body"})," which for obvious reasons won't work as these elements can't be scoped."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"This won't work"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.use-bootstrap {
  html, body {
    // some rules
  }
}
`})}),`
`,e.jsxs(s.p,{children:["Currently, the styles from ",e.jsx(s.code,{children:"Reboot"})," needs to be added manually to the element scope you're creating so that child elements, that might need them can inherit the rules properly."]}),`
`,e.jsx(s.h3,{id:"in-an-angular-app",children:"In an Angular app"}),`
`,e.jsxs(s.p,{children:["We recommend setting up Angular with scss and that you add global styles to ",e.jsx(s.code,{children:"styles.scss"})," located in the ",e.jsx(s.code,{children:"src"}),` folder of your project.
It could look something like this:`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* styles.scss */

/* import bootstrap (ideally you'd only import the parts from bootstrap you use and scope them like this:
  .use-bootstrap {
    @import '@sebgroup/bootstrap/scss/styles/buttons';
  }
*/
@use '@sebgroup/bootstrap/scss/bootstrap';

/* add use-green scope i.e. ability to use (\`.use-green\`) */
@use '@sebgroup/chlorophyll/scss/components/use-green-scope';

/* add color palettes for charts, temporary workaround for https://github.com/seb-oss/green/issues/357  */
@use '@sebgroup/green-charts/scss/mixins' as chart-mixins;
@include chart-mixins.add-color-palettes;

/* import specific parts from green and scope them to \`.use-green\` class */
.use-green {
  // declare parts to include in a separate file that you import (to scope it to .use-green), we only use one @import here to avoid code duplication of sass modules
  @import './green'; // custom import of green (see example file below)
  /* @import '@sebgroup/chlorophyll/scss'; */ // if you need to scope green and want everything
}
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* green.scss */

// custom import of green
@use '@sebgroup/chlorophyll/scss/components/button'; // button component(s)
/* add the components you need here */
@use '@sebgroup/chlorophyll/scss/components/fonts'; // font declaration (not really needed in this scenario since we'll get the font from bootstrap too)

@use '@sebgroup/charts/scss/mixins' as chart-mixins;
@include chart-mixins.add-chart-styles; // add charts
`})}),`
`,e.jsxs(s.p,{children:["In the example above, you'll be able to use buttons and charts from Green when placed inside elements with the class ",e.jsx(s.code,{children:".use-green"}),". Since we didn't scope Bootstrap we'll be able to use it everywhere in our app."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"html"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<h3 class="my-3">Green chart</h3>
<div class="use-green">
  <ngg-chart [settings]="settings"></ngg-chart>
</div>
<button type="button" class="btn btn-primary">Bootstrap primary</button>
<div class="use-green mt-3">
  <button type="button">Green default button</button>
  <button type="submit">Green primary button</button>
</div>
`})}),`
`,e.jsx(s.p,{children:"Like we've said before, we don't encourage mixing frameworks and when you add things from Green like buttons, you should remove the component it replaces from Bootstrap (or any other framework for that matter)."}),`
`,e.jsxs(s.p,{children:["To optimize your app and the resources it loads when bootstrapping, it could be a good idea to divide your app into lazy loaded modules and import the different parts to each module based on what they need and use. Angular also comes with the ability to use view encapsulation (on by default for components), which allows us to scope styles to a specific component. Eg. if you only use lists from Green in one component it's also possible to add it directly to the component using ",e.jsx(s.code,{children:"@use"})," like this."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* foo.component.scss */
@use '@sebgroup/chlorophyll/scss/components/list';
`})}),`
`,e.jsxs(s.p,{children:["It will then only be available to that specific component. Note that when you use ",e.jsx(s.code,{children:"@use"}),", it doesn't matter how many components you add it to, it will just be added once when bundled by webpack."]})]})}function d(o={}){const{wrapper:s}={...n(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(t,{...o})}):t(o)}export{d as default};
