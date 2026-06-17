import{b as a}from"./iframe-BQBiNmH_.js";import{a as o}from"./argTableProps-C2COD3R6.js";import"./filter-chip-D2lf31H_.js";import"./preload-helper-PPVm8Dsz.js";import"./filter-chips.component-Cj05j279.js";import"./resize-observer-CfkbZofs.js";import"./attribute-converters-CdI0trPX.js";import"./checkmark.component-CvIaKaXd.js";import"./icon.component-Cz_pvx9c.js";const b={title:"Components/Filter chips",component:"gds-filter-chips",subcomponents:{FilterChip:"gds-filter-chip"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/filter-chips)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-filter-chip)

Filter chip allows users to narrow down the data they want to see on the page.`}}},tags:["autodocs"],argTypes:{...o("gds-filter-chips")}},l={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{chips:{control:{type:"array"}}},args:{innerHTML:`<gds-filter-chip value="1">Item 1</gds-filter-chip>
<gds-filter-chip value="2">Item 2</gds-filter-chip>
<gds-filter-chip value="3">Item 3</gds-filter-chip>`}},r={...l},e={...l,render:n=>a`
    <gds-filter-chips
      value="top-news"
      label="Pick news channel"
      onchange="document.getElementById('sel').innerText = event.target.value"
    >
      <gds-filter-chip value="all">All</gds-filter-chip>
      <gds-filter-chip value="top-news">Top news</gds-filter-chip>
      <gds-filter-chip value="division">Division</gds-filter-chip>
      <gds-filter-chip value="global">Global</gds-filter-chip>
      <gds-filter-chip value="country">Country</gds-filter-chip>
      <gds-filter-chip value="lcfi">
        Large Corporate & Financial Institutions
      </gds-filter-chip>
    </gds-filter-chips>
    <div style={{ marginTop: '1rem' }}>
      Selected: <span id="sel">top-news</span>
    </div>
  `},i={...l,render:n=>a`
    <gds-filter-chips
      value="top-news,global"
      label="Pick news channels"
      multiple
    >
      <gds-filter-chip value="all">All</gds-filter-chip>
      <gds-filter-chip value="top-news">Top news</gds-filter-chip>
      <gds-filter-chip value="division">Division</gds-filter-chip>
      <gds-filter-chip value="global">Global</gds-filter-chip>
      <gds-filter-chip value="country">Country</gds-filter-chip>
      <gds-filter-chip value="lcfi">
        Large Corporate & Financial Institutions
      </gds-filter-chip>
    </gds-filter-chips>
  `},t={...l,render:n=>a`
    <gds-filter-chips value="top-news" label="Pick news channel" row-collapse>
      <gds-filter-chip value="all">All</gds-filter-chip>
      <gds-filter-chip value="top-news">Top news</gds-filter-chip>
      <gds-filter-chip value="division">Division</gds-filter-chip>
      <gds-filter-chip value="global">Global</gds-filter-chip>
      <gds-filter-chip value="country">Country</gds-filter-chip>
      <gds-filter-chip value="lcfi">
        Large Corporate & Financial Institutions
      </gds-filter-chip>
    </gds-filter-chips>
  `},s={...l,name:"ARIA Forwarding",render:()=>a`
    <gds-flex flex-direction="column" gap="s">
      <div id="chips-label">Filter by category</div>
      <gds-filter-chips value="all" gds-aria-labelledby="chips-label">
        <gds-filter-chip value="all">All</gds-filter-chip>
        <gds-filter-chip value="news">News</gds-filter-chip>
        <gds-filter-chip value="events">Events</gds-filter-chip>
      </gds-filter-chips>
    </gds-flex>
  `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-filter-chips
      value="top-news"
      label="Pick news channel"
      onchange="document.getElementById('sel').innerText = event.target.value"
    >
      <gds-filter-chip value="all">All</gds-filter-chip>
      <gds-filter-chip value="top-news">Top news</gds-filter-chip>
      <gds-filter-chip value="division">Division</gds-filter-chip>
      <gds-filter-chip value="global">Global</gds-filter-chip>
      <gds-filter-chip value="country">Country</gds-filter-chip>
      <gds-filter-chip value="lcfi">
        Large Corporate & Financial Institutions
      </gds-filter-chip>
    </gds-filter-chips>
    <div style={{ marginTop: '1rem' }}>
      Selected: <span id="sel">top-news</span>
    </div>
  \`
}`,...e.parameters?.docs?.source},description:{story:`This component works like many other types of input controls. A \`value\` property holds the currently
selcted value/values and a \`change\` event is emitted when the value changes.

## Single select

By default, the filter chips component is single select. Each filter-chip needs to have a unique value
attribute. This determines the value of the parent components, and which chip is selected.
Chips without value cannot be selected.

**Note:** It is important to remember to set the label attribute. Omitting it will cause poor
accessibility for screen reader useSharedState. Internally in the component, the label attribute
will be used to set \`aria-label\` for the appropriate element.`,...e.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-filter-chips
      value="top-news,global"
      label="Pick news channels"
      multiple
    >
      <gds-filter-chip value="all">All</gds-filter-chip>
      <gds-filter-chip value="top-news">Top news</gds-filter-chip>
      <gds-filter-chip value="division">Division</gds-filter-chip>
      <gds-filter-chip value="global">Global</gds-filter-chip>
      <gds-filter-chip value="country">Country</gds-filter-chip>
      <gds-filter-chip value="lcfi">
        Large Corporate & Financial Institutions
      </gds-filter-chip>
    </gds-filter-chips>
  \`
}`,...i.parameters?.docs?.source},description:{story:"Setting the `multiple` attribute will allow users to select multiple filter chips. The value of the\ncomponent will be an array of the selected chip values.",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-filter-chips value="top-news" label="Pick news channel" row-collapse>
      <gds-filter-chip value="all">All</gds-filter-chip>
      <gds-filter-chip value="top-news">Top news</gds-filter-chip>
      <gds-filter-chip value="division">Division</gds-filter-chip>
      <gds-filter-chip value="global">Global</gds-filter-chip>
      <gds-filter-chip value="country">Country</gds-filter-chip>
      <gds-filter-chip value="lcfi">
        Large Corporate & Financial Institutions
      </gds-filter-chip>
    </gds-filter-chips>
  \`
}`,...t.parameters?.docs?.source},description:{story:"In some cases, layout constraints may require the filter chips to collapse into a single row.\n\nSetting the `row-collapse` attribute will enable this behavior when the chips require more than two rows. Instead, scrolling overflow will be used to accommodate the chips.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s">
      <div id="chips-label">Filter by category</div>
      <gds-filter-chips value="all" gds-aria-labelledby="chips-label">
        <gds-filter-chip value="all">All</gds-filter-chip>
        <gds-filter-chip value="news">News</gds-filter-chip>
        <gds-filter-chip value="events">Events</gds-filter-chip>
      </gds-filter-chips>
    </gds-flex>
  \`
}`,...s.parameters?.docs?.source},description:{story:`In some cases it may be necessary to label or describe the filter chips using elements
outside of the component. For those cases, you can use \`gds-aria-*\` attributes
to forward ARIA attributes to the internal listbox element. This works for
regular text attributes, and for ID association attributes. ID association is
handled internally via the ARIAMixins API, which allows DOM reference association
across shadow DOM boundaries.

It is also possible to use regular \`aria-*\` attributes, but in that case it will
also apply to the host element (gds-filter-chips), and not only the inner listbox.
Prefer \`gds-aria-*\` attributes over regular \`aria-*\` attributes to
ensure they are only applied to the internal listbox element.`,...s.parameters?.docs?.description}}};const w=["Basic","Usage","MultiSelect","RowCollapse","AriaForwarding"];export{s as AriaForwarding,r as Basic,i as MultiSelect,t as RowCollapse,e as Usage,w as __namedExportsOrder,b as default};
