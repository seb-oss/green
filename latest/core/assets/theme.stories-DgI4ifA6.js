import"./img-DXAP_Oef.js";import"./video-DOXVHnYb.js";import"./card-BdXHnMNc.js";import"./div-BGiQmzAo.js";import"./flex-BPIrVcBL.js";import"./text-Dq7VlogH.js";import"./divider-N0UEf5Po.js";import"./arrow-down-Bs5ybK_F.js";import"./arrow-right-DQPBPaj-.js";import"./circles-three-7ix2ehT7.js";import{b as n}from"./iframe-D5_6QphS.js";import"./img.component-sLf_dcl3.js";import"./video.component-BAtXtjPh.js";import"./card.component-Vukp33GG.js";import"./flex.component-BjyvNHfw.js";import"./text.component-DGNJO9Sm.js";import"./default-typography.styles-BL8vcvwt.js";import"./arrow-down.component-Bq_P6g7b.js";import"./icon.component-CD_WstkS.js";import"./arrow-right.component-MM-Q93Q1.js";import"./circles-three.component-C6aKXLeK.js";import"./preload-helper-PPVm8Dsz.js";const I={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:"`gds-theme` is a utility component that can be used to control which CSS variables and styles\nare applied to its children. It can be used to control light and dark mode, as well as which\ndesign version the children should use (2016 or 2023)\n\nIt is reccommended to use at least one instance of `gds-theme` at the root of your application\nto ensure that all components have the correct variables applied. This ensures\nthat the variables you consume comes from the same version you import `gds-theme` and other\ncomponents from. If there is no parent `gds-theme`, components will get their variables from `:root`,\nwhich could potentially come from a different version of the library. If there are multiple nested\n`gds-theme` components, the closest one will apply."}}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0},globals:{disableTheme:!0}}},e={...t,parameters:{...t.parameters,globals:{disableTheme:!0}},render:()=>n`
    <gds-grid gap="m" columns="2">
      <gds-flex flex-direction="column" gap="m">
        <gds-theme color-scheme="auto" design-version="2023">
          <gds-card variant="neutral-01" align="center">
            <gds-button>Auto mode button in a card (2023)</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="light" design-version="2023">
          <gds-card variant="neutral-01" align="center">
            <gds-button>Light mode button in a card</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="dark" design-version="2023">
          <gds-card variant="neutral-01" align="center">
            <gds-button>Dark mode button in a card</gds-button>
          </gds-card>
        </gds-theme>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-theme color-scheme="auto" design-version="2016">
          <gds-card variant="neutral-01" align="center">
            <gds-button>Auto mode button in a card (2016)</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="light" design-version="2016">
          <gds-card variant="neutral-01" align="center">
            <gds-button>Light mode button in a card (2016)</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="dark" design-version="2016">
          <gds-card variant="neutral-01" align="center">
            <gds-button>Dark mode button in a card (2016)</gds-button>
          </gds-card>
        </gds-theme>
      </gds-flex>
    </gds-grid>
  `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    globals: {
      disableTheme: true
    }
  },
  render: () => html\`
    <gds-grid gap="m" columns="2">
      <gds-flex flex-direction="column" gap="m">
        <gds-theme color-scheme="auto" design-version="2023">
          <gds-card variant="neutral-01" align="center">
            <gds-button>Auto mode button in a card (2023)</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="light" design-version="2023">
          <gds-card variant="neutral-01" align="center">
            <gds-button>Light mode button in a card</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="dark" design-version="2023">
          <gds-card variant="neutral-01" align="center">
            <gds-button>Dark mode button in a card</gds-button>
          </gds-card>
        </gds-theme>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-theme color-scheme="auto" design-version="2016">
          <gds-card variant="neutral-01" align="center">
            <gds-button>Auto mode button in a card (2016)</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="light" design-version="2016">
          <gds-card variant="neutral-01" align="center">
            <gds-button>Light mode button in a card (2016)</gds-button>
          </gds-card>
        </gds-theme>
        <gds-theme color-scheme="dark" design-version="2016">
          <gds-card variant="neutral-01" align="center">
            <gds-button>Dark mode button in a card (2016)</gds-button>
          </gds-card>
        </gds-theme>
      </gds-flex>
    </gds-grid>
  \`
}`,...e.parameters?.docs?.source},description:{story:"Inspect this example and try changing the properties of `gds-theme`.",...e.parameters?.docs?.description}}};const A=["Theme"];export{e as Theme,A as __namedExportsOrder,I as default};
