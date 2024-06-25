import"./chunk.CIS52I5O-282d8745.js";import{i as X,x as r}from"./lit-element-2a5e401f.js";import{t as P,_ as e,s as t,g as x,G as I,h as $}from"./chunk.ZQ4D5K7J-2f4d3401.js";import{n as a}from"./Reflect-a49e984a.js";import{a as R}from"./query-b9d3c2af.js";import"./chunk.OORY7GAG-42b989a5.js";import"./chunk.ZIZH6LNZ-4fd13332.js";import"./chunk.LT6F4VJ5-14a13b05.js";import{G as Z}from"./chunk.FBVBLWMJ-340efd57.js";import"./_commonjsHelpers-725317a4.js";import"./unsafe-html-5de64254.js";import"./directive-12249aa5.js";var U=X`
  :host {
    display: contents;
  }

  figure {
    aspect-ratio: var(--_ratio, inital);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    inset: var(--_inset, initial);
    width: 100%;
    height: auto;
    opacity: var(--_opacity, 1);
    overflow: hidden;
    border-radius: inherit;
  }

  img {
    display: flex;
    object-fit: var(--_fit, cover);
    object-position: var(--_position, relative);
    width: 100%;
    height: 100%;
  }
`,V=U,d=class extends I{render(){return $`<figure><img src="${this.src}" alt="${this.alt}" /></figure>`}};d.styles=[P,V];e([t({property:"--_ratio",valueTemplate:n=>`${n}`})],d.prototype,"ratio",2);e([t({property:"--_position",valueTemplate:n=>n})],d.prototype,"position",2);e([t({property:"--_inset",valueTemplate:n=>n})],d.prototype,"inset",2);e([t({property:"width",valueTemplate:n=>n})],d.prototype,"width",2);e([t({property:"height",valueTemplate:n=>n})],d.prototype,"height",2);e([t({property:"--_opacity",valueTemplate:n=>n})],d.prototype,"opacity",2);e([t({property:"--_fit",valueTemplate:n=>n})],d.prototype,"fit",2);e([a()],d.prototype,"src",2);e([a()],d.prototype,"alt",2);e([t({property:"border-radius",valueTemplate:n=>`var(--gds-sys-radii-${n})`})],d.prototype,"radius",2);d=e([x("gds-img")],d);var F=X`
  :host {
    display: contents;
  }

  figure {
    aspect-ratio: var(--_ratio, inital);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    inset: var(--_inset, initial);
    width: 100%;
    height: auto;
    opacity: var(--_opacity, 1);
    overflow: hidden;
    border-radius: inherit;
  }

  video {
    display: flex;
    object-fit: var(--_fit, cover);
    object-position: var(--_position, relative);
    width: 100%;
    height: 100%;
    pointer-events: inherit;
  }
`,J=F,s=class extends I{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return $`<figure><video></video></figure>`}firstUpdated(){this.applyVideoSettings()}};s.styles=[P,J];e([t({property:"--_ratio",valueTemplate:n=>`${n}`})],s.prototype,"ratio",2);e([t({property:"--_position",valueTemplate:n=>n})],s.prototype,"position",2);e([t({property:"--_inset",valueTemplate:n=>n})],s.prototype,"inset",2);e([t({property:"width",valueTemplate:n=>n})],s.prototype,"width",2);e([t({property:"height",valueTemplate:n=>n})],s.prototype,"height",2);e([t({property:"--_opacity",valueTemplate:n=>n})],s.prototype,"opacity",2);e([t({property:"--_fit",valueTemplate:n=>n})],s.prototype,"fit",2);e([t({property:"pointer-events",valueTemplate:n=>n})],s.prototype,"events",2);e([t({property:"border-radius",valueTemplate:n=>`var(--gds-sys-radii-${n})`})],s.prototype,"radius",2);e([a()],s.prototype,"src",2);e([a()],s.prototype,"poster",2);e([a({type:Boolean})],s.prototype,"muted",2);e([a({type:Boolean})],s.prototype,"playsinline",2);e([a({type:Boolean})],s.prototype,"autoplay",2);e([a({type:Boolean})],s.prototype,"loop",2);e([R("video")],s.prototype,"videoElement",2);s=e([x("gds-video")],s);var g=class extends Z{};g._regularSVG='<path d="M12.75 7.75C12.75 10.5114 10.5114 12.75 7.75 12.75C4.98858 12.75 2.75 10.5114 2.75 7.75C2.75 4.98858 4.98858 2.75 7.75 2.75C10.5114 2.75 12.75 4.98858 12.75 7.75Z" stroke="currentColor" stroke-width="1.5"/><path d="M17.5 17.75C17.5 19.683 15.933 21.25 14 21.25C12.067 21.25 10.5 19.683 10.5 17.75C10.5 15.817 12.067 14.25 14 14.25C15.933 14.25 17.5 15.817 17.5 17.75Z" stroke="currentColor" stroke-width="1.5"/><path d="M21.25 9.25C21.25 10.7688 20.0188 12 18.5 12C16.9812 12 15.75 10.7688 15.75 9.25C15.75 7.73122 16.9812 6.5 18.5 6.5C20.0188 6.5 21.25 7.73122 21.25 9.25Z" stroke="currentColor" stroke-width="1.5"/>';g._solidSVG='<path d="M7.75 2C4.57436 2 2 4.57436 2 7.75C2 10.9256 4.57436 13.5 7.75 13.5C10.9256 13.5 13.5 10.9256 13.5 7.75C13.5 4.57436 10.9256 2 7.75 2Z" fill="currentColor"/><path d="M14 13.5C11.6528 13.5 9.75 15.4028 9.75 17.75C9.75 20.0972 11.6528 22 14 22C16.3472 22 18.25 20.0972 18.25 17.75C18.25 15.4028 16.3472 13.5 14 13.5Z" fill="currentColor"/><path d="M15 9.25C15 7.317 16.567 5.75 18.5 5.75C20.433 5.75 22 7.317 22 9.25C22 11.183 20.433 12.75 18.5 12.75C16.567 12.75 15 11.183 15 9.25Z" fill="currentColor"/>';g._name="circles three";g=e([x("gds-icon-circles-three")],g);const dn={title:"Components/Layouts/Card",component:"gds-card",tags:["autodocs"],parameters:{docs:{description:{component:"The `gds-card` is a custom element that provides a flexible card system.\n\nIt can be used to create a card with different styles and configurations.\n\nThe card can be customized with different properties like `shadow`, `border`, `radius`, and `background`.\nIt is designed to be used in different scenarios like displaying content, images, or other elements.\nIt can be used in combination with other elements like `gds-grid`, `gds-container`, `gds-img`, `gds-text` etc.\n\n@status beta"}}}},i={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{shadow:"s{m}",radius:"m",background:"",innerHTML:`<gds-card shadow="s{xs} m{xs} l{s}" radius="m">
      <gds-container
        padding="s{xs} m{l} l{2xl}"
        display="flex"
        align="center"
        justify="center"
        gap="xl"
      >
        <span>Default</span> <gds-icon-arrow-down></gds-icon-arrow-down>

        <gds-button>
          Button
          <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
        </gds-button>
      </gds-container>
    </gds-card>`}},o={...i,render:n=>r`
    <gds-grid columns="xs{1} m{2} l{3}" gap="2xl">
      <gds-card shadow="s{xs} m{xs} l{s}" radius="xs" overflow="hidden">
        <gds-container
          display="flex"
          gap="none"
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
            padding="s{xs} m{l} l{2xl}"
            align="flex-start"
            gap="2xl"
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
        <gds-container display="flex" gap="l" direction="column" padding="l">
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
            padding="s{xs} m{l} l{m}"
            align="flex-start"
            gap="2xl"
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
            gap="xl"
            direction="column"
            inset="50% 0px 0px 0px"
            filter="none"
            background="rgba(0, 0, 0, 0.6)"
            color="white-text"
            radius="none none m m"
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
  `},l={...i,name:"Border Style",render:n=>r` <gds-grid columns="5" gap="2xl">
      <gds-card
        shadow="s"
        radius="none none m m"
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
        radius="m none none m"
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
        radius="m m none none"
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
        radius="none m m none"
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
    </gds-grid>`},c={...i,name:"Border Radius",render:n=>r`<gds-grid columns="6" gap="xl">
      <gds-card radius="xs" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card radius="s" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card radius="m" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card radius="l" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card radius="xl" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
      <gds-card radius="2xl" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          2XL
        </gds-container>
      </gds-card>
    </gds-grid>`},p={...i,name:"Shadow",render:n=>r`<gds-grid columns="5" gap="xl">
      <gds-card shadow="s{xs} m{xs} l{xs}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card shadow="s{s} m{s} l{s}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card shadow="s{m} m{m} l{m}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card shadow="s{l} m{l} l{l}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card shadow="s{xl} m{xl} l{xl}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
    </gds-grid>`},m={...i,name:"Background",render:n=>r`<gds-grid columns="4" gap="xl">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base100">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
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
            padding="s{xs} m{l} l{2xl}"
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
            padding="s{xs} m{l} l{2xl}"
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
            padding="s{xs} m{l} l{2xl}"
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
    </gds-grid>`},u={...i,name:"Using with Grid",render:n=>r` <gds-grid columns="4" gap="xl">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            gap="m"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
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
            padding="s{xs} m{l} l{2xl}"
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
            padding="s{xs} m{l} l{2xl}"
            direction="column"
            align="flex-start"
            justify="center"
            gap="m"
          >
            Some other column
          </gds-container>
        </gds-card>
      </gds-container>
    </gds-grid>`};var f,h,y,b,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="xs{1} m{2} l{3}" gap="2xl">
      <gds-card shadow="s{xs} m{xs} l{s}" radius="xs" overflow="hidden">
        <gds-container
          display="flex"
          gap="none"
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
            padding="s{xs} m{l} l{2xl}"
            align="flex-start"
            gap="2xl"
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
        <gds-container display="flex" gap="l" direction="column" padding="l">
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
            padding="s{xs} m{l} l{m}"
            align="flex-start"
            gap="2xl"
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
            gap="xl"
            direction="column"
            inset="50% 0px 0px 0px"
            filter="none"
            background="rgba(0, 0, 0, 0.6)"
            color="white-text"
            radius="none none m m"
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
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"Card",...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};var v,C,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Style',
  render: args => html\` <gds-grid columns="5" gap="2xl">
      <gds-card
        shadow="s"
        radius="none none m m"
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
        radius="m none none m"
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
        radius="m m none none"
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
        radius="none m m none"
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
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var j,B,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Radius',
  render: args => html\`<gds-grid columns="6" gap="xl">
      <gds-card radius="xs" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card radius="s" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card radius="m" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card radius="l" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card radius="xl" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
      <gds-card radius="2xl" background="base800">
        <gds-container
          color="white-text"
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          2XL
        </gds-container>
      </gds-card>
    </gds-grid>\`
}`,...(_=(B=c.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var L,S,z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Shadow',
  render: args => html\`<gds-grid columns="5" gap="xl">
      <gds-card shadow="s{xs} m{xs} l{xs}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XS
        </gds-container>
      </gds-card>
      <gds-card shadow="s{s} m{s} l{s}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          S
        </gds-container>
      </gds-card>
      <gds-card shadow="s{m} m{m} l{m}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          M
        </gds-container>
      </gds-card>
      <gds-card shadow="s{l} m{l} l{l}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          L
        </gds-container>
      </gds-card>
      <gds-card shadow="s{xl} m{xl} l{xl}" radius="xs">
        <gds-container
          padding="s{xs} m{l} l{2xl}"
          display="flex"
          align="center"
          justify="center"
        >
          XL
        </gds-container>
      </gds-card>
    </gds-grid>\`
}`,...(z=(S=p.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var T,q,D;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Background',
  render: args => html\`<gds-grid columns="4" gap="xl">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs" background="base100">
          <gds-container
            display="flex"
            gap="l"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
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
            padding="s{xs} m{l} l{2xl}"
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
            padding="s{xs} m{l} l{2xl}"
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
            padding="s{xs} m{l} l{2xl}"
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
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var M,E,G;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using with Grid',
  render: args => html\` <gds-grid columns="4" gap="xl">
      <gds-container>
        <gds-card shadow="l{m} m{m} s{m}" radius="xs">
          <gds-container
            display="flex"
            gap="m"
            direction="column"
            padding="s{xs} m{l} l{2xl}"
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
            padding="s{xs} m{l} l{2xl}"
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
            padding="s{xs} m{l} l{2xl}"
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
}`,...(G=(E=u.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};const an=["Card","CardBorder","CardRadius","Cardshadow","CardBackground","CardGrid"];export{o as Card,m as CardBackground,l as CardBorder,u as CardGrid,c as CardRadius,p as Cardshadow,an as __namedExportsOrder,dn as default};
