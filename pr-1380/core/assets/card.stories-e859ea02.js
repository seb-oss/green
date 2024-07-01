import"./card-859b2d47.js";import"./img-bbc703ab.js";import"./video-a32f748c.js";import"./container-7f00f278.js";import"./text-bc28a0f2.js";import"./divider-f1f10174.js";import"./arrow-right-a9237c1d.js";import"./circles-three-608087e9.js";import{x as n}from"./lit-element-71e04f06.js";import"./gds-element-54cd6e2a.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-880811e7.js";import"./style-expression-property-89161d08.js";import"./watch-c4961afe.js";import"./query-b9d3c2af.js";import"./flex-9a6926c8.js";import"./icon-eb3cac34.js";import"./directive-12249aa5.js";const dn={title:"Docs/Layout/Card",component:"gds-card",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-card` is a custom element that provides a flexible card system.\n\nIt can be used to create a card with different styles and configurations.\n\nThe card can be customized with different properties like `shadow`, `border`, `radius`, and `background`.\nIt is designed to be used in different scenarios like displaying content, images, or other elements.\nIt can be used in combination with other elements like `gds-grid`, `gds-container`, `gds-img`, `gds-text` etc.\n\n@status beta\n\n@extends `gds-container`"}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},d={...e,render:s=>n`
    <gds-grid columns="xs{1} m{2} l{3}" gap="l">
      <gds-card shadow="s{xs} m{xs} l{s}" radius="xs" overflow="hidden">
        <gds-container
          display="flex"
          gap="0"
          direction="column"
          align="stretch"
        >
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/cd458a77-13f1-495c-960c-ce23a18e5d9f"
              ratio="1/1"
            ></gds-img>
            <gds-container
              position="absolute"
              filter="20px"
              inset="10px 10px auto auto"
              padding="s{xs} m{xs} l{xs}"
              background="base900/0.2"
              radius="xs"
              color="white-text"
              display="flex"
              align="center"
              jusitfy="center"
            >
              <gds-icon-arrow-down></gds-icon-arrow-down>
            </gds-container>
          </gds-container>
          <gds-container
            display="flex"
            direction="column"
            padding="s{xs} m{l} l{l}"
            align="flex-start"
            gap="l"
          >
            <gds-container gap="s" display="flex" direction="column">
              <gds-text tag="h2" size="title-large">James Doe</gds-text>
              <gds-text>
                Passionate software engineer with a love for coding and
                problem-solving.
              </gds-text>
            </gds-container>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-button>
              Follow
              <gds-icon-circles-three slot="lead"></gds-icon-circles-three>
            </gds-button>
          </gds-container>
        </gds-container>
      </gds-card>
      <gds-card shadow="l" radius="m" border="3xs/base300" overflow="hidden">
        <gds-container display="flex" gap="m" direction="column" padding="s">
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/dff488cc-700e-47f9-b7f7-3788eb742c11"
              ratio="1/1"
              radius="xs"
            ></gds-img>
            <gds-container
              position="absolute"
              filter="20px"
              inset="10px 10px auto auto"
              padding="s{xs} m{xs} l{xs}"
              background="rgba(0, 0, 0, 0.1)"
              radius="xs"
              color="white-text"
              display="flex"
              align="center"
              jusitfy="center"
            >
              <gds-icon-arrow-down></gds-icon-arrow-down>
            </gds-container>
          </gds-container>
          <gds-container
            display="flex"
            direction="column"
            padding="s{xs} m{s} l{s}"
            align="flex-start"
            gap="l"
          >
            <gds-container gap="s" display="flex" direction="column">
              <gds-text tag="h2" size="title-large">Lorem Ipsum</gds-text>
              <gds-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </gds-text>
            </gds-container>
            <gds-button>
              Button
              <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
            </gds-button>
          </gds-container>
        </gds-container>
      </gds-card>
      <gds-card radius="m" overflow="hidden">
        <gds-container position="relative" display="flex" height="100%">
          <gds-video
            src="https://github.com/seb-oss/green/assets/2398447/d77a95d0-e4d7-4c49-bd95-50d0f72f1a7a"
            fit="cover"
            ratio="1/1"
            events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-container
            position="absolute"
            display="flex"
            padding="4xl 2xl 2xl 2xl"
            gap="l"
            direction="column"
            inset="50% 0px 0px 0px"
            filter="0"
            background="base900/0.6"
            color="white-text"
            radius="0 0 m m"
            mask="top"
            justify="flex-end"
          >
            <gds-container>
              <gds-text size="title-large">Jane Doe</gds-text>
              <gds-text size="body-medium">UX Designer</gds-text>
            </gds-container>
            <gds-container display="flex" gap="s">
              <gds-button rank="secondary">Message</gds-button>
              <gds-button rank="secondary">Follow</gds-button>
            </gds-container>
          </gds-container>
        </gds-container>
      </gds-card>
    </gds-grid>
  `},t={...e,name:"Border Style",render:s=>n` <gds-grid columns="5" gap="l">
      <gds-card shadow="s" radius="0 0 m m" border="4xs 0 0 0">
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Top
        </gds-container>
      </gds-card>
      <gds-card shadow="s" radius="m 0 0 m" border="0 4xs 0 0">
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Right
        </gds-container>
      </gds-card>
      <gds-card shadow="s" radius="m m 0 0" border="0 0 4xs 0">
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Bottom
        </gds-container>
      </gds-card>
      <gds-card shadow="s" radius="0 m m 0" border="0 0 0 4xs">
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Left
        </gds-container>
      </gds-card>
      <gds-card shadow="s" radius="m" border="4xs">
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          All
        </gds-container>
      </gds-card>
    </gds-grid>`},a={...e,name:"Border Radius",render:s=>n`<gds-grid columns="8" gap="l">
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
      >
        0
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="2xs"
      >
        2XS
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="0 xs 0 xs"
      >
        XS
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="0 s 0 s"
      >
        S
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="0 m 0 m"
      >
        M
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="0 l 0 l"
      >
        L
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="xl"
      >
        XL
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="max"
      >
        MAX
      </gds-container>
    </gds-grid>`},i={...e,name:"Shadow",render:s=>n`<gds-grid columns="5" gap="l">
      <gds-card shadow="s{xs} m{xs} l{xs}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{l}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card shadow="s{s} m{s} l{s}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{l}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card shadow="s{m} m{m} l{m}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{l}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card shadow="s{l} m{l} l{l}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{l}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card shadow="s{xl} m{xl} l{xl}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{l}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
    </gds-grid>`},r={...e,name:"Background",render:s=>n`<gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base100">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{l}"
          >
            <gds-text tag="h3" size="headline-medium">Base 100</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base200">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{l}"
          >
            <gds-text tag="h3" size="headline-medium">Base 200</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base300">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{l}"
          >
            <gds-text tag="h3" size="headline-medium">Base 300</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base400">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{l}"
          >
            <gds-text tag="h3" size="headline-medium">Base 400</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>`},o={...e,name:"Using with Grid",render:s=>n` <gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            gap="m"
            direction="column"
            padding="s{xs} m{l} l{l}"
            align="flex-start"
          >
            <gds-text
              tag="h3"
              size="l{headline-small} m{headline-small} s{headline-small}"
            >
              Sidebar
            </gds-text>
            <gds-text wrap="balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container column="2 / -1" row="1 / -1" display="flex">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            padding="s{xs} m{l} l{l}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            <gds-text tag="h3" size="headline-small">
              Span Columns: [2 / -1]</gds-text
            >
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text tag="h2" size="body-medium"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container column="1 / -1">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            padding="s{xs} m{l} l{l}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            <gds-text tag="h3" size="headline-small"
              >Span all columns [1 / -1]</gds-text
            >
            <gds-text wrap="balance" lines="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>`};var l,g,c,m,u;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="xs{1} m{2} l{3}" gap="l">
      <gds-card shadow="s{xs} m{xs} l{s}" radius="xs" overflow="hidden">
        <gds-container
          display="flex"
          gap="0"
          direction="column"
          align="stretch"
        >
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/cd458a77-13f1-495c-960c-ce23a18e5d9f"
              ratio="1/1"
            ></gds-img>
            <gds-container
              position="absolute"
              filter="20px"
              inset="10px 10px auto auto"
              padding="s{xs} m{xs} l{xs}"
              background="base900/0.2"
              radius="xs"
              color="white-text"
              display="flex"
              align="center"
              jusitfy="center"
            >
              <gds-icon-arrow-down></gds-icon-arrow-down>
            </gds-container>
          </gds-container>
          <gds-container
            display="flex"
            direction="column"
            padding="s{xs} m{l} l{l}"
            align="flex-start"
            gap="l"
          >
            <gds-container gap="s" display="flex" direction="column">
              <gds-text tag="h2" size="title-large">James Doe</gds-text>
              <gds-text>
                Passionate software engineer with a love for coding and
                problem-solving.
              </gds-text>
            </gds-container>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-button>
              Follow
              <gds-icon-circles-three slot="lead"></gds-icon-circles-three>
            </gds-button>
          </gds-container>
        </gds-container>
      </gds-card>
      <gds-card shadow="l" radius="m" border="3xs/base300" overflow="hidden">
        <gds-container display="flex" gap="m" direction="column" padding="s">
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/dff488cc-700e-47f9-b7f7-3788eb742c11"
              ratio="1/1"
              radius="xs"
            ></gds-img>
            <gds-container
              position="absolute"
              filter="20px"
              inset="10px 10px auto auto"
              padding="s{xs} m{xs} l{xs}"
              background="rgba(0, 0, 0, 0.1)"
              radius="xs"
              color="white-text"
              display="flex"
              align="center"
              jusitfy="center"
            >
              <gds-icon-arrow-down></gds-icon-arrow-down>
            </gds-container>
          </gds-container>
          <gds-container
            display="flex"
            direction="column"
            padding="s{xs} m{s} l{s}"
            align="flex-start"
            gap="l"
          >
            <gds-container gap="s" display="flex" direction="column">
              <gds-text tag="h2" size="title-large">Lorem Ipsum</gds-text>
              <gds-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </gds-text>
            </gds-container>
            <gds-button>
              Button
              <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
            </gds-button>
          </gds-container>
        </gds-container>
      </gds-card>
      <gds-card radius="m" overflow="hidden">
        <gds-container position="relative" display="flex" height="100%">
          <gds-video
            src="https://github.com/seb-oss/green/assets/2398447/d77a95d0-e4d7-4c49-bd95-50d0f72f1a7a"
            fit="cover"
            ratio="1/1"
            events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-container
            position="absolute"
            display="flex"
            padding="4xl 2xl 2xl 2xl"
            gap="l"
            direction="column"
            inset="50% 0px 0px 0px"
            filter="0"
            background="base900/0.6"
            color="white-text"
            radius="0 0 m m"
            mask="top"
            justify="flex-end"
          >
            <gds-container>
              <gds-text size="title-large">Jane Doe</gds-text>
              <gds-text size="body-medium">UX Designer</gds-text>
            </gds-container>
            <gds-container display="flex" gap="s">
              <gds-button rank="secondary">Message</gds-button>
              <gds-button rank="secondary">Follow</gds-button>
            </gds-container>
          </gds-container>
        </gds-container>
      </gds-card>
    </gds-grid>
  \`
}`,...(c=(g=d.parameters)==null?void 0:g.docs)==null?void 0:c.source},description:{story:"Card",...(u=(m=d.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var p,x,f,b,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Style',
  render: args => html\` <gds-grid columns="5" gap="l">
      <gds-card shadow="s" radius="0 0 m m" border="4xs 0 0 0">
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Top
        </gds-container>
      </gds-card>
      <gds-card shadow="s" radius="m 0 0 m" border="0 4xs 0 0">
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Right
        </gds-container>
      </gds-card>
      <gds-card shadow="s" radius="m m 0 0" border="0 0 4xs 0">
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Bottom
        </gds-container>
      </gds-card>
      <gds-card shadow="s" radius="0 m m 0" border="0 0 0 4xs">
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Left
        </gds-container>
      </gds-card>
      <gds-card shadow="s" radius="m" border="4xs">
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          All
        </gds-container>
      </gds-card>
    </gds-grid>\`
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:`@property border
Controls the border property of the card.
Supports all tokens from the design system.
Can be specified for each side using the size tokens like this:

\`\`\`html
<gds-container border="4xs 0 0 0"></gds-container>
\`\`\`



\`\`\`html
<!--Border specified for different breakpoints and side: -->
<gds-container border="s{2xs 0 2xs 0} m{3xs 0 0 0} l{4xs}"></gds-container>
\`\`\`
* The above example will apply the border style of 2xs(top) 0(right) 2xs(bottom) 0(right) for small devices, 3xs for medium devices, and 4xs for large devices with the respective sides.

\`\`\`html
<!-- Border specified for all sides and all breakpoints: -->
<gds-container border="4xs"></gds-container>
\`\`\`


To speficy the color of the border you can use the color tokens like this:

\`\`\`html
<gds-container border="4xs/base300"></gds-container>
\`\`\``,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};var y,w,k,v,j;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Radius',
  render: args => html\`<gds-grid columns="8" gap="l">
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
      >
        0
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="2xs"
      >
        2XS
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="0 xs 0 xs"
      >
        XS
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="0 s 0 s"
      >
        S
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="0 m 0 m"
      >
        M
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="0 l 0 l"
      >
        L
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="xl"
      >
        XL
      </gds-container>
      <gds-container
        background="base900"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="max"
      >
        MAX
      </gds-container>
    </gds-grid>\`
}`,...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:'@property radius\n\nControls the border-radius property of the card.\nSupports all the size tokens from the design system.\n\nYou can apply radius in each corner like this:\n`<gds-card radius="0 0 m m" ></gds-card>\n\nAlso for different breakpoints like this:\n`<gds-card radius="s{xs} m{xs} l{s}"></gds-card>`\n\nEach corner can have a different radius value and also different values for different breakpoints.\nThe radius styles are predfied on the tokens file and will be applied automativally based on the token value.\n\n\n```html\n<gds-card radius="m">All breakpoints</gds-card>\n<gds-card radius="s{0 0 xs} m{0 xs 0 xs} l{s}" >\n   Specific breakpoints and sides\n</gds-card>\n```\n\nThese are the available values you can use to define Border Radius\n\n`0`, `4XS`, `3XS`, `2XS`, `XS`, `S`, `M`, `L`, `XL`, `2XL`, `3XL`, `4XL`, `5XL`, `6XL`, `7XL`, `8XL`, `MAX`\n\n#### Examples',...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.description}}};var L,B,S,q,z;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Shadow',
  render: args => html\`<gds-grid columns="5" gap="l">
      <gds-card shadow="s{xs} m{xs} l{xs}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{l}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card shadow="s{s} m{s} l{s}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{l}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card shadow="s{m} m{m} l{m}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{l}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card shadow="s{l} m{l} l{l}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{l}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card shadow="s{xl} m{xl} l{xl}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{l}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
    </gds-grid>\`
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source},description:{story:`@property shadow

