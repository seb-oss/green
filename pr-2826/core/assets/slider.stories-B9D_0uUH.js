import{b as o}from"./iframe-DX1nX-Km.js";import"./slider-CmbGSGiO.js";import"./input-DOXginYt.js";import"./flex-BAN0r9E4.js";import{a as u}from"./argTableProps-DMmoMgv3.js";import"./preload-helper-PPVm8Dsz.js";import"./slider.component-Q7YsQfWb.js";import"./localized-decorator-AYtcdh4h.js";import"./form-control-header.component-DdFioqGF.js";import"./badge.component-B8ghN_bp.js";import"./flex.component-DD6Mxhry.js";import"./triangle-exclamation.component-BC8uZ-d-.js";import"./icon.component-oDcl534X.js";import"./card.component-BdGe1mAX.js";import"./circle-info.component-CmZETVre.js";import"./form-control-host.style-uj7_cm1k.js";import"./input.component-VfJa5T0T.js";import"./query-async-LaamXetY.js";import"./cross-small.component-D8AYNx9I.js";import"./textarea.component-fh1sz2Y5.js";import"./resize-observer-CfkbZofs.js";const I={title:"Components/Slider",component:"gds-slider",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...u("gds-slider"),size:{options:["large","small"],control:{type:"select"}}}},d="Extended supporting text. Use this area for additional context and guidance.",m=e=>o`
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
    .leadLabel=${e.leadLabel}
    .trailLabel=${e.trailLabel}
    ?range=${e.range}
    ?showValueLabel=${e.showValueLabel}
    ?showTicks=${e.showTicks}
  >
    <span slot="extended-supporting-text">${d}</span>
  </gds-slider>
`,a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},render:m,args:{label:"Label",supportingText:"Support text",min:0,max:100,step:1,value:32}},t={...a,name:"Single Value"},n={...a,name:"Range (Dual Thumb)",args:{...a.args,range:!0,value:24,endValue:68,leadLabel:"Min",trailLabel:"Max"}},s={...a,name:"Stepper",args:{...a.args,label:"Amount stepper",supportingText:"Moves in increments of 5",min:0,max:100,step:5,value:50}},r={...a,name:"Ticks + Value Label",render:e=>o`
    <gds-slider
      .label=${e.label}
      .supportingText=${e.supportingText}
      width="400px"
      .size=${e.size}
      .min=${e.min}
      .max=${e.max}
      .step=${e.step}
      .value=${e.value}
      .leadLabel=${e.leadLabel}
      .trailLabel=${e.trailLabel}
      ?showValueLabel=${e.showValueLabel}
      show-ticks
    >
      <span slot="extended-supporting-text">${d}</span>
      <gds-input
        size="small"
        width="6ch"
        value="100"
        plain
        slot="trail"
      ></gds-input>
    </gds-slider>
  `,args:{...a.args,label:"Amount with ticks",supportingText:"Ticks enabled and shown below the line",min:0,max:100,step:20,value:75,showValueLabel:!0,leadLabel:"Min",trailLabel:"Max"}},l={...a,name:"With Trail Input",args:{...a.args,label:"Label",supportingText:"Support text"},render:e=>o`
    <gds-slider
      .label=${e.label}
      .supportingText=${e.supportingText}
      width="400px"
      step="40"
      max="400"
      .size=${e.size}
      .value=${e.value}
      lead-label="Min"
      trail-label="Max"
      show-trail-input
      show-ticks
      hide-bound-editors
    >
      <span slot="extended-supporting-text">${d}</span>
    </gds-slider>
  `},i={...a,name:"Validation",render:()=>o`
      <form method="dialog">
        <gds-flex flex-direction="column" align-items="flex-start" gap="m">
          <gds-slider
            width="400px"
            label="Transfer amount"
            supporting-text="Choose a value between 20 and 80"
            min="0"
            max="100"
            value="10"
            .validator=${{validate:p=>{if(p.value<20||p.value>80)return[{...p.validity,valid:!1,customError:!0},"Value must be between 20 and 80."]}}}
          >
            <span slot="extended-supporting-text"
              >${d}</span
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
    leadLabel: 'Min',
    trailLabel: 'Max'
  }
}`,...n.parameters?.docs?.source},description:{story:"Set `range` to render a dual-thumb slider.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      .leadLabel=\${args.leadLabel}
      .trailLabel=\${args.trailLabel}
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
    leadLabel: 'Min',
    trailLabel: 'Max'
  }
}`,...r.parameters?.docs?.source},description:{story:`Optional separator ticks can be shown below or above the slider.
Value labels are rendered above the thumbs.`,...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'With Trail Input',
  args: {
    ...DefaultParams.args,
    label: 'Label',
    supportingText: 'Support text'
  },
  render: args => html\`
    <gds-slider
      .label=\${args.label}
      .supportingText=\${args.supportingText}
      width="400px"
      step="40"
      max="400"
      .size=\${args.size}
      .value=\${args.value}
      lead-label="Min"
      trail-label="Max"
      show-trail-input
      show-ticks
      hide-bound-editors
    >
      <span slot="extended-supporting-text">\${EXTENDED_SUPPORTING_TEXT}</span>
    </gds-slider>
  \`
}`,...l.parameters?.docs?.source},description:{story:"@experimental — Set `show-trail-input` to render a synced numeric input in the header trail.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Sliders support Green Core form validation via validators.",...i.parameters?.docs?.description}}};const N=["SingleValue","Range","Stepper","TicksAndValueLabel","WithTrailInput","Validation"];export{n as Range,t as SingleValue,s as Stepper,r as TicksAndValueLabel,i as Validation,l as WithTrailInput,N as __namedExportsOrder,I as default};
