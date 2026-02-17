import"./img-Dt0jcbJ7.js";import"./video-Gs95ujBt.js";import"./card-BQTddVOa.js";import"./div-B0HBJr-R.js";import"./flex-DoveuQPA.js";import"./text-DGW4sABd.js";import"./divider-BHHny5v2.js";import"./arrow-down-BjjX_KZG.js";import"./arrow-right-Bo0eOlBy.js";import"./circles-three-CXbu7DQw.js";import{x as e}from"./iframe-9Cc4SVh6.js";import"./img.component-CtWBNWZN.js";import"./video.component-C4FKMlzd.js";import"./card.component-C04W1d44.js";import"./flex.component-H_OEGOx6.js";import"./default-typography.styles-Dr9H6OoG.js";import"./divider.component-D0IhhMTa.js";import"./arrow-down.component-Ccw0XO9m.js";import"./icon.component-CkCDfQFb.js";import"./arrow-right.component-G5XfIiIY.js";import"./circles-three.component-R_KAz2IP.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
