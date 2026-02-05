import"./img-COIX_eHX.js";import"./video-w4YyQzJg.js";import"./card-Nh8N7JGo.js";import"./div-lnJka1T8.js";import"./flex-BEV7UTdd.js";import"./text-BSZQlWvp.js";import"./divider-6Tifejzr.js";import"./arrow-down-Dm1qoaS_.js";import"./arrow-right-C46EEuqa.js";import"./circles-three-xDEcKR8O.js";import{x as e}from"./iframe-BA3TVzOL.js";import"./img.component-CCfFk13o.js";import"./video.component-4QMhR-lB.js";import"./card.component-kHBbkZHO.js";import"./flex.component-DaRqz6HB.js";import"./default-typography.styles-D-ZQ6c8M.js";import"./divider.component-CvrUNjsM.js";import"./arrow-down.component-qBDLD0m9.js";import"./icon.component-DNkU6CuX.js";import"./arrow-right.component-CgGMYGbM.js";import"./circles-three.component-G0fwNml8.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
