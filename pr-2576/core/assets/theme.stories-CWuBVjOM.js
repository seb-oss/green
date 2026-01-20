import"./img-BGqo3Rxv.js";import"./video-BYWWKK54.js";import"./card-BmD8jQHF.js";import"./div-BNe_mMf9.js";import"./flex-Bkq2Loe3.js";import"./text-BqTZL6xg.js";import"./divider-BnSDu6qJ.js";import"./arrow-down-B1-6oMgr.js";import"./arrow-right-C3rS6YbM.js";import"./circles-three-Bzj6O2Ab.js";import{x as e}from"./iframe-DgD2fjN1.js";import"./img.component-CzfWMpUn.js";import"./video.component-BaNW4fJo.js";import"./card.component-ByseI5GP.js";import"./flex.component-B01_mVld.js";import"./default-typography.styles-yEtprrs8.js";import"./divider.component-DIq7eaaX.js";import"./arrow-down.component-CWk0sWVX.js";import"./icon.component-Hxs4rkhS.js";import"./arrow-right.component-B7F9k6m7.js";import"./circles-three.component-B3Oa_aia.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
