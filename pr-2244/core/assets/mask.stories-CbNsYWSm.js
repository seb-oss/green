import{x as o}from"./lit-element-Bx14lxc-.js";import{a as i}from"./argTableProps-72IYF_aR.js";import"./mask-wpScljr2.js";import"./card-DHtJBET2.js";import"./flex-D110lVm0.js";import"./button-CyvsB0N6.js";import"./div-DYUnMRHp.js";import"./theme-D9cGFP71.js";import"./img-Dypelkwo.js";import"./video-PeT0wbGB.js";import"./text-C2aq6BdM.js";import"./divider-uqNoH5w6.js";import"./arrow-down-CBKupYA2.js";import"./arrow-right-i7xC6sCx.js";import"./circles-three-BXDv-JT6.js";import"./custom-elements-YBNrcqEs.js";import"./mask.component-CY5Y3T75.js";import"./static-B8S6DEnV.js";import"./tokens.style-Kn_onYIX.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./declarative-layout-mixins-DHam8wVT.js";import"./flex.component-Dkxsb3b9.js";import"./div.component-CuGXkC9B.js";import"./card.component-BUB9hXTT.js";import"./button.component-DZRzRfKc.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DNXVuSY2.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./theme.component-7PZpt2t3.js";import"./img.component-BT2Lhn6v.js";import"./video.component-CKrdDvae.js";import"./text.component-BwmaatYo.js";import"./divider.component-9G54erJs.js";import"./arrow-down.component-CrBWtV65.js";import"./icon-Cw5ADNaL.js";import"./unsafe-html-CYO4avEf.js";import"./arrow-right.component-DyQ1MpCb.js";import"./circles-three.component-r0W947oZ.js";const Z={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...i("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
or create visual hierarchy. It's particularly useful when placing text over images or creating
fade effects.


### Basic Usage

The mask component is typically used in combination with images or videos to create gradient overlays:

\`\`\`html
<gds-card position="relative" padding="0" overflow="hidden">
  <gds-img src="path/to/image.jpg"></gds-img>
  <gds-mask
    background="01/0.9"
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
        background="01/0.9"
        mask-image="top"
        position="absolute"
        inset="50% 0 0 0"
        level="3"
        color="03"
        flex-direction="column"
        justify-content="center"
        align-items="flex-start"
        gap="xl"
        padding="6xl"
      >
        <gds-flex flex-direction="column" gap="s">
          <gds-text font="display-xl">Sustainability</gds-text>
          <gds-text tag="p">
            Actively supporting the net zero transition.
          </gds-text>
        </gds-flex>
        <gds-theme color-scheme="dark" design-version="2023">
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
        background="01/0.9"
        mask-image="top"
        position="absolute"
        inset="50% 0 0 0"
        level="3"
        color="03"
        flex-direction="column"
        justify-content="center"
        align-items="flex-start"
        gap="xl"
        padding="6xl"
      >
        <gds-flex flex-direction="column" gap="s">
          <gds-text font="display-xl">Sustainability</gds-text>
          <gds-text tag="p">
            Actively supporting the net zero transition.
          </gds-text>
        </gds-flex>
        <gds-theme color-scheme="dark" design-version="2023">
          <gds-button>Our impact</gds-button>
        </gds-theme>
      </gds-mask>
    </gds-card>
  \`
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const $=["Mask"];export{t as Mask,$ as __namedExportsOrder,Z as default};
