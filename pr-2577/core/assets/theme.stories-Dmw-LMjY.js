import"./img-D_bZMOpn.js";import"./video-9OA56O2X.js";import"./card-BMmCeVZE.js";import"./div-DqRbw7DR.js";import"./flex-BDtaEnw3.js";import"./text-B_8so0kG.js";import"./divider-0L3SPRUd.js";import"./arrow-down-Iy-hskTQ.js";import"./arrow-right-BI9H8fEF.js";import"./circles-three-zP6FkElx.js";import{x as e}from"./iframe-Dju8L9ft.js";import"./img.component-C80IRsz8.js";import"./video.component-CSWI39ny.js";import"./card.component-B4Ap9MbW.js";import"./flex.component-Cz6OeJgR.js";import"./default-typography.styles-CJnZpXBU.js";import"./divider.component-3aYx5GDb.js";import"./arrow-down.component-Ci5lwZFy.js";import"./icon.component-CEYc1IuV.js";import"./arrow-right.component-C37ZVUtt.js";import"./circles-three.component-k_KsHqj1.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
