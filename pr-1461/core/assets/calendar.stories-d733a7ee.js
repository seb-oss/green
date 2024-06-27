import{x as v}from"./lit-element-71e04f06.js";import"./calendar-2bbc9dcd.js";import"./dropdown-d824abff.js";import"./menu-heading-d64f9c3e.js";import{r as h}from"./transitional-styles-3cdfb2b1.js";import"./class-map-4ef1884f.js";import"./directive-12249aa5.js";import"./when-cf7256a5.js";import"./gds-element-54cd6e2a.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./lit-localize-87611c26.js";import"./watch-c4961afe.js";import"./query-async-1ff18261.js";import"./icon-eb3cac34.js";import"./if-defined-e4b5fcf9.js";import"./constrain-slots-08d8606c.js";import"./popover-4bf0f571.js";import"./cross-small-7364f9f6.js";import"./form-control-5f945716.js";import"./directive-helpers-9aabd8ef.js";var o=Object.freeze,f=Object.defineProperty,y=(t,m)=>o(f(t,"raw",{value:o(m||t.slice())})),a;h();const j={title:"Components/Calendar",component:"gds-calendar",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/calendar)

The calendar component is a visual representation of a calendar that allows users to select a date.`}}},tags:["autodocs"]},u={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},n={...u},e={...u,render:t=>v(a||(a=y([`
    <div style="width: 320px">
      <gds-grid gap="m">
        <gds-dropdown id="year">
          <gds-option value="2024">2024</gds-option>
          <gds-option value="2025">2025</gds-option>
          <gds-option value="2026">2026</gds-option>
        </gds-dropdown>
        <gds-dropdown id="month" max-height="200">
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
      </gds-grid>
      <gds-calendar id="cal"></gds-calendar>
      <div>
        Selected date:
        <span id="selected-date" style="font-weight: bold"></span>
      </div>
    </div>
    <script>
      const cal = document.getElementById('cal')
      const year = document.getElementById('year')
      const month = document.getElementById('month')

      const customizedDates = [
        {
          date: new Date('2024-06-04'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2024-06-06'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2024-07-06'),
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
  `])))};var d,s,r;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var i,c,g,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <div style="width: 320px">
      <gds-grid gap="m">
        <gds-dropdown id="year">
          <gds-option value="2024">2024</gds-option>
          <gds-option value="2025">2025</gds-option>
          <gds-option value="2026">2026</gds-option>
        </gds-dropdown>
        <gds-dropdown id="month" max-height="200">
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
      </gds-grid>
      <gds-calendar id="cal"></gds-calendar>
      <div>
        Selected date:
        <span id="selected-date" style="font-weight: bold"></span>
      </div>
    </div>
    <script>
      const cal = document.getElementById('cal')
      const year = document.getElementById('year')
      const month = document.getElementById('month')

      const customizedDates = [
        {
          date: new Date('2024-06-04'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2024-06-06'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2024-07-06'),
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
}`,...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source},description:{story:`This is an example of a simple inline datepicker using the calendar
component. It demonstrates how to control the view in the calendar,
how to react to changes and how to customize dates.

This example is written in plain vanilla js/html, but you can adapt it to your
framework of choice.`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.description}}};const N=["Basic","Usage"];export{n as Basic,e as Usage,N as __namedExportsOrder,j as default};
