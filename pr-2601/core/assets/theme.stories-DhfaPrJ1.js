import"./img-CWFruix4.js";import"./video-DUCUahe3.js";import"./card-Brihcow9.js";import"./div-CKRvO7aU.js";import"./flex-CK-KMwcg.js";import"./text-BmZzRDhG.js";import"./divider-D0Esp1mx.js";import"./arrow-down-BK7kCLw7.js";import"./arrow-right-lgkDFDiX.js";import"./circles-three-Cq_u1ITM.js";import{x as e}from"./iframe-B_Sc2FD_.js";import"./img.component-ac13Gzdt.js";import"./video.component-DkKt2gQM.js";import"./card.component-DqqIVQ9y.js";import"./flex.component-7kB9yVhW.js";import"./default-typography.styles-BPayJJs_.js";import"./divider.component-C5J3-bHz.js";import"./arrow-down.component-U8BayAa6.js";import"./icon.component-CO_afi3Z.js";import"./arrow-right.component-BeKG7awp.js";import"./circles-three.component-CA26dlm0.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
