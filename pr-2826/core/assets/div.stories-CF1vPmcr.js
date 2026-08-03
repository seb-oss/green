import{b as o}from"./iframe-C8ehJ7Np.js";import"./div-ZbQ8XZMt.js";import"./flex-BVKPDbcs.js";import"./card-CWM7V1jO.js";import{a}from"./argTableProps-DvQqtqYJ.js";import"./preload-helper-PPVm8Dsz.js";import"./flex.component-ByrVVeee.js";import"./card.component-DeDZ7yIt.js";const x={title:"Components/Div",component:"gds-div",tags:["autodocs"],argTypes:{...a("gds-div")},parameters:{docs:{description:{component:"`gds-div` is a base element in the declarative layout system.\n\nDiv accepts all available style expression properties, and is also the base class for `gds-flex`, `gds-grid`, `gds-card` and `gds-text`"}}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},s={...t,args:{background:"01",border:"2xs","border-radius":"m","border-color":"neutral-02",width:"4xl",height:"4xl"}},r={...t,render:n=>o`
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
        border-width="4xs"
      ></gds-div>

      <!-- Instead of adding 'background' and 'border-radius', take a look at 'gds-card',
           which provides pre-configured configurations of these properties -->
      <gds-div
        width="4xl"
        height="4xl"
        background="neutral-03"
        border-radius="s"
      ></gds-div>
    </gds-div>
  `},e={...t,name:"Border Style",render:n=>o`<gds-grid columns="5" gap="4xl">
      <gds-card
        variant="neutral-01"
        border-radius="0"
        border-width="2xs 0 0 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center"> Top </gds-flex>
      </gds-card>
      <gds-card
        variant="neutral-01"
        border-radius="0"
        border-width="0 2xs 0 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">Right</gds-flex>
      </gds-card>
      <gds-card
        variant="neutral-01"
        border-radius="0"
        border-width="0 0 2xs 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card
        variant="neutral-01"
        border-radius="0"
        border-width="0 0 0 2xs"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card
        variant="neutral-01"
        border-radius="0"
        border="2xs"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center"> All </gds-flex>
      </gds-card>
    </gds-grid>`},d={...t,args:{background:"neutral-02",border:"2xs","border-radius":"m","border-color":"strong",width:"8xl",height:"4xl"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    background: '01',
    border: '2xs',
    'border-radius': 'm',
    'border-color': 'neutral-02',
    width: '4xl',
    height: '4xl'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        border-width="4xs"
      ></gds-div>

      <!-- Instead of adding 'background' and 'border-radius', take a look at 'gds-card',
           which provides pre-configured configurations of these properties -->
      <gds-div
        width="4xl"
        height="4xl"
        background="neutral-03"
        border-radius="s"
      ></gds-div>
    </gds-div>
  \`
}`,...r.parameters?.docs?.source},description:{story:"Here is an example of a simple layout structure using `gds-div`:",...r.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Border Style',
  render: args => html\`<gds-grid columns="5" gap="4xl">
      <gds-card
        variant="neutral-01"
        border-radius="0"
        border-width="2xs 0 0 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center"> Top </gds-flex>
      </gds-card>
      <gds-card
        variant="neutral-01"
        border-radius="0"
        border-width="0 2xs 0 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">Right</gds-flex>
      </gds-card>
      <gds-card
        variant="neutral-01"
        border-radius="0"
        border-width="0 0 2xs 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card
        variant="neutral-01"
        border-radius="0"
        border-width="0 0 0 2xs"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card
        variant="neutral-01"
        border-radius="0"
        border="2xs"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center"> All </gds-flex>
      </gds-card>
    </gds-grid>\`
}`,...e.parameters?.docs?.source},description:{story:'Border styling follows the same patterns as CSS and can be controlled using the shorthand properties `border`, `border-width`, `border-style`, `border-color`\n\n- `border-color` defaults to subtle-01\n- `border-width` defaults to 0 (supports all spacing tokens)\n- `border-style` defaults to solid\n\nTo add a 1px primary border around the element:\n\n```html\n<gds-div border="4xs"></gds-div>\n```\n\nTo only add border bottom:\n\n```html\n<gds-div border-width="0 0 4xs 0"></gds-div>\n```\n\nTo add a 1px secodary color border on the bottom:\n\n```html\n<gds-div border-width="0 0 4xs 0" border-color="subtle-01"></gds-div>\n```',...e.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    background: 'neutral-02',
    border: '2xs',
    'border-radius': 'm',
    'border-color': 'strong',
    width: '8xl',
    height: '4xl'
  }
}`,...d.parameters?.docs?.source},description:{story:`Values are mapped directly from our radius tokens to maintain proportional scaling. <br />
View all available radius tokens and their values in Green Studio:
https://seb.io/studio/radius


##### Single value
\`\`\`html
<gds-div border-radius="m">...</gds-div>
\`\`\`

##### Multiple corners / (top-left, top-right, bottom-right, bottom-left)
\`\`\`html
<gds-div border-radius="s m l xl">...</gds-div>
\`\`\``,...d.parameters?.docs?.description}}};const h=["Default","Example","CardBorder","BorderRadius"];export{d as BorderRadius,e as CardBorder,s as Default,r as Example,h as __namedExportsOrder,x as default};
