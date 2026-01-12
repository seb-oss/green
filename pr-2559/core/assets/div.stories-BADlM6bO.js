import{x as e}from"./iframe-DXWmPRHc.js";import"./div-CcjLpZ6X.js";import"./flex-B-_5FH9-.js";import"./card-CrNEhggm.js";import{a as s}from"./argTableProps-DnCbNmrO.js";import"./flex.component-CA_YrKCB.js";import"./card.component-CSL_lt_n.js";const c={title:"Components/Div",component:"gds-div",tags:["autodocs"],argTypes:{...s("gds-div")},parameters:{docs:{description:{component:"`gds-div` is a base element in the declarative layout system.\n\nDiv accepts all available style expression properties, and is also the base class for `gds-flex`, `gds-grid`, `gds-card` and `gds-text`"}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},p={...r,args:{background:"01",border:"2xs","border-radius":"m","border-color":"subtle-01",width:"4xl",height:"4xl"}},x={...r,render:d=>e`
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
  `},u={...r,name:"Border Style",render:d=>e`<gds-grid columns="5" gap="4xl">
      <gds-card
        variant="primary"
        border-radius="0"
        border-width="2xs 0 0 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center"> Top </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="0"
        border-width="0 2xs 0 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">Right</gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="0"
        border-width="0 0 2xs 0"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">
          Bottom
        </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="0"
        border-width="0 0 0 2xs"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center">
          Left
        </gds-flex>
      </gds-card>
      <gds-card
        variant="primary"
        border-radius="0"
        border="2xs"
        border-color="strong"
      >
        <gds-flex align-items="center" justify-content="center"> All </gds-flex>
      </gds-card>
    </gds-grid>`},m={...r,args:{background:"neutral-02",border:"2xs","border-radius":"m","border-color":"strong",width:"8xl",height:"4xl"}},b=["Default","Example","CardBorder","BorderRadius"];export{m as BorderRadius,u as CardBorder,p as Default,x as Example,b as __namedExportsOrder,c as default};
