import"./img-Bhj3YmPF.js";import"./video-bHuVLJRu.js";import"./card-CaXpixwf.js";import"./div-rNIRJVh4.js";import"./flex-DHpJcEhc.js";import"./text-D_EVLm-k.js";import"./divider-BkusMcNA.js";import"./arrow-down-Bxy4lTOl.js";import"./arrow-right-DBuI2K4_.js";import"./circles-three-DPli6KKh.js";import{x as e}from"./iframe-jJd2S8d1.js";import"./img.component-B4-pIrlr.js";import"./video.component-BvFMf_Hy.js";import"./card.component-BETZzljT.js";import"./flex.component-DS9_Kppk.js";import"./default-typography.styles-B_Uv9Rz-.js";import"./divider.component-BjOiKu3p.js";import"./arrow-down.component-C7XSXPOI.js";import"./icon.component-BMfZdWM_.js";import"./arrow-right.component-CMKAnz7l.js";import"./circles-three.component-DbYMW82K.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
