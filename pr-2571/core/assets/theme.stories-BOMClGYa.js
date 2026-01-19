import"./img-Bx2X5gQD.js";import"./video-qN7R75AA.js";import"./card-DBaW47M7.js";import"./div-BBQdmYQ4.js";import"./flex-DKNhuzsh.js";import"./text-D8ef2lmO.js";import"./divider-BcyyWE7V.js";import"./arrow-down-Uwb6dWri.js";import"./arrow-right-DKaYGflm.js";import"./circles-three-BsEERaTn.js";import{x as e}from"./iframe-i-YM5Qxf.js";import"./img.component-C0gWge0S.js";import"./video.component-U_v2Rcq9.js";import"./card.component-BdRWpuNF.js";import"./flex.component-CiVGWwuh.js";import"./default-typography.styles-C_STuje8.js";import"./divider.component-DPtwjZ9l.js";import"./arrow-down.component-m9zNtAaA.js";import"./icon.component-C7iCEPBm.js";import"./arrow-right.component-GtvLQCKz.js";import"./circles-three.component-Cejw8QVX.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
