import{b as o}from"./iframe-Bs4J-K7K.js";import"./slider-CPaRMsyM.js";import"./card-DcOEVvLj.js";import"./flex-C0fVZUtm.js";import"./text-D6FrN9m_.js";import{a as m}from"./argTableProps-DlxhLjU6.js";import"./preload-helper-PPVm8Dsz.js";import"./slider.component-BIuHuTSR.js";import"./localized-decorator-BLhXNS5k.js";import"./form-control-header.component-Bu3AdLKI.js";import"./badge.component-CRxoMTyw.js";import"./flex.component-Cw8Ck61a.js";import"./triangle-exclamation.component-BnRPyGYZ.js";import"./icon.component-DdKE5Xqv.js";import"./card.component-B6hb2rtC.js";import"./circle-info.component-BKpBmAJY.js";import"./form-control-host.style-D3YVbzCk.js";import"./text.component-8M8b2Ks5.js";import"./default-typography.styles-DdX4sO2e.js";const _={title:"Components/Slider",component:"gds-slider",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...m("gds-slider"),size:{options:["large","small"],control:{type:"select"}}}},p="Extended supporting text. Use this area for additional context and guidance.",g=e=>o`
  <gds-card variant="neutral-02-outlined" padding="xl">
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
      ?range=${e.range}
      ?readonly=${e.readonly}
      .bubble=${e.bubble}
      .ticks=${e.ticks}
    >
      <span slot="extended-supporting-text">${p}</span>
    </gds-slider>
  </gds-card>
`,a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},render:g,args:{label:"Label",supportingText:"Support text",min:0,max:100,step:1,value:32,size:"large",readonly:!1}},n={...a,name:"Slider"},s={...a,name:"Size",render:e=>o`
    <gds-flex gap="xl">
      <gds-card variant="neutral-02-outlined" padding="xl">
        <gds-slider
          .label=${"Large"}
          .supportingText=${e.supportingText}
          width="300px"
          size="large"
          .min=${e.min}
          .max=${e.max}
          .step=${e.step}
          .value=${e.value}
          .ticks=${e.ticks}
          .bubble=${e.bubble}
        ></gds-slider>
      </gds-card>
      <gds-card variant="neutral-02-outlined" padding="xl">
        <gds-slider
          .label=${"Small"}
          .supportingText=${e.supportingText}
          width="300px"
          size="small"
          .min=${e.min}
          .max=${e.max}
          .step=${e.step}
          .value=${e.value}
          .ticks=${e.ticks}
          .bubble=${e.bubble}
        ></gds-slider>
      </gds-card>
    </gds-flex>
  `,args:{...a.args,min:0,max:100,step:20,value:50,bubble:!0,ticks:!1,size:"large"}},r={...a,name:"Range",args:{...a.args,range:!0,value:24,endValue:68}},t={...a,name:"Stepper",args:{...a.args,label:"Amount stepper",supportingText:"Moves in increments of 5",min:0,max:100,step:5,value:50}},d={...a,name:"Ticks",render:e=>o`
    <gds-card variant="neutral-02-outlined" padding="xl">
      <gds-slider
        .label=${e.label}
        .supportingText=${e.supportingText}
        width="400px"
        .size=${e.size}
        .min=${e.min}
        .max=${e.max}
        .step=${e.step}
        .value=${e.value}
        .bubble=${e.bubble}
        ticks
      >
        <span slot="extended-supporting-text">${p}</span>
      </gds-slider>
    </gds-card>
  `,args:{...a.args,label:"Amount with ticks",supportingText:"Ticks enabled and shown below the line",min:0,max:100,step:20,value:75,bubble:!0,ticks:!0}},l={...a,name:"Display",render:e=>o`
    <gds-grid columns="2" gap="xl">
      <gds-card variant="neutral-02-outlined" padding="xl">
        <gds-slider
          .label=${"Bubble on"}
          .supportingText=${"Drag to see value bubble"}
          width="300px"
          .min=${e.min}
          .max=${e.max}
          .step=${e.step}
          .value=${e.value}
          ?readonly=${e.readonly}
          bubble
        ></gds-slider>
      </gds-card>
      <gds-card variant="neutral-02-outlined" padding="xl">
        <gds-slider
          .label=${"Bubble off"}
          .supportingText=${"No value bubble"}
          width="300px"
          .min=${e.min}
          .max=${e.max}
          .step=${e.step}
          .value=${e.value}
          ?readonly=${e.readonly}
          .bubble=${!1}
        ></gds-slider>
      </gds-card>
      <gds-card variant="neutral-02-outlined" padding="xl">
        <gds-slider
          .label=${"No bound editors"}
          .supportingText=${"Editors hidden"}
          width="300px"
          .min=${e.min}
          .max=${e.max}
          .step=${e.step}
          .value=${e.value}
          ?readonly=${e.readonly}
          hide-bound-editors
        ></gds-slider>
      </gds-card>
      <gds-card variant="neutral-02-outlined" padding="xl">
        <gds-slider
          .label=${"Read-only"}
          .supportingText=${"Slider and inputs are non-interactive"}
          width="300px"
          .min=${e.min}
          .max=${e.max}
          .step=${e.step}
          .value=${e.value}
          readonly
        ></gds-slider>
      </gds-card>
    </gds-grid>
  `,args:{...a.args,value:50,readonly:!1}},i={...a,name:"Validation",args:{...a.args,label:"Transfer amount",supportingText:"Choose a value between 20 and 80",min:0,max:100,step:1,value:10},render:()=>o`
      <gds-card variant="neutral-02-outlined" padding="xl">
        <form method="dialog">
          <gds-flex flex-direction="column" align-items="flex-start" gap="m">
            <gds-slider
              width="400px"
              label="Transfer amount"
              supporting-text="Choose a value between 20 and 80"
              min="0"
              max="100"
              value="10"
              .validator=${{validate:u=>{if(u.value<20||u.value>80)return[{...u.validity,valid:!1,customError:!0},"Value must be between 20 and 80."]}}}
            >
              <span slot="extended-supporting-text"
                >${p}</span
              >
            </gds-slider>
            <gds-button type="submit">Submit</gds-button>
          </gds-flex>
        </form>
      </gds-card>
    `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slider'
}`,...n.parameters?.docs?.source},description:{story:`A slider lets users pick values from a bounded numeric range.

