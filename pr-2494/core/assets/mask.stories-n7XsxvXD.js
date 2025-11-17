import{x as o}from"./lit-element-Bx14lxc-.js";import{a as i}from"./argTableProps-OVnXU7L5.js";import"./mask-DDKPz6tM.js";import"./card-D7igt1vy.js";import"./flex-COHx0Pry.js";import"./button-BeuVh3hw.js";import"./theme-Du2J8Q5K.js";import"./img-DJj3Q8CV.js";import"./video-CoSaiGtv.js";import"./text-Z9s1gHys.js";import"./divider-4csv1cgy.js";import"./arrow-down-CpgMDt5n.js";import"./arrow-right-DbDWkZjE.js";import"./circles-three-BdwgDgGP.js";import"./custom-elements-CPuA7Otn.js";import"./mask.component-CyKX3AyP.js";import"./static-B8S6DEnV.js";import"./tokens.style-CQAfIFlK.js";import"./gds-element-DTROifYq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./declarative-layout-mixins-C4FFYA_h.js";import"./flex.component-BYRotL8F.js";import"./div.component-D6IvvHfw.js";import"./card.component-eDIV52nF.js";import"./button.component-D-n6FD2-.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-UDysEBZS.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./theme.component-jFCNKyVc.js";import"./img.component-BFXJrjKp.js";import"./video.component-DXM08uK6.js";import"./default-typography.styles-B_Uut80G.js";import"./divider.component-C0vQ8RM4.js";import"./arrow-down.component-DQ8JAfbQ.js";import"./icon-CnieVCYX.js";import"./unsafe-html-CYO4avEf.js";import"./arrow-right.component-CDUkfe9n.js";import"./circles-three.component-C4nTXmhy.js";const Z={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...i("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const $=["Mask"];export{t as Mask,$ as __namedExportsOrder,Z as default};
