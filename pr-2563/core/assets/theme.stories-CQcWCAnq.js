import"./img-Djx8KDMU.js";import"./video-Dr2JfmV_.js";import"./card-HYIK81X5.js";import"./div-DvpqaCTX.js";import"./flex-8oqxpXMB.js";import"./text-DJN2fvam.js";import"./divider-BXXWivVk.js";import"./arrow-down-QADkD8Tb.js";import"./arrow-right-D1IQFKdi.js";import"./circles-three-DDoVmS53.js";import{x as e}from"./iframe-DKtVfO4i.js";import"./img.component-HsPB7Jzo.js";import"./video.component-C6MH1bbj.js";import"./card.component-5yyoJszG.js";import"./flex.component-Lw7CX6Ts.js";import"./default-typography.styles-CFA4i-mD.js";import"./divider.component-CBY_RSfY.js";import"./arrow-down.component-D5O52hYZ.js";import"./icon.component-Ckr318eu.js";import"./arrow-right.component-Br7h9vR3.js";import"./circles-three.component-CZvK48Hy.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
