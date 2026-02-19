import"./img-BNm7_Rez.js";import"./video-Da4Vse1i.js";import"./card-VU1Q8UbJ.js";import"./div-MOctZeUN.js";import"./flex-CZ59H1Zd.js";import"./text-oaJ4p7By.js";import"./divider-C5aeE7tb.js";import"./arrow-down-BmRucKm5.js";import"./arrow-right-CM6s9HzV.js";import"./circles-three-D19d9cHM.js";import{x as e}from"./iframe-ClQhXCfa.js";import"./img.component-Df93P14R.js";import"./video.component-CVaSkKbw.js";import"./card.component-iVbpGFH9.js";import"./flex.component-fC1vQ49Q.js";import"./default-typography.styles-BYndY-pe.js";import"./divider.component-C-TgWTjA.js";import"./arrow-down.component-C-zGFJg6.js";import"./icon.component-TF5XNcxQ.js";import"./arrow-right.component-D5lSpyjd.js";import"./circles-three.component-C7Iv2YYF.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
