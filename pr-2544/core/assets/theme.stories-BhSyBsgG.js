import"./img-omodd0IL.js";import"./video-0aGPkJB6.js";import"./card-WXW6Uczh.js";import"./div-DKSjPLNO.js";import"./flex-CBF_aTZD.js";import"./text-G6ryxO7f.js";import"./divider-CS0JzJa0.js";import"./arrow-down-QCzOjgrx.js";import"./arrow-right-BTWeffcH.js";import"./circles-three-DZeHyrpF.js";import{x as e}from"./iframe-Bt1Yqfo9.js";import"./img.component-CvG2ic0u.js";import"./video.component-C-bw8ayQ.js";import"./card.component-Qe0x4vpY.js";import"./flex.component-B24ezWRH.js";import"./default-typography.styles-CXDKqlWj.js";import"./divider.component-BJWcoAcG.js";import"./arrow-down.component-BsnQJPGe.js";import"./icon.component-CnGrBf1q.js";import"./arrow-right.component-CxVc-PdG.js";import"./circles-three.component-LuXlcade.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
