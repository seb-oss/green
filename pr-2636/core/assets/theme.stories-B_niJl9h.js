import"./img-DZOkBNMX.js";import"./video-CpCq8LPQ.js";import"./card-CwfQmVRH.js";import"./div-DcowCamB.js";import"./flex-D9kYoABr.js";import"./text-jEQP1ns7.js";import"./divider-BGNU2zoj.js";import"./arrow-down-Bl4qWFmB.js";import"./arrow-right-CFEgqFGH.js";import"./circles-three-DLjUGkNm.js";import{x as e}from"./iframe-RJwfSkMC.js";import"./img.component-C59H_23-.js";import"./video.component-BY_7Iwnc.js";import"./card.component-BIpb3hIK.js";import"./flex.component-BfiuFAFA.js";import"./default-typography.styles-DQY1pjKL.js";import"./divider.component-DRjAbHaH.js";import"./arrow-down.component-DSVlCr8e.js";import"./icon.component-Cupvf4Wr.js";import"./arrow-right.component-DtHkBZxN.js";import"./circles-three.component-Abp7DBWS.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
