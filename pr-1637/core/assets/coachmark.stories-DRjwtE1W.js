import{k as s}from"./lit-element-BoQqPHl6.js";import"./coachmark-DOwfNJk-.js";import"./gds-element-RTlSuh_R.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./floating-ui.dom-DaFISw-x.js";import"./ref-Bq52Xjdl.js";import"./async-directive-DPLqQocF.js";import"./directive-helpers-8zWUTkHM.js";import"./directive-Ctav8iJK.js";import"./when-BxLAFfhK.js";const w={title:"Docs/Components/Coachmark",component:"gds-coachmark",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/coachmark)

Coachmarks are contextual tips that focus on making the user
aware of a new feature, the benefits of an existing one or a moved feature within an interface.

The component is primarily a container that follows the targeted element.
The coachmark will be invisible and disabled if another element covered the targeted element or its simply out of view.
The coachmark will close and dispatch a CustomEvent of \`gds-ui-state\`

Note: the component can only view one coachmark at the time therefore the tooltip won't be
rendered in second storybook panel and testing the tooltip behaviour will be in the first panel only

@status beta`}}},tags:["autodocs"]},c={parameters:{docs:{source:{format:!0,type:"dynamic"}}}},e={...c,render:()=>s`
    <div style="height: 200px">
      <p>
        The coachmark will target the first element that matches the selector. Clicking anywhere closes the coachmark.
      </p>
      <p id="targetElement" style="width: 200px; background: #ddd; padding: 1px">Coachmark target element</p>
      <gds-coachmark .target=${["#targetElement"]} placement="bottom"> This is the coachmark content. </gds-coachmark>
    </div>
  `};var t,a,o,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <div style="height: 200px">
      <p>
        The coachmark will target the first element that matches the selector. Clicking anywhere closes the coachmark.
      </p>
      <p id="targetElement" style="width: 200px; background: #ddd; padding: 1px">Coachmark target element</p>
      <gds-coachmark .target=\${['#targetElement']} placement="bottom"> This is the coachmark content. </gds-coachmark>
    </div>
  \`
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source},description:{story:"Because this is the default story that also renders at the top of the page, the\ncoachmark will be shown in the first panel only, since the `#targetElement` selector\nwill match the first element in the DOM.",...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.description}}};const b=["Basic"];export{e as Basic,b as __namedExportsOrder,w as default};
