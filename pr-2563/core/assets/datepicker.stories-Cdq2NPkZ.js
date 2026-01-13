import{x as t}from"./iframe-CNFifxUN.js";import{a as r}from"./argTableProps-tFz4Mgr1.js";import"./datepicker-BaIVuTcp.js";import"./datepicker.component-Bb0RTxr8.js";import"./localized-decorator-BTZE8_rm.js";import"./query-async-ZzK6jajH.js";import"./ref-DyaRmeqr.js";import"./dropdown.component-CulF4p4h.js";import"./icon.component-6pI-3bW1.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DW2IikIC.js";import"./form-control-header.component-CJCKnW9_.js";import"./badge.component-SI4AbSa3.js";import"./flex.component-CEqnAFZd.js";import"./triangle-exclamation.component-DA-hRdSI.js";import"./card.component-BNTM-i5u.js";import"./unwrap-slots-C7UIoqXm.js";import"./checkmark.component-CnpLOGd9.js";import"./rbcb-toggle.template-DoT1fU3f.js";import"./chevron-bottom.component-DM9tr6_C.js";import"./cross-small.component-nsCVYnC9.js";import"./popover.component-BdcIQFHp.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DbaQ-4bJ.js";import"./calender-add.component-QjGzX4JU.js";import"./chevron-left.component-CX_ABIFH.js";import"./chevron-right.component-ZCEfGNEy.js";const W={title:"Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
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
