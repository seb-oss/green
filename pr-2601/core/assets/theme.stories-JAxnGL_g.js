import"./img-D1LyHc-a.js";import"./video-Bv2X1gd1.js";import"./card-BmlGO84z.js";import"./div-CQbsi4xH.js";import"./flex-CIhTEAFk.js";import"./text-Cxk__6Bp.js";import"./divider-Dq8LoVOx.js";import"./arrow-down-D12h6FME.js";import"./arrow-right-5n5_-TZq.js";import"./circles-three-CdtDwGP3.js";import{x as e}from"./iframe-Cz3AnkGr.js";import"./img.component-BKxiAx78.js";import"./video.component-DSUgoJwV.js";import"./card.component-Di8ko5-K.js";import"./flex.component-CnBVnkT5.js";import"./default-typography.styles-CysHEKWE.js";import"./divider.component-4JkXiPd2.js";import"./arrow-down.component-BEKsHhrQ.js";import"./icon.component-XMs54qH9.js";import"./arrow-right.component-DMFx6wcd.js";import"./circles-three.component-RTEVFoqk.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
