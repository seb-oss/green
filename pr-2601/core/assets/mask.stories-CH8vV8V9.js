import{x as t}from"./iframe-DZfCx1ov.js";import{a as e}from"./argTableProps-ChfjJlnJ.js";import"./mask-BoKPEExl.js";import"./card-BRESDZCP.js";import"./flex-DQL0f5nx.js";import"./img-D3OGipFf.js";import"./video-BePlmhmd.js";import"./text-CWJnAPn6.js";import"./divider-DNOPqKgG.js";import"./arrow-down-DknUj-Mi.js";import"./arrow-right-DtG1yP6D.js";import"./circles-three-BmNzqGv4.js";import"./mask.component-DtiCp3ZA.js";import"./flex.component-DTmNbtRV.js";import"./card.component-BiYx90g4.js";import"./img.component-BvE9BrDm.js";import"./video.component-CCWloT3c.js";import"./default-typography.styles-C_xj-fmf.js";import"./divider.component-DIKCHoVy.js";import"./arrow-down.component-qJIdJX4j.js";import"./icon.component-I5R4l-On.js";import"./arrow-right.component-CFk3fKTo.js";import"./circles-three.component-LuiZKq4E.js";const A={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...e("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
