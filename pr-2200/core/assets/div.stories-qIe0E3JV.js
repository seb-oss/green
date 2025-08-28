import{x as h}from"./lit-element-Bx14lxc-.js";import"./div-BkizjtHL.js";import"./flex-3DCATZGQ.js";import"./grid-2sp1p00z.js";import"./card-Dj1e6P6c.js";import{a as v}from"./argTableProps-BZq9kHBP.js";import"./div.component-Cx0JXo06.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./gds-element-DJNCW3iR.js";import"./tokens.style-iX6aIK9m.js";import"./declarative-layout-mixins-CquYcIh8.js";import"./flex.component-CHYyV8f-.js";import"./grid.component-WyVP2nUC.js";import"./card.component-yp2NQ7aE.js";import"./custom-elements-CQpfIX3L.js";const _={title:"Components/Div",component:"gds-div",tags:["autodocs"],argTypes:{...v("gds-div")},parameters:{docs:{description:{component:"@status beta\n\n`gds-div` is a base element in the declarative layout system.\n\nDiv accepts all available style expression properties, and is also the base class for `gds-flex`, `gds-grid`, `gds-card` and `gds-text`"}}}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},d={...s,args:{background:"01",border:"4xs","border-radius":"s","border-color":"subtle-01",width:"4xl",height:"4xl"}},r={...s,render:f=>h`
    <!-- This is equivalent to 'gds-flex' -->
    <gds-div
      display="flex"
      gap="xl"
      justify-content="center"
      align-items="center"
    >
      <!-- Some properties, like 'width' and 'height', accepts either tokens or arbitrary values -->
      <gds-div width="4xl" height="4xl" background="neutral-01"></gds-div>

      <!-- All style expressions properties accepts multi-viewport expressions -->
      <gds-div
        width="4xl; l{ 6xl }"
        height="4xl; l{ 6xl }"
        background="neutral-02"
        border="4xs"
      ></gds-div>

      <!-- Instead of adding 'background' and 'border-radius', take a look at 'gds-card',
           which provides pre-configured configurations of these properties -->
      <gds-div
        width="4xl"
        height="4xl"
        background="03"
        border-radius="s"
      ></gds-div>
    </gds-div>
  `},e={...s,name:"Border Style",render:f=>h`<gds-grid columns="5" gap="l">
      <gds-card
        variant="primary"
        border-radius="0 0 m m"
        border-width="2xs 0 0 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center"> Top </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="m 0 0 m"
        border-width="0 2xs 0 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">Right</gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="m m 0 0"
        border-width="0 0 2xs 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="0 m m 0"
        border-width="0 0 0 2xs"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="m"
        border="2xs"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center"> All </gds-flex>
      </gds-card>
    </gds-grid>`};var t,o,n;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    background: '01',
    border: '4xs',
    'border-radius': 's',
    'border-color': 'subtle-01',
    width: '4xl',
    height: '4xl'
  }
}`,...(n=(o=d.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var a,i,l,g,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      <gds-div width="4xl" height="4xl" background="neutral-01"></gds-div>

      <!-- All style expressions properties accepts multi-viewport expressions -->
      <gds-div
        width="4xl; l{ 6xl }"
        height="4xl; l{ 6xl }"
        background="neutral-02"
        border="4xs"
      ></gds-div>

      <!-- Instead of adding 'background' and 'border-radius', take a look at 'gds-card',
           which provides pre-configured configurations of these properties -->
      <gds-div
        width="4xl"
        height="4xl"
        background="03"
        border-radius="s"
      ></gds-div>
    </gds-div>
  \`
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source},description:{story:"Here is an example of a simple layout structure using `gds-div`:",...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.description}}};var m,p,u,b,x;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Style',
  render: args => html\`<gds-grid columns="5" gap="l">
      <gds-card
        variant="primary"
        border-radius="0 0 m m"
        border-width="2xs 0 0 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center"> Top </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="m 0 0 m"
        border-width="0 2xs 0 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">Right</gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="m m 0 0"
        border-width="0 0 2xs 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="0 m m 0"
        border-width="0 0 0 2xs"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="m"
        border="2xs"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center"> All </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:'Border styling follows the same patterns as CSS and can be controlled using the shorthand properties `border`, `border-width`, `border-style`, `border-color`\n\n- `border-color` defaults to subtle-01\n- `border-width` defaults to 0\n- `border-style` defaults to solid\n\nTo add a 1px primary border around the element:\n\n```html\n<gds-div border="4xs"></gds-div>\n```\n\nTo only add border bottom:\n\n```html\n<gds-div border-width="0 0 4xs 0"></gds-div>\n```\n\nTo add a 1px secodary color border on the bottom:\n\n```html\n<gds-div border-width="0 0 4xs 0" border-color="subtle-01"></gds-div>\n```',...(x=(b=e.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};const F=["Default","Example","CardBorder"];export{e as CardBorder,d as Default,r as Example,F as __namedExportsOrder,_ as default};
