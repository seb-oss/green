import"./img-Cvo05NKo.js";import"./video-BOpYCHLl.js";import"./card-CQASjhSQ.js";import"./div-B83yeIwh.js";import"./flex-Dp-86o0X.js";import"./text-Qt3Pb9-c.js";import"./divider-H9Aa9l_Q.js";import"./arrow-down-DyeL8Jp1.js";import"./arrow-right-BtNp8Gxn.js";import"./circles-three-kAREor-b.js";import{x as e}from"./iframe-BGqbqd8h.js";import"./img.component-BYve7EfN.js";import"./video.component-D9qUelCl.js";import"./card.component-DFTXL_Rs.js";import"./flex.component-5Rea7j4r.js";import"./default-typography.styles-7b6NmtYf.js";import"./divider.component-DWK8zLoK.js";import"./arrow-down.component-CuoDZh2l.js";import"./icon.component-B9o9Bgs_.js";import"./arrow-right.component-DtWWtutn.js";import"./circles-three.component-BIMT5R6K.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
