import"./img-P4at_lto.js";import"./video-BHrtvitP.js";import"./card-nZssAVCL.js";import"./div-BXzTl6H5.js";import"./flex-Cs0TqMWW.js";import"./text-oQdNJpzm.js";import"./divider-DMbM-7Tl.js";import"./arrow-down-BwAxdfpH.js";import"./arrow-right-1a8YvLCy.js";import"./circles-three-D_FcrxSF.js";import{x as e}from"./iframe-BCOtacgH.js";import"./img.component-CM3u2IaS.js";import"./video.component-4pFMOLIJ.js";import"./card.component-Vxn5B0q8.js";import"./flex.component-DluP1aJt.js";import"./default-typography.styles-B4ATXj5_.js";import"./divider.component-B-zb0jtU.js";import"./arrow-down.component-X-uvEMjX.js";import"./icon.component-c9NQRHfL.js";import"./arrow-right.component-DIY9_N5U.js";import"./circles-three.component-Cv8BfLGF.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
are applied to its children. It can be used to control light and dark mode, as well as which
design version the children should use (2016 or 2023)

For the 2016 styles to work, [Transitioanl Styles](http://localhost:4400/?path=/docs/concepts-transitional-styles--docs)
must be imported and and registered for the used components.

@status beta`}}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0},globals:{disableTheme:!0}}},D={...t,parameters:{...t.parameters,globals:{disableTheme:!0}},render:()=>e`
    <gds-grid gap="m" columns="2">
      <gds-flex flex-direction="column" gap="m">
        <gds-theme color-scheme="auto" design-version="2023">
          <gds-card variant="primary" align="center">
            <gds-button>Auto mode button in a card (2023)</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="light" design-version="2023">
          <gds-card variant="primary" align="center">
            <gds-button>Light mode button in a card</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="dark" design-version="2023">
          <gds-card variant="primary" align="center">
            <gds-button>Dark mode button in a card</gds-button>
          </gds-card>
        </gds-theme>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-theme color-scheme="auto" design-version="2016">
          <gds-card variant="primary" align="center">
            <gds-button>Auto mode button in a card (2016)</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="light" design-version="2016">
          <gds-card variant="primary" align="center">
            <gds-button>Light mode button in a card (2016)</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="dark" design-version="2016">
          <gds-card variant="primary" align="center">
            <gds-button>Dark mode button in a card (2016)</gds-button>
          </gds-card>
        </gds-theme>
      </gds-flex>
    </gds-grid>
  `},S=["Theme"];export{D as Theme,S as __namedExportsOrder,w as default};
