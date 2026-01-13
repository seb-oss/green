import{x as e}from"./iframe-Dhv-OfZF.js";import"./coachmark-DUVNw1SR.js";import"./coachmark.component-BdqRYhHw.js";import"./ref-BomApD5b.js";import"./floating-ui.dom-B1INwmQZ.js";const s={title:"Components/Coachmark",component:"gds-coachmark",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/coachmark)

Coachmarks guide users through interface features.

The component is primarily a container that follows the targeted element.
The coachmark will be invisible and disabled if another element covered the targeted element or its simply out of view.
The coachmark will close and dispatch a CustomEvent of \`gds-ui-state\`

Note: the component can only view one coachmark at the time therefore the tooltip won't be
rendered in second storybook panel and testing the tooltip behaviour will be in the first panel only

@status beta`}}},tags:["autodocs"]},t={parameters:{docs:{source:{format:!0,type:"dynamic"}}}},i={...t,render:()=>e`
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
  `},m=["Basic"];export{i as Basic,m as __namedExportsOrder,s as default};
