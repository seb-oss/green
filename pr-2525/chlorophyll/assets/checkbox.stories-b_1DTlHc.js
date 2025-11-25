const C={title:"Components/Checkbox",tags:["autodocs"],parameters:{componentIds:["component-checkbox"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},text:{control:"text"}}},s={render:n=>`<label class="form-control">
  <input id="canvas-checkbox" type="checkbox" class="${n.validation}"  ${n.disabled?"disabled":""} ${n.checked?"checked":""} />
  <span>${n.text}</span>
  <i></i>
</label>`,args:{text:"Click me!",disabled:!1,checked:!1,indeterminate:!1},parameters:{}},a={render:()=>`<div class="form-group">
  <label class="form-control was-validated is-invalid">
    <input type="checkbox" class="is-invalid" />
    <span>Invalid checkbox</span>
    <i></i>
  </label>
  <span class="form-info">Error</span>
</div>`},i={render:()=>`<div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend class="sr-only">Hidden checkbox group legend</legend>
        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>Hidden legend one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required type="checkbox" required />
            <span>Hidden legend two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
    </div>
  `},o={render:()=>`
    <div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Visible checkbox group legend</legend>
        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>Visible legend one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required type="checkbox" required />
            <span>Visible legend two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
    </div>
  `,name:"HorizontalGroup",parameters:{}},e={render:()=>`
    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Checkbox group</legend>
        <span id="checkboxGroupHelp" class="form-info">
          Checkbox group description
        </span>
        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>Normal one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required type="checkbox" required />
            <span>Normal two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="form-info">Neutral</span>
    </div>
    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-valid">
        <legend>Valid checkbox group</legend>
        <span id="checkboxGroupHelp1" class="form-info">
          Checkbox group description
        </span>
        <div>
          <label class="form-control">
            <input required class="is-valid" type="checkbox" />
            <span>Valid one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required class="is-valid" type="checkbox" required />
            <span>Valid two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="form-info">Valid</span>
    </div>
    <div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp2" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span class="form-info">Checkbox group description</span>
        <div>
          <label class="form-control">
            <input required class="is-invalid" type="checkbox" />
            <span>Invalid one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required class="is-invalid" type="checkbox" required />
            <span>Invalid two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="form-info">Error</span>
    </div>
  `},l={render:()=>`
    <div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Checkbox group</legend>        <span id="checkboxGroupHelp" class="form-info">
          Checkbox group description
        </span>        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>One</span>
            <i></i>
          </label>          <label class="form-control">
            <input required type="checkbox" required />
            <span>Two</span>
            <i></i>
          </label>
        </div>
      </fieldset>      <span class="form-info">Neutral</span>
    </div>    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-valid">
        <legend>Valid checkbox group</legend>        <span id="checkboxGroupHelp1" class="form-info">
          Checkbox group description
        </span>        <div>
          <label class="form-control">
            <span>One</span>            <input required class="is-valid" type="checkbox" />            <i></i>
          </label>          <label class="form-control">
            <span>Two</span>            <input required class="is-valid" type="checkbox" required />            <i></i>
          </label>
        </div>
      </fieldset>      <span class="form-info">Valid</span>
    </div>    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp2" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span class="form-info">Checkbox group description</span>        <div>
          <label class="form-control">
            <span>One</span>            <input required class="is-invalid" type="checkbox" />            <i></i>
          </label>          <label class="form-control">
            <span>Two</span>            <input required class="is-invalid" type="checkbox" required />            <i></i>
          </label>
        </div>
      </fieldset>      <span class="form-info">Error</span>
    </div>
  `,name:"HorizontalValidation",parameters:{}};var r,c,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => \`<label class="form-control">
  <input id="canvas-checkbox" type="checkbox" class="\${args.validation}"  \${args.disabled ? 'disabled' : ''} \${args.checked ? 'checked' : ''} />
  <span>\${args.text}</span>
  <i></i>
</label>\`,
  args: {
    text: 'Click me!',
    disabled: false,
    checked: false,
    indeterminate: false
  },
  parameters: {}
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,t,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => \`<div class="form-group">
  <label class="form-control was-validated is-invalid">
    <input type="checkbox" class="is-invalid" />
    <span>Invalid checkbox</span>
    <i></i>
  </label>
  <span class="form-info">Error</span>
</div>\`
}`,...(b=(t=a.parameters)==null?void 0:t.docs)==null?void 0:b.source}}};var u,f,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => \`<div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend class="sr-only">Hidden checkbox group legend</legend>
        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>Hidden legend one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required type="checkbox" required />
            <span>Hidden legend two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
    </div>
  \`
}`,...(m=(f=i.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var v,h,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => \`
    <div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Visible checkbox group legend</legend>
        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>Visible legend one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required type="checkbox" required />
            <span>Visible legend two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
    </div>
  \`,
  name: 'HorizontalGroup',
  parameters: {}
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var k,x,y,q,H;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => \`
    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Checkbox group</legend>
        <span id="checkboxGroupHelp" class="form-info">
          Checkbox group description
        </span>
        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>Normal one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required type="checkbox" required />
            <span>Normal two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="form-info">Neutral</span>
    </div>
    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-valid">
        <legend>Valid checkbox group</legend>
        <span id="checkboxGroupHelp1" class="form-info">
          Checkbox group description
        </span>
        <div>
          <label class="form-control">
            <input required class="is-valid" type="checkbox" />
            <span>Valid one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required class="is-valid" type="checkbox" required />
            <span>Valid two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="form-info">Valid</span>
    </div>
    <div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp2" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span class="form-info">Checkbox group description</span>
        <div>
          <label class="form-control">
            <input required class="is-invalid" type="checkbox" />
            <span>Invalid one</span>
            <i></i>
          </label>
          <label class="form-control">
            <input required class="is-invalid" type="checkbox" required />
            <span>Invalid two</span>
            <i></i>
          </label>
        </div>
      </fieldset>
      <span class="form-info">Error</span>
    </div>
  \`
}`,...(y=(x=e.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:`[Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/form/checkbox)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-checkbox)`,...(H=(q=e.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};var G,w,V;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => \`
    <div class="form-group">
      <fieldset aria-describedby="checkboxGroupHelp">
        <legend>Checkbox group</legend>        <span id="checkboxGroupHelp" class="form-info">
          Checkbox group description
        </span>        <div>
          <label class="form-control">
            <input required type="checkbox" />
            <span>One</span>
            <i></i>
          </label>          <label class="form-control">
            <input required type="checkbox" required />
            <span>Two</span>
            <i></i>
          </label>
        </div>
      </fieldset>      <span class="form-info">Neutral</span>
    </div>    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp1" class="is-valid">
        <legend>Valid checkbox group</legend>        <span id="checkboxGroupHelp1" class="form-info">
          Checkbox group description
        </span>        <div>
          <label class="form-control">
            <span>One</span>            <input required class="is-valid" type="checkbox" />            <i></i>
          </label>          <label class="form-control">
            <span>Two</span>            <input required class="is-valid" type="checkbox" required />            <i></i>
          </label>
        </div>
      </fieldset>      <span class="form-info">Valid</span>
    </div>    <div class="form-group was-validated">
      <fieldset aria-describedby="checkboxGroupHelp2" class="is-invalid">
        <legend>Invalid checkbox group</legend>
        <span class="form-info">Checkbox group description</span>        <div>
          <label class="form-control">
            <span>One</span>            <input required class="is-invalid" type="checkbox" />            <i></i>
          </label>          <label class="form-control">
            <span>Two</span>            <input required class="is-invalid" type="checkbox" required />            <i></i>
          </label>
        </div>
      </fieldset>      <span class="form-info">Error</span>
    </div>
  \`,
  name: 'HorizontalValidation',
  parameters: {}
}`,...(V=(w=l.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const I=["Checkbox","Invalid","Group","HorizontalGroup","Validation","HorizontalValidation"];export{s as Checkbox,i as Group,o as HorizontalGroup,l as HorizontalValidation,a as Invalid,e as Validation,I as __namedExportsOrder,C as default};
