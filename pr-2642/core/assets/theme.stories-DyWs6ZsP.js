import"./img-SBYmPXOd.js";import"./video-C3u-aTh9.js";import"./card-Crg9S55n.js";import"./div-C7kUnwhL.js";import"./flex-Dsd-7_IO.js";import"./text-DRjIGOe5.js";import"./divider-D5i70urH.js";import"./arrow-down-DiVHFkzH.js";import"./arrow-right-pFOIXZ2c.js";import"./circles-three-DdCS4X1-.js";import{x as e}from"./iframe-ByV2Hk15.js";import"./img.component-CU8QfoBC.js";import"./video.component-XOdRtV-L.js";import"./card.component-BoU0eflb.js";import"./flex.component-BRqfWEAh.js";import"./default-typography.styles-5I6gCIbf.js";import"./divider.component-B2R9U5V1.js";import"./arrow-down.component-B4rv4U6s.js";import"./icon.component-BopIGL_s.js";import"./arrow-right.component-Cc5ciMXx.js";import"./circles-three.component-CtzqcSdX.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
