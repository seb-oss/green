import"./img-Bwz27XWT.js";import"./video-COsUzz25.js";import"./card-DRIYPgCh.js";import"./div-Cpoo_QMY.js";import"./flex-B3L9x4Dz.js";import"./text-CbYnrQNf.js";import"./divider-DVlc_oKh.js";import"./arrow-down-DSGB-v0a.js";import"./arrow-right-DBnKhi5l.js";import"./circles-three-BzIAf_gH.js";import{x as e}from"./iframe-BNaQQkJH.js";import"./img.component-CfZz6NwF.js";import"./video.component-Cp2jvRjs.js";import"./card.component-KzQwFi6G.js";import"./flex.component-BcOD8jwx.js";import"./default-typography.styles-BCcK9773.js";import"./divider.component-Cz8ONG5e.js";import"./arrow-down.component-DGTrsVWu.js";import"./icon.component-BHq7_Gnp.js";import"./arrow-right.component-o7q929UI.js";import"./circles-three.component-DnZd7aBW.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
