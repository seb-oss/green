import"./img-Ih8urXIj.js";import"./video-CdHcC7mm.js";import"./card-Dz_7A01K.js";import"./div-9kngH1qx.js";import"./flex-gzUAHg-6.js";import"./text-Uw6uLsg0.js";import"./divider-B_s5qUZ8.js";import"./arrow-down-BVoYVAmZ.js";import"./arrow-right-BWG15bwi.js";import"./circles-three-B8_RdQVS.js";import{x as e}from"./iframe-CVFmexQP.js";import"./img.component-b2ZMeTX3.js";import"./video.component-0CIXJkXP.js";import"./card.component-BfEPcx_t.js";import"./flex.component-CNFtT5Hn.js";import"./default-typography.styles-De6p4ggV.js";import"./divider.component-Boh8WERE.js";import"./arrow-down.component-Dm_Q-Csw.js";import"./icon.component-Da1jjeO2.js";import"./arrow-right.component-BdwTI-c1.js";import"./circles-three.component-BUUYJ32s.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
