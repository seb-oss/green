import"./img-DxwBpnPj.js";import"./video-BXXD8_Jc.js";import"./card-B2rP9g62.js";import"./div-Awqh5UT5.js";import"./flex-Bi-ZIuoN.js";import"./text-Cgk3KxdX.js";import"./divider-CBXECnMx.js";import"./arrow-down-aBe-8Wdp.js";import"./arrow-right-zfRE-H_X.js";import"./circles-three-DA6aufY_.js";import{x as e}from"./iframe-n1Dj8K3S.js";import"./img.component-Df1rKi-d.js";import"./video.component-DnvfgYkZ.js";import"./card.component-CQJwQRLA.js";import"./flex.component-C4rDnwBK.js";import"./default-typography.styles-CKPwKUI2.js";import"./divider.component-CZSO0vsv.js";import"./arrow-down.component-Cs0VLVkC.js";import"./icon.component-CHAW-RNs.js";import"./arrow-right.component-qY9OxTej.js";import"./circles-three.component-C0ebtsMA.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
