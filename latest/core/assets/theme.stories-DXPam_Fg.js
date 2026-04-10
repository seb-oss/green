import"./img-7zWX25kA.js";import"./video-D39xJsaR.js";import"./card-BKUWI3Fo.js";import"./div-CUGPOH2T.js";import"./flex-DJbfbMKc.js";import"./text-C7W8wmSq.js";import"./divider-Dcw3FQY4.js";import"./arrow-down-Cc3g3cbH.js";import"./arrow-right-DUjmezpt.js";import"./circles-three-CA3tKEYq.js";import{b as a}from"./iframe-BhBXWYpV.js";import"./img.component-CRrs4HLI.js";import"./video.component-DVjZY598.js";import"./card.component-BZcJNlkI.js";import"./flex.component-BoVuiBvi.js";import"./text.component-tWh0DdT1.js";import"./default-typography.styles-ErHUA9wN.js";import"./divider.component-CjE7VBzm.js";import"./arrow-down.component-CPrUhsmg.js";import"./icon.component-Cs4MsctY.js";import"./arrow-right.component-W47wbLrI.js";import"./circles-three.component-CeP6UW5G.js";import"./preload-helper-Dp1pzeXC.js";const _={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
are applied to its children. It can be used to control light and dark mode, as well as which
design version the children should use (2016 or 2023)

For the 2016 styles to work, [Transitioanl Styles](http://localhost:4400/?path=/docs/concepts-transitional-styles--docs)
must be imported and and registered for the used components.

@status beta`}}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0},globals:{disableTheme:!0}}},e={...t,parameters:{...t.parameters,globals:{disableTheme:!0}},render:()=>a`
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
  `};var n,r,s,d,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source},description:{story:"Inspect this example and try changing the properties of `gds-theme`.",...(o=(d=e.parameters)==null?void 0:d.docs)==null?void 0:o.description}}};const E=["Theme"];export{e as Theme,E as __namedExportsOrder,_ as default};
