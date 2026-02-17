import"./img-RGytHEse.js";import"./video-BIKHI1Eu.js";import"./card-CqrK2LMs.js";import"./div-cHc5Q1rX.js";import"./flex-ClMKmKgJ.js";import"./text-DZoM2kOk.js";import"./divider-COe4DbQA.js";import"./arrow-down-jB3qrxJp.js";import"./arrow-right-DU1ErVwt.js";import"./circles-three-DSfyl0jr.js";import{x as e}from"./iframe-BjnJkqwv.js";import"./img.component-BCQ4gUrx.js";import"./video.component-7wdga3HM.js";import"./card.component-CNRv87Ji.js";import"./flex.component-DYRxf4FB.js";import"./default-typography.styles-Ck7kK6xS.js";import"./divider.component-DPkpV_5q.js";import"./arrow-down.component-G69jK3vv.js";import"./icon.component-CfBnFFAe.js";import"./arrow-right.component-BAj_HaNa.js";import"./circles-three.component-hlqMiZ2z.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
