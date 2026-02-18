import"./img-0n6b1OGT.js";import"./video-MN_gxWK7.js";import"./card-BItlIG1A.js";import"./div-CJzIJwb-.js";import"./flex-Lm2Pcsl6.js";import"./text-CN8k_8z1.js";import"./divider-DTccM5SX.js";import"./arrow-down-zdo6r63W.js";import"./arrow-right-BHYwN5O5.js";import"./circles-three-CVp_1Fm8.js";import{x as e}from"./iframe-CNQuyvRb.js";import"./img.component-eU5o4L_L.js";import"./video.component-knyqBDV-.js";import"./card.component-CIUZbWPA.js";import"./flex.component-BRTHS8Pd.js";import"./default-typography.styles-DhRKsXst.js";import"./divider.component-Dk-vtwuO.js";import"./arrow-down.component-BkmtrpmW.js";import"./icon.component-DaaHJEBV.js";import"./arrow-right.component-BBuMSgLG.js";import"./circles-three.component-D_Csr51R.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
