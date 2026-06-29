import{b as t,o as p}from"./iframe-C30daY8o.js";import"./spinner-BE3Fk6a5.js";import"./div-oVNibDGe.js";import"./flex-DZHIZFig.js";import"./text-C3euKiMT.js";import"./card-B53xfZOQ.js";import"./divider-JWskKKHa.js";import{a as m}from"./argTableProps-BYvLnMpu.js";import"./preload-helper-PPVm8Dsz.js";import"./spinner.component-B_KyFoR0.js";import"./localized-decorator-CyzwuPdK.js";import"./flex.component-CJH7RqaR.js";import"./text.component-B55sY0SF.js";import"./default-typography.styles-DJJJCNpx.js";import"./card.component-DNESIVWb.js";const W={title:"Components/Spinner",component:"gds-spinner",tags:["autodocs"],argTypes:{...m("gds-textarea")},parameters:{docs:{description:{component:`A spinner is an indeterminate progress indicator.

@status beta

## Features
- Multiple sizes (sm, md, lg)
- Optional text label
- Container cover mode
- Fullscreen mode
- Accessibility support
- Light/dark theme support`}}}},g={args:{size:"md",showLabel:!0,cover:!1,fullscreen:!1},render:e=>t`
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
        label=${p(e.label)}
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
  `},d={name:"Fullscreen Mode",render:()=>t`
      <gds-div height="400px">
        <gds-spinner
          label="Click to toggle fullscreen"
          showLabel
          @click=${e=>{const i=e.target;i.fullscreen=!i.fullscreen}}
        ></gds-spinner>
      </gds-div>
    `},r={name:"Light & Dark Theme",render:(e,{context:i})=>{const c=l=>{const a=document.getElementById("theme-demo-container");a&&(a.getAttribute("color-scheme")==="dark"?(a.setAttribute("color-scheme","light"),l.target.textContent="Switch to Dark Theme"):(a.setAttribute("color-scheme","dark"),l.target.textContent="Switch to Light Theme"))};return t`
      <gds-theme
        id="theme-demo-container"
        color-scheme="light"
        .designVersion=${i.globals.style}
      >
        <gds-card variant="neutral-02" padding="2xl" outline>
          <gds-text tag="h3">Theme Mode Demonstration</gds-text>
          <gds-text tag="p"
            >The spinner automatically adapts to light and dark
            themes:</gds-text
          >

          <div>
            <gds-button
              id="theme-toggle"
              padding="s m"
              color="white"
              border="none"
              border-radius="xs"
              cursor="pointer"
              @click=${c}
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
              <gds-text margin="0" color="neutral-01">Content</gds-text>
                <gds-spinner size="md" cover></gds-spinner>
              </gds-div>
            </gds-card>
          </gds-flex>
        </gds-div>
      </gds-theme>
    `}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"The label is hidden by default, but can also be shown visually. A label should always be provided for accessibility reasons.\nThe position of the label can also be customized to appear on top, left, or right of the spinner. this is done with the `label-position` attribute.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"By setting the container position to relative, the spinner can cover the entire container by using the `cover` attribute.",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Fullscreen Mode',
  render: () => {
    return html\`
      <gds-div height="400px">
        <gds-spinner
          label="Click to toggle fullscreen"
          showLabel
          @click=\${(e: Event) => {
      const spinner = e.target as any;
      spinner.fullscreen = !spinner.fullscreen;
    }}
        ></gds-spinner>
      </gds-div>
    \`;
  }
}`,...d.parameters?.docs?.source},description:{story:`The fullscreen spinner covers the entire viewport and prevents scrolling.

Check this example in story view by clicking on it in the menu on the left.`,...d.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        <gds-card variant="neutral-02" padding="2xl" outline>
          <gds-text tag="h3">Theme Mode Demonstration</gds-text>
          <gds-text tag="p"
            >The spinner automatically adapts to light and dark
            themes:</gds-text
          >

          <div>
            <gds-button
              id="theme-toggle"
              padding="s m"
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
              <gds-text margin="0" color="neutral-01">Content</gds-text>
                <gds-spinner size="md" cover></gds-spinner>
              </gds-div>
            </gds-card>
          </gds-flex>
        </gds-div>
      </gds-theme>
    \`;
  }
}`,...r.parameters?.docs?.source},description:{story:`The spinner colors adaps to the current user settings, and the label uses currentColor
to inherit the text color.`,...r.parameters?.docs?.description}}};const D=["Playground","Sizes","LabelOptions","Cover","Fullscreen","ThemeModes"];export{s as Cover,d as Fullscreen,n as LabelOptions,g as Playground,o as Sizes,r as ThemeModes,D as __namedExportsOrder,W as default};
