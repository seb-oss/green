import{b as s}from"./iframe-B0gVlyf4.js";import{a as c}from"./argTableProps-Dx1uLdBh.js";import{G as g}from"./calendar.component-CYFnglQe.js";import"./flex-JdGzj_d0.js";import"./dropdown-D4rcnDnF.js";import"./option-d4AE3tto.js";import"./menu-heading-Ba_Xoaxp.js";import"./text-bNIawRco.js";import"./preload-helper-PPVm8Dsz.js";import"./localized-decorator-CO-5zfTC.js";import"./flex.component-D5bOJKzU.js";import"./dropdown.component-DU64s-rF.js";import"./query-async-DfGVLvN_.js";import"./icon.component-Eo3nRNdN.js";import"./floating-ui.dom-DPpwG6Py.js";import"./field-base.component-Q0PdXE8F.js";import"./form-control-header.component-DNR7Oqu5.js";import"./badge.component-Ce1RtLBB.js";import"./triangle-exclamation.component-Betk8beH.js";import"./card.component-QxFPWcz4.js";import"./circle-info.component-B_KqxWzU.js";import"./ref-cHhy_XMz.js";import"./unwrap-slots-DdNUxiUM.js";import"./checkmark.component-2q69k0Gb.js";import"./rbcb-toggle.template-B2hIkpjP.js";import"./form-control-host.style-DtQdpMtA.js";import"./chevron-bottom.component-F7KzM7gE.js";import"./cross-small.component-CTWRBHi6.js";import"./popover.component-BArYaRT2.js";import"./menu-heading.component--ue7e3e9.js";import"./text.component-OhrzxPu8.js";import"./default-typography.styles-CD8zGkYg.js";g.define();var i=Object.freeze,p=Object.defineProperty,u=(e,m)=>i(p(e,"raw",{value:i(e.slice())})),l;const H={title:"Components/Calendar",component:"gds-calendar",parameters:{layout:"centered",disabledWeekends:!0,docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/calendar)

The calendar displays a grid of selectable dates.`}}},tags:["autodocs"],argTypes:{...c("gds-calendar")}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},r={...d,args:{label:"Calendar"}},a={...d,render:e=>s`
    <gds-calendar
      label="Pick a day"
      hideDayNames="true"
      hideExtraneousDays="true"
    ></gds-calendar>
  `},t={...d,render:e=>s`
    <gds-calendar
      label="Pick a day"
      size="small"
      showWeekNumbers
    ></gds-calendar>
  `},n={...d,render:e=>s(l||(l=u([`
    <div style="width: 362px">
      <gds-flex gap="m">
        <gds-dropdown id="year" label="Year" size="small">
          <gds-option value="2025">2025</gds-option>
          <gds-option value="2026">2026</gds-option>
          <gds-option value="2027">2027</gds-option>
        </gds-dropdown>
        <gds-dropdown id="month" max-height="200" label="Month" size="small">
          <gds-option value="0">Jan</gds-option>
          <gds-option value="1">Feb</gds-option>
          <gds-option value="2">Mar</gds-option>
          <gds-option value="3">Apr</gds-option>
          <gds-option value="4">May</gds-option>
          <gds-option value="5">Jun</gds-option>
          <gds-option value="6">Jul</gds-option>
          <gds-option value="7">Aug</gds-option>
          <gds-option value="8">Sep</gds-option>
          <gds-option value="9">Oct</gds-option>
          <gds-option value="10">Nov</gds-option>
          <gds-option value="11">Dec</gds-option>
        </gds-dropdown>
      </gds-flex>
      <gds-calendar id="cal" label="Calendar"></gds-calendar>
      <div>
        Selected date:
        <span id="selected-date" style="font-weight: bold"></span>
      </div>
    </div>
    <script>
      var cal = document.getElementById('cal')
      var year = document.getElementById('year')
      var month = document.getElementById('month')

      var customizedDates = [
        {
          date: new Date('2025-08-25'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2025-08-27'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2025-08-28'),
          color: 'var(--intent-danger-background)',
          indicator: 'icon',
        },
        {
          date: new Date('2025-08-29'),
          disabled: true,
        },
        {
          date: new Date('2025-09-15'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2025-09-17'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2025-09-18'),
          color: 'var(--intent-danger-background)',
          indicator: 'icon',
        },
        {
          date: new Date('2025-09-19'),
          disabled: true,
        },
      ]

      function setYear(e) {
        cal.focusedYear = e.target.value
      }

      function setMonth(e) {
        cal.focusedMonth = e.target.value
      }

      function onCalFocusChange(e) {
        year.value = String(e.target.focusedYear)
        month.value = String(e.target.focusedMonth)
      }

      function onCalChange() {
        const selectedDate = cal.value
        document.getElementById('selected-date').innerText =
          selectedDate.toDateString()
      }

      cal.addEventListener('gds-date-focused', onCalFocusChange)
      cal.addEventListener('change', onCalChange)
      cal.customizedDates = customizedDates

      year.addEventListener('change', setYear)
      year.value = String(cal.focusedYear)

      month.addEventListener('change', setMonth)
      month.value = String(cal.focusedMonth)
    <\/script>
  `])))},o={...d,render:()=>s`
    <gds-flex flex-direction="column" gap="m">
      <gds-text id="calendar-label" tag="label">Pick a date</gds-text>
      <gds-text id="calendar-desc" font-size="detail-s">
        Use arrow keys to navigate between dates.
      </gds-text>
      <gds-calendar
        label="Calendar"
        gds-aria-labelledby="calendar-label"
        gds-aria-describedby="calendar-desc"
      ></gds-calendar>
    </gds-flex>
  `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'Calendar'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-calendar
      label="Pick a day"
      hideDayNames="true"
      hideExtraneousDays="true"
    ></gds-calendar>
  \`
}`,...a.parameters?.docs?.source},description:{story:"Use the `hideDayNames` and `hideExtraneousDays` attribute for a condenced version.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-calendar
      label="Pick a day"
      size="small"
      showWeekNumbers
    ></gds-calendar>
  \`
}`,...t.parameters?.docs?.source},description:{story:'Use the `size="small` attribute for a smaller version and `showWeekNumbers` to show\nthe week numbers on the left side.',...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <div style="width: 362px">
      <gds-flex gap="m">
        <gds-dropdown id="year" label="Year" size="small">
          <gds-option value="2025">2025</gds-option>
          <gds-option value="2026">2026</gds-option>
          <gds-option value="2027">2027</gds-option>
        </gds-dropdown>
        <gds-dropdown id="month" max-height="200" label="Month" size="small">
          <gds-option value="0">Jan</gds-option>
          <gds-option value="1">Feb</gds-option>
          <gds-option value="2">Mar</gds-option>
          <gds-option value="3">Apr</gds-option>
          <gds-option value="4">May</gds-option>
          <gds-option value="5">Jun</gds-option>
          <gds-option value="6">Jul</gds-option>
          <gds-option value="7">Aug</gds-option>
          <gds-option value="8">Sep</gds-option>
          <gds-option value="9">Oct</gds-option>
          <gds-option value="10">Nov</gds-option>
          <gds-option value="11">Dec</gds-option>
        </gds-dropdown>
      </gds-flex>
      <gds-calendar id="cal" label="Calendar"></gds-calendar>
      <div>
        Selected date:
        <span id="selected-date" style="font-weight: bold"></span>
      </div>
    </div>
    <script>
      var cal = document.getElementById('cal')
      var year = document.getElementById('year')
      var month = document.getElementById('month')

      var customizedDates = [
        {
          date: new Date('2025-08-25'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2025-08-27'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2025-08-28'),
          color: 'var(--intent-danger-background)',
          indicator: 'icon',
        },
        {
          date: new Date('2025-08-29'),
          disabled: true,
        },
        {
          date: new Date('2025-09-15'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2025-09-17'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2025-09-18'),
          color: 'var(--intent-danger-background)',
          indicator: 'icon',
        },
        {
          date: new Date('2025-09-19'),
          disabled: true,
        },
      ]

      function setYear(e) {
        cal.focusedYear = e.target.value
      }

      function setMonth(e) {
        cal.focusedMonth = e.target.value
      }

      function onCalFocusChange(e) {
        year.value = String(e.target.focusedYear)
        month.value = String(e.target.focusedMonth)
      }

      function onCalChange() {
        const selectedDate = cal.value
        document.getElementById('selected-date').innerText =
          selectedDate.toDateString()
      }

      cal.addEventListener('gds-date-focused', onCalFocusChange)
      cal.addEventListener('change', onCalChange)
      cal.customizedDates = customizedDates

      year.addEventListener('change', setYear)
      year.value = String(cal.focusedYear)

      month.addEventListener('change', setMonth)
      month.value = String(cal.focusedMonth)
    <\/script>
  \`
}`,...n.parameters?.docs?.source},description:{story:`This is an example of a simple inline datepicker using the calendar
component. It demonstrates how to control the view in the calendar,
how to react to changes and how to customize dates. It has customizedDates
which makes the grid larger to give space for the indicators.

This example is written in plain vanilla js/html, but you can adapt it to your
framework of choice.`,...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text id="calendar-label" tag="label">Pick a date</gds-text>
      <gds-text id="calendar-desc" font-size="detail-s">
        Use arrow keys to navigate between dates.
      </gds-text>
      <gds-calendar
        label="Calendar"
        gds-aria-labelledby="calendar-label"
        gds-aria-describedby="calendar-desc"
      ></gds-calendar>
    </gds-flex>
  \`
}`,...o.parameters?.docs?.source},description:{story:"Demonstrates how `gds-aria-labelledby` and `gds-aria-describedby` forward\nARIA element references to the internal `<table>` element.",...o.parameters?.docs?.description}}};const K=["Basic","Minimal","Small","Usage","ARIAForwarding"];export{o as ARIAForwarding,r as Basic,a as Minimal,t as Small,n as Usage,K as __namedExportsOrder,H as default};
