const c={title:"Components/Skeleton loader",tags:["autodocs"],parameters:{componentIds:["component-skeleton-loader"]}},e={render:()=>`
  <div class="skeleton-loader" aria-busy="true">
    Loading content
  </div>`},r={render:()=>`
  <div class="skeleton-loader" aria-busy="true">
    Loading content
  </div>`,decorators:[i=>`<div class="bg-light p-5 m-n5">${i()}</div>`]},t={render:()=>`
  <div class="skeleton-loader skeleton-loader-table" aria-busy="true">
    Loading table
  </div>`},a={render:()=>`

<div class="d-flex align-items-center gx-4">
  <div class="gds-form-group">
    <label for="inputInvalid">Input label</label>

    <span class="form-info">
      Lorem ipsum very long description of input and what should be entered
    </span>

    <input id="inputInvalid" type="text" />

    <span class="form-info">Neutral</span>
  </div>
  <div>
  <div class="skeleton-loader skeleton-loader-fill mb-3 rounded" aria-busy="true" style="height:1.125rem; width:100px;"></div>
  <div class="skeleton-loader skeleton-loader-fill mb-3 rounded" aria-busy="true" style="height:1.75rem;width:160px;"></div>
  <div class="skeleton-loader skeleton-loader-fill mb-3 rounded" aria-busy="true" style="height:2.75rem;width:200px;">
    Loading form
  </div>
  <div class="skeleton-loader skeleton-loader-fill mb-4 rounded" aria-busy="true" style="height:1rem;width: 80px;"></div>
  </div>
  <div class="skeleton-loader skeleton-loader-fill mb-3 rounded-circle" aria-busy="true" style="min-height:100px;width:100px;">
    Loading circle
  </div>
</div>`},s={render:()=>`
    <div class="col-12 col-sm">
    <div class="mx-sm-5 my-5 skeleton-loader skeleton-loader-chart-donut skeleton-loader-no-stretch" aria-busy="true">
      Loading chart
    </div>
  </div>

  <div class="col-12 col-sm">
    <div class="mx-sm-5 my-5 skeleton-loader skeleton-loader-chart-bar skeleton-loader-no-stretch" aria-busy="true">
      Loading chart
    </div>
  </div>

  <div class="col-12 col-sm">
    <div class="mx-sm-5 my-5 skeleton-loader skeleton-loader-chart-area skeleton-loader-no-stretch" aria-busy="true">
      Loading chart
    </div>
  </div>`,decorators:[i=>`<div class="row gy-3">${i()}</div>`]},o={render:()=>`
  <div class="skeleton-loader skeleton-loader-chart-bar" aria-busy="true">
    Loading content
  </div>

  <div class="skeleton-loader skeleton-loader-chart-bar skeleton-loader-no-stretch" aria-busy="true">
  Loading chart
  </div>`},n={render:()=>`
  <div class="skeleton-loader skeleton-loader-chart-bar-horizontal" aria-busy="true">
    Loading chart
  </div>`},d={render:()=>`
  <div class="skeleton-loader skeleton-loader-chart-area" aria-busy="true">
    Loading chart
  </div>`},l={render:()=>`
  <div class="skeleton-loader skeleton-loader-chart-bubble" aria-busy="true">
    Loading chart
  </div>`};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader" aria-busy="true">
    Loading content
  </div>\`
}`,...e.parameters?.docs?.source},description:{story:`Skeleton loaders are used to show a loading state while data is being fetched.
A skeleton loader for generic content.`,...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader" aria-busy="true">
    Loading content
  </div>\`,
  decorators: [story => \`<div class="bg-light p-5 m-n5">\${story()}</div>\`]
}`,...r.parameters?.docs?.source},description:{story:"Since examples here are rendered in canvas elements that resemble using skeleton loaders in cards, here's and example of a skeleton loader against the default background color.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader skeleton-loader-table" aria-busy="true">
    Loading table
  </div>\`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => \`

<div class="d-flex align-items-center gx-4">
  <div class="gds-form-group">
    <label for="inputInvalid">Input label</label>

    <span class="form-info">
      Lorem ipsum very long description of input and what should be entered
    </span>

    <input id="inputInvalid" type="text" />

    <span class="form-info">Neutral</span>
  </div>
  <div>
  <div class="skeleton-loader skeleton-loader-fill mb-3 rounded" aria-busy="true" style="height:1.125rem; width:100px;"></div>
  <div class="skeleton-loader skeleton-loader-fill mb-3 rounded" aria-busy="true" style="height:1.75rem;width:160px;"></div>
  <div class="skeleton-loader skeleton-loader-fill mb-3 rounded" aria-busy="true" style="height:2.75rem;width:200px;">
    Loading form
  </div>
  <div class="skeleton-loader skeleton-loader-fill mb-4 rounded" aria-busy="true" style="height:1rem;width: 80px;"></div>
  </div>
  <div class="skeleton-loader skeleton-loader-fill mb-3 rounded-circle" aria-busy="true" style="min-height:100px;width:100px;">
    Loading circle
  </div>
</div>\`
}`,...a.parameters?.docs?.source},description:{story:"Use `skeleton-loader-fill` to create custom skeleton templates for things like forms, buttons etc. Add utility classes like `rounded` or `rounded-circle` to adjust the shape and specify size using custom class or with inline styles.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="col-12 col-sm">
    <div class="mx-sm-5 my-5 skeleton-loader skeleton-loader-chart-donut skeleton-loader-no-stretch" aria-busy="true">
      Loading chart
    </div>
  </div>

  <div class="col-12 col-sm">
    <div class="mx-sm-5 my-5 skeleton-loader skeleton-loader-chart-bar skeleton-loader-no-stretch" aria-busy="true">
      Loading chart
    </div>
  </div>

  <div class="col-12 col-sm">
    <div class="mx-sm-5 my-5 skeleton-loader skeleton-loader-chart-area skeleton-loader-no-stretch" aria-busy="true">
      Loading chart
    </div>
  </div>\`,
  decorators: [story => \`<div class="row gy-3">\${story()}</div>\`]
}`,...s.parameters?.docs?.source},description:{story:"Skeleton loaders for donut, bar and area charts placed inside a flexbox grid.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader skeleton-loader-chart-bar" aria-busy="true">
    Loading content
  </div>

  <div class="skeleton-loader skeleton-loader-chart-bar skeleton-loader-no-stretch" aria-busy="true">
  Loading chart
  </div>\`
}`,...o.parameters?.docs?.source},description:{story:"Use the `skeleton-loader-no-stretch` modifier to disable mask stretch.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader skeleton-loader-chart-bar-horizontal" aria-busy="true">
    Loading chart
  </div>\`
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader skeleton-loader-chart-area" aria-busy="true">
    Loading chart
  </div>\`
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader skeleton-loader-chart-bubble" aria-busy="true">
    Loading chart
  </div>\`
}`,...l.parameters?.docs?.source}}};const u=["Default","BackgroundColor","Table","Fill","Chart","Stretch","HorizontalBarChart","HorizontalAreaChart","HorizontalBubbleChart"];export{r as BackgroundColor,s as Chart,e as Default,a as Fill,d as HorizontalAreaChart,n as HorizontalBarChart,l as HorizontalBubbleChart,o as Stretch,t as Table,u as __namedExportsOrder,c as default};
