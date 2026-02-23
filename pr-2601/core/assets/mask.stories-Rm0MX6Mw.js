import{x as t}from"./iframe-BrEe7A9x.js";import{a as e}from"./argTableProps-DykrQ4Uz.js";import"./mask-pFyPlLrM.js";import"./card-ByQzPF7Q.js";import"./flex-C6hboL-M.js";import"./img-Botf8PRg.js";import"./video-CIiyt1JC.js";import"./text-By-HRniD.js";import"./divider-COrUw-8f.js";import"./arrow-down-Ck1As612.js";import"./arrow-right-CMVowx_H.js";import"./circles-three-CrjMS8lN.js";import"./mask.component-CPEAlbOT.js";import"./flex.component-CSsERzN1.js";import"./card.component-DK4yBXx1.js";import"./img.component-BXfnIr_a.js";import"./video.component-B4qXNAjO.js";import"./default-typography.styles-DwHxMzUC.js";import"./divider.component-DFGIaDnl.js";import"./arrow-down.component-D0U4mbRK.js";import"./icon.component-BJgPnnvB.js";import"./arrow-right.component-D1ceQ2G1.js";import"./circles-three.component-3Z1WfCDN.js";const A={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...e("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
