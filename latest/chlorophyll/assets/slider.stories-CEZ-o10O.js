const i={title:"Components/Slider",tags:["autodocs"],parameters:{componentIds:["component-slider"]},argTypes:{unit:{control:"text"},showMinMax:{control:"boolean"}}},l={render:e=>`
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
  `},d={render:e=>`
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
  `,name:"Slider with unit label",args:{unit:"kr"}},s=["Slider","SliderWithUnitLabel"];export{l as Slider,d as SliderWithUnitLabel,s as __namedExportsOrder,i as default};
