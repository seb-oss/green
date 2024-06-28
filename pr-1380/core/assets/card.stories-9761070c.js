import"./card-f53c179e.js";import"./img-9ed816c2.js";import"./video-abdc06fd.js";import"./container-cdd6d93b.js";import"./text-b9253952.js";import"./divider-ddf7fcfe.js";import"./arrow-right-a9237c1d.js";import"./circles-three-608087e9.js";import{x as n}from"./lit-element-71e04f06.js";import"./gds-element-54cd6e2a.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-ae076d02.js";import"./style-expression-property-89161d08.js";import"./watch-c4961afe.js";import"./query-b9d3c2af.js";import"./icon-eb3cac34.js";import"./directive-12249aa5.js";const Z={title:"Docs/Layout/Card",component:"gds-card",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-card` is a custom element that provides a flexible card system.\n\nIt can be used to create a card with different styles and configurations.\n\nThe card can be customized with different properties like `shadow`, `border`, `radius`, and `background`.\nIt is designed to be used in different scenarios like displaying content, images, or other elements.\nIt can be used in combination with other elements like `gds-grid`, `gds-container`, `gds-img`, `gds-text` etc.\n\n@status beta"}}}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},a={...d,render:s=>n`
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
      <gds-card
        shadow="l"
        radius="m"
        border="var(--gds-sys-color-base200)"
        overflow="hidden"
      >
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
            background="rgba(0, 0, 0, 0.6)"
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
  `},e={...d,render:s=>n`
    <!-- prettier-ignore -->
    <gds-grid columns="xs{1} m{2} l{3}" gap="l">
      <gds-card radius="xs" variant="midnight">
        <gds-container padding="s l" radius="xl" background="var(--_button)">Midnight</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="frost">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Frost</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="plum">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Plum</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="silver">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Silver</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="mist">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Mist</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="pearl">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Pearl</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="outlined">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Outlined</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="default">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Default</gds-container>
      </gds-card>
    </gds-grid>
  `},t={...d,name:"Border Style",render:s=>n` <gds-grid columns="5" gap="l">
      <gds-card
        shadow="s"
        radius="0 0 m m"
        background="base100"
        border="currentColor transparent transparent transparent"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Top
        </gds-container>
      </gds-card>
      <gds-card
        shadow="s"
        radius="m 0 0 m"
        background="base100"
        border="transparent currentColor transparent transparent"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Right
        </gds-container>
      </gds-card>
      <gds-card
        shadow="s"
        radius="m m 0 0"
        background="base100"
        border="transparent transparent currentColor transparent"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Bottom
        </gds-container>
      </gds-card>
      <gds-card
        shadow="s"
        radius="0 m m 0"
        background="base100"
        border="transparent transparent transparent currentColor"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Left
        </gds-container>
      </gds-card>
      <gds-card
        shadow="s"
        radius="m"
        background="base100"
        border="currentColor"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          All
        </gds-container>
      </gds-card>
    </gds-grid>`},r={...d,name:"Border Radius",render:s=>n`<gds-grid columns="8" gap="l">
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
      >
        0
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="3xs"
      >
        3XS
      </gds-container>
      <gds-container
        background="black"
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
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="xs"
      >
        XS
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="s"
      >
        S
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="m"
      >
        M
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="l"
      >
        L
      </gds-container>
      <gds-container
        background="black"
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
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="2xl"
      >
        2XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="3xl"
      >
        3XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="4xl"
      >
        4XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="5xl"
      >
        5XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="6xl"
      >
        6XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="7xl"
      >
        7XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="8xl"
      >
        8XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="max"
      >
        MAX
      </gds-container>
    </gds-grid>`},i={...d,name:"Shadow",render:s=>n`<gds-grid columns="5" gap="l">
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
    </gds-grid>`},o={...d,name:"Background",render:s=>n`<gds-grid columns="4" gap="l">
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
    </gds-grid>`},g={...d,name:"Using with Grid",render:s=>n` <gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            gap="m"
            direction="column"
            padding="s{xs} m{l} l{l}"
          >
            <gds-text
              tag="h3"
              size="l{headline-medium} m{headline-medium} s{headline-medium}"
              >Span Columns</gds-text
            >
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
            <gds-text tag="h3" size="headline-medium">Span Columns</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text tag="h2" size="body-medium"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
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
            Some other column
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>`};var c,l,u,m,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      <gds-card
        shadow="l"
        radius="m"
        border="var(--gds-sys-color-base200)"
        overflow="hidden"
      >
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
            background="rgba(0, 0, 0, 0.6)"
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"Card",...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.description}}};var p,b,f,y,h;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <!-- prettier-ignore -->
    <gds-grid columns="xs{1} m{2} l{3}" gap="l">
      <gds-card radius="xs" variant="midnight">
        <gds-container padding="s l" radius="xl" background="var(--_button)">Midnight</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="frost">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Frost</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="plum">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Plum</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="silver">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Silver</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="mist">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Mist</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="pearl">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Pearl</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="outlined">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Outlined</gds-container>
      </gds-card>
      <gds-card radius="xs" variant="default">
        <gds-container padding="s l" radius="xl"  background="var(--_button)">Default</gds-container>
      </gds-card>
    </gds-grid>
  \`
}`,...(f=(b=e.parameters)==null?void 0:b.docs)==null?void 0:f.source},description:{story:"Variants",...(h=(y=e.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};var w,k,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Style',
  render: args => html\` <gds-grid columns="5" gap="l">
      <gds-card
        shadow="s"
        radius="0 0 m m"
        background="base100"
        border="currentColor transparent transparent transparent"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Top
        </gds-container>
      </gds-card>
      <gds-card
        shadow="s"
        radius="m 0 0 m"
        background="base100"
        border="transparent currentColor transparent transparent"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Right
        </gds-container>
      </gds-card>
      <gds-card
        shadow="s"
        radius="m m 0 0"
        background="base100"
        border="transparent transparent currentColor transparent"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Bottom
        </gds-container>
      </gds-card>
      <gds-card
        shadow="s"
        radius="0 m m 0"
        background="base100"
        border="transparent transparent transparent currentColor"
      >
        <gds-container
          padding="2xl"
          display="flex"
          align="center"
          justify="center"
        >
          Left
        </gds-container>
      </gds-card>
      <gds-card
        shadow="s"
        radius="m"
        background="base100"
        border="currentColor"
      >
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
}`,...(v=(k=t.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var j,L,B;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Radius',
  render: args => html\`<gds-grid columns="8" gap="l">
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
      >
        0
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="3xs"
      >
        3XS
      </gds-container>
      <gds-container
        background="black"
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
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="xs"
      >
        XS
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="s"
      >
        S
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="m"
      >
        M
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="l"
      >
        L
      </gds-container>
      <gds-container
        background="black"
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
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="2xl"
      >
        2XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="3xl"
      >
        3XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="4xl"
      >
        4XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="5xl"
      >
        5XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="6xl"
      >
        6XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="7xl"
      >
        7XL
      </gds-container>
      <gds-container
        background="black"
        color="white-text"
        padding="xl"
        display="flex"
        align="center"
        justify="center"
        radius="8xl"
      >
        8XL
      </gds-container>
      <gds-container
        background="black"
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
}`,...(B=(L=r.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var S,X,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(X=i.parameters)==null?void 0:X.docs)==null?void 0:C.source}}};var z,_,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(D=(_=o.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var q,P,M;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
          >
            <gds-text
              tag="h3"
              size="l{headline-medium} m{headline-medium} s{headline-medium}"
              >Span Columns</gds-text
            >
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
            <gds-text tag="h3" size="headline-medium">Span Columns</gds-text>
            <gds-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
            <gds-text tag="h2" size="body-medium"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </gds-text>
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
            Some other column
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>\`
}`,...(M=(P=g.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const $=["Card","Variants","CardBorder","CardRadius","Cardshadow","CardBackground","CardGrid"];export{a as Card,o as CardBackground,t as CardBorder,g as CardGrid,r as CardRadius,i as Cardshadow,e as Variants,$ as __namedExportsOrder,Z as default};
