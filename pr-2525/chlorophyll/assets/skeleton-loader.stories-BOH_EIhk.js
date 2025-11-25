const Q={title:"Components/Skeleton loader",tags:["autodocs"],parameters:{componentIds:["component-skeleton-loader"]}},e={render:()=>`
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
  </div>`};var c,u,m,p,v;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader" aria-busy="true">
    Loading content
  </div>\`
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:`Skeleton loaders are used to show a loading state while data is being fetched.
A skeleton loader for generic content.`,...(v=(p=e.parameters)==null?void 0:p.docs)==null?void 0:v.description}}};var h,k,b,g,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader" aria-busy="true">
    Loading content
  </div>\`,
  decorators: [story => \`<div class="bg-light p-5 m-n5">\${story()}</div>\`]
}`,...(b=(k=r.parameters)==null?void 0:k.docs)==null?void 0:b.source},description:{story:"Since examples here are rendered in canvas elements that resemble using skeleton loaders in cards, here's and example of a skeleton loader against the default background color.",...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var f,x,L;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader skeleton-loader-table" aria-busy="true">
    Loading table
  </div>\`
}`,...(L=(x=t.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var w,S,C,z,I;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => \`

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
</div>\`
}`,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source},description:{story:"Use `skeleton-loader-fill` to create custom skeleton templates for things like forms, buttons etc. Add utility classes like `rounded` or `rounded-circle` to adjust the shape and specify size using custom class or with inline styles.",...(I=(z=a.parameters)==null?void 0:z.docs)==null?void 0:I.description}}};var B,H,A,$,_;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(H=s.parameters)==null?void 0:H.docs)==null?void 0:A.source},description:{story:"Skeleton loaders for donut, bar and area charts placed inside a flexbox grid.",...(_=($=s.parameters)==null?void 0:$.docs)==null?void 0:_.description}}};var D,F,N,T,U;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader skeleton-loader-chart-bar" aria-busy="true">
    Loading content
  </div>

  <div class="skeleton-loader skeleton-loader-chart-bar skeleton-loader-no-stretch" aria-busy="true">
  Loading chart
  </div>\`
}`,...(N=(F=o.parameters)==null?void 0:F.docs)==null?void 0:N.source},description:{story:"Use the `skeleton-loader-no-stretch` modifier to disable mask stretch.",...(U=(T=o.parameters)==null?void 0:T.docs)==null?void 0:U.description}}};var j,E,O;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader skeleton-loader-chart-bar-horizontal" aria-busy="true">
    Loading chart
  </div>\`
}`,...(O=(E=n.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var q,G,J;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader skeleton-loader-chart-area" aria-busy="true">
    Loading chart
  </div>\`
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,P;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => \`
  <div class="skeleton-loader skeleton-loader-chart-bubble" aria-busy="true">
    Loading chart
  </div>\`
}`,...(P=(M=l.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const R=["Default","BackgroundColor","Table","Fill","Chart","Stretch","HorizontalBarChart","HorizontalAreaChart","HorizontalBubbleChart"];export{r as BackgroundColor,s as Chart,e as Default,a as Fill,d as HorizontalAreaChart,n as HorizontalBarChart,l as HorizontalBubbleChart,o as Stretch,t as Table,R as __namedExportsOrder,Q as default};
