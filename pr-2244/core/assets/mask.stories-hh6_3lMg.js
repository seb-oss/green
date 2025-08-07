import{x as o}from"./lit-element-Bx14lxc-.js";import{a as i}from"./argTableProps-Cf_LXBIX.js";import"./mask-UQKZ3YX8.js";import"./card-Cyd-1AEK.js";import"./flex-SIqplLg1.js";import"./button-DohE5iAC.js";import"./container-CCe1QeNV.js";import"./theme-Ccb1dw8X.js";import"./img-rmAMnywu.js";import"./video-CHAkQsVH.js";import"./text-BBWdkNXA.js";import"./divider-DE0OKgPE.js";import"./arrow-down-Cl_s7h0S.js";import"./arrow-right-sKaNGJ1t.js";import"./circles-three-CfB8JhmM.js";import"./custom-elements-Dd74YZjn.js";import"./mask.component-Ccs2pYXl.js";import"./static-B8S6DEnV.js";import"./tokens.style-BebDwfJu.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./declarative-layout-mixins-DHam8wVT.js";import"./flex.component-C5LDCRNW.js";import"./div.component-DV4jT0Ib.js";import"./card.component-9S1PasTR.js";import"./button.component-Z1JTKrRD.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-qrfc5e8h.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./container.component-BlTqh7v8.js";import"./theme.component-B8VfVOQO.js";import"./img.component-DwlrLwrV.js";import"./video.component-CReaFTN5.js";import"./text.component-CkSmcCmr.js";import"./divider.component-Bv1HaYEM.js";import"./arrow-down.component-Dljr-91A.js";import"./icon-mP8di1xV.js";import"./unsafe-html-CYO4avEf.js";import"./arrow-right.component-DfwGdEdg.js";import"./circles-three.component-fhErV4UX.js";const $={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...i("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const tt=["Mask"];export{t as Mask,tt as __namedExportsOrder,$ as default};
