import"./img-WqCkzgNP.js";import"./video-CE_r8FIt.js";import"./card-BQE9D101.js";import"./div-BxmNCv_l.js";import"./flex-Bk9zj1Ie.js";import"./text-Cpc0Aa2b.js";import"./divider-CRqjhkRc.js";import"./arrow-down-C5i_cBFW.js";import"./arrow-right-Y-UNwKT4.js";import"./circles-three-DB1X1d0V.js";import{x as e}from"./iframe-CDTFv-C8.js";import"./img.component-a3g3fMIK.js";import"./video.component-DRxJmonH.js";import"./card.component-CrPfjVg7.js";import"./flex.component-DealITh5.js";import"./default-typography.styles-BtSdAxzw.js";import"./divider.component-BatwwC8u.js";import"./arrow-down.component-BJbluFnq.js";import"./icon.component-BD9gw1Q3.js";import"./arrow-right.component-Dw-VKbYt.js";import"./circles-three.component-CMrrm-5F.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
