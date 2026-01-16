import"./img-Cytg_Z8m.js";import"./video-Cffo8LiH.js";import"./card-Cbn3eHsn.js";import"./div-DjtQY1Mh.js";import"./flex-DxJoojJE.js";import"./text-BHEoZvPg.js";import"./divider-C5qHgaJo.js";import"./arrow-down-fNeMZ8V_.js";import"./arrow-right-DNxHNmaI.js";import"./circles-three-DC85TCz1.js";import{x as e}from"./iframe--vWvZ7y_.js";import"./img.component-C-ZtryFh.js";import"./video.component-CTPgEmXj.js";import"./card.component-DVsY5IqQ.js";import"./flex.component-Bu9Fk6VG.js";import"./default-typography.styles-BLmgj2CW.js";import"./divider.component-B8vTCgvF.js";import"./arrow-down.component-Bb9axUlW.js";import"./icon.component-CY3ew2P1.js";import"./arrow-right.component-DUbIjej1.js";import"./circles-three.component-fJW0CSoT.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
