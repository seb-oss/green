import"./img-C_UMQKjm.js";import"./video-Dp5oTzEi.js";import"./card--tQoBkji.js";import"./div-C6a3E0Wv.js";import"./flex-DogaCPPn.js";import"./text-BF7Svg2b.js";import"./divider-Dm3b636I.js";import"./arrow-down-BHeXg5v1.js";import"./arrow-right-Y-Lxlgpa.js";import"./circles-three-BsM-maS8.js";import{x as e}from"./iframe-uFM-9jO7.js";import"./img.component-BFwJEgzp.js";import"./video.component-DgLNRqf_.js";import"./card.component-DDHYM_lm.js";import"./flex.component-DwjWo8Me.js";import"./default-typography.styles-BQ3GHWCQ.js";import"./divider.component-D-Ps4vXw.js";import"./arrow-down.component-gYXNNTJd.js";import"./icon.component-Bdewz2mt.js";import"./arrow-right.component-BuK9da_y.js";import"./circles-three.component-Cp4Tb_Vr.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
