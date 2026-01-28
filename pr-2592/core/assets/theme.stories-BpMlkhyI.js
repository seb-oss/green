import"./img-CCe4B7mu.js";import"./video-BFRX5fsO.js";import"./card-DE-esGdo.js";import"./div-BXP3rZAq.js";import"./flex-nBIrz49p.js";import"./text-BzAiAWlR.js";import"./divider-DqWSaz_d.js";import"./arrow-down-DTs6-adC.js";import"./arrow-right-BDYMCJ0y.js";import"./circles-three-Bs3DimB_.js";import{x as e}from"./iframe-ByPMS9JH.js";import"./img.component-B2q0vZ9Q.js";import"./video.component-CMLdINmE.js";import"./card.component-CrH3YPvY.js";import"./flex.component-DXQ-9hxN.js";import"./default-typography.styles-CY0bZKhT.js";import"./divider.component-CXCjgs7R.js";import"./arrow-down.component-y_YdChW_.js";import"./icon.component-D2m92_JM.js";import"./arrow-right.component-DRFJvvbI.js";import"./circles-three.component-DdIKbC_Z.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
