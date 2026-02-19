const a={title:"Components/Skeleton loader",tags:["autodocs"],parameters:{componentIds:["component-skeleton-loader"]}},r={render:()=>`
  <div class="skeleton-loader" aria-busy="true">
    Loading content
  </div>`},o={render:()=>`
  <div class="skeleton-loader" aria-busy="true">
    Loading content
  </div>`,decorators:[e=>`<div class="bg-light p-5 m-n5">${e()}</div>`]},t={render:()=>`
  <div class="skeleton-loader skeleton-loader-table" aria-busy="true">
    Loading table
  </div>`},l={render:()=>`

<div class="d-flex align-items-center gx-4">
  <div class="form-group">
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
  </div>`,decorators:[e=>`<div class="row gy-3">${e()}</div>`]},d={render:()=>`
  <div class="skeleton-loader skeleton-loader-chart-bar" aria-busy="true">
    Loading content
  </div>

  <div class="skeleton-loader skeleton-loader-chart-bar skeleton-loader-no-stretch" aria-busy="true">
  Loading chart
  </div>`},n={render:()=>`
  <div class="skeleton-loader skeleton-loader-chart-bar-horizontal" aria-busy="true">
    Loading chart
  </div>`},i={render:()=>`
  <div class="skeleton-loader skeleton-loader-chart-area" aria-busy="true">
    Loading chart
  </div>`},c={render:()=>`
  <div class="skeleton-loader skeleton-loader-chart-bubble" aria-busy="true">
    Loading chart
  </div>`},u=["Default","BackgroundColor","Table","Fill","Chart","Stretch","HorizontalBarChart","HorizontalAreaChart","HorizontalBubbleChart"];export{o as BackgroundColor,s as Chart,r as Default,l as Fill,i as HorizontalAreaChart,n as HorizontalBarChart,c as HorizontalBubbleChart,d as Stretch,t as Table,u as __namedExportsOrder,a as default};
