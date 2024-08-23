import"./card-13e37588.js";import"./img-a92281de.js";import"./video-00bb155a.js";import"./flex-e89cef7f.js";import"./text-a0f8cf5c.js";import"./divider-4ba7138d.js";import"./arrow-right-4f72b673.js";import{g as V}from"./gds-element-d19a6729.js";import{G as Y}from"./icon-543da64a.js";import{x as d}from"./lit-element-52f3de9a.js";import"./tokens.style-4c028ad8.js";import"./style-expression-property-7d970320.js";import"./watch-c4961afe.js";import"./query-b9d3c2af.js";import"./_commonjsHelpers-725317a4.js";import"./directive-12249aa5.js";var H=Object.defineProperty,K=Object.getOwnPropertyDescriptor,N=(e,c,u,m)=>{for(var s=m>1?void 0:m?K(c,u):c,x=e.length-1,p;x>=0;x--)(p=e[x])&&(s=(m?p(c,u,s):p(s))||s);return m&&s&&H(c,u,s),s};let g=class extends Y{};g._regularSVG='<path d="M12.75 7.75C12.75 10.5114 10.5114 12.75 7.75 12.75C4.98858 12.75 2.75 10.5114 2.75 7.75C2.75 4.98858 4.98858 2.75 7.75 2.75C10.5114 2.75 12.75 4.98858 12.75 7.75Z" stroke="currentColor" stroke-width="1.5"/><path d="M17.5 17.75C17.5 19.683 15.933 21.25 14 21.25C12.067 21.25 10.5 19.683 10.5 17.75C10.5 15.817 12.067 14.25 14 14.25C15.933 14.25 17.5 15.817 17.5 17.75Z" stroke="currentColor" stroke-width="1.5"/><path d="M21.25 9.25C21.25 10.7688 20.0188 12 18.5 12C16.9812 12 15.75 10.7688 15.75 9.25C15.75 7.73122 16.9812 6.5 18.5 6.5C20.0188 6.5 21.25 7.73122 21.25 9.25Z" stroke="currentColor" stroke-width="1.5"/>';g._solidSVG='<path d="M7.75 2C4.57436 2 2 4.57436 2 7.75C2 10.9256 4.57436 13.5 7.75 13.5C10.9256 13.5 13.5 10.9256 13.5 7.75C13.5 4.57436 10.9256 2 7.75 2Z" fill="currentColor"/><path d="M14 13.5C11.6528 13.5 9.75 15.4028 9.75 17.75C9.75 20.0972 11.6528 22 14 22C16.3472 22 18.25 20.0972 18.25 17.75C18.25 15.4028 16.3472 13.5 14 13.5Z" fill="currentColor"/><path d="M15 9.25C15 7.317 16.567 5.75 18.5 5.75C20.433 5.75 22 7.317 22 9.25C22 11.183 20.433 12.75 18.5 12.75C16.567 12.75 15 11.183 15 9.25Z" fill="currentColor"/>';g._name="circles three";g=N([V("gds-icon-circles-three")],g);const ue={title:"Docs/Layout/Card",component:"gds-card",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-card` is a custom element that provides a flexible card system.\n\nIt can be used to create a card with different styles and configurations.\n\nThe card can be customized with different properties like `shadow`, `border`, `radius`, and `background`.\nIt is designed to be used in different scenarios like displaying content, images, or other elements.\nIt can be used in combination with other elements like `gds-grid`, `gds-container`, `gds-img`, `gds-text` etc.\n\n@status beta\n\n@extends `gds-container`"}}}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},t={...n,render:e=>d`
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
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
  `},a={...n,name:"Border Style",render:e=>d` <gds-grid columns="5" gap="l">
      <gds-card shadow="s" radius="0 0 m m" border="4xs 0 0 0">
        <gds-flex padding="2xl" align="center" justify="center"> Top </gds-flex>
      </gds-card>
      <gds-card shadow="s" radius="m 0 0 m" border="0 4xs 0 0">
        <gds-flex padding="2xl" align="center" justify="center">Right</gds-flex>
      </gds-card>
      <gds-card shadow="s" radius="m m 0 0" border="0 0 4xs 0">
        <gds-flex padding="2xl" align="center" justify="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" radius="0 m m 0" border="0 0 0 4xs">
        <gds-flex padding="2xl" align="center" justify="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" radius="m" border="4xs">
        <gds-flex padding="2xl" align="center" justify="center"> All </gds-flex>
      </gds-card>
    </gds-grid>`},r={...n,name:"Border Radius",render:e=>d`<gds-grid columns="8" gap="l">
      <gds-card background="base900" color="white-text" padding="xl">
        <gds-flex display="flex" align="center" justify="center"> 0 </gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="2xs"
      >
        <gds-flex display="flex" align="center" justify="center">2XS</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="0 xs 0 xs"
      >
        <gds-flex display="flex" align="center" justify="center">XS</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="0 s 0 s"
      >
        <gds-flex display="flex" align="center" justify="center">S</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="0 m 0 m"
      >
        <gds-flex display="flex" align="center" justify="center">M</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="0 l 0 l"
      >
        <gds-flex display="flex" align="center" justify="center">L</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="xl"
      >
        <gds-flex display="flex" align="center" justify="center">XL</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="max"
      >
        <gds-flex display="flex" align="center" justify="center">MAX</gds-flex>
      </gds-card>
    </gds-grid>`},i={...n,name:"Shadow",render:e=>d`<gds-grid columns="5" gap="l">
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xs} m{xs} l{xs}"
        radius="xs"
      >
        <gds-flex display="flex" align="center" justify="center">XS</gds-flex>
      </gds-card>
      <gds-card padding="s{xs} m{l} l{l}" shadow="s{s} m{s} l{s}" radius="xs">
        <gds-flex display="flex" align="center" justify="center">S</gds-flex>
      </gds-card>
      <gds-card padding="s{xs} m{l} l{l}" shadow="s{m} m{m} l{m}" radius="xs">
        <gds-flex display="flex" align="center" justify="center">M</gds-flex>
      </gds-card>
      <gds-card padding="s{xs} m{l} l{l}" shadow="s{l} m{l} l{l}" radius="xs">
        <gds-flex display="flex" align="center" justify="center">L</gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xl} m{xl} l{xl}"
        radius="xs"
      >
        <gds-flex display="flex" align="center" justify="center">XL</gds-flex>
      </gds-card>
    </gds-grid>`},o={...n,name:"Background",render:e=>d`<gds-grid columns="4" gap="l">
      <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base100">
        <gds-flex
          gap="l"
          align="flex-start"
          direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text tag="h3" size="headline-medium">Base 100</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base200">
        <gds-flex
          gap="l"
          align="flex-start"
          direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text tag="h3" size="headline-medium">Base 200</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base300">
        <gds-flex
          gap="l"
          align="flex-start"
          direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text tag="h3" size="headline-medium">Base 300</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base400">
        <gds-flex
          gap="l"
          align="flex-start"
          direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text tag="h3" size="headline-medium">Base 400</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
    </gds-grid>`},l={...n,name:"Using with Grid",render:e=>d` <gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-flex
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
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container column="2 / -1" row="1 / -1" display="flex">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-flex
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
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container column="1 / -1">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-flex
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
          </gds-flex>
        </gds-card>
      </gds-container>
    </gds-grid>`};var f,h,b,w,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
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
  \`
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:"Card",...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};var k,v,C,L,j;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Style',
  render: args => html\` <gds-grid columns="5" gap="l">
      <gds-card shadow="s" radius="0 0 m m" border="4xs 0 0 0">
        <gds-flex padding="2xl" align="center" justify="center"> Top </gds-flex>
      </gds-card>
      <gds-card shadow="s" radius="m 0 0 m" border="0 4xs 0 0">
        <gds-flex padding="2xl" align="center" justify="center">Right</gds-flex>
      </gds-card>
      <gds-card shadow="s" radius="m m 0 0" border="0 0 4xs 0">
        <gds-flex padding="2xl" align="center" justify="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" radius="0 m m 0" border="0 0 0 4xs">
        <gds-flex padding="2xl" align="center" justify="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card shadow="s" radius="m" border="4xs">
        <gds-flex padding="2xl" align="center" justify="center"> All </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(C=(v=a.parameters)==null?void 0:v.docs)==null?void 0:C.source},description:{story:`@property border
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
\`\`\``,...(j=(L=a.parameters)==null?void 0:L.docs)==null?void 0:j.description}}};var B,S,q,z,X;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Radius',
  render: args => html\`<gds-grid columns="8" gap="l">
      <gds-card background="base900" color="white-text" padding="xl">
        <gds-flex display="flex" align="center" justify="center"> 0 </gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="2xs"
      >
        <gds-flex display="flex" align="center" justify="center">2XS</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="0 xs 0 xs"
      >
        <gds-flex display="flex" align="center" justify="center">XS</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="0 s 0 s"
      >
        <gds-flex display="flex" align="center" justify="center">S</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="0 m 0 m"
      >
        <gds-flex display="flex" align="center" justify="center">M</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="0 l 0 l"
      >
        <gds-flex display="flex" align="center" justify="center">L</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="xl"
      >
        <gds-flex display="flex" align="center" justify="center">XL</gds-flex>
      </gds-card>
      <gds-card
        background="base900"
        color="white-text"
        padding="xl"
        radius="max"
      >
        <gds-flex display="flex" align="center" justify="center">MAX</gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(q=(S=r.parameters)==null?void 0:S.docs)==null?void 0:q.source},description:{story:'@property radius\n\nControls the border-radius property of the card.\nSupports all the size tokens from the design system.\n\nYou can apply radius in each corner like this:\n`<gds-card radius="0 0 m m" ></gds-card>\n\nAlso for different breakpoints like this:\n`<gds-card radius="s{xs} m{xs} l{s}"></gds-card>`\n\nEach corner can have a different radius value and also different values for different breakpoints.\nThe radius styles are predfied on the tokens file and will be applied automativally based on the token value.\n\n\n```html\n<gds-card radius="m">All breakpoints</gds-card>\n<gds-card radius="s{0 0 xs} m{0 xs 0 xs} l{s}" >\n   Specific breakpoints and sides\n</gds-card>\n```\n\nThese are the available values you can use to define Border Radius\n\n`0`, `4XS`, `3XS`, `2XS`, `XS`, `S`, `M`, `L`, `XL`, `2XL`, `3XL`, `4XL`, `5XL`, `6XL`, `7XL`, `8XL`, `MAX`\n\n#### Examples',...(X=(z=r.parameters)==null?void 0:z.docs)==null?void 0:X.description}}};var D,M,P,T,_;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Shadow',
  render: args => html\`<gds-grid columns="5" gap="l">
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xs} m{xs} l{xs}"
        radius="xs"
      >
        <gds-flex display="flex" align="center" justify="center">XS</gds-flex>
      </gds-card>
      <gds-card padding="s{xs} m{l} l{l}" shadow="s{s} m{s} l{s}" radius="xs">
        <gds-flex display="flex" align="center" justify="center">S</gds-flex>
      </gds-card>
      <gds-card padding="s{xs} m{l} l{l}" shadow="s{m} m{m} l{m}" radius="xs">
        <gds-flex display="flex" align="center" justify="center">M</gds-flex>
      </gds-card>
      <gds-card padding="s{xs} m{l} l{l}" shadow="s{l} m{l} l{l}" radius="xs">
        <gds-flex display="flex" align="center" justify="center">L</gds-flex>
      </gds-card>
      <gds-card
        padding="s{xs} m{l} l{l}"
        shadow="s{xl} m{xl} l{xl}"
        radius="xs"
      >
        <gds-flex display="flex" align="center" justify="center">XL</gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(P=(M=i.parameters)==null?void 0:M.docs)==null?void 0:P.source},description:{story:`@property shadow

