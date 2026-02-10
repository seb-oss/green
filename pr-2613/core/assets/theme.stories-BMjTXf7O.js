import"./img-DEjt7IjY.js";import"./video-CrQ8Ye62.js";import"./card-C8KN8YZ9.js";import"./div-BE1ajJc7.js";import"./flex-hlHbYuYh.js";import"./text-D0_BBeE3.js";import"./divider-DMzEJ7bY.js";import"./arrow-down-DnMJOKi6.js";import"./arrow-right-Dtfl-Uen.js";import"./circles-three-BpSYCQHp.js";import{x as e}from"./iframe-Bco6RhSF.js";import"./img.component-DHWFKQUY.js";import"./video.component-C9qRLdQ0.js";import"./card.component-DWwOkFKS.js";import"./flex.component-Cm2le16w.js";import"./default-typography.styles-B_G-Yi4l.js";import"./divider.component-C6IN8pTO.js";import"./arrow-down.component-Bfgeh9nz.js";import"./icon.component-Csrpw-lX.js";import"./arrow-right.component-CiWz2MWu.js";import"./circles-three.component-B3e-XzdT.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
