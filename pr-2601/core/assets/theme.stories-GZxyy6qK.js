import"./img-ChSVvjCR.js";import"./video-BKzq8zLN.js";import"./card-uvS1bNO8.js";import"./div-Bvh6NIWO.js";import"./flex-CzCccVWM.js";import"./text-CGwEfmNj.js";import"./divider-DNQ6yNwQ.js";import"./arrow-down-mvJxYwjt.js";import"./arrow-right-BWZc3wLH.js";import"./circles-three-Bl4x4XVP.js";import{x as e}from"./iframe-CiafQbDh.js";import"./img.component-C5TaV2U-.js";import"./video.component-CXoObwL9.js";import"./card.component-DBCk7HQI.js";import"./flex.component-Cm4ZQlRX.js";import"./default-typography.styles-D9KPYcem.js";import"./divider.component-NAcJSnCG.js";import"./arrow-down.component-GWXMIqSW.js";import"./icon.component-DUnEPO_I.js";import"./arrow-right.component-Bgcp2eM_.js";import"./circles-three.component-Dm3nElpX.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
