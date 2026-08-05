import{b as n}from"./iframe-BCI2c7Bh.js";import{a as d}from"./argTableProps-H4RGnk6k.js";import"./tab-panel-B4z0-Mm8.js";import"./badge-D2KxRMZM.js";import"./context-menu-BbrlmoeC.js";import"./circle-info-Dgbf7O2P.js";import"./chevron-bottom-D3ntpztH.js";import"./preload-helper-PPVm8Dsz.js";import"./localized-decorator-DEYOVTWz.js";import"./resize-observer-CfkbZofs.js";import"./chevron-left.component-GP2FA3J8.js";import"./icon.component-C9GlFnyx.js";import"./chevron-right.component-BuAn3iXD.js";import"./badge.component-jX9LsXuu.js";import"./flex.component-xNjZLWhM.js";import"./context-menu.component-inHkvAo4.js";import"./unwrap-slots-CEjXvrk5.js";import"./ref-DdU2QK8v.js";import"./dot-grid-one-horizontal-DFChzkdJ.js";import"./popover.component-BnFLy5-c.js";import"./floating-ui.dom-DPpwG6Py.js";import"./cross-small.component-8ComUAg1.js";import"./menu-heading.component-DV2D_462.js";import"./circle-info.component-gLCKki5d.js";import"./chevron-bottom.component-BCZzGWrj.js";const _={title:"Components/Tabs",component:"gds-tabs",subcomponents:{GdsTab:"gds-tab",GdsTabPanel:"gds-tab-panel"},tags:["autodocs"],argTypes:{...d("gds-tabs")},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/tabs)

Tabs organize content into separate views where only one panel is visible at a time.

