import"./img-CU25_8r7.js";import"./video-GZXyFXpX.js";import"./card-Dzvo_EE7.js";import"./div-DCRUy-QW.js";import"./flex-BE0yi5Jb.js";import"./text-BzQmIpb5.js";import"./divider-CLlCci5t.js";import"./arrow-down-C0D6ATSA.js";import"./arrow-right-ANaoblAx.js";import"./circles-three-BBUD0m_s.js";import{x as e}from"./iframe-CNFifxUN.js";import"./img.component-Z9SCbTX-.js";import"./video.component-DNePBvS6.js";import"./card.component-BNTM-i5u.js";import"./flex.component-CEqnAFZd.js";import"./default-typography.styles-CNHdqPyf.js";import"./divider.component-B5kXh8QP.js";import"./arrow-down.component-CwV584uq.js";import"./icon.component-6pI-3bW1.js";import"./arrow-right.component-k4xBzT6T.js";import"./circles-three.component-DibTbUAI.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
