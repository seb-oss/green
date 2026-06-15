import{b as d,r as l}from"./iframe-CpjcSp7s.js";import"./grouped-list-Cl0FPJIv.js";import"./preload-helper-PPVm8Dsz.js";import"./grouped-list.component-B5-7oyB3.js";import"./list-item-DAQeTyJt.js";import"./flex.component-CnkVJOKX.js";l();const c={title:"Components/Grouped List",component:"gds-grouped-list",subcomponents:{GdsListItem:"gds-list-item"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/grouped-list)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-list)

ist are used to list many datapoints with labels in a structured way. They may be grouped under
heading and they may have a link or button added to act on the data being displayed.`}}},tags:["autodocs"]},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{items:{control:{type:"array"}}},args:{innerHTML:`<gds-list-item>Item 1</gds-list-item>
<gds-list-item>Item 2</gds-list-item>
<gds-list-item>Item 3</gds-list-item>`,label:"Grouped list label"}},i={...n},t={...n,name:"Grouped list with values",render:r=>d`
    <gds-grouped-list label="Example with values">
      <gds-list-item>
        <div>Key 1</div>
        <strong>Value 1</strong>
      </gds-list-item>
      <gds-list-item>
        <div>Key 2</div>
        <strong>Value 2</strong>
      </gds-list-item>
      <gds-list-item>
        <div>Key 3</div>
        <strong>Value 3</strong>
      </gds-list-item>
      <gds-list-item>
        <div>Key 4</div>
        <strong>Value 4</strong>
      </gds-list-item>
      <gds-list-item>
        <div>Key 5</div>
        <strong>Value 5</strong>
      </gds-list-item>
    </gds-grouped-list>
  `},e={...n,name:"Grouped list with values and action",render:r=>d`
    <gds-grouped-list label="Example with links">
      <gds-list-item>
        <div>Key 1</div>
        <strong>Value 1</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item>
        <div>Key 2</div>
        <strong>Value 2</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item>
        <div>Key 3</div>
        <strong>Value 3</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item>
        <div>Key 4</div>
        <strong>Value 4</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item>
        <div>Key 5</div>
        <strong>Value 5</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
    </gds-grouped-list>
  `},s={...n,render:r=>d`
    <gds-grouped-list label="Example of left aligned list">
      <gds-list-item style="justify-content: left">
        <div>Key 1</div>
        <strong>Value 1</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item style="justify-content: left">
        <div>Key 2</div>
        <strong>Value 2</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item style="justify-content: left">
        <div>Key 3</div>
        <strong>Value 3</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
    </gds-grouped-list>

    <gds-grouped-list label="Example of vertical list">
      <gds-list-item style="flex-direction: column; border-width: 0">
        <div>Key 1</div>
        <strong>Value 1</strong>
      </gds-list-item>
      <gds-list-item style="flex-direction: column; border-width: 0">
        <div>Key 2</div>
        <strong>Value 2</strong>
      </gds-list-item>
      <gds-list-item style="flex-direction: column; border-width: 0">
        <div>Key 3</div>
        <strong>Value 3</strong>
      </gds-list-item>
    </gds-grouped-list>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...DefaultParams
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Grouped list with values',
  render: args => html\`
    <gds-grouped-list label="Example with values">
      <gds-list-item>
        <div>Key 1</div>
        <strong>Value 1</strong>
      </gds-list-item>
      <gds-list-item>
        <div>Key 2</div>
        <strong>Value 2</strong>
      </gds-list-item>
      <gds-list-item>
        <div>Key 3</div>
        <strong>Value 3</strong>
      </gds-list-item>
      <gds-list-item>
        <div>Key 4</div>
        <strong>Value 4</strong>
      </gds-list-item>
      <gds-list-item>
        <div>Key 5</div>
        <strong>Value 5</strong>
      </gds-list-item>
    </gds-grouped-list>
  \`
}`,...t.parameters?.docs?.source},description:{story:"By default, the list items are displayed as `flex` containers with `space-between` alignment.",...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Grouped list with values and action',
  render: args => html\`
    <gds-grouped-list label="Example with links">
      <gds-list-item>
        <div>Key 1</div>
        <strong>Value 1</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item>
        <div>Key 2</div>
        <strong>Value 2</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item>
        <div>Key 3</div>
        <strong>Value 3</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item>
        <div>Key 4</div>
        <strong>Value 4</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item>
        <div>Key 5</div>
        <strong>Value 5</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
    </gds-grouped-list>
  \`
}`,...e.parameters?.docs?.source},description:{story:"Elements such as links or buttons can be slotted into the list items.",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grouped-list label="Example of left aligned list">
      <gds-list-item style="justify-content: left">
        <div>Key 1</div>
        <strong>Value 1</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item style="justify-content: left">
        <div>Key 2</div>
        <strong>Value 2</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
      <gds-list-item style="justify-content: left">
        <div>Key 3</div>
        <strong>Value 3</strong>
        <div>
          <a href="#">Link</a>
        </div>
      </gds-list-item>
    </gds-grouped-list>

    <gds-grouped-list label="Example of vertical list">
      <gds-list-item style="flex-direction: column; border-width: 0">
        <div>Key 1</div>
        <strong>Value 1</strong>
      </gds-list-item>
      <gds-list-item style="flex-direction: column; border-width: 0">
        <div>Key 2</div>
        <strong>Value 2</strong>
      </gds-list-item>
      <gds-list-item style="flex-direction: column; border-width: 0">
        <div>Key 3</div>
        <strong>Value 3</strong>
      </gds-list-item>
    </gds-grouped-list>
  \`
}`,...s.parameters?.docs?.source},description:{story:"The slotted elements can be styled using inline styles or CSS classes.",...s.parameters?.docs?.description}}};const p=["Basic","WithValues","WithValuesAndAction","AdjustingAppearance"];export{s as AdjustingAppearance,i as Basic,t as WithValues,e as WithValuesAndAction,p as __namedExportsOrder,c as default};
