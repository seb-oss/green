import"./img-DzCg3xTz.js";import"./video-CUpmEiMI.js";import"./card-CaQWnynJ.js";import"./div-QfA6PXLK.js";import"./flex-Bx_cgYYr.js";import"./text-RTWexD8r.js";import"./divider-Caw3pVwj.js";import"./arrow-down-DE05UK1H.js";import"./arrow-right-DKJkQQIO.js";import"./circles-three-DMwzXt_n.js";import{x as e}from"./iframe-VzA9xZxk.js";import"./img.component-CbmvMFBa.js";import"./video.component-BMVl-9IT.js";import"./card.component-Dqs7PlX8.js";import"./flex.component-CtitCc60.js";import"./default-typography.styles-DvEDDb3-.js";import"./divider.component-Ccdpx-99.js";import"./arrow-down.component-CfQm3Ljq.js";import"./icon.component-CXqjLzyD.js";import"./arrow-right.component-Dx7tkJ7l.js";import"./circles-three.component-DgQ453ju.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