Use single-value mode for selecting one point, and range mode when users need
both a minimum and maximum value.`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: args => html\`
    <gds-flex gap="xl">
      <gds-card variant="neutral-02-outlined" padding="xl">
        <gds-slider
          .label=\${'Large'}
          .supportingText=\${args.supportingText}
          width="300px"
          size="large"
          .min=\${args.min}
          .max=\${args.max}
          .step=\${args.step}
          .value=\${args.value}
          .ticks=\${args.ticks}
          .bubble=\${args.bubble}
        ></gds-slider>
      </gds-card>
      <gds-card variant="neutral-02-outlined" padding="xl">
        <gds-slider
          .label=\${'Small'}
          .supportingText=\${args.supportingText}
          width="300px"
          size="small"
          .min=\${args.min}
          .max=\${args.max}
          .step=\${args.step}
          .value=\${args.value}
          .ticks=\${args.ticks}
          .bubble=\${args.bubble}
        ></gds-slider>
      </gds-card>
    </gds-flex>
  \`,
  args: {
    ...DefaultParams.args,
    min: 0,
    max: 100,
    step: 20,
    value: 50,
    bubble: true,
    ticks: false,
    size: 'large'
  }
}`,...s.parameters?.docs?.source},description:{story:'Use `size="small"` to reduce the slider to match the small input variant.',...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Range',
  args: {
    ...DefaultParams.args,
    range: true,
    value: 24,
    endValue: 68
  }
}`,...r.parameters?.docs?.source},description:{story:"Set `range` to render a dual-thumb slider.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Use `step` to constrain the slider to fixed increments.",...t.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Ticks',
  render: args => html\`
    <gds-card variant="neutral-02-outlined" padding="xl">
      <gds-slider
        .label=\${args.label}
        .supportingText=\${args.supportingText}
        width="400px"
        .size=\${args.size}
        .min=\${args.min}
        .max=\${args.max}
        .step=\${args.step}
        .value=\${args.value}
        .bubble=\${args.bubble}
        ticks
      >
        <span slot="extended-supporting-text">\${EXTENDED_SUPPORTING_TEXT}</span>
      </gds-slider>
    </gds-card>
  \`,
  args: {
    ...DefaultParams.args,
    label: 'Amount with ticks',
    supportingText: 'Ticks enabled and shown below the line',
    min: 0,
    max: 100,
    step: 20,
    value: 75,
    bubble: true,
    ticks: true
  }
}`,...d.parameters?.docs?.source},description:{story:`Optional separator ticks can be shown below or above the slider.
Value labels are rendered above the thumbs.`,...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Display',
  render: args => html\`
    <gds-grid columns="2" gap="xl">
      <gds-card variant="neutral-02-outlined" padding="xl">
        <gds-slider
          .label=\${'Bubble on'}
          .supportingText=\${'Drag to see value bubble'}
          width="300px"
          .min=\${args.min}
          .max=\${args.max}
          .step=\${args.step}
          .value=\${args.value}
          ?readonly=\${args.readonly}
          bubble
        ></gds-slider>
      </gds-card>
      <gds-card variant="neutral-02-outlined" padding="xl">
        <gds-slider
          .label=\${'Bubble off'}
          .supportingText=\${'No value bubble'}
          width="300px"
          .min=\${args.min}
          .max=\${args.max}
          .step=\${args.step}
          .value=\${args.value}
          ?readonly=\${args.readonly}
          .bubble=\${false}
        ></gds-slider>
      </gds-card>
      <gds-card variant="neutral-02-outlined" padding="xl">
        <gds-slider
          .label=\${'No bound editors'}
          .supportingText=\${'Editors hidden'}
          width="300px"
          .min=\${args.min}
          .max=\${args.max}
          .step=\${args.step}
          .value=\${args.value}
          ?readonly=\${args.readonly}
          hide-bound-editors
        ></gds-slider>
      </gds-card>
      <gds-card variant="neutral-02-outlined" padding="xl">
        <gds-slider
          .label=\${'Read-only'}
          .supportingText=\${'Slider and inputs are non-interactive'}
          width="300px"
          .min=\${args.min}
          .max=\${args.max}
          .step=\${args.step}
          .value=\${args.value}
          readonly
        ></gds-slider>
      </gds-card>
    </gds-grid>
  \`,
  args: {
    ...DefaultParams.args,
    value: 50,
    readonly: false
  }
}`,...l.parameters?.docs?.source},description:{story:"Toggle `bubble` to show/hide the drag bubble, and `hide-bound-editors`\nto remove the value editors from both sides.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  args: {
    ...DefaultParams.args,
    label: 'Transfer amount',
    supportingText: 'Choose a value between 20 and 80',
    min: 0,
    max: 100,
    step: 1,
    value: 10
  },
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
      <gds-card variant="neutral-02-outlined" padding="xl">
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
      </gds-card>
    \`;
  }
}`,...i.parameters?.docs?.source},description:{story:"Sliders support Green Core form validation via validators.",...i.parameters?.docs?.description}}};const A=["SingleValue","Size","Range","Stepper","TicksAndValueLabel","Display","Validation"];export{l as Display,r as Range,n as SingleValue,s as Size,t as Stepper,d as TicksAndValueLabel,i as Validation,A as __namedExportsOrder,_ as default};
