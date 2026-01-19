import{x as t}from"./iframe-Dq4KnV63.js";import{a as e}from"./argTableProps-n5KuER0n.js";import"./mask-BBxIVHdP.js";import"./card-DxE75Ocd.js";import"./flex-B9ezabvY.js";import"./img-PNb5IOKj.js";import"./video-B79k9jhR.js";import"./text-x4kS8ocY.js";import"./divider-BfG-OuGV.js";import"./arrow-down-jPT1jl2B.js";import"./arrow-right-CxeG-nze.js";import"./circles-three-hQgL_FPP.js";import"./mask.component-DQAszJDe.js";import"./flex.component-BnWYtpRs.js";import"./card.component-C6G7l2lb.js";import"./img.component-DY9J3Lbr.js";import"./video.component-BxdbhRMq.js";import"./default-typography.styles-D_ltfjF3.js";import"./divider.component-85ZikNwJ.js";import"./arrow-down.component-lhfI5W9f.js";import"./icon.component-BHGNAYjw.js";import"./arrow-right.component-DN0Bvdg4.js";import"./circles-three.component-BzZpAswl.js";const A={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...e("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
