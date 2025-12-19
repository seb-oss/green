import"./img-C5FR9YE7.js";import"./video-DGAiv8Oo.js";import"./card-DR3vQbbj.js";import"./div-oAm5LAMt.js";import"./flex-Dg1XC8wP.js";import"./text-ChPVSlNm.js";import"./divider-CjwxrTpY.js";import"./arrow-down-BhO46nVz.js";import"./arrow-right-DoUVHuTt.js";import"./circles-three-WkSHC0yb.js";import{x as e}from"./iframe-CaSnqVAO.js";import"./img.component-BbPdjb1B.js";import"./video.component-DlPqgBR2.js";import"./card.component-B05iLK3e.js";import"./flex.component-xmOxoKSe.js";import"./default-typography.styles-JlCI9qIa.js";import"./divider.component-CuZ1iODG.js";import"./arrow-down.component-BTF3iXRm.js";import"./icon.component-BdiabhnO.js";import"./arrow-right.component-BqyjqEiF.js";import"./circles-three.component-DACSzR4O.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
