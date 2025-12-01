import{x as d,r as w}from"./iframe-HnSwFImm.js";import"./list-item-BertRwrz.js";import"./preload-helper-Dp1pzeXC.js";import"./grouped-list.component-BlnGdh9U.js";w();const G={title:"Components/Grouped List",component:"gds-grouped-list",subcomponents:{GdsListItem:"gds-list-item"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/grouped-list)
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
  `};var l,a,o;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(o=(a=i.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var g,m,u,v,c;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"By default, the list items are displayed as `flex` containers with `space-between` alignment.",...(c=(v=t.parameters)==null?void 0:v.docs)==null?void 0:c.description}}};var p,y,h,f,V;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(y=e.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:"Elements such as links or buttons can be slotted into the list items.",...(V=(f=e.parameters)==null?void 0:f.docs)==null?void 0:V.description}}};var b,K,k,x,L;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(K=s.parameters)==null?void 0:K.docs)==null?void 0:k.source},description:{story:"The slotted elements can be styled using inline styles or CSS classes.",...(L=(x=s.parameters)==null?void 0:x.docs)==null?void 0:L.description}}};const D=["Basic","WithValues","WithValuesAndAction","AdjustingAppearance"];export{s as AdjustingAppearance,i as Basic,t as WithValues,e as WithValuesAndAction,D as __namedExportsOrder,G as default};
