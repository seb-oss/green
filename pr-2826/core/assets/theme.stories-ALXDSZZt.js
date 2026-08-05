import"./img-DbSwftPy.js";import"./video-KWNIF0z_.js";import"./card-iCC4NxkI.js";import"./div-EZxGYZYY.js";import"./flex-BAN0r9E4.js";import"./text-DrF2nVoG.js";import"./divider-_mk2Td_r.js";import"./arrow-down-CiscQyZ4.js";import"./arrow-right-DKn5izIY.js";import"./circles-three-DaSbp_ei.js";import{b as n}from"./iframe-DX1nX-Km.js";import"./img.component-B7k_QIuT.js";import"./video.component-CTspHkEV.js";import"./card.component-BdGe1mAX.js";import"./flex.component-DD6Mxhry.js";import"./text.component-D4oaXRYE.js";import"./default-typography.styles-B8qii3yw.js";import"./arrow-down.component-BkkjUpl3.js";import"./icon.component-oDcl534X.js";import"./arrow-right.component-BoT_oi9W.js";import"./circles-three.component-ChUNYJi5.js";import"./preload-helper-PPVm8Dsz.js";const I={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:"`gds-theme` is a utility component that can be used to control which CSS variables and styles\nare applied to its children. It can be used to control light and dark mode, as well as which\ndesign version the children should use (2016 or 2023)\n\nIt is reccommended to use at least one instance of `gds-theme` at the root of your application\nto ensure that all components have the correct variables applied. This ensures\nthat the variables you consume comes from the same version you import `gds-theme` and other\ncomponents from. If there is no parent `gds-theme`, components will get their variables from `:root`,\nwhich could potentially come from a different version of the library. If there are multiple nested\n`gds-theme` components, the closest one will apply."}}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0},globals:{disableTheme:!0}}},e={...t,parameters:{...t.parameters,globals:{disableTheme:!0}},render:()=>n`
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
