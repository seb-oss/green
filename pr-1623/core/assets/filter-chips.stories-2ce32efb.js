import{k as r}from"./lit-element-1d72f0ce.js";import"./filter-chips-3b015cfb.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./class-map-f04c1558.js";import"./directive-dd518ee3.js";import"./button-7f889fcf.js";import"./static-c0094392.js";import"./when-748fcf30.js";import"./if-defined-5f576255.js";import"./constrain-slots-08d8606c.js";import"./transitional-styles-8ea9588a.js";import"./tokens.style-01187a75.js";import"./runtime-c06dc943.js";import"./watch-c4961afe.js";import"./resize-observer-81981523.js";import"./attribute-converters-ae269b4b.js";import"./query-async-1ff18261.js";import"./checkmark-da617071.js";import"./icon-a640baec.js";const K={title:"Docs/Components/Filter Chips",component:"gds-filter-chips",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/filter-chips)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-filter-chip)

The filter chips component allows users to quickly refine the result of data they want to be presented on the page.`}}},tags:["autodocs"]},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{chips:{control:{type:"array"}}},args:{innerHTML:`<gds-filter-chip value="1">Item 1</gds-filter-chip>
<gds-filter-chip value="2">Item 2</gds-filter-chip>
<gds-filter-chip value="3">Item 3</gds-filter-chip>`}},l={...s},e={...s,render:a=>r`
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
  `},i={...s,render:a=>r`
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
  `},t={...s,render:a=>r`
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
  `};var n,o,c;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(c=(o=l.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var p,d,h,g,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(d=e.parameters)==null?void 0:d.docs)==null?void 0:h.source},description:{story:`This component works like many other types of input controls. A \`value\` property holds the currently
selcted value/values and a \`change\` event is emitted when the value changes.

## Single select

By default, the filter chips component is single select. Each filter-chip needs to have a unique value
attribute. This determines the value of the parent components, and which chip is selected.
Chips without value cannot be selected.

**Note:** It is important to remember to set the label attribute. Omitting it will cause poor
accessibility for screen reader useSharedState. Internally in the component, the label attribute
will be used to set \`aria-label\` for the appropriate element.`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.description}}};var f,m,v,w,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source},description:{story:"Setting the `multiple` attribute will allow users to select multiple filter chips. The value of the\ncomponent will be an array of the selected chip values.",...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.description}}};var y,C,T,I,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(C=t.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"In some cases, layout constraints may require the filter chips to collapse into a single row.\n\nSetting the `row-collapse` attribute will enable this behavior when the chips require more than two rows. Instead, scrolling overflow will be used to accommodate the chips.",...(S=(I=t.parameters)==null?void 0:I.docs)==null?void 0:S.description}}};const Q=["Basic","Usage","MultiSelect","RowCollapse"];export{l as Basic,i as MultiSelect,t as RowCollapse,e as Usage,Q as __namedExportsOrder,K as default};