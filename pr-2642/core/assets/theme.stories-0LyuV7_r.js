import"./img-DfMh85zD.js";import"./video-Nh1uiaOD.js";import"./card-BsLrixCk.js";import"./div-DUpY2Avl.js";import"./flex-DRMheoAD.js";import"./text-C5h8O9fY.js";import"./divider-Bv_NpFXL.js";import"./arrow-down-Dt7kM5Ow.js";import"./arrow-right-BH1OZwOR.js";import"./circles-three-h3Iibb6a.js";import{x as e}from"./iframe-DWU_JXmu.js";import"./img.component-B1P55gcI.js";import"./video.component-bV6mUai3.js";import"./card.component-2cWsT0sL.js";import"./flex.component-nwBDGrB1.js";import"./default-typography.styles-Bf9fcxHG.js";import"./divider.component-CI52EHP9.js";import"./arrow-down.component-dAPovX_W.js";import"./icon.component-tf5hdNYz.js";import"./arrow-right.component-JIYwa6xZ.js";import"./circles-three.component-E-1wb5XJ.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
