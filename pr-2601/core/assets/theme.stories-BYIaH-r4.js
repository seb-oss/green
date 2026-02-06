import"./img-BzPkxIko.js";import"./video-DLaq3-1P.js";import"./card-NzAVlp-5.js";import"./div-CAHqJ7PQ.js";import"./flex-DPhA-lU_.js";import"./text-BL9YguCs.js";import"./divider-Bhqi6PBb.js";import"./arrow-down-Dr6SLFb4.js";import"./arrow-right-D4b4p1ze.js";import"./circles-three-BbOuGlIO.js";import{x as e}from"./iframe-C0ENvUwZ.js";import"./img.component-DAzzdk51.js";import"./video.component-Crv5gCZo.js";import"./card.component-BjlzAPJq.js";import"./flex.component-CrfzWcgs.js";import"./default-typography.styles-jMow2bj9.js";import"./divider.component-NGlYYsdt.js";import"./arrow-down.component-Bvn1ugTb.js";import"./icon.component-BDA8aQIq.js";import"./arrow-right.component-CGDMOdpp.js";import"./circles-three.component-8CsXUdTd.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
