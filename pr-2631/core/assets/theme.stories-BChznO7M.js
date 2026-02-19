import"./img-CcfF2Qbe.js";import"./video-C4RqAd2N.js";import"./card-ByC98Q4W.js";import"./div-CJgNhsjO.js";import"./flex-DE8WVljZ.js";import"./text-c91g1Ae9.js";import"./divider-BVH9aoDm.js";import"./arrow-down-BtzZ1HFo.js";import"./arrow-right-BjTINIWR.js";import"./circles-three-DFTFncLF.js";import{x as e}from"./iframe-VsbkeGCl.js";import"./img.component-ZPCuT2Fi.js";import"./video.component-DIWPX5Oy.js";import"./card.component-DZHBtaXg.js";import"./flex.component-BrpdvwZj.js";import"./default-typography.styles-CWQ9K0n8.js";import"./divider.component-w_x4V01S.js";import"./arrow-down.component-D2YH3VFU.js";import"./icon.component-melMtIU4.js";import"./arrow-right.component-CNGBG5Gb.js";import"./circles-three.component-ClKrNZaV.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
