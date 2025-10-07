import{x as u}from"./lit-element-Bx14lxc-.js";import{a as p}from"./argTableProps-Cx9GrhSB.js";import"./card-interactive-D-3NZ2nY.js";import"./button-C42Svcck.js";import"./text-DqywFqXI.js";import"./link-BQaEz6UV.js";import"./divider-7lswerea.js";import"./custom-elements-BL3ZYxIE.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./gds-element-DTROifYq.js";import"./tokens.style-CyN6927s.js";import"./card.component-C4tAIpeI.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./div.component-B_lon1CO.js";import"./flex.component-My6tsEL-.js";import"./chain-link-DD3U4VL8.js";import"./icon-CNS-fQND.js";import"./unsafe-html-CYO4avEf.js";import"./img.component-BvK3KN7H.js";import"./button.component-DpNXiJAt.js";import"./query-p8xgzTDt.js";import"./static-B8S6DEnV.js";import"./transitional-styles-CxCTYKOe.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./default-typography.styles-DG7u6j1x.js";const Q={title:"Components/Card Interactive",component:"gds-card-interactive",tags:["autodocs"],argTypes:{...p("gds-card-interactive")}},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{disable:!0}}},e={...g,args:{innerHTML:"Card content"}},t={...g,render:x=>u`
    <gds-flex gap="4xs">
      <!-- Start linked -->
      <gds-flex
        gap="6xl"
        flex-direction="column"
        width="560px"
        background="neutral-02"
        padding="4xl"
        level="1"
      >
        <!-- Linked -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Linked: Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="linked"
            href="#"
            src="https://api.seb.io/assets/launch-hero.jpg"
            title="This is a heading"
            excerpt="This is the body text. Please make it your own. You can use a button when that suites the context, or seperate link. "
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with no image -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Linked: No Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="linked"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with custom header -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Linked: Header Slot</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="linked"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <span slot="header">Hello</span>
          </gds-card-interactive>
        </gds-flex>
      </gds-flex>
      <!-- / linked -->
      <!-- Start Dynamic -->
      <!-- Start Dynamic -->
      <!-- Start Dynamic -->
      <!-- Start PLAIN -->
      <!-- Start PLAIN -->
      <!-- Start PLAIN -->
      <gds-flex
        gap="6xl"
        flex-direction="column"
        width="560px"
        background="neutral-01"
        padding="4xl"
        level="1"
      >
        <!-- Linked -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Plain: Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            layout="plain"
            href="#"
            src="https://api.seb.io/assets/launch-hero.jpg"
            title="This is a heading"
            excerpt="This is the body text. Please make it your own. You can use a button when that suites the context, or seperate link. "
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with no image -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Plain: No Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            layout="plain"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with custom header -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Plain: Header Slot</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            layout="plain"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
          >
            <span slot="header">Hello</span>
          </gds-card-interactive>
        </gds-flex>
      </gds-flex>
      <!-- / linked -->
      <!-- Start Dynamic -->
      <!-- Start Dynamic -->
      <!-- Start Dynamic -->
      <gds-flex
        gap="6xl"
        flex-direction="column"
        width="560px"
        background="neutral-02"
        padding="4xl"
        level="1"
      >
        <!-- Linked -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            src="https://api.seb.io/assets/launch-hero.jpg"
            title="This is a heading"
            excerpt="This is the body text. Please make it your own. You can use a button when that suites the context, or seperate link. "
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with no image -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: No Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with custom header -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: Header Slot</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
          >
            <span slot="header">Hello</span>
          </gds-card-interactive>
        </gds-flex>
      </gds-flex>
      <!-- / linked -->
      <!-- Start Dynamic Slotted -->
      <!-- Start Dynamic Slotted -->
      <!-- Start Dynamic Slotted -->
      <!-- Start Dynamic Slotted -->
      <gds-flex
        gap="6xl"
        flex-direction="column"
        width="560px"
        background="neutral-02"
        padding="4xl"
        level="1"
      >
        <!-- Linked -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            src="https://api.seb.io/assets/launch-hero.jpg"
            title="This is a heading"
            excerpt="This is the body text. Please make it your own. You can use a button when that suites the context, or seperate link. "
            prompt="Read more"
            media="square"
          >
            <gds-button slot="footer">Primary</gds-button>
            <gds-button slot="footer" rank="secondary">Secondary</gds-button>
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with no image -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: No Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
            media="square"
          >
            <gds-button slot="footer">Primary</gds-button>
            <gds-link slot="footer" rank="secondary">
              <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
              Even a link
            </gds-link>
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with custom header -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: Header Slot</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <span slot="header">Hello</span>
          </gds-card-interactive>
        </gds-flex>
      </gds-flex>
      <!-- / linked -->
    </gds-flex>
  `};var i,d,n,a,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    innerHTML: 'Card content'
  }
}`,...(n=(d=e.parameters)==null?void 0:d.docs)==null?void 0:n.source},description:{story:`TODO: Add documentation here. Also add the beta
flag in green/libs/core/.storybook/manager.ts to
mark the component as beta in the menu of the
core storybook.`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.description}}};var o,s,l,c,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-flex gap="4xs">
      <!-- Start linked -->
      <gds-flex
        gap="6xl"
        flex-direction="column"
        width="560px"
        background="neutral-02"
        padding="4xl"
        level="1"
      >
        <!-- Linked -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Linked: Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="linked"
            href="#"
            src="https://api.seb.io/assets/launch-hero.jpg"
            title="This is a heading"
            excerpt="This is the body text. Please make it your own. You can use a button when that suites the context, or seperate link. "
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with no image -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Linked: No Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="linked"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with custom header -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Linked: Header Slot</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="linked"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <span slot="header">Hello</span>
          </gds-card-interactive>
        </gds-flex>
      </gds-flex>
      <!-- / linked -->
      <!-- Start Dynamic -->
      <!-- Start Dynamic -->
      <!-- Start Dynamic -->
      <!-- Start PLAIN -->
      <!-- Start PLAIN -->
      <!-- Start PLAIN -->
      <gds-flex
        gap="6xl"
        flex-direction="column"
        width="560px"
        background="neutral-01"
        padding="4xl"
        level="1"
      >
        <!-- Linked -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Plain: Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            layout="plain"
            href="#"
            src="https://api.seb.io/assets/launch-hero.jpg"
            title="This is a heading"
            excerpt="This is the body text. Please make it your own. You can use a button when that suites the context, or seperate link. "
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with no image -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Plain: No Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            layout="plain"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with custom header -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Plain: Header Slot</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            layout="plain"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
          >
            <span slot="header">Hello</span>
          </gds-card-interactive>
        </gds-flex>
      </gds-flex>
      <!-- / linked -->
      <!-- Start Dynamic -->
      <!-- Start Dynamic -->
      <!-- Start Dynamic -->
      <gds-flex
        gap="6xl"
        flex-direction="column"
        width="560px"
        background="neutral-02"
        padding="4xl"
        level="1"
      >
        <!-- Linked -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            src="https://api.seb.io/assets/launch-hero.jpg"
            title="This is a heading"
            excerpt="This is the body text. Please make it your own. You can use a button when that suites the context, or seperate link. "
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with no image -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: No Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
            media="square"
          >
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with custom header -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: Header Slot</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
          >
            <span slot="header">Hello</span>
          </gds-card-interactive>
        </gds-flex>
      </gds-flex>
      <!-- / linked -->
      <!-- Start Dynamic Slotted -->
      <!-- Start Dynamic Slotted -->
      <!-- Start Dynamic Slotted -->
      <!-- Start Dynamic Slotted -->
      <gds-flex
        gap="6xl"
        flex-direction="column"
        width="560px"
        background="neutral-02"
        padding="4xl"
        level="1"
      >
        <!-- Linked -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            src="https://api.seb.io/assets/launch-hero.jpg"
            title="This is a heading"
            excerpt="This is the body text. Please make it your own. You can use a button when that suites the context, or seperate link. "
            prompt="Read more"
            media="square"
          >
            <gds-button slot="footer">Primary</gds-button>
            <gds-button slot="footer" rank="secondary">Secondary</gds-button>
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with no image -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: No Media</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            href="#"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            prompt="Read more"
            media="square"
          >
            <gds-button slot="footer">Primary</gds-button>
            <gds-link slot="footer" rank="secondary">
              <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
              Even a link
            </gds-link>
          </gds-card-interactive>
        </gds-flex>

        <!-- Linked with custom header -->
        <gds-flex flex-direction="column" gap="xl">
          <gds-text>Dynamic: Header Slot</gds-text>
          <gds-divider></gds-divider>
          <gds-card-interactive
            type="dynamic"
            title="Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          >
            <span slot="header">Hello</span>
          </gds-card-interactive>
        </gds-flex>
      </gds-flex>
      <!-- / linked -->
    </gds-flex>
  \`
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:"Examples of different color variants",...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};const U=["CardInteractive","Patterns"];export{e as CardInteractive,t as Patterns,U as __namedExportsOrder,Q as default};
