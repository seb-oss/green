import{x as t}from"./iframe-C1rAZNES.js";import{a as d}from"./argTableProps-Dwm9i1L6.js";import{G as r}from"./calendar.component-CZp2xeCP.js";import"./flex-CYwYziz2.js";import"./dropdown-DNe2s4Fv.js";import"./option-BPgKt0qo.js";import"./menu-heading-ClhlFLY8.js";import"./localized-decorator-BVfD1jcZ.js";import"./flex.component-DUe94c28.js";import"./dropdown.component-BOGhuodQ.js";import"./query-async-BghkAqFq.js";import"./icon.component-CK0E683U.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-Bewqvn5c.js";import"./form-control-header.component-DVm7RJtM.js";import"./badge.component-C9MFCsK5.js";import"./triangle-exclamation.component-DXfASxC-.js";import"./card.component-CAtRNgbP.js";import"./ref-CdPiRzS2.js";import"./unwrap-slots-CCXIszC4.js";import"./checkmark.component-Cvq98IYU.js";import"./rbcb-toggle.template-CCGYFIE4.js";import"./chevron-bottom.component-AwGobeo9.js";import"./cross-small.component-D3q0fDXK.js";import"./popover.component-oEMiOJtE.js";import"./menu-heading.component-CvHsUcl-.js";r.define();var o=Object.freeze,s=Object.defineProperty,i=(e,l)=>o(s(e,"raw",{value:o(e.slice())})),n;const O={title:"Components/Calendar",component:"gds-calendar",parameters:{layout:"centered",disabledWeekends:!0,docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/calendar)

The calendar displays a grid of selectable dates.`}}},tags:["autodocs"],argTypes:{...d("gds-calendar")}},a={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},T={...a,args:{label:"Calendar"}},J={...a,render:e=>t`
    <gds-calendar
      label="Pick a day"
      hideDayNames="true"
      hideExtraneousDays="true"
    ></gds-calendar>
  `},N={...a,render:e=>t`
    <gds-calendar
      label="Pick a day"
      size="small"
      showWeekNumbers
    ></gds-calendar>
  `},j={...a,render:e=>t(n||(n=i([`
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
  `])))},A=["Basic","Minimal","Small","Usage"];export{T as Basic,J as Minimal,N as Small,j as Usage,A as __namedExportsOrder,O as default};
