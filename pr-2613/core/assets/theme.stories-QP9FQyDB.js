import"./img-CjVv8GBU.js";import"./video-DrJJaUVE.js";import"./card-e-q1u49U.js";import"./div-B4KeHGbc.js";import"./flex-DLu567hQ.js";import"./text-CkfTOVpQ.js";import"./divider-BQ77Ptoj.js";import"./arrow-down-B-Kzfu_Z.js";import"./arrow-right-Dp1sFsiP.js";import"./circles-three-ByIJH_3Y.js";import{x as e}from"./iframe-BIlJ1H3j.js";import"./img.component-BhELvo7W.js";import"./video.component-DxhjK5Qs.js";import"./card.component-Dyvl79JC.js";import"./flex.component-Bm698bf9.js";import"./default-typography.styles-DUj4f0nI.js";import"./divider.component-BNngbY0y.js";import"./arrow-down.component-CzfxtSxn.js";import"./icon.component-DRkjPaKl.js";import"./arrow-right.component-BCdIx9ih.js";import"./circles-three.component-B2YG4Mkk.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
