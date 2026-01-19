import"./img-CKaufKDj.js";import"./video-BUCC0SG9.js";import"./card-C3e_t8ig.js";import"./div-CQizLpAa.js";import"./flex-D42WbMbX.js";import"./text-Uc6DVqcq.js";import"./divider-BcUP7KeN.js";import"./arrow-down-uJrs11Dt.js";import"./arrow-right-nMsoGzRq.js";import"./circles-three-CVBvHj1i.js";import{x as e}from"./iframe-CGSLjpeR.js";import"./img.component-Yk2ZJXnm.js";import"./video.component-B1x7qzIn.js";import"./card.component-CCf2EyhB.js";import"./flex.component-9qGYLtSv.js";import"./default-typography.styles-YNOlami5.js";import"./divider.component-C0ZZHXzB.js";import"./arrow-down.component-F0qlv9s8.js";import"./icon.component-Dwpe8fY6.js";import"./arrow-right.component-D-flD2l7.js";import"./circles-three.component-r90DnrBn.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
