import{x as t}from"./iframe-DRKs3nTV.js";import{a as e}from"./argTableProps-B7LTRWY5.js";import"./mask-Do-mwpt6.js";import"./card-D8R_bGCP.js";import"./flex-2hCV8jpf.js";import"./img-CxVfiCxY.js";import"./video-BM2RYVAz.js";import"./text-D6KuVJgU.js";import"./divider-C1DsRdfj.js";import"./arrow-down-v09Jqs8a.js";import"./arrow-right-Dg8h4WOL.js";import"./circles-three-DdBx-ZqE.js";import"./mask.component-BQoHwLFm.js";import"./flex.component-DrK28tAb.js";import"./card.component-DIPr--u9.js";import"./img.component-DjNTezzS.js";import"./video.component-CWyYFR2l.js";import"./default-typography.styles-DiW_uU5w.js";import"./divider.component-v_P7wnGA.js";import"./arrow-down.component-BD8wpBuA.js";import"./icon.component-B9rMDmtx.js";import"./arrow-right.component-Bt-qf7L1.js";import"./circles-three.component-Bq6kJPmr.js";const A={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...e("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
