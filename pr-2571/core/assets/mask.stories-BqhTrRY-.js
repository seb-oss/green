import{x as t}from"./iframe-DuOxvxMM.js";import{a as e}from"./argTableProps-BLilrDpD.js";import"./mask-BJNueQjz.js";import"./card-DQQpCBDO.js";import"./flex-Df0myY6a.js";import"./img-owEhOYVP.js";import"./video-CVD3iaCV.js";import"./text-Dasdv0et.js";import"./divider-C4nQEy7c.js";import"./arrow-down-D0pM319Z.js";import"./arrow-right-DKZ204Fa.js";import"./circles-three-Df5Q9346.js";import"./mask.component-Dh4ZtCGG.js";import"./flex.component-Fp2Ol_1y.js";import"./card.component-D_CSQy-c.js";import"./img.component-1xvTp8D-.js";import"./video.component-CL6cnbn5.js";import"./default-typography.styles-CGfQ2Uxj.js";import"./divider.component-DLbl2Gq-.js";import"./arrow-down.component-HLTBV0Ii.js";import"./icon.component-CUEcHyr6.js";import"./arrow-right.component-BkrmJ-NW.js";import"./circles-three.component-DcgFZKa-.js";const A={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...e("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
