import"./img-CXVYTspN.js";import"./video-D4pCfx3n.js";import"./card-fwfV2NuJ.js";import"./div-B-qhM5yL.js";import"./flex-CXVIlJmq.js";import"./text-DRjkuZcp.js";import"./divider-CQIDjoHv.js";import"./arrow-down-BlyfZL0h.js";import"./arrow-right-Vk_5DZVc.js";import"./circles-three-DvHiE_nA.js";import{x as e}from"./iframe-B9L5cDd9.js";import"./img.component-C6eIvWuC.js";import"./video.component-Bts1IjLy.js";import"./card.component-CMuc6MV-.js";import"./flex.component-CXSgO6r7.js";import"./default-typography.styles-DIPnyiOV.js";import"./divider.component-BnT5VIUx.js";import"./arrow-down.component-dqhU_psq.js";import"./icon.component-DTf-Gz4F.js";import"./arrow-right.component-uQfQP-vM.js";import"./circles-three.component-KJFQS4k0.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
