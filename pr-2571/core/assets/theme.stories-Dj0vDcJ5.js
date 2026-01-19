import"./img-owEhOYVP.js";import"./video-CVD3iaCV.js";import"./card-DQQpCBDO.js";import"./div-C4f5vWCQ.js";import"./flex-Df0myY6a.js";import"./text-Dasdv0et.js";import"./divider-C4nQEy7c.js";import"./arrow-down-D0pM319Z.js";import"./arrow-right-DKZ204Fa.js";import"./circles-three-Df5Q9346.js";import{x as e}from"./iframe-DuOxvxMM.js";import"./img.component-1xvTp8D-.js";import"./video.component-CL6cnbn5.js";import"./card.component-D_CSQy-c.js";import"./flex.component-Fp2Ol_1y.js";import"./default-typography.styles-CGfQ2Uxj.js";import"./divider.component-DLbl2Gq-.js";import"./arrow-down.component-HLTBV0Ii.js";import"./icon.component-CUEcHyr6.js";import"./arrow-right.component-BkrmJ-NW.js";import"./circles-three.component-DcgFZKa-.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
