import{x as t}from"./lit-element-Bx14lxc-.js";import{o as j}from"./if-defined-CVqwUuaf.js";import{G as H}from"./spinner.component-tRIws-99.js";import"./div-s41PwoZa.js";import"./flex-BNobuLJH.js";import"./text-CuptJ2S6.js";import"./card-CjyDFxo8.js";import"./theme-D2Z-XLZF.js";import"./button-DGDHA82E.js";import"./divider-BK3MyfWU.js";import{a as P}from"./argTableProps-Ck3Q-cG8.js";import"./runtime-CNluP0A8.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./tokens.style-Cct4pBht.js";import"./watch-tFciLXSI.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./div.component-CLY16RHW.js";import"./flex.component-BfKO9GTN.js";import"./text.component-LNrakRk-.js";import"./static-B8S6DEnV.js";import"./card.component-DkFuee-h.js";import"./theme.component-CC2sbH35.js";import"./transitional-styles-unlae3Cp.js";import"./button.component-BkjhbsKb.js";import"./query-p8xgzTDt.js";import"./observe-light-dom-CmJPHUQ4.js";import"./divider.component-BbGq62mG.js";import"./custom-elements-oof-EKQP.js";H.define();const we={title:"Components/Spinner",component:"gds-spinner",tags:["autodocs"],argTypes:{...P("gds-textarea")},parameters:{docs:{description:{component:`A spinner is an indeterminate progress indicator.

@status beta

## Features
- Multiple sizes (sm, md, lg)
- Optional text label
- Container cover mode
- Fullscreen mode
- Accessibility support
- Light/dark theme support`}}}},a={args:{size:"md",showLabel:!0,cover:!1,fullscreen:!1},render:e=>t`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
    >
      <gds-div padding="m">
        <gds-text tag="h3" margin-top="0">Container Content</gds-text>
        <gds-text tag="p"
          >This is some sample content in the container.</gds-text
        >
        <gds-text tag="p">More content here...</gds-text>
      </gds-div>
      <gds-spinner
        size=${e.size}
        label=${j(e.label)}
        ?showLabel=${e.showLabel}
        ?cover=${e.cover}
        ?fullscreen=${e.fullscreen}
      ></gds-spinner>
    </gds-card>
  `},o={name:"Size Variants",render:()=>t`
    <gds-flex gap="2xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner size="sm" label="small" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md" label="Medium (default)" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="lg" label="Large" showLabel></gds-spinner>
      </gds-div>
    </gds-flex>
  `},n={name:"Label Options",render:()=>t`
    <gds-grid gap="4xl" columns=">0{2}">
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Hidden Label</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With hidden label (for screen readers)"
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Visible Label</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With visible label"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Label top</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With label on top"
            label-position="top"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Label left</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With label on left"
            label-position="left"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Label right</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With label on right"
            label-position="right"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
    </gds-grid>
  `},s={name:"Container Cover",render:()=>t`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
    >
      <gds-div padding="m">
        <gds-text tag="h3" margin-top="0">Container Content</gds-text>
        <gds-text tag="p"
          >This is some sample content in the container.</gds-text
        >
        <gds-text tag="p">More content here...</gds-text>
      </gds-div>

      <gds-spinner cover showLabel size="md"></gds-spinner>
    </gds-card>
  `},r={name:"Fullscreen Mode",render:()=>t`
      <gds-div height="400px">
        <gds-spinner fullscreen showLabel></gds-spinner>
      </gds-div>
    `},d={name:"Light & Dark Theme",render:(e,{context:V})=>{const B=g=>{const i=document.getElementById("theme-demo-container");i&&(i.getAttribute("color-scheme")==="dark"?(i.setAttribute("color-scheme","light"),g.target.textContent="Switch to Dark Theme"):(i.setAttribute("color-scheme","dark"),g.target.textContent="Switch to Light Theme"))};return t`
      <gds-theme
        id="theme-demo-container"
        color-scheme="light"
        .designVersion=${V.globals.style}
      >
        <gds-card variant="secondary" padding="2xl">
          <gds-text tag="h3">Theme Mode Demonstration</gds-text>
          <gds-text tag="p"
            >The spinner automatically adapts to light and dark
            themes:</gds-text
          >

          <div>
            <gds-button
              id="theme-toggle"
              padding="s m"
              background-color="primary"
              color="white"
              border="none"
              border-radius="xs"
              cursor="pointer"
              @click=${B}
            >
              Switch to Dark Theme
            </gds-button>
          </div>

          <gds-flex gap="2xl" margin-top="l" justify-content="center">
            <gds-card padding="l" width="180px">
              <gds-flex flex-direction="column" align-items="center" gap="m">
                <gds-text margin-top="m" font-weight="medium"
                  >Standard Spinner</gds-text
                >
                <gds-spinner size="md"></gds-spinner>
              </gds-flex>
            </gds-card>

            <gds-card padding="l" width="180px">
              <gds-flex flex-direction="column" align-items="center" gap="m">
                <gds-text margin-top="m" font-weight="medium"
                  >With Label</gds-text
                >
                <gds-spinner
                  size="md"
                  showLabel
                ></gds-spinner>
              </gds-flex>
            </gds-card>

            <gds-card padding="l" width="180px">
              <gds-text text-align="center" font-weight="medium"
                >With Cover</gds-text
              >
              <gds-div
                position="relative"
                height="100px"
                display="flex"
                align-items="center"
                justify-content="center"
                background="surface"
                margin-bottom="m"
              >
              <gds-text margin="0" color="primary">Content</gds-text>
                <gds-spinner size="md" cover></gds-spinner>
              </gds-div>
            </gds-card>
          </gds-flex>
        </gds-div>
      </gds-theme>
    `}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'md',
    showLabel: true,
    cover: false,
    fullscreen: false
  },
  render: args => html\`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
    >
      <gds-div padding="m">
        <gds-text tag="h3" margin-top="0">Container Content</gds-text>
        <gds-text tag="p"
          >This is some sample content in the container.</gds-text
        >
        <gds-text tag="p">More content here...</gds-text>
      </gds-div>
      <gds-spinner
        size=\${args.size}
        label=\${ifDefined(args.label)}
        ?showLabel=\${args.showLabel}
        ?cover=\${args.cover}
        ?fullscreen=\${args.fullscreen}
      ></gds-spinner>
    </gds-card>
  \`
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,h,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Size Variants',
  render: () => html\`
    <gds-flex gap="2xl" align-items="center">
      <gds-div text-align="center">
        <gds-spinner size="sm" label="small" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="md" label="Medium (default)" showLabel></gds-spinner>
      </gds-div>
      <gds-div text-align="center">
        <gds-spinner size="lg" label="Large" showLabel></gds-spinner>
      </gds-div>
    </gds-flex>
  \`
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,u,f,v,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Label Options',
  render: () => html\`
    <gds-grid gap="4xl" columns=">0{2}">
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Hidden Label</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With hidden label (for screen readers)"
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Visible Label</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With visible label"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Label top</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With label on top"
            label-position="top"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Label left</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With label on left"
            label-position="left"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
      <gds-flex text-align="center" flex-direction="column" gap="m" flex="1">
        <gds-text tag="h4">Label right</gds-text>
        <gds-card>
          <gds-spinner
            size="md"
            label="With label on right"
            label-position="right"
            showLabel
          ></gds-spinner>
        </gds-card>
      </gds-flex>
    </gds-grid>
  \`
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source},description:{story:"The label is hidden by default, but can also be shown visually. A label should always be provided for accessibility reasons.\nThe position of the label can also be customized to appear on top, left, or right of the spinner. this is done with the `label-position` attribute.",...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var L,z,y,T,C;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Container Cover',
  render: () => html\`
    <gds-card
      position="relative"
      width="400px"
      height="300px"
      border-radius="xs"
      overflow="hidden"
    >
      <gds-div padding="m">
        <gds-text tag="h3" margin-top="0">Container Content</gds-text>
        <gds-text tag="p"
          >This is some sample content in the container.</gds-text
        >
        <gds-text tag="p">More content here...</gds-text>
      </gds-div>

      <gds-spinner cover showLabel size="md"></gds-spinner>
    </gds-card>
  \`
}`,...(y=(z=s.parameters)==null?void 0:z.docs)==null?void 0:y.source},description:{story:"By setting the container position to relative, the spinner can cover the entire container by using the `cover` attribute.",...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.description}}};var k,S,M,W,$;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Fullscreen Mode',
  render: () => {
    return html\`
      <gds-div height="400px">
        <gds-spinner fullscreen showLabel></gds-spinner>
      </gds-div>
    \`;
  }
}`,...(M=(S=r.parameters)==null?void 0:S.docs)==null?void 0:M.source},description:{story:`The fullscreen spinner covers the entire viewport and prevents scrolling.

Check this example in story view by clicking on it in the menu on the left.`,...($=(W=r.parameters)==null?void 0:W.docs)==null?void 0:$.description}}};var D,A,F,E,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Light & Dark Theme',
  render: (args, {
    context
  }) => {
    // Function to handle the theme toggle
    const handleThemeToggle = (e: Event) => {
      const demo = document.getElementById('theme-demo-container');
      if (demo) {
        const isDark = demo.getAttribute('color-scheme') === 'dark';
        if (isDark) {
          demo.setAttribute('color-scheme', 'light');
          (e.target as HTMLButtonElement).textContent = 'Switch to Dark Theme';
        } else {
          demo.setAttribute('color-scheme', 'dark');
          (e.target as HTMLButtonElement).textContent = 'Switch to Light Theme';
        }
      }
    };
    return html\`
      <gds-theme
        id="theme-demo-container"
        color-scheme="light"
        .designVersion=\${context.globals.style}
      >
        <gds-card variant="secondary" padding="2xl">
          <gds-text tag="h3">Theme Mode Demonstration</gds-text>
          <gds-text tag="p"
            >The spinner automatically adapts to light and dark
            themes:</gds-text
          >

          <div>
            <gds-button
              id="theme-toggle"
              padding="s m"
              background-color="primary"
              color="white"
              border="none"
              border-radius="xs"
              cursor="pointer"
              @click=\${handleThemeToggle}
            >
              Switch to Dark Theme
            </gds-button>
          </div>

          <gds-flex gap="2xl" margin-top="l" justify-content="center">
            <gds-card padding="l" width="180px">
              <gds-flex flex-direction="column" align-items="center" gap="m">
                <gds-text margin-top="m" font-weight="medium"
                  >Standard Spinner</gds-text
                >
                <gds-spinner size="md"></gds-spinner>
              </gds-flex>
            </gds-card>

            <gds-card padding="l" width="180px">
              <gds-flex flex-direction="column" align-items="center" gap="m">
                <gds-text margin-top="m" font-weight="medium"
                  >With Label</gds-text
                >
                <gds-spinner
                  size="md"
                  showLabel
                ></gds-spinner>
              </gds-flex>
            </gds-card>

            <gds-card padding="l" width="180px">
              <gds-text text-align="center" font-weight="medium"
                >With Cover</gds-text
              >
              <gds-div
                position="relative"
                height="100px"
                display="flex"
                align-items="center"
                justify-content="center"
                background="surface"
                margin-bottom="m"
              >
              <gds-text margin="0" color="primary">Content</gds-text>
                <gds-spinner size="md" cover></gds-spinner>
              </gds-div>
            </gds-card>
          </gds-flex>
        </gds-div>
      </gds-theme>
    \`;
  }
}`,...(F=(A=d.parameters)==null?void 0:A.docs)==null?void 0:F.source},description:{story:`The spinner colors adaps to the current user settings, and the label uses currentColor
to inherit the text color.`,...(O=(E=d.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};const Le=["Playground","Sizes","LabelOptions","Cover","Fullscreen","ThemeModes"];export{s as Cover,r as Fullscreen,n as LabelOptions,a as Playground,o as Sizes,d as ThemeModes,Le as __namedExportsOrder,we as default};
