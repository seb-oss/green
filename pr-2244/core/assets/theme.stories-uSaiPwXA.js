import"./img-Dypelkwo.js";import"./video-PeT0wbGB.js";import"./card-DHtJBET2.js";import"./div-DYUnMRHp.js";import"./flex-D110lVm0.js";import"./text-C2aq6BdM.js";import"./divider-uqNoH5w6.js";import"./arrow-down-CBKupYA2.js";import"./arrow-right-i7xC6sCx.js";import"./circles-three-BXDv-JT6.js";import{x as d}from"./lit-element-Bx14lxc-.js";import"./img.component-BT2Lhn6v.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-Kn_onYIX.js";import"./declarative-layout-mixins-DHam8wVT.js";import"./video.component-CKrdDvae.js";import"./query-p8xgzTDt.js";import"./card.component-BUB9hXTT.js";import"./div.component-CuGXkC9B.js";import"./flex.component-Dkxsb3b9.js";import"./text.component-BwmaatYo.js";import"./static-B8S6DEnV.js";import"./divider.component-9G54erJs.js";import"./arrow-down.component-CrBWtV65.js";import"./icon-Cw5ADNaL.js";import"./unsafe-html-CYO4avEf.js";import"./directive-CF8sV3Lr.js";import"./arrow-right.component-DyQ1MpCb.js";import"./circles-three.component-r0W947oZ.js";const B={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source},description:{story:"Inspect this example and try changing the properties of `gds-theme`.",...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.description}}};const G=["Theme"];export{t as Theme,G as __namedExportsOrder,B as default};
