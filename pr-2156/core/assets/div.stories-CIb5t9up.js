import{x as f}from"./lit-element-Bx14lxc-.js";import"./div-DZJSziKf.js";import"./flex-0EBFStdI.js";import"./grid-CypFOap_.js";import"./card-DQV9zcAj.js";import{a as h}from"./argTableProps-BGMn6vac.js";import"./div.component-OjLeAa38.js";import"./gds-element-KHa0AloG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-YygOKULa.js";import"./declarative-layout-mixins-V-x3wfiD.js";import"./flex.component-BF3O-Nq2.js";import"./grid.component-hVtfjBS5.js";import"./card.component-Dj0mih4y.js";import"./custom-elements-bx19eHBQ.js";const R={title:"Components/Div",component:"gds-div",tags:["autodocs"],argTypes:{...h("gds-div")},parameters:{docs:{description:{component:"@status beta\n\n`gds-div` is a base element in the declarative layout system.\n\nDiv accepts all available style expression properties, and is also the base class for `gds-flex`, `gds-grid`, `gds-card` and `gds-text`"}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},d={...s},r={...s,render:y=>f`
    <!-- This is equivalent to 'gds-flex' -->
    <gds-div
      display="flex"
      gap="xl"
      justify-content="center"
      align-items="center"
    >
      <!-- Some properties, like 'width' and 'height', accepts either tokens or arbitrary values -->
      <gds-div width="4xl" height="4xl" background="primary"></gds-div>

      <!-- All style expressions properties accepts multi-viewport expressions -->
      <gds-div
        width="4xl; l{ 6xl }"
        height="4xl; l{ 6xl }"
        background="secondary"
        border="4xs"
      ></gds-div>

      <!-- Instead of adding 'background' and 'border-radius', take a look at 'gds-card',
           which provides pre-configured configurations of these properties -->
      <gds-div
        width="4xl"
        height="4xl"
        background="tertiary"
        border-radius="s"
      ></gds-div>
    </gds-div>
  `},e={...s,name:"Border Style",render:y=>f`<gds-grid columns="5" gap="l">
      <gds-card
        variant="primary"
        border-radius="0 0 m m"
        border-width="4xs 0 0 0"
        border-color="secondary"
      >
        <gds-flex align-items="center" justify-content="center"> Top </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="m 0 0 m"
        border-width="0 4xs 0 0"
        border-color="secondary"
      >
        <gds-flex align-items="center" justify-content="center">Right</gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="m m 0 0"
        border-width="0 0 4xs 0"
        border-color="secondary"
      >
        <gds-flex align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="0 m m 0"
        border-width="0 0 0 4xs"
        border-color="secondary"
      >
        <gds-flex align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="m"
        border="4xs"
        border-color="secondary"
      >
        <gds-flex align-items="center" justify-content="center"> All </gds-flex>
      </gds-card>
    </gds-grid>`};var t,o,a;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(a=(o=d.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var n,i,c,l,g;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <!-- This is equivalent to 'gds-flex' -->
    <gds-div
      display="flex"
      gap="xl"
      justify-content="center"
      align-items="center"
    >
      <!-- Some properties, like 'width' and 'height', accepts either tokens or arbitrary values -->
      <gds-div width="4xl" height="4xl" background="primary"></gds-div>

      <!-- All style expressions properties accepts multi-viewport expressions -->
      <gds-div
        width="4xl; l{ 6xl }"
        height="4xl; l{ 6xl }"
        background="secondary"
        border="4xs"
      ></gds-div>

      <!-- Instead of adding 'background' and 'border-radius', take a look at 'gds-card',
           which provides pre-configured configurations of these properties -->
      <gds-div
        width="4xl"
        height="4xl"
        background="tertiary"
        border-radius="s"
      ></gds-div>
    </gds-div>
  \`
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"Here is an example of a simple layout structure using `gds-div`:",...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.description}}};var m,p,u,x,b;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Style',
  render: args => html\`<gds-grid columns="5" gap="l">
      <gds-card
        variant="primary"
        border-radius="0 0 m m"
        border-width="4xs 0 0 0"
        border-color="secondary"
      >
        <gds-flex align-items="center" justify-content="center"> Top </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="m 0 0 m"
        border-width="0 4xs 0 0"
        border-color="secondary"
      >
        <gds-flex align-items="center" justify-content="center">Right</gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="m m 0 0"
        border-width="0 0 4xs 0"
        border-color="secondary"
      >
        <gds-flex align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="0 m m 0"
        border-width="0 0 0 4xs"
        border-color="secondary"
      >
        <gds-flex align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="m"
        border="4xs"
        border-color="secondary"
      >
        <gds-flex align-items="center" justify-content="center"> All </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:'Border styling follows the same patterns as CSS and can be controlled using the shorthand properties `border`, `border-width`, `border-style`, `border-color`\n\n- `border-color` defaults to level 2 primary\n- `border-width` defaults to 0\n- `border-style` defaults to solid\n\nTo add a 1px primary border around the element:\n\n```html\n<gds-div border="4xs"></gds-div>\n```\n\nTo only add border bottom:\n\n```html\n<gds-div border-width="0 0 4xs 0"></gds-div>\n```\n\nTo add a 1px secodary color border on the bottom:\n\n```html\n<gds-div border-width="0 0 4xs 0" border-color="secondary"></gds-div>\n```',...(b=(x=e.parameters)==null?void 0:x.docs)==null?void 0:b.description}}};const _=["Default","Example","CardBorder"];export{e as CardBorder,d as Default,r as Example,_ as __namedExportsOrder,R as default};
