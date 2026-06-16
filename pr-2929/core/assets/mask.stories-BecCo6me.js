import{b as e}from"./iframe-CUpmeMNK.js";import{a as n}from"./argTableProps-bYqBR6o9.js";import"./mask-C2GzA0xi.js";import"./card-Bci2lzjY.js";import"./flex-Bm0dBo_c.js";import"./img-BNwaP7EE.js";import"./video-DgdzpdGd.js";import"./text-AcFjFvoe.js";import"./divider-CvIxJhal.js";import"./arrow-down-CVXgv0FT.js";import"./arrow-right-INJWky1B.js";import"./circles-three-BjdpE5-F.js";import"./preload-helper-PPVm8Dsz.js";import"./mask.component-CQXD0M2W.js";import"./flex.component-BIdx6581.js";import"./card.component-B8fzKbGu.js";import"./img.component-DJJyyJYd.js";import"./video.component-CBSE-lgf.js";import"./text.component-CKyIdy3a.js";import"./default-typography.styles-DcwPPUfq.js";import"./arrow-down.component-CSMUVjc5.js";import"./icon.component-tABWscpR.js";import"./arrow-right.component-CXVWLd0L.js";import"./circles-three.component-DJChMTuK.js";const D={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...n("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
\`\`\``}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...s,render:o=>e`
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
            <gds-text font="display-s; m{display-l}" font-weight="light">
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
  `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
            <gds-text font="display-s; m{display-l}" font-weight="light">
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
}`,...t.parameters?.docs?.source}}};const P=["Mask"];export{t as Mask,P as __namedExportsOrder,D as default};
