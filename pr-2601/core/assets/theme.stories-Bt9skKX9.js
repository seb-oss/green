import"./img-TNiPMmAp.js";import"./video-CwD2R33i.js";import"./card-GRuYr0Nz.js";import"./div-CakyHfTm.js";import"./flex-DkIrlto8.js";import"./text-C5PMkCD7.js";import"./divider-DIx5-CmW.js";import"./arrow-down-21jayEOr.js";import"./arrow-right-DMyEdRZ_.js";import"./circles-three-3ZstDjJ7.js";import{x as e}from"./iframe-DmRPdh8P.js";import"./img.component-Br0xZD8P.js";import"./video.component-BcdE4oJJ.js";import"./card.component-B6gcHpMy.js";import"./flex.component-D5IaVGuz.js";import"./default-typography.styles-TS5D8YDJ.js";import"./divider.component-UXVIZWvF.js";import"./arrow-down.component-Be8vAiEI.js";import"./icon.component-CzdM3tTD.js";import"./arrow-right.component-D9XyoV2x.js";import"./circles-three.component-C05WFX1b.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
