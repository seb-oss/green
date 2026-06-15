import{b as a}from"./iframe-hcAuhNpX.js";import{a as b}from"./argTableProps-1SZrAAX3.js";import"./datepicker-DhSHoRwJ.js";import"./preload-helper-PPVm8Dsz.js";import"./datepicker.component-C6ta3WtN.js";import"./localized-decorator-DXQuiBtN.js";import"./query-async-42CBLM4V.js";import"./ref-Cv035yhX.js";import"./dropdown.component-CRHAuos2.js";import"./icon.component-AG5V8fxu.js";import"./floating-ui.dom-DPpwG6Py.js";import"./form-control-host.style-CqsRp1_o.js";import"./form-control-header.component-DwcERN1G.js";import"./badge.component-CXYsqGSR.js";import"./flex.component-BEJf6KTE.js";import"./triangle-exclamation.component-Cs9AHUX3.js";import"./card.component-CoanGXlY.js";import"./circle-info.component-D3YdZL4p.js";import"./unwrap-slots-BqRrvHUY.js";import"./checkmark.component-CrJzSBWo.js";import"./rbcb-toggle.template-D7_uywQG.js";import"./chevron-bottom.component-BReuCElS.js";import"./cross-small.component-GSdz0cbz.js";import"./popover.component-CJjmCsLo.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CUV5BCG5.js";import"./calender-add.component-BKgzhWQM.js";import"./chevron-left.component-Bbwhodp0.js";import"./chevron-right.component-NgTmh6Tf.js";const G={title:"Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/datepicker)

The datepicker allows users to select a date.

The datepicker in Green Core mimics the behaviour of the native date input element as it is
implemented in Chromium browsers.

The input field shows three parts of the date: the day, the month and the year. The user can
navigate between these parts using the arrow keys. The user can also navigate between the parts
by clicking on them or tabbing. When a part has focus, it can be changed using the arrow keys or
by typing a number.

Clicking the calendar icon opens a popover with a calendar view where a date can be chosen.`}}},tags:["autodocs"],argTypes:{...b("gds-datepicker")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Pick a date",supportingText:"Supporting text",innherHTML:`
      <span slot="extended-supporting-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-icon-books slot="lead"></gds-icon-books>
      `}},u={...e},t={...e,render:r=>a`
    <gds-datepicker
      label="Supporting text"
      supporting-text="A supporting text can be added below the label"
      onchange="console.log(this.value)"
    >
    </gds-datepicker>
  `},s={...e,render:r=>a`
    <gds-datepicker label="Week numbers" show-week-numbers></gds-datepicker>
  `},n={...e,name:"Min and max dates",render:r=>a`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  `},i={...e,render:r=>a`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  `},d={...e,render:r=>a`
    <gds-datepicker
      label="A small input"
      hide-label
      size="small"
    ></gds-datepicker>
  `},g={...e,render:r=>a`
    <gds-datepicker label="Invalid date" aria-invalid="true"></gds-datepicker>
  `},o={...e,name:"Disabled",render:r=>a`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
      disabled
    ></gds-datepicker>
  `},c={...e,render:r=>a`
    <gds-datepicker label="Clearable on" clearable></gds-datepicker>
  `},p={...e,render:r=>a`
    <gds-datepicker label="Today hidden" hide-today-button></gds-datepicker>
  `},l={...e,render:r=>a`
    <gds-datepicker
      label="Label"
      supporting-text="Supporting text"
      clearable
      disabled-weekends
      show-week-numbers
    ></gds-datepicker>
  `},m={...e,name:"ARIA Forwarding",render:()=>a`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="datepicker-description">
        Select the date the transaction was made
      </div>
      <gds-datepicker
        label="Transaction date"
        gds-aria-describedby="datepicker-description"
      ></gds-datepicker>
    </gds-flex>
  `};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...DefaultParams
}`,...u.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Supporting text"
      supporting-text="A supporting text can be added below the label"
      onchange="console.log(this.value)"
    >
    </gds-datepicker>
  \`
}`,...t.parameters?.docs?.source},description:{story:"The date picker takes a `label` attribute for setting the label text, and\na `supporting-text` attribute for setting the supporting text below the label.\n\nWhen the value is changed by a user, a `change` event is fired.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Week numbers" show-week-numbers></gds-datepicker>
  \`
}`,...s.parameters?.docs?.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max dates',
  render: args => html\`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  \`
}`,...n.parameters?.docs?.source},description:{story:"Setting `min` and `max` date you can choose.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  \`
}`,...i.parameters?.docs?.source},description:{story:"Set the `disable-weekends` attribute to disable weekends (saturdays and sundays) in the calendar view.\n\nAdditionally, `disabled-dates` can be used to disable specific dates.\n\n- When set via the `disabled-dates` attribute, this should be a comma-separated list of date strings that can be parsed by the Javscript `Date()` constructor.\n- When set via the `disabledDates` property, it should be an array of Javascript `Date` objects.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A small input"
      hide-label
      size="small"
    ></gds-datepicker>
  \`
}`,...d.parameters?.docs?.source},description:{story:"The date picker has two sizes: `small` and `large`. The default size is `large`.\n\nOptionally, the label can be hidden by using the `hide-label` attribute.",...d.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Invalid date" aria-invalid="true"></gds-datepicker>
  \`
}`,...g.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Disabled',
  render: args => html\`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
      disabled
    ></gds-datepicker>
  \`
}`,...o.parameters?.docs?.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Clearable on" clearable></gds-datepicker>
  \`
}`,...c.parameters?.docs?.source},description:{story:"The selected date can be clearable by using the 'clearable` attribute (was default on before).",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Today hidden" hide-today-button></gds-datepicker>
  \`
}`,...p.parameters?.docs?.source},description:{story:"The today button can be hidden by using the `hide-today-button` attribute.",...p.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Label"
      supporting-text="Supporting text"
      clearable
      disabled-weekends
      show-week-numbers
    ></gds-datepicker>
  \`
}`,...l.parameters?.docs?.source},description:{story:"An example with things turned on.",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="datepicker-description">
        Select the date the transaction was made
      </div>
      <gds-datepicker
        label="Transaction date"
        gds-aria-describedby="datepicker-description"
      ></gds-datepicker>
    </gds-flex>
  \`
}`,...m.parameters?.docs?.source},description:{story:`In some cases it may be necessary to label or describe the datepicker using elements
outside of the component. For those cases, you can use \`gds-aria-*\` attributes
to forward ARIA attributes to the internal spinner elements. This works for
regular text attributes, and for ID association attributes. ID association is
handled internally via the ARIAMixins API, which allows DOM reference association
across shadow DOM boundaries.

The forwarding applies to all date-part spinners (day, month, year) simultaneously.

It is also possible to use regular \`aria-*\` attributes, but in that case it will
also apply to the host element (gds-datepicker), and not only the inner spinners.
Prefer \`gds-aria-*\` attributes over regular \`aria-*\` attributes to
ensure they are only applied to the internal elements.`,...m.parameters?.docs?.description}}};const H=["Basic","Usage","WeekNumbers","MinMaxDates","Disabled","InputFieldSize","Invalid","DisabledField","Clearable","Simplified","Full","AriaForwarding"];export{m as AriaForwarding,u as Basic,c as Clearable,i as Disabled,o as DisabledField,l as Full,d as InputFieldSize,g as Invalid,n as MinMaxDates,p as Simplified,t as Usage,s as WeekNumbers,H as __namedExportsOrder,G as default};
