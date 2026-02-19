import"./img-BVjBnmQL.js";import"./video-Blnb-HeU.js";import"./card-C5l6eOlU.js";import"./div-ByOtGQqP.js";import"./flex-FpcjRpsW.js";import"./text-LGMaWoae.js";import"./divider-D-XUzFgP.js";import"./arrow-down-CplH_i5Q.js";import"./arrow-right-CHJPw8jh.js";import"./circles-three-DX46jJyO.js";import{x as e}from"./iframe-BpRfpQgc.js";import"./img.component-TfKytW4h.js";import"./video.component-CrsvtXEL.js";import"./card.component-BExU1a2z.js";import"./flex.component-C8ubOOy0.js";import"./default-typography.styles-CgH-ZL7d.js";import"./divider.component-BwBAfJ1G.js";import"./arrow-down.component-B2GzQG5A.js";import"./icon.component-B0wjIJ1S.js";import"./arrow-right.component-DBNRoFW9.js";import"./circles-three.component-BR_tzrLz.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
