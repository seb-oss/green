import"./img-_6BewkkZ.js";import"./video-DKwGdRsT.js";import"./card-CKMzaqPQ.js";import"./div-DpH4Kk4e.js";import"./flex-B-1ILSHc.js";import"./text-B0SvEfg3.js";import"./divider-YHuJfDrO.js";import"./arrow-down-LtspMT1j.js";import"./arrow-right-Bnu45BWc.js";import"./circles-three-BHwrGvC3.js";import{x as e}from"./iframe-DDb3w5d7.js";import"./img.component-DpyhAkSZ.js";import"./video.component-2ql95liM.js";import"./card.component-BZZVbkVx.js";import"./flex.component-18DRtNZW.js";import"./default-typography.styles-Bn5dhJi-.js";import"./divider.component-o6riNaPG.js";import"./arrow-down.component-DcMJsFbB.js";import"./icon.component-CD2cfMZJ.js";import"./arrow-right.component-CECUmoo8.js";import"./circles-three.component-qqyGs8VX.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
