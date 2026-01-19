import"./img-NsSMKuae.js";import"./video-DLfNtmSv.js";import"./card-C5x0x5LV.js";import"./div-DoisE_rm.js";import"./flex-CBHUutJ_.js";import"./text-YmIhC6ea.js";import"./divider-C94oy4rz.js";import"./arrow-down-BYsO6gQ6.js";import"./arrow-right-DUvI7OdV.js";import"./circles-three-2C_C24HM.js";import{x as e}from"./iframe-DrpbGOBy.js";import"./img.component-BqQb1VLu.js";import"./video.component-CSJnFak2.js";import"./card.component-TDhnY8Bn.js";import"./flex.component-BBy4cixO.js";import"./default-typography.styles-D6Os5mfZ.js";import"./divider.component-CjGxvDo9.js";import"./arrow-down.component-BK2JUkm4.js";import"./icon.component-FS7sQWzM.js";import"./arrow-right.component-CA1Tq8zS.js";import"./circles-three.component-Wut8BlJH.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
