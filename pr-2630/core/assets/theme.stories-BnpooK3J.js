import"./img-CwGpTktx.js";import"./video-D8HCwYZr.js";import"./card-DWb-jPRY.js";import"./div-DKSLVIP3.js";import"./flex-B3ocQL6B.js";import"./text-DCt5ISf1.js";import"./divider-B16yyQ0O.js";import"./arrow-down-tO9sAfys.js";import"./arrow-right-TYAeFFk7.js";import"./circles-three-D32ENFQO.js";import{x as e}from"./iframe-BMRmh1sA.js";import"./img.component-Cl8v2GYY.js";import"./video.component-DcRh5wzj.js";import"./card.component-C0Tmm-zx.js";import"./flex.component-DGXBPLOU.js";import"./default-typography.styles-Cx0GaUs_.js";import"./divider.component-py7bxjve.js";import"./arrow-down.component-tgkjt9EU.js";import"./icon.component-lh5XS7yf.js";import"./arrow-right.component-DyM1z_vU.js";import"./circles-three.component-r_lXmsU7.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
