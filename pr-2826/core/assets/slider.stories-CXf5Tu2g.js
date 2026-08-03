import{b as o}from"./iframe-BtRz1KRF.js";import"./slider-BdohJ-My.js";import"./input-D0096Wxo.js";import"./flex-C4FHIgjf.js";import{a as d}from"./argTableProps-BYEK0dO-.js";import"./preload-helper-PPVm8Dsz.js";import"./slider.component-VKnJ-agj.js";import"./localized-decorator-KYOSjjf2.js";import"./form-control-header.component-CH90WHxW.js";import"./badge.component-TGfZrKfG.js";import"./flex.component-Skr22-3e.js";import"./triangle-exclamation.component-BDa8jD2S.js";import"./icon.component-DgvLGhD5.js";import"./card.component--LP8dKE7.js";import"./circle-info.component-C4BSmYyB.js";import"./form-control-host.style-DhqqTItW.js";import"./input.component--KIIAJm3.js";import"./query-async-BP65pPtK.js";import"./cross-small.component-DnXIlSY0.js";import"./textarea.component-i-rW1w5p.js";import"./resize-observer-CfkbZofs.js";const _={title:"Components/Slider",component:"gds-slider",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...d("gds-slider"),size:{options:["large","small"],control:{type:"select"}}}},m="Extended supporting text. Use this area for additional context and guidance.",p=e=>o`
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
    ?range=${e.range}
    ?showValueLabel=${e.showValueLabel}
    ?showTicks=${e.showTicks}
  >
    <span slot="extended-supporting-text">${m}</span>
  </gds-slider>
`,a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},render:p,args:{label:"Label",supportingText:"Support text",min:0,max:100,step:1,value:32}},n={...a,name:"Single Value"},t={...a,name:"Range (Dual Thumb)",args:{...a.args,range:!0,value:24,endValue:68,minLabel:"Min",maxLabel:"Max"}},s={...a,name:"Stepper",args:{...a.args,label:"Amount stepper",supportingText:"Moves in increments of 5",min:0,max:100,step:5,value:50}},r={...a,name:"Ticks + Value Label",render:e=>o`
    <gds-slider
      .label=${e.label}
      .supportingText=${e.supportingText}
      width="400px"
      .size=${e.size}
      .min=${e.min}
      .max=${e.max}
      .step=${e.step}
      .value=${e.value}
      .minLabel=${e.minLabel}
      .maxLabel=${e.maxLabel}
      ?showValueLabel=${e.showValueLabel}
      show-ticks
    >
      <span slot="extended-supporting-text">${m}</span>
      <gds-input
        size="small"
        width="6ch"
        value="100"
        plain
        slot="trail"
      ></gds-input>
    </gds-slider>
  `,args:{...a.args,label:"Amount with ticks",supportingText:"Ticks enabled and shown below the line",min:0,max:100,step:20,value:75,showValueLabel:!0,minLabel:"Min",maxLabel:"Max"}},i={...a,name:"Validation",render:()=>o`
      <form method="dialog">
        <gds-flex flex-direction="column" align-items="flex-start" gap="m">
          <gds-slider
            width="400px"
            label="Transfer amount"
            supporting-text="Choose a value between 20 and 80"
            min="0"
            max="100"
            value="10"
            .validator=${{validate:l=>{if(l.value<20||l.value>80)return[{...l.validity,valid:!1,customError:!0},"Value must be between 20 and 80."]}}}
          >
            <span slot="extended-supporting-text"
              >${m}</span
            >
          </gds-slider>
          <gds-button type="submit">Submit</gds-button>
        </gds-flex>
      </form>
    `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Single Value'
}`,...n.parameters?.docs?.source},description:{story:`A slider lets users pick values from a bounded numeric range.

Use single-value mode for selecting one point, and range mode when users need
both a minimum and maximum value.`,...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Set `range` to render a dual-thumb slider.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"Use `step` to constrain the slider to fixed increments.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Ticks + Value Label',
  render: args => html\`
    <gds-slider
      .label=\${args.label}
      .supportingText=\${args.supportingText}
      width="400px"
      .size=\${args.size}
      .min=\${args.min}
      .max=\${args.max}
      .step=\${args.step}
      .value=\${args.value}
      .minLabel=\${args.minLabel}
      .maxLabel=\${args.maxLabel}
      ?showValueLabel=\${args.showValueLabel}
      show-ticks
    >
      <span slot="extended-supporting-text">\${EXTENDED_SUPPORTING_TEXT}</span>
      <gds-input
        size="small"
        width="6ch"
        value="100"
        plain
        slot="trail"
      ></gds-input>
    </gds-slider>
  \`,
  args: {
    ...DefaultParams.args,
    label: 'Amount with ticks',
    supportingText: 'Ticks enabled and shown below the line',
    min: 0,
    max: 100,
    step: 20,
    value: 75,
    showValueLabel: true,
    minLabel: 'Min',
    maxLabel: 'Max'
  }
}`,...r.parameters?.docs?.source},description:{story:`Optional separator ticks can be shown below or above the slider.
Value labels are rendered above the thumbs.`,...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Sliders support Green Core form validation via validators.",...i.parameters?.docs?.description}}};const A=["SingleValue","Range","Stepper","TicksAndValueLabel","Validation"];export{t as Range,n as SingleValue,s as Stepper,r as TicksAndValueLabel,i as Validation,A as __namedExportsOrder,_ as default};
