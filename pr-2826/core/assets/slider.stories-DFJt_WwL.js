import{b as a}from"./iframe-BEqwETOt.js";import{n as f,e as y}from"./ref-Bgve9S_V.js";import"./slider-D_YgroND.js";import"./card-BsdW3Ktu.js";import"./flex-Da19YWBZ.js";import"./text-DcgQpWMr.js";import{a as T}from"./argTableProps-DRHkUpas.js";import"./preload-helper-PPVm8Dsz.js";import"./slider.component-bT9wN7z7.js";import"./localized-decorator-B3uh7JF3.js";import"./form-control-header.component-C4WUhmoz.js";import"./badge.component-Mxjvv0j5.js";import"./flex.component-B5PYJirN.js";import"./triangle-exclamation.component-CIFgmVKL.js";import"./icon.component-DhmHkUyq.js";import"./card.component-7xvJtknc.js";import"./circle-info.component-HpwW3SG_.js";import"./form-control-host.style-CQvSsohQ.js";import"./text.component-CMY3S0mP.js";import"./default-typography.styles-8ymaJaxA.js";const M={title:"Components/Slider",component:"gds-slider",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...T("gds-slider"),size:{options:["large","small"],control:{type:"select"}}}},g="Extended supporting text. Use this area for additional context and guidance.",S=e=>a`
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
      <span slot="extended-supporting-text">${g}</span>
    </gds-slider>
  </gds-card>
`,n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},render:S,args:{label:"Label",supportingText:"Support text",min:0,max:100,step:1,value:32,size:"large",readonly:!1,bubble:!0}},s={...n,name:"Slider"},r={...n,name:"Size",render:e=>a`
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
  `,args:{...n.args,min:0,max:100,step:20,value:50,bubble:!0,ticks:!0,size:"large"}},d={...n,name:"Range",args:{...n.args,range:!0,value:24,endValue:68}},l={...n,name:"Stepper",args:{...n.args,label:"Amount stepper",supportingText:"Moves in increments of 5",min:0,max:100,step:5,value:50}},i={...n,name:"Ticks",render:e=>a`
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
        <span slot="extended-supporting-text">${g}</span>
      </gds-slider>
    </gds-card>
  `,args:{...n.args,label:"Amount with ticks",supportingText:"Ticks enabled and shown below the line",min:0,max:100,step:20,value:75,bubble:!0,ticks:!0}},o={...n,name:"Display",render:e=>a`
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
          .label=${"No textbox"}
          .supportingText=${"Textbox hidden"}
          width="300px"
          .min=${e.min}
          .max=${e.max}
          .step=${e.step}
          .value=${e.value}
          ?readonly=${e.readonly}
          hide-textbox
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
  `,args:{...n.args,value:50,readonly:!1}},u={...n,name:"Validation",args:{...n.args,label:"Transfer amount",supportingText:"Choose a value between 20 and 80",min:0,max:100,step:1,value:10},render:()=>a`
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
              .validator=${{validate:t=>{if(t.value<20||t.value>80)return[{...t.validity,valid:!1,customError:!0},"Value must be between 20 and 80."]}}}
            >
              <span slot="extended-supporting-text"
                >${g}</span
              >
            </gds-slider>
            <gds-button type="submit">Submit</gds-button>
          </gds-flex>
        </form>
      </gds-card>
    `},p={...n,name:"Events",parameters:{docs:{description:{story:`
The slider dispatches standard **input** and **change** events:

- **input**: fired continuously while dragging a thumb or typing into a textbox
- **change**: fired once a value is committed (pointer released, blur, or Enter)

\`\`\`js
slider.addEventListener('input', (e) => console.log(slider.value))
slider.addEventListener('change', (e) => console.log(slider.value))
\`\`\`

This example renders the slider with \`hide-textbox\`, so the status readout below
is driven purely by listening to events on the element, not by reading any
built-in textbox.
        `}}},render:()=>{const e=y();let t=0,m=0;const c=()=>{const x=e.value;if(!x)return;const b=document.querySelector("#events-value-status"),v=document.querySelector("#events-count-status");b&&(b.textContent=`Value: ${x.value}`),v&&(v.textContent=`input: ${t}, change: ${m}`)},$=()=>{t++,c()},h=()=>{m++,c()};return a`
      <gds-flex flex-direction="column" gap="l">
        <gds-card variant="neutral-02" padding="m" border-radius="m" outline>
          <gds-flex flex-direction="column" gap="xs">
            <gds-text font="heading-s">Event Monitor</gds-text>
            <gds-text
              id="events-value-status"
              font="body-m-regular"
              color="primary"
            >
              Value: 50
            </gds-text>
            <gds-text
              id="events-count-status"
              font="detail-s-book"
              color="neutral-01"
            >
              input: 0, change: 0
            </gds-text>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined" padding="xl">
          <gds-slider
            ${f(e)}
            label="Amount"
            width="400px"
            min="0"
            max="100"
            value="50"
            hide-textbox
            @input=${$}
            @change=${h}
          ></gds-slider>
        </gds-card>
      </gds-flex>
    `}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Slider'
}`,...s.parameters?.docs?.source},description:{story:`A slider lets users pick values from a bounded numeric range.

