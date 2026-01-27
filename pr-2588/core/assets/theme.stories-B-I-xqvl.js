import"./img-DJloPYHd.js";import"./video-BE_cOho2.js";import"./card-B98nCxRd.js";import"./div-C8Vwfg-k.js";import"./flex-us9rEMon.js";import"./text-BGW9-tDI.js";import"./divider-PVCPtN92.js";import"./arrow-down-CJsvHQeR.js";import"./arrow-right-CvWbcNji.js";import"./circles-three-BUiIRM5-.js";import{x as e}from"./iframe-CJRfEGsj.js";import"./img.component-BJ5oym47.js";import"./video.component-HAxfpxYl.js";import"./card.component-CU8R5XfF.js";import"./flex.component-g7nEBmBL.js";import"./default-typography.styles-1WVx0LJY.js";import"./divider.component-Tssxa1cK.js";import"./arrow-down.component-DL5BdHxl.js";import"./icon.component-HGYExgJl.js";import"./arrow-right.component-DTU3a_nx.js";import"./circles-three.component-DeFz0vbK.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
