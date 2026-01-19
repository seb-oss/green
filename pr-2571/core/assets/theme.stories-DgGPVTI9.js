import"./img-DzfcZR4x.js";import"./video-KOkzNCr-.js";import"./card-DfZnDjcF.js";import"./div-D-8hYfqJ.js";import"./flex-B_bhn7LZ.js";import"./text-BNn59ZVb.js";import"./divider-BLTSUJCE.js";import"./arrow-down-CUFJugEf.js";import"./arrow-right-BkWud8EV.js";import"./circles-three-E08aRARY.js";import{x as e}from"./iframe-Bs7dWGrf.js";import"./img.component-B7Qt3yzq.js";import"./video.component-vQ5Ft52y.js";import"./card.component--9p-OJX3.js";import"./flex.component-Dqm4oVBu.js";import"./default-typography.styles-TQR90ZrP.js";import"./divider.component-zSO5kiKc.js";import"./arrow-down.component-BXa3s6h_.js";import"./icon.component-Rskfci6k.js";import"./arrow-right.component-FVtB7cxH.js";import"./circles-three.component-BncYMAtm.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
