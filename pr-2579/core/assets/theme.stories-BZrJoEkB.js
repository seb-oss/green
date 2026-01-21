import"./img-BOJJdkMA.js";import"./video-D9zlVyfe.js";import"./card-ptPY6VGT.js";import"./div-Bzm9MOOG.js";import"./flex-DGnl2_VG.js";import"./text-a0ku0o0J.js";import"./divider-NKpHMMBB.js";import"./arrow-down-D_AYiB7b.js";import"./arrow-right-B9Vr6WdX.js";import"./circles-three-DoiPtqx-.js";import{x as e}from"./iframe-2bPt0s27.js";import"./img.component-B2RAFWjN.js";import"./video.component-Dc_CluQN.js";import"./card.component-CVA6Fgq6.js";import"./flex.component-CDR14qMl.js";import"./default-typography.styles-C7BrPbKi.js";import"./divider.component-BBeuqc59.js";import"./arrow-down.component-BaIJU7K6.js";import"./icon.component-wvAac8OZ.js";import"./arrow-right.component-DH_h7ZWs.js";import"./circles-three.component-CZOz7RQm.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
