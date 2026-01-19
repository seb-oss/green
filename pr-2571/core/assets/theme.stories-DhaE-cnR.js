import"./img-DFdqzGB2.js";import"./video-qHwtV0Lv.js";import"./card-BBfPIKLI.js";import"./div-C0OloII1.js";import"./flex-Dyho-Ak_.js";import"./text-BZBTFKz8.js";import"./divider-ByF9Ni4A.js";import"./arrow-down-BnsL4qQB.js";import"./arrow-right-Cr1hvA7U.js";import"./circles-three-C8UA80Na.js";import{x as e}from"./iframe-D7VjMISI.js";import"./img.component-DPqFmufr.js";import"./video.component-CKSxtkPv.js";import"./card.component-CU7yc7CH.js";import"./flex.component-CSXFGaaj.js";import"./default-typography.styles-Tlo3N3X0.js";import"./divider.component-BKXn2JJ_.js";import"./arrow-down.component-D-nLw2tF.js";import"./icon.component-B2LUsplm.js";import"./arrow-right.component-Bopu5W0b.js";import"./circles-three.component-HQCAeGRU.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
