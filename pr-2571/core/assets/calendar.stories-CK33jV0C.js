import{x as t}from"./iframe-OlsBgo_r.js";import{a as d}from"./argTableProps-gvuQkRNa.js";import{G as r}from"./calendar.component-DofbFdvV.js";import"./flex-BytvadFX.js";import"./dropdown-SThHeE-z.js";import"./option-Bhv2Jg47.js";import"./menu-heading-CUFhy77H.js";import"./localized-decorator-C6p1g9cH.js";import"./flex.component-Dh4lRNXB.js";import"./dropdown.component-qSvMQCIf.js";import"./query-async-sMJztgIg.js";import"./icon.component-DeTz_6Cg.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DWksh68R.js";import"./form-control-header.component-BMpy16-Q.js";import"./badge.component-C9ENFnkv.js";import"./triangle-exclamation.component-B5JkVR_x.js";import"./card.component-B6VtkSNZ.js";import"./ref-DvYhXRe2.js";import"./unwrap-slots-CMWqG-V8.js";import"./checkmark.component-DcompkXR.js";import"./rbcb-toggle.template-DholKlBY.js";import"./chevron-bottom.component-CUD5kGRa.js";import"./cross-small.component-BXwdOc5M.js";import"./popover.component-DKa76RI0.js";import"./menu-heading.component-CKrl2Juk.js";r.define();var o=Object.freeze,s=Object.defineProperty,i=(e,l)=>o(s(e,"raw",{value:o(e.slice())})),n;const O={title:"Components/Calendar",component:"gds-calendar",parameters:{layout:"centered",disabledWeekends:!0,docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/calendar)

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
