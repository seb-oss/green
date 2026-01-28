import{x as t}from"./iframe-ByPMS9JH.js";import{a as e}from"./argTableProps-SHyGeyBT.js";import"./mask-C9RqEN1U.js";import"./card-DE-esGdo.js";import"./flex-nBIrz49p.js";import"./img-CCe4B7mu.js";import"./video-BFRX5fsO.js";import"./text-BzAiAWlR.js";import"./divider-DqWSaz_d.js";import"./arrow-down-DTs6-adC.js";import"./arrow-right-BDYMCJ0y.js";import"./circles-three-Bs3DimB_.js";import"./mask.component-DnnhXeXa.js";import"./flex.component-DXQ-9hxN.js";import"./card.component-CrH3YPvY.js";import"./img.component-B2q0vZ9Q.js";import"./video.component-CMLdINmE.js";import"./default-typography.styles-CY0bZKhT.js";import"./divider.component-CXCjgs7R.js";import"./arrow-down.component-y_YdChW_.js";import"./icon.component-D2m92_JM.js";import"./arrow-right.component-DRFJvvbI.js";import"./circles-three.component-DdIKbC_Z.js";const A={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...e("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
