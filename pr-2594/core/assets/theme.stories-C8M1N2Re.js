import"./img-oqcRua8S.js";import"./video-BlsZ-E3Y.js";import"./card-C1NPxfBo.js";import"./div-Dcd-4Tql.js";import"./flex-D4gP1dlV.js";import"./text-DGFrR1JP.js";import"./divider-CN6MWUGN.js";import"./arrow-down-CNbv1Wez.js";import"./arrow-right-Baac7cAV.js";import"./circles-three-HNr4CXPG.js";import{x as e}from"./iframe-DjmpXFqH.js";import"./img.component-Cy_CQcAs.js";import"./video.component-CI6bwTrs.js";import"./card.component-DjDji-0O.js";import"./flex.component-CUJrpbdn.js";import"./default-typography.styles-DmjJ62Ei.js";import"./divider.component-MaTTR7gQ.js";import"./arrow-down.component-D9sifZNJ.js";import"./icon.component-DMllZNXO.js";import"./arrow-right.component-C4QATxyU.js";import"./circles-three.component-CQalfWci.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
