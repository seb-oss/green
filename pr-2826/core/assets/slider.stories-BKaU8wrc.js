import{b as l}from"./iframe-P4Ox4Kkx.js";import"./slider-CMEWi_-_.js";import"./flex-BkIWLlGE.js";import{a as d}from"./argTableProps-D0L2oOd1.js";import"./preload-helper-PPVm8Dsz.js";import"./slider.component-B5rxNLfp.js";import"./localized-decorator-D-GA75Wc.js";import"./form-control-header.component-1F2bkHNi.js";import"./badge.component-CPKyLyMq.js";import"./flex.component-DzWItV-N.js";import"./triangle-exclamation.component-CArhEV8N.js";import"./icon.component-DTmrNxMz.js";import"./card.component-i21J4gbb.js";import"./circle-info.component-CHIiXgHa.js";import"./form-control-host.style-BNa0SSqf.js";const $={title:"Components/Slider",component:"gds-slider",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...d("gds-slider"),size:{options:["large","small"],control:{type:"select"}},ticksPosition:{options:["bottom","top"],control:{type:"select"}}}},m="Extended supporting text. Use this area for additional context and guidance.",p=e=>l`
  <gds-slider
    .label=${e.label}
    .supportingText=${e.supportingText}
    width="400px"
    .size=${e.size}
    .min=${e.min}
    .max=${e.max}
    .step=${e.step}
    .value=${e.value}
    .endValue=${e.endValue}
    .minLabel=${e.minLabel}
    .maxLabel=${e.maxLabel}
    .ticksPosition=${e.ticksPosition}
    ?range=${e.range}
    ?showTicks=${e.showTicks}
    ?showValueLabel=${e.showValueLabel}
  >
    <span slot="extended-supporting-text">${m}</span>
  </gds-slider>
`,a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},render:p,args:{label:"Label",supportingText:"Support text",min:0,max:100,step:1,value:32,minLabel:"Min",maxLabel:"Max"}},t={...a,name:"Single Value"},n={...a,name:"Range (Dual Thumb)",args:{...a.args,range:!0,value:24,endValue:68,minLabel:"Min",maxLabel:"Max"}},r={...a,name:"Stepper",args:{...a.args,label:"Amount stepper",supportingText:"Moves in increments of 5",min:0,max:100,step:5,value:50}},s={...a,name:"Ticks + Value Label",args:{...a.args,label:"Amount with ticks",supportingText:"Ticks enabled and shown below the line",min:0,max:100,step:5,value:75,showTicks:!0,ticksPosition:"bottom",showValueLabel:!0}},o={...a,name:"Validation",render:()=>l`
      <form method="dialog">
        <gds-flex flex-direction="column" align-items="flex-start" gap="m">
          <gds-slider
            width="400px"
            label="Transfer amount"
            supporting-text="Choose a value between 20 and 80"
            min="0"
            max="100"
            value="10"
            .validator=${{validate:i=>{if(i.value<20||i.value>80)return[{...i.validity,valid:!1,customError:!0},"Value must be between 20 and 80."]}}}
          >
            <span slot="extended-supporting-text"
              >${m}</span
            >
          </gds-slider>
          <gds-button type="submit">Submit</gds-button>
        </gds-flex>
      </form>
    `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Single Value'
}`,...t.parameters?.docs?.source},description:{story:`A slider lets users pick values from a bounded numeric range.

Use single-value mode for selecting one point, and range mode when users need
both a minimum and maximum value.`,...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Range (Dual Thumb)',
  args: {
    ...DefaultParams.args,
    range: true,
    value: 24,
    endValue: 68,
    minLabel: 'Min',
    maxLabel: 'Max'
  }
}`,...n.parameters?.docs?.source},description:{story:"Set `range` to render a dual-thumb slider.",...n.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Stepper',
  args: {
    ...DefaultParams.args,
    label: 'Amount stepper',
    supportingText: 'Moves in increments of 5',
    min: 0,
    max: 100,
    step: 5,
    value: 50
  }
}`,...r.parameters?.docs?.source},description:{story:"Use `step` to constrain the slider to fixed increments.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Ticks + Value Label',
  args: {
    ...DefaultParams.args,
    label: 'Amount with ticks',
    supportingText: 'Ticks enabled and shown below the line',
    min: 0,
    max: 100,
    step: 5,
    value: 75,
    showTicks: true,
    ticksPosition: 'bottom',
    showValueLabel: true
  }
}`,...s.parameters?.docs?.source},description:{story:`Optional separator ticks can be shown below or above the slider.
Value labels are rendered above the thumbs.`,...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => {
    const validator: GdsValidator = {
      validate: (el: GdsSlider) => {
        if (el.value < 20 || el.value > 80) return [{
          ...el.validity,
          valid: false,
          customError: true
        }, 'Value must be between 20 and 80.'];
      }
    };
    return html\`
      <form method="dialog">
        <gds-flex flex-direction="column" align-items="flex-start" gap="m">
          <gds-slider
            width="400px"
            label="Transfer amount"
            supporting-text="Choose a value between 20 and 80"
            min="0"
            max="100"
            value="10"
            .validator=\${validator}
          >
            <span slot="extended-supporting-text"
              >\${EXTENDED_SUPPORTING_TEXT}</span
            >
          </gds-slider>
          <gds-button type="submit">Submit</gds-button>
        </gds-flex>
      </form>
    \`;
  }
}`,...o.parameters?.docs?.source},description:{story:"Sliders support Green Core form validation via validators.",...o.parameters?.docs?.description}}};const y=["SingleValue","Range","Stepper","TicksAndValueLabel","Validation"];export{n as Range,t as SingleValue,r as Stepper,s as TicksAndValueLabel,o as Validation,y as __namedExportsOrder,$ as default};
