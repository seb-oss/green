export default {
  title: 'Components/Slider',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-slider'],
  },

  argTypes: {
    unit: {
      control: 'text',
    },

    showMinMax: {
      control: 'boolean',
    },
  },
}

/**
 * A slider to experiment and adjust values with. The slider allows for easy adjustments of a value and check the updated result immediately. Use it on pages where the user can experiment or adjust values in a scale, such as "How much can I borrow?".
 */
export const Slider = {
  render: (args) => `
  <div class="gds-form-group">
    <div class="gds-slider-label-container">
        <label for="gds-slider" id="gds-slider-label">Slider label text in one line</label>
        ${
          args.unit
            ? `<div class="group group-border group-focus">
          <input type="number" aria-labelledby="gds-slider-label" />
          <span class="form-text">${args.unit}</span>
        </div>
        `
            : '<input type="number" aria-labelledby="gds-slider-label" />'
        }
    </div>
    <input type="range" id="gds-slider" />
    ${
      args.showMinMax === true
        ? `
          <div class="gds-slider-min-max">
            <div class="gds-slider-min">0</div>
            <div class="gds-slider-max">100</div>
          </div>`
        : ''
    }
  </div>
  `,
}

export const SliderWithUnitLabel = {
  render: (args) => `
  <div class="gds-form-group">
    <div class="gds-slider-label-container">
        <label for="gds-slider" id="gds-slider-label">Slider label text in one line</label>
        ${
          args.unit
            ? `<div class="group group-border group-focus">
          <input type="number" aria-labelledby="gds-slider-label" />
          <span class="form-text">${args.unit}</span>
        </div>
        `
            : '<input type="number" aria-labelledby="gds-slider-label" />'
        }
    </div>
    <input type="range" id="gds-slider" />
    ${
      args.showMinMax === true
        ? `
          <div class="gds-slider-min-max">
            <div class="gds-slider-min">0</div>
            <div class="gds-slider-max">100</div>
          </div>`
        : ''
    }
  </div>
  `,
  name: 'Slider with unit label',
  args: {
    unit: 'kr',
  },
}
