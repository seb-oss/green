import"./img-4RNjZxJN.js";import"./video-D3ZeUh7u.js";import"./card-Zyckcsda.js";import"./div-CxZTEBnj.js";import"./flex-B5d_sXwG.js";import"./text-CktAJ6tc.js";import"./divider-DVeva5tg.js";import"./arrow-down-CdFRDy9Z.js";import"./arrow-right-VLqSNH_U.js";import"./circles-three-BDRrVW6p.js";import{x as e}from"./iframe-nlDDYvqR.js";import"./img.component-BxzACgRl.js";import"./video.component-Br5Z4Nqf.js";import"./card.component-BOnsqJuP.js";import"./flex.component-CnLDL-8K.js";import"./default-typography.styles-BNrcQ6g-.js";import"./divider.component-kTy9KHUv.js";import"./arrow-down.component-Bcq26VzA.js";import"./icon.component-DuAs_fth.js";import"./arrow-right.component-B-zC62DD.js";import"./circles-three.component-C7KG28yz.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
