import{b as t,o as p}from"./iframe-C9vl5CI1.js";import"./spinner-D6w901F3.js";import"./div-59B3LB0n.js";import"./flex-DfOrsBDP.js";import"./text-CHU4bqIm.js";import"./card-C8DTKLAt.js";import"./divider-BaQ0Pj-8.js";import{a as m}from"./argTableProps-xov3vLYX.js";import"./preload-helper-PPVm8Dsz.js";import"./spinner.component-O5J69irY.js";import"./localized-decorator-DIwM2EAe.js";import"./scroll-lock-CvzCaP-_.js";import"./flex.component-DhVZE6-t.js";import"./text.component-BXSo7-sn.js";import"./default-typography.styles-DkX2A4Wv.js";import"./card.component-Cl2zqnqX.js";const D={title:"Components/Spinner",component:"gds-spinner",tags:["autodocs"],argTypes:{...m("gds-spinner")},parameters:{docs:{description:{component:`A spinner is an indeterminate progress indicator.

@status beta

## Features
- Multiple sizes (sm, md, lg)
- Optional text label
- Container cover mode
- Fullscreen mode
- Accessibility support
- Light/dark theme support`}}}},o={args:{size:"md",showLabel:!0,cover:!1},argTypes:{fullscreen:{control:!1}},render:e=>t`
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
      ></gds-spinner>
    </gds-card>
  `},g={name:"Size Variants",render:()=>t`
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
  `},s={name:"Label Options",render:()=>t`
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
  `},d={name:"Container Cover",render:()=>t`
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
  `},r={name:"Fullscreen Mode",parameters:{docs:{story:{inline:!1,iframeHeight:400}}},render:()=>t`
      <gds-div padding="m">
        <gds-button @click=${()=>{const n=document.getElementById("fullscreen-demo-spinner");n&&(n.fullscreen=!n.fullscreen)}}>Toggle fullscreen spinner</gds-button>
        <gds-spinner
          id="fullscreen-demo-spinner"
          label="Loading..."
          showLabel
        ></gds-spinner>
      </gds-div>
    `},i={name:"Light & Dark Theme",render:(e,{context:n})=>{const c=l=>{const a=document.getElementById("theme-demo-container");a&&(a.getAttribute("color-scheme")==="dark"?(a.setAttribute("color-scheme","light"),l.target.textContent="Switch to Dark Theme"):(a.setAttribute("color-scheme","dark"),l.target.textContent="Switch to Light Theme"))};return t`
      <gds-theme
        id="theme-demo-container"
        color-scheme="light"
        .designVersion=${n.globals.style}
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
    `}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    showLabel: true,
    cover: false
  },
  argTypes: {
    fullscreen: {
      control: false
    }
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
      ></gds-spinner>
    </gds-card>
  \`
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"The label is hidden by default, but can also be shown visually. A label should always be provided for accessibility reasons.\nThe position of the label can also be customized to appear on top, left, or right of the spinner. this is done with the `label-position` attribute.",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"By setting the container position to relative, the spinner can cover the entire container by using the `cover` attribute.",...d.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Fullscreen Mode',
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 400
      }
    }
  },
  render: () => {
    const toggle = () => {
      const spinner = document.getElementById('fullscreen-demo-spinner') as any;
      if (spinner) spinner.fullscreen = !spinner.fullscreen;
    };
    return html\`
      <gds-div padding="m">
        <gds-button @click=\${toggle}>Toggle fullscreen spinner</gds-button>
        <gds-spinner
          id="fullscreen-demo-spinner"
          label="Loading..."
          showLabel
        ></gds-spinner>
      </gds-div>
    \`;
  }
}`,...r.parameters?.docs?.source},description:{story:`The fullscreen spinner covers the entire viewport and prevents scrolling.

Check this example in story view by clicking on it in the menu on the left.`,...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:`The spinner colors adaps to the current user settings, and the label uses currentColor
to inherit the text color.`,...i.parameters?.docs?.description}}};const A=["Playground","Sizes","LabelOptions","Cover","Fullscreen","ThemeModes"];export{d as Cover,r as Fullscreen,s as LabelOptions,o as Playground,g as Sizes,i as ThemeModes,A as __namedExportsOrder,D as default};
