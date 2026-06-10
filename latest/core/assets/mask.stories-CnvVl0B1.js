import{b as e}from"./iframe-BrLQcHUa.js";import{a as n}from"./argTableProps-XQCUXS6f.js";import"./mask-CCo3pm-_.js";import"./card-DM115cDq.js";import"./flex-BMMVXRcB.js";import"./img-ComxPKkt.js";import"./video-DAOYy-en.js";import"./text-DEGO2p_9.js";import"./divider-DKKloG4l.js";import"./arrow-down-B6oSJm1g.js";import"./arrow-right-CFE5g-vY.js";import"./circles-three-CW7PDfJd.js";import"./preload-helper-PPVm8Dsz.js";import"./mask.component-CTrZsbVO.js";import"./flex.component-DTquovYs.js";import"./card.component-CH_T5cVN.js";import"./img.component-DT_9lFgD.js";import"./video.component-BAMtZFKX.js";import"./text.component-CqpsmQCa.js";import"./default-typography.styles-CPw531M2.js";import"./arrow-down.component-CwMsEqWG.js";import"./icon.component-B3pt3GSL.js";import"./arrow-right.component-CbUXOPxX.js";import"./circles-three.component-BIN9vgwV.js";const D={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...n("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
