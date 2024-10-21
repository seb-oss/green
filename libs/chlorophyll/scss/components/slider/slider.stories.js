const Template = ({ unitLabel, showMinMax }) => {
  return `
  <div class="form-group">
    <div class="gds-slider-label-container">
        <label for="gds-slider" id="gds-slider-label">Slider label text in one line</label>
        ${
          unitLabel
            ? `<div class="group group-border group-focus">
          <input type="number" aria-labelledby="gds-slider-label" />
          <span class="form-text">${unitLabel}</span>
        </div>
        `
            : '<input type="number" aria-labelledby="gds-slider-label" />'
        }
    </div>
    <input type="range" id="gds-slider" />
    ${
      showMinMax === true
        ? `
          <div class="gds-slider-min-max">
            <div class="gds-slider-min">0</div>
            <div class="gds-slider-max">100</div>
          </div>`
        : ''
    }
  </div>
  `
}

export default {
  title: 'Components/Slider',

  parameters: {
    componentIds: ['component-slider'],
  },

  argTypes: {
    unitLabel: {
      control: 'text',
    },

    showMinMax: {
      control: 'boolean',
    },
  },
}

export const Slider = {
  render: Template.bind({}),
  name: 'Slider',
}

export const SliderWithUnitLabel = {
  render: Template.bind({}),
  name: 'Slider with unit label',

  args: {
    unitLabel: 'Kr',
  },
}