Place \`<gds-tab slot="tab">\` elements for the tab strip and \`<gds-tab-panel>\`
elements for the panel content. Tabs and panels are paired by position.`}}}},a={render:()=>n`
    <gds-tabs>
      <gds-tab slot="tab" panel="first">Page 1</gds-tab>
      <gds-tab slot="tab" panel="second">Page 2</gds-tab>
      <gds-tab slot="tab" panel="third">Page 3</gds-tab>
      <gds-tab slot="tab" panel="fourth">Page 4</gds-tab>
      <gds-tab slot="tab" panel="fifth">Page 5</gds-tab>
      <gds-tab slot="tab" panel="sixth">Page 6</gds-tab>
      <gds-tab slot="tab" panel="seventh">Page 7</gds-tab>
      <gds-tab slot="tab" panel="eighth">Page 8</gds-tab>
      <gds-tab slot="tab" panel="ninth">Page 9</gds-tab>
      <gds-tab-panel name="first">Page 1 content</gds-tab-panel>
      <gds-tab-panel name="second">Page 2 content</gds-tab-panel>
      <gds-tab-panel name="third">Page 3 content</gds-tab-panel>
      <gds-tab-panel name="fourth">Page 4 content</gds-tab-panel>
      <gds-tab-panel name="fifth">Page 5 content</gds-tab-panel>
      <gds-tab-panel name="sixth">Page 6 content</gds-tab-panel>
      <gds-tab-panel name="seventh">Page 7 content</gds-tab-panel>
      <gds-tab-panel name="eighth">Page 8 content</gds-tab-panel>
      <gds-tab-panel name="ninth">Page 9 content</gds-tab-panel>
    </gds-tabs>
  `},g={render:()=>n`
    <gds-tabs>
      <gds-tab slot="tab" panel="first" size="small">Page 1</gds-tab>
      <gds-tab slot="tab" panel="second" size="small">Page 2</gds-tab>
      <gds-tab slot="tab" panel="third" size="small">Page 3</gds-tab>
      <gds-tab slot="tab" panel="fourth" size="small">Page 4</gds-tab>
      <gds-tab slot="tab" panel="fifth" size="small">Page 5</gds-tab>
      <gds-tab-panel name="first">Page 1 content</gds-tab-panel>
      <gds-tab-panel name="second">Page 2 content</gds-tab-panel>
      <gds-tab-panel name="third">Page 3 content</gds-tab-panel>
      <gds-tab-panel name="fourth">Page 4 content</gds-tab-panel>
      <gds-tab-panel name="fifth">Page 5 content</gds-tab-panel>
      <gds-tab-panel name="sixth">Page 6 content</gds-tab-panel>
      <gds-tab-panel name="seventh">Page 7 content</gds-tab-panel>
      <gds-tab-panel name="eighth">Page 8 content</gds-tab-panel>
      <gds-tab-panel name="ninth">Page 9 content</gds-tab-panel>
    </gds-tabs>
  `},t={render:()=>n`
    <gds-tabs>
      <gds-tab slot="tab">Page 1</gds-tab>
      <gds-tab slot="tab" selected>Selected</gds-tab>
      <gds-tab slot="tab">Page 3</gds-tab>
      <gds-tab-panel>Page 1 content</gds-tab-panel>
      <gds-tab-panel>Page 2 content selected by default</gds-tab-panel>
      <gds-tab-panel>Page 3 content</gds-tab-panel>
    </gds-tabs>
  `},e={render:()=>n`
    <gds-tabs>
      <gds-tab slot="tab" disabled>Page 1</gds-tab>
      <gds-tab slot="tab">Page 2</gds-tab>
      <gds-tab slot="tab" disabled>Page 3</gds-tab>
      <gds-tab slot="tab">Page 4</gds-tab>
      <gds-tab-panel>Page 1 content</gds-tab-panel>
      <gds-tab-panel>Page 2 content</gds-tab-panel>
      <gds-tab-panel>Page 3 content</gds-tab-panel>
      <gds-tab-panel>Page 4 content</gds-tab-panel>
    </gds-tabs>
  `},s={render:()=>n`
    <gds-tabs>
      <gds-tab slot="tab">
        <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
        Overview
        <gds-badge slot="trail">3</gds-badge>
      </gds-tab>
      <gds-tab slot="tab">Details</gds-tab>
      <gds-tab slot="tab">Settings</gds-tab>
      <gds-tab-panel>Overview panel content</gds-tab-panel>
      <gds-tab-panel>Details panel content</gds-tab-panel>
      <gds-tab-panel>Settings panel content</gds-tab-panel>
    </gds-tabs>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-tabs>
      <gds-tab slot="tab" panel="first">Page 1</gds-tab>
      <gds-tab slot="tab" panel="second">Page 2</gds-tab>
      <gds-tab slot="tab" panel="third">Page 3</gds-tab>
      <gds-tab slot="tab" panel="fourth">Page 4</gds-tab>
      <gds-tab slot="tab" panel="fifth">Page 5</gds-tab>
      <gds-tab slot="tab" panel="sixth">Page 6</gds-tab>
      <gds-tab slot="tab" panel="seventh">Page 7</gds-tab>
      <gds-tab slot="tab" panel="eighth">Page 8</gds-tab>
      <gds-tab slot="tab" panel="ninth">Page 9</gds-tab>
      <gds-tab-panel name="first">Page 1 content</gds-tab-panel>
      <gds-tab-panel name="second">Page 2 content</gds-tab-panel>
      <gds-tab-panel name="third">Page 3 content</gds-tab-panel>
      <gds-tab-panel name="fourth">Page 4 content</gds-tab-panel>
      <gds-tab-panel name="fifth">Page 5 content</gds-tab-panel>
      <gds-tab-panel name="sixth">Page 6 content</gds-tab-panel>
      <gds-tab-panel name="seventh">Page 7 content</gds-tab-panel>
      <gds-tab-panel name="eighth">Page 8 content</gds-tab-panel>
      <gds-tab-panel name="ninth">Page 9 content</gds-tab-panel>
    </gds-tabs>
  \`
}`,...a.parameters?.docs?.source},description:{story:"Basic tabs with text content in each panel.",...a.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-tabs>
      <gds-tab slot="tab" panel="first" size="small">Page 1</gds-tab>
      <gds-tab slot="tab" panel="second" size="small">Page 2</gds-tab>
      <gds-tab slot="tab" panel="third" size="small">Page 3</gds-tab>
      <gds-tab slot="tab" panel="fourth" size="small">Page 4</gds-tab>
      <gds-tab slot="tab" panel="fifth" size="small">Page 5</gds-tab>
      <gds-tab-panel name="first">Page 1 content</gds-tab-panel>
      <gds-tab-panel name="second">Page 2 content</gds-tab-panel>
      <gds-tab-panel name="third">Page 3 content</gds-tab-panel>
      <gds-tab-panel name="fourth">Page 4 content</gds-tab-panel>
      <gds-tab-panel name="fifth">Page 5 content</gds-tab-panel>
      <gds-tab-panel name="sixth">Page 6 content</gds-tab-panel>
      <gds-tab-panel name="seventh">Page 7 content</gds-tab-panel>
      <gds-tab-panel name="eighth">Page 8 content</gds-tab-panel>
      <gds-tab-panel name="ninth">Page 9 content</gds-tab-panel>
    </gds-tabs>
  \`
}`,...g.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-tabs>
      <gds-tab slot="tab">Page 1</gds-tab>
      <gds-tab slot="tab" selected>Selected</gds-tab>
      <gds-tab slot="tab">Page 3</gds-tab>
      <gds-tab-panel>Page 1 content</gds-tab-panel>
      <gds-tab-panel>Page 2 content selected by default</gds-tab-panel>
      <gds-tab-panel>Page 3 content</gds-tab-panel>
    </gds-tabs>
  \`
}`,...t.parameters?.docs?.source},description:{story:"Set the initially selected tab by marking a child tab as `selected`.",...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-tabs>
      <gds-tab slot="tab" disabled>Page 1</gds-tab>
      <gds-tab slot="tab">Page 2</gds-tab>
      <gds-tab slot="tab" disabled>Page 3</gds-tab>
      <gds-tab slot="tab">Page 4</gds-tab>
      <gds-tab-panel>Page 1 content</gds-tab-panel>
      <gds-tab-panel>Page 2 content</gds-tab-panel>
      <gds-tab-panel>Page 3 content</gds-tab-panel>
      <gds-tab-panel>Page 4 content</gds-tab-panel>
    </gds-tabs>
  \`
}`,...e.parameters?.docs?.source},description:{story:"Disabled tabs stay visible in the tab list but cannot be selected.",...e.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-tabs>
      <gds-tab slot="tab">
        <gds-icon-circle-info slot="lead"></gds-icon-circle-info>
        Overview
        <gds-badge slot="trail">3</gds-badge>
      </gds-tab>
      <gds-tab slot="tab">Details</gds-tab>
      <gds-tab slot="tab">Settings</gds-tab>
      <gds-tab-panel>Overview panel content</gds-tab-panel>
      <gds-tab-panel>Details panel content</gds-tab-panel>
      <gds-tab-panel>Settings panel content</gds-tab-panel>
    </gds-tabs>
  \`
}`,...s.parameters?.docs?.source},description:{story:"Tabs can display icons before or after the label using lead and trail slots.",...s.parameters?.docs?.description}}};const k=["Basic","SizeSmall","DefaultSelection","DisabledTabs","WithLeadTrailSlots"];export{a as Basic,t as DefaultSelection,e as DisabledTabs,g as SizeSmall,s as WithLeadTrailSlots,k as __namedExportsOrder,_ as default};
