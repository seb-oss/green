import"./img-DwktKSlt.js";import"./video-DOEVIAwY.js";import"./card-B8n1pUrM.js";import"./div-PxGku2B5.js";import"./flex-DcffHiXI.js";import"./text-DCAtWyOV.js";import"./divider-BmW8Fj4N.js";import"./arrow-down-DaHyE-Ik.js";import"./arrow-right-CFCQhwHt.js";import"./circles-three-2DLc4ffe.js";import{x as e}from"./iframe-BZT1zFLW.js";import"./img.component-Buuzr0sM.js";import"./video.component-BDw2Cxt2.js";import"./card.component-iRV4bi_g.js";import"./flex.component-qMZM1TSb.js";import"./default-typography.styles-fFf3-tfn.js";import"./divider.component-CvWLlsnC.js";import"./arrow-down.component-CoyC4NE1.js";import"./icon.component-Bq1dliJE.js";import"./arrow-right.component-DG0nwJsT.js";import"./circles-three.component-CaTaymYx.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
