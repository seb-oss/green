import"./img-DtBWPnGy.js";import"./video-Dyw48eDa.js";import"./card-oSj1jAQh.js";import"./div-Bs6wGmC5.js";import"./flex-lUBsuVHj.js";import"./text-Dwg7KP8l.js";import"./divider-iARmqlxP.js";import"./arrow-down-D8M96qGr.js";import"./arrow-right-BxMB3-rB.js";import"./circles-three-DMrzM7Tq.js";import{x as e}from"./iframe-DCZi1hNl.js";import"./img.component-DR1KYlXt.js";import"./video.component-BwAMZdJo.js";import"./card.component-CsDaW6EY.js";import"./flex.component-CB4yYzq3.js";import"./default-typography.styles-ClwZ4FDN.js";import"./divider.component-DK1cbmfE.js";import"./arrow-down.component-Co3OnyCy.js";import"./icon.component-vpRXZ3fA.js";import"./arrow-right.component-CfD1gNUf.js";import"./circles-three.component-zN_ynbXk.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
