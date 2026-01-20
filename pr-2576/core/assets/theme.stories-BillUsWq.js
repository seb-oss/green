import"./img-BL2uxlTk.js";import"./video-CQpNw6mv.js";import"./card-CnRU_dqU.js";import"./div-nOK0SM49.js";import"./flex-Dk-FlpcE.js";import"./text-BnyIwtG1.js";import"./divider-BwcRfNbH.js";import"./arrow-down-F4WGb5EB.js";import"./arrow-right-TR3pRxLw.js";import"./circles-three-OqB2B6ZJ.js";import{x as e}from"./iframe-lN6_ugwX.js";import"./img.component-Dw4Nl6HR.js";import"./video.component-CH4XGdmz.js";import"./card.component-POqCae3K.js";import"./flex.component-DPfdcRTn.js";import"./default-typography.styles-BT95qZUT.js";import"./divider.component-D1tuoEcE.js";import"./arrow-down.component-vElX_kYw.js";import"./icon.component-BhPZNMJm.js";import"./arrow-right.component-DM4DCvv2.js";import"./circles-three.component-QskFhTYp.js";const w={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
