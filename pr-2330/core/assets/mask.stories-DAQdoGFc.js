import{x as o}from"./lit-element-Bx14lxc-.js";import{a as i}from"./argTableProps-CWzuLIM9.js";import"./mask-DTvGHjAF.js";import"./card-DCKRysmb.js";import"./flex-ZjNzsKDc.js";import"./button-D3fxY6OD.js";import"./theme-D54rvt2r.js";import"./img-Cmskkwhk.js";import"./video-Dl_8FFBW.js";import"./text-BNE_MjdH.js";import"./divider-THvEaUvV.js";import"./arrow-down-c1nXJfSj.js";import"./arrow-right-Ckn0yNVd.js";import"./circles-three-Ci0Preip.js";import"./custom-elements-wPWL1UB7.js";import"./mask.component-CLKce9vA.js";import"./static-B8S6DEnV.js";import"./tokens.style-B4aufDLd.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./declarative-layout-mixins-DHam8wVT.js";import"./flex.component-BayeNKqW.js";import"./div.component-6vFzTbQY.js";import"./card.component-CqGj9CpC.js";import"./button.component-C2-edfKb.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./transitional-styles-TO_euVVN.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./theme.component-BNIyEvCc.js";import"./img.component--990PlCC.js";import"./video.component-Dommi5as.js";import"./text.component-BKTZoW0W.js";import"./divider.component-A9Va9E_M.js";import"./arrow-down.component-DeZcWwft.js";import"./icon-D5lvQUnt.js";import"./unsafe-html-CYO4avEf.js";import"./arrow-right.component-T6HbnGq8.js";import"./circles-three.component-D7L3g9We.js";const Y={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...i("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Z=["Mask"];export{t as Mask,Z as __namedExportsOrder,Y as default};
