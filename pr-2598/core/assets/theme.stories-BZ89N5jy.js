import"./img-DcPp16re.js";import"./video-D9F2cDuk.js";import"./card-CQ-gEn2R.js";import"./div-CRB3bJdL.js";import"./flex-BXEGbT5S.js";import"./text-CI89AXus.js";import"./divider-d1vBfyKM.js";import"./arrow-down-BYW5krb5.js";import"./arrow-right-Cz0zeKw-.js";import"./circles-three-DYgfrCp3.js";import{x as e}from"./iframe-aXTL5SNE.js";import"./img.component-BVB_Z_kF.js";import"./video.component-P0yfGVBb.js";import"./card.component-2prNoFXS.js";import"./flex.component-BzB6S2Pb.js";import"./default-typography.styles-CZ5ASlZr.js";import"./divider.component-BFGfKkru.js";import"./arrow-down.component-DjLCrvb1.js";import"./icon.component-DhFG2JS7.js";import"./arrow-right.component-CGjF7OMW.js";import"./circles-three.component-BAcn6uYG.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
