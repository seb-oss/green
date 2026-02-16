import"./img-Dik1P_cc.js";import"./video-C1y9kK2O.js";import"./card-DM2X9igB.js";import"./div-gUzbT-y9.js";import"./flex-B9P-0j-3.js";import"./text-DJg3lkN2.js";import"./divider-Bwm0GjRt.js";import"./arrow-down-CyT3gWv-.js";import"./arrow-right-CcR_xEt8.js";import"./circles-three-BadHJUi_.js";import{x as e}from"./iframe-B_dd3l6Z.js";import"./img.component-CaIi4uE3.js";import"./video.component-eW9KPFDu.js";import"./card.component-CCrFnE3X.js";import"./flex.component-DKud6WrH.js";import"./default-typography.styles-CBHVYBFU.js";import"./divider.component-Dy6yf24t.js";import"./arrow-down.component-CEQRdbqf.js";import"./icon.component-BrjBapjD.js";import"./arrow-right.component-Dr7eYmzi.js";import"./circles-three.component-Zi9cbc7e.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
