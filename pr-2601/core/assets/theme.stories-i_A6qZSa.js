import"./img-Dgowm8aJ.js";import"./video-B_yno3bx.js";import"./card-BOdU0Smv.js";import"./div-CPTqRzFP.js";import"./flex-CnOBYc0X.js";import"./text-CNqf1oDO.js";import"./divider-CMLeEsG1.js";import"./arrow-down-BBO33aas.js";import"./arrow-right-BsVkI5Cf.js";import"./circles-three-DCgsAm7_.js";import{x as e}from"./iframe-DuvJJPsW.js";import"./img.component-9I2nEkBK.js";import"./video.component-DruBbp9P.js";import"./card.component-DGQRvjJW.js";import"./flex.component-Bqj0RcrB.js";import"./default-typography.styles-BCJ4fFJf.js";import"./divider.component-C7UZrUrA.js";import"./arrow-down.component-Dl1VDkYx.js";import"./icon.component-3WNa7gns.js";import"./arrow-right.component-BFFcJyBW.js";import"./circles-three.component-AgovF_cd.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
