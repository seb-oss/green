import"./img-CR8-CUki.js";import"./video-DrC6RHVp.js";import"./card-z797v2WQ.js";import"./div-DADNuxen.js";import"./flex-DNTtcIva.js";import"./text-BQP2q-4d.js";import"./divider-BnhyRnPs.js";import"./arrow-down-CCSkJXFu.js";import"./arrow-right-GPxlKm4I.js";import"./circles-three-B-ahNFtP.js";import{b as n}from"./iframe-BQBiNmH_.js";import"./img.component-Brix6f1D.js";import"./video.component-x91GVnJp.js";import"./card.component-KyBVIFSo.js";import"./flex.component-D_j--owZ.js";import"./text.component-Ddv93aOT.js";import"./default-typography.styles-CY-dADHx.js";import"./arrow-down.component-BudZ7s_d.js";import"./icon.component-Cz_pvx9c.js";import"./arrow-right.component-GtlCYhFs.js";import"./circles-three.component-BP-6KD3Y.js";import"./preload-helper-PPVm8Dsz.js";const I={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:"`gds-theme` is a utility component that can be used to control which CSS variables and styles\nare applied to its children. It can be used to control light and dark mode, as well as which\ndesign version the children should use (2016 or 2023)\n\nIt is reccommended to use at least one instance of `gds-theme` at the root of your application\nto ensure that all components have the correct variables applied. This ensures\nthat the variables you consume comes from the same version you import `gds-theme` and other\ncomponents from. If there is no parent `gds-theme`, components will get their variables from `:root`,\nwhich could potentially come from a different version of the library. If there are multiple nested\n`gds-theme` components, the closest one will apply."}}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0},globals:{disableTheme:!0}}},e={...t,parameters:{...t.parameters,globals:{disableTheme:!0}},render:()=>n`
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
