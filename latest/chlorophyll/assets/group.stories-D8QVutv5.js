const T={title:"Components/Group",tags:["autodocs"],parameters:{componentIds:["component-input"]}},t={render:()=>`
    <div class="gds-group">
  <input type="text" placeholder="Input field" class="gds-input" />
  <button type="button" class="gds-button">Normal button</button>
</div>`},s={render:()=>`
    <form>
  <div class="gds-form-group">
    <div class="gds-group">
      <input type="text" placeholder="First input field" class="gds-input" />
      <input type="text" placeholder="Second input field" class="gds-input" />
      <input type="text" placeholder="Third input field" class="gds-input" />
    </div>
  </div>

  <div class="gds-form-group">
    <div class="gds-group is-invalid">
      <input type="text" placeholder="Forth input field" class="gds-input" />
      <input type="text" placeholder="Fifth input field" class="gds-input" />
      <input type="text" placeholder="Sixth input field" class="gds-input" />
    </div>
    <span class="gds-form-info">Error</span>
  </div>
</form>`},n={render:()=>`
    <div class="gds-group">
      <button type="button" class="gds-button secondary">First button</button>
      <button type="button" class="gds-button secondary">Second button</button>
      <button type="button" class="gds-button secondary active">Third button</button>
    </div>
    <br>
    <div class="gds-group size-sm">
      <button type="button" class="gds-button ghost-dark">First button</button>
      <button type="button" class="gds-button ghost-dark">Second button</button>
      <button type="button" class="gds-button ghost-dark active">Third button</button>
      <button type="button" class="gds-button ghost-dark">Forth button</button>
    </div>`},o={render:()=>`
    <form>
      <div class="gds-form-group">
        <div class="gds-group gds-group-border gds-group-focus">
          <input type="text" placeholder="Normal input" class="gds-input" />
          <span class="gds-form-text">First static</span>
        </div>
      </div>

      <div class="gds-form-group">
        <div class="gds-group gds-group-border gds-group-focus is-valid">
          <input type="text" placeholder="Successful input" class="gds-input" />
          <span class="gds-form-text">Second static</span>
        </div>
        <span class="gds-form-info">Success</span>
      </div>

      <div class="gds-form-group">
        <div class="gds-group gds-group-border gds-group-focus is-invalid">
          <input type="text" placeholder="Erroneous input" class="gds-input" />
          <span class="gds-form-text">Third static</span>
        </div>
        <span class="gds-form-info">Error</span>
      </div>
    </form>`},r={render:()=>`
    <div class="gds-group gds-group-border">
      <input type="text" placeholder="Input and buttons" class="gds-input" />
      <button type="button" class="gds-button secondary">Default button</button>
      <button type="button" class="gds-button primary">Primary button</button>
    </div>`},u={render:()=>`
  <div class="gds-group size-sm">
    <input type="text" placeholder="Small input" class="gds-input small" />
    <button type="button" class="gds-button primary small">Small button</button>
  </div>
  <br>
  <br>
  <div class="gds-group">
    <input type="text" placeholder="Normal input" class="gds-input" />
    <button type="button" class="gds-button primary">Normal button</button>
  </div>
  <br>
  <br>
  <div class="gds-group size-lg">
    <input type="text" placeholder="Large input" class="gds-input large" />
    <button type="button" class="gds-button primary large">Large button</button>
  </div>`};var e,d,p;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => \`
    <div class="gds-group">
  <input type="text" placeholder="Input field" class="gds-input" />
  <button type="button" class="gds-button">Normal button</button>
</div>\`
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var a,i,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => \`
    <form>
  <div class="gds-form-group">
    <div class="gds-group">
      <input type="text" placeholder="First input field" class="gds-input" />
      <input type="text" placeholder="Second input field" class="gds-input" />
      <input type="text" placeholder="Third input field" class="gds-input" />
    </div>
  </div>

  <div class="gds-form-group">
    <div class="gds-group is-invalid">
      <input type="text" placeholder="Forth input field" class="gds-input" />
      <input type="text" placeholder="Fifth input field" class="gds-input" />
      <input type="text" placeholder="Sixth input field" class="gds-input" />
    </div>
    <span class="gds-form-info">Error</span>
  </div>
</form>\`
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,g,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => \`
    <div class="gds-group">
      <button type="button" class="gds-button secondary">First button</button>
      <button type="button" class="gds-button secondary">Second button</button>
      <button type="button" class="gds-button secondary active">Third button</button>
    </div>
    <br>
    <div class="gds-group size-sm">
      <button type="button" class="gds-button ghost-dark">First button</button>
      <button type="button" class="gds-button ghost-dark">Second button</button>
      <button type="button" class="gds-button ghost-dark active">Third button</button>
      <button type="button" class="gds-button ghost-dark">Forth button</button>
    </div>\`
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var m,v,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => \`
    <form>
      <div class="gds-form-group">
        <div class="gds-group gds-group-border gds-group-focus">
          <input type="text" placeholder="Normal input" class="gds-input" />
          <span class="gds-form-text">First static</span>
        </div>
      </div>

      <div class="gds-form-group">
        <div class="gds-group gds-group-border gds-group-focus is-valid">
          <input type="text" placeholder="Successful input" class="gds-input" />
          <span class="gds-form-text">Second static</span>
        </div>
        <span class="gds-form-info">Success</span>
      </div>

      <div class="gds-form-group">
        <div class="gds-group gds-group-border gds-group-focus is-invalid">
          <input type="text" placeholder="Erroneous input" class="gds-input" />
          <span class="gds-form-text">Third static</span>
        </div>
        <span class="gds-form-info">Error</span>
      </div>
    </form>\`
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,h,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => \`
    <div class="gds-group gds-group-border">
      <input type="text" placeholder="Input and buttons" class="gds-input" />
      <button type="button" class="gds-button secondary">Default button</button>
      <button type="button" class="gds-button primary">Primary button</button>
    </div>\`
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,F,I;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => \`
  <div class="gds-group size-sm">
    <input type="text" placeholder="Small input" class="gds-input small" />
    <button type="button" class="gds-button primary small">Small button</button>
  </div>
  <br>
  <br>
  <div class="gds-group">
    <input type="text" placeholder="Normal input" class="gds-input" />
    <button type="button" class="gds-button primary">Normal button</button>
  </div>
  <br>
  <br>
  <div class="gds-group size-lg">
    <input type="text" placeholder="Large input" class="gds-input large" />
    <button type="button" class="gds-button primary large">Large button</button>
  </div>\`
}`,...(I=(F=u.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const k=["Input","Inputs","ButtonGroup","StaticText","InputAndButtons","Sizes"];export{n as ButtonGroup,t as Input,r as InputAndButtons,s as Inputs,u as Sizes,o as StaticText,k as __namedExportsOrder,T as default};
