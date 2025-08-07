import"./img-rmAMnywu.js";import"./video-CHAkQsVH.js";import"./card-Cyd-1AEK.js";import"./container-CCe1QeNV.js";import"./flex-SIqplLg1.js";import"./text-BBWdkNXA.js";import"./divider-DE0OKgPE.js";import"./arrow-down-Cl_s7h0S.js";import"./arrow-right-sKaNGJ1t.js";import"./circles-three-CfB8JhmM.js";import{x as d}from"./lit-element-Bx14lxc-.js";import"./img.component-DwlrLwrV.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-BebDwfJu.js";import"./declarative-layout-mixins-DHam8wVT.js";import"./video.component-CReaFTN5.js";import"./query-p8xgzTDt.js";import"./card.component-9S1PasTR.js";import"./div.component-DV4jT0Ib.js";import"./container.component-BlTqh7v8.js";import"./flex.component-C5LDCRNW.js";import"./text.component-CkSmcCmr.js";import"./static-B8S6DEnV.js";import"./divider.component-Bv1HaYEM.js";import"./arrow-down.component-Dljr-91A.js";import"./icon-mP8di1xV.js";import"./unsafe-html-CYO4avEf.js";import"./directive-CF8sV3Lr.js";import"./arrow-right.component-DfwGdEdg.js";import"./circles-three.component-fhErV4UX.js";const G={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
are applied to its children. It can be used to control light and dark mode, as well as which
design version the children should use (2016 or 2023)

For the 2016 styles to work, [Transitioanl Styles](http://localhost:4400/?path=/docs/concepts-transitional-styles--docs)
must be imported and and registered for the used components.

@status beta`}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0},globals:{disableTheme:!0}}},t={...e,parameters:{...e.parameters,globals:{disableTheme:!0}},render:()=>d`
    <gds-grid gap="m" columns="2">
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
  `};var r,s,n,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    globals: {
      disableTheme: true
    }
  },
  render: () => html\`
    <gds-grid gap="m" columns="2">
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
  \`
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source},description:{story:"Inspect this example and try changing the properties of `gds-theme`.",...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.description}}};const H=["Theme"];export{t as Theme,H as __namedExportsOrder,G as default};