Controls the box-shadow property of the card.

Shadow styles are as specified on the design system that range from xl-2xl, can be used like this:

\`\`\`html
<gds-card shadow="s{xs} m{xs} l{s}"></gds-card>
\`\`\`

The above example will apply the shadow style of xs for small devices, xs for medium devices, and s for large devices.
The shadow styles are predfied on the tokens file and will be applied automativally based on the token value.`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.description}}};var G,A,I,R,Z;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Background',
  render: args => html\`<gds-grid columns="4" gap="l">
      <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base100">
        <gds-flex
          gap="l"
          align="flex-start"
          direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text tag="h3" size="headline-medium">Base 100</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base200">
        <gds-flex
          gap="l"
          align="flex-start"
          direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text tag="h3" size="headline-medium">Base 200</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base300">
        <gds-flex
          gap="l"
          align="flex-start"
          direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text tag="h3" size="headline-medium">Base 300</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base400">
        <gds-flex
          gap="l"
          align="flex-start"
          direction="column"
          padding="s{xs} m{l} l{l}"
        >
          <gds-text tag="h3" size="headline-medium">Base 400</gds-text>
          <gds-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </gds-text>
          <gds-button>Button</gds-button>
        </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(I=(A=o.parameters)==null?void 0:A.docs)==null?void 0:I.source},description:{story:`@property background

