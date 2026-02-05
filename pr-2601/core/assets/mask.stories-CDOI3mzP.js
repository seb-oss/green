import{x as t}from"./iframe-BCOtacgH.js";import{a as e}from"./argTableProps-BIhd_aJB.js";import"./mask-CZx2L0mG.js";import"./card-nZssAVCL.js";import"./flex-Cs0TqMWW.js";import"./img-P4at_lto.js";import"./video-BHrtvitP.js";import"./text-oQdNJpzm.js";import"./divider-DMbM-7Tl.js";import"./arrow-down-BwAxdfpH.js";import"./arrow-right-1a8YvLCy.js";import"./circles-three-D_FcrxSF.js";import"./mask.component-DOlki9bd.js";import"./flex.component-DluP1aJt.js";import"./card.component-Vxn5B0q8.js";import"./img.component-CM3u2IaS.js";import"./video.component-4pFMOLIJ.js";import"./default-typography.styles-B4ATXj5_.js";import"./divider.component-B-zb0jtU.js";import"./arrow-down.component-X-uvEMjX.js";import"./icon.component-c9NQRHfL.js";import"./arrow-right.component-DIY9_N5U.js";import"./circles-three.component-Cv8BfLGF.js";const A={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...e("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
