import"./popover-72f8ee23.js";import"./button-13a0692a.js";import"./grouped-list-afc9fbf1.js";import"./chevron-bottom-52ebe1e4.js";import"./lit-element-2a5e401f.js";import"./gds-element-24e794df.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./class-map-43969d56.js";import"./directive-12249aa5.js";import"./lit-localize-87611c26.js";import"./floating-ui.dom-373c8bf6.js";import"./watch-c4961afe.js";import"./transitional-styles-494a8762.js";import"./cross-small-3fee855f.js";import"./icon-881ed735.js";import"./when-cf7256a5.js";import"./form-control-cdf6d873.js";import"./constrain-slots-08d8606c.js";import"./tokens.style-1e462ec5.js";const P={title:"Components/Popover",component:"gds-popover",parameters:{layout:"centered",docs:{description:{component:"A popover is a transient view that appears above other content. It is used by components such as dropdowns."}}},tags:["autodocs"]},p={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`
  <gds-button rank="secondary" slot="trigger">
    Show popover <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
  </gds-button>
  <div style="padding: 1rem; padding-top: 0">
    <h3>This is a custom popover!</h3>
    <p>It can contain any content you need, including other components.</p>
    <gds-button rank="primary">Such as buttons!</gds-button>
  </div>
`,calcMaxWidth:()=>"300px",placement:"bottom-center"}},t={...p};var e,o,r,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source},description:{story:"The popover can be used declaratively by adding a trigger button and content inside the popover element, like in the example below.\n\nIt is also possible to set the trigger and anchor by supplying DOM references (wrapped in promises) to the `triggerRef` and `anchorRef`\nproperties. This is useful when the trigger and anchor needs to be different elements.",...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.description}}};const S=["Usage"];export{t as Usage,S as __namedExportsOrder,P as default};
