import"./img-DN8OrPol.js";import"./video-DmR9OVOp.js";import"./card-Dpe_0NiL.js";import"./div-HwEGUB_6.js";import"./flex-Du6h-PG3.js";import"./text-CH6ttDw6.js";import"./divider-Chlj4JHr.js";import"./arrow-down-ByOFjUxr.js";import"./arrow-right-D7fZ47BP.js";import"./circles-three-B11tBzcY.js";import{x as e}from"./iframe-C8yoY-xQ.js";import"./img.component-ReaU7Oxb.js";import"./video.component-Qd1Dhglv.js";import"./card.component-CAAlfCMQ.js";import"./flex.component-DbEOKgSd.js";import"./default-typography.styles-1biRtNjh.js";import"./divider.component-CSt9JGyb.js";import"./arrow-down.component-BVtD4V6t.js";import"./icon.component-CGjS-CdK.js";import"./arrow-right.component-DF1Hbg4Q.js";import"./circles-three.component-eubCKDv0.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
