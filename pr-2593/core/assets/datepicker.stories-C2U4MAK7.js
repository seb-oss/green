import{x as t}from"./iframe-Bnz-Jxbc.js";import{a as r}from"./argTableProps-BpOl5AD1.js";import"./datepicker-NKptarQk.js";import"./datepicker.component-BVOS5rY1.js";import"./localized-decorator-DBBG6ALZ.js";import"./query-async-BxLkzc2X.js";import"./ref-D3eVjTnp.js";import"./dropdown.component-7b-9o7C9.js";import"./icon.component-DzKqo047.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DYrfWRw2.js";import"./form-control-header.component-Hs13BJJ1.js";import"./badge.component-BMV2PXuv.js";import"./flex.component-BX2aWvL_.js";import"./triangle-exclamation.component-BYplp8ec.js";import"./card.component-oFDBdUNx.js";import"./unwrap-slots-DHU5JNq1.js";import"./checkmark.component-DREVrtC7.js";import"./rbcb-toggle.template-k-Y9TGzj.js";import"./chevron-bottom.component-D8z6TKNW.js";import"./cross-small.component-CIqhkPC_.js";import"./popover.component-CkWt0eVK.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-B0I0kPCC.js";import"./calender-add.component-BnL5C9EZ.js";import"./chevron-left.component-DvisSPe_.js";import"./chevron-right.component-DIoRwTst.js";const W={title:"Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
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
