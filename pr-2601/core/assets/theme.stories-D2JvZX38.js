import"./img-gTxrJ8kW.js";import"./video-BB8R70S7.js";import"./card-RljX6YKj.js";import"./div-DNuc_gT6.js";import"./flex-CkQlgCzk.js";import"./text-DowpWU4n.js";import"./divider-oOB4VEr8.js";import"./arrow-down-CeE5Zm9i.js";import"./arrow-right-DSRgwta7.js";import"./circles-three-DRhCZk-t.js";import{x as e}from"./iframe-BRqPtqKR.js";import"./img.component-Dk_eb8S3.js";import"./video.component-n4OxPw0X.js";import"./card.component-DzI4v2FQ.js";import"./flex.component-BjuBNezR.js";import"./default-typography.styles-CCxG5D8D.js";import"./divider.component-QgxYNp4A.js";import"./arrow-down.component-DY98zOYE.js";import"./icon.component-DDxzZsAf.js";import"./arrow-right.component-DIH2v-R1.js";import"./circles-three.component-B0mOL7JH.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
