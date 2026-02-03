import{x as t}from"./iframe-n1Dj8K3S.js";import{a as e}from"./argTableProps-D56rPIji.js";import"./mask-_ZTr8bWd.js";import"./card-B2rP9g62.js";import"./flex-Bi-ZIuoN.js";import"./img-DxwBpnPj.js";import"./video-BXXD8_Jc.js";import"./text-Cgk3KxdX.js";import"./divider-CBXECnMx.js";import"./arrow-down-aBe-8Wdp.js";import"./arrow-right-zfRE-H_X.js";import"./circles-three-DA6aufY_.js";import"./mask.component-BG-bZv1m.js";import"./flex.component-C4rDnwBK.js";import"./card.component-CQJwQRLA.js";import"./img.component-Df1rKi-d.js";import"./video.component-DnvfgYkZ.js";import"./default-typography.styles-CKPwKUI2.js";import"./divider.component-CZSO0vsv.js";import"./arrow-down.component-Cs0VLVkC.js";import"./icon.component-CHAW-RNs.js";import"./arrow-right.component-qY9OxTej.js";import"./circles-three.component-C0ebtsMA.js";const A={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...e("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
