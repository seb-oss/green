import{x as t}from"./iframe-VzA9xZxk.js";import{a as r}from"./argTableProps-DrA3g6xw.js";import"./datepicker-YI2VecyB.js";import"./datepicker.component-DWkHI58o.js";import"./localized-decorator-Bq_NlrVe.js";import"./query-async-DoRZOF0v.js";import"./ref-BkwuNWEz.js";import"./calendar.component-BL1pzM7D.js";import"./dropdown.component-BzvgkjPH.js";import"./icon.component-CXqjLzyD.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-7av_CiQB.js";import"./form-control-header.component-DODRUrI7.js";import"./badge.component-DQdvDzIv.js";import"./flex.component-CtitCc60.js";import"./triangle-exclamation.component-Ddpw_ePI.js";import"./card.component-Dqs7PlX8.js";import"./unwrap-slots-1CP3EXP1.js";import"./checkmark.component-_9H2j-q4.js";import"./rbcb-toggle.template-Don4HNpP.js";import"./chevron-bottom.component-w5y5RvcS.js";import"./cross-small.component-DvVj-bX9.js";import"./popover.component-Bg6sQVdr.js";import"./attribute-converters-CdI0trPX.js";import"./calender-add.component-BM3Zz2qI.js";import"./chevron-left.component-DbQJlm-r.js";import"./chevron-right.component-DeeXiXIX.js";const W={title:"Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/datepicker)

The datepicker allows users to select a date.

The datepicker in Green Core mimics the behaviour of the native date input element as it is
implemented in Chromium browsers.

The input field shows three parts of the date: the day, the month and the year. The user can
navigate between these parts using the arrow keys. The user can also navigate between the parts
by clicking on them or tabbing. When a part has focus, it can be changed using the arrow keys or
by typing a number.

Clicking the calendar icon opens a popover with a calendar view where a date can be chosen.`}}},tags:["autodocs"],argTypes:{...r("gds-datepicker")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Pick a date",supportingText:"Supporting text",innherHTML:`
      <span slot="extended-supporting-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-icon-books slot="lead"></gds-icon-books>
      `}},z={...e},L={...e,render:a=>t`
    <gds-datepicker
      label="Supporting text"
      supporting-text="A supporting text can be added below the label"
      onchange="console.log(this.value)"
    >
    </gds-datepicker>
  `},P={...e,render:a=>t`
    <gds-datepicker label="Week numbers" show-week-numbers></gds-datepicker>
  `},A={...e,name:"Min and max dates",render:a=>t`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  `},B={...e,render:a=>t`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  `},N={...e,render:a=>t`
    <gds-datepicker
      label="A small input"
      hide-label
      size="small"
    ></gds-datepicker>
  `},_={...e,render:a=>t`
    <gds-datepicker label="Invalid date" aria-invalid="true"></gds-datepicker>
  `},q={...e,name:"Disabled",render:a=>t`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
      disabled
    ></gds-datepicker>
  `},E={...e,render:a=>t`
    <gds-datepicker label="Clearable on" clearable></gds-datepicker>
  `},G={...e,render:a=>t`
    <gds-datepicker label="Today hidden" hide-today-button></gds-datepicker>
  `},H={...e,render:a=>t`
    <gds-datepicker
      label="Label"
      supporting-text="Supporting text"
      clearable
      disabled-weekends
      show-week-numbers
    ></gds-datepicker>
  `},O=["Basic","Usage","WeekNumbers","MinMaxDates","Disabled","InputFieldSize","Invalid","DisabledField","Clearable","Simplified","Full"];export{z as Basic,E as Clearable,B as Disabled,q as DisabledField,H as Full,N as InputFieldSize,_ as Invalid,A as MinMaxDates,G as Simplified,L as Usage,P as WeekNumbers,O as __namedExportsOrder,W as default};
