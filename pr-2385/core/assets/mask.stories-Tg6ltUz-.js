import{x as o}from"./lit-element-Bx14lxc-.js";import{a as i}from"./argTableProps-Cj9ojmZ_.js";import"./mask-CIbKY74s.js";import"./card-BjOuCihO.js";import"./flex-BeEfgfCU.js";import"./button-0b34ooDO.js";import"./theme-Btr08Fcp.js";import"./img-_X-ekH9G.js";import"./video-CQTrVe9c.js";import"./text-RYU0uis7.js";import"./divider-CuEi1eFx.js";import"./arrow-down-DnEggDcy.js";import"./arrow-right-DDfysHA0.js";import"./circles-three-DRNB4N_v.js";import"./custom-elements-DbDPHZyr.js";import"./mask.component-COE1gZK2.js";import"./static-B8S6DEnV.js";import"./tokens.style-DW_p3hws.js";import"./gds-element-DTROifYq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./declarative-layout-mixins-CquYcIh8.js";import"./flex.component-Ca7eLWps.js";import"./div.component-DaQR1erW.js";import"./card.component-BCUBr3QU.js";import"./button.component-B47tSEyr.js";import"./query-p8xgzTDt.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DOynpii0.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./theme.component-BpYRebn8.js";import"./img.component-ThCSJL_V.js";import"./video.component-B9d3BK4H.js";import"./text.component-CIskWtJh.js";import"./divider.component-BGWNZ2xd.js";import"./arrow-down.component-B-tu91gW.js";import"./icon-DojjYwPd.js";import"./unsafe-html-CYO4avEf.js";import"./arrow-right.component-Dky3JuU6.js";import"./circles-three.component-QFxPP8rj.js";const Y={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...i("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
or create visual hierarchy. It's particularly useful when placing text over images or creating
fade effects.


### Basic Usage

The mask component is typically used in combination with images or videos to create gradient overlays:

\`\`\`html
<gds-card position="relative" padding="0" overflow="hidden">
  <gds-img src="path/to/image.jpg"></gds-img>
  <gds-mask
    background="neutral-01/0.9"
    mask-image="top"
    position="absolute"
    inset="50% 0 0 0"
    level="3"
  >
    <!-- Content within the mask -->
  </gds-mask>
</gds-card>
\`\`\`

### Common Use Cases

1. Image Overlays: <br>
   Create readable text over images by adding a gradient mask

2. Content Fading: <br>
   Add fade effects to content edges

3. Visual Hierarchy: <br>
   Draw attention to specific areas using gradient masks

### Accessibility

When using masks over content, ensure sufficient contrast for text readability.
Consider using the dark theme for content within masks over light images.

\`\`\`html
<gds-mask>
  <gds-theme color-scheme="dark">
    <!-- Content -->
  </gds-theme>
</gds-mask>
\`\`\``}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...r,render:a=>o`
    <gds-card position="relative" padding="0" overflow="hidden">
      <gds-img src="https://api.seb.io/assets/woods-cabin.jpeg"></gds-img>
      <gds-mask
        background="neutral-01/0.9"
        mask-image="top"
        position="absolute"
        inset="0; m{50% 0 0 0}"
        level="3"
        color="03"
        flex-direction="column"
        justify-content="flex-end"
        align-items="flex-start"
        gap="xl"
        padding="xl; s{2xl} m{6xl}"
      >
        <gds-theme color-scheme="dark" design-version="2023">
          <gds-flex flex-direction="column" gap="s" width="100%">
            <gds-text font="display-s; m{display-xl}" font-weight="light">
              Sustainability
            </gds-text>
            <gds-text font="body-xs; body-s">
              Actively supporting the net zero transition.
            </gds-text>
          </gds-flex>
          <gds-button>Our impact</gds-button>
        </gds-theme>
      </gds-mask>
    </gds-card>
  `};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-card position="relative" padding="0" overflow="hidden">
      <gds-img src="https://api.seb.io/assets/woods-cabin.jpeg"></gds-img>
      <gds-mask
        background="neutral-01/0.9"
        mask-image="top"
        position="absolute"
        inset="0; m{50% 0 0 0}"
        level="3"
        color="03"
        flex-direction="column"
        justify-content="flex-end"
        align-items="flex-start"
        gap="xl"
        padding="xl; s{2xl} m{6xl}"
      >
        <gds-theme color-scheme="dark" design-version="2023">
          <gds-flex flex-direction="column" gap="s" width="100%">
            <gds-text font="display-s; m{display-xl}" font-weight="light">
              Sustainability
            </gds-text>
            <gds-text font="body-xs; body-s">
              Actively supporting the net zero transition.
            </gds-text>
          </gds-flex>
          <gds-button>Our impact</gds-button>
        </gds-theme>
      </gds-mask>
    </gds-card>
  \`
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Z=["Mask"];export{t as Mask,Z as __namedExportsOrder,Y as default};
