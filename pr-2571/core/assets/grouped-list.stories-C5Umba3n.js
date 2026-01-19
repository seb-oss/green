import{x as e,r as i}from"./iframe-Bs7dWGrf.js";import"./list-item-BKjvK2Fr.js";import"./grouped-list.component-5Q8Pf9cW.js";i();const r={title:"Components/Grouped List",component:"gds-grouped-list",subcomponents:{GdsListItem:"gds-list-item"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/grouped-list)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-list)

ist are used to list many datapoints with labels in a structured way. They may be grouped under
heading and they may have a link or button added to act on the data being displayed.`}}},tags:["autodocs"]},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{items:{control:{type:"array"}}},args:{innerHTML:`<gds-list-item>Item 1</gds-list-item>
<gds-list-item>Item 2</gds-list-item>
<gds-list-item>Item 3</gds-list-item>`,label:"Grouped list label"}},o={...t},a={...t,name:"Grouped list with values",render:s=>e`
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
  `},g={...t,name:"Grouped list with values and action",render:s=>e`
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
  `},m={...t,render:s=>e`
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
  `},u=["Basic","WithValues","WithValuesAndAction","AdjustingAppearance"];export{m as AdjustingAppearance,o as Basic,a as WithValues,g as WithValuesAndAction,u as __namedExportsOrder,r as default};
