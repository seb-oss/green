import"./img-DRKQKyTZ.js";import"./video-CuOgR3Eg.js";import"./card-cb9qzkLG.js";import"./div-vtZmOmkf.js";import"./flex-t5Geaw_O.js";import"./text-CTq8Cotr.js";import"./divider-BoMvOSyo.js";import"./arrow-down-DERK0i5z.js";import"./arrow-right-BnbwwcOO.js";import"./circles-three-P87ZaJvY.js";import{x as e}from"./iframe-DnvYCRWK.js";import"./img.component-BeQuNSNR.js";import"./video.component-B4FDrGko.js";import"./card.component-EIdXABdd.js";import"./flex.component-C-jKumqM.js";import"./default-typography.styles-iWo6J2iW.js";import"./divider.component-R6L6dixY.js";import"./arrow-down.component-B8_Sf1Cz.js";import"./icon.component-B4Fq6qNB.js";import"./arrow-right.component-C3eFMM0c.js";import"./circles-three.component-BE5krPVW.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
