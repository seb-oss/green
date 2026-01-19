import"./img-BqfpJWFw.js";import"./video-Bxmk6Itf.js";import"./card-DwB-XfN3.js";import"./div-Uopd3UQs.js";import"./flex-DLRQzNAh.js";import"./text-CUz5McFs.js";import"./divider-DAIelm3P.js";import"./arrow-down-5pzuz3Ko.js";import"./arrow-right-B2woF0Dm.js";import"./circles-three-CVT-knaU.js";import{x as e}from"./iframe-BQ4eNaz6.js";import"./img.component-DVgeyTVj.js";import"./video.component-CYVruQVi.js";import"./card.component-B2Lp7-rO.js";import"./flex.component-BRb9Ckho.js";import"./default-typography.styles-Cz8sT2uQ.js";import"./divider.component-BmLcqMwx.js";import"./arrow-down.component-BrwWTimr.js";import"./icon.component-CjYBnmJh.js";import"./arrow-right.component-DjoJFgB2.js";import"./circles-three.component-BnHaAEqn.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
