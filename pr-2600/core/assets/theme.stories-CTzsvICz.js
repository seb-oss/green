import"./img-DhOxOLa7.js";import"./video-BiQQN4ZS.js";import"./card-Cp7mxoqm.js";import"./div-DrbO00_L.js";import"./flex-BQc3gsH6.js";import"./text-D3gmhwXg.js";import"./divider-B1Jx4QPl.js";import"./arrow-down-5WKtOE16.js";import"./arrow-right--YgaH3nJ.js";import"./circles-three-C3OQPipp.js";import{x as e}from"./iframe-CWB-UUgA.js";import"./img.component-BfpZWQqh.js";import"./video.component-WnpIilTO.js";import"./card.component-BstX9cht.js";import"./flex.component-D0qqtZ6S.js";import"./default-typography.styles-CtSbzbW1.js";import"./divider.component-NrNiJJUI.js";import"./arrow-down.component-D6ILRf5T.js";import"./icon.component-DzOkRgBV.js";import"./arrow-right.component-DGh_-qsE.js";import"./circles-three.component-Da4sU4y4.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
