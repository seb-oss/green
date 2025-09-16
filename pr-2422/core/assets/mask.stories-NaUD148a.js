import{x as o}from"./lit-element-Bx14lxc-.js";import{a as i}from"./argTableProps-CAa49RSg.js";import"./mask-DczI9ypX.js";import"./card-z1KyQcao.js";import"./flex-BtxQsGDK.js";import"./button-MTCzzpEr.js";import"./theme-BfDtkvD9.js";import"./img-BRCY440O.js";import"./video-Bs8YgwQT.js";import"./text-CGs4FaNM.js";import"./divider-YvfEPVIS.js";import"./arrow-down-iHo519yC.js";import"./arrow-right-DbiDjzwV.js";import"./circles-three-q8itDONU.js";import"./custom-elements-CEFzoGnd.js";import"./mask.component-BjqQSMWW.js";import"./static-B8S6DEnV.js";import"./tokens.style-BbYzqIl5.js";import"./gds-element-DTROifYq.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./declarative-layout-mixins-DjJmHTNk.js";import"./flex.component-DrvIPzOi.js";import"./div.component-B29G9lH6.js";import"./card.component-ZQVND0Jh.js";import"./button.component-WUQ40XM0.js";import"./query-p8xgzTDt.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./transitional-styles-aKK79zAz.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./theme.component-Zo9FWl_V.js";import"./img.component-DNaHAweo.js";import"./video.component-DFBstefi.js";import"./text.component-Bj-mfcJo.js";import"./divider.component-C982OqGc.js";import"./arrow-down.component-BntWZSG9.js";import"./icon-NRfJz-OU.js";import"./unsafe-html-CYO4avEf.js";import"./arrow-right.component-CbCSkl7r.js";import"./circles-three.component-Bei3woQd.js";const Y={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...i("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
\`\`\``}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...r,render:a=>o`
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Z=["Mask"];export{t as Mask,Z as __namedExportsOrder,Y as default};
