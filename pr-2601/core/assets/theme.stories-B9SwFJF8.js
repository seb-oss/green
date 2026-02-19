import"./img-DC4RC4nv.js";import"./video-BXuCRQUZ.js";import"./card-vB4xlJMX.js";import"./div-C-GbiJ0A.js";import"./flex-BFeCZxoA.js";import"./text-B23rgik2.js";import"./divider-BNCrbX4G.js";import"./arrow-down-CN8ju9YP.js";import"./arrow-right-BCYftzKy.js";import"./circles-three-Cb9kXog8.js";import{x as e}from"./iframe-CMGnU5sP.js";import"./img.component-BekUx7Z-.js";import"./video.component-LiOH6QsA.js";import"./card.component-DplAei5N.js";import"./flex.component-CXaYjCBZ.js";import"./default-typography.styles-BGBaCfcR.js";import"./divider.component-x7pL7S2T.js";import"./arrow-down.component-B0vi8z6N.js";import"./icon.component-DlWivA6j.js";import"./arrow-right.component-CXA0TYKM.js";import"./circles-three.component-C9Q9kJvh.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
