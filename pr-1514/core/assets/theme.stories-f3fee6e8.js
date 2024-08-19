import"./img-eaa2ca24.js";import"./video-cb315224.js";import"./card-11ff2feb.js";import"./flex-45596286.js";import"./text-6111a12a.js";import"./divider-496f1ee5.js";import"./arrow-right-0e6be7a2.js";import"./circles-three-2337ac00.js";import{x as r}from"./lit-element-71e04f06.js";import"./gds-element-54cd6e2a.js";import"./_commonjsHelpers-725317a4.js";import"./style-expression-property-89161d08.js";import"./watch-c4961afe.js";import"./query-b9d3c2af.js";import"./icon-1e43e110.js";import"./directive-12249aa5.js";const T={title:"Docs/Theme",component:"gds-theme",tags:["autodocs"],parameters:{docs:{description:{component:`The \`gds-theme\` is a custom element that provides CSS variables for a part of the DOM tree.
Every descendant of this component will inherit the CSS variables provided by the theme set on this component.
It is mandatory and all components should be wrapped in a \`gds-theme\` element to ensure consistent styling.

@status beta

## Usage

\`\`\`html
<gds-theme color-scheme="dark">
  <!-- Your content here will inherit the dark theme -->
</gds-theme>
\`\`\`

## Properties

- \`colorScheme\`: This property reflects the theme mode and can be set to \`light\`, \`dark\`, or \`auto\`.
  - \`light\`: Applies the light theme.
  - \`dark\`: Applies the dark theme.
  - \`auto\`: Automatically switches between light and dark themes based on the user's system preferences.

## Methods

- \`connectedCallback()\`: This lifecycle method is called when the element is added to the document.
  It applies transitional styles to the component.

## Styles

The component uses the following styles:
- \`tokens\`: A set of CSS variables and design tokens.
- \`style\`: Component-specific styles defined in \`theme.style.css\`.

## Example

\`\`\`html
<gds-theme color-scheme="auto">
  <div>Your themed content here</div>
</gds-theme>
\`\`\``}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0},globals:{disableTheme:!0}}},e={...s,parameters:{...s.parameters,globals:{disableTheme:!0}},render:()=>r`
    <gds-theme>
      <gds-grid columns="xs{1} m{3} l{3}" gap="l">
        <gds-card shadow="s{xs} m{xs} l{s}" radius="xs" overflow="hidden">
          <gds-flex display="flex" gap="0" direction="column" align="stretch">
            <gds-container position="relative">
              <gds-img
                src="https://github.com/seb-oss/green/assets/2398447/cd458a77-13f1-495c-960c-ce23a18e5d9f"
                ratio="1/1"
              ></gds-img>
              <gds-container position="absolute" inset="20px 20px auto auto">
                <gds-button>
                  <gds-icon-arrow-down></gds-icon-arrow-down>
                </gds-button>
              </gds-container>
            </gds-container>
            <gds-flex
              direction="column"
              padding="s{xs} m{l} l{l}"
              align="flex-start"
              gap="l"
            >
              <gds-flex gap="s" direction="column">
                <gds-text tag="h2" size="title-large">James Doe</gds-text>
                <gds-text>
                  Passionate software engineer with a love for coding and
                  problem-solving.
                </gds-text>
              </gds-flex>
              <gds-divider opacity="0.2"></gds-divider>
              <gds-button>
                Follow
                <gds-icon-circles-three slot="lead"></gds-icon-circles-three>
              </gds-button>
            </gds-flex>
          </gds-flex>
        </gds-card>
        <gds-card shadow="l" radius="m" border="3xs/base300" overflow="hidden">
          <gds-flex gap="m" direction="column" padding="s">
            <gds-container position="relative">
              <gds-img
                src="https://github.com/seb-oss/green/assets/2398447/dff488cc-700e-47f9-b7f7-3788eb742c11"
                ratio="1/1"
                radius="xs"
              ></gds-img>
              <gds-container position="absolute" inset="20px 20px auto auto">
                <gds-button>
                  <gds-icon-arrow-down></gds-icon-arrow-down>
                </gds-button>
              </gds-container>
            </gds-container>
            <gds-flex
              direction="column"
              padding="s{xs} m{s} l{s}"
              align="flex-start"
              gap="l"
            >
              <gds-flex gap="s" direction="column">
                <gds-text tag="h2" size="title-large">Lorem Ipsum</gds-text>
                <gds-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </gds-text>
              </gds-flex>
              <gds-button>
                Button
                <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
              </gds-button>
            </gds-flex>
          </gds-flex>
        </gds-card>
        <gds-card radius="m" overflow="hidden">
          <gds-flex position="relative" height="100%">
            <gds-video
              src="https://github.com/seb-oss/green/assets/2398447/d77a95d0-e4d7-4c49-bd95-50d0f72f1a7a"
              fit="cover"
              ratio="1/1"
              events="none"
              autoplay
              muted
              loop
            ></gds-video>
            <gds-card
              position="absolute"
              inset="50% 0px 0px 0px"
              filter="0"
              background="base900/0.6"
              color="white-text"
              mask="top"
            >
              <gds-flex
                direction="column"
                justify="flex-end"
                padding="4xl 2xl 2xl 2xl"
                gap="l"
                height="100%"
              >
                <gds-container>
                  <gds-text size="title-large">Jane Doe</gds-text>
                  <gds-text size="body-medium">UX Designer</gds-text>
                </gds-container>
                <gds-flex gap="s">
                  <gds-button rank="secondary">Message</gds-button>
                  <gds-button rank="secondary">Follow</gds-button>
                </gds-flex>
              </gds-flex>
            </gds-card>
          </gds-flex>
        </gds-card>
      </gds-grid>
    </gds-theme>
  `};var t,n,d,o,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    globals: {
      disableTheme: true
    }
  },
  render: () => html\`
    <gds-theme>
      <gds-grid columns="xs{1} m{3} l{3}" gap="l">
        <gds-card shadow="s{xs} m{xs} l{s}" radius="xs" overflow="hidden">
          <gds-flex display="flex" gap="0" direction="column" align="stretch">
            <gds-container position="relative">
              <gds-img
                src="https://github.com/seb-oss/green/assets/2398447/cd458a77-13f1-495c-960c-ce23a18e5d9f"
                ratio="1/1"
              ></gds-img>
              <gds-container position="absolute" inset="20px 20px auto auto">
                <gds-button>
                  <gds-icon-arrow-down></gds-icon-arrow-down>
                </gds-button>
              </gds-container>
            </gds-container>
            <gds-flex
              direction="column"
              padding="s{xs} m{l} l{l}"
              align="flex-start"
              gap="l"
            >
              <gds-flex gap="s" direction="column">
                <gds-text tag="h2" size="title-large">James Doe</gds-text>
                <gds-text>
                  Passionate software engineer with a love for coding and
                  problem-solving.
                </gds-text>
              </gds-flex>
              <gds-divider opacity="0.2"></gds-divider>
              <gds-button>
                Follow
                <gds-icon-circles-three slot="lead"></gds-icon-circles-three>
              </gds-button>
            </gds-flex>
          </gds-flex>
        </gds-card>
        <gds-card shadow="l" radius="m" border="3xs/base300" overflow="hidden">
          <gds-flex gap="m" direction="column" padding="s">
            <gds-container position="relative">
              <gds-img
                src="https://github.com/seb-oss/green/assets/2398447/dff488cc-700e-47f9-b7f7-3788eb742c11"
                ratio="1/1"
                radius="xs"
              ></gds-img>
              <gds-container position="absolute" inset="20px 20px auto auto">
                <gds-button>
                  <gds-icon-arrow-down></gds-icon-arrow-down>
                </gds-button>
              </gds-container>
            </gds-container>
            <gds-flex
              direction="column"
              padding="s{xs} m{s} l{s}"
              align="flex-start"
              gap="l"
            >
              <gds-flex gap="s" direction="column">
                <gds-text tag="h2" size="title-large">Lorem Ipsum</gds-text>
                <gds-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </gds-text>
              </gds-flex>
              <gds-button>
                Button
                <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
              </gds-button>
            </gds-flex>
          </gds-flex>
        </gds-card>
        <gds-card radius="m" overflow="hidden">
          <gds-flex position="relative" height="100%">
            <gds-video
              src="https://github.com/seb-oss/green/assets/2398447/d77a95d0-e4d7-4c49-bd95-50d0f72f1a7a"
              fit="cover"
              ratio="1/1"
              events="none"
              autoplay
              muted
              loop
            ></gds-video>
            <gds-card
              position="absolute"
              inset="50% 0px 0px 0px"
              filter="0"
              background="base900/0.6"
              color="white-text"
              mask="top"
            >
              <gds-flex
                direction="column"
                justify="flex-end"
                padding="4xl 2xl 2xl 2xl"
                gap="l"
                height="100%"
              >
                <gds-container>
                  <gds-text size="title-large">Jane Doe</gds-text>
                  <gds-text size="body-medium">UX Designer</gds-text>
                </gds-container>
                <gds-flex gap="s">
                  <gds-button rank="secondary">Message</gds-button>
                  <gds-button rank="secondary">Follow</gds-button>
                </gds-flex>
              </gds-flex>
            </gds-card>
          </gds-flex>
        </gds-card>
      </gds-grid>
    </gds-theme>
  \`
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source},description:{story:"Theme",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.description}}};const S=["Theme"];export{e as Theme,S as __namedExportsOrder,T as default};
