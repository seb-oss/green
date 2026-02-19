import"./img-CxnIaSNv.js";import"./video-B31VAeEL.js";import"./card-DA_bPOpI.js";import"./div-6QHNjIGV.js";import"./flex-DRRu73nS.js";import"./text-idtJcQ7D.js";import"./divider-CU1Szs95.js";import"./arrow-down-BtvJ9-JC.js";import"./arrow-right-Dz-84_p9.js";import"./circles-three-CsYKVgVQ.js";import{x as e}from"./iframe-rcFkWJ69.js";import"./img.component-BSs96dQx.js";import"./video.component-BpY4_Bm5.js";import"./card.component-vR8v_fSK.js";import"./flex.component-DH9URAyl.js";import"./default-typography.styles-BCLaw0j1.js";import"./divider.component-Bjj_Itf3.js";import"./arrow-down.component-CazHTXkr.js";import"./icon.component-Ro73QoBG.js";import"./arrow-right.component-CxjfLDSJ.js";import"./circles-three.component-CQASSLiv.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
