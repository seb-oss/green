import{b as s}from"./iframe-BfjVQBhS.js";import{a as B}from"./argTableProps-Qs7z-sFD.js";import{G as F}from"./calendar.component-Cy1K8UKb.js";import"./flex-CsQQXgbH.js";import"./dropdown-NRdvC807.js";import"./option-__cg0Lor.js";import"./menu-heading-C-PqzWQq.js";import"./text-iN91Xt23.js";import"./preload-helper-Dp1pzeXC.js";import"./localized-decorator-BcwMFhzh.js";import"./flex.component-C3_-0YKv.js";import"./dropdown.component-DtaaeMzu.js";import"./query-async-DoOeR5E9.js";import"./icon.component-3GLbOB5p.js";import"./floating-ui.dom-Ceeo7fpE.js";import"./form-control-host.style-BU-hyWGr.js";import"./form-control-header.component-CLuwxSq3.js";import"./badge.component-CR-q8Pvq.js";import"./triangle-exclamation.component-wXhuPvu0.js";import"./card.component-S9m9p97C.js";import"./ref-BddKMkQt.js";import"./unwrap-slots-BmZuA9MO.js";import"./checkmark.component-CWbIvAVU.js";import"./rbcb-toggle.template-DMyWnMmw.js";import"./chevron-bottom.component-BvRY5pS_.js";import"./cross-small.component-LD7gsb2L.js";import"./popover.component-D5XlO4V2.js";import"./menu-heading.component-Bz3lvvpe.js";import"./text.component-Cp7HIdtR.js";import"./default-typography.styles-DgBJUsWr.js";F.define();var i=Object.freeze,_=Object.defineProperty,L=(e,N)=>i(_(e,"raw",{value:i(e.slice())})),l;const me={title:"Components/Calendar",component:"gds-calendar",parameters:{layout:"centered",disabledWeekends:!0,docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/calendar)

The calendar displays a grid of selectable dates.`}}},tags:["autodocs"],argTypes:{...B("gds-calendar")}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},r={...d,args:{label:"Calendar"}},a={...d,render:e=>s`
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
  `},n={...d,render:e=>s(l||(l=L([`
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
  `};var c,g,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'Calendar'
  }
}`,...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,m,v,h,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-calendar
      label="Pick a day"
      hideDayNames="true"
      hideExtraneousDays="true"
    ></gds-calendar>
  \`
}`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source},description:{story:"Use the `hideDayNames` and `hideExtraneousDays` attribute for a condenced version.",...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var f,y,w,D,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-calendar
      label="Pick a day"
      size="small"
      showWeekNumbers
    ></gds-calendar>
  \`
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:'Use the `size="small` attribute for a smaller version and `showWeekNumbers` to show\nthe week numbers on the left side.',...(x=(D=t.parameters)==null?void 0:D.docs)==null?void 0:x.description}}};var k,C,S,E,z;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(C=n.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:`This is an example of a simple inline datepicker using the calendar
component. It demonstrates how to control the view in the calendar,
how to react to changes and how to customize dates. It has customizedDates
which makes the grid larger to give space for the indicators.

This example is written in plain vanilla js/html, but you can adapt it to your
framework of choice.`,...(z=(E=n.parameters)==null?void 0:E.docs)==null?void 0:z.description}}};var M,P,I,Y,A;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(P=o.parameters)==null?void 0:P.docs)==null?void 0:I.source},description:{story:"Demonstrates how `gds-aria-labelledby` and `gds-aria-describedby` forward\nARIA element references to the internal `<table>` element.",...(A=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:A.description}}};const ve=["Basic","Minimal","Small","Usage","ARIAForwarding"];export{o as ARIAForwarding,r as Basic,a as Minimal,t as Small,n as Usage,ve as __namedExportsOrder,me as default};
