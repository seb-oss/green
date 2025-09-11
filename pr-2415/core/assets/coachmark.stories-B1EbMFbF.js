import{x as s}from"./lit-element-Bx14lxc-.js";import"./coachmark-BMkFi1kv.js";import"./coachmark.component-qv9mg8wx.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./gds-element-DTROifYq.js";const b={title:"Components/Coachmark",component:"gds-coachmark",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/coachmark)

Coachmarks guide users through interface features.

The component is primarily a container that follows the targeted element.
The coachmark will be invisible and disabled if another element covered the targeted element or its simply out of view.
The coachmark will close and dispatch a CustomEvent of \`gds-ui-state\`

Note: the component can only view one coachmark at the time therefore the tooltip won't be
rendered in second storybook panel and testing the tooltip behaviour will be in the first panel only

@status beta`}}},tags:["autodocs"]},c={parameters:{docs:{source:{format:!0,type:"dynamic"}}}},e={...c,render:()=>s`
    <div style="height: 200px">
      <p>
        The coachmark will target the first element that matches the selector.
        Clicking anywhere closes the coachmark.
      </p>
      <p
        id="targetElement"
        style="width: 200px; background: #ddd; padding: 1px"
      >
        Coachmark target element
      </p>
      <gds-coachmark .target=${["#targetElement"]} placement="bottom">
        This is the coachmark content.
      </gds-coachmark>
    </div>
  `};var t,a,o,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <div style="height: 200px">
      <p>
        The coachmark will target the first element that matches the selector.
        Clicking anywhere closes the coachmark.
      </p>
      <p
        id="targetElement"
        style="width: 200px; background: #ddd; padding: 1px"
      >
        Coachmark target element
      </p>
      <gds-coachmark .target=\${['#targetElement']} placement="bottom">
        This is the coachmark content.
      </gds-coachmark>
    </div>
  \`
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source},description:{story:"Because this is the default story that also renders at the top of the page, the\ncoachmark will be shown in the first panel only, since the `#targetElement` selector\nwill match the first element in the DOM.",...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.description}}};const w=["Basic"];export{e as Basic,w as __namedExportsOrder,b as default};
