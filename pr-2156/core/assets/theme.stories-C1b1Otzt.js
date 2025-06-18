import"./img-CabJLofW.js";import"./video-wuZj8GAp.js";import"./card-DQV9zcAj.js";import"./container-u7ZKcCyx.js";import"./flex-0EBFStdI.js";import"./text-DWhf5Ayy.js";import"./divider-BjMFIyyI.js";import"./arrow-down-BZdnkJzq.js";import"./arrow-right-GfQ3AbYq.js";import"./circles-three-VGb5SEHJ.js";import{x as d}from"./lit-element-Bx14lxc-.js";import"./img.component-DG6niXG_.js";import"./gds-element-KHa0AloG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-YygOKULa.js";import"./declarative-layout-mixins-V-x3wfiD.js";import"./video.component-Dxw61jBc.js";import"./query-p8xgzTDt.js";import"./card.component-Dj0mih4y.js";import"./div.component-OjLeAa38.js";import"./container.component-u5wLF0ge.js";import"./flex.component-BF3O-Nq2.js";import"./static-B8S6DEnV.js";import"./arrow-down.component-dUJu8FCS.js";import"./icon-Bqw4tyWC.js";import"./directive-CF8sV3Lr.js";import"./arrow-right.component-DOuGWBUi.js";import"./circles-three.component-Dep8TSr9.js";const z={title:"Components/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-theme\` is a utility component that can be used to control which CSS variables and styles
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
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source},description:{story:"Inspect this example and try changing the properties of `gds-theme`.",...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.description}}};const A=["Theme"];export{t as Theme,A as __namedExportsOrder,z as default};
