import"./img-CL8UQhns.js";import"./video-BpbE9jgp.js";import"./card-NNUU_LPK.js";import"./div-hLoiCbZv.js";import"./flex-CgDHQ9ZX.js";import"./text-BUdUDL_i.js";import"./divider-CzAQPzRW.js";import"./arrow-down-BkkmoJoY.js";import"./arrow-right-CjGmZ7j8.js";import"./circles-three-BSXccULv.js";import{x as e}from"./iframe-DFZq2VWP.js";import"./img.component-CV9GntXK.js";import"./video.component-Dc5qMZ-J.js";import"./card.component-BBtAMepo.js";import"./flex.component-DFWMQkZC.js";import"./default-typography.styles-DOMDS0Zr.js";import"./divider.component-DPcr8SjE.js";import"./arrow-down.component-BrDZ_fyK.js";import"./icon.component-BHY8V_GK.js";import"./arrow-right.component--wKlLRnd.js";import"./circles-three.component-5xyJf09T.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
