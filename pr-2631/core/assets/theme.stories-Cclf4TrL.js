import"./img-BN7GOIdh.js";import"./video-GsnRYvsc.js";import"./card-DicnVQgg.js";import"./div-Cg-Mn5pO.js";import"./flex-CctrsQiv.js";import"./text-DGnSjNfA.js";import"./divider-D0AFivGY.js";import"./arrow-down-BYSROQcX.js";import"./arrow-right-Dkhzs8_Q.js";import"./circles-three-EhzCXvqT.js";import{x as e}from"./iframe-XCkOX_Dk.js";import"./img.component-DxpZ0dNR.js";import"./video.component-3NHDXmpI.js";import"./card.component-D5NoxMXZ.js";import"./flex.component-DKiKeHQX.js";import"./default-typography.styles-BNcNdRUi.js";import"./divider.component-C9itpI5a.js";import"./arrow-down.component-DAKI8Xby.js";import"./icon.component-CEoqNPUd.js";import"./arrow-right.component-DL1H9RRJ.js";import"./circles-three.component-C68OAg0i.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
