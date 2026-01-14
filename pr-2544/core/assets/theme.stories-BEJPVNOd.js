import"./img-Bb7t_uP1.js";import"./video-Cnnc_x2L.js";import"./card-CZjioQHz.js";import"./div-BOEoYbAU.js";import"./flex-DhzznBBd.js";import"./text-DMlLn2te.js";import"./divider-Dk-vb4od.js";import"./arrow-down-BIJYFc6K.js";import"./arrow-right-DICUXIlb.js";import"./circles-three-CkjYl_Ck.js";import{x as e}from"./iframe-ZOlFYfLy.js";import"./img.component-DMXPlZrr.js";import"./video.component-Cg_v6BAQ.js";import"./card.component-C62jPbK8.js";import"./flex.component-N13VCGcr.js";import"./default-typography.styles-Ba6dvBEY.js";import"./divider.component-BYMdI3L-.js";import"./arrow-down.component-CLuBbFr-.js";import"./icon.component-CZj7Ui7t.js";import"./arrow-right.component-C6K7Izsm.js";import"./circles-three.component-Pl5KEG7k.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
