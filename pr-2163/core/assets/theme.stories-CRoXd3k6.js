import"./img-CqTNk5y1.js";import"./video-D9B5CY1k.js";import"./card-gDZ-yWb8.js";import"./container-QmekALCA.js";import"./flex-D0O-iS51.js";import"./text-ChmE-p4g.js";import"./divider-DQ0R5E3W.js";import"./arrow-down-BSDFpSUa.js";import"./arrow-right-DFCbjSp-.js";import"./circles-three-C33dqfKC.js";import{x as d}from"./lit-element-Bx14lxc-.js";import"./img.component-4cLxCj8x.js";import"./custom-element-scoping-CNGU1oQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-BXmqfwyc.js";import"./declarative-layout-mixins-D1Y0gyd7.js";import"./video.component-BRdTIIhE.js";import"./query-p8xgzTDt.js";import"./card.component-BfLCFBH7.js";import"./div.component-CbIAaKIF.js";import"./container.component-CDn6FMk4.js";import"./flex.component-BO1tOu_E.js";import"./text.component-DB4qijWA.js";import"./static-B8S6DEnV.js";import"./arrow-down.component-BhFzE1Ig.js";import"./icon-BROJl4dB.js";import"./directive-CF8sV3Lr.js";import"./arrow-right.component-DUz8FE4Q.js";import"./circles-three.component-GAzAF2IR.js";const A={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source},description:{story:"Inspect this example and try changing the properties of `gds-theme`.",...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.description}}};const B=["Theme"];export{t as Theme,B as __namedExportsOrder,A as default};
