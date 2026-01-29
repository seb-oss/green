import"./img-7PhyHm-M.js";import"./video-CcxZAbnZ.js";import"./card-CGYfqkSj.js";import"./div-iX40eCvZ.js";import"./flex-DffIo4Jg.js";import"./text-MaGBuDwH.js";import"./divider-WNzyeoco.js";import"./arrow-down-BuDSJQl9.js";import"./arrow-right-CZ7Od9NR.js";import"./circles-three-BUkwdj4l.js";import{x as e}from"./iframe-CEr8kq7n.js";import"./img.component-C-kUNgZP.js";import"./video.component-5o5bHcWy.js";import"./card.component-InDchyva.js";import"./flex.component-J8rJot38.js";import"./default-typography.styles-Cfd7Qixz.js";import"./divider.component-Cu3rKYNk.js";import"./arrow-down.component-Cd3m8sTu.js";import"./icon.component-Bz9bZ4M8.js";import"./arrow-right.component-a0sJLMxr.js";import"./circles-three.component-Bk4T8GCX.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
