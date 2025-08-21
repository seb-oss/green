import{x as o}from"./lit-element-Bx14lxc-.js";import{a as i}from"./argTableProps-CXxYXrSi.js";import"./mask-BziQwKzz.js";import"./card-D4D9k6OR.js";import"./flex-DpcX_3Wd.js";import"./button-D5ZcL_qW.js";import"./theme-ClAfc-a2.js";import"./img-BY7Bi3mN.js";import"./video-B5wCVy3B.js";import"./text-Ctd9_gKI.js";import"./divider-CkUWOY9s.js";import"./arrow-down-CUO1uex2.js";import"./arrow-right-DXgJPYuD.js";import"./circles-three-Csu74ibQ.js";import"./custom-elements-CDKWD9uz.js";import"./mask.component-D4_IXgOB.js";import"./static-B8S6DEnV.js";import"./tokens.style-B41Dpirr.js";import"./gds-element-DJNCW3iR.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./declarative-layout-mixins-CquYcIh8.js";import"./flex.component-BCJTQ2jJ.js";import"./div.component-DuhRpCTJ.js";import"./card.component-Dx2ZUUIy.js";import"./button.component-DkxkWQde.js";import"./query-p8xgzTDt.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./transitional-styles-DTrj-OFY.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./theme.component-bGE4VX_N.js";import"./img.component-B-YzZTK_.js";import"./video.component-CawQXpsV.js";import"./text.component-BrAJBtVa.js";import"./divider.component-Cx8iHpM0.js";import"./arrow-down.component-DhiV4FJc.js";import"./icon-DdzZnqx5.js";import"./unsafe-html-CYO4avEf.js";import"./arrow-right.component-DEGzaL9p.js";import"./circles-three.component-BOH5p8mJ.js";const Y={title:"Components/Mask",component:"gds-mask",tags:["autodocs"],argTypes:{...i("gds-mask")},parameters:{docs:{description:{component:`The Mask component creates a gradient overlay effect that can be used to improve content visibility
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
