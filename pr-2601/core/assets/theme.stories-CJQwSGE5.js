import"./img-h_ABuaLB.js";import"./video-C02JZfZR.js";import"./card-C42GUX1E.js";import"./div-BqxfT8bS.js";import"./flex-DMo5xvlQ.js";import"./text-BMteJ2zy.js";import"./divider-BTFxYD9q.js";import"./arrow-down-BgQ_631c.js";import"./arrow-right-C-EILQy_.js";import"./circles-three-BJvonqq7.js";import{x as e}from"./iframe-Cg-uRGyf.js";import"./img.component-Dpk3x1uS.js";import"./video.component-CW-kbZzN.js";import"./card.component-Bp9JCaYI.js";import"./flex.component-DTgxc_ij.js";import"./default-typography.styles-CAa_femO.js";import"./divider.component-CPbU3nlH.js";import"./arrow-down.component-Cxjk7RLD.js";import"./icon.component-BnwNMKHB.js";import"./arrow-right.component-3rwdf8cE.js";import"./circles-three.component-_R7mLnzr.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