Controls the background property of the card.
Supports all the color tokens from the design system.`,...(Z=(R=o.parameters)==null?void 0:R.docs)==null?void 0:Z.description}}};var O,U,E,F,J;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using with Grid',
  render: args => html\` <gds-grid columns="4" gap="l">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-flex
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
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container column="2 / -1" row="1 / -1" display="flex">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-flex
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
          </gds-flex>
        </gds-card>
      </gds-container>
      <gds-container column="1 / -1">
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-flex
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
          </gds-flex>
        </gds-card>
      </gds-container>
    </gds-grid>\`
}`,...(E=(U=l.parameters)==null?void 0:U.docs)==null?void 0:E.source},description:{story:'Using `gds-card` with `gds-grid`\nThe `gds-card` can be used with the `gds-grid` to create a card layout with multiple cards.\nThe `gds-card` and `gds-container` accept properties like `column` and `row` where you can specify the number of columns specified on the grid to span or rows to span in vertical axis like on this example:\n\n```html\n<gds-container column="2 / -1" row="1 / -1"></gds-container>\n```',...(J=(F=l.parameters)==null?void 0:F.docs)==null?void 0:J.description}}};const xe=["Card","CardBorder","CardRadius","Cardshadow","CardBackground","CardGrid"];export{t as Card,o as CardBackground,a as CardBorder,l as CardGrid,r as CardRadius,i as Cardshadow,xe as __namedExportsOrder,ue as default};
