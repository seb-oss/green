import"./img-CrkEZrzl.js";import"./video-BTbuF5s2.js";import"./card-B0dlcJPg.js";import"./div-Bqi4odH8.js";import"./flex-Dqx94wbI.js";import"./text-DolJvl3u.js";import"./divider-Dx9INIw3.js";import"./arrow-down-y2nJaD2Y.js";import"./arrow-right-_EPzcdJQ.js";import"./circles-three-Anxp5gZe.js";import{x as e}from"./iframe-CdkNm90d.js";import"./img.component-BYnrD6vo.js";import"./video.component-B3Z9Gvos.js";import"./card.component-BzQ8QK_Z.js";import"./flex.component-CR4a_v6h.js";import"./default-typography.styles-C4zuZ3To.js";import"./divider.component-DkdzoKKs.js";import"./arrow-down.component-BhQJsf5G.js";import"./icon.component-CSACcb-9.js";import"./arrow-right.component-EXjpSuZX.js";import"./circles-three.component-B1g727AF.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