Use single-value mode for selecting one point, and range mode when users need
both a minimum and maximum value.`,...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    ticks: true,
    size: 'large'
  }
}`,...r.parameters?.docs?.source},description:{story:'Use `size="small"` to reduce the slider to match the small input variant.',...r.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Range',
  args: {
    ...DefaultParams.args,
    range: true,
    value: 24,
    endValue: 68
  }
}`,...d.parameters?.docs?.source},description:{story:"Set `range` to render a dual-thumb slider.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"Use `step` to constrain the slider to fixed increments.",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:`Optional separator ticks can be shown below or above the slider.
Value labels are rendered above the thumbs.`,...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          .label=\${'No textbox'}
          .supportingText=\${'Textbox hidden'}
          width="300px"
          .min=\${args.min}
          .max=\${args.max}
          .step=\${args.step}
          .value=\${args.value}
          ?readonly=\${args.readonly}
          hide-textbox
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
}`,...o.parameters?.docs?.source},description:{story:"Toggle `bubble` to show/hide the drag bubble, and `hide-textbox`\nto remove the value textboxes from both sides.",...o.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Sliders support Green Core form validation via validators.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Events',
  parameters: {
    docs: {
      description: {
        story: \`
The slider dispatches standard **input** and **change** events:

- **input**: fired continuously while dragging a thumb or typing into a textbox
- **change**: fired once a value is committed (pointer released, blur, or Enter)

\\\`\\\`\\\`js
slider.addEventListener('input', (e) => console.log(slider.value))
slider.addEventListener('change', (e) => console.log(slider.value))
\\\`\\\`\\\`

This example renders the slider with \\\`hide-textbox\\\`, so the status readout below
is driven purely by listening to events on the element, not by reading any
built-in textbox.
        \`
      }
    }
  },
  render: () => {
    const sliderRef = createRef<GdsSlider>();
    let inputCount = 0;
    let changeCount = 0;
    const updateStatus = () => {
      const slider = sliderRef.value;
      if (!slider) return;
      const valueEl = document.querySelector('#events-value-status');
      const countEl = document.querySelector('#events-count-status');
      if (valueEl) valueEl.textContent = \`Value: \${slider.value}\`;
      if (countEl) {
        countEl.textContent = \`input: \${inputCount}, change: \${changeCount}\`;
      }
    };
    const handleInput = () => {
      inputCount++;
      updateStatus();
    };
    const handleChange = () => {
      changeCount++;
      updateStatus();
    };
    return html\`
      <gds-flex flex-direction="column" gap="l">
        <gds-card variant="neutral-02" padding="m" border-radius="m" outline>
          <gds-flex flex-direction="column" gap="xs">
            <gds-text font="heading-s">Event Monitor</gds-text>
            <gds-text
              id="events-value-status"
              font="body-m-regular"
              color="primary"
            >
              Value: 50
            </gds-text>
            <gds-text
              id="events-count-status"
              font="detail-s-book"
              color="neutral-01"
            >
              input: 0, change: 0
            </gds-text>
          </gds-flex>
        </gds-card>

        <gds-card variant="neutral-02-outlined" padding="xl">
          <gds-slider
            \${ref(sliderRef)}
            label="Amount"
            width="400px"
            min="0"
            max="100"
            value="50"
            hide-textbox
            @input=\${handleInput}
            @change=\${handleChange}
          ></gds-slider>
        </gds-card>
      </gds-flex>
    \`;
  }
}`,...p.parameters?.docs?.source},description:{story:"The slider dispatches standard `input` and `change` events, just like a native\nrange input. `input` fires continuously while dragging/typing, `change` fires\nonce the value is committed (pointer released, blur, or Enter).\n\nThis example listens to both events and updates a status readout that lives\noutside the slider entirely, without reading the built-in min/max textboxes.",...p.parameters?.docs?.description}}};const j=["SingleValue","Size","Range","Stepper","Ticks","Display","Validation","Events"];export{o as Display,p as Events,d as Range,s as SingleValue,r as Size,l as Stepper,i as Ticks,u as Validation,j as __namedExportsOrder,M as default};