Controls the box-shadow property of the card.

Shadow styles are as specified on the design system that range from xl-2xl, can be used like this:

\`\`\`html
<gds-card shadow="s{xs} m{xs} l{s}"></gds-card>
\`\`\`

The above example will apply the shadow style of xs for small devices, xs for medium devices, and s for large devices.
The shadow styles are predfied on the tokens file and will be applied automativally based on the token value.`,...(z=(q=i.parameters)==null?void 0:q.docs)==null?void 0:z.description}}};var X,C,D,T,M;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Background',
  render: args => html\`<gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base100">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{l}"
          >
            <gds-text tag="h3" size="headline-medium">Base 100</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base200">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{l}"
          >
            <gds-text tag="h3" size="headline-medium">Base 200</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base300">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{l}"
          >
            <gds-text tag="h3" size="headline-medium">Base 300</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base400">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{l}"
          >
            <gds-text tag="h3" size="headline-medium">Base 400</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>\`
}`,...(D=(C=r.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:`@property background

Controls the background property of the card.
Supports all the color tokens from the design system.`,...(M=(T=r.parameters)==null?void 0:T.docs)==null?void 0:M.description}}};var P,A,R,I,U;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using with Grid',
  render: args => html\` <gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            gap="m"
            direction="column"
            padding="s{xs} m{l} l{l}"
            align="flex-start"
          >
            <gds-text
              tag="h3"
              size="l{headline-small} m{headline-small} s{headline-small}"
            >
              Sidebar
            </gds-text>
            <gds-text wrap="balance">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container column="2 / -1" row="1 / -1" display="flex">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            padding="s{xs} m{l} l{l}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            <gds-text tag="h3" size="headline-small">
              Span Columns: [2 / -1]</gds-text
            >
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text tag="h2" size="body-medium"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
      <gds-container column="1 / -1">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            padding="s{xs} m{l} l{l}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            <gds-text tag="h3" size="headline-small"
              >Span all columns [1 / -1]</gds-text
            >
            <gds-text wrap="balance" lines="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-button>Button</gds-button>
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>\`
}`,...(R=(A=o.parameters)==null?void 0:A.docs)==null?void 0:R.source},description:{story:'Using `gds-card` with `gds-grid`\nThe `gds-card` can be used with the `gds-grid` to create a card layout with multiple cards.\nThe `gds-card` and `gds-container` accept properties like `column` and `row` where you can specify the number of columns specified on the grid to span or rows to span in vertical axis like on this example:\n\n```html\n<gds-container column="2 / -1" row="1 / -1"></gds-container>\n```',...(U=(I=o.parameters)==null?void 0:I.docs)==null?void 0:U.description}}};const tn=["Card","CardBorder","CardRadius","Cardshadow","CardBackground","CardGrid"];export{d as Card,r as CardBackground,t as CardBorder,o as CardGrid,a as CardRadius,i as Cardshadow,tn as __namedExportsOrder,dn as default};
