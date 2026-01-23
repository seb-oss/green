import"./img-BDvP7vUM.js";import"./video-C-0wkLcm.js";import"./card-CX0mu3ys.js";import"./div-g77T-Jd3.js";import"./flex-D98huMmd.js";import"./text-CcYVKuCY.js";import"./divider-Dcz6iwNV.js";import"./arrow-down-CQPXPNOD.js";import"./arrow-right-x0Ar_HMs.js";import"./circles-three-CUZ2brqA.js";import{x as e}from"./iframe-BEPLVs1y.js";import"./img.component-BRl2okJ5.js";import"./video.component-DyHZJHbO.js";import"./card.component-COuxVN8N.js";import"./flex.component-BiPoVA2f.js";import"./default-typography.styles-D5_mwp4X.js";import"./divider.component-CfcrnvNB.js";import"./arrow-down.component-Dw-ri4gE.js";import"./icon.component-ZivparLU.js";import"./arrow-right.component-C7sJs3_W.js";import"./circles-three.component-rwIsVGqw.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
