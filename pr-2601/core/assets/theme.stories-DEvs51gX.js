import"./img-yuw4ABPT.js";import"./video-C1OKtkNW.js";import"./card-CnbLwzG_.js";import"./div-DnC5moE8.js";import"./flex-EOcB38rf.js";import"./text-BrFkZI3i.js";import"./divider-B_V_yzM2.js";import"./arrow-down-DsKZ1M4u.js";import"./arrow-right-dhKKJahs.js";import"./circles-three-CDpsCHzn.js";import{x as e}from"./iframe-C8zps3Hr.js";import"./img.component-BtxQ50vP.js";import"./video.component-C8wB2j90.js";import"./card.component-BPP-KrvG.js";import"./flex.component-CeiZ5H-k.js";import"./default-typography.styles-BAd40BYC.js";import"./divider.component-D7O_-rey.js";import"./arrow-down.component-BQ0IvLt7.js";import"./icon.component-Chb4T9tJ.js";import"./arrow-right.component-B4Oct6j7.js";import"./circles-three.component-QPKdTeJg.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
