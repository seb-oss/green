import"./img-TykYx-Nu.js";import"./video-BIvDwKgY.js";import"./card-Be4T82WB.js";import"./div-q1b4meSK.js";import"./flex-CZsta-58.js";import"./text-CGzplvtA.js";import"./divider-DM8an_yS.js";import"./arrow-down-BkwIGZrp.js";import"./arrow-right-jSAdlGgK.js";import"./circles-three-CPdz8I7f.js";import{x as e}from"./iframe-BjB7oDKT.js";import"./img.component-CLd7A2NF.js";import"./video.component-Cz5QSvQL.js";import"./card.component-CVQTQ-EQ.js";import"./flex.component-Z2JnHsVp.js";import"./default-typography.styles-BrFKFl9e.js";import"./divider.component-CJbKxQG6.js";import"./arrow-down.component-Cjuu3dgb.js";import"./icon.component-DlGg0fkI.js";import"./arrow-right.component-BdnEplNE.js";import"./circles-three.component-zcOUrUQP.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
