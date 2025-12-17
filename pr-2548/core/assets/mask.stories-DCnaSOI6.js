import{x as o}from"./iframe-BwDoi1Fm.js";import{a as i}from"./argTableProps-Bb-AQooa.js";import"./mask-QeYNu2s2.js";import"./card-VzCdd3kH.js";import"./flex-C3XxBz7h.js";import"./img-CIReRonv.js";import"./video-CbRJEpud.js";import"./text-D193KjEj.js";import"./divider-DvID7qfS.js";import"./arrow-down-B5Z9LMOD.js";import"./arrow-right-YTBjR8ev.js";import"./circles-three-i7Xl6Eff.js";import"./preload-helper-Dp1pzeXC.js";import"./mask.component-Dg08Uvr2.js";import"./flex.component-CCTIOSPn.js";import"./card.component-MULgC75p.js";import"./img.component-0A5UxjPm.js";import"./video.component-bNs3tC4O.js";import"./default-typography.styles-B2HMty9c.js";import"./divider.component-CR373eHU.js";import"./arrow-down.component-B4rnp1X5.js";import"./icon.component-DPVsjgwj.js";import"./arrow-right.component-C2ssOXce.js";import"./circles-three.component-BRl8ZgBj.js";const z={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...i("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
\`\`\``}}}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...a,render:r=>o`
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
  `};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
  \`
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const F=["Mask"];export{t as Mask,F as __namedExportsOrder,z as default};
