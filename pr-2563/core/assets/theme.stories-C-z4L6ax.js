import"./img-Di4BSxXt.js";import"./video-XfvHjr3N.js";import"./card-CUJG4-m1.js";import"./div-Ct4ktVy6.js";import"./flex-CzK9Xn1s.js";import"./text-DZW7lia4.js";import"./divider-CJQ1v5J7.js";import"./arrow-down-Cunc3sj5.js";import"./arrow-right-D7_nrkSe.js";import"./circles-three-QbJCi8YQ.js";import{x as e}from"./iframe-Bq9RTfZq.js";import"./img.component-CIIyBvGq.js";import"./video.component-DmA182xp.js";import"./card.component-DLocLk9G.js";import"./flex.component-DEey0ruJ.js";import"./default-typography.styles-D1LRjJau.js";import"./divider.component-6KQnFgS-.js";import"./arrow-down.component-ByBl0isc.js";import"./icon.component-BbZwV3DJ.js";import"./arrow-right.component-ClZRA_oy.js";import"./circles-three.component-k_1Zljds.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
