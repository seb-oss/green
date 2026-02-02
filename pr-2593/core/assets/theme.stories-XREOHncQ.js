import"./img-DFD3u27Q.js";import"./video-aHZ8F9uW.js";import"./card-U95lOQN5.js";import"./div-nAF8x6Mu.js";import"./flex-CmghNpu-.js";import"./text-DpJqZUqo.js";import"./divider-D-dBI0Dj.js";import"./arrow-down-Cx7ze-xK.js";import"./arrow-right-Bx4MIQde.js";import"./circles-three-3tbkp2-q.js";import{x as e}from"./iframe-DP9akqBZ.js";import"./img.component-CMXj_d9v.js";import"./video.component-RMkIjwZu.js";import"./card.component-lHB-B_as.js";import"./flex.component-BkeSN3lL.js";import"./default-typography.styles-CmgmI0Qq.js";import"./divider.component-DwbEXDii.js";import"./arrow-down.component-Bce0Jkd4.js";import"./icon.component-B1kgOlUX.js";import"./arrow-right.component-DKmZ-aYB.js";import"./circles-three.component-EkZBzlnE.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
