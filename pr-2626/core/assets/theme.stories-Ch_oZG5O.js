import"./img-COY515CR.js";import"./video-CCi1-Ft3.js";import"./card-CodVnfxr.js";import"./div-Bz0AoQ7M.js";import"./flex-CPn0VONo.js";import"./text-CxkV9x__.js";import"./divider-CSlYMEqM.js";import"./arrow-down-D5iycbsg.js";import"./arrow-right-DdhP8cMs.js";import"./circles-three-Dt02rH9J.js";import{x as e}from"./iframe-Bc4_q3Ov.js";import"./img.component-zIhKZpWO.js";import"./video.component-CTFHZGh2.js";import"./card.component-CaiialMi.js";import"./flex.component-Cl6lWm1u.js";import"./default-typography.styles-BU0xi_Uu.js";import"./divider.component-DAWKwFDF.js";import"./arrow-down.component-CCfgPZcI.js";import"./icon.component-CE4gJ_Rt.js";import"./arrow-right.component-BpDkblcw.js";import"./circles-three.component-NK5J-MYN.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
