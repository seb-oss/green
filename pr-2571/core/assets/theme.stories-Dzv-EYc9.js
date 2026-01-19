import"./img-Cmt6zi8i.js";import"./video-F9aEYhAF.js";import"./card-BoHx761Y.js";import"./div-DMHG3ifC.js";import"./flex-8tL0UkXf.js";import"./text-D7D_rfNO.js";import"./divider-BoU5QXAR.js";import"./arrow-down-DA1hm_OX.js";import"./arrow-right-DuuL_Mw1.js";import"./circles-three-sBjAMkFz.js";import{x as e}from"./iframe-CIyCOr3z.js";import"./img.component-CIoSF69j.js";import"./video.component-Tb5l2gDy.js";import"./card.component-DYSrcaMg.js";import"./flex.component-zzL_HQIe.js";import"./default-typography.styles-6Y6NPAo5.js";import"./divider.component-Cc04zcGp.js";import"./arrow-down.component-CgFngGF4.js";import"./icon.component-BU7mvxId.js";import"./arrow-right.component-D54VDRwc.js";import"./circles-three.component-ClW_M_ko.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
