import{b as a}from"./iframe-CL7Bfxf7.js";import{a as L}from"./argTableProps-CqaFD09l.js";import"./filter-chip-DA1OMDiW.js";import"./preload-helper-Dp1pzeXC.js";import"./filter-chips.component-CaGf-3yS.js";import"./resize-observer-B9k8v2TZ.js";import"./attribute-converters-CdI0trPX.js";import"./checkmark.component-XebMgf-Y.js";import"./icon.component-CIs8Df4J.js";const _={title:"Components/Filter chips",component:"gds-filter-chips",subcomponents:{FilterChip:"gds-filter-chip"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/filter-chips)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-filter-chip)

Filter chip allows users to narrow down the data they want to see on the page.`}}},tags:["autodocs"],argTypes:{...L("gds-filter-chips")}},l={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{chips:{control:{type:"array"}}},args:{innerHTML:`<gds-filter-chip value="1">Item 1</gds-filter-chip>
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
  `};var o,c,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,h,g,u,f;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(h=e.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:`This component works like many other types of input controls. A \`value\` property holds the currently
selcted value/values and a \`change\` event is emitted when the value changes.

## Single select

By default, the filter chips component is single select. Each filter-chip needs to have a unique value
attribute. This determines the value of the parent components, and which chip is selected.
Chips without value cannot be selected.

**Note:** It is important to remember to set the label attribute. Omitting it will cause poor
accessibility for screen reader useSharedState. Internally in the component, the label attribute
will be used to set \`aria-label\` for the appropriate element.`,...(f=(u=e.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var m,v,b,w,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"Setting the `multiple` attribute will allow users to select multiple filter chips. The value of the\ncomponent will be an array of the selected chip values.",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};var I,A,T,C,F;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(A=t.parameters)==null?void 0:A.docs)==null?void 0:T.source},description:{story:"In some cases, layout constraints may require the filter chips to collapse into a single row.\n\nSetting the `row-collapse` attribute will enable this behavior when the chips require more than two rows. Instead, scrolling overflow will be used to accommodate the chips.",...(F=(C=t.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};var x,D,P,S,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(P=(D=s.parameters)==null?void 0:D.docs)==null?void 0:P.source},description:{story:`In some cases it may be necessary to label or describe the filter chips using elements
outside of the component. For those cases, you can use \`gds-aria-*\` attributes
to forward ARIA attributes to the internal listbox element. This works for
regular text attributes, and for ID association attributes. ID association is
handled internally via the ARIAMixins API, which allows DOM reference association
across shadow DOM boundaries.

It is also possible to use regular \`aria-*\` attributes, but in that case it will
also apply to the host element (gds-filter-chips), and not only the inner listbox.
Prefer \`gds-aria-*\` attributes over regular \`aria-*\` attributes to
ensure they are only applied to the internal listbox element.`,...(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.description}}};const H=["Basic","Usage","MultiSelect","RowCollapse","AriaForwarding"];export{s as AriaForwarding,r as Basic,i as MultiSelect,t as RowCollapse,e as Usage,H as __namedExportsOrder,_ as default};
