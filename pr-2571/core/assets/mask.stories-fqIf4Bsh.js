import{x as t}from"./iframe-CIyCOr3z.js";import{a as e}from"./argTableProps-BBeIRQpF.js";import"./mask-Dd9sAQD1.js";import"./card-BoHx761Y.js";import"./flex-8tL0UkXf.js";import"./img-Cmt6zi8i.js";import"./video-F9aEYhAF.js";import"./text-D7D_rfNO.js";import"./divider-BoU5QXAR.js";import"./arrow-down-DA1hm_OX.js";import"./arrow-right-DuuL_Mw1.js";import"./circles-three-sBjAMkFz.js";import"./mask.component-C7KUWR3T.js";import"./flex.component-zzL_HQIe.js";import"./card.component-DYSrcaMg.js";import"./img.component-CIoSF69j.js";import"./video.component-Tb5l2gDy.js";import"./default-typography.styles-6Y6NPAo5.js";import"./divider.component-Cc04zcGp.js";import"./arrow-down.component-CgFngGF4.js";import"./icon.component-BU7mvxId.js";import"./arrow-right.component-D54VDRwc.js";import"./circles-three.component-ClW_M_ko.js";const A={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...e("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
