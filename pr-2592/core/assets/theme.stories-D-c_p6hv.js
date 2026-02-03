import"./img-DYDM_keO.js";import"./video-kVOQ5Fag.js";import"./card-Bz3dCPWv.js";import"./div-BY3NPHm0.js";import"./flex-Ce0-a2IN.js";import"./text-ChrTVsCc.js";import"./divider-DvSbvjju.js";import"./arrow-down-cvPy7vRG.js";import"./arrow-right-BZPNAUh8.js";import"./circles-three-C69CArKx.js";import{x as e}from"./iframe-B9gqZTf9.js";import"./img.component-zM8S7tJc.js";import"./video.component-CZZIE03R.js";import"./card.component-7KNh_NNT.js";import"./flex.component-BFFdnvB3.js";import"./default-typography.styles-Dwz4F_-H.js";import"./divider.component-Bwh9-Nnc.js";import"./arrow-down.component-ySzRn71F.js";import"./icon.component-VxoP50OR.js";import"./arrow-right.component-7pTZoG3L.js";import"./circles-three.component-C4_6dx8n.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
