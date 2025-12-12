import{x as s}from"./iframe-B7fJMJKm.js";import"./coachmark-CZKgEJ20.js";import"./preload-helper-Dp1pzeXC.js";import"./ref-DoOupt6Y.js";import"./floating-ui.dom-B1INwmQZ.js";const p={title:"Components/Coachmark",component:"gds-coachmark",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/coachmark)

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
  `};var t,a,n,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source},description:{story:"Because this is the default story that also renders at the top of the page, the\ncoachmark will be shown in the first panel only, since the `#targetElement` selector\nwill match the first element in the DOM.",...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.description}}};const g=["Basic"];export{e as Basic,g as __namedExportsOrder,p as default};
