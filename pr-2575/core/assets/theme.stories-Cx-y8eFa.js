import"./img-DhaMtm3B.js";import"./video-BypkniI6.js";import"./card-CWZE5PU4.js";import"./div-lMbzkCQC.js";import"./flex-CRTNrUwp.js";import"./text-BmsXqh_G.js";import"./divider-Dow04fOA.js";import"./arrow-down-BdcqwVX-.js";import"./arrow-right-CMcM1NMZ.js";import"./circles-three-BIa3QeYm.js";import{x as e}from"./iframe-5mjnOIbQ.js";import"./img.component-C9DuOljW.js";import"./video.component-D1BbkJCc.js";import"./card.component-Ce8OPzII.js";import"./flex.component-B61xVOzx.js";import"./default-typography.styles-DTC5Hohg.js";import"./divider.component-WPLFlHT6.js";import"./arrow-down.component-CAf6Cv2p.js";import"./icon.component-BJMCEAD6.js";import"./arrow-right.component-CEO4RDUb.js";import"./circles-three.component-DE2Hy13P.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
