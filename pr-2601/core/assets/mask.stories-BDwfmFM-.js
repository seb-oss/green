import{x as t}from"./iframe-CNQuyvRb.js";import{a as e}from"./argTableProps-BLnSuWwU.js";import"./mask-VI-oSy8s.js";import"./card-BItlIG1A.js";import"./flex-Lm2Pcsl6.js";import"./img-0n6b1OGT.js";import"./video-MN_gxWK7.js";import"./text-CN8k_8z1.js";import"./divider-DTccM5SX.js";import"./arrow-down-zdo6r63W.js";import"./arrow-right-BHYwN5O5.js";import"./circles-three-CVp_1Fm8.js";import"./mask.component-vUZCxyfT.js";import"./flex.component-BRTHS8Pd.js";import"./card.component-CIUZbWPA.js";import"./img.component-eU5o4L_L.js";import"./video.component-knyqBDV-.js";import"./default-typography.styles-DhRKsXst.js";import"./divider.component-Dk-vtwuO.js";import"./arrow-down.component-BkmtrpmW.js";import"./icon.component-DaaHJEBV.js";import"./arrow-right.component-BBuMSgLG.js";import"./circles-three.component-D_Csr51R.js";const A={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...e("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
\`\`\``}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},O={...n,render:s=>t`
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
  `},D=["Mask"];export{O as Mask,D as __namedExportsOrder,A as default};
