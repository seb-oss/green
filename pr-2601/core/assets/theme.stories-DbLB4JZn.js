import"./img-DmPr4OTi.js";import"./video-BZiOHS_K.js";import"./card-BbXGlqu6.js";import"./div-qhTMqkZT.js";import"./flex-BVHTcgK0.js";import"./text-BkOl0jgx.js";import"./divider-6ru1Sg_E.js";import"./arrow-down-DVpayyiz.js";import"./arrow-right-JteUVBcC.js";import"./circles-three-Cbm3I7vF.js";import{x as e}from"./iframe-CbQmVrJu.js";import"./img.component-BU8Q4dA-.js";import"./video.component-B32KwW63.js";import"./card.component-CR6-9Dgp.js";import"./flex.component-Drc1OxU4.js";import"./default-typography.styles-BqbogdW3.js";import"./divider.component-yhvo8-nN.js";import"./arrow-down.component-2-CNrsrK.js";import"./icon.component-BSD2zYIb.js";import"./arrow-right.component-DDO-TGa5.js";import"./circles-three.component-Brqi6QQ9.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
