const p={title:"Components/Slider",tags:["autodocs"],parameters:{componentIds:["component-slider"]},argTypes:{unit:{control:"text"},showMinMax:{control:"boolean"}}},s={render:e=>`
  <div class="form-group">
    <div class="gds-slider-label-container">
        <label for="gds-slider" id="gds-slider-label">Slider label text in one line</label>
        ${e.unit?`<div class="group group-border group-focus">
          <input type="number" aria-labelledby="gds-slider-label" />
          <span class="form-text">${e.unit}</span>
        </div>
        `:'<input type="number" aria-labelledby="gds-slider-label" />'}
    </div>
    <input type="range" id="gds-slider" />
    ${e.showMinMax===!0?`
          <div class="gds-slider-min-max">
            <div class="gds-slider-min">0</div>
            <div class="gds-slider-max">100</div>
          </div>`:""}
  </div>
  `},i={render:e=>`
  <div class="form-group">
    <div class="gds-slider-label-container">
        <label for="gds-slider" id="gds-slider-label">Slider label text in one line</label>
        ${e.unit?`<div class="group group-border group-focus">
          <input type="number" aria-labelledby="gds-slider-label" />
          <span class="form-text">${e.unit}</span>
        </div>
        `:'<input type="number" aria-labelledby="gds-slider-label" />'}
    </div>
    <input type="range" id="gds-slider" />
    ${e.showMinMax===!0?`
          <div class="gds-slider-min-max">
            <div class="gds-slider-min">0</div>
            <div class="gds-slider-max">100</div>
          </div>`:""}
  </div>
  `,name:"Slider with unit label",args:{unit:"kr"}};var l,d,r,a,n;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => \`
  <div class="form-group">
    <div class="gds-slider-label-container">
        <label for="gds-slider" id="gds-slider-label">Slider label text in one line</label>
        \${args.unit ? \`<div class="group group-border group-focus">
          <input type="number" aria-labelledby="gds-slider-label" />
          <span class="form-text">\${args.unit}</span>
        </div>
        \` : '<input type="number" aria-labelledby="gds-slider-label" />'}
    </div>
    <input type="range" id="gds-slider" />
    \${args.showMinMax === true ? \`
          <div class="gds-slider-min-max">
            <div class="gds-slider-min">0</div>
            <div class="gds-slider-max">100</div>
          </div>\` : ''}
  </div>
  \`
}`,...(r=(d=s.parameters)==null?void 0:d.docs)==null?void 0:r.source},description:{story:'A slider to experiment and adjust values with. The slider allows for easy adjustments of a value and check the updated result immediately. Use it on pages where the user can experiment or adjust values in a scale, such as "How much can I borrow?".',...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.description}}};var t,o,u;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => \`
  <div class="form-group">
    <div class="gds-slider-label-container">
        <label for="gds-slider" id="gds-slider-label">Slider label text in one line</label>
        \${args.unit ? \`<div class="group group-border group-focus">
          <input type="number" aria-labelledby="gds-slider-label" />
          <span class="form-text">\${args.unit}</span>
        </div>
        \` : '<input type="number" aria-labelledby="gds-slider-label" />'}
    </div>
    <input type="range" id="gds-slider" />
    \${args.showMinMax === true ? \`
          <div class="gds-slider-min-max">
            <div class="gds-slider-min">0</div>
            <div class="gds-slider-max">100</div>
          </div>\` : ''}
  </div>
  \`,
  name: 'Slider with unit label',
  args: {
    unit: 'kr'
  }
}`,...(u=(o=i.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const c=["Slider","SliderWithUnitLabel"];export{s as Slider,i as SliderWithUnitLabel,c as __namedExportsOrder,p as default};
