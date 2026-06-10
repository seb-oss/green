const d={title:"Components/Slider",tags:["autodocs"],parameters:{componentIds:["component-slider"]},argTypes:{unit:{control:"text"},showMinMax:{control:"boolean"}}},s={render:e=>`
  <div class="gds-form-group">
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
  <div class="gds-form-group">
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
  `,name:"Slider with unit label",args:{unit:"kr"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => \`
  <div class="gds-form-group">
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
}`,...s.parameters?.docs?.source},description:{story:'A slider to experiment and adjust values with. The slider allows for easy adjustments of a value and check the updated result immediately. Use it on pages where the user can experiment or adjust values in a scale, such as "How much can I borrow?".',...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => \`
  <div class="gds-form-group">
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
}`,...i.parameters?.docs?.source}}};const l=["Slider","SliderWithUnitLabel"];export{s as Slider,i as SliderWithUnitLabel,l as __namedExportsOrder,d as default};
