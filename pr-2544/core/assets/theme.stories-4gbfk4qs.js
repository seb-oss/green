import"./img-DL_Ip1-j.js";import"./video-055EpuNe.js";import"./card-DOhmmrRz.js";import"./div-BdCN5Vzd.js";import"./flex-CtdbGu15.js";import"./text-BzInb03K.js";import"./divider-0bhTBlO5.js";import"./arrow-down-BM7b4xHS.js";import"./arrow-right-BfEZDtgi.js";import"./circles-three-DNv9kDfv.js";import{x as e}from"./iframe-DHyn3rYy.js";import"./img.component-Cc1YMRo5.js";import"./video.component-CgSvFWZ8.js";import"./card.component-ee3MQ_1G.js";import"./flex.component-DdHhs7J9.js";import"./default-typography.styles-yyNpi92v.js";import"./divider.component-Bi3VN3Lw.js";import"./arrow-down.component-BxWqwosy.js";import"./icon.component-DIcPDEU1.js";import"./arrow-right.component-CLJ3te2O.js";import"./circles-three.component-Cl-VCS8t.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
