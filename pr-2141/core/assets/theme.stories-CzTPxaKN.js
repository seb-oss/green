import"./img-BQPQGWlH.js";import"./video-DNf5KYsD.js";import"./card-BDIWjU2T.js";import"./container-Zv6QJKLH.js";import"./flex-B8AQUA7n.js";import"./text-BgDT2iSM.js";import"./divider-D1z2XdRH.js";import"./arrow-down-CXZB6Tvy.js";import"./arrow-right-BWrr2IHg.js";import"./circles-three-BtLso5QR.js";import{x as d}from"./lit-element-Bx14lxc-.js";import"./custom-element-scoping-b4c89-hi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-C9bLefPj.js";import"./declarative-layout-mixins-CxeMR8ZJ.js";import"./query-p8xgzTDt.js";import"./card.component-ESUepO5H.js";import"./div.component-Diofk0s1.js";import"./flex.component-BDILfbvS.js";import"./text.component-CmSKS74a.js";import"./static-B8S6DEnV.js";import"./icon-Bm2mwQqA.js";import"./directive-CF8sV3Lr.js";const E={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
are applied to its children. It can be used to control light and dark mode, as well as which
design version the children should use (2016 or 2023)

For the 2016 styles to work, [Transitioanl Styles](http://localhost:4400/?path=/docs/concepts-transitional-styles--docs)
must be imported and and registered for the used components.

@status beta`}}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0},globals:{disableTheme:!0}}},e={...t,parameters:{...t.parameters,globals:{disableTheme:!0}},render:()=>d`
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
  `};var r,s,n,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source},description:{story:"Inspect this example and try changing the properties of `gds-theme`.",...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.description}}};const F=["Theme"];export{e as Theme,F as __namedExportsOrder,E as default};
