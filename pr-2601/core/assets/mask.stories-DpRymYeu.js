import{x as t}from"./iframe-B9-JWcQZ.js";import{a as e}from"./argTableProps-DM-XBptL.js";import"./mask-CapvMLBs.js";import"./card-BI2jVI3U.js";import"./flex-DQiX8vKb.js";import"./img-T5KGKNZt.js";import"./video-9OD1PGtR.js";import"./text-DlBTdAx1.js";import"./divider-BzGxFQXx.js";import"./arrow-down-B4gpHMib.js";import"./arrow-right-CmOpJwKe.js";import"./circles-three-lCozAPJI.js";import"./mask.component-BOYIqcQ0.js";import"./flex.component-Bn7BNe8a.js";import"./card.component-D5Ge48lT.js";import"./img.component-CUW0z5jU.js";import"./video.component-CzE4VMyG.js";import"./default-typography.styles-Cd6ZlkfV.js";import"./divider.component-DJA4pd31.js";import"./arrow-down.component-BYyqbajx.js";import"./icon.component-CYx4zgop.js";import"./arrow-right.component-Cywi7N6h.js";import"./circles-three.component-CjfC9EyA.js";const A={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...e("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
