import{x as t}from"./iframe-BA3TVzOL.js";import{a as e}from"./argTableProps-cE9rvP7h.js";import"./mask-T2M7P6a8.js";import"./card-Nh8N7JGo.js";import"./flex-BEV7UTdd.js";import"./img-COIX_eHX.js";import"./video-w4YyQzJg.js";import"./text-BSZQlWvp.js";import"./divider-6Tifejzr.js";import"./arrow-down-Dm1qoaS_.js";import"./arrow-right-C46EEuqa.js";import"./circles-three-xDEcKR8O.js";import"./mask.component-Br2ldXcg.js";import"./flex.component-DaRqz6HB.js";import"./card.component-kHBbkZHO.js";import"./img.component-CCfFk13o.js";import"./video.component-4QMhR-lB.js";import"./default-typography.styles-D-ZQ6c8M.js";import"./divider.component-CvrUNjsM.js";import"./arrow-down.component-qBDLD0m9.js";import"./icon.component-DNkU6CuX.js";import"./arrow-right.component-CgGMYGbM.js";import"./circles-three.component-G0fwNml8.js";const A={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...e("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
