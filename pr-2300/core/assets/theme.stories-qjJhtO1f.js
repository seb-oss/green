import"./img-K0d9g8jJ.js";import"./video-MGYNrier.js";import"./card-B-1jOFPW.js";import"./container-B8CK4EPM.js";import"./flex-6YMVJR_L.js";import"./text-XnPKgJoQ.js";import"./divider-RZPaqpXu.js";import"./arrow-down-BhuA2ILs.js";import"./arrow-right-c5j6fZ7y.js";import"./circles-three-D2C2ZM30.js";import{x as d}from"./lit-element-Bx14lxc-.js";import"./img.component-CLqESan0.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-Khpz0lp_.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./video.component-7USUQKat.js";import"./query-p8xgzTDt.js";import"./card.component-UD91Xhmi.js";import"./div.component-BCGMV-IS.js";import"./container.component-DrZkzTNZ.js";import"./flex.component-C1NAGQHk.js";import"./text.component-m9A6I6j-.js";import"./static-B8S6DEnV.js";import"./divider.component-CwagVNTp.js";import"./arrow-down.component-BPtMdi36.js";import"./icon-BPdtWFmz.js";import"./unsafe-html-CYO4avEf.js";import"./directive-CF8sV3Lr.js";import"./arrow-right.component-Bw-C8R6B.js";import"./circles-three.component-CVRLKcw7.js";const G={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
